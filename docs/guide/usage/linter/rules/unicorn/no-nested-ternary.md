---
url: /docs/guide/usage/linter/rules/unicorn/no-nested-ternary.md
---
# unicorn/no-nested-ternary&#x20;

### What it does

This rule disallows deeply nested ternary expressions.
Nested ternary expressions that are only one level deep and wrapped in parentheses are allowed.

### Why is this bad?

Nesting ternary expressions can make code more difficult to understand.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = i > 5 ? (i < 100 ? true : false) : true;
const foo = i > 5 ? true : i < 100 ? true : i < 1000 ? true : false;
```

Examples of **correct** code for this rule:

```javascript
const foo = i > 5 ? (i < 100 ? true : false) : true;
const foo = i > 5 ? (i < 100 ? true : false) : i < 100 ? true : false;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-nested-ternary": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-nested-ternary
```

:::

## References

* Rule Source
