---
url: /docs/guide/usage/linter/rules/typescript/consistent-type-definitions.md
---
# typescript/consistent-type-definitions&#x20;

### What it does

Enforce type definitions to consistently use either `interface` or `type`.

### Why is this bad?

TypeScript provides two common ways to define an object type: `interface` and `type`.
The two are generally very similar, and can often be used interchangeably.
Using the same type declaration style consistently helps with code readability.

### Examples

By default this rule enforces the use of `interface` for defining object types.

Examples of **incorrect** code for this rule:

```typescript
type T = { x: number };
```

Examples of **correct** code for this rule:

```typescript
type T = string;
type Foo = string | {};

interface T {
  x: number;
}
```

## Configuration

This rule accepts one of the following string values:

### `"interface"`

Prefer `interface` over `type` for object type definitions:

```typescript
interface T {
  x: number;
}
```

### `"type"`

Prefer `type` over `interface` for object type definitions:

```typescript
type T = { x: number };
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/consistent-type-definitions": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/consistent-type-definitions
```

:::

## References

* Rule Source
