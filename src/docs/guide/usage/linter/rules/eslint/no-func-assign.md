<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-func-assign

<div class="rule-meta">
<span class="default-on">
✅ This rule is turned on by default.
</span>
</div>

### What it does

Disallow reassigning `function` declarations

### Why is this bad?

Overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.

### Example

```javascript
function foo() {}
foo = bar;
```