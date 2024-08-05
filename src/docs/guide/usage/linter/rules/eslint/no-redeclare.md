<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-redeclare

<div class="rule-meta">
</div>

### What it does

Disallow variable redeclaration

### Why is this bad?

n JavaScript, it’s possible to redeclare the same variable name using var. This can lead to confusion as to where the variable is actually declared and initialized.

### Example

```javascript
var a = 3;
var a = 10;
```