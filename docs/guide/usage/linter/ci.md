---
url: /docs/guide/usage/linter/ci.md
description: Run Oxlint in CI or as a git hook.
---

# Setup CI and other integrations

You can - and should - setup your CI pipeline to run Oxlint and fail the build on lint errors.

This page also covers other integrations you may want to include, like git pre-commit hooks.

## CI

These instructions assume you have already set up Oxlint in your project by adding `oxlint` to your devDependencies in your `package.json`, and already have an oxlint configuration file in the repo.

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

### GitLab CI

If you use GitLab CI, you can set up Oxlint with `--format=gitlab` and [GitLab's Code Quality feature](https://docs.gitlab.com/ci/testing/code_quality/#code-quality-report-format) to get inline annotations for lint violations in merge requests.

To set this up, you can add a script to your `package.json` to output the gitlab format and save it to a file, like so:

```json [package.json]
{
  "scripts": {
    "lint:gitlab": "oxlint --format=gitlab > gitlab-oxlint-report.json"
  }
}
```

And then add a job to your `.gitlab-ci.yml`, to run the script and upload the report as a Code Quality artifact:

```yml [.gitlab-ci.yml]
oxlint:
  image: node:lts
  stage: test
  before_script:
    # alternatively use pnpm install / yarn install here
    - npm install
  script:
    - npm run lint:gitlab
  artifacts:
    reports:
      codequality:
        # This is relative to your repository root, so adjust if your repo has a different structure or you put the report in a different location
        - gitlab-oxlint-report.json
```

If you do not want to use the Code Quality feature, you can simply run oxlint without `--format=gitlab` in the CI job instead.

You should ensure type-aware rules are enabled if you want to use them, and consider caching `node_modules` to speed up the installation of dependencies.

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
