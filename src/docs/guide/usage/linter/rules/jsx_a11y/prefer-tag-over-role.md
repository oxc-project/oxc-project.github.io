<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsx_a11y/prefer-tag-over-role <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Enforces using semantic HTML tags over `role` attribute.

### Why is this bad?

Using semantic HTML tags can improve accessibility and readability of the code.

### Example

Examples of **incorrect** code for this rule:

```jsx
<div role="button" />
```

Examples of **correct** code for this rule:

```jsx
<button />
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/jsx_a11y/prefer_tag_over_role.rs)
