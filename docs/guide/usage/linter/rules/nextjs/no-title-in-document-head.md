---
url: /docs/guide/usage/linter/rules/nextjs/no-title-in-document-head.md
---
# nextjs/no-title-in-document-head&#x20;

### What it does

Prevent usage of `<title>` with `Head` component from `next/document`.

### Why is this bad?

A `<title>` element should only be used for any `<head>` code that is common for all pages.
Title tags should be defined at the page-level using `next/head` instead.

### Examples

Examples of **incorrect** code for this rule:

```javascript
import { Head } from "next/document";

export function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
    </div>
  );
}
```

Examples of **correct** code for this rule:

```javascript
import Head from "next/head";

export function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
    </div>
  );
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["nextjs"],
  "rules": {
    "nextjs/no-title-in-document-head": "error"
  }
}
```

```bash [CLI]
oxlint --deny nextjs/no-title-in-document-head --nextjs-plugin
```

:::

## References

* Rule Source
