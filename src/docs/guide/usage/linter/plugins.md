---
outline: [2, 3]
---

# Plugins

Oxlint supports several of the most popular ESLint plugins out of the box with
most rules in `recommended` configs already implemented.

:::warning
Oxlint does not support custom plugins at this time. We have plans to implement
this in the future. You can track its status on [our
backlog](https://github.com/oxc-project/backlog/issues/40).
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
oxlint --import-plugin -W correctness -W suspicious
```

Will enable all `correctness` and `suspicious` rules in the `import` plugin, as
well as the base rule set. Note that `correctness` rules are turned on by
default.

## Disabling Plugins

Several plugins are enabled by default, and are listed below. You can disable
them with the `--no-<plugin-name>-plugin` flag. For example, to disable
`eslint-plugin-unicorn`, run:

```sh
oxlint --no-unicorn-plugin
```

:::info
run `oxlint --help` to see a full list of flags to enable or disable plugins.
:::

## Supported Plugins

:::info
You can also find this information on the [`linter product
plan`](https://github.com/oxc-project/oxc/issues/481) issue on GitHub.
:::

| Plugin Name                                                                                                      | Default? | Issue                                               | Notes                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`typescript-eslint`](https://typescript-eslint.io/rules/)                                                       | ✅       | [#2180](https://github.com/oxc-project/issues/2180) | Typescript-specific rules from `@typescript-eslint/eslint-plugin`. We do not support type-aware rules at this time. |
| [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)                                 | ✅       | [#684](https://github.com/oxc-project/issues/684)   |
| [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)                                       | ✅       | [#1022](https://github.com/oxc-project/issues/1022) |                                                                                                                     |
| [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)                           | ✅       | [#2174](https://github.com/oxc-project/issues/2174) |                                                                                                                     |
| [`eslint-plugin-react-perf`](https://github.com/cvazac/eslint-plugin-react-perf)                                 |          | [#2041](https://github.com/oxc-project/issues/2041) |                                                                                                                     |
| [`eslint-plugin-next`](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin) |          | [#1929](https://github.com/oxc-project/issues/1929) |                                                                                                                     |
| `oxc`                                                                                                            | ✅       | N/A                                                 | Custom oxc-specific rules, as well as some rules ported from [deepscan](https://deepscan.io/)                       |
| `oxc-security`                                                                                                   |          | N/A                                                 | Custom oxc-specific security and vulnerability detection rules.                                                     |
| [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)                                      |          | [#1117](https://github.com/oxc-project/issues/1117) |                                                                                                                     |
| [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)                                            |          | [#1170](https://github.com/oxc-project/issues/1170) |                                                                                                                     |
| [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                                 |          | [#1141](https://github.com/oxc-project/issues/1141) |                                                                                                                     |
| [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)                                         |          | [#493](https://github.com/oxc-project/issues/493)   | Rules use `node` as the plugin prefix (e.g. `node/no-exports-assign`                                                |
| [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise)                             |          | [#4655](https://github.com/oxc-project/issues/4655) |                                                                                                                     |
| [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)                                     |          | [#492](https://github.com/oxc-project/issues/492)   |                                                                                                                     |
| [`eslint-plugin-vitest`](https://github.com/vitest-dev/eslint-plugin-vitest)                                     |          | [#4656](https://github.com/oxc-project/issues/4656) |                                                                                                                     |

## Adding New Plugins

Do you have a favorite ESLint plugin that you'd like to see supported in Oxlint?
Please open [a feature
request](https://github.com/oxc-project/oxc/issues/new?assignees=&labels=C-enhancement%2CA-linter&projects=&template=feature_request.md&title=linter:%20support%20my%20favorite%20plugin).
Please be aware that we have no plans on supporting rules in plugins that require special
parsers, such as `eslint-plugin-vue` and `eslint-plugin-svelte`, though we are
open to supporting rules in these plugins that only affect script tags in their
source files.
