---
title: Linter
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxlint
    alt: npm weekly downloads
---

# Getting Started with Oxlint

<AppBadgeList />

Oxlint is an extremely fast JavaScript and TypeScript linter designed to catch erroneous or useless code without requiring any configurations by default. Get up and running in seconds!

## Quick Start

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

That's it! Oxlint will automatically scan your JavaScript and TypeScript files and report any issues it finds.

:::info
At this stage, Oxlint can be used to fully replace ESLint in small to medium projects.

For larger projects, our advice is to turn off ESLint rules via [eslint-plugin-oxlint](https://www.npmjs.com/package/eslint-plugin-oxlint),
and run Oxlint before ESLint in your local or CI setup for a quicker feedback loop.
:::

## Why Oxlint?

- **⚡ Blazingly Fast**: 50-100 times faster than ESLint, scales with CPU cores ([benchmark](https://github.com/oxc-project/bench-javascript-linter))
- **📦 Zero Configuration**: Works out of the box with sensible defaults
- **🛠️ Rich Rule Set**: Over 520 rules from `eslint`, `typescript`, `eslint-plugin-react`, `eslint-plugin-jest`, `eslint-plugin-unicorn`, `eslint-plugin-jsx-a11y` and [many more](https://github.com/oxc-project/oxc/issues/481)
- **🔧 Auto-fixing**: Automatically fix many issues with `--fix`
- **⚙️ Configurable**: Support for [configuration files](./linter/config), [nested configs](./linter/nested-config), and [comment disabling](./linter/config.html#configuring-rules-via-inline-configuration-comments)


## Installation

### Try it now (Recommended)

Run `oxlint` directly at the root of your repository to try it without installing:

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

### Install to your project

Or save it to your package.json:

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

Then run it via npm scripts:

```json [package.json]
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```

### Standalone Binary

`oxlint` does not require Node.js. The binaries can be downloaded from the [latest GitHub releases](https://github.com/oxc-project/oxc/releases/latest) as a standalone binary, perfect for CI environments without Node.js.

## Basic Usage

### Lint your project

```sh
$ oxlint
```

Oxlint will automatically find and lint all JavaScript and TypeScript files in your project.

### Fix issues automatically

```sh
$ oxlint --fix
```

Many issues can be automatically fixed. This is safe and won't change your code's behavior.

### Check specific files or directories

```sh
$ oxlint src/
$ oxlint src/components/*.tsx
$ oxlint --include "**/*.js" --include "**/*.ts"
```

## Next Steps

Now that you have Oxlint running, here's how to get the most out of it:

### 🔧 Customize Rules and Configuration

Create an `.oxlintrc.json` file in your project root to customize which rules are enabled:

```json [.oxlintrc.json]
{
  "rules": {
    "no-console": "warn",
    "no-debugger": "error",
    "prefer-const": "error"
  },
  "plugins": ["react", "jsx-a11y"],
  "env": {
    "browser": true,
    "node": true
  }
}
```

📚 **Learn more**: [Configuration Guide](./linter/config) | [Available Rules](./linter/rules) | [Plugins](./linter/plugins)

### 🚀 Set Up CI/CD Integration

Add Oxlint to your continuous integration for consistent code quality:

#### GitHub Actions

```yaml [.github/workflows/lint.yml]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npx --yes oxlint@latest --deny-warnings
```

#### Other CI Systems

- **GitLab CI**: `npx oxlint@latest --deny-warnings`
- **Bitbucket Pipelines**: `npx oxlint@latest --deny-warnings`  
- **Jenkins**: `npx oxlint@latest --deny-warnings`

💡 **Tip**: Pin the version in CI to avoid surprises: `npx --yes oxlint@0.x.x`

📚 **Learn more**: [CI Integration Examples](./linter/config#continuous-integration)

### 🔄 Migrate from ESLint

Already using ESLint? Here's how to transition smoothly:

1. **Run both side-by-side** initially:
   ```json [package.json]
   {
     "scripts": {
       "lint": "oxlint && eslint .",
       "lint:fix": "oxlint --fix && eslint . --fix"
     }
   }
   ```

2. **Use eslint-plugin-oxlint** to disable overlapping rules:
   ```sh
   npm install -D eslint-plugin-oxlint
   ```

3. **Convert your ESLint config** with [oxlint-migrate](https://github.com/oxc-project/oxlint-migrate):
   ```sh
   npx oxlint-migrate
   ```

📚 **Learn more**: [Migration Guide](./linter/config#migrate-from-eslint-flat-config)

### ⚡ Unlock Advanced Features

#### Automatic Fixes
Fix issues automatically while preserving your code's behavior:
```sh
oxlint --fix
```

#### Framework-Specific Linting
Enable rules for your framework:
```json [.oxlintrc.json]
{
  "plugins": ["react", "vue", "jsx-a11y"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

#### Nested Configuration
Use different rules for different parts of your project:
```json [src/tests/.oxlintrc.json]
{
  "extends": ["../../../.oxlintrc.json"],
  "plugins": ["jest"],
  "env": {
    "jest": true
  }
}
```

📚 **Learn more**: [Automatic Fixes](./linter/automatic-fixes) | [Nested Config](./linter/nested-config)

### 🏗️ IDE and Editor Integration

Get real-time linting in your editor:

- **VS Code**: Install the [Oxc VS Code Extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
- **Zed**: Search for "oxc" in [Zed Extensions](https://zed.dev/extensions?query=oxc)
- **Other Editors**: Use the [Language Server Protocol](./linter/config#language-server-protocol)

### 🛠️ Development Workflow Integration

#### Pre-commit Hooks with lint-staged
```json [package.json]
{
  "lint-staged": {
    "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue,astro,svelte}": "oxlint"
  }
}
```

#### pre-commit Framework
```yaml [.pre-commit-hooks.yaml]
repos:
  - repo: https://github.com/oxc-project/mirrors-oxlint
    rev: v0.x.x # Use the latest version
    hooks:
      - id: oxlint
        verbose: true
```

#### Build Tool Integration
- **Vite**: [vite-plugin-oxlint](https://www.npmjs.com/package/vite-plugin-oxlint)
- **Universal**: [unplugin-oxlint](https://www.npmjs.com/package/unplugin-oxlint)

### 📊 Performance Optimization

For large codebases:

1. **Use ignore patterns** to skip unnecessary files:
   ```json [.oxlintrc.json]
   {
     "ignorePatterns": ["dist/", "build/", "node_modules/"]
   }
   ```

2. **Leverage parallel processing**: Oxlint automatically uses all CPU cores

3. **Run incrementally**: Only lint changed files in CI:
   ```sh
   git diff --name-only --cached | grep -E '\.(js|ts|jsx|tsx)$' | xargs oxlint
   ```

### 🤝 Get Help and Stay Updated

- **📖 Documentation**: [oxc.rs](https://oxc.rs)
- **💬 Community**: [Discord Server](https://discord.gg/9uXCAwqQZW)
- **🐛 Issues**: [GitHub Issues](https://github.com/oxc-project/oxc/issues)
- **🌟 Stay Updated**: [Follow @boshen_c](https://twitter.com/boshen_c) on Twitter

---

## Technical Details

### Command-line Interface

See [Command-line Interface](./linter/cli)

### Configuration File

See [Configuration File](./linter/config)

### Migrate from eslint flat config

If you have an existing `eslint.config.*` file, you can convert it to an `.oxlintrc.json` config with [oxlint-migrate](https://github.com/oxc-project/oxlint-migrate).

### Language Support

- **Supported**:
  - JavaScript and TypeScript by their extensions `js`, `mjs`, `cjs`, `jsx`, `ts`, `mts`, `cts` and `tsx`
  - `<script>` content of `.vue`, `.astro` and `.svelte` files
- **Not supported**:
  - [Type-aware rules](https://typescript-eslint.io/getting-started/typed-linting) defined by `typescript-eslint`
  - [Stylistic rules](https://eslint.style)

### System Requirements

`oxlint` is built for darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-arm64 and win32-x64.
