---
url: /docs/guide/usage/linter/rules/vitest/prefer-called-once.md
---

### What it does

Substitute `toBeCalledTimes(1)` and `toHaveBeenCalledTimes(1)` with
`toBeCalledOnce()` and `toHaveBeenCalledOnce()` respectively.

### Why is this bad?

The \*Times method required to read the arguments to know how many times
is expected a spy to be called. Most of the times you expecting a method is called
once.

### Examples

Examples of **incorrect** code for this rule:

```js
test("foo", () => {
  const mock = vi.fn();
  mock("foo");
  expect(mock).toBeCalledTimes(1);
  expect(mock).toHaveBeenCalledTimes(1);
});
```

Examples of **correct** code for this rule:

```js
test("foo", () => {
  const mock = vi.fn();
  mock("foo");
  expect(mock).toBeCalledOnce();
  expect(mock).toHaveBeenCalledOnce();
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/prefer-called-once": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/prefer-called-once --vitest-plugin
```

:::

## References

* Rule Source
