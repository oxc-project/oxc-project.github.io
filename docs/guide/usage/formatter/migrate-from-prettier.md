---
url: /docs/guide/usage/formatter/migrate-from-prettier.md
---
# Migrate from Prettier

This guide covers migrating from Prettier to Oxfmt.

:::warning
Oxfmt is in alpha and may not suit complex setups.
:::

## Quick start

For simple setups, migrate with a single command:

::: code-group

```bash [npm]
$ npm add -D oxfmt@latest && npx oxfmt --migrate=prettier && npx oxfmt
```

```bash [pnpm]
$ pnpm add -D oxfmt@latest && pnpm oxfmt --migrate=prettier && pnpm oxfmt
```

```bash [yarn]
$ yarn add -D oxfmt@latest && yarn oxfmt --migrate=prettier && yarn oxfmt
```

```bash [bun]
$ bun add -D oxfmt@latest && bunx oxfmt --migrate=prettier && bunx oxfmt
```

:::

## Before you migrate

Oxfmt is compatible with Prettier v3.7 for basic configurations.

Key differences:

* Default `printWidth` is 100 (Prettier uses 80)
* Prettier plugins are not supported
* Some options are not supported (see [config reference](/docs/guide/usage/formatter/config-file-reference.html))
* Editor integration via `--lsp` is still in development

See [Unsupported features](/docs/guide/usage/formatter/unsupported-features) for details.

## Step 1: Upgrade Prettier to v3.7 (optional)

Oxfmt's output is closest to Prettier v3.7. Upgrading first minimizes formatting differences.

## Step 2: Install Oxfmt

::: code-group

```bash [npm]
$ npm add -D oxfmt@latest
```

```bash [pnpm]
$ pnpm add -D oxfmt@latest
```

```bash [yarn]
$ yarn add -D oxfmt@latest
```

```bash [bun]
$ bun add -D oxfmt@latest
```

```bash [deno]
$ deno add -D npm:oxfmt@latest
```

:::

## Step 3: Migrate configuration

Oxfmt uses `.oxfmtrc.json` (JSON only). Basic example:

```json [.oxfmtrc.json]
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "printWidth": 80
}
```

Run `oxfmt --migrate prettier` to convert your Prettier config automatically.

### `prettierrc.js` example

Before:

```js
module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
};
```

After (`.oxfmtrc.json`):

```json [.oxfmtrc.json]
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "printWidth": 80
}
```

### `prettierrc.yaml` example

Before:

```yaml
trailingComma: "es5"
tabWidth: 4
semi: false
singleQuote: true
```

After (`.oxfmtrc.json`):

```json [.oxfmtrc.json]
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true,
  "printWidth": 80
}
```

## Step 4: Update scripts

### `package.json` scripts

```diff
{
  "scripts": {
-   "format": "prettier --write .",
+   "format": "oxfmt",
-   "format:check": "prettier --check ."
+   "format:check": "oxfmt --check"
  }
}
```

### CI workflows

```diff
  - name: Check formatting
-   run: yarn prettier --check .
+   run: yarn oxfmt --check
```

### Git hooks (husky, lint-staged)

```diff
"lint-staged": {
- "*": "prettier --write --no-error-on-unmatched-pattern"
+ "*": "oxfmt --no-error-on-unmatched-pattern"
}
```

## Step 5: Run formatter

```sh
npm run format
```

Uninstall Prettier if no longer needed.

## Optional steps

### Update editor integrations

See [Setup editors](./editors).

### Update documentation

Update references to Prettier in `CONTRIBUTING.md`, `AGENTS.md`, or `CLAUDE.md`.

### Update lint rules

Remove `eslint-plugin-prettier` if present. Consider migrating to [oxlint](../linter.md).

### Update `.git-blame-ignore-revs`

Add the reformatting commit SHA to `.git-blame-ignore-revs` to hide it from `git blame`.
