---
url: /docs/guide/usage/linter/rules/oxc/no-const-enum.md
---
# oxc/no-const-enum&#x20;

### What it does

Disallow TypeScript `const enum`

### Why is this bad?

Const enums are enums that should be inlined at use sites.
Const enums are not supported by bundlers and are incompatible with the isolatedModules mode.
Their use can lead to import nonexistent values (because const enums are erased).

### Examples

Examples of **incorrect** code for this rule:

```ts
const enum Color {
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
    "oxc/no-const-enum": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/no-const-enum
```

:::

## References

* Rule Source
