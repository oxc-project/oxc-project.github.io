# Migrate from ESLint

This guide is for existing JavaScript and TypeScript projects that currently use ESLint and want to migrate to Oxlint.

If you are starting a new project, or do not need to preserve an existing ESLint configuration, we recommend initializing a fresh Oxlint config instead:

```bash
oxlint --init
```

## Overview

Oxlint and ESLint share similar configuration concepts, but they differ in supported rules and config formats.

When migrating, expect the following:

- Most ESLint core rules and popular plugin rules are supported
- Some rules may not yet be available
- ESLint configuration files must be converted to Oxlint’s config format
- Oxlint is designed for incremental adoption; a full migration is not required upfront

## Migrating from ESLint Flat Config

If your project uses ESLint Flat Config (e.g. `eslint.config.js`), you can migrate automatically using [`@oxlint/migrate`](https://www.npmjs.com/package/@oxlint/migrate).

### Run the migration tool

From the project root:

```bash
npx @oxlint/migrate <optional-eslint-flat-config-path>
```

This command:

- Reads your ESLint flat file config
- Converts supported rules to an Oxlint config
- Preserves rule severities and options where possible

The generated config can be edited manually after migration.

See the list of [available options](https://github.com/oxc-project/oxlint-migrate?tab=readme-ov-file#options) for more details.

### Type-aware TypeScript rules

If your ESLint setup uses `typescript-eslint` with type-aware rules, you can pass the `--type-aware` flag:

```bash
npx @oxlint/migrate --type-aware
```

This ensures the generated Oxlint config enables the required settings for type-aware analysis.

### JavaScript plugins

If your ESLint config uses plugins that are not supported natively by Oxlint, you can retain them using JavaScript plugins:

```bash
npx @oxlint/migrate --js-plugins
```

This allows you to continue using those rules while migrating the rest of your configuration. For more information on JavaScript Plugins, see [the JS Plugins page](docs/guide/usage/linter/js-plugins).

## Running Oxlint and ESLint together

If not all required rules are available in Oxlint, you can run Oxlint and ESLint side by side.

A common setup is:

1. Enable Oxlint for all supported rules
2. Keep ESLint for unsupported rules
3. Disable overlapping rules in ESLint

Because Oxlint is significantly faster than ESLint, it is recommended to run Oxlint first to catch errors early, then fall back to ESLint only if needed.

For example:

```bash
oxlint && eslint
```

### Disabling overlapping rules in ESLint

You can use [`eslint-plugin-oxlint`](https://www.npmjs.com/package/eslint-plugin-oxlint) to disable ESLint rules that are already handled by Oxlint:

```bash
npm install --save-dev oxlint-eslint-plugin
This reduces duplicate diagnostics and allows ESLint to focus only on rules that Oxlint does not yet support.

## Migrating from legacy ESLint configs

If your project uses legacy ESLint config files (such as `.eslintrc.js` or `.eslintrc.json`), they must be migrated manually.

The configuration shapes map closely to Oxlint’s config format, so most rules and options can be translated directly.
