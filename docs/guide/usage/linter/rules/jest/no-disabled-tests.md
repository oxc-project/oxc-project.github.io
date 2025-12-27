---
url: /docs/guide/usage/linter/rules/jest/no-disabled-tests.md
---
# jest/no-disabled-tests&#x20;

### What it does

This rule raises a warning about disabled tests.

### Why is this bad?

Jest has a feature that allows you to temporarily mark tests as disabled. This
feature is often helpful while debugging or to create placeholders for future
tests. Before committing changes we may want to check that all tests are
running.

### Example

```js
describe.skip("foo", () => {});
it.skip("foo", () => {});
test.skip("foo", () => {});

describe["skip"]("bar", () => {});
it["skip"]("bar", () => {});
test["skip"]("bar", () => {});

xdescribe("foo", () => {});
xit("foo", () => {});
xtest("foo", () => {});

it("bar");
test("bar");

it("foo", () => {
  pending();
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/v1.1.9/docs/rules/no-disabled-tests.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-disabled-tests": "error"
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
    "jest/no-disabled-tests": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-disabled-tests --jest-plugin
```

:::

## References

* Rule Source
