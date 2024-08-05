<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/prefer-spread

<div class="rule-meta">
<span class="fix">
🛠️ An auto-fix is available for this rule for some violations.
</span>
</div>

### What it does

Enforces the use of [the spread operator (`...`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) over outdated patterns.

### Why is this bad?

Using the spread operator is more concise and readable.

### Example

```javascript
// bad
const foo = Array.from(set);
const foo = Array.from(new Set([1, 2]));

// good
```