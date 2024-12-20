<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-unnecessary-type-constraint <Badge type="info" text="Suspicious" />

<div class="rule-meta">
</div>

### What it does

Disallow unnecessary constraints on generic types.

### Why is this bad?

Generic type parameters (`<T>`) in TypeScript may be "constrained" with an extends keyword.
When no extends is provided, type parameters default a constraint to unknown. It is therefore redundant to extend from any or unknown.

### Example

```typescript
interface FooAny<T extends any> {}
interface FooUnknown<T extends unknown> {}
type BarAny<T extends any> = {};
type BarUnknown<T extends unknown> = {};
class BazAny<T extends any> {
  quxAny<U extends any>() {}
}
const QuuxAny = <T extends any>() => {};
function QuuzAny<T extends any>() {}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/typescript/no_unnecessary_type_constraint.rs)
