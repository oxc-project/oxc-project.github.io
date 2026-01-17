---
url: /docs/guide/usage/linter/rules/oxc/double-comparisons.md
---

### What it does

This rule checks for double comparisons in logical expressions.

### Why is this bad?

Redundant comparisons can be confusing and make code harder to understand.

### Examples

Examples of **incorrect** code for this rule:

```javascript
x === y || x < y;
x < y || x === y;
```

Examples of **correct** code for this rule:

```javascript
x <= y;
x >= y;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/double-comparisons": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/double-comparisons
```

:::

## References

* Rule Source
