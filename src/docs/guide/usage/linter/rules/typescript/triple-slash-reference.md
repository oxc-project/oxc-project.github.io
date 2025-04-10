<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/triple-slash-reference <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow certain triple slash directives in favor of ES6-style import declarations.

### Why is this bad?

Use of triple-slash reference type directives is generally discouraged in favor of ECMAScript Module imports.

### Example

```ts
/// <reference lib="code" />
globalThis.value;
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny typescript/triple-slash-reference
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/triple-slash-reference": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/typescript/triple_slash_reference.rs)
