---
url: /docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.md
---
# typescript/no-confusing-non-null-assertion&#x20;

### What it does

Disallow non-null assertion in locations that may be confusing.

### Why is this bad?

Using a non-null assertion (!) next to an assign or equals check (= or == or ===) creates code that is confusing as it looks similar to a not equals check (!= !==).

### Examples

Examples of **incorrect** code for this rule:

```ts
a! == b; // a non-null assertions(`!`) and an equals test(`==`)
a !== b; // not equals test(`!==`)
a! === b; // a non-null assertions(`!`) and an triple equals test(`===`)
```

Examples of **correct** code for this rule:

```ts
a == b;
a !== b;
a === b;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-confusing-non-null-assertion": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-confusing-non-null-assertion
```

:::

## References

* Rule Source
