---
title: Formatter
outline: deep
---

# Formatter (oxfmt)

We are currently porting Prettier and Biome Formatter to Oxc to create a high-performance, Prettier-compatible formatter.

## Architecture Overview

The Oxc formatter is built around the same core concepts as Prettier but with significant performance optimizations:

- **Document Model**: Uses Prettier and Biome's document IR (Intermediate Representation)
- **Pretty Printing**: Implements Wadler's pretty printing algorithm
- **AST Integration**: Leverages Oxc's fast parser for optimal performance

## Performance Considerations

### Optimization Strategies

- **Memory Arena**: AST allocated in bump allocator
- **String Interning**: Reuse common strings
- **Lazy Evaluation**: Defer expensive computations

## Current Challenges

### Technical Challenges

1. **Comment Handling**: Preserving comment placement and formatting
2. **JavaScript Quirks**: Handling edge cases in JavaScript syntax
3. **Performance vs Compatibility**: Balancing speed with exact Prettier output
4. **Memory Management**: Efficient handling of large files

### Missing Features

- [ ] Plugin system compatibility
- [x] Configuration file support
- [ ] Editor integrations
- [x] CLI tool
- [x] Language server protocol
