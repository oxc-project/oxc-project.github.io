---
title: Linter
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxlint
    alt: npm weekly downloads
---

# Linter (oxlint)

Oxlint is designed to catch erroneous or useless code without requiring any configurations by default.

## Features

- 50 - 100 times faster than ESLint, and scales with the number of CPU cores.
- Over 200 builtin- rules with a growing list from `eslint`, `typescript`, `eslint-plugin-react`, `eslint-plugin-jest`, `eslint-plugin-unicorn` and `eslint-plugin-jsx-a11y`.
- Supports [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file)
- Supports [ESLint comment disabling](https://eslint.org/docs/latest/use/configure/rules#disabling-rules)

## Installation

Install [oxlint](https://www.npmjs.com/package/oxlint):

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

You can also run oxlint directly:

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
$ deno run oxlint@latest
```

:::

`oxlint` does not require Node.js, the binaries can be downloaded from the [latest GitHub releases](https://github.com/oxc-project/oxc/releases/latest).

## Commands

- `npx oxlint@latest --rules` for the list of rules.
- `npx oxlint@latest --help` for configuration instructions.

## Integration

### VSCode Extension

Download the official [VSCode extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode).

### Continuous Integration

Since `oxlint` only takes a few seconds to run, we recommend running `oxlint` prior to ESLint for faster feedback loops.

#### GitHub Actions

```yaml
jobs:
  oxlint:
    name: Lint JS
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npx --yes oxlint@0.0.0 # change to the latest release
```

## System Requirements

`oxlint` is built for darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-arm64 and win32-x64.
