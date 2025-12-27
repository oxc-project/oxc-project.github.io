---
url: /docs/guide/usage/linter/rules/jest/no-alias-methods.md
---
# jest/no-alias-methods&#x20;

### What it does

This rule ensures that only the canonical name as used in the Jest documentation is used in the code.

### Why is this bad?

These aliases are going to be removed in the next major version of Jest - see [jestjs/jest#13164](https://github.com/jestjs/jest/issues/13164) for more.
This rule will make it easier to search for all occurrences of the method within code, and it ensures consistency among the method names used.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(a).toBeCalled();
expect(a).toBeCalledTimes();
expect(a).toBeCalledWith();
expect(a).lastCalledWith();
expect(a).nthCalledWith();
expect(a).toReturn();
expect(a).toReturnTimes();
expect(a).toReturnWith();
expect(a).lastReturnedWith();
expect(a).nthReturnedWith();
expect(a).toThrowError();
```

Examples of **correct** code for this rule:

```javascript
expect(a).toHaveBeenCalled();
expect(a).toHaveBeenCalledTimes();
expect(a).toHaveBeenCalledWith();
expect(a).toHaveBeenLastCalledWith();
expect(a).toHaveBeenNthCalledWith();
expect(a).toHaveReturned();
expect(a).toHaveReturnedTimes();
expect(a).toHaveReturnedWith();
expect(a).toHaveLastReturnedWith();
expect(a).toHaveNthReturnedWith();
expect(a).toThrow();
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/v1.1.9/docs/rules/no-alias-methods.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-alias-methods": "error"
  }
}
```

Examples of **incorrect** code for this rule with vitest:

```javascript
expect(a).toBeCalled();
expect(a).toBeCalledTimes();
expect(a).not["toThrowError"]();
```

Examples of **correct** code for this rule with vitest:

```javascript
expect(a).toHaveBeenCalled();
expect(a).toHaveBeenCalledTimes();
expect(a).toHaveBeenCalledWith();
expect(a).toHaveBeenLastCalledWith();
expect(a).toHaveBeenNthCalledWith();
expect(a).toHaveReturned();
expect(a).toHaveReturnedTimes();
expect(a).toHaveReturnedWith();
expect(a).toHaveLastReturnedWith();
expect(a).toHaveNthReturnedWith();
expect(a).toThrow();
expect(a).rejects;
expect(a);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-alias-methods": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-alias-methods --jest-plugin
```

:::

## References

* Rule Source
