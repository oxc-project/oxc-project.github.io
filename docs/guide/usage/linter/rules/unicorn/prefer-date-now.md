---
url: /docs/guide/usage/linter/rules/unicorn/prefer-date-now.md
---
# unicorn/prefer-date-now&#x20;

### What it does

Prefers use of `Date.now()` over `new Date().getTime()` or `new Date().valueOf()`.

### Why is this bad?

Using `Date.now()` is shorter and nicer than `new Date().getTime()`, and avoids unnecessary instantiation of `Date` objects.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const ts = new Date().getTime();
const ts = new Date().valueOf();
```

Examples of **correct** code for this rule:

```javascript
const ts = Date.now();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-date-now": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-date-now
```

:::

## References

* Rule Source
