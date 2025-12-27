---
url: /docs/contribute/resolver.md
---

# Resolver

The Oxc resolver is a high-performance Node.js module resolution implementation that's compatible with webpack's enhanced-resolve. It's maintained in [its own GitHub repository](https://github.com/oxc-project/oxc_resolver).

## Architecture

The resolver is designed as a direct port of [enhanced-resolve](https://github.com/webpack/enhanced-resolve) with significant performance improvements:

* **28x faster** than enhanced-resolve
* **Zero-copy string operations** where possible
* **Optimized path traversal** algorithms
* **Efficient caching** strategies
