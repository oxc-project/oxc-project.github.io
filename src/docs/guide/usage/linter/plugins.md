---
outline: [2, 3]
---

# Plugins

Oxlint supports several of the most popular ESLint plugins out of the box with
most rules in `recommended` configs already implemented.

:::warning Custom JavaScript Plugins Preview
Custom JavaScript plugins are now available in preview! While the feature is still being refined, you can try it out today.

**Learn more:** Check out our [announcement blog post](/blog/2025-09-18-oxlint-custom-js-plugins-preview) for details on how to get started with custom JavaScript plugins.

You can track development progress on [our backlog](https://github.com/oxc-project/oxc/issues/9905) and provide feedback in [this discussion](https://github.com/oxc-project/oxc/discussions/10342).
:::

## Enabling Plugins

You can enable plugins using the `--<plugin-name>-plugin` CLI flag. For example,
to enable `eslint-plugin-import`, run

```sh
oxlint --import-plugin
```

Once enabled, rules in categories you have enabled will automatically be turned
on. For example,

```sh
oxlint --import-plugin -D correctness -W suspicious
```

From the import plugin, this will enable all `correctness` rules as errors and `suspicious` rules as warnings, plus the rules from the base rule set. Note that `correctness` rules are turned on by default.

### Enabling plugins in a configuration file

You can also enable plugins in a configuration file by adding the `plugins`
field. For example, to enable `eslint-plugin-import`, add the following to your
`.oxlintrc.json` file:

```json
{
  "plugins": ["import"]
}
```

> [!NOTE]
> Setting the `plugins` field will **overwrite** the base set of plugins. The plugins array should reflect all of the plugins you want to use.

## Disabling Plugins

Several plugins are enabled by default, and are listed below. You can disable
them with the `--disable-<plugin-name>-plugin` flag. For example, to disable
`eslint-plugin-unicorn`, run:

```sh
oxlint --disable-unicorn-plugin
```

Only default plugins support being disabled, as other plugins can be omitted simply by not enabling them.

:::info
run `oxlint --help` to see a full list of flags to enable or disable plugins.
:::

### Disabling plugins in a configuration file

You can also disable default plugins in a configuration file by simply adding an empty array to the `plugins` field.

```json
{
  "plugins": []
}
```

This configuration will disable all default plugins and only use the base set of rules.

## Supported Plugins

:::info
You can also find this information on the [`linter product
plan`](https://github.com/oxc-project/oxc/issues/481) issue on GitHub.
:::

| Plugin Name  | Default? | Issue                                                                                                            | Notes                                                                                                                                                                            |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eslint`     | ✅       | [#479](https://github.com/oxc-project/oxc/issues/479)                                                            | Rules from [`eslint`](https://eslint.org/docs/latest/rules/) (core)                                                                                                              |
| `typescript` | ✅       | [#2180](https://github.com/oxc-project/oxc/issues/2180)                                                          | TypeScript-specific rules from [`@typescript-eslint`](https://typescript-eslint.io/rules/). Type-aware rules are supported in preview (use `--type-aware` flag).                 |
| `unicorn`    | ✅       | [#684](https://github.com/oxc-project/oxc/issues/684)                                                            | Rules from [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)                                                                                      |
| `react`      |          | [#1022](https://github.com/oxc-project/oxc/issues/1022), [#2174](https://github.com/oxc-project/oxc/issues/2174) | Rules from [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) |
| `react-perf` |          | [#2041](https://github.com/oxc-project/oxc/issues/2041)                                                          | Rules from [`eslint-plugin-react-perf`](https://github.com/cvazac/eslint-plugin-react-perf)                                                                                      |
| `nextjs`     |          | [#1929](https://github.com/oxc-project/oxc/issues/1929)                                                          | Rules from [`eslint-plugin-next`](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin)                                                      |
| `oxc`        | ✅       | N/A                                                                                                              | Custom oxc-specific rules, as well as some rules ported from [deepscan](https://deepscan.io/)                                                                                    |
| `import`     |          | [#1117](https://github.com/oxc-project/oxc/issues/1117)                                                          | Rules from [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)                                                                                           |
| `jsdoc`      |          | [#1170](https://github.com/oxc-project/oxc/issues/1170)                                                          | Rules from [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)                                                                                                 |
| `jsx-a11y`   |          | [#1141](https://github.com/oxc-project/oxc/issues/1141)                                                          | Rules from [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                                                                                      |
| `node`       |          | [#493](https://github.com/oxc-project/oxc/issues/493)                                                            | Rules from [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)                                                                                              |
| `promise`    |          | [#4655](https://github.com/oxc-project/oxc/issues/4655)                                                          | Rules from [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise)                                                                                  |
| `jest`       |          | [#492](https://github.com/oxc-project/oxc/issues/492)                                                            | Rules from [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)                                                                                          |
| `vitest`     |          | [#4656](https://github.com/oxc-project/oxc/issues/4656)                                                          | Rules from [`eslint-plugin-vitest`](https://github.com/vitest-dev/eslint-plugin-vitest)                                                                                          |

## Adding New Plugins

Do you have a favorite ESLint plugin that you'd like to see supported in Oxlint?
Please open [a feature request](https://github.com/oxc-project/oxc/issues/new?assignees=&labels=C-enhancement%2CA-linter&projects=&template=feature_request.md&title=linter:%20support%20my%20favorite%20plugin).
Please be aware that we have no plans on supporting rules in plugins that require special
parsers, such as `eslint-plugin-vue` and `eslint-plugin-svelte`, though we are
open to supporting rules in these plugins that only affect script tags in their
source files.
