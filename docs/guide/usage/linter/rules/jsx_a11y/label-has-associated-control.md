---
url: /docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.md
---
# jsx\_a11y/label-has-associated-control&#x20;

### What it does

Enforce that a label tag has a text label and an associated control.

### Why is this bad?

A form label that either isn't properly associated with a form control (such as an `<input>`), or doesn't contain accessible text, hinders accessibility for users using assistive technologies such as screen readers. The user may not have enough information to understand the purpose of the form control.

### Examples

Examples of **incorrect** code for this rule:

```jsx
function Foo(props) {
    return <label {...props} />
}

<input type="text" />
<label>Surname</label>
```

Examples of **correct** code for this rule:

```jsx
function Foo(props) {
  const { htmlFor, ...otherProps } = props;

  return <label htmlFor={htmlFor} {...otherProps} />;
}

<label>
  <input type="text" />
  Surname
</label>;
```

## Configuration

This rule accepts a configuration object with the following properties:

### assert

type: `"htmlFor" | "nesting" | "both" | "either"`

default: `"either"`

The type of association required between the label and the control.

### controlComponents

type: `string[]`

default: `[]`

Custom JSX components to be treated as form controls.

### depth

type: `integer`

default: `2`

Maximum depth to search for a nested control.

### labelAttributes

type: `string[]`

default: `["alt", "aria-label", "aria-labelledby"]`

Attributes to check for accessible label text.

### labelComponents

type: `string[]`

default: `["label"]`

Custom JSX components to be treated as labels.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/label-has-associated-control": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/label-has-associated-control --jsx-a11y-plugin
```

:::

## References

* Rule Source
