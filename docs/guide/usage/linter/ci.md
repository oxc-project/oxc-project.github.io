---
url: /docs/guide/usage/linter/ci.md
description: Run Oxlint in CI.
---

# Setup CI

## GitHub Actions

Create `.github/workflows/oxlint.yml`:

```yaml
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

      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: pnpm

      - uses: pnpm/action-setup@v4

      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint --deny-warnings # given package.json scripts "lint": "oxlint"
```

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
