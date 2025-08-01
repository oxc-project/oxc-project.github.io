---
title: Minifier
outline: deep
---

# Minifier

JavaScript minification plays a crucial role in optimizing website performance as it reduces the amount of data sent to users,
resulting in faster page loads.
This holds tremendous economic value, particularly for e-commerce websites, where every second can equate to millions of dollars.

However, existing minifiers typically require a trade-off between compression quality and speed.
You have to choose between the slowest for the best compression or the fastest for less compression.
But what if we could develop a faster minifier without compromising on compression?

## Project Goals

We are actively working on a prototype that aims to achieve this goal,
by porting all test cases from well-known minifiers such as [google-closure-compiler], [terser], [esbuild], and [tdewolff-minify].

Preliminary results indicate that we are on track to achieve our objectives.
With the Oxc minifier, you can expect faster minification times without sacrificing compression quality.

### Target Performance

- **Speed**: 10x faster than Terser, competitive with esbuild
- **Compression**: Match or exceed Terser's compression ratio
- **Correctness**: Pass all major minifier test suites

## Architecture Overview

### Design Principles

The Oxc minifier is built around several key principles:

1. **Semantic-Aware**: Uses semantic analysis to enable safe optimizations
2. **Incremental**: Designed for incremental compilation workflows  
3. **Configurable**: Supports various optimization levels and targets
4. **Correct**: Prioritizes correctness over aggressive optimization

### Core Components

```rust
// High-level minifier architecture
pub struct Minifier<'a> {
    allocator: &'a Allocator,
    options: MinifyOptions,
    mangler: Option<Mangler>,
    compressor: Compressor<'a>,
}

pub struct MinifyOptions {
    pub mangle: bool,
    pub compress: CompressOptions,
    pub keep_fnames: bool,
    pub keep_classnames: bool,
}
```

## Current Status

### Implemented Features

- ✅ **Dead Code Elimination**: Remove unreachable code
- ✅ **Constant Folding**: Evaluate constant expressions
- ✅ **Tree Shaking**: Remove unused exports (basic)
- ✅ **Variable Merging**: Merge variable declarations
- ✅ **Statement Merging**: Combine compatible statements

### In Development

- 🚧 **Name Mangling**: Shorten variable and function names
- 🚧 **Control Flow Optimization**: Simplify control structures
- 🚧 **Function Inlining**: Inline small functions
- 🚧 **Advanced Tree Shaking**: Cross-module optimization

### Planned Features

- ⏳ **Compression Levels**: Multiple optimization levels
- ⏳ **Source Maps**: Preserve debugging information
- ⏳ **Plugin System**: Custom optimization passes
- ⏳ **Bundle Analysis**: Generate optimization reports

## Development Setup

### Prerequisites

```bash
# Clone the repository
git clone https://github.com/oxc-project/oxc
cd oxc

# Build the minifier
cargo build -p oxc_minifier

# Run minifier tests
cargo test -p oxc_minifier
```

### Project Structure

```
crates/oxc_minifier/
├── src/
│   ├── lib.rs              # Public API
│   ├── minifier.rs         # Main minifier logic
│   ├── compressor/         # Compression optimizations
│   ├── mangler/            # Name mangling
│   ├── ast_util/           # AST manipulation utilities
│   └── options.rs          # Configuration options
├── tests/                  # Test suite
├── examples/               # Usage examples
└── benches/                # Performance benchmarks
```

## Contributing

### Getting Started

1. **Choose a Feature**: Pick from the roadmap or suggest new optimizations
2. **Write Tests**: Start with test cases demonstrating the optimization
3. **Implement Logic**: Add the optimization logic to appropriate modules
4. **Benchmark**: Measure performance impact
5. **Submit PR**: Include tests, benchmarks, and documentation

### Test-Driven Development

We follow a test-driven approach with comprehensive test suites:

```rust
#[test]
fn test_dead_code_elimination() {
    let input = r#"
        function foo() {
            return 42;
            console.log("unreachable"); // Should be removed
        }
    "#;
    
    let expected = r#"
        function foo() {
            return 42;
        }
    "#;
    
    assert_minify(input, expected);
}
```

### Conformance Testing

We maintain compatibility with existing minifiers:

```bash
# Run conformance tests against other minifiers
cargo test --test conformance

# Test against specific minifier
cargo test --test terser_compat
cargo test --test esbuild_compat
```

### Optimization Categories

#### 1. Statement-Level Optimizations

```javascript
// Before
if (true) {
    console.log("hello");
}

// After  
console.log("hello");
```

#### 2. Expression-Level Optimizations

```javascript
// Before
const x = 1 + 2 * 3;

// After
const x = 7;
```

#### 3. Control Flow Optimizations

```javascript
// Before
if (condition) {
    return a;
} else {
    return b;
}

// After
return condition ? a : b;
```

#### 4. Dead Code Elimination

```javascript
// Before
function unused() { return 42; }
function main() { return 1; }

// After
function main() { return 1; }
```

