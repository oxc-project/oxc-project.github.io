<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/double-comparisons <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

This rule checks for double comparisons in logical expressions.

### Why is this bad?

Redundant comparisons can be confusing and make code harder to understand.

### Example

Examples of **incorrect** code for this rule:

```javascript
x === y || x < y;
x < y || x === y;
```

Examples of **correct** code for this rule:

```javascript
x <= y;
x >= y;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/oxc/double_comparisons.rs)
