<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/no-commented-out-tests <Badge type="info" text="Suspicious" />

<div class="rule-meta">
</div>

### What it does

This rule raises a warning about commented out tests. It's similar to
no-disabled-tests rule.

### Why is this bad?

You may forget to uncomment some tests. This rule raises a warning about commented out tests. It's similar to
no-disabled-tests rule.

### Example

```javascript
// describe('foo', () => {});
// it('foo', () => {});
// test('foo', () => {});

// describe.skip('foo', () => {});
// it.skip('foo', () => {});
// test.skip('foo', () => {});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest/blob/v1.1.9/docs/rules/no-commented-out-tests.md),
to use it, add the following configuration to your `.eslintrc.json`:

```json
{
  "rules": {
    "vitest/no-commented-out-tests": "error"
  }
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jest/no-commented-out-tests --jest-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-commented-out-tests": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/jest/no_commented_out_tests.rs)
