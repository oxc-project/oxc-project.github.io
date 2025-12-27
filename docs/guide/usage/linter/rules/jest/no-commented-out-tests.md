---
url: /docs/guide/usage/linter/rules/jest/no-commented-out-tests.md
---
# jest/no-commented-out-tests&#x20;

### What it does

This rule raises a warning about commented out tests. It's similar to the
`no-disabled-tests` rule.

### Why is this bad?

You may forget to uncomment some tests. This rule raises a warning about commented-out tests.

It is generally better to skip a test if it's flaky, or remove it if it's no longer needed.

### Examples

Examples of **incorrect** code for this rule:

```javascript
// describe('foo', () => {});
// it('foo', () => {});
// test('foo', () => {});

// describe.skip('foo', () => {});
// it.skip('foo', () => {});
// test.skip('foo', () => {});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/v1.1.9/docs/rules/no-commented-out-tests.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-commented-out-tests": "error"
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
    "jest/no-commented-out-tests": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-commented-out-tests --jest-plugin
```

:::

## References

* Rule Source
