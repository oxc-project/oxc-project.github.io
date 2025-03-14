<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/constructor-super <Badge type="info" text="Nursery" />

<div class="rule-meta">
</div>

### What it does

Require 'super()' calls in constructors.

### Why is this bad?

### Example

```javascript
class A extends B {
  constructor() {}
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny constructor-super
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "constructor-super": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/b9ab60bde696d2742d3c5781084ee3c7bb99821e/crates/oxc_linter/src/rules/eslint/constructor_super.rs)
