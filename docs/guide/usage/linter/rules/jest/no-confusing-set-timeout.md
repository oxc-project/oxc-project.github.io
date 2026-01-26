---
url: /docs/guide/usage/linter/rules/jest/no-confusing-set-timeout.md
---

### What it does

Disallow confusing usages of jest.setTimeout

### Why is this bad?

* being called anywhere other than in global scope
* being called multiple times
* being called after other Jest functions like hooks, `describe`, `test`, or `it`

### Examples

All of these are invalid case:

```javascript
escribe("test foo", () => {
  jest.setTimeout(1000);
  it("test-description", () => {
    // test logic;
  });
});

describe("test bar", () => {
  it("test-description", () => {
    jest.setTimeout(1000);
    // test logic;
  });
});

test("foo-bar", () => {
  jest.setTimeout(1000);
});

describe("unit test", () => {
  beforeEach(() => {
    jest.setTimeout(1000);
  });
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-confusing-set-timeout": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-confusing-set-timeout --jest-plugin
```

:::

## References

* Rule Source
