---
url: /docs/guide/usage/linter/rules/react/no-will-update-set-state.md
---
# react/no-will-update-set-state&#x20;

### What it does

Disallows using `setState` in the `componentWillUpdate` lifecycle method.

### Why is this bad?

Updating the state during the component update step can lead to indeterminate component state and is not allowed.
This can cause unexpected behavior and bugs in your React application.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  componentWillUpdate: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

Examples of **correct** code for this rule:

```jsx
var Hello = createReactClass({
  componentWillUpdate: function () {
    this.props.prepareHandler();
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-will-update-set-state": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-will-update-set-state --react-plugin
```

:::

## References

* Rule Source
