---
url: /docs/guide/usage/linter/rules/unicorn/prefer-includes.md
---

### What it does

Prefer `includes()` over `indexOf()` when checking for existence or non-existence.
All built-ins have `.includes()` in addition to `.indexOf()`.

### Why is this bad?

The `.includes()` method is more readable and less error-prone than `.indexOf()`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (str.indexOf("foo") !== -1) {
}
```

Examples of **correct** code for this rule:

```javascript
if (str.includes("foo")) {
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-includes": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-includes
```

:::

## References

* Rule Source
