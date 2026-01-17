---
url: /docs/guide/usage/linter/rules/jest/prefer-strict-equal.md
---

### What it does

This rule triggers a warning if `toEqual()` is used to assert equality.

### Why is this bad?

The `toEqual()` matcher performs a deep equality check but ignores
`undefined` values in objects and arrays. This can lead to false
positives where tests pass when they should fail. `toStrictEqual()`
provides more accurate comparison by checking for `undefined` values.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect({ a: "a", b: undefined }).toEqual({ a: "a" });
```

Examples of **correct** code for this rule:

```javascript
expect({ a: "a", b: undefined }).toStrictEqual({ a: "a" });
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-strict-equal": "error"
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-strict-equal": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-strict-equal --jest-plugin
```

:::

## References

* Rule Source
