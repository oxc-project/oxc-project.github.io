---
url: /docs/guide/usage/linter/rules/jest/prefer-to-have-been-called-times.md
---
# jest/prefer-to-have-been-called-times&#x20;

### What it does

In order to have a better failure message, [`toHaveBeenCalledTimes` should be used
instead of directly checking the length of `mock.calls`](https://github.com/jest-community/eslint-plugin-jest/blob/v29.5.0/docs/rules/prefer-to-have-been-called-times.md).

### Why is this bad?

This rule triggers a warning if `toHaveLength` is used to assert the number of times a mock is called.

### Examples

Examples of **incorrect** code for this rule:

```js
expect(someFunction.mock.calls).toHaveLength(1);
expect(someFunction.mock.calls).toHaveLength(0);
expect(someFunction.mock.calls).not.toHaveLength(1);
```

Examples of **correct** code for this rule:

```js
expect(someFunction).toHaveBeenCalledTimes(1);
expect(someFunction).toHaveBeenCalledTimes(0);
expect(someFunction).not.toHaveBeenCalledTimes(0);
expect(uncalledFunction).not.toBeCalled();
expect(method.mock.calls[0][0]).toStrictEqual(value);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-to-have-been-called-times": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-to-have-been-called-times --jest-plugin
```

:::

## References

* Rule Source
