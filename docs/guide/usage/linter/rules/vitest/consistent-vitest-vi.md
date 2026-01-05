---
url: /docs/guide/usage/linter/rules/vitest/consistent-vitest-vi.md
---
# vitest/consistent-vitest-vi&#x20;

### What it does

This rule triggers an error when an unexpected vitest accessor is used.

### Why is this bad?

Not having a consistent vitest accessor can lead to confusion
when `vi` and `vitest` are used interchangeably.

### Examples

Examples of **incorrect** code for this rule:

```js
vitest.mock("./src/calculator.ts", { spy: true });

vi.stubEnv("NODE_ENV", "production");
```

Examples of **correct** code for this rule:

```js
vi.mock("./src/calculator.ts", { spy: true });

vi.stubEnv("NODE_ENV", "production");
```

## Configuration

This rule accepts a configuration object with the following properties:

### fn

type: `"vi" | "vitest"`

default: `"vi"`

Decides whether to prefer vitest function accessor

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/consistent-vitest-vi": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/consistent-vitest-vi --vitest-plugin
```

:::

## References

* Rule Source
