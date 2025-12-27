---
url: /docs/guide/usage/linter/rules/nextjs/no-typos.md
---
# nextjs/no-typos&#x20;

### What it does

Detects common typos in Next.js data fetching function names.

### Why is this bad?

Next.js will not call incorrectly named data fetching functions, causing pages to render without expected data.

### Examples

Examples of **incorrect** code for this rule:

```javascript
export default function Page() {
  return <div></div>;
}
export async function getServurSideProps() {}
```

Examples of **correct** code for this rule:

```javascript
export default function Page() {
  return <div></div>;
}
export async function getServerSideProps() {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-typos": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-typos --nextjs-plugin
```

:::

## References

* Rule Source
