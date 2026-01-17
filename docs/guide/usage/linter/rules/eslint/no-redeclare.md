---
url: /docs/guide/usage/linter/rules/eslint/no-redeclare.md
---

### What it does

This rule disallows redeclaring variables within the same scope, ensuring that each variable
is declared only once. It helps avoid confusion and unintended behavior in code.

### Why is this bad?

Redeclaring variables in the same scope can lead to unexpected behavior, overwriting existing values,
and making the code harder to understand and maintain.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var a = 3;
var a = 10;
```

Examples of **correct** code for this rule:

```javascript
var a = 3;
a = 10;
```

## Configuration

This rule accepts a configuration object with the following properties:

### builtinGlobals

type: `boolean`

default: `true`

When set `true`, it flags redeclaring built-in globals (e.g., `let Object = 1;`).

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-redeclare": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-redeclare
```

:::

## References

* Rule Source
