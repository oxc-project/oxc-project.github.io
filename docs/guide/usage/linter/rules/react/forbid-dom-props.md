---
url: /docs/guide/usage/linter/rules/react/forbid-dom-props.md
---
# react/forbid-dom-props&#x20;

### What it does

This rule prevents passing of props to elements. This rule only applies to DOM Nodes (e.g. ) and not Components (e.g. ). The list of forbidden props can be customized with the forbid option.

### Why is this bad?

This rule checks all JSX elements and verifies that no forbidden props are used on DOM Nodes. This rule is off by default.

### Examples

Examples of **incorrect** code for this rule:

```jsx
// [1, { "forbid": ["id"] }]
<div id='Joe' />

// [1, { "forbid": ["style"] }]
<div style={{color: 'red'}} />
```

Examples of **correct** code for this rule:

```jsx
// [1, { "forbid": ["id"] }]
<Hello id='foo' />

// [1, { "forbid": ["id"] }]
<Hello id={{color: 'red'}} />
```

### Options

#### forbid

An array of strings, with the names of props that are forbidden. The default value of this option \[].
Each array element can either be a string with the property name or object specifying the property name, an optional custom message, and a DOM nodes disallowed list (e.g. )

`{"propName": "someProp", "disallowedFor": ["DOMNode", "AnotherDOMNode"], "message": "Avoid using someProp" }`

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/forbid-dom-props": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/forbid-dom-props --react-plugin
```

:::

## References

* Rule Source
