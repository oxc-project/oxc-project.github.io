<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/prefer-logical-operator-over-ternary <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

This rule finds ternary expressions that can be simplified to a logical operator.

### Why is this bad?

Using a logical operator is shorter and simpler than a ternary expression.

### Example

Examples of **incorrect** code for this rule:

```javascript
const foo = bar ? bar : baz;
console.log(foo ? foo : bar);
```

Examples of **correct** code for this rule:
const foo = bar || baz;
console.log(foo ?? bar);

````


## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny unicorn/prefer-logical-operator-over-ternary
````

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-logical-operator-over-ternary": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/unicorn/prefer_logical_operator_over_ternary.rs)
