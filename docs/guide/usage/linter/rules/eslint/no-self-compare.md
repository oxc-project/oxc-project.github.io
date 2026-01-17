---
url: /docs/guide/usage/linter/rules/eslint/no-self-compare.md
---

### What it does

Disallow comparisons where both sides are exactly the same

### Why is this bad?

Comparing a variable against itself is usually an error, either a typo or refactoring error.
It is confusing to the reader and may potentially introduce a runtime error.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var x = 10;
if (x === x) {
  x = 20;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-self-compare": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-self-compare
```

:::

## References

* Rule Source
