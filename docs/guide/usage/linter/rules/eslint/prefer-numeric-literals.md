---
url: /docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.md
---

### What it does

Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal
literals.

### Why is this bad?

The parseInt() and Number.parseInt() functions can be used to turn binary, octal, and
hexadecimal strings into integers. As binary, octal, and hexadecimal literals are supported
in ES2015, this rule encourages use of those numeric literals instead of parseInt() or
Number.parseInt().

### Examples

Examples of **incorrect** code for this rule:

```javascript
parseInt("111110111", 2) === 503;
parseInt(`111110111`, 2) === 503;
parseInt("767", 8) === 503;
parseInt("1F7", 16) === 503;
Number.parseInt("111110111", 2) === 503;
Number.parseInt("767", 8) === 503;
Number.parseInt("1F7", 16) === 503;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "prefer-numeric-literals": "error"
  }
}
```

```bash [CLI]
oxlint --deny prefer-numeric-literals
```

:::

## References

* Rule Source
