---
url: /docs/guide/usage/linter/rules/jest/no-restricted-jest-methods.md
---

### What it does

Restrict the use of specific `jest` and `vi` methods.

### Why is this bad?

Certain Jest or Vitest methods may be deprecated, discouraged in specific
contexts, or incompatible with your testing environment. Restricting
them helps maintain consistent and reliable test practices.

By default, no methods are restricted by this rule.
You must configure the rule for it to disable anything.

### Examples

Examples of **incorrect** code for this rule:

```javascript
jest.useFakeTimers();
it("calls the callback after 1 second via advanceTimersByTime", () => {
  // ...

  jest.advanceTimersByTime(1000);

  // ...
});

test("plays video", () => {
  const spy = jest.spyOn(video, "play");

  // ...
});
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-restricted-vi-methods": [
      "error",
      { "badFunction": "Don't use `badFunction`, it is bad." }
    ]
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### restrictedJestMethods

type: `Record<string, string>`

default: `{}`

A mapping of restricted Jest method names to custom messages - or
`null`, for a generic message.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-restricted-jest-methods": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-restricted-jest-methods --jest-plugin
```

:::

## References

* Rule Source
