---
url: /docs/guide/usage/linter/rules/jest/prefer-called-with.md
---

### What it does

Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`

### Why is this bad?

When testing function calls, it's often more valuable to assert both
that a function was called AND what arguments it was called with.
Using `toBeCalled()` or `toHaveBeenCalled()` only verifies the function
was invoked, but doesn't validate the arguments, potentially missing
bugs where functions are called with incorrect parameters.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(someFunction).toBeCalled();
expect(someFunction).toHaveBeenCalled();
```

Examples of **correct** code for this rule:

```javascript
expect(noArgsFunction).toBeCalledWith();
expect(roughArgsFunction).toBeCalledWith(expect.anything(), expect.any(Date));
expect(anyArgsFunction).toBeCalledTimes(1);
expect(uncalledFunction).not.toBeCalled();
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-called-with": "error"
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-called-with": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-called-with --jest-plugin
```

:::

## References

* Rule Source
