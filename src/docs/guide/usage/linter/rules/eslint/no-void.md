<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-void

<div class="rule-meta">
</div>

### What it does

Disallow `void` operators.

### Example

```javascript
// error
void 0;
var foo = void 0;

// success
"var foo = bar()",
"foo.void()",
"foo.void = bar",
```