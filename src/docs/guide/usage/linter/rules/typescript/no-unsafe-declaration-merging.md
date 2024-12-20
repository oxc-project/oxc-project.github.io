<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-unsafe-declaration-merging <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow unsafe declaration merging.

### Why is this bad?

Declaration merging between classes and interfaces is unsafe.
The TypeScript compiler doesn't check whether properties are initialized, which can cause lead to TypeScript not detecting code that will cause runtime errors.

### Example

```ts
interface Foo {}
class Foo {}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/25ddb3519289dfe2a51e53b9b0c355d8ad950bbc/crates/oxc_linter/src/rules/typescript/no_unsafe_declaration_merging.rs)
