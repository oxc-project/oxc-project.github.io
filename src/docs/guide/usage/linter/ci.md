---
title: Setup CI and other integrations
description: Run Oxlint in CI or as a git hook.
---

# Setup CI and other integrations

You can - and should - setup your CI pipeline to run Oxlint and fail the build on lint errors.

This page also covers other integrations you may want to include, like git pre-commit hooks.

## CI

### GitHub Actions

Create `.github/workflows/oxlint.yml`:

```yaml [.github/workflows/oxlint.yml]
name: Lint

on:
  pull_request:
  push:
    branches: [main]

jobs:
  oxlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: pnpm

      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint --deny-warnings
```

## Git hooks

### lint-staged

For JS/TS projects using [lint-staged](https://github.com/lint-staged/lint-staged), you can set up oxlint to run pre-commit as follows:

```json [package.json]
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": "pnpm run lint"
  }
}
```

### pre-commit

If you use [pre-commit](https://pre-commit.com/) to manage git hooks, you can set up Oxlint as follows:

```yaml [.pre-commit-config.yaml]
repos:
  - repo: https://github.com/oxc-project/mirrors-oxlint
    rev: v0.0.0
    hooks:
      - id: oxlint
        verbose: true
```

Replace `v0.0.0` with the latest version.

## Other integrations

### Unplugin

Unplugin is supported via a [third-party package](https://www.npmjs.com/package/unplugin-oxlint)

### Vite plugin

A Vite plugin is supported via a [third-party package](https://www.npmjs.com/package/vite-plugin-oxlint)
