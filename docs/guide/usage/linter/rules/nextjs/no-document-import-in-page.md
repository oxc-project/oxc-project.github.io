---
url: /docs/guide/usage/linter/rules/nextjs/no-document-import-in-page.md
---
# nextjs/no-document-import-in-page&#x20;

### What it does

Prevent importing `next/document` outside of `pages/_document.js`.

### Why is this bad?

Importing `next/document` outside of `pages/_document.js` can cause
unexpected issues in your Next.js application.

### Examples

Examples of **incorrect** code for this rule:

```jsx
// `components/MyDocument.jsx`
import Document from "next/document";

class MyDocument extends Document {
  //...
}

export default MyDocument;
```

Examples of **correct** code for this rule:

```jsx
// `pages/_document.jsx`
import Document from "next/document";

class MyDocument extends Document {
  //...
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
    "nextjs/no-document-import-in-page": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-document-import-in-page --nextjs-plugin
```

:::

## References

* Rule Source
