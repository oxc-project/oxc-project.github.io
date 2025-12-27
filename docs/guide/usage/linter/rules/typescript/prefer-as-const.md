---
url: /docs/guide/usage/linter/rules/typescript/prefer-as-const.md
---
# typescript/prefer-as-const&#x20;

### What it does

Enforce the use of `as const` over literal type.

### Why is this bad?

There are two common ways to tell TypeScript that a literal value should be interpreted as
its literal type (e.g. `2`) rather than general primitive type (e.g. `number`);

`as const`: telling TypeScript to infer the literal type automatically
`as` with the literal type: explicitly telling the literal type to TypeScript

`as const` is generally preferred, as it doesn't require re-typing the literal value.
This rule reports when an `as` with an explicit literal type can be replaced with an `as const`.

### Examples

Examples of **incorrect** code for this rule:

```ts
let bar: 2 = 2;
let foo = { bar: "baz" as "baz" };
```

Examples of **correct** code for this rule:

```ts
let foo = "bar";
let foo = "bar" as const;
let foo: "bar" = "bar" as const;
let bar = "bar" as string;
let foo = { bar: "baz" };
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/prefer-as-const": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/prefer-as-const
```

:::

## References

* Rule Source
