---
url: /docs/guide/usage/linter/rules/eslint/no-unsafe-finally.md
---

### What it does

Disallow control flow statements in `finally` blocks.

### Why is this bad?

JavaScript suspends the control flow statements of `try` and `catch`
blocks until the execution of a `finally` block finishes.

So, when `return`, `throw`, `break`, or `continue` is used in `finally`,
control flow statements inside `try` and `catch` are overwritten.
This is possibly unexpected behavior for the developer.

### Examples

Examples of **incorrect** code for this rule:

```javascript
// We expect this function to return 1;
(() => {
  try {
    return 1; // 1 is returned but suspended until finally block ends
  } catch (err) {
    return 2;
  } finally {
    return 3; // 3 is returned before 1, which we did not expect
  }
})();

// > 3
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unsafe-finally": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unsafe-finally
```

:::

## References

* Rule Source
