# Plugins

Oxlint supports several of the most popular ESLint plugins out of the box with
most rules in `recommended` configs already implemented.

Oxlint also supports [plugins written in JS](/docs/guide/usage/linter/js-plugins.html).

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
| `typescript` | ✅       | [#2180](https://github.com/oxc-project/oxc/issues/2180)                                                          | TypeScript-specific rules from [`@typescript-eslint`](https://typescript-eslint.io/rules/). Type-aware rules are supported in alpha (use `--type-aware` flag).                   |
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
| `vue`        |          | [#11440](https://github.com/oxc-project/oxc/issues/11440)                                                        | Rules from [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) that work with `<script>` tags                                                                      |

## Adding New Plugins

We do not plan to add more Rust-based plugins due to supporting nearly all ESLint plugins [through JS plugins](https://oxc.rs/docs/guide/usage/linter/js-plugins.html#using-js-plugins).
However, contributions that add rules to existing plugins are **highly encouraged**.
If you think a rule or plugin would benefit from being written in rust, please open a discussion first, before making a pull request.
