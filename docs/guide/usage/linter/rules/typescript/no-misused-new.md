---
url: /docs/guide/usage/linter/rules/typescript/no-misused-new.md
---
# typescript/no-misused-new&#x20;

### What it does

Enforces valid definition of new and constructor. This rule prevents classes from defining
a method named `new` and interfaces from defining a method named `constructor`.

### Why is this bad?

JavaScript classes may define a constructor method that runs
when a class instance is newly created.

TypeScript allows interfaces that describe a static class object to
define a `new()` method (though this is rarely used in real world code).
Developers new to JavaScript classes and/or TypeScript interfaces may
sometimes confuse when to use constructor or new.

### Examples

Examples of **incorrect** code for this rule:

```typescript
declare class C {
  new(): C;
}
```

```typescript
interface I {
  new (): I;
  constructor(): void;
}
```

Examples of **correct** code for this rule:

```typescript
declare class C {
  constructor();
}
```

```typescript
interface I {
  new (): C;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-misused-new": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-misused-new
```

:::

## References

* Rule Source
