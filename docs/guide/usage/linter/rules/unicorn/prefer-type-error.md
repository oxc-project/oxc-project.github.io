---
url: /docs/guide/usage/linter/rules/unicorn/prefer-type-error.md
---

### What it does

Enforce throwing a `TypeError` instead of a generic `Error` after a type checking if-statement.

### Why is this bad?

Throwing a `TypeError` instead of a generic `Error` after a type checking if-statement is more specific and helps to catch bugs.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (Array.isArray(foo)) {
  throw new Error("Expected foo to be an array");
}
```

Examples of **correct** code for this rule:

```javascript
if (Array.isArray(foo)) {
  throw new TypeError("Expected foo to be an array");
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-type-error": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-type-error
```

:::

## References

* Rule Source
