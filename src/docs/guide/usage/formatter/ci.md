# Setup CI and other integrations

You can - and should - setup your CI pipeline to run Oxfmt and fail the build on format errors.

This page also covers other integrations you may want to include, like git pre-commit hooks.

## CI

### GitHub Actions

Add a formatting check to your GitHub Actions workflow:

```yaml [.github/workflows/ci.yml]
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  format:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - run: pnpm run fmt:check
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
