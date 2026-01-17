---
url: /docs/guide/usage/linter/rules/jest/max-nested-describe.md
---

### What it does

This rule enforces a maximum depth to nested `describe()` calls.

### Why is this bad?

Nesting `describe()` blocks too deeply can make the test suite hard to read and understand.

### Example

The following patterns are considered warnings (with the default option of
`{ "max": 5 } `):

Examples of **incorrect** code for this rule:

```javascript
describe("foo", () => {
  describe("bar", () => {
    describe("baz", () => {
      describe("qux", () => {
        describe("quxx", () => {
          describe("too many", () => {
            it("should get something", () => {
              expect(getSomething()).toBe("Something");
            });
          });
        });
      });
    });
  });
});

describe("foo", function () {
  describe("bar", function () {
    describe("baz", function () {
      describe("qux", function () {
        describe("quxx", function () {
          describe("too many", function () {
            it("should get something", () => {
              expect(getSomething()).toBe("Something");
            });
          });
        });
      });
    });
  });
});
```

Examples of **correct** code for this rule:

```ts
describe("foo", () => {
  describe("bar", () => {
    it("should get something", () => {
      expect(getSomething()).toBe("Something");
    });
  });
  describe("qux", () => {
    it("should get something", () => {
      expect(getSomething()).toBe("Something");
    });
  });
});

describe("foo2", function () {
  it("should get something", () => {
    expect(getSomething()).toBe("Something");
  });
});

describe("foo", function () {
  describe("bar", function () {
    describe("baz", function () {
      describe("qux", function () {
        describe("this is the limit", function () {
          it("should get something", () => {
            expect(getSomething()).toBe("Something");
          });
        });
      });
    });
  });
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/max-nested-describe": "error"
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### max

type: `integer`

default: `5`

Maximum allowed depth of nested describe calls.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/max-nested-describe": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/max-nested-describe --jest-plugin
```

:::

## References

* Rule Source
