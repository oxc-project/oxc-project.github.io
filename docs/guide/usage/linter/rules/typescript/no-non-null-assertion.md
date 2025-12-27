---
url: /docs/guide/usage/linter/rules/typescript/no-non-null-assertion.md
---
# typescript/no-non-null-assertion&#x20;

### What it does

Disallow non-null assertions using the ! postfix operator.

### Why is this bad?

TypeScript's ! non-null assertion operator asserts to the type system that an expression is non-nullable, as in not null or undefined. Using assertions to tell the type system new information is often a sign that code is not fully type-safe. It's generally better to structure program logic so that TypeScript understands when values may be nullable.

### Examples

Examples of **incorrect** code for this rule:

```ts
x!;
x!.y;
x.y!;
```

Examples of **correct** code for this rule:

```ts
x;
x?.y;
x.y;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-non-null-assertion": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-non-null-assertion
```

:::

## References

* Rule Source
