---
url: /docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.md
---
# unicorn/prefer-logical-operator-over-ternary&#x20;

### What it does

This rule finds ternary expressions that can be simplified to a logical operator.

### Why is this bad?

Using a logical operator is shorter and simpler than a ternary expression.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = bar ? bar : baz;
console.log(foo ? foo : bar);
```

Examples of **correct** code for this rule:

```javascript
const foo = bar || baz;
console.log(foo ?? bar);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-logical-operator-over-ternary": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-logical-operator-over-ternary
```

:::

## References

* Rule Source
