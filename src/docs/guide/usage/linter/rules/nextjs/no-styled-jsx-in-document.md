<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# nextjs/no-styled-jsx-in-document <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Prevent usage of styled-jsx in pages/\_document.js.

### Why is this bad?

Custom CSS like styled-jsx is not allowed in a [Custom Document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document).

### Example

```javascript

```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny nextjs/no-styled-jsx-in-document --nextjs-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-styled-jsx-in-document": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/b9ab60bde696d2742d3c5781084ee3c7bb99821e/crates/oxc_linter/src/rules/nextjs/no_styled_jsx_in_document.rs)
