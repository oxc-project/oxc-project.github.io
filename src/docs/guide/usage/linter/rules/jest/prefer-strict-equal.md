<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/prefer-strict-equal <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

This rule triggers a warning if `toEqual()` is used to assert equality.

### Example

```javascript
// invalid
expect({ a: "a", b: undefined }).toEqual({ a: "a" });

// valid
expect({ a: "a", b: undefined }).toStrictEqual({ a: "a" });
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny jest/prefer-strict-equal --jest-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-strict-equal": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/0f1e0e87715075c250763ea31c3a82505a4f10d3/crates/oxc_linter/src/rules/jest/prefer_strict_equal.rs)
