---
url: /docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.md
---

### What it does

Disallows `oxlint-disable` or `eslint-disable` comments without specifying rules.

### Why is this bad?

A general `oxlint-disable` or `eslint-disable` comment suppresses all lint errors, not just the intended one,
potentially hiding useful warnings and making debugging harder.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/* eslint-disable */
console.log(message);

console.log(message); // eslint-disable-line

// eslint-disable-next-line
console.log(message);
```

```javascript
/* oxlint-disable */
console.log(message);

console.log(message); // oxlint-disable-line

// oxlint-disable-next-line
console.log(message);
```

Examples of **correct** code for this rule:

```javascript
/* eslint-disable no-console */
console.log(message);

console.log(message); // eslint-disable-line no-console

// eslint-disable-next-line no-console
console.log(message);
```

```javascript
/* oxlint-disable no-console */
console.log(message);

console.log(message); // oxlint-disable-line no-console

// oxlint-disable-next-line no-console
console.log(message);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-abusive-eslint-disable": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-abusive-eslint-disable
```

:::

## References

* Rule Source
