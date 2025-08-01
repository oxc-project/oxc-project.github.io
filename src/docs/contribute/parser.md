---
title: Parser
outline: deep
---

# Parser

The Oxc parser is designed to be the fastest and most conformant JavaScript and TypeScript parser available. Contributing to the parser requires understanding both the implementation details and the extensive test infrastructure.

## Architecture Overview

The parser follows a traditional compiler frontend architecture:

```
Source Text → Lexer → Tokens → Parser → AST
```

### Key Components

- **Lexer**: Tokenizes source text into structured tokens
- **Parser**: Recursive descent parser that builds the AST
- **AST**: Memory-efficient abstract syntax tree
- **Error Recovery**: Advanced error handling and recovery
- **Semantic Analysis**: Symbol resolution and scope management

### Design Goals

We aim to be the fastest Rust-based ready-for-production parser with:

- **Speed**: 3x faster than SWC, 5x faster than Biome
- **Conformance**: 100% Test262 compliance, 99%+ Babel/TypeScript compatibility
- **Memory Efficiency**: Arena-based allocation, minimal heap usage
- **Error Quality**: Helpful error messages with recovery

## Development Workflow

### Setting Up

```bash
# Clone and build
git clone https://github.com/oxc-project/oxc
cd oxc
cargo build -p oxc_parser

# Run parser tests
cargo test -p oxc_parser

# Run conformance tests
just c  # or `just coverage`
```

### Project Structure

```
crates/oxc_parser/
├── src/
│   ├── lib.rs              # Public API
│   ├── lexer/              # Tokenization
│   ├── parser/             # Parsing logic
│   ├── cursor.rs           # Token stream management
│   └── diagnostics.rs      # Error handling
├── tests/                  # Unit tests
└── examples/               # Usage examples
```

### Core Parser Files

- **`parser/mod.rs`**: Main parser entry point
- **`parser/statement.rs`**: Statement parsing
- **`parser/expression.rs`**: Expression parsing
- **`parser/typescript.rs`**: TypeScript-specific parsing
- **`parser/jsx.rs`**: JSX parsing logic

## Conformance Testing

### Running Conformance Tests

```bash
just c
```

