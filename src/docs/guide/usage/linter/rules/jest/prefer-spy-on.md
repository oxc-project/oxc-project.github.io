<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/prefer-spy-on <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

When mocking a function by overwriting a property you have to manually restore
the original implementation when cleaning up. When using `jest.spyOn()` Jest
keeps track of changes, and they can be restored with `jest.restoreAllMocks()`,
`mockFn.mockRestore()` or by setting `restoreMocks` to `true` in the Jest
config.

Note: The mock created by `jest.spyOn()` still behaves the same as the original
function. The original function can be overwritten with
`mockFn.mockImplementation()` or by some of the
[other mock functions](https://jestjs.io/docs/en/mock-function-api).

### Example

```javascript
// invalid
Date.now = jest.fn();
Date.now = jest.fn(() => 10);

// valid
jest.spyOn(Date, "now");
jest.spyOn(Date, "now").mockImplementation(() => 10);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jest/prefer-spy-on --jest-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-spy-on": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/jest/prefer_spy_on.rs)
