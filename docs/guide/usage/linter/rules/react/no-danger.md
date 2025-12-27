---
url: /docs/guide/usage/linter/rules/react/no-danger.md
---
# react/no-danger&#x20;

### What it does

This rule prevents the use of `dangerouslySetInnerHTML` prop.

### Why is this bad?

`dangerouslySetInnerHTML` is a way to inject HTML into your React
component. This is dangerous because it can easily lead to XSS
vulnerabilities.

### Examples

Examples of **incorrect** code for this rule:

```jsx
import React from "react";

const Hello = <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;
```

Examples of **correct** code for this rule:

```jsx
import React from "react";

const Hello = <div>Hello World</div>;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-danger": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-danger --react-plugin
```

:::

## References

* Rule Source
