---
url: /docs/guide/usage/linter/rules/eslint/no-undef.md
---

### What it does

Disallow the use of undeclared variables.

This rule can be disabled for TypeScript code, as the TypeScript compiler
enforces this check.

### Why is this bad?

It is most likely a potential ReferenceError caused by a misspelling
of a variable or parameter name.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = someFunction();
var bar = a + 1;
```

## Configuration

This rule accepts a configuration object with the following properties:

### typeof

type: `boolean`

default: `false`

When set to `true`, warns on undefined variables used in a `typeof` expression.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-undef": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-undef
```

:::

## References

* Rule Source
