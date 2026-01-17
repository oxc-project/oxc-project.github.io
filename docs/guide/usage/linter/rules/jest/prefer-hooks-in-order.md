---
url: /docs/guide/usage/linter/rules/jest/prefer-hooks-in-order.md
---

### What it does

Ensures that hooks are in the order that they are called in.

### Why is this bad?

While hooks can be setup in any order, they're always called by `jest` in this
specific order:

1. `beforeAll`
2. `beforeEach`
3. `afterEach`
4. `afterAll`

This rule aims to make that more obvious by enforcing grouped hooks be setup in
that order within tests.

### Examples

Examples of **incorrect** code for this rule:

```javascript
describe("foo", () => {
  beforeEach(() => {
    seedMyDatabase();
  });
  beforeAll(() => {
    createMyDatabase();
  });
  it("accepts this input", () => {
    // ...
  });
  it("returns that value", () => {
    // ...
  });
  describe("when the database has specific values", () => {
    const specificValue = "...";
    beforeEach(() => {
      seedMyDatabase(specificValue);
    });
    it("accepts that input", () => {
      // ...
    });
    it("throws an error", () => {
      // ...
    });
    afterEach(() => {
      clearLogger();
    });
    beforeEach(() => {
      mockLogger();
    });
    it("logs a message", () => {
      // ...
    });
  });
  afterAll(() => {
    removeMyDatabase();
  });
});
```

Examples of **correct** code for this rule:

```javascript
describe("foo", () => {
  beforeAll(() => {
    createMyDatabase();
  });
  beforeEach(() => {
    seedMyDatabase();
  });
  it("accepts this input", () => {
    // ...
  });
  it("returns that value", () => {
    // ...
  });
  describe("when the database has specific values", () => {
    const specificValue = "...";
    beforeEach(() => {
      seedMyDatabase(specificValue);
    });
    it("accepts that input", () => {
      // ...
    });
    it("throws an error", () => {
      // ...
    });
    beforeEach(() => {
      mockLogger();
    });
    afterEach(() => {
      clearLogger();
    });
    it("logs a message", () => {
      // ...
    });
  });
  afterAll(() => {
    removeMyDatabase();
  });
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/v1.1.9/docs/rules/prefer-hooks-in-order.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/prefer-hooks-in-order": "error"
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
    "jest/prefer-hooks-in-order": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/prefer-hooks-in-order --jest-plugin
```

:::

## References

* Rule Source
