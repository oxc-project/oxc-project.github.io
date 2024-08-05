<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-useless-fallback-in-spread

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
<span class="fix">
🛠️ An auto-fix is available for this rule for some violations.
</span>
</div>

### What it does

Disallow useless fallback when spreading in object literals.

### Why is this bad?

Spreading [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) in object literals won't add any unexpected properties, so it's unnecessary to add an empty object as fallback.

### Example

```javascript
// bad
const object = { ...(foo || {}) };

// good
const object = { ...foo };
const object = { ...(foo || { not: "empty" }) };
```