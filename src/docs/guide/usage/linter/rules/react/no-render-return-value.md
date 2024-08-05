<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/no-render-return-value

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
</div>

### What it does

This rule will warn you if you try to use the ReactDOM.render() return value.

### Example

```javascript
// Bad
vaa inst =ReactDOM.render(<App />, document.body);
function render() {
 return ReactDOM.render(<App />, document.body);
}

// Good
ReactDOM.render(<App />, document.body);
```