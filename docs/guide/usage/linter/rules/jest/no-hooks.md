---
url: /docs/guide/usage/linter/rules/jest/no-hooks.md
---

### What it does

Disallows Jest setup and teardown hooks, such as `beforeAll`.

### Why is this bad?

Jest provides global functions for setup and teardown tasks, which are
called before/after each test case and each test suite. The use of these
hooks promotes shared state between tests.

This rule reports for the following function calls:

* `beforeAll`
* `beforeEach`
* `afterAll`
* `afterEach`

### Examples

Examples of **incorrect** code for this rule:

```javascript
function setupFoo(options) {
  /* ... */
}
function setupBar(options) {
  /* ... */
}

describe("foo", () => {
  let foo;
  beforeEach(() => {
    foo = setupFoo();
  });
  afterEach(() => {
    foo = null;
  });
  it("does something", () => {
    expect(foo.doesSomething()).toBe(true);
  });
  describe("with bar", () => {
    let bar;
    beforeEach(() => {
      bar = setupBar();
    });
    afterEach(() => {
      bar = null;
    });
    it("does something with bar", () => {
      expect(foo.doesSomething(bar)).toBe(true);
    });
  });
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-hooks": "error"
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allow

type: `string[]`

default: `[]`

An array of hook function names that are permitted for use.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-hooks": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-hooks --jest-plugin
```

:::

## References

* Rule Source
