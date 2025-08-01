---
title: Transformer
outline: deep
---

# Transformer

The Oxc transformer is responsible for converting higher versions of ECMAScript and TypeScript to lower versions that can run in older browsers and environments.

### Repository Structure

```
crates/oxc_transformer/
├── src/
│   ├── lib.rs                    # Main transformer interface
│   ├── transformer.rs            # Core transformation logic
│   ├── typescript/               # TypeScript transformations
│   ├── jsx/                      # JSX transformations
│   ├── es2015/                   # ES2015+ transformations
│   ├── isolated_declarations/    # .d.ts generation
│   └── helpers/                  # Utility functions
├── tests/                        # Integration tests
├── examples/                     # Usage examples
└── benches/                      # Performance benchmarks
```
