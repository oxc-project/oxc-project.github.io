---
id: linter
title: Linter
---

# Oxlint

## Features

- Runs 50 -100 times faster than ESLint ([Benchmark](https://github.com/oxc-project/bench-javascript-linter)).
- No configuration is required for default usage
- Reports errors and useless code by default

## Usage

```bash
npx oxlint@latest
```

You may also use `yarn dlx`, `pnpm dlx`, `bunx` or `deno run` because `oxlint` is published to [npm](https://www.npmjs.com/package/oxlint).

### Commands

Run `npx oxlint@latest --rules` for the list of rules.

Run `npx oxlint@latest --help` for usage instructions:

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

## VSCode Extension

https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode

## GitHub Actions

```yaml
oxlint:
  name: Lint JS
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - run: npx --yes oxlint@latest
```

## Without Node.js

You may download the binaries from the [latest GitHub releases](https://github.com/web-infra-dev/oxc/releases/latest).

## System Requirements

`oxlint` is built for the following systems:

- darwin-arm64
- darwin-x64
- linux-arm64
- linux-x64
- win32-arm64
- win32-x64
