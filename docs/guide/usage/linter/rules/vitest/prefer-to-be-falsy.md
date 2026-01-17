---
url: /docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.md
---

### What it does

This rule warns when `toBe(false)` is used with `expect` or `expectTypeOf`.
With `--fix`, it will be replaced with `toBeFalsy()`.

### Why is this bad?

Using `toBe(false)` is less expressive and may not account for other falsy
values like `0`, `null`, or `undefined`. `toBeFalsy()` provides a more
comprehensive check for any falsy value, improving the robustness of the tests.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(foo).toBe(false);
expectTypeOf(foo).toBe(false);
```

Examples of **correct** code for this rule:

```javascript
expect(foo).toBeFalsy();
expectTypeOf(foo).toBeFalsy();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/prefer-to-be-falsy": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/prefer-to-be-falsy --vitest-plugin
```

:::

## References

* Rule Source
