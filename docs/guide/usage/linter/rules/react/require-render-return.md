---
url: /docs/guide/usage/linter/rules/react/require-render-return.md
---
# react/require-render-return&#x20;

### What it does

Enforce ES5 or ES2015 class for returning value in render function

### Why is this bad?

When writing the `render` method in a component it is easy to forget to return the JSX content. This rule will warn if the return statement is missing.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  render() {
    <div>Hello</div>;
  },
});

class Hello extends React.Component {
  render() {
    <div>Hello</div>;
  }
}
```

Examples of **correct** code for this rule:

```jsx
var Hello = createReactClass({
  render() {
    return <div>Hello</div>;
  },
});

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/require-render-return": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/require-render-return --react-plugin
```

:::

## References

* Rule Source
