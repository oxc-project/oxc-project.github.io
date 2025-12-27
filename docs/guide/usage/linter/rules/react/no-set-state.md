---
url: /docs/guide/usage/linter/rules/react/no-set-state.md
---
# react/no-set-state&#x20;

### What it does

Disallow the usage of `this.setState` in React components.

### Why is this bad?

When using an architecture that separates your application state from your UI components
(e.g. Flux), it may be desirable to forbid the use of local component state. This rule is
especially helpful in read-only applications (that don't use forms), since local component
state should rarely be necessary in such cases.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  getInitialState: function () {
    return {
      name: this.props.name,
    };
  },
  handleClick: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return <div onClick={this.handleClick.bind(this)}>Hello {this.state.name}</div>;
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
    "react/no-set-state": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-set-state --react-plugin
```

:::

## References

* Rule Source
