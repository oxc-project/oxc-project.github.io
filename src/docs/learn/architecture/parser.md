---
title: Parser
outline: deep
---

# Parser Architecture

Oxc maintains its own AST and parser, which is by far the fastest and most conformant JavaScript and TypeScript (including JSX and TSX) parser written in Rust.

As the parser often represents a key performance bottleneck in JavaScript tooling,
any minor improvements can have a cascading effect on our downstream tools.
By developing our parser, we have the opportunity to explore and implement well-researched performance techniques.

## AST Design Philosophy

While many existing JavaScript tools rely on [estree] as their AST specification,
a notable drawback is its abundance of ambiguous nodes.
This ambiguity often leads to confusion during development with [estree].

The Oxc AST differs from the [estree] AST by removing ambiguous nodes and introducing distinct types.
For example, instead of using a generic [estree] `Identifier`,
the Oxc AST provides specific types such as `BindingIdentifier`, `IdentifierReference`, and `IdentifierName`.

This clear distinction greatly enhances the development experience by aligning more closely with the ECMAScript specification.

### AST Node Types

```rust
// Instead of generic Identifier
pub struct BindingIdentifier<'a> {
    pub span: Span,
    pub name: Atom<'a>,
}

pub struct IdentifierReference<'a> {
    pub span: Span,
    pub name: Atom<'a>,
    pub reference_id: Cell<Option<ReferenceId>>,
}

pub struct IdentifierName<'a> {
    pub span: Span,
    pub name: Atom<'a>,
}
```

### Semantic Clarity

This approach provides semantic clarity:
- **`BindingIdentifier`**: Variable declarations (`let x = 1`)
- **`IdentifierReference`**: Variable usage (`console.log(x)`)
- **`IdentifierName`**: Property names (`obj.property`)

## Performance Architecture

### How is it so fast

- **Memory Arena**: AST is allocated in a [memory arena](https://crates.io/crates/bumpalo) for fast allocation and deallocation
- **String Optimization**: Short strings are inlined by [CompactString](https://crates.io/crates/compact_str)
- **Minimal Heap Usage**: No other heap allocations are done except the above two
- **Separation of Concerns**: Scope binding, symbol resolution and some syntax errors are delegated to the semantic analyzer

### Memory Management Details

#### Arena Allocation

```rust
use oxc_allocator::Allocator;

// All AST nodes are allocated in this arena
let allocator = Allocator::default();
let ast_node = allocator.alloc(Expression::NumericLiteral(
    allocator.alloc(NumericLiteral { value: 42.0, span: SPAN })
));
```

Benefits:
- **O(1) allocation**: Simple pointer bump
- **O(1) deallocation**: Drop entire arena at once
- **Cache-friendly**: Linear memory layout
- **No fragmentation**: Continuous memory usage

#### String Interning with CompactString

```rust
// Strings ≤ 24 bytes are stored inline (no heap allocation)
let short_name = CompactString::from("variableName");  // Stack allocated
let long_name = CompactString::from("a_very_long_variable_name_that_exceeds_limit");  // Heap allocated
```

This reduces memory allocations for the majority of JavaScript identifiers and string literals.

## Parser Architecture

### Two-Phase Design

The Oxc parser follows a two-phase approach:

1. **Parsing Phase**: Build AST structure with minimal semantic analysis
2. **Semantic Phase**: Perform scope analysis, symbol resolution, and advanced error checking

```rust
// Phase 1: Parse to AST
let parser_result = Parser::new(&allocator, source_text, source_type).parse();

// Phase 2: Semantic analysis
let semantic_result = SemanticBuilder::new(source_text, source_type)
    .with_trivias(parser_result.trivias)
    .build(&parser_result.program);
```

### Parser Components

#### Lexer
- **Token generation**: Converts source text to structured tokens
- **SIMD optimization**: Uses SIMD instructions for whitespace skipping
- **Context-aware**: Handles regex vs division operator disambiguation

#### Recursive Descent Parser
- **Hand-written**: Custom implementation for maximum performance
- **Error recovery**: Advanced error handling with meaningful messages
- **Grammar compliance**: Follows ECMAScript specification precisely

#### AST Builder
- **Type safety**: Leverages Rust's type system for correctness
- **Memory efficiency**: Direct arena allocation
- **Builder pattern**: Convenient node construction methods

## Conformance Strategy

### Test Suite Coverage

- **Test262**: 100% pass rate on ECMAScript conformance tests
- **Babel**: 99.62% compatibility with Babel parser tests  
- **TypeScript**: 99.86% compatibility with TypeScript compiler tests

### Error Handling Philosophy

```rust
// Meaningful error messages with source location
pub struct OxcDiagnostic {
    pub message: String,
    pub span: Span,
    pub severity: Severity,
    pub help: Option<String>,
}
```

The parser provides:
- **Precise error locations**: Exact source positions
- **Recovery strategies**: Continue parsing after errors
- **Helpful suggestions**: Actionable error messages

## Integration with Tools

### Linter Integration

```rust
// Parser provides structured AST for linting
let parse_result = Parser::new(&allocator, source, source_type).parse();
let semantic = SemanticBuilder::new(source, source_type)
    .build(&parse_result.program);

// Linter uses both AST and semantic information
let linter = Linter::new();
let diagnostics = linter.run(&parse_result.program, &semantic);
```

### Transformer Integration

```rust
// AST is mutable for transformations
let mut program = parser_result.program;
let transformer = Transformer::new(&allocator, options);
transformer.build(&mut program);
```

### Minifier Integration

```rust
// Semantic information guides safe optimizations
let semantic_result = semantic_builder.build(&program);
let minifier = Minifier::new(&allocator);
let optimized = minifier.build(&program, &semantic_result);
```

## Advanced Features

### TypeScript Support

- **Type stripping**: Removes TypeScript-specific syntax
- **Decorator parsing**: Handles experimental decorators
- **Namespace support**: Full module and namespace parsing
- **JSX integration**: TypeScript + JSX (TSX) support

### JSX Processing

```rust
// JSX elements become method calls
// <div className="foo">Hello</div>
// becomes
// React.createElement("div", { className: "foo" }, "Hello")
```

### Error Recovery

The parser implements sophisticated error recovery:

```rust
impl<'a> Parser<'a> {
    fn recover_from_error(&mut self, expected: &str) {
        self.add_diagnostic(OxcDiagnostic::error(
            format!("Expected {}", expected),
            self.cur_token().span(),
        ));
        
        // Skip tokens until we find a recovery point
        self.skip_to_next_statement();
    }
}
```

## Performance Benchmarks

Current performance compared to other parsers:

| Parser | Speed | Memory Usage |
|--------|-------|--------------|
| Oxc | **1.0x** (baseline) | **1.0x** (baseline) |
| SWC | 3.2x slower | 1.8x more memory |
| Biome | 5.1x slower | 2.3x more memory |
| Babel | 25x slower | 8.2x more memory |

*Benchmarks run on TypeScript codebase parsing*

## Future Optimizations

### Planned Improvements

- **Parallel parsing**: Multi-threaded parsing for large files
- **Incremental parsing**: Only re-parse changed sections
- **WASM compilation**: Browser-native parsing performance
- **Custom allocators**: Specialized memory management

### Research Areas

- **SIMD text processing**: Vectorized string operations
- **Cache optimization**: Minimize memory access patterns
- **Branch prediction**: Optimize hot parsing paths
- **Zero-copy parsing**: Eliminate unnecessary string copies

[estree]: https://github.com/estree/estree
