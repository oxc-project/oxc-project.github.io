---
url: >-
  /docs/guide/usage/linter/rules/nextjs/no-before-interactive-script-outside-document.md
---
# nextjs/no-before-interactive-script-outside-document&#x20;

### What it does

Prevents the usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`.
This rule ensures that scripts with the `beforeInteractive` loading strategy are only used in the
document component where they are most effective.

### Why is this bad?

The `beforeInteractive` strategy is specifically designed to load scripts before any page hydration
occurs, which is only guaranteed to work correctly when placed in `pages/_document.js`. Using it elsewhere:

* May not achieve the intended early loading behavior
* Can lead to inconsistent script loading timing
* Might cause hydration mismatches or other runtime issues
* Could impact the application's performance optimization

### Examples

Examples of **incorrect** code for this rule:

```jsx
// pages/index.js
import Script from "next/script";

export default function HomePage() {
  return (
    <div>
      <Script
        src="https://example.com/script.js"
        strategy="beforeInteractive" // ❌ Wrong placement
      />
    </div>
  );
}
```

Examples of **correct** code for this rule:

```jsx
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Script
            src="https://example.com/script.js"
            strategy="beforeInteractive" // ✅ Correct placement
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-before-interactive-script-outside-document": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-before-interactive-script-outside-document --nextjs-plugin
```

:::

## References

* Rule Source
