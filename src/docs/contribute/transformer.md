---
title: Transformer
outline: deep
---

# Transformer

The Oxc transformer is responsible for converting higher versions of ECMAScript and TypeScript to lower versions that can run in older browsers and environments. We currently focus on transforming ES2022+ and TypeScript to ES2015.

## Architecture Overview

The transformer is built around a multi-pass architecture:

1. **Parse**: Generate AST using Oxc parser
2. **Transform**: Apply transformation passes
3. **Generate**: Produce target code

## Current Focus

We are currently focusing on an ESNext to ES2015 transpiler with the following priorities:

- **TypeScript Support**: Strip types and transform TS-specific syntax
- **JSX/TSX**: Transform React JSX to function calls
- **Modern JavaScript**: Transform ES2022+ features to ES2015
- **Isolated Declarations**: Generate .d.ts files without TypeScript compiler

See the [umbrella issue](https://github.com/oxc-project/oxc/issues/974) for current status and detailed task breakdown.

## Development Setup

### Prerequisites

```bash
# Clone the main Oxc repository
git clone https://github.com/oxc-project/oxc
cd oxc

# Build the transformer
cargo build -p oxc_transformer

# Run transformer tests
cargo test -p oxc_transformer
```

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

## Key Features

### TypeScript Transformation

Strips TypeScript types and transforms TS-specific syntax:

```typescript
// Input
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

// Output
function greet(user) {
  return `Hello, ${user.name}!`;
}
```

### JSX Transformation

Transforms JSX to JavaScript function calls:

```jsx
// Input
const element = <div className="container">Hello World</div>;

// Output (React)
const element = React.createElement("div", { className: "container" }, "Hello World");

// Output (Automatic Runtime)
import { jsx as _jsx } from "react/jsx-runtime";
const element = _jsx("div", { className: "container", children: "Hello World" });
```

### Modern JavaScript Features

Transforms ES2022+ features to ES2015:

```javascript
// Input (ES2022)
class MyClass {
  #privateField = 42;
  
  static {
    console.log('Static initialization');
  }
}

// Output (ES2015)
var _privateField = new WeakMap();

var MyClass = function MyClass() {
  _privateField.set(this, 42);
};

// Static initialization code
console.log('Static initialization');
```

## Contributing

### Setting Up Development Environment

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/your-username/oxc
   cd oxc
   ```

2. **Install Dependencies**:
   ```bash
   # Rust toolchain should already be installed
   # No additional dependencies needed
   ```

3. **Run Tests**:
   ```bash
   cargo test -p oxc_transformer
   ```

### Testing Strategy

#### Unit Tests

Test individual transformation functions:

```rust
#[test]
fn test_typescript_type_removal() {
    let input = "function foo(x: number): string { return x.toString(); }";
    let expected = "function foo(x) { return x.toString(); }";
    
    let result = transform_typescript(input);
    assert_eq!(result, expected);
}
```

#### Integration Tests

Test complete transformation pipelines:

```rust
#[test]
fn test_typescript_jsx_transformation() {
    let input = r#"
        interface Props { name: string; }
        const Component = (props: Props) => <div>{props.name}</div>;
    "#;
    
    let result = transform_with_options(input, TransformOptions {
        typescript: true,
        jsx: JsxOptions::default(),
        ..Default::default()
    });
    
    assert_snapshot!(result);
}
```

#### Conformance Tests

Test against Babel and TypeScript compiler outputs:

```bash
# Run conformance tests
cargo test --test conformance

# Test against specific Babel transforms
cargo test --test babel_typescript
cargo test --test babel_jsx
```

### Adding New Transformations

#### 1. Create Transform Module

```rust
// src/my_transform/mod.rs
use oxc_ast::ast::*;
use oxc_traverse::{traverse_mut, TraverseCtx};

pub struct MyTransform {
    // Configuration options
}

impl MyTransform {
    pub fn new() -> Self {
        Self {}
    }
}

impl<'a> VisitMut<'a> for MyTransform {
    fn visit_expression(&mut self, expr: &mut Expression<'a>, ctx: &mut TraverseCtx<'a>) {
        // Transform logic here
        self.visit_expression_mut(expr, ctx);
    }
}
```

#### 2. Add Configuration

```rust
// src/options.rs
#[derive(Debug, Clone)]
pub struct TransformOptions {
    pub my_transform: bool,
    // ... other options
}
```

#### 3. Integrate with Main Transformer

```rust
// src/transformer.rs
if self.options.my_transform {
    traverse_mut(&mut MyTransform::new(), program, ctx);
}
```

#### 4. Add Tests

```rust
// tests/my_transform.rs
mod my_transform {
    use super::*;

    #[test]
    fn basic_transformation() {
        test_transform("input", "expected_output", TransformOptions {
            my_transform: true,
            ..Default::default()
        });
    }
}
```

### Performance Considerations

#### Optimization Guidelines

1. **Minimize Allocations**: Reuse existing AST nodes when possible
2. **Efficient Traversal**: Use targeted visitors instead of generic ones
3. **Lazy Evaluation**: Defer expensive operations until needed
4. **Memory Arena**: Leverage Oxc's bump allocator for AST nodes

#### Benchmarking

```bash
# Run performance benchmarks
cargo bench --bench transformer

# Compare with Babel
just bench-transformer-babel

# Profile memory usage
cargo run --example profile_memory
```

### Code Style Guidelines

#### Rust Conventions

- Use `snake_case` for functions and variables
- Use `PascalCase` for types and traits
- Add comprehensive documentation
- Follow Rust API guidelines

#### AST Manipulation

```rust
// Good: Reuse existing nodes
let new_expr = ctx.ast.copy(old_expr);

// Bad: Create unnecessary allocations
let new_expr = ctx.ast.expression_identifier_reference(span, name);
```

#### Error Handling

```rust
// Use proper error types
pub enum TransformError {
    UnsupportedSyntax(String),
    InvalidConfiguration(String),
}

// Provide helpful error messages
return Err(TransformError::UnsupportedSyntax(
    format!("Cannot transform {} in strict mode", syntax_name)
));
```

## Advanced Topics

### Custom Transform Plugins

Create reusable transformation plugins:

```rust
pub trait TransformPlugin<'a> {
    fn name(&self) -> &'static str;
    fn transform(&mut self, program: &mut Program<'a>, ctx: &mut TraverseCtx<'a>);
}

