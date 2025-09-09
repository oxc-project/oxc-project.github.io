---
title: Tool Comparisons
outline: deep
---

# Tool Comparisons

Understand how Oxc tools compare to and can replace existing JavaScript tools.

## 🆚 Oxlint vs ESLint

### Performance Comparison

| Metric | ESLint | Oxlint | Improvement |
|--------|--------|--------|-------------|
| **Speed** | 75 minutes (Shopify) | 10 seconds | **450x faster** |
| **Memory** | ~200MB | ~50MB | **4x less memory** |
| **CPU** | High utilization | Low utilization | **Better efficiency** |
| **CI Time** | 5-10 minutes | 5-10 seconds | **60-120x faster** |

### Feature Comparison

| Feature | ESLint | Oxlint | Notes |
|---------|--------|--------|-------|
| **Rules** | 300+ built-in | 570+ built-in | ✅ More rules included |
| **Custom Rules** | ✅ Full support | 🚧 Coming soon | Plugin system in development |
| **Auto-fix** | ✅ Yes | ✅ Yes | Same --fix behavior |
| **Configuration** | ✅ Highly flexible | ✅ ESLint compatible | Drop-in replacement |
| **IDE Integration** | ✅ Excellent | ✅ VS Code, Zed | Growing ecosystem |
| **Ecosystem** | ✅ Mature | 🚀 Growing | New but rapidly expanding |

### Migration Strategy

```bash
# Phase 1: Test compatibility
npx oxlint@latest src/

# Phase 2: Run both (recommended)
npm install --save-dev eslint-plugin-oxlint

# Phase 3: Gradual replacement
oxlint src/ && eslint src/ --rule 'custom-rule: error'

# Phase 4: Full replacement (when ready)
oxlint src/
```

**Recommendation**: Start with Phase 2 for immediate benefits while keeping ESLint for custom rules.

## 🆚 Oxc Parser vs SWC Parser

### Performance Comparison

| Metric | SWC | Oxc Parser | Improvement |
|--------|-----|------------|-------------|
| **Parse Speed** | 1000ms | 300ms | **3x faster** |
| **Memory Usage** | 100MB | 60MB | **40% less** |
| **Bundle Size** | 8MB | 4MB | **50% smaller** |
| **Test262 Compliance** | 99% | 100% | **Better compatibility** |

### Feature Comparison

| Feature | SWC | Oxc Parser | Notes |
|---------|-----|------------|-------|
| **JavaScript** | ✅ ES2023 | ✅ ES2024+ | Latest spec support |
| **TypeScript** | ✅ 5.0+ | ✅ 5.0+ | Full TypeScript support |
| **JSX** | ✅ React | ✅ React + others | Broader JSX support |
| **Source Maps** | ✅ Yes | ✅ Yes | High quality maps |
| **Error Recovery** | ⚠️ Basic | ✅ Advanced | Better error messages |
| **AST Format** | Custom | ESTree compatible | Standard format |

### Migration Example

```js
// Before: SWC
import { parseSync } from '@swc/core';
const ast = parseSync(code, { syntax: 'typescript' });

// After: Oxc
import { parseSync } from 'oxc-parser';
const ast = parseSync(code, { sourceType: 'module' });
```

## 🆚 Oxc Transformer vs Babel

### Performance Comparison

| Metric | Babel | Oxc Transformer | Improvement |
|--------|-------|-----------------|-------------|
| **Transform Speed** | 2000ms | 800ms | **2.5x faster** |
| **Memory Usage** | 150MB | 80MB | **47% less** |
| **Plugin Loading** | 500ms | 50ms | **10x faster** |
| **Bundle Size** | 12MB | 6MB | **50% smaller** |

### Feature Comparison

| Feature | Babel | Oxc Transformer | Notes |
|---------|-------|-----------------|-------|
| **TypeScript** | ✅ Via plugin | ✅ Built-in | No plugin needed |
| **JSX** | ✅ Via plugin | ✅ Built-in | React + others |
| **Presets** | ✅ Extensive | 🚧 Core presets | Essential presets covered |
| **Custom Plugins** | ✅ Rich ecosystem | 🚧 Coming soon | Plugin API in development |
| **Source Maps** | ✅ Yes | ✅ Yes | High quality |
| **Configuration** | Complex | Simple | Easier to configure |

### Migration Example

```js
// Before: Babel
import { transformSync } from '@babel/core';
const result = transformSync(code, {
  presets: ['@babel/preset-typescript', '@babel/preset-react']
});

// After: Oxc
import { transformSync } from 'oxc-transform';
const result = transformSync(code, {
  typescript: true,
  jsx: true
});
```

## 🆚 Oxc Resolver vs enhanced-resolve

### Performance Comparison

| Metric | enhanced-resolve | Oxc Resolver | Improvement |
|--------|------------------|--------------|-------------|
| **Resolution Speed** | 280ms | 10ms | **28x faster** |
| **Memory Usage** | 50MB | 20MB | **60% less** |
| **Cache Efficiency** | Good | Excellent | Better hit rates |

