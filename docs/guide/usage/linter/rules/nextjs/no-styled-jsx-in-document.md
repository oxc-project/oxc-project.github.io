---
url: /docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.md
---

### What it does

Prevent usage of styled-jsx in `pages/_document.js`.

### Why is this bad?

Custom CSS like styled-jsx is not allowed in a [Custom Document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document).

### Examples

Examples of **incorrect** code for this rule:

```javascript
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx>{`
            body {
              background: hotpink;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
```

Examples of **correct** code for this rule:

```javascript
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-styled-jsx-in-document": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-styled-jsx-in-document --nextjs-plugin
```

:::

## References

* Rule Source
