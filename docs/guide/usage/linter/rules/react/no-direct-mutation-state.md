---
url: /docs/guide/usage/linter/rules/react/no-direct-mutation-state.md
---

### What it does

This rule forbids the direct mutation of `this.state` in React components.

Note that this rule only applies to class components, it does not apply to function
components. For modern React codebases, this rule may not be necessary or relevant.

### Why is this bad?

React components should *never* mutate `this.state` directly, as
calling `setState()` afterwards may replace the mutation you made.

`this.state` should be treated as if it were immutable.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  componentDidMount: function () {
    this.state.name = this.props.name.toUpperCase();
  },
  render: function () {
    return <div>Hello {this.state.name}</div>;
  },
});

class Hello extends React.Component {
  constructor(props) {
    super(props);

    doSomethingAsync(() => {
      this.state = "bad";
    });
  }
}
```

Examples of **correct** code for this rule:

```jsx
var Hello = createReactClass({
  componentDidMount: function() {
    this.setState({
      name: this.props.name.toUpperCase();
    });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foo: 'bar',
    }
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
    "react/no-direct-mutation-state": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-direct-mutation-state --react-plugin
```

:::

## References

* Rule Source
