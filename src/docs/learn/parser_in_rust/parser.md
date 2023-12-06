---
id: parser
title: Parser
---

# Parser

The parser we are going to construct is called a [recursive descent parser](https://en.wikipedia.org/wiki/Recursive_descent_parser),
it is the manual process of going down the grammar and building up the AST.

The parser starts simple, it holds the source code, the lexer, and the current token consumed from the lexer.

```rust
pub struct Parser<'a> {
    /// Source Code
    source: &'a str,

    lexer: Lexer<'a>,

    /// Current Token consumed from the lexer
    cur_token: Token,

    /// The end range of the previous token
    prev_token_end: usize,
}

impl<'a> Parser<'a> {
    pub fn new(source: &'a str) -> Self {
        Self {
            source,
            lexer: Lexer::new(source),
            cur_token: Token::default(),
        }
    }

    pub fn parse(&mut self) -> Program<'a> {
        Ok(Program {
            node: Node {
                start: 0,
                end: self.source.len(),
            }
            body: vec![]
        })
    }
}
```

## Helper functions

The current token `cur_token: Token` holds the current token returned from the lexer.
We'll make the parser code cleaner by adding some helper functions for navigating and inspecting this token.

```rust
impl<'a> Parser<'a> {
    fn start_node(&self) -> Node {
        let token = self.cur_token();
        Node::new(token.start, 0)
    }

    fn finish_node(&self, node: Node) -> Node {
        Node::new(node.start, self.prev_token_end)
    }

    fn cur_token(&self) -> &Token {
        &self.cur_token
    }

    fn cur_kind(&self) -> Kind {
        self.cur_token.kind
    }

    /// Checks if the current index has token `Kind`
    fn at(&self, kind: Kind) -> bool {
        self.cur_kind() == kind
    }

    /// Advance if we are at `Kind`
    fn bump(&mut self, kind: Kind) {
        if self.at(kind) {
            self.advance();
        }
    }

    /// Advance any token
    fn bump_any(&mut self) {
        self.advance();
    }

    /// Advance and return true if we are at `Kind`, return false otherwise
    fn eat(&mut self, kind: Kind) -> bool {
        if self.at(kind) {
            self.advance();
            return true;
        }
        false
    }

    /// Move to the next token
    fn advance(&mut self) {
        let token = self.lexer.next_token();
        self.prev_token_end = self.cur_token.end;
        self.cur_token = token;
    }
}
```

## Parse Functions

The `DebuggerStatement` is the most simple statement to parse, so let's try and parse it and return a valid program

```rust
impl<'a> Parser<'a> {
    pub fn parse(&mut self) -> Program {
        let stmt = self.parse_debugger_statement();
        let body = vec![stmt];
        Program {
            node: Node {
                start: 0,
                end: self.source.len(),
            }
            body,
        }
    }

    fn parse_debugger_statement(&mut self) -> Statement {
        let node = self.start_node();
        // NOTE: the token returned from the lexer is `Kind::Debugger`, we'll fix this later.
        self.bump_any();
        Statement::DebuggerStatement {
            node: self.finish_node(node),
        }
    }
}
```

All the other parse functions build on these primitive helper functions,
for example parsing the `while` statement in swc:

```rust reference
https://github.com/swc-project/swc/blob/554b459e26b24202f66c3c58a110b3f26bbd13cd/crates/swc_ecma_parser/src/parser/stmt.rs#L952-L970
```

## Parsing Expressions

The grammar for expressions is deeply nested and recursive,
which may cause stack overflow on long expressions (for example in [this TypeScript test](https://github.com/microsoft/TypeScript/blob/main/tests/cases/compiler/binderBinaryExpressionStressJs.ts)),

To avoid recursion, we can use a technique called "Pratt Parsing". A more in-depth tutorial can be found [here](https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html), written by the author of Rust-Analyzer.
And a Rust version here in [Rome](https://github.com/rome/tools/blob/5a059c0413baf1d54436ac0c149a829f0dfd1f4d/crates/rome_js_parser/src/syntax/expr.rs#L442).

## Lists

There are lots of places where we need to parse a list separated by a punctuation, for example `[a, b, c]` or `{a, b, c}`.

The code for parsing lists are all similar, we can use the [template method pattern](https://en.wikipedia.org/wiki/Template_method_pattern)
to avoid duplication by using traits.

```rust reference
https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/parser/parse_lists.rs#L131-L157
```

This pattern can also prevent us from infinite loops, specifically `progress.assert_progressing(p);`.

Implementation details can then be provided for different lists, for example:

```rust reference
https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/syntax/expr.rs#L1543-L1580
```

## Cover Grammar

Detailed in [cover grammar](/docs/learn/ecmascript/grammar.html#cover-grammar), there are times when we need to convert an `Expression` to a `BindingIdentifier`. Dynamic languages such as JavaScript can simply rewrite the node type:

```javascript reference
https://github.com/acornjs/acorn/blob/11735729c4ebe590e406f952059813f250a4cbd1/acorn/src/lval.js#L11-L26
```

But in Rust, we need to do a struct to struct transformation. A nice and clean way to do this is to use an trait.

```rust
pub trait CoverGrammar<'a, T>: Sized {
    fn cover(value: T, p: &mut Parser<'a>) -> Result<Self>;
}
```

The trait accepts `T` as the input type, and `Self` and the output type, so we can define the following:

```rust
impl<'a> CoverGrammar<'a, Expression<'a>> for BindingPattern<'a> {
    fn cover(expr: Expression<'a>, p: &mut Parser<'a>) -> Result<Self> {
        match expr {
            Expression::Identifier(ident) => Self::cover(ident.unbox(), p),
            Expression::ObjectExpression(expr) => Self::cover(expr.unbox(), p),
            Expression::ArrayExpression(expr) => Self::cover(expr.unbox(), p),
            _ => Err(()),
        }
    }
}

impl<'a> CoverGrammar<'a, ObjectExpression<'a>> for BindingPattern<'a> {
    fn cover(obj_expr: ObjectExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {
        ...
        BindingIdentifier::ObjectPattern(ObjectPattern { .. })
    }
}

impl<'a> CoverGrammar<'a, ArrayExpression<'a>> for BindingPattern<'a> {
    fn cover(expr: ArrayExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {
        ...
        BindingIdentifier::ArrayPattern(ArrayPattern { .. })
    }
}
```

Then for anywhere we need to convert an `Expression` to `BindingPattern`,
call `BindingPattern::cover(expression)`.

---

# TypeScript

So you are done with JavaScript and you want to challenge parsing TypeScript?
The bad news is that there is no specification,
but the good news is that the TypeScript parser is in [a single file](https://github.com/microsoft/TypeScript/blob/main/src/compiler/parser.ts) 🙃.

## JSX vs TSX

For the following code,

```javascript
let foo = <string> bar;
```

It is a syntax error if this is `tsx` (Unterminated JSX),
but it is correct `VariableDeclaration` with `TSTypeAssertion`.

## Lookahead

In certain places, the parser need to lookahead and peek more than one token to determine the correct grammar.

### TSIndexSignature

For example, to parse `TSIndexSignature`, consider the following two cases:

```typescript
type A = { readonly [a: number]: string }
           ^__________________________^ TSIndexSignature

type B = { [a]: string }
           ^_________^ TSPropertySignature
```

For `type A` on the first `{`, we need to peek 5 tokens (`readonly`, `[`, `a`, `:` and `number`) in order to make sure
it is a `TSIndexSignature` and not a `TSPropertySignature`.

To make this possible and efficient, the lexer requires a buffer for storing multiple tokens.

### Arrow Expressions

Discussed in [cover grammar](/docs/learn/ecmascript/grammar.html#cover-grammar),
we need to convert from `Expression`s to `BindingPattern`s when the `=>` token is found after a SequenceExpression.

But this approach does not work for TypeScript as each item inside the `()` can have TypeScript syntax, there are just too many cases to cover, for example:

```typescript
<x>a, b as c, d!;
(a?: b = {} as c!) => {};
```

It is recommended to study the TypeScript source code for this specific case. The relevant code are:

```typescript
function tryParseParenthesizedArrowFunctionExpression(allowReturnTypeInArrowFunction: boolean): Expression | undefined {
  const triState = isParenthesizedArrowFunctionExpression();
  if (triState === Tristate.False) {
    // It's definitely not a parenthesized arrow function expression.
    return undefined;
  }

  // If we definitely have an arrow function, then we can just parse one, not requiring a
  // following => or { token. Otherwise, we *might* have an arrow function.  Try to parse
  // it out, but don't allow any ambiguity, and return 'undefined' if this could be an
  // expression instead.
  return triState === Tristate.True
    ? parseParenthesizedArrowFunctionExpression(/*allowAmbiguity*/ true, /*allowReturnTypeInArrowFunction*/ true)
    : tryParse(() => parsePossibleParenthesizedArrowFunctionExpression(allowReturnTypeInArrowFunction));
}

//  True        -> We definitely expect a parenthesized arrow function here.
//  False       -> There *cannot* be a parenthesized arrow function here.
//  Unknown     -> There *might* be a parenthesized arrow function here.
//                 Speculatively look ahead to be sure, and rollback if not.
function isParenthesizedArrowFunctionExpression(): Tristate {
  if (
    token() === SyntaxKind.OpenParenToken ||
    token() === SyntaxKind.LessThanToken ||
    token() === SyntaxKind.AsyncKeyword
  ) {
    return lookAhead(isParenthesizedArrowFunctionExpressionWorker);
  }

  if (token() === SyntaxKind.EqualsGreaterThanToken) {
    // ERROR RECOVERY TWEAK:
    // If we see a standalone => try to parse it as an arrow function expression as that's
    // likely what the user intended to write.
    return Tristate.True;
  }
  // Definitely not a parenthesized arrow function.
  return Tristate.False;
}
```

In summary, the TypeScript parser uses a combination of lookahead (fast path) and backtracking to parse arrow functions.
