---
url: /docs/guide/usage/linter/rules/react/no-danger-with-children.md
---
# react/no-danger-with-children&#x20;

### What it does

Disallows when a DOM element is using both `children` and `dangerouslySetInnerHTML` properties.

### Why is this bad?

React will throw a warning if this rule is ignored and both `children` and `dangerouslySetInnerHTML` are used.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div dangerouslySetInnerHTML={{ __html: "HTML" }}>Children</div>;
React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
```

Examples of **correct** code for this rule:

```jsx
<div>Children</div>
<div dangerouslySetInnerHTML={{ __html: "HTML" }} />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-danger-with-children": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-danger-with-children --react-plugin
```

:::

## References

* Rule Source
