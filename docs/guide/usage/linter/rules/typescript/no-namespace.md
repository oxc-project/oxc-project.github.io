---
url: /docs/guide/usage/linter/rules/typescript/no-namespace.md
---
# typescript/no-namespace&#x20;

### What it does

Disallow TypeScript namespaces.

### Why is this bad?

TypeScript historically allowed a form of code organization called "custom modules" (module Example {}),
later renamed to "namespaces" (namespace Example). Namespaces are an outdated way to organize TypeScript code.
ES2015 module syntax is now preferred (import/export).

### Examples

Examples of **incorrect** code for this rule:

```typescript
module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}
```

Examples of **correct** code for this rule:

```typescript
declare module "foo" {}
// anything inside a d.ts file
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowDeclarations

type: `boolean`

default: `false`

Whether to allow declare with custom TypeScript namespaces.

Examples of **incorrect** code for this rule when `{ "allowDeclarations": true }`

```typescript
module foo {}
namespace foo {}
```

Examples of **correct** code for this rule when `{ "allowDeclarations": true }`

```typescript
declare module "foo" {}
declare module foo {}
declare namespace foo {}

declare global {
  namespace foo {}
}

declare module foo {
  namespace foo {}
}
```

Examples of **incorrect** code for this rule when `{ "allowDeclarations": false }`

```typescript
module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}
```

Examples of **correct** code for this rule when `{ "allowDeclarations": false }`

```typescript
declare module "foo" {}
```

### allowDefinitionFiles

type: `boolean`

default: `true`

Examples of **incorrect** code for this rule when `{ "allowDefinitionFiles": true }`

```typescript
// if outside a d.ts file
module foo {}
namespace foo {}

// if outside a d.ts file
module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}
```

Examples of **correct** code for this rule when `{ "allowDefinitionFiles": true }`

```typescript
declare module "foo" {}
// anything inside a d.ts file
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-namespace": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-namespace
```

:::

## References

* Rule Source
