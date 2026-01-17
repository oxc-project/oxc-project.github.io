---
url: /docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.md
---

### What it does

Disallow the use of Math.pow in favor of the \*\* operator

### Why is this bad?

Introduced in ES2016, the infix exponentiation operator \*\* is an alternative for the
standard Math.pow function. Infix notation is considered to be more readable and thus more
preferable than the function notation.

### Examples

Examples of **incorrect** code for this rule:

```javascript
Math.pow(a, b);
```

Examples of **correct** code for this rule:

```javascript
a ** b;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "prefer-exponentiation-operator": "error"
  }
}
```

```bash [CLI]
oxlint --deny prefer-exponentiation-operator
```

:::

## References

* Rule Source
