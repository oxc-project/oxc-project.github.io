---
url: /docs/guide/usage/linter/rules/jest/max-expects.md
---
# jest/max-expects&#x20;

### What it does

This rule enforces a maximum number of `expect()` calls in a single test.

### Why is this bad?

Tests with many different assertions are likely mixing multiple objectives.
It is generally better to have a single objective per test to ensure that when a test fails,
the problem is easy to identify.

### Examples

Examples of **incorrect** code for this rule:

```javascript
test("should not pass", () => {
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
});

it("should not pass", () => {
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/max-expects": "error"
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### max

type: `integer`

default: `5`

Maximum number of `expect()` assertion calls allowed within a single test.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/max-expects": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/max-expects --jest-plugin
```

:::

## References

* Rule Source
