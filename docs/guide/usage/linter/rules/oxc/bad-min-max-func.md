---
url: /docs/guide/usage/linter/rules/oxc/bad-min-max-func.md
---
# oxc/bad-min-max-func&#x20;

### What it does

Checks whether the clamp function `Math.min(Math.max(x, y), z)` always evaluate to a
constant result because the arguments are in the wrong order.

### Why is this bad?

The `Math.min(Math.max(x, y), z)` function is used to clamp a value between two other values.
If the arguments are in the wrong order, the function will always evaluate to a constant result.

### Examples

Examples of **incorrect** code for this rule:

```javascript
Math.min(Math.max(100, x), 0);
Math.max(1000, Math.min(0, z));
```

Examples of **correct** code for this rule:

```javascript
Math.max(0, Math.min(100, x));
Math.min(1000, Math.max(0, z));
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-min-max-func": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/bad-min-max-func
```

:::

## References

* Rule Source
