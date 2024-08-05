<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/jsx-key

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
</div>

### What it does

Enforce `key` prop for elements in array

### Example

```javascript
// Bad
[1, 2, 3].map((x) => <App />);
[1, 2, 3]
  ?.map((x) => <BabelEslintApp />)

  [
    // Good
    (1, 2, 3)
  ].map((x) => <App key={x} />);
[1, 2, 3]?.map((x) => <BabelEslintApp key={x} />);
```