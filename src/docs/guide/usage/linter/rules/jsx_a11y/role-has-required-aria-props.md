<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsx_a11y/role-has-required-aria-props

<div class="rule-meta">
</div>

### What it does

Enforces that elements with ARIA roles must have all required attributes for that role.

### Why is this bad?

Certain ARIA roles require specific attributes to express necessary semantics for assistive technology.

### Example

```javascript
// Bad
<div role="checkbox" />

// Good
<div role="checkbox" aria-checked="false" />
```