---
url: /docs/guide/usage/linter/rules/jest/prefer-expect-resolves.md
---
# jest/prefer-expect-resolves&#x20;

### What it does

Prefer `await expect(...).resolves` over `expect(await ...)` when testing
promises.

### Why is this bad?

When working with promises, there are two primary ways you can test the
resolved value:

1. use the `resolve` modifier on `expect`
   (`await expect(...).resolves.<matcher>` style)
2. `await` the promise and assert against its result
   (`expect(await ...).<matcher>` style)

While the second style is arguably less dependent on `jest`, if the
promise rejects it will be treated as a general error, resulting in less
predictable behaviour and output from `jest`.

Additionally, favoring the first style ensures consistency with its
`rejects` counterpart, as there is no way of "awaiting" a rejection.

### Examples

Examples of **incorrect** code for this rule:

```javascript
it("passes", async () => {
  expect(await someValue()).toBe(true);
});
it("is true", async () => {
  const myPromise = Promise.resolve(true);
  expect(await myPromise).toBe(true);
});
```

Examples of **correct** code for this rule:

```javascript
it("passes", async () => {
  await expect(someValue()).resolves.toBe(true);
});
it("is true", async () => {
  const myPromise = Promise.resolve(true);

  await expect(myPromise).resolves.toBe(true);
});
it("errors", async () => {
  await expect(Promise.reject(new Error("oh noes!"))).rejects.toThrowError("oh noes!");
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-expect-resolves": "error"
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
    "jest/prefer-expect-resolves": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-expect-resolves --jest-plugin
```

:::

## References

* Rule Source
