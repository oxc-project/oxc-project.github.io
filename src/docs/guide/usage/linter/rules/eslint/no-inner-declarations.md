<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-inner-declarations

<div class="rule-meta">
</div>

### What it does

Disallow variable or function declarations in nested blocks

### Why is this bad?

A variable declaration is permitted anywhere a statement can go, even nested deeply inside other blocks.
This is often undesirable due to variable hoisting, and moving declarations to the root of the program or function body can increase clarity.
Note that block bindings (let, const) are not hoisted and therefore they are not affected by this rule.

### Example

```javascript
if (test) {
  function doSomethingElse() {}
}
```