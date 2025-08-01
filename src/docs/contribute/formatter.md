---
title: Formatter
outline: deep
---

# Formatter (Prettier)

We are currently porting Prettier to Oxc to create a high-performance, Prettier-compatible formatter.

## Architecture Overview

The Oxc formatter is built around the same core concepts as Prettier but with significant performance optimizations:

- **Document Model**: Uses Prettier's document IR (Intermediate Representation)
- **Pretty Printing**: Implements Wadler's pretty printing algorithm
- **AST Integration**: Leverages Oxc's fast parser for optimal performance

## Development Setup

### Prerequisites

- Rust toolchain (latest stable)
- Node.js and npm (for testing against Prettier)

### Building the Formatter

```bash
# Clone the repository
git clone https://github.com/oxc-project/oxc
cd oxc

# Build the formatter
cargo build -p oxc_formatter

# Run formatter tests
cargo test -p oxc_formatter
```

### Testing Framework

We maintain comprehensive test coverage to ensure Prettier compatibility:

```bash
# Run all formatter tests
just test-formatter

# Run specific test categories
cargo test -p oxc_formatter -- javascript
cargo test -p oxc_formatter -- typescript
cargo test -p oxc_formatter -- jsx
```

## Implementation Details

### Document Builders

The formatter uses document builders similar to Prettier:

```rust
pub enum Doc {
    Str(&'static str),
    String(String),
    Array(Vec<Doc>),
    Indent(Box<Doc>),
    Group(Box<Doc>),
    Line,
    SoftLine,
    HardLine,
    // ... other document types
}
```

### Formatting Process

1. **Parse**: Use Oxc parser to generate AST
2. **Build**: Convert AST to document IR
3. **Print**: Apply pretty printing algorithm
4. **Output**: Generate formatted string

### Key Components

- **`oxc_formatter`**: Core formatting logic
- **`oxc_formatter_js`**: JavaScript-specific formatting rules
- **`oxc_formatter_ts`**: TypeScript-specific formatting rules
- **`oxc_formatter_jsx`**: JSX/TSX formatting rules

## Contributing Guidelines

### Adding New Features

1. **Write Tests First**: Add test cases that demonstrate the desired formatting
2. **Implement Logic**: Add formatting logic to appropriate modules
3. **Verify Compatibility**: Ensure output matches Prettier exactly
4. **Performance Test**: Benchmark changes for performance impact

### Code Style

- Follow Rust naming conventions
- Add comprehensive documentation
- Use `#[inline]` for performance-critical functions
- Minimize allocations in hot paths

### Test Categories

- **Conformance Tests**: Verify identical output to Prettier
- **Performance Tests**: Ensure formatting speed improvements
- **Edge Case Tests**: Handle malformed or unusual code
- **Integration Tests**: Test with real-world codebases

## Performance Considerations

### Optimization Strategies

- **Memory Arena**: AST allocated in bump allocator
- **String Interning**: Reuse common strings
- **Lazy Evaluation**: Defer expensive computations
- **SIMD**: Use SIMD instructions where applicable

### Benchmarking

We maintain benchmarks against Prettier and other formatters:

```bash
# Run performance benchmarks
cargo bench --bench formatter

# Compare with Prettier
just bench-formatter-prettier
```

## Current Challenges

### Technical Challenges

1. **Comment Handling**: Preserving comment placement and formatting
2. **JavaScript Quirks**: Handling edge cases in JavaScript syntax
3. **Performance vs Compatibility**: Balancing speed with exact Prettier output
4. **Memory Management**: Efficient handling of large files

### Missing Features

- [ ] Plugin system compatibility
- [ ] Configuration file support
- [ ] Editor integrations
- [ ] CLI tool
- [ ] Language server protocol

## Getting Involved

### Ways to Contribute

1. **Test Coverage**: Add more test cases from real-world code
2. **Performance Optimization**: Profile and optimize hot paths
3. **Language Support**: Improve TypeScript and JSX handling
4. **Documentation**: Improve code documentation and guides
5. **Tooling**: Enhance development and testing tools

### Communication Channels

- **GitHub Issues**: [Formatter issues](https://github.com/oxc-project/oxc/labels/C-formatter)
- **Discord**: Join our [Discord server](https://discord.gg/9uXCAwqQZW)
- **Weekly Sync**: Formatter team meetings (check Discord for schedule)

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Write tests for your changes
4. Implement the functionality
5. Ensure all tests pass
6. Submit a pull request

For detailed contribution guidelines, see our [main contributing guide](../introduction.md).
