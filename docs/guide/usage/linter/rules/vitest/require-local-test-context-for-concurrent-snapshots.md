---
url: >-
  /docs/guide/usage/linter/rules/vitest/require-local-test-context-for-concurrent-snapshots.md
---

### What it does

The rule is intended to ensure that concurrent snapshot tests are executed
within a properly configured local test context.

### Why is this bad?

Running snapshot tests concurrently without a proper context can lead to
unreliable or inconsistent snapshots. Ensuring that concurrent tests are
correctly configured with the appropriate context helps maintain accurate
and stable snapshots, avoiding potential conflicts or failures.

### Examples

Examples of **incorrect** code for this rule:

```javascript
test.concurrent("myLogic", () => {
  expect(true).toMatchSnapshot();
});

describe.concurrent("something", () => {
  test("myLogic", () => {
    expect(true).toMatchInlineSnapshot();
  });
});
```

Examples of **correct** code for this rule:

```javascript
test.concurrent("myLogic", ({ expect }) => {
  expect(true).toMatchSnapshot();
});

test.concurrent("myLogic", (context) => {
  context.expect(true).toMatchSnapshot();
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/require-local-test-context-for-concurrent-snapshots": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/require-local-test-context-for-concurrent-snapshots --vitest-plugin
```

:::

## References

* Rule Source
