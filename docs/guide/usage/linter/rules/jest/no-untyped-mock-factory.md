---
url: /docs/guide/usage/linter/rules/jest/no-untyped-mock-factory.md
---
# jest/no-untyped-mock-factory&#x20;

### What it does

This rule triggers a warning if `mock()` or `doMock()` is used without a generic
type parameter or return type.

### Why is this bad?

By default, `jest.mock` and `jest.doMock` allow any type to be returned by a
mock factory. A generic type parameter can be used to enforce that the factory
returns an object with the same shape as the original module, or some other
strict type. Requiring a type makes it easier to use TypeScript to catch changes
needed in test mocks when the source module changes.

### Examples

Examples of **incorrect** code for this rule:

```typescript
jest.mock("../moduleName", () => {
  return jest.fn(() => 42);
});

jest.mock("./module", () => ({
  ...jest.requireActual("./module"),
  foo: jest.fn(),
}));

jest.mock("random-num", () => {
  return jest.fn(() => 42);
});
```

Examples of **correct** code for this rule:

```typescript
// Uses typeof import()
jest.mock<typeof import("../moduleName")>("../moduleName", () => {
  return jest.fn(() => 42);
});

jest.mock<typeof import("./module")>("./module", () => ({
  ...jest.requireActual("./module"),
  foo: jest.fn(),
}));

// Uses custom type
jest.mock<() => number>("random-num", () => {
  return jest.fn(() => 42);
});

// No factory
jest.mock("random-num");

// Virtual mock
jest.mock(
  "../moduleName",
  () => {
    return jest.fn(() => 42);
  },
  { virtual: true },
);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-untyped-mock-factory": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-untyped-mock-factory --jest-plugin
```

:::

## References

* Rule Source
