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

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny typescript/no-unsafe-declaration-merging
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unsafe-declaration-merging": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/b9ab60bde696d2742d3c5781084ee3c7bb99821e/crates/oxc_linter/src/rules/typescript/no_unsafe_declaration_merging.rs)
