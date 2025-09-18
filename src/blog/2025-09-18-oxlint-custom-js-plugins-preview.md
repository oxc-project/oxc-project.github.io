---
title: Oxlint Custom JavaScript Plugins Preview
outline: deep
authors:
  - boshen
---

<AppBlogPostHeader />

<br>

We're thrilled to announce the preview release of **Custom JavaScript Plugins** for Oxlint!

After months of development and community requests, we're ready to share our first working prototype that brings ESLint-compatible plugin support to Oxlint while maintaining the performance characteristics you love.

This preview release aims to engage with the community for collaboration, testing, and feedback on this highly anticipated feature.

## Quick Start

To try the custom JavaScript plugins preview:

```bash
# Install the latest oxlint with JS plugin support
pnpm add -D oxlint@preview

# Create a basic plugin configuration
echo '{
  "plugins": {
    "my-custom-plugin": "./path/to/your/plugin.js"
  },
  "rules": {
    "my-custom-plugin/my-rule": "error"
  }
}' > .oxlintrc.json

# Run oxlint with custom plugins
pnpm dlx oxlint --enable-js-plugins
```

## Why Custom JavaScript Plugins?

Since Oxlint's launch, **custom JavaScript plugin support has been our most requested feature**.

The JavaScript ecosystem thrives on extensibility. While Oxlint ships with over 570 built-in rules from popular plugins like React, Jest, and Unicorn, the community needed the ability to:

- Write custom linting rules for domain-specific requirements
- Adapt existing ESLint plugins to work with Oxlint
- Maintain team-specific coding standards
- Leverage the rich ESLint plugin ecosystem

## Technical Architecture

Our custom JavaScript plugins are built on a hybrid architecture that maintains Oxlint's performance advantages:

### Rust-JavaScript Bridge

```
Oxlint Core (Rust)
  ↓ AST Transfer
JavaScript Plugin Runtime
  ↓ Rule Violations
Oxlint Core (Rust)
```

**Key technical features:**

- **Raw AST Transfer**: We send ASTs from Rust to JavaScript using efficient binary serialization
- **Lazy Deserialization**: AST nodes are only deserialized when accessed by plugin code
- **ESLint-Compatible API**: Existing ESLint plugins can be adapted with minimal changes
- **Shared Memory**: Efficient memory usage between Rust and JavaScript contexts

### Example Plugin

Here's what a custom Oxlint JavaScript plugin looks like:

```javascript
// my-plugin.js
module.exports = {
  rules: {
    'no-console-log': {
      create(context) {
        return {
          CallExpression(node) {
            if (
              node.callee.type === 'MemberExpression' &&
              node.callee.object.name === 'console' &&
              node.callee.property.name === 'log'
            ) {
              context.report({
                node,
                message: 'Unexpected console.log statement'
              });
            }
          }
        };
      }
    }
  }
};
```

## Performance Benchmarks

Our initial benchmarks show excellent performance characteristics:

| Plugin Type | Performance vs Pure Rust | Notes |
|-------------|---------------------------|-------|
| Simple AST Rules | 30% slower | Basic node matching |
| Complex Logic Rules | 55% slower | Heavy computation |
| ESLint Adapted Rules | 45% slower | With compatibility layer |

**Context**: Even with the JavaScript overhead, Oxlint with custom plugins remains **significantly faster** than ESLint with the same rules.

Example benchmark on a large codebase:
- **ESLint + custom plugin**: 45 seconds
- **Oxlint + adapted plugin**: 8 seconds
- **Pure Oxlint (no plugins)**: 3 seconds

## Current Capabilities

This preview release supports:

✅ **Basic AST Traversal**: Walk the syntax tree with familiar visitor patterns
✅ **ESLint-Compatible API**: `context.report()`, node visitors, and basic utilities
✅ **Plugin Loading**: Load plugins from local files or npm packages
✅ **Rule Configuration**: Enable/disable and configure individual rules
✅ **Error Reporting**: Rich diagnostics with source locations and fix suggestions

### Working Plugin Examples

We've successfully adapted several popular ESLint rules:

```javascript
// Adapted from eslint-plugin-react
'react/jsx-uses-vars': {
  create(context) {
    return {
      JSXIdentifier(node) {
        if (node.parent.type === 'JSXOpeningElement') {
          context.markVariableAsUsed(node.name);
        }
      }
    };
  }
}
```

## Current Limitations

This is a **preview release** with some important limitations:

⚠️ **Single-threaded**: All plugins currently run on the main thread
⚠️ **Limited APIs**: No source code utilities, scope analysis, or token access
⚠️ **AST Differences**: Our AST isn't exactly ESTree-shaped (yet)
⚠️ **No Type Information**: Type-aware rules aren't supported in JavaScript plugins

## ESLint Compatibility

