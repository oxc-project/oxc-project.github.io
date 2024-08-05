<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-unnecessary-await

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
<span class="fix">
🛠️ An auto-fix is available for this rule for some violations.
</span>
</div>

### What it does

Disallow awaiting on non-promise values.

### Why is this bad?

The `await` operator should only be used on `Promise` values.

### Example

```javascript
await await promise;
```