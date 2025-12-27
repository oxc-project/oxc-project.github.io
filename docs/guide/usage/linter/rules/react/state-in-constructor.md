---
url: /docs/guide/usage/linter/rules/react/state-in-constructor.md
---
# react/state-in-constructor&#x20;

### What it does

Enforces the state initialization style to be either in a constructor or with a class property.

### Why is this bad?

Inconsistent state initialization styles can make the codebase harder to maintain and understand.
This rule enforces a consistent pattern across React class components.

### Examples

This rule has two modes: `"always"` and `"never"`.

#### `"always"` mode

Will enforce the state initialization style to be in a constructor. This is the default mode.

Examples of **incorrect** code for this rule:

```jsx
class Foo extends React.Component {
  state = { bar: 0 };
  render() {
    return <div>Foo</div>;
  }
}
```

Examples of **correct** code for this rule:

```jsx
class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bar: 0 };
  }
  render() {
    return <div>Foo</div>;
  }
}
```

#### `"never"` mode

Will enforce the state initialization style to be with a class property.

Examples of **incorrect** code for this rule:

```jsx
class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bar: 0 };
  }
  render() {
    return <div>Foo</div>;
  }
}
```

Examples of **correct** code for this rule:

```jsx
class Foo extends React.Component {
  state = { bar: 0 };
  render() {
    return <div>Foo</div>;
  }
}
```

## Configuration

This rule accepts one of the following string values:

### `"always"`

Enforce state initialization in the constructor.

### `"never"`

Enforce state initialization with a class property.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/state-in-constructor": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/state-in-constructor --react-plugin
```

:::

## References

* Rule Source
