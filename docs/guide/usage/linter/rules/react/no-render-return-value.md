---
url: /docs/guide/usage/linter/rules/react/no-render-return-value.md
---

### What it does

This rule will warn you if you try to use the `ReactDOM.render()` return value.

### Why is this bad?

Using the return value from `ReactDOM.render()` is a legacy
feature and should not be used.

Note that `ReactDOM.render`
[has been removed entirely in React 19](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-render)
and so should generally not be used.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var inst = ReactDOM.render(<App />, document.body);
function render() {
  return ReactDOM.render(<App />, document.body);
}
```

Examples of **correct** code for this rule:

```jsx
ReactDOM.render(<App />, document.body);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-render-return-value": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-render-return-value --react-plugin
```

:::

## References

* Rule Source
