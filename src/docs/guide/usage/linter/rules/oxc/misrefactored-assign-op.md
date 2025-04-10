<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/misrefactored-assign-op <Badge type="info" text="Suspicious" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

https://rust-lang.github.io/rust-clippy/master/#/misrefactored_assign_op

Checks for `a op= a op b` or `a op= b op a` patterns.

### Why is this bad?

Most likely these are bugs where one meant to write `a op= b`.

### Example

Examples of **incorrect** code for this rule:

```javascript
a += a + b;
a -= a - b;
```

Examples of **correct** code for this rule:

```javascript
a += b;
a -= b;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny oxc/misrefactored-assign-op
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/misrefactored-assign-op": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/oxc/misrefactored_assign_op.rs)
