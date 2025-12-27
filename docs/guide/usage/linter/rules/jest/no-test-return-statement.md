---
url: /docs/guide/usage/linter/rules/jest/no-test-return-statement.md
---
# jest/no-test-return-statement&#x20;

### What it does

Disallow explicitly returning from tests.

### Why is this bad?

Tests in Jest should be void and not return values.
If you are returning Promises then you should update the test to use
`async/await`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
test("one", () => {
  return expect(1).toBe(1);
});
```

Examples of **correct** code for this rule:

```javascript
test("one", () => {
  expect(1).toBe(1);
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-test-return-statement": "error"
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
    "jest/no-test-return-statement": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-test-return-statement --jest-plugin
```

:::

## References

* Rule Source
