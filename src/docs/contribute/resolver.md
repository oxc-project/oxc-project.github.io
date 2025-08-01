---
title: Resolver
outline: deep
---

# Resolver

The Oxc resolver is a high-performance Node.js module resolution implementation that's compatible with webpack's enhanced-resolve. It's maintained in [its own GitHub repository](https://github.com/oxc-project/oxc_resolver).

## Architecture

The resolver is designed as a direct port of [enhanced-resolve](https://github.com/webpack/enhanced-resolve) with significant performance improvements:

- **28x faster** than enhanced-resolve
- **Zero-copy string operations** where possible
- **Optimized path traversal** algorithms
- **Efficient caching** strategies

## Development Setup

### Prerequisites

```bash
# Clone the resolver repository
git clone https://github.com/oxc-project/oxc_resolver
cd oxc_resolver

# Install dependencies
cargo build

# Run tests
cargo test
```

### Repository Structure

```
oxc_resolver/
├── src/
│   ├── lib.rs           # Main resolver interface
│   ├── resolver.rs      # Core resolution logic
│   ├── cache.rs         # Caching implementation
│   ├── options.rs       # Configuration options
│   └── tests/           # Integration tests
├── benches/             # Performance benchmarks
└── examples/            # Usage examples
```

## Key Components

### Resolution Options

The resolver supports all webpack enhanced-resolve options:

```rust
pub struct ResolveOptions {
    pub alias: Vec<AliasConfig>,
    pub alias_fields: Vec<String>,
    pub condition_names: Vec<String>,
    pub description_files: Vec<String>,
    pub enforce_extension: bool,
    pub extension_alias: Vec<ExtensionAliasConfig>,
    pub extensions: Vec<String>,
    pub fallback: Vec<AliasConfig>,
    pub fully_specified: bool,
    pub main_fields: Vec<String>,
    pub main_files: Vec<String>,
    pub modules: Vec<String>,
    pub resolve_to_context: bool,
    pub prefer_relative: bool,
    pub prefer_absolute: bool,
    pub restrictions: Vec<String>,
    pub roots: Vec<PathBuf>,
    pub symlinks: bool,
}
```

### Caching Strategy

The resolver implements multiple levels of caching:

1. **File System Cache**: Caches file system operations
2. **Resolution Cache**: Caches successful resolutions
3. **Package Cache**: Caches package.json parsing
4. **Negative Cache**: Caches failed resolutions

### Error Handling

Comprehensive error reporting with detailed context:

```rust
pub enum ResolveError {
    NotFound(String),
    IOError(std::io::Error),
    JSONError(serde_json::Error),
    Ignored(PathBuf),
    Restriction(PathBuf, Vec<String>),
}
```

## Contributing

### Areas for Contribution

1. **Performance Optimization**
   - Profile hot paths
   - Optimize string operations
   - Improve caching efficiency

2. **Feature Completion**
   - Missing webpack features
   - Edge case handling
   - Plugin system

3. **Testing**
   - More test cases
   - Edge case coverage
   - Performance regression tests

4. **Documentation**
   - API documentation
   - Usage examples
   - Performance guides

### Benchmarking

Compare performance against enhanced-resolve:

```bash
# Run benchmarks
cargo bench

# Compare with enhanced-resolve
node benchmarks/enhanced-resolve.js
```

### Testing Against Real Projects

Test the resolver against popular npm packages:

```bash
# Run compatibility tests
cargo test --test compatibility

# Test against specific package
cargo test --test specific_package -- typescript
```

## API Compatibility

### Enhanced-Resolve Compatibility

The resolver maintains API compatibility with enhanced-resolve:

```rust
// Basic resolution
let resolver = Resolver::new(ResolveOptions::default());
let result = resolver.resolve(&context, &request);

// With custom options
let options = ResolveOptions {
    extensions: vec![".js".into(), ".ts".into()],
    main_fields: vec!["main".into(), "module".into()],
    ..Default::default()
};
let resolver = Resolver::new(options);
```

### Node.js Binding

The resolver provides Node.js bindings for JavaScript integration:

```javascript
const { resolve } = require('oxc-resolver');

// Synchronous resolution
const result = resolve('/path/to/project', './module');

// Asynchronous resolution
resolve('/path/to/project', './module', (err, result) => {
  if (err) throw err;
  console.log(result);
});
```

## Performance Considerations

### Optimization Techniques

1. **Path Canonicalization**: Efficient path normalization
2. **String Interning**: Reuse common path components
3. **Parallel Processing**: Multi-threaded file system operations
4. **Memory Pools**: Reuse allocations for hot paths

### Profiling

Use built-in profiling to identify bottlenecks:

```rust
// Enable profiling
let mut resolver = Resolver::new(options);
resolver.enable_profiling();

// Analyze results
let stats = resolver.get_stats();
println!("Cache hit rate: {:.2}%", stats.cache_hit_rate);
```

## Integration Examples

### With Bundlers

```rust
// Example integration with a bundler
pub struct BundlerResolver {
    resolver: Resolver,
}

impl BundlerResolver {
    pub fn resolve_import(&self, from: &Path, to: &str) -> Result<PathBuf> {
        self.resolver.resolve(from, to)
            .map(|r| r.full_path)
    }
}
```

### With Language Servers

```rust
// Example integration with a language server
pub struct LSPResolver {
    resolver: Resolver,
    cache: HashMap<String, ResolveResult>,
}

impl LSPResolver {
    pub fn resolve_for_completion(&self, document: &str, position: Position) -> Vec<CompletionItem> {
        // Implementation for autocomplete
        todo!()
    }
}
```

## Future Roadmap

### Planned Features

- [ ] Plugin system
- [ ] More caching strategies
- [ ] WASM compilation target
- [ ] Browser compatibility mode
- [ ] Custom file system providers

### Performance Goals

- [ ] Sub-millisecond resolution for common cases
- [ ] Better memory usage patterns
- [ ] Reduced allocation overhead
- [ ] SIMD-optimized path operations

## Getting Help

- **GitHub Issues**: [Report bugs or request features](https://github.com/oxc-project/oxc_resolver/issues)
- **Discord**: Join our [community](https://discord.gg/9uXCAwqQZW)
- **Documentation**: [API docs](https://docs.rs/oxc_resolver)
