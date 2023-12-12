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

## Features

- 50 - 100 times faster than ESLint, and scales with the number of CPU cores ([benchmark](https://github.com/oxc-project/bench-javascript-linter)).
- Over 200 rules with a growing list from `eslint`, `typescript`, `eslint-plugin-react`, `eslint-plugin-jest`, `eslint-plugin-unicorn` and `eslint-plugin-jsx-a11y`.
- Supports [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file).
- Supports [ESLint comment disabling](https://eslint.org/docs/latest/use/configure/rules#disabling-rules).

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

::: details Help details

```
Usage: oxlint [-A=NAME | -D=NAME]... [--fix] [PATH]...

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

Miscellaneous
        --timing              Display the execution time of each lint rule
                              [env:TIMING: not set]
        --rules               list all the rules that are currently registered
        --threads=INT         Number of threads to use. Set to 1 for using only 1 CPU core

Codeowners
        --codeowners-file=PATH  Path to CODEOWNERS file
        --codeowners=NAME     Code owner names, e.g. @Boshen

Available positional items:
    PATH                      Single file, single path or list of paths

Available options:
    -h, --help                Prints help information
```

:::

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
