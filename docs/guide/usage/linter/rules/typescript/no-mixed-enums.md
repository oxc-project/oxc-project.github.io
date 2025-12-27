---
url: /docs/guide/usage/linter/rules/typescript/no-mixed-enums.md
---
# typescript/no-mixed-enums&#x20;

### What it does

This rule disallows enums from having both string and numeric members.

### Why is this bad?

TypeScript enums can have string, numeric, or computed members. Having mixed string and numeric members in the same enum can lead to confusion and unexpected runtime behavior due to how TypeScript compiles enums.

### Examples

Examples of **incorrect** code for this rule:

```ts
enum Status {
  Open = 1,
  Closed = "closed",
}

enum Direction {
  Up = "up",
  Down = 2,
  Left = "left",
  Right = 4,
}
```

Examples of **correct** code for this rule:

```ts
// All numeric
enum Status {
  Open = 1,
  Closed = 2,
}

// All string
enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

// Auto-incremented numeric
enum Color {
  Red,
  Green,
  Blue,
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-mixed-enums": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-mixed-enums
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
