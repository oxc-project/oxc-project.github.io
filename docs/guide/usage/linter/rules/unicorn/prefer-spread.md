---
url: /docs/guide/usage/linter/rules/unicorn/prefer-spread.md
---

### What it does

Enforces the use of [the spread operator (`...`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) over outdated patterns.

### Why is this bad?

Using the spread operator is more concise and readable.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = Array.from(set);
const foo = Array.from(new Set([1, 2]));
```

Examples of **correct** code for this rule:

```javascript
[...set].map(() => {});
Array.from(...argumentsArray);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-spread": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-spread
```

:::

## References

* Rule Source
