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

- [`parser_test262.snap`](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/snapshots/parser_test262.snap)
- [`parser_babel.snap`](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/snapshots/parser_babel.snap)
- [`parser_typescript.snap`](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/snapshots/parser_typescript.snap)
