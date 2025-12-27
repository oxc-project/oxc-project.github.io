---
url: /docs/guide/usage/linter/rules/unicorn/no-zero-fractions.md
---
# unicorn/no-zero-fractions&#x20;

### What it does

Prevents the use of zero fractions.

### Why is this bad?

There is no difference in JavaScript between, for example, `1`, `1.0` and `1.`, so prefer the former for consistency and brevity.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = 1.0;
const foo = -1.0;
const foo = 123_456.000_000;
```

Examples of **correct** code for this rule:

```javascript
const foo = 1;
const foo = -1;
const foo = 123456;
const foo = 1.1;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-zero-fractions": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-zero-fractions
```

:::

## References

* Rule Source
