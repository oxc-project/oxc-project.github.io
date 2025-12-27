---
url: /docs/guide/usage/linter/rules/eslint/no-with.md
---
# eslint/no-with&#x20;

### What it does

Disallow [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) statements.

### Why is this bad?

The with statement is potentially problematic because it adds members
of an object to the current scope, making it impossible to tell what a
variable inside the block actually refers to.

It is generally considered a bad practice and is forbidden in strict mode.

This rule is not necessary in TypeScript code if `alwaysStrict` is enabled.

### Examples

Examples of **incorrect** code for this rule:

```javascript
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-with": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-with
```

:::

## References

* Rule Source
