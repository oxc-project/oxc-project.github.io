---
title: Linter
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxlint
    alt: npm weekly downloads
---

# Linter (oxlint)

<AppBadgeList />

Oxlint is designed to catch erroneous or useless code without requiring any configurations by default.

:::info
At this stage, Oxlint can be used to fully replace ESLint in small to medium projects.

For larger projects, our advice is to turn off ESLint rules via [eslint-plugin-oxlint](https://www.npmjs.com/package/eslint-plugin-oxlint),
and run Oxlint before ESLint in your local or CI setup for a quicker feedback loop.
:::

## Features

- 50 - 100 times faster than ESLint, and scales with the number of CPU cores ([benchmark](https://github.com/oxc-project/bench-javascript-linter)).
- Over 520 rules with a growing list from `eslint`, `typescript`, `eslint-plugin-react`, `eslint-plugin-jest`, `eslint-plugin-unicorn`, `eslint-plugin-jsx-a11y` and [many more](https://github.com/oxc-project/oxc/issues/481).
- Supports
  - [`.oxlintrc.json` configuration file](./linter/config).
  - [Nested configuration file](./linter/nested-config)
  - [Comment disabling](./linter/config.html#configuring-rules-via-inline-configuration-comments).
  - [Automatic Fixes](./linter/automatic-fixes)

## Language Support

- Supports:
  - JavaScript and TypeScript by their extensions `js`, `mjs`, `cjs`, `jsx`, `ts`, `mts`, `cts` and `tsx`.
  - `<script>` content of `.vue`, `.astro` and `.svelte` files.
- Preview support for:
  - [type-aware rules](https://oxc.rs/blog/2025-08-17-oxlint-type-aware.html) - now in preview!
- No support for:
  - [stylistic rules](https://eslint.style).

## Installation

Run `oxlint` directly at the root of your repository:

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

`oxlint` does not require Node.js, the binaries can be downloaded from the [latest GitHub releases](https://github.com/oxc-project/oxc/releases/latest).

## Command-line Interface

See [Command-line Interface](./linter/cli)

## Configuration File

See [Configuration File](./linter/config)

## Migrate from eslint flat config

If you have an existing `eslint.config.*` file, you can convert it to an `.oxlintrc.json` config with [oxlint-migrate](https://github.com/oxc-project/oxlint-migrate).

## Integration

### ESLint

If you are looking for a way to use oxlint in projects that still need ESLint, you can use [eslint-plugin-oxlint](https://github.com/oxc-project/eslint-plugin-oxlint) to turn off ESLint rules that are already supported by oxlint. So you can enjoy the speed of oxlint while still using ESLint.

### lint-staged

```json [package.json]
{
  "lint-staged": {
    "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue,astro,svelte}": "oxlint"
  }
}
```

### VSCode Extension

Download the official VSCode extension from the

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
- [Open VSX Registry](https://open-vsx.org/extension/oxc/oxc-vscode)

### Zed Extension

https://zed.dev/extensions?query=oxc

### Continuous Integration

Since `oxlint` only takes a few seconds to run, we recommend running `oxlint` before ESLint for faster feedback loops.

#### GitHub Actions

```yaml
jobs:
  oxlint:
    name: Lint JS
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npx --yes oxlint@0.0.0 --deny-warnings # change to the latest release
```

It is advised to pin the version, otherwise CI may fail after a new release.

### pre-commit

```yaml [.pre-commit-hooks.yaml]
repos:
  - repo: https://github.com/oxc-project/mirrors-oxlint
    rev: v0.0.0 # change to the latest version
    hooks:
      - id: oxlint
        verbose: true
```

### Unplugin

https://www.npmjs.com/package/unplugin-oxlint

### Vite plugin

https://www.npmjs.com/package/vite-plugin-oxlint

## System Requirements

`oxlint` is built for darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-arm64 and win32-x64.
