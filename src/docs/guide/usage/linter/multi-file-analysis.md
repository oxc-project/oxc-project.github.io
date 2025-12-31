---
title: Multi-file analysis
description: Project-wide linting for import cycles and cross-file issues
---

# Multi-file analysis

Multi-file analysis allows rules to use project-wide information, such as the module dependency graph, instead of analyzing each file in isolation.

## Performance and architecture

ESLint evaluates rules per file and does not provide a built-in project graph. Plugins such as
[`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) must rebuild module resolution and the module graph outside of ESLint’s core, and projects report `import/no-cycle` taking tens of seconds to over a minute on large repositories.

Oxlint implements multi-file analysis in the core engine. It lints files and builds the module graph in parallel, shares parsing and resolution across rules, and typically completes comparable `import/no-cycle` checks in a few seconds.

## Enable the import plugin

To use multi-file analysis, you must enable the `import` plugin and configure at
least one `import/*` rule.

## Detect cycles with `import/no-cycle`

Enable
[`import/no-cycle`](/docs/guide/usage/linter/rules/import/no-cycle.html)
to detect circular dependencies.

Import cycles:

- obscure dependency direction
- make refactors harder
- can cause imported values to be `undefined` due to evaluation order

```json [.oxlintrc.json]
{
  "plugins": ["import"],
  "rules": {
    "import/no-cycle": ["error", { "maxDepth": 3 }]
  }
}
```

## TypeScript path aliases

When running `import/*` rules, Oxlint automatically discovers `tsconfig.json`
to resolve TypeScript path aliases such as `compilerOptions.paths`.
