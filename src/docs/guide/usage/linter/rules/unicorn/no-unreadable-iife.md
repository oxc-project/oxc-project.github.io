<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-unreadable-iife

<div class="rule-meta">
</div>

### What it does

This rule disallows IIFEs with a parenthesized arrow function body.

### Why is this bad?

IIFEs with a parenthesized arrow function body are unreadable.

### Example

```javascript
// Fail
const foo = ((bar) => (bar ? bar.baz : baz))(getBar());

const foo = ((bar, baz) => ({ bar, baz }))(bar, baz);

// Pass
const bar = getBar();
const foo = bar ? bar.baz : baz;

const getBaz = (bar) => (bar ? bar.baz : baz);
const foo = getBaz(getBar());

const foo = ((bar) => {
  return bar ? bar.baz : baz;
})(getBar());
```