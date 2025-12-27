---
url: /docs/guide/usage/linter/rules/react/prefer-es6-class.md
---
# react/prefer-es6-class&#x20;

### What it does

React offers you two ways to create traditional components: using the ES5
create-react-class module or the new ES2015 class system.

### Why is this bad?

This rule enforces a consistent React class style.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  },
});
```

## Configuration

This rule accepts one of the following string values:

### `"always"`

Always prefer ES6 class-style components

### `"never"`

Do not allow ES6 class-style

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/prefer-es6-class": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/prefer-es6-class --react-plugin
```

:::

## References

* Rule Source
