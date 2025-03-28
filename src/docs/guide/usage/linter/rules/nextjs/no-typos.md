<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# nextjs/no-typos <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Prevent common typos in Next.js's data fetching functions

### Why is this bad?

### Example

```javascript
export default function Page() {
  return <div></div>;
}
export async function getServurSideProps() {}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny nextjs/no-typos --nextjs-plugin
```

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-typos": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/0f1e0e87715075c250763ea31c3a82505a4f10d3/crates/oxc_linter/src/rules/nextjs/no_typos.rs)
