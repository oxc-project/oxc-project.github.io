---
url: /docs/guide/usage/linter/rules/unicorn/number-literal-case.md
---

### What it does

This rule enforces proper case for numeric literals.

### Why is this bad?

When both an identifier and a number literal are in lower case, it can be hard to differentiate between them.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = 0xff;
const foo = 0xff;
const foo = 0xff;
const foo = 0xffn;

const foo = 0b10;
const foo = 0b10n;

const foo = 0o76;
const foo = 0o76n;

const foo = 2e-5;
```

Examples of **correct** code for this rule:

```javascript
const foo = 0xff;
const foo = 0b10;
const foo = 0o76;
const foo = 0xffn;
const foo = 2e5;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/number-literal-case": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/number-literal-case
```

:::

## References

* Rule Source
