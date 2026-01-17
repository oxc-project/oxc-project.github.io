---
url: /docs/guide/usage/linter/rules/jest/no-mocks-import.md
---

### What it does

This rule reports imports from a path containing a **mocks** component.

### Why is this bad?

Manually importing mocks from a `__mocks__` directory can lead to unexpected behavior
and breaks Jest's automatic mocking system. Jest is designed to automatically resolve
and use mocks from `__mocks__` directories when `jest.mock()` is called. Directly
importing from these directories bypasses Jest's module resolution system and can cause
inconsistencies between test and production environments.

### Examples

Examples of **incorrect** code for this rule:

```ts
import thing from "./__mocks__/index";
require("./__mocks__/index");
```

Examples of **correct** code for this rule:

```ts
import thing from "thing";
require("thing");
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md),
to use it, add the following configuration to your `.oxlintrc.json`:

```json
{
  "rules": {
    "vitest/no-mocks-import": "error"
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
    "jest/no-mocks-import": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-mocks-import --jest-plugin
```

:::

## References

* Rule Source
