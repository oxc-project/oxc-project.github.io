---
url: /docs/guide/usage/linter/rules/typescript/no-duplicate-type-constituents.md
---
# typescript/no-duplicate-type-constituents&#x20;

### What it does

This rule disallows duplicate constituents of union or intersection types.

### Why is this bad?

Duplicate constituents in union and intersection types serve no purpose and can make code harder to read. They are likely a mistake.

### Examples

Examples of **incorrect** code for this rule:

```ts
type T1 = "A" | "A";

type T2 = A | A | B;

type T3 = { a: string } & { a: string };

type T4 = [A, A];

type T5 = "foo" | "bar" | "foo";
```

Examples of **correct** code for this rule:

```ts
type T1 = "A" | "B";

type T2 = A | B | C;

type T3 = { a: string } & { b: string };

type T4 = [A, B];

type T5 = "foo" | "bar" | "baz";
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignoreIntersections

type: `boolean`

default: `false`

Whether to ignore duplicate types in intersection types.
When true, allows `type T = A & A`.

### ignoreUnions

type: `boolean`

default: `false`

Whether to ignore duplicate types in union types.
When true, allows `type T = A | A`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-duplicate-type-constituents": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-duplicate-type-constituents
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
