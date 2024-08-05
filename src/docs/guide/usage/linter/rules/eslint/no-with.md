<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-with

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
</div>

### What it does

Disallow `with` statements

### Why is this bad?

The with statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to.

### Example

```javascript
with (point) {
  r = Math.sqrt(x * x + y * y); // is r a member of point?
}
```