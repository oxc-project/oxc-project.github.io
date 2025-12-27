---
url: /docs/guide/usage/linter/rules/jest/no-standalone-expect.md
---
# jest/no-standalone-expect&#x20;

### What it does

Prevents `expect` statements outside of a `test` or `it` block. An `expect`
within a helper function (but outside of a `test` or `it` block) will not
trigger this rule.

Statements like `expect.hasAssertions()` will NOT trigger this rule since these
calls will execute if they are not in a test block.

### Why is this bad?

`expect` statements outside of test blocks will not be executed by the Jest
test runner, which means they won't actually test anything. This can lead to
false confidence in test coverage and may hide bugs that would otherwise be
caught by proper testing.

### Examples

Examples of **incorrect** code for this rule:

```javascript
describe("a test", () => {
  expect(1).toBe(1);
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-standalone-expect": "error"
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### additionalTestBlockFunctions

type: `string[]`

default: `[]`

An array of function names that should also be treated as test blocks.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-standalone-expect": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-standalone-expect --jest-plugin
```

:::

## References

* Rule Source
