---
url: /docs/guide/usage/linter/rules/jest/no-conditional-in-test.md
---
# jest/no-conditional-in-test&#x20;

### What it does

Disallow conditional statements in tests.

### Why is this bad?

Conditional statements in tests can make the test harder to read and understand. It is better to have a single test case per test function.

### Examples

Examples of **incorrect** code for this rule:

```js
it("foo", () => {
  if (true) {
    doTheThing();
  }
});

it("bar", () => {
  switch (mode) {
    case "none":
      generateNone();
    case "single":
      generateOne();
    case "multiple":
      generateMany();
  }

  expect(fixtures.length).toBeGreaterThan(-1);
});

it("baz", async () => {
  const promiseValue = () => {
    return something instanceof Promise ? something : Promise.resolve(something);
  };

  await expect(promiseValue()).resolves.toBe(1);
});
```

Examples of **correct** code for this rule:

```js
describe("my tests", () => {
  if (true) {
    it("foo", () => {
      doTheThing();
    });
  }
});

beforeEach(() => {
  switch (mode) {
    case "none":
      generateNone();
    case "single":
      generateOne();
    case "multiple":
      generateMany();
  }
});

it("bar", () => {
  expect(fixtures.length).toBeGreaterThan(-1);
});

const promiseValue = (something) => {
  return something instanceof Promise ? something : Promise.resolve(something);
};

it("baz", async () => {
  await expect(promiseValue()).resolves.toBe(1);
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-conditional-in-test": "error"
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
    "jest/no-conditional-in-test": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-conditional-in-test --jest-plugin
```

:::

## References

* Rule Source