pub struct MyPlugin {
    options: MyPluginOptions,
}

impl<'a> TransformPlugin<'a> for MyPlugin {
    fn name(&self) -> &'static str {
        "my-plugin"
    }
    
    fn transform(&mut self, program: &mut Program<'a>, ctx: &mut TraverseCtx<'a>) {
        // Plugin implementation
    }
}
```

### Helper Function Generation

Generate helper functions for complex transformations:

```rust
pub struct Helpers<'a> {
    ctx: &'a mut TraverseCtx<'a>,
}

impl<'a> Helpers<'a> {
    pub fn call_helper(&mut self, name: &str, args: Vec<Expression<'a>>) -> Expression<'a> {
        // Generate helper function call
        self.ctx.ast.expression_call_expression(
            SPAN,
            self.ctx.ast.expression_identifier_reference(SPAN, name),
            NONE,
            self.ctx.ast.vec_from_iter(args),
            false,
        )
    }
}
```

### Source Map Generation

Maintain source maps during transformation:

```rust
use oxc_sourcemap::{SourceMap, SourceMapBuilder};

pub struct TransformWithSourceMap<'a> {
    source_map: SourceMapBuilder,
    // ... other fields
}

impl<'a> TransformWithSourceMap<'a> {
    fn transform_with_mapping(&mut self, node: &mut AstNode<'a>) {
        let original_span = node.span();
        
        // Perform transformation
        self.transform_node(node);
        
        // Add source map mapping
        self.source_map.add_mapping(
            original_span.start,
            node.span().start,
            None,
            None,
        );
    }
}
```

## Getting Help

### Resources

- **GitHub Issues**: [Transformer issues](https://github.com/oxc-project/oxc/labels/C-transformer)
- **Discord**: Join our [community](https://discord.gg/9uXCAwqQZW)
- **Documentation**: [API docs](https://docs.rs/oxc_transformer)

### Common Questions

**Q: How do I handle complex nested transformations?**
A: Use multiple passes or create a dependency graph of transformations.

**Q: How do I preserve comments during transformation?**
A: Use the `trivias` field in the semantic model to track and reposition comments.

**Q: How do I test against real-world code?**
A: Use our ecosystem CI that tests against popular npm packages.

For more detailed information, see our [main contributing guide](../introduction.md).
