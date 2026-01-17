---
url: /docs/guide/usage/linter/rules/node/no-process-env.md
---

### What it does

Disallows use of `process.env`.

### Why is this bad?

Directly reading `process.env` can lead to implicit runtime configuration,
make code harder to test, and bypass configuration validation.

### Examples

Examples of **incorrect** code for this rule:

```js
if (process.env.NODE_ENV === "development") {
  // ...
}
```

Examples of **correct** code for this rule:

```js
import config from "./config";

if (config.env === "development") {
  //...
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowedVariables

type: `string[]`

default: `[]`

Variable names which are allowed to be accessed on `process.env`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["node"],
  "rules": {
    "node/no-process-env": "error"
  }
}
```

```bash [CLI]
oxlint --deny node/no-process-env --node-plugin
```

:::

## References

* Rule Source
