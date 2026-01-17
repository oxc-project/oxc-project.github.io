---
url: /docs/guide/usage/linter/rules/react/no-string-refs.md
---

### What it does

This rule prevents using string literals in ref attributes.

### Why is this bad?

Using string literals in ref attributes is deprecated in React.

### Examples

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});

var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.refs.hello;
    // ...do something with component
  },
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});
```

Examples of **correct** code for this rule:

```jsx
var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.hello;
    // ...do something with component
  },
  render() {
    return (
      <div
        ref={(c) => {
          this.hello = c;
        }}
      >
        Hello, world.
      </div>
    );
  },
});
```

## Configuration

This rule accepts a configuration object with the following properties:

### noTemplateLiterals

type: `boolean`

default: `false`

Disallow template literals in addition to string literals.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-string-refs": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-string-refs --react-plugin
```

:::

## References

* Rule Source
