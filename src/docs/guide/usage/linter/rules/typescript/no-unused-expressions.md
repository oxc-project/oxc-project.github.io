<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-unused-expressions <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

This rule disallows unused expressions.

### Why is this bad?

Unused expressions are usually a mistake. They can be a symptom of a bug or a misunderstanding of the code.

### Examples

Examples of **incorrect** code for this rule:

```ts
Set<number>;
1 as number;
window!;
```

Examples of **correct** code for this rule:

```ts
const foo = new Set<number>();
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/a6b0100501fda75ec313146a992a9f5fce995518/crates/oxc_linter/src/rules/typescript/no_unused_expressions.rs)
