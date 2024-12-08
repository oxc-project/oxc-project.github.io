<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-class-assign <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow reassigning class variables.

### Why is this bad?

`ClassDeclaration` creates a variable that can be re-assigned,
but the re-assignment is a mistake in most cases.

### Example

```javascript
class A {}
A = 123;
let a = new A(); // Error
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/fd0935cfcd660901d612b9b146bc136d40d2f02f/crates/oxc_linter/src/rules/eslint/no_class_assign.rs)