This runs conformance test suites using the runner in [tasks/coverage](https://github.com/oxc-project/oxc/tree/main/tasks/coverage):

### Test262 - ECMAScript Conformance

JavaScript has the [ECMAScript Test Suite](https://github.com/tc39/test262) called Test262.
The goal of Test262 is to provide test material that covers every observable behavior specified in the specification.

Parser conformance uses the [parse phase tests](https://github.com/tc39/test262/blob/main/INTERPRETING.md#negative).

**Current Status**: `43765/43765 (100.00%)`

### Babel Parser Tests

When new language features are added to JavaScript, Babel implements them first.
Babel has comprehensive [parser tests](https://github.com/babel/babel/tree/main/packages/babel-parser/test) for cutting-edge features.

**Current Status**: `2093/2101 (99.62%)`

### TypeScript Conformance

The TypeScript conformance tests can be found [here](https://github.com/microsoft/TypeScript/tree/main/tests/cases/conformance).

**Current Status**: `6470/6479 (99.86%)`

### Viewing Results

Test results are stored in snapshot files for tracking changes:

- [`parser_test262.snap`](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/parser_test262.snap)
- [`parser_babel.snap`](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/parser_babel.snap) 
- [`parser_typescript.snap`](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/parser_typescript.snap)

## Contributing to Parser

### Adding Language Features

1. **Study the Specification**: Understand the ECMAScript or TypeScript specification
2. **Write Tests**: Add test cases covering the feature
3. **Implement Lexer Changes**: Add new tokens if needed
4. **Implement Parser Logic**: Add parsing rules
5. **Update AST**: Modify AST types if required
6. **Run Conformance**: Ensure no regressions

### Parser Implementation Example

Adding a new statement type:

```rust
// 1. Add to AST (if needed)
#[ast(visit)]
pub struct MyStatement<'a> {
    pub span: Span,
    pub name: Atom<'a>,
    pub body: Statement<'a>,
}

// 2. Add to Statement enum
pub enum Statement<'a> {
    // ... existing variants
    MyStatement(Box<'a, MyStatement<'a>>),
}

// 3. Implement parsing logic
impl<'a> Parser<'a> {
    fn parse_my_statement(&mut self) -> Result<Statement<'a>> {
        let span = self.start_span();
        self.expect(Kind::MyKeyword)?;
        let name = self.parse_identifier_name()?;
        let body = self.parse_statement()?;
        
        Ok(Statement::MyStatement(
            self.ast.alloc(MyStatement {
                span: self.end_span(span),
                name,
                body,
            })
        ))
    }
}
```

### Error Handling

The parser uses sophisticated error recovery:

```rust
// Graceful error handling
impl<'a> Parser<'a> {
    fn parse_with_recovery<T>(&mut self, parse_fn: impl Fn(&mut Self) -> Result<T>) -> Option<T> {
        match parse_fn(self) {
            Ok(result) => Some(result),
            Err(diagnostic) => {
                self.error(diagnostic);
                self.recover_to_next_statement();
                None
            }
        }
    }
}
```

### Performance Considerations

#### Memory Management

```rust
// Use arena allocation for AST nodes
let node = self.ast.alloc(Expression::BinaryExpression(
    self.ast.alloc(BinaryExpression {
        span,
        left,
        operator,
        right,
    })
));
```

#### Token Stream Optimization

```rust
// Efficient token consumption
impl<'a> Parser<'a> {
    #[inline]
    fn eat(&mut self, kind: Kind) -> bool {
        if self.at(kind) {
            self.advance();
            true
        } else {
            false
        }
    }
}
```

### Testing Guidelines

#### Unit Tests

```rust
#[test]
fn test_my_feature() {
    let source = "my_keyword foo { return 42; }";
    let result = parse(source);
    
    assert!(result.errors.is_empty());
    assert!(matches!(
        result.program.body[0],
        Statement::MyStatement(_)
    ));
}
```

#### Conformance Tests

Add test cases to appropriate conformance suites:

```javascript
// Add to Test262 style test
/* description: My new language feature */
/* expected: no error */
my_keyword foo {
    return 42;
}
```

#### Error Tests

```rust
#[test]
fn test_my_feature_error() {
    let source = "my_keyword { return 42; }";  // Missing name
    let result = parse(source);
    
    assert!(!result.errors.is_empty());
    assert_eq!(result.errors[0].kind, DiagnosticKind::ExpectedIdentifier);
}
```

### Advanced Topics

#### Precedence Parsing

For expression parsing, we use precedence climbing:

```rust
fn parse_binary_expression(&mut self, precedence: u8) -> Result<Expression<'a>> {
    let mut left = self.parse_unary_expression()?;
    
    while let Some(op) = self.cur_token().as_binary_operator() {
        let op_precedence = op.precedence();
        if op_precedence <= precedence {
            break;
        }
        
        self.advance(); // consume operator
        let right = self.parse_binary_expression(op_precedence)?;
        
        left = self.ast.expression_binary_expression(
            self.end_span(span),
            left,
            op,
            right,
        );
    }
    
    Ok(left)
}
```

#### TypeScript Integration

TypeScript parsing is integrated throughout:

```rust
fn parse_variable_declaration(&mut self) -> Result<VariableDeclaration<'a>> {
    let binding = self.parse_binding_pattern()?;
    
    // TypeScript type annotation
    let type_annotation = if self.ts_enabled() && self.at(Kind::Colon) {
        Some(self.parse_ts_type_annotation()?)
    } else {
        None
    };
    
    // ... rest of parsing
}
```

#### AST Builder Integration

Use the AST builder for consistent node creation:

```rust
impl<'a> Parser<'a> {
    fn create_binary_expression(
        &mut self,
        span: Span,
        left: Expression<'a>,
        operator: BinaryOperator,
        right: Expression<'a>,
    ) -> Expression<'a> {
        self.ast.expression_binary_expression(span, left, operator, right)
    }
}
```

## Performance Optimization

### Profiling

Use built-in benchmarks to measure performance:

```bash
# Run parser benchmarks
cargo bench --bench parser

# Profile with specific files
cargo run --bin oxc_parser --release -- --benchmark file.js
```

### Common Optimizations

1. **Minimize Allocations**: Reuse buffers and avoid unnecessary clones
2. **Efficient Token Matching**: Use fast token kind comparisons
3. **String Interning**: Use `Atom<'a>` for identifiers
4. **Branch Prediction**: Structure conditionals for common cases first

### Memory Usage

Monitor memory usage during parsing:

```rust
use oxc_allocator::Allocator;

let allocator = Allocator::default();
let initial_memory = allocator.len();

let result = Parser::new(&allocator, source, source_type).parse();

let memory_used = allocator.len() - initial_memory;
println!("Parsed {} using {} bytes", source.len(), memory_used);
```

## Debugging

### Parser State

```rust
impl<'a> Parser<'a> {
    fn debug_current_state(&self) {
        println!(
            "Current token: {:?} at position {}",
            self.cur_token(),
            self.cur_token().start
        );
    }
}
```

### AST Inspection

```rust
// Pretty print AST for debugging
println!("{:#?}", program);

// Or use custom formatting
use oxc_ast::ast::*;
let visitor = DebugVisitor::new();
visitor.visit_program(&program);
```

### Common Pitfalls

1. **Infinite Loops**: Always ensure progress in parsing loops
2. **Memory Leaks**: Don't store arena references beyond arena lifetime
3. **Error Recovery**: Ensure parser can continue after errors
4. **Token Synchronization**: Keep token stream in sync with parsing state

## Getting Help

- **GitHub Issues**: [Parser-related issues](https://github.com/oxc-project/oxc/labels/C-parser)
- **Discord**: Join our [community](https://discord.gg/9uXCAwqQZW)
- **Code Reviews**: Submit PRs for feedback and guidance
