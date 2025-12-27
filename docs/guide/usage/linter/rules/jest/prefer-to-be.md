---
url: /docs/guide/usage/linter/rules/jest/prefer-to-be.md
---
# jest/prefer-to-be&#x20;

### What it does

Recommends using `toBe` matcher for primitive literals and specific
matchers for `null`, `undefined`, and `NaN`.

### Why is this bad?

When asserting against primitive literals such as numbers and strings,
the equality matchers all operate the same, but read slightly
differently in code.

This rule recommends using the `toBe` matcher in these situations, as
it forms the most grammatically natural sentence. For `null`,
`undefined`, and `NaN` this rule recommends using their specific `toBe`
matchers, as they give better error messages as well.

### Examples

Examples of **incorrect** code for this rule:

```javascript
expect(value).not.toEqual(5);
expect(getMessage()).toStrictEqual("hello world");
expect(loadMessage()).resolves.toEqual("hello world");
```

Examples of **correct** code for this rule:

```javascript
expect(value).not.toBe(5);
expect(getMessage()).toBe("hello world");
expect(loadMessage()).resolves.toBe("hello world");
expect(didError).not.toBe(true);
expect(catchError()).toStrictEqual({ message: "oh noes!" });
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-to-be": "error"
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
    "jest/prefer-to-be": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-to-be --jest-plugin
```

:::

## References

* Rule Source
