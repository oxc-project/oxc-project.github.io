---
title: Quick Start Guide
outline: deep
---

# Quick Start Guide

Get up and running with Oxc tools in under 5 minutes. Choose your path:

## 🚀 Try Oxlint (Recommended First Step)

Oxlint is our most mature tool - a blazing fast linter that can replace ESLint in most projects.

### Instant Try

```bash
# No installation needed - try it right now!
npx oxlint@latest src/

# See all available options
npx oxlint@latest --help
```

### Install and Use

```bash
# Install globally
npm install -g oxlint

# Or add to your project
npm install --save-dev oxlint

# Lint your code
oxlint src/

# Auto-fix issues
oxlint src/ --fix

# Lint and show performance stats
oxlint src/ --timing
```

### Add to Your Project

Add to `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint src/",
    "lint:fix": "oxlint src/ --fix"
  }
}
```

### Replace ESLint in CI

For faster CI builds, run oxlint before ESLint:

```yaml
# GitHub Actions
- name: Fast Lint Check
  run: npx oxlint@latest --deny-warnings src/
  
- name: Full ESLint (if needed)
  run: npm run lint:eslint
```

## 🔧 Integrate with Existing ESLint

Don't want to replace ESLint entirely? Use our plugin to get the best of both worlds:

```bash
npm install --save-dev eslint-plugin-oxlint
```

```js
// eslint.config.js
import oxlint from 'eslint-plugin-oxlint';

export default [
  oxlint.configs.recommended, // Turns off ESLint rules covered by oxlint
  // ... your existing ESLint config
];
```

Then run both tools:
```bash
oxlint src/ && eslint src/
```

## 🎯 Editor Integration

### VS Code

Install the official extension:
- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
- [Open VSX Registry](https://open-vsx.org/extension/oxc/oxc-vscode)

### Zed

Find the Oxc extension: https://zed.dev/extensions?query=oxc

## 🔄 Migration from ESLint

### Step 1: Test Compatibility

```bash
# Test oxlint on your codebase
npx oxlint@latest src/

# Compare with ESLint output
eslint src/ --format json > eslint-output.json
npx oxlint@latest src/ --format json > oxlint-output.json
```

### Step 2: Gradual Migration

```bash
# Install the bridge plugin
npm install --save-dev eslint-plugin-oxlint

# Update ESLint config to disable conflicting rules
```

### Step 3: Performance Test

```bash
# Time your current ESLint run
time eslint src/

# Time oxlint
time oxlint src/

# Most users see 50-100x speedup! 🚀
```

## 🛠️ Try Other Tools

### Parser (JavaScript/TypeScript)

```bash
npm install oxc-parser
```

```js
import { parseSync } from 'oxc-parser';

const ast = parseSync('const x = 1;', { sourceType: 'module' });
console.log(ast);
```

### Transformer (TypeScript/JSX)

```bash
npm install oxc-transform
```

```js
import { transformSync } from 'oxc-transform';

const result = transformSync('const x: number = 1;', {
  typescript: true,
});
console.log(result.code); // Output: const x = 1;
```

### Resolver (Module Resolution)

```bash
npm install oxc-resolver
```

```js
import { ResolverFactory } from 'oxc-resolver';

const resolver = new ResolverFactory().createResolver();
const result = resolver.resolveSync('./module', '/path/to/project');
```

## 📊 Performance Comparison

Here's what you can expect:

| Tool | Before (ESLint/SWC) | After (Oxc) | Speedup |
|------|---------------------|-------------|---------|
| Linting | 75 minutes (Shopify) | 10 seconds | 450x |
| Linting | ~10 seconds (Vue.js) | 50ms | 200x |
| Parsing | 1000ms | 300ms | 3.3x |
| Resolution | 280ms | 10ms | 28x |

## 🔍 Common Use Cases

### Replace ESLint for Faster CI

```yaml
# Before: Slow CI
- run: eslint src/ # Takes 5-10 minutes

# After: Lightning Fast CI
- run: oxlint src/ # Takes 5-10 seconds
```

### Pre-commit Hook

```json
{
  "lint-staged": {
    "*.{js,ts,jsx,tsx}": ["oxlint --fix", "git add"]
  }
}
```

### Development Workflow

```bash
# Watch mode for development (coming soon)
oxlint src/ --watch

# Integration with build tools
vite build --lint-with=oxlint
```

## 💡 Pro Tips

### 1. Combine with ESLint

```bash
# Use oxlint for speed, ESLint for rules not yet in oxlint
oxlint src/ && eslint src/ --rule 'my-custom-rule: error'
```

### 2. CI Optimization

```bash
# Fail fast with oxlint, run full checks only if needed
oxlint src/ --deny-warnings || exit 1
# ... run other checks only if linting passes
```

### 3. Monorepo Setup

```bash
# Lint all packages efficiently
oxlint packages/*/src/

# Or with explicit config
oxlint --config .oxlintrc.json packages/*/src/
```

## 🤔 Troubleshooting

### "Command not found"

```bash
# If npx doesn't work, try:
npm install -g oxlint

# Or use full path
./node_modules/.bin/oxlint src/
```

### Configuration Issues

```bash
# Generate default config
oxlint --init

# Check what rules are enabled
oxlint --print-config src/
```

### Performance Issues

```bash
# Check what's taking time
oxlint src/ --timing

# Exclude large files/directories
oxlint src/ --ignore-pattern "**/node_modules/**"
```

## 🎯 Next Steps

### Ready for more?

- **[Complete Linter Guide](/docs/guide/usage/linter.html)** - All configuration options
- **[Parser Guide](/docs/guide/usage/parser.html)** - Use Oxc parser in your tools  
- **[Transformer Guide](/docs/guide/usage/transformer.html)** - TypeScript/JSX transformation
- **[All Tools](/docs/guide/usage/)** - Explore the complete toolchain

### Want to contribute?

- **[Contributing Guide](/docs/contribute/introduction.html)** - Help build the future
- **[Discord Community](https://discord.gg/9uXCAwqQZW)** - Chat with the team
- **[Good First Issues](https://github.com/oxc-project/oxc/contribute)** - Start contributing

## 🙋‍♂️ Need Help?

- **Discord**: [Join our community](https://discord.gg/9uXCAwqQZW)
- **GitHub Issues**: [Report bugs or request features](https://github.com/oxc-project/oxc/issues)
- **Twitter**: Follow [@boshen_c](https://twitter.com/boshen_c) for updates

---

**⚡ TL;DR**: Run `npx oxlint@latest src/` right now and see the speed difference!