---
url: /docs/guide/usage/linter/rules/vitest/consistent-each-for.md
---
# vitest/consistent-each-for&#x20;

### What it does

This rule ensure consistency on which method used to create parameterized test.
This configuration affects to different test function types (`test`, `it`, `describe`, `suite`).

### Why is this bad?

Not having a consistent way to create parametrized tests, we rely on the developer to remember that
`.for` spread the values as different arguments and `.each` pass the array as an unique argument.

### Examples

Examples of **incorrect** code for this rule:

```js
// { test: 'for' }
test.each([[1, 1, 2]])("test", (a, b, expected) => {
  expect(a + b).toBe(expected);
});

// { describe: 'for' }
describe.each([[1], [2]])("suite %s", (n) => {
  test("test", () => {});
});
```

Examples of **correct** code for this rule:

```js
// { test: 'for' }
test.for([[1, 1, 2]])("test", ([a, b, expected]) => {
  expect(a + b).toBe(expected);
});

// { describe: 'for' }
describe.for([[1], [2]])("suite %s", ([n]) => {
  test("test", () => {});
});
```

## Configuration

This rule accepts a configuration object with the following properties:

### describe

type: `"for" | "each" | null`

### it

type: `"for" | "each" | null`

### suite

type: `"for" | "each" | null`

### test

type: `"for" | "each" | null`

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/consistent-each-for": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/consistent-each-for --vitest-plugin
```

:::

## References

* Rule Source
