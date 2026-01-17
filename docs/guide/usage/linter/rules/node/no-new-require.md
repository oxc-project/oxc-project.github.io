---
url: /docs/guide/usage/linter/rules/node/no-new-require.md
---

### What it does

Warn about calling `new` on `require`.

### Why is this bad?

The `require` function is used to include modules and might return a constructor. As this
is not always the case this can be confusing.

### Examples

Examples of **incorrect** code for this rule:

```js
var appHeader = new require("app-header");
```

Examples of **correct** code for this rule:

```js
var AppHeader = require("app-header");
var appHeader = new AppHeader();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["node"],
  "rules": {
    "node/no-new-require": "error"
  }
}
```

```bash [CLI]
oxlint --deny node/no-new-require --node-plugin
```

:::

## References

* Rule Source
