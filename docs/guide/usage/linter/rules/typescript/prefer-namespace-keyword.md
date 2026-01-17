---
url: /docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.md
---

### What it does

This rule reports when the module keyword is used instead of namespace.
This rule does not report on the use of TypeScript module declarations to describe external APIs (declare module 'foo' {}).

### Why is this bad?

Namespaces are an outdated way to organize TypeScript code. ES2015 module syntax is now preferred (import/export).
For projects still using custom modules / namespaces, it's preferred to refer to them as namespaces.

### Examples

Examples of **incorrect** code for this rule:

```typescript
module Example {}
```

Examples of **correct** code for this rule:

```typescript
namespace Example {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/prefer-namespace-keyword": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/prefer-namespace-keyword
```

:::

## References

* Rule Source
