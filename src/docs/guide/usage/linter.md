---
title: Linter
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxlint
    alt: npm weekly downloads
---

# Getting Started with Oxlint

<AppBadgeList />

Oxlint is a fast, modern JavaScript and TypeScript linter designed to catch errors and improve code quality without requiring any configuration to get started.

:::info
At this stage, Oxlint can be used to fully replace ESLint in small to medium projects.

For larger projects, our advice is to turn off ESLint rules via [eslint-plugin-oxlint](https://www.npmjs.com/package/eslint-plugin-oxlint),
and run Oxlint before ESLint in your local or CI setup for a quicker feedback loop.
:::

## Quick Start

### 1. Run Oxlint Instantly

The fastest way to try Oxlint is to run it directly on your project:

::: code-group

```sh [npm]
$ npx oxlint@latest
```

```sh [pnpm]
$ pnpm dlx oxlint@latest
```

```sh [yarn]
$ yarn dlx oxlint@latest
```

```sh [bun]
$ bunx oxlint@latest
```

```sh [deno]
$ deno run npm:oxlint@latest
```

:::

This will scan your entire project and show any linting issues found.

### 2. Check Specific Files or Directories

```sh
# Lint specific files
npx oxlint@latest src/index.js src/utils.ts

# Lint a directory
npx oxlint@latest src/

# Lint with glob patterns
npx oxlint@latest "src/**/*.{js,ts,tsx}"
```

### 3. Install for Regular Use

Add Oxlint to your project dependencies:

::: code-group

```sh [npm]
$ npm add -D oxlint
```

```sh [pnpm]
$ pnpm add -D oxlint
```

```sh [yarn]
$ yarn add -D oxlint
```

```sh [bun]
$ bun add -D oxlint
```

:::

Then add scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```

### 4. Your First Configuration (Optional)

While Oxlint works great with zero configuration, you can customize it by creating an `.oxlintrc.json` file:

```json
{
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn"
  }
}
```

## Why Oxlint?

- **⚡ Blazingly Fast**: 50-100× faster than ESLint, scales with CPU cores ([benchmark](https://github.com/oxc-project/bench-javascript-linter))
- **🔋 Batteries Included**: Over 520 rules from `eslint`, `typescript`, `react`, `jest`, `unicorn`, `jsx-a11y` and [more](https://github.com/oxc-project/oxc/issues/481)
- **🚀 Zero Config**: Works perfectly out of the box, no setup required
- **🔧 Auto-fix**: Automatically fixes many issues with `--fix`
- **💻 Universal**: No Node.js required, works everywhere

## Language Support

- **Supported Languages**:
  - JavaScript and TypeScript: `js`, `mjs`, `cjs`, `jsx`, `ts`, `mts`, `cts`, `tsx`
  - Framework files: `<script>` content in `.vue`, `.astro`, and `.svelte` files
- **Current Limitations**:
  - [Type-aware rules](https://typescript-eslint.io/getting-started/typed-linting) from `typescript-eslint`
  - [Stylistic rules](https://eslint.style) (use a formatter instead)

## Installation Options

### Package Managers

The recommended way to install Oxlint:

::: code-group

```sh [npm]
$ npm add -D oxlint
```

```sh [pnpm]
$ pnpm add -D oxlint
```

```sh [yarn]
$ yarn add -D oxlint
```

```sh [bun]
$ bun add -D oxlint
```

:::

### Standalone Binaries

`oxlint` doesn't require Node.js and can run as a standalone binary. Download from [GitHub releases](https://github.com/oxc-project/oxc/releases/latest):

```sh
# macOS/Linux - install to /usr/local/bin
curl -fsSL https://github.com/oxc-project/oxc/releases/latest/download/oxlint-darwin-x64.tar.gz | tar -xz && sudo mv oxlint /usr/local/bin

# Or download manually for your platform:
# - darwin-arm64, darwin-x64
# - linux-arm64, linux-x64  
# - win32-arm64, win32-x64
```

### Try Without Installing

Perfect for quick testing or CI:

::: code-group

```sh [npm]
$ npx oxlint@latest
```

```sh [pnpm]
$ pnpm dlx oxlint@latest
```

```sh [yarn]
$ yarn dlx oxlint@latest
```

```sh [bun]
$ bunx oxlint@latest
```

:::

## Common Usage Patterns

### Basic Linting

```sh
# Lint entire project
oxlint

# Lint specific directories
oxlint src tests

# Lint with patterns
oxlint "src/**/*.{js,ts,tsx}"

# Show only errors, ignore warnings
oxlint --deny-warnings
```

### Auto-fixing Issues

```sh
# Fix all auto-fixable issues
oxlint --fix

# Fix and show what was changed
oxlint --fix --format=compact
```

### Working with Different File Types

```sh
# Include Vue, Astro, Svelte files
oxlint --ext js,ts,vue,astro,svelte

# Lint TypeScript project
oxlint --tsconfig ./tsconfig.json
```

## Configuration

### Basic Configuration

Create an `.oxlintrc.json` file in your project root:

```json
{
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error"
  }
}
```

### Framework-Specific Setup

For React projects:
```json
{
  "env": { "browser": true },
  "plugins": ["react", "jsx-a11y"],
  "rules": {
    "react/jsx-uses-react": "error",
    "jsx-a11y/alt-text": "error"
  }
}
```

For Node.js projects:
```json
{
  "env": { "node": true, "es2021": true },
  "rules": {
    "node/no-missing-import": "error",
    "node/no-unsupported-features/es-syntax": "error"
  }
}
```

### Comment-Based Configuration

Disable rules inline:
```js
/* oxlint-disable-next-line no-unused-vars */
const unusedVar = 'this is ok';

