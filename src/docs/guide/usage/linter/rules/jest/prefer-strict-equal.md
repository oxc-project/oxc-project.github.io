<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/prefer-strict-equal

<div class="rule-meta">
<span class="fix">
🛠️ An auto-fix is available for this rule.
</span>
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