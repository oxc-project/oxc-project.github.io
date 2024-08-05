<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/eqeqeq

<div class="rule-meta">
<span class="fix">
🛠️ An auto-fix is available for this rule for some violations.
</span>
</div>

### What it does

Requires the use of the === and !== operators

### Why is this bad?

Using non-strict equality operators leads to hard to track bugs due to type coercion.

### Example

```javascript
let a = [];
let b = false;
a == b;
```