---
url: /docs/guide/usage/linter/rules/eslint/require-yield.md
---

### What it does

This rule generates warnings for generator functions that do not have the yield keyword.

### Why is this bad?

Probably a mistake.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function* foo() {
  return 10;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "require-yield": "error"
  }
}
```

```bash [CLI]
oxlint --deny require-yield
```

:::

## References

* Rule Source
