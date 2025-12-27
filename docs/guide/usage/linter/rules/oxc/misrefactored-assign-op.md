---
url: /docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.md
---
# oxc/misrefactored-assign-op&#x20;

### What it does

https://rust-lang.github.io/rust-clippy/master/#/misrefactored\_assign\_op

Checks for `a op= a op b` or `a op= b op a` patterns.

### Why is this bad?

Most likely these are bugs where one meant to write `a op= b`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
a += a + b;
a -= a - b;
```

Examples of **correct** code for this rule:

```javascript
a += b;
a -= b;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/misrefactored-assign-op": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/misrefactored-assign-op
```

:::

## References

* Rule Source
