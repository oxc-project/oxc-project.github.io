---
url: /docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md
---
# vitest/prefer-to-be-truthy&#x20;

### What it does

This rule warns when `toBe(true)` is used with `expect` or `expectTypeOf`.
With `--fix`, it will be replaced with `toBeTruthy()`.

### Why is this bad?

Using `toBe(true)` is less flexible and may not account for other truthy
values like non-empty strings or objects. `toBeTruthy()` checks for any
truthy value, which makes the tests more comprehensive and robust.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(foo).toBe(true);
expectTypeOf(foo).toBe(true);
```

Examples of **correct** code for this rule:

```javascript
expect(foo).toBeTruthy();
expectTypeOf(foo).toBeTruthy();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/prefer-to-be-truthy": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/prefer-to-be-truthy --vitest-plugin
```

:::

## References

* Rule Source
