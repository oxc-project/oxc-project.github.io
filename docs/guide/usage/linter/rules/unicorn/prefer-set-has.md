---
url: /docs/guide/usage/linter/rules/unicorn/prefer-set-has.md
---
# unicorn/prefer-set-has&#x20;

### What it does

Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.

### Why is this bad?

Set#has() is faster than Array#includes().

### Examples

Examples of **incorrect** code for this rule:

```js
const array = [1, 2, 3];
const hasValue = (value) => array.includes(value);
```

Examples of **correct** code for this rule:

```js
const set = new Set([1, 2, 3]);
const hasValue = (value) => set.has(value);
```

```js
const array = [1, 2, 3];
const hasOne = array.includes(1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-set-has": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-set-has
```

:::

## References

* Rule Source
