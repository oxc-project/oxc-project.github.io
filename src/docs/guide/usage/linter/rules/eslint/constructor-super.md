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

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/eslint/constructor_super.rs)