/* oxlint-disable no-console */
console.log('debugging');
console.error('more debugging');
/* oxlint-enable no-console */
```

## Next Steps

### 1. Advanced Configuration

- **[Configuration Reference](./linter/config)**: Complete guide to `.oxlintrc.json` options
- **[Nested Configurations](./linter/nested-config)**: Different configs for different directories
- **[Rule Categories](./linter/rules)**: Browse all 520+ available rules
- **[Automatic Fixes](./linter/automatic-fixes)**: Understanding what can be auto-fixed

### 2. Integration with Your Workflow

#### Development Environment
- **[VSCode Extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)**: Real-time linting in your editor
- **[Zed Extension](https://zed.dev/extensions?query=oxc)**: For Zed editor users
- **[CLI Reference](./linter/cli)**: Master the command-line interface

#### Build & CI Integration
- **[GitHub Actions](#github-actions)**: Automated linting in CI/CD
- **[pre-commit Hooks](#pre-commit)**: Lint before commits
- **[lint-staged](#lint-staged)**: Lint only changed files

### 3. Migrating from ESLint

#### Gradual Migration
- **[eslint-plugin-oxlint](https://github.com/oxc-project/eslint-plugin-oxlint)**: Disable conflicting ESLint rules
- **[oxlint-migrate](https://github.com/oxc-project/oxlint-migrate)**: Convert ESLint flat config to `.oxlintrc.json`
- **Run Both**: Use Oxlint for speed, ESLint for advanced rules you still need

#### Migration Strategy
```sh
# 1. Install both tools
npm install -D oxlint eslint-plugin-oxlint

# 2. Update ESLint config to disable conflicting rules
echo '{"extends": ["plugin:oxlint/recommended"]}' > .eslintrc.json

# 3. Run Oxlint first, then ESLint
npm run lint:oxlint && npm run lint:eslint
```

### 4. Advanced Use Cases

#### Custom Build Tools
- **[Vite Plugin](https://www.npmjs.com/package/vite-plugin-oxlint)**: Integrate with Vite
- **[Unplugin](https://www.npmjs.com/package/unplugin-oxlint)**: Universal bundler integration
- **[JavaScript API](./linter/api)**: Programmatic usage in Node.js

#### Large Codebases
- **Partial Adoption**: Start with critical paths, expand gradually
- **Performance Tuning**: Use `--threads` option for maximum speed
- **Selective Rules**: Focus on high-impact rules first

### 5. Staying Up to Date

- **[Changelog](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/CHANGELOG.md)**: Latest features and fixes
- **[Roadmap](https://github.com/oxc-project/oxc/issues/481)**: Upcoming rule additions
- **[Contributing](https://github.com/oxc-project/oxc/blob/main/CONTRIBUTING.md)**: Help improve Oxlint

### 6. Troubleshooting Common Issues

#### Performance
```sh
# Use all CPU cores (default behavior)
oxlint --threads 0

# Reduce memory usage for very large projects
oxlint --max-warnings 1000
```

#### File Discovery
```sh
# Debug which files are being linted
oxlint --print-config

# Include additional file types
oxlint --ext js,ts,vue,svelte
```

#### Rule Conflicts
```sh
# See which rules are enabled
oxlint --print-rules

# Disable problematic rules temporarily
oxlint --disable no-unused-vars,no-console
```

### 7. Getting Help

- **[GitHub Issues](https://github.com/oxc-project/oxc/issues)**: Report bugs or request features
- **[Discussions](https://github.com/orgs/oxc-project/discussions)**: Ask questions and share tips
- **[Discord](https://discord.gg/9uXCAwqQZW)**: Real-time community support

## Popular Integrations

### ESLint Integration

Use both tools together for maximum coverage:

```js
// eslint.config.js
import oxlint from 'eslint-plugin-oxlint';

export default [
  // Turn off ESLint rules that conflict with Oxlint
  oxlint.configs.recommended,
  // Your existing ESLint config
  {
    rules: {
      // ESLint-only rules that Oxlint doesn't support yet
      "@typescript-eslint/prefer-nullish-coalescing": "error"
    }
  }
];
```

### Git Hooks with lint-staged

```json
{
  "lint-staged": {
    "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue,astro,svelte}": [
      "oxlint --fix",
      "git add"
    ]
  }
}
```

### GitHub Actions

```yaml
name: Lint
on: [push, pull_request]

jobs:
  oxlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npx oxlint@latest --deny-warnings
```

Pin the version for stability:
```yaml
- run: npx --yes oxlint@1.8.0 --deny-warnings
```

### pre-commit

```yaml
repos:
  - repo: https://github.com/oxc-project/mirrors-oxlint
    rev: v1.8.0 # Use the latest version
    hooks:
      - id: oxlint
        verbose: true
```

## System Requirements

Oxlint runs natively on:
- **macOS**: darwin-arm64 (Apple Silicon), darwin-x64 (Intel)
- **Linux**: linux-arm64, linux-x64
- **Windows**: win32-arm64, win32-x64

No Node.js runtime required for standalone binaries.
