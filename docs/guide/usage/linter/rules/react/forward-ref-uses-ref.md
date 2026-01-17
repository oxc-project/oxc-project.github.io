---
url: /docs/guide/usage/linter/rules/react/forward-ref-uses-ref.md
---

### What it does

Requires that components wrapped with `forwardRef` must have a `ref` parameter.
Omitting the `ref` argument is usually a bug,
and components not using `ref` don't need to be wrapped by `forwardRef`.

### Why is this bad?

Omitting the `ref` argument makes the `forwardRef` wrapper unnecessary,
and can lead to confusion.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var React = require("react");

var Component = React.forwardRef((props) => <div />);
```

Examples of **correct** code for this rule:

```jsx
var React = require("react");

var Component = React.forwardRef((props, ref) => <div ref={ref} />);

var Component = React.forwardRef((props, ref) => <div />);

function Component(props) {
  return <div />;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/forward-ref-uses-ref": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/forward-ref-uses-ref --react-plugin
```

:::

## References

* Rule Source
