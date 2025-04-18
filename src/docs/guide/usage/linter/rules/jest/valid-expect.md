<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/valid-expect <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Checks that `expect()` is called correctly.

Why is this bad?

`expect()` is a function that is used to assert values in tests. It should be called with a single argument, which is the value to be tested. If you call `expect()` with no arguments, or with more than one argument, it will not work as expected.

### Example

Examples of **incorrect** code for this rule:

```javascript
expect();
expect("something");
expect(true).toBeDefined;
expect(Promise.resolve("Hi!")).resolves.toBe("Hi!");
```

Examples of **correct** code for this rule:

```javascript
expect("something").toEqual("something");
expect(true).toBeDefined();
expect(Promise.resolve("Hi!")).resolves.toBe("Hi!");
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest/blob/v1.1.9/docs/rules/valid-expect.md),
to use it, add the following configuration to your `.eslintrc.json`:

```json
{
  "rules": {
    "vitest/valid-expect": "error"
  }
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jest/valid-expect --jest-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/valid-expect": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/jest/valid_expect.rs)
