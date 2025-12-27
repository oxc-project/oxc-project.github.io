---
url: /docs/guide/usage/linter/rules/jest/prefer-to-contain.md
---
# jest/prefer-to-contain&#x20;

### What it does

In order to have a better failure message, `toContain()` should be used upon
asserting expectations on an array containing an object.

### Why is this bad?

This rule triggers a warning if `toBe()`, `toEqual()` or `toStrictEqual()` is
used to assert object inclusion in an array

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(a.includes(b)).toBe(true);
expect(a.includes(b)).not.toBe(true);
expect(a.includes(b)).toBe(false);
expect(a.includes(b)).toEqual(true);
expect(a.includes(b)).toStrictEqual(true);
```

Examples of **correct** code for this rule:

```javascript
expect(a).toContain(b);
expect(a).not.toContain(b);
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-to-contain": "error"
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
    "jest/prefer-to-contain": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-to-contain --jest-plugin
```

:::

## References

* Rule Source