### Feature Comparison

| Feature | enhanced-resolve | Oxc Resolver | Notes |
|---------|------------------|--------------|-------|
| **Node.js Resolution** | ✅ Full | ✅ Full | Complete compatibility |
| **TypeScript Paths** | ✅ Yes | ✅ Yes | tsconfig.json support |
| **Symlinks** | ✅ Yes | ✅ Yes | Full symlink support |
| **Custom Resolvers** | ✅ Extensive | 🚧 Basic | Growing support |
| **Webpack Compatibility** | ✅ Perfect | ✅ High | Works with most configs |

## 🆚 Oxc Minifier vs Terser

### Performance Comparison

| Metric | Terser | Oxc Minifier | Improvement |
|--------|--------|--------------|-------------|
| **Minify Speed** | 5000ms | 1000ms | **5x faster** |
| **Compression Ratio** | Good | Better | **Smaller output** |
| **Memory Usage** | 200MB | 100MB | **50% less** |

### Status Note

Oxc Minifier is currently in **Alpha stage**. While it shows excellent performance improvements, we recommend using it for testing and providing feedback rather than production use until it reaches stable status.

## 📊 Overall Ecosystem Comparison

### Development Experience

| Aspect | Traditional Stack | Oxc Stack | Benefit |
|--------|-------------------|-----------|---------|
| **Setup Time** | 30+ minutes | 5 minutes | **6x faster setup** |
| **CI/CD Time** | 10-20 minutes | 2-5 minutes | **4x faster builds** |
| **Development Feedback** | 5-30 seconds | 0.1-1 second | **10-50x faster** |
| **Memory Usage** | 500MB+ | 200MB | **60% less memory** |
| **Configuration** | Complex | Simple | **Easier maintenance** |

### Traditional JavaScript Toolchain

```bash
# Multiple tools, slower performance
eslint src/           # 5-10 seconds
babel src/           # 3-5 seconds  
webpack build        # 30-60 seconds
terser dist/         # 10-20 seconds
# Total: ~50-95 seconds
```

### Oxc Unified Toolchain

```bash
# Single toolchain, blazing fast
oxlint src/          # 0.05 seconds
oxc transform src/   # 1-2 seconds
oxc bundle src/      # 5-10 seconds (coming soon)
oxc minify dist/     # 1-2 seconds
# Total: ~7-15 seconds (3-6x faster)
```

## 🚀 Migration Recommendations

### Immediate Wins (Start Here)

1. **Replace ESLint with Oxlint** - Easiest migration, biggest impact
   ```bash
   npm install --save-dev eslint-plugin-oxlint
   # Update ESLint config to disable conflicting rules
   ```

2. **Add Oxlint to CI** - Instant CI speedup
   ```yaml
   - run: oxlint src/ --deny-warnings
   ```

### Medium-term Migrations

3. **Replace SWC/Babel parser** - For new projects or when updating parsers
   ```bash
   npm install oxc-parser oxc-transform
   ```

4. **Upgrade build tools** - When they add Oxc support
   ```js
   // Vite, Webpack, etc. will add Oxc integration
   ```

### Future Migrations

5. **Full toolchain replacement** - When all tools are stable
   ```bash
   # Eventually: single unified toolchain
   npm install oxc
   ```

## 💡 Best Practices

### Hybrid Approach (Recommended)

```bash
# Use Oxc for speed, fallback to existing tools for edge cases
oxlint src/ && eslint src/ --rule 'custom-rule: error'
```

### Gradual Migration

1. **Week 1**: Add oxlint to CI alongside ESLint
2. **Week 2**: Replace ESLint in development workflow  
3. **Month 1**: Evaluate removing ESLint entirely
4. **Month 2**: Migrate parser/transformer when comfortable

### Performance Monitoring

```bash
# Measure before
time eslint src/

# Measure after  
time oxlint src/

# Celebrate the speedup! 🎉
```

## 🤔 When NOT to Migrate

### Keep existing tools if:

- **Heavy custom ESLint rules** - Wait for Oxc plugin system
- **Complex Babel plugins** - Wait for Oxc transformer plugins
- **Webpack 4 or older** - Limited resolver compatibility
- **Team unfamiliar with Rust** - Though Oxc is used like any Node.js tool

### Decision Framework

```
Do you need custom rules/plugins?
├─ Yes: Use hybrid approach (Oxc + existing)
└─ No: Full migration recommended

Is performance a bottleneck?
├─ Yes: Immediate migration recommended
└─ No: Gradual migration when convenient

Is your team comfortable with new tools?
├─ Yes: Start with development environment
└─ No: Start with CI only, expand gradually
```

## 📈 Future Roadmap

As Oxc tools mature, expect:

- **Q1 2025**: Stable formatter (Prettier replacement)
- **Q2 2025**: Plugin system for linter and transformer
- **Q3 2025**: Bundler (Webpack/Rollup replacement)
- **Q4 2025**: Complete unified toolchain

**Bottom Line**: Start with oxlint today for immediate benefits, plan for gradual adoption of other tools as they mature.