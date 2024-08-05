<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/prefer-enum-initializers

<div class="rule-meta">
</div>

### What it does

Require each enum member value to be explicitly initialized.

### Why is this bad?

In projects where the value of `enum` members are important, allowing implicit values for enums can cause bugs if enums are modified over time.

### Example

```typescript
// wrong, the value of `Close` is not constant
enum Status {
  Open = 1,
  Close,
}
```