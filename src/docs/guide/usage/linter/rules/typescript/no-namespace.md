<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-namespace <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallow TypeScript namespaces.

### Why is this bad?

TypeScript historically allowed a form of code organization called "custom modules" (module Example {}),
later renamed to "namespaces" (namespace Example). Namespaces are an outdated way to organize TypeScript code.
ES2015 module syntax is now preferred (import/export).

### Example

```typescript
module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/no_namespace.rs)