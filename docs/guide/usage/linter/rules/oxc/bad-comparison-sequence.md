---
url: /docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.md
---

### What it does

This rule applies when the comparison operator is applied two or more times in a row.

### Why is this bad?

Because comparison operator is a binary operator, it is impossible to compare three or more operands at once.
If comparison operator is used to compare three or more operands, only the first two operands are compared and the rest is compared with its result of boolean type.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if ((a == b) == c) {
  console.log("a, b, and c are the same");
}
```

Examples of **correct** code for this rule:

```javascript
if (a == b && b == c) {
  console.log("a, b, and c are the same");
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-comparison-sequence": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/bad-comparison-sequence
```

:::

## References

* Rule Source
