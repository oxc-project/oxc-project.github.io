# Migrating from Prettier to Oxfmt

If you currently use Prettier as your code formatter, you can follow this guide to migrate to Oxfmt.

Note that Oxfmt is in alpha, and may not be suitable for production use in complex setups.
For the beta milestone, we may provide migration commands.

> oxfmt: `--migrate prettier` · Issue #15849 · oxc-project/oxc\
> https://github.com/oxc-project/oxc/issues/15849

## Caveats for migrating to Oxfmt

Before migrating, ensure that the current release of the Oxfmt alpha meets your project's needs. It is almost entirely compatible with Prettier v3.7 already for basic configurations, but less-common config options and other features are not yet implemented.

The Oxfmt alpha only supports formatting JavaScript and TypeScript files (including those with JSX syntax). If you need support for non-JSX frameworks like Vue or Ember, or other languages like JSON, YAML, or Markdown, you will likely want to wait.

Other important considerations when migrating from Prettier to Oxfmt:

- Oxfmt's formatting output is closest to Prettier v3.7. If you are using an older version of Prettier, you will see more differences in formatting output.
- Oxfmt aims to be mostly compatible with Prettier out-of-the-box, but there may still be some minor differences in formatting output in edge-cases.
- Oxfmt uses a `printWidth` of 100 characters by default, whereas Prettier's default is 80. If your Prettier configuration does not set the `printWidth` setting explicitly, you should make sure to set `"printWidth": 80` in your Oxfmt config file to minimize differences.
- Prettier plugins are not yet supported.
- Some Prettier options are not supported. See the [oxfmt CLI documentation](/docs/guide/usage/formatter/config-file-reference.html) for the full list of currently-supported options.
- Oxfmt supports an `--lsp` flag to spin up a Language Server Protocol server, but editor/IDE integration is still being developed and has not been tested/documented yet for most editors.

Many of these limitations will be addressed in the future, with the Beta or Stable releases of Oxfmt.

See also [the Oxfmt FAQ](/docs/guide/usage/formatter.html#faqs) for any other potential caveats or limitations you may need to consider.

## Step 1: Upgrade Prettier to v3.7 (Optional)

This step is optional, but will make it easier to determine which differences between Oxfmt and prettier are "real".

To minimize the number of changes when migrating to Oxfmt, you should upgrade Prettier to version 3.7 first and reformat all JS/TS files with it, as it is the latest release of Prettier (from Nov 2025) and will be most similar to the output of Oxfmt.

## Step 2: Install Oxfmt

Install Oxfmt as a development dependency with your package manager of choice:

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

## Step 3: Migrate Prettier configuration file

`.oxfmtrc.jsonc` is the configuration file for Oxfmt. Only JSON files are supported.

A basic `.oxfmtrc.jsonc` file looks like this:

```jsonc
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "printWidth": 80,
}
```

If you have a basic `.prettierrc` file, you can simply rename the file with `mv .prettierrc .oxfmtrc.jsonc`.

If you are using YAML or JavaScript to configure Prettier, you will need to convert the configuration to JSON format manually, although for simple configs this should be trivial.

### `prettierrc.js`

Here's an example of migrating a `prettierrc.js` file.

Before:

```js
module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
};
```

After (`.oxfmtrc.jsonc`):

```jsonc
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "printWidth": 80,
}
```

### `prettierrc.yaml`

Here's an example of migrating a `prettierrc.yaml` file.

Before:

```yaml
trailingComma: "es5"
tabWidth: 4
semi: false
singleQuote: true
```

After (`.oxfmtrc.jsonc`):

```jsonc
{
  "$schema": "./node_modules/oxfmt/configuration_schema.json",
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
}
```

## Step 4: Update Formatting Scripts

Update any formatting scripts you currently have, for example in `package.json`, shell scripts, or pre-commit scripts.

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

### CI Workflows

Update any CI workflows that run Prettier, particularly `prettier --check`.

```diff
  - name: Check formatting
-   run: yarn prettier --check .
+   run: yarn oxfmt --check
```

### Git Hooks (e.g. husky, lint-staged)

```diff
"lint-staged": {
- "*": "prettier --write --no-error-on-unmatched-pattern"
+ "*": "oxfmt --no-error-on-unmatched-pattern"
}
```

## Step 5: Run formatter

Run Oxfmt on your codebase to check for any changes and ensure that the configuration was migrated correctly:

```sh
# Your script specified in Step 4
npm run format
```

If you no longer need Prettier, you can uninstall for now.

## Done!

You have now migrated to Oxfmt :)

Please see the section below for any additional, optional steps you may need to take.

These are only applicable for some setups, so skip them if they don't apply to you.

### Update editor integrations

**TODO: Clarify the status of VS Code integration, and also add a note for potentially using Oxfmt in JetBrains IDEs + others via the LSP server.**

**Note that the oxc VS Code extension includes Oxfmt support, but it is experimental and incomplete**. It may not fully work yet, so please be mindful of this before migrating.

If you have any editor integrations for Prettier, update them to use Oxfmt instead. For example, update `.vscode/settings.json` to use Oxfmt:

```diff
{
- "editor.defaultFormatter": "esbenp.prettier-vscode"
+ "editor.defaultFormatter": "oxc.oxc-vscode"
}
```

And update `.vscode/extensions.json` to recommend the oxc extension instead of Prettier.

```diff
{
  "recommendations": [
-   "esbenp.prettier-vscode"
+   "oxc.oxc-vscode"
  ]
}
```

### Update `CONTRIBUTING.md`

If you have a `CONTRIBUTING.md` file that references Prettier, update those references to use Oxfmt.

### Update `AGENTS.md`/`CLAUDE.md`

If you use an `AGENTS.md` or `CLAUDE.md` file, you should check for references to Prettier. If you have any references in those files, you'll want to update them to reference Oxfmt and Oxfmt's CLI commands instead.

### Update lint rules

If you have any lint rules that check for Prettier formatting (e.g. `eslint-plugin-prettier`), you should remove them.

While you're at it, you could also consider migrating to oxlint ;)

### Create/update `.git-blame-ignore-revs`

If you want to avoid extra noise in your `git blame` history, you can add the commit SHA where you reformatted files using Oxfmt to your `.git-blame-ignore-revs` file. This will make `git blame` ignore that commit when showing blame information. This file is supported natively by git, and by both GitHub and GitLab.
