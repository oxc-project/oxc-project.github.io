---
title: Setup CI and other integrations
description: Run Oxfmt in CI or as a git hook.
---

# Setup CI and other integrations

You can - and should - setup your CI pipeline to run Oxfmt and fail the build on format errors.

This page also covers other integrations you may want to include, like git pre-commit hooks.

## CI

### GitHub Actions

First, add a `fmt:check` script to your `package.json` if you don't have one already:

```json [package.json]
{
  "scripts": {
    "fmt:check": "oxfmt --check"
  }
}
```

And then add a job to your GitHub Actions workflow:

```yaml [.github/workflows/ci.yml]
name: CI

on:
  pull_request:
  push:
    branches: [main]

permissions: {}

jobs:
  format:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: pnpm

      # Or yarn, npm, etc.
      - run: pnpm install --frozen-lockfile
      - run: pnpm run fmt:check
```

#### Autofix formatting issues

If you find that you often forget to run Oxfmt before opening PRs, and don't or can't use pre-commit hooks, you can add an autofix step to your CI workflow using [autofix.ci](https://autofix.ci).

See [https://autofix.ci/setup](https://autofix.ci/setup) for more details, you will need to install the relevant GitHub App as well.

Here's an example GitHub Actions workflow you can use:

```yaml [.github/workflows/autofix.yml]
name: autofix.ci # needs to use this name

on:
  pull_request:
  push:
    branches: ["main"]

permissions:
  contents: read

jobs:
  autofix:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: pnpm

      # Or yarn, npm, etc.
      - run: pnpm install --frozen-lockfile

      # Run oxfmt to write changes, autofix.ci will commit them if there are any differences.
      # Be sure to add a `fmt` script to your `package.json` if you haven't already.
      - run: pnpm run fmt

      # NOTE: It is strongly recommended to use the latest SHA hash for this action instead of the version number. (See https://autofix.ci/setup for more details.)
      - uses: autofix-ci/action@1.3.2
```

## Pre-commit hook

To auto-format staged files, use `oxfmt --no-error-on-unmatched-pattern`. This formats all supported files and avoids errors when no files match (e.g., only Ruby files staged).

Use `--check` to verify formatting without writing files.

For husky/lint-staged, add to `package.json`:

```json [package.json]
{
  "lint-staged": {
    "*": "oxfmt --no-error-on-unmatched-pattern"
  }
}
```
