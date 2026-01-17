---
url: /docs/guide/usage/linter/rules/jest/no-export.md
---

### What it does

Prevents using exports if a file has one or more tests in it.

### Why is this bad?

This rule aims to eliminate duplicate runs of tests by exporting things from test files.
If you import from a test file, then all the tests in that file will be run in each imported instance.
so bottom line, don't export from a test, but instead move helper functions into a separate file when they need to be shared across tests.

### Examples

Examples of **incorrect** code for this rule:

```javascript
export function myHelper() {}
describe("a test", () => {
  expect(1).toBe(1);
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-export": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-export --jest-plugin
```

:::

## References

* Rule Source
