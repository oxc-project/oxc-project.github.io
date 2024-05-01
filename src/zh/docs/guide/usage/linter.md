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
At the current stage, oxlint is **not intended to fully replace ESLint**; it serves as an enhancement when ESLint's slowness becomes a bottleneck in your workflow.

We recommend running oxlint before ESLint in your lint-staged or CI setup for a quicker feedback loop, considering it only takes a few seconds to run on large codebases.
:::

## Features

- 50 - 100 times faster than ESLint, and scales with the number of CPU cores ([benchmark](https://github.com/oxc-project/bench-javascript-linter)).
- Over 200 rules with a growing list from `eslint`, `typescript`, `eslint-plugin-react`, `eslint-plugin-jest`, `eslint-plugin-unicorn` and `eslint-plugin-jsx-a11y`.
- Supports [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file).
- Supports [ESLint comment disabling](https://eslint.org/docs/latest/use/configure/rules#disabling-rules).
- Lint `<script>` content of `.vue`, `.astro`, `.svelte` files by default.

## Installation

Run oxlint directly at the root of your repository:

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

## Usages

- `npx oxlint@latest --rules` for the list of rules.
- `npx oxlint@latest --help` for configuration instructions.

### Useful Options and Examples

- `--deny-warnings` turn warnings into errors, useful for failing CI with exit code 1.
- `-D all` deny (turn on) all rules.
- `-A all -D eqeqeq` run a single rule.
- `-D correctness -D perf -A debugger -A eqeqeq` deny (turn on) `correctness` and `perf` rules and allow (turn off) the `debugger` and `eqeqeq` rule.
- `-c ./eslintrc.json` use the `rules` field to configure the rules, as documented in [ESLint](https://eslint.org/docs/latest/use/configure/rules#using-configuration-files). Only `json` format is supported.

:::details Help details

```
Usage: oxlint [-A=NAME | -D=NAME]... [--fix] [-f] [-c=PATH] [--tsconfig=PATH] [PATH]...

Allowing / Denying Multiple Lints
  For example `-D correctness -A no-debugger` or `-A all -D no-debugger`.
  The default category is "-D correctness".
  Use "--rules" for rule names.
  Use "--help --help" for rule categories.
    -A, --allow=NAME          Allow the rule or category (suppress the lint)
    -D, --deny=NAME           Deny the rule or category (emit an error)

Enable Plugins
        --import-plugin       Enable the experimental import plugin and detect ESM problems
        --jest-plugin         Enable the Jest plugin and detect test problems
        --jsx-a11y-plugin     Enable the JSX-a11y plugin and detect accessibility problems
        --nextjs-plugin       Enable the Next.js plugin and detect Next.js problems
        --react-perf-plugin   Enable the React performance plugin and detect rendering performance
                              problems

Fix Problems
        --fix                 Fix as many issues as possible. Only unfixed issues are reported in the
                              output

Ignore Files
        --ignore-path=PATH    Specify the file to use as your .eslintignore
        --ignore-pattern=PAT  Specify patterns of files to ignore (in addition to those in .eslintignore)
        --no-ignore           Disables excluding of files from .eslintignore files, --ignore-path flags
                              and --ignore-pattern flags

Handle Warnings
        --quiet               Disable reporting on warnings, only errors are reported
        --deny-warnings       Ensure warnings produce a non-zero exit code
        --max-warnings=INT    Specify a warning threshold, which can be used to force exit with an error
                              status if there are too many warning-level rule violations in your project

Output
        -f, --format          Use a specific output format (default, json, checkstyle, unix)

Miscellaneous
        --threads=INT         Number of threads to use. Set to 1 for using only 1 CPU core

Available positional items:
    PATH                      Single file, single path or list of paths

Available options:
        --rules               list all the rules that are currently registered
    -c, --config=PATH         ESLint configuration file (experimental)
        --tsconfig=PATH       TypeScript `tsconfig.json` path for reading path alias and project
                              references for import plugin
    -h, --help                Prints help information
    -V, --version             Prints version information
```

:::

## Integration

### ESLint

If you are looking for a way to use oxlint in projects that still need ESLint, You can use [eslint-plugin-oxlint](https://github.com/oxc-project/eslint-plugin-oxlint) to turn off ESLint rules that are already supported by oxlint. So you can enjoy the speed of oxlint while still using ESLint.

### lint-staged

```json
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
      - run: npx --yes oxlint@0.0.0 --deny-warnings # change to the latest release
```

It is advised to pin the version, otherwise CI may fail after a new release.

### pre-commit

.pre-commit-hooks.yaml

```yaml
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
