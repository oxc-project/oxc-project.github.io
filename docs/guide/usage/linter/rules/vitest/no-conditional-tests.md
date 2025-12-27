---
url: /docs/guide/usage/linter/rules/vitest/no-conditional-tests.md
---
# vitest/no-conditional-tests&#x20;

### What it does

The rule disallows the use of conditional statements within test cases to
ensure that tests are deterministic and clearly readable.

### Why is this bad?

Conditional statements in test cases can make tests unpredictable and
harder to understand. Tests should be consistent and straightforward to
ensure reliable results and maintainability.

### Examples

Examples of **incorrect** code for this rule:

```js
describe("my tests", () => {
  if (true) {
    it("is awesome", () => {
      doTheThing();
    });
  }
});
```

Examples of **correct** code for this rule:

```js
describe("my tests", () => {
  it("is awesome", () => {
    doTheThing();
  });
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/no-conditional-tests": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/no-conditional-tests --vitest-plugin
```

:::

## References

* Rule Source
