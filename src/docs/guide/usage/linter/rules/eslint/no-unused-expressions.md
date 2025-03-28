<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-unused-expressions <Badge type="info" text="Restriction" />

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

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-unused-expressions
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unused-expressions": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/0f1e0e87715075c250763ea31c3a82505a4f10d3/crates/oxc_linter/src/rules/eslint/no_unused_expressions.rs)