## Advanced Topics

### Semantic Analysis Integration

The minifier leverages Oxc's semantic analysis for safe optimizations:

```rust
impl<'a> Minifier<'a> {
    fn can_inline_function(&self, func: &Function, call_site: &CallExpression) -> bool {
        // Use semantic information to determine if inlining is safe
        let symbol = self.semantic.symbols().get_symbol(func.symbol_id);
        
        // Check for side effects, recursion, etc.
        !symbol.has_side_effects() && !self.is_recursive(func)
    }
}
```

### Custom Optimization Passes

```rust
pub trait OptimizationPass<'a> {
    fn name(&self) -> &'static str;
    fn run(&mut self, program: &mut Program<'a>, ctx: &mut MinifyContext<'a>);
}

pub struct ConstantFoldingPass;

impl<'a> OptimizationPass<'a> for ConstantFoldingPass {
    fn name(&self) -> &'static str {
        "constant-folding"
    }
    
    fn run(&mut self, program: &mut Program<'a>, ctx: &mut MinifyContext<'a>) {
        // Implementation
    }
}
```

### Performance Optimization

Key strategies for maintaining performance:

1. **Minimal AST Traversals**: Combine multiple optimizations in single passes
2. **Efficient Data Structures**: Use arena allocation and compact representations
3. **Early Termination**: Skip optimizations when no benefit is possible
4. **Parallel Processing**: Run independent optimizations concurrently

## Benchmarking

### Performance Metrics

We track several key metrics:

- **Compression Ratio**: Output size vs input size
- **Minification Speed**: Time to process per KB of input
- **Memory Usage**: Peak memory consumption
- **Correctness**: Test suite pass rate

### Benchmark Suite

```bash
# Run all benchmarks
cargo bench --bench minifier

# Benchmark specific optimization
cargo bench --bench constant_folding

# Compare with other minifiers
just bench-minifier-comparison
```

### Optimization Examples

#### Before Minification
```javascript
function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.active === true) {
            total = total + item.price;
        }
    }
    return total;
}

const UNUSED_CONSTANT = 42;
const result = calculateTotal([
    { active: true, price: 10 },
    { active: false, price: 20 }
]);
```

#### After Minification
```javascript
function a(b){let c=0;for(let d=0;d<b.length;d++){const e=b[d];e.active&&(c+=e.price)}return c}const f=a([{active:!0,price:10},{active:!1,price:20}]);
```

## Testing Strategy

### Unit Tests

```rust
#[test]
fn test_boolean_optimization() {
    test_minify("x === true", "x");
    test_minify("x !== false", "x");
    test_minify("!!x", "!!x"); // Keep double negation for boolean coercion
}
```

### Integration Tests

```rust
#[test]
fn test_full_program_minification() {
    let input = include_str!("fixtures/large_program.js");
    let result = minify(input, MinifyOptions::default());
    
    assert!(result.code.len() < input.len() * 0.7); // At least 30% compression
    assert!(result.errors.is_empty());
}
```

### Regression Tests

```rust
#[test]
fn test_no_regression_issue_123() {
    // Ensure specific bugs don't reoccur
    let input = r#"
        const obj = { "key with spaces": 42 };
        console.log(obj["key with spaces"]);
    "#;
    
    let result = minify(input, MinifyOptions::default());
    assert!(result.code.contains("key with spaces")); // Don't break property access
}
```

## Future Roadmap

### Phase 1: Core Functionality (Current)
- Basic compression optimizations
- Dead code elimination  
- Constant folding
- Variable merging

### Phase 2: Advanced Optimizations
- Name mangling
- Function inlining
- Advanced tree shaking
- Control flow optimization

### Phase 3: Production Ready
- Source map support
- Multiple compression levels
- Bundle analysis
- Plugin system

### Phase 4: Ecosystem Integration
- Webpack plugin
- Rollup plugin
- Vite integration
- Parcel support

## Resources

### Documentation
- [Minifier API Documentation](https://docs.rs/oxc_minifier)
- [Optimization Techniques Guide](./optimization-techniques.md)
- [Performance Best Practices](./performance.md)

### External References
- [Google Closure Compiler Optimizations](https://github.com/google/closure-compiler/wiki/JS-Modules)
- [Terser Options](https://github.com/terser/terser#minify-options)
- [esbuild Minification](https://esbuild.github.io/api/#minification)

### Community
- **GitHub Issues**: [Minifier-related issues](https://github.com/oxc-project/oxc/labels/C-minifier)
- **Discord**: Join our [community](https://discord.gg/9uXCAwqQZW)
- **RFCs**: [Minifier RFCs](https://github.com/oxc-project/oxc/discussions/categories/rfcs)

[google-closure-compiler]: https://github.com/google/closure-compiler
[terser]: https://github.com/terser/terser
[esbuild]: https://github.com/evanw/esbuild
[tdewolff-minify]: https://github.com/tdewolff/minify