While we aim for broad ESLint compatibility, **plugins will need minor adaptations**:

### What Works Out of the Box
- Basic AST visitor patterns
- `context.report()` for error reporting
- Simple rule configuration
- Most core ESLint APIs

### What Needs Adaptation
- Advanced source code manipulation
- Scope analysis (coming soon)
- TypeScript-specific features
- Some ESLint-specific utilities

### Migration Guide

Converting an ESLint plugin typically involves:

1. **Update the plugin structure** to match our format
2. **Remove unsupported APIs** (temporarily)
3. **Test thoroughly** with your codebase
4. **Report compatibility issues** to help us improve

We're working on automated migration tools to streamline this process.

## Community Feedback Needed

This preview release is all about **community engagement**. We need your help to:

🔍 **Test with Real Codebases**: Try adapting your existing ESLint plugins
🐛 **Report Issues**: Help us identify compatibility problems and bugs
💡 **Share Use Cases**: Tell us about plugin patterns we should prioritize
⚡ **Performance Testing**: Benchmark against your current ESLint setup

### How to Provide Feedback

- **GitHub Issues**: Report bugs and compatibility issues at [oxc-project/oxc](https://github.com/oxc-project/oxc/issues)
- **Discussions**: Share experiences and ask questions in [GitHub Discussions](https://github.com/oxc-project/oxc/discussions)
- **Discord**: Join real-time conversations in our [community server](https://discord.gg/9uXCAwqQZW)

## Roadmap: What's Next

Based on this preview feedback, we're planning:

### Short Term (Next 2 months)
- **Worker Thread Support**: Run plugins in parallel for better performance
- **Enhanced APIs**: Source code utilities, scope analysis, and token access
- **Improved ESLint Compatibility**: Closer alignment with ESLint's API surface
- **Better Error Messages**: More helpful diagnostics for plugin developers

### Medium Term (Next 6 months)
- **Plugin Marketplace**: Easy discovery and installation of community plugins
- **IDE Integration**: First-class support in VS Code and other editors
- **Type-Aware Plugins**: Bridge JavaScript plugins with our type checker
- **Performance Optimizations**: Even faster plugin execution

### Long Term
- **Plugin SDK**: Comprehensive tooling for plugin development and testing
- **Hot Reloading**: Instant plugin updates during development
- **Advanced APIs**: File system access, cross-file analysis, and more

## Getting Started

Ready to try custom JavaScript plugins? Here's your next steps:

### 1. Install the Preview

```bash
# Using npm
npm install -D oxlint@preview

# Using pnpm
pnpm add -D oxlint@preview

# Using yarn
yarn add -D oxlint@preview
```

### 2. Create Your First Plugin

```javascript
// rules/my-rules.js
module.exports = {
  rules: {
    'prefer-const-assertion': {
      create(context) {
        return {
          TSAsExpression(node) {
            if (node.typeAnnotation.typeName?.name === 'const') {
              context.report({
                node,
                message: 'Use const assertion syntax instead'
              });
            }
          }
        };
      }
    }
  }
};
```

### 3. Configure Oxlint

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": {
    "my-rules": "./rules/my-rules.js"
  },
  "rules": {
    "my-rules/prefer-const-assertion": "error"
  }
}
```

### 4. Run and Test

```bash
# Enable JS plugins and run
oxlint --enable-js-plugins src/

# Run with specific plugin debugging
oxlint --enable-js-plugins --debug-plugins src/
```

## Acknowledgements

This release wouldn't be possible without:

- **The Community**: For persistent feedback and feature requests
- **ESLint Team**: For creating the plugin ecosystem we're building upon
- **Contributors**: Everyone who helped design and test this feature

Special thanks to the core team members who made this possible:

- [@Boshen](https://github.com/Boshen) for the initial architecture and vision
- [@camc314](https://github.com/camc314) for the Rust-JavaScript bridge implementation
- [@Dunqing](https://github.com/Dunqing) for AST compatibility and testing

## Join the Movement

We're building the future of JavaScript tooling, and custom plugins are a huge step toward making Oxlint the **fastest and most extensible** linter in the ecosystem.

Try the preview, adapt your plugins, and help us shape the final release.

Connect with us:

- **Discord**: [Join our community](https://discord.gg/9uXCAwqQZW) for real-time discussions
- **GitHub**: [Share feedback](https://github.com/oxc-project/oxc/discussions) and [report issues](https://github.com/oxc-project/oxc/issues)
- **Documentation**: [Read the plugin guide](https://oxc.rs/docs/guide/usage/linter/plugins.html)

## Next Steps

Install the preview:

```bash
pnpm add -D oxlint@preview
```

Follow the [Custom Plugin Guide](https://oxc.rs/docs/guide/usage/linter/custom-plugins.html) to get started.

Happy linting! 🦀✨