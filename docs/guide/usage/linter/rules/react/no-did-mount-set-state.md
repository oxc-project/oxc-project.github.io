---
url: /docs/guide/usage/linter/rules/react/no-did-mount-set-state.md
---

### What it does

Disallows using `setState` in the `componentDidMount` lifecycle method.

This rule is not relevant for function components, and so can potentially be
disabled for modern React codebases.

### Why is this bad?

Updating the state after a component mount will trigger a second `render()` call and can lead to property/layout thrashing.
This can cause performance issues and unexpected behavior.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  componentDidMount: function () {
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
  componentDidMount: function () {
    this.onMount(function callback(newName) {
      this.setState({
        name: newName,
      });
    });
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});
```

## Configuration

This rule accepts one of the following string values:

### `"allowed"`

Allow `setState` calls in nested functions within `componentDidMount`, the default behavior.

### `"disallow-in-func"`

When set, also disallows `setState` calls in nested functions within `componentDidMount`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-did-mount-set-state": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-did-mount-set-state --react-plugin
```

:::

## References

* Rule Source
