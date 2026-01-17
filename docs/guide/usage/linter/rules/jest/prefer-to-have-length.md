---
url: /docs/guide/usage/linter/rules/jest/prefer-to-have-length.md
---

### What it does

In order to have a better failure message, `toHaveLength()` should be used upon
asserting expectations on objects length property.

### Why is this bad?

This rule triggers a warning if `toBe()`, `toEqual()` or `toStrictEqual()` is
used to assert objects length property.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(files["length"]).toBe(1);
expect(files["length"]).toBe(1);
expect(files["length"])["not"].toBe(1);
```

Examples of **correct** code for this rule:

```javascript
expect(files).toHaveLength(1);
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-to-have-length": "error"
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
    "jest/prefer-to-have-length": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-to-have-length --jest-plugin
```

:::

## References

* Rule Source
