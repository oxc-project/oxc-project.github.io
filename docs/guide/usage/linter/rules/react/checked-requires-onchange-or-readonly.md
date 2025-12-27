---
url: /docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly.md
---
# react/checked-requires-onchange-or-readonly&#x20;

### What it does

This rule enforces onChange or readonly attribute for checked property of input elements.
It also warns when checked and defaultChecked properties are used together.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<input type="checkbox" checked />
<input type="checkbox" checked defaultChecked />
<input type="radio" checked defaultChecked />

React.createElement('input', { checked: false });
React.createElement('input', { type: 'checkbox', checked: true });
React.createElement('input', { type: 'checkbox', checked: true, defaultChecked: true });
```

Examples of **correct** code for this rule:

```jsx
<input type="checkbox" checked onChange={() => {}} />
<input type="checkbox" checked readOnly />
<input type="checkbox" checked onChange readOnly />
<input type="checkbox" defaultChecked />

React.createElement('input', { type: 'checkbox', checked: true, onChange() {} });
React.createElement('input', { type: 'checkbox', checked: true, readOnly: true });
React.createElement('input', { type: 'checkbox', checked: true, onChange() {}, readOnly: true });
React.createElement('input', { type: 'checkbox', defaultChecked: true });
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignoreExclusiveCheckedAttribute

type: `boolean`

default: `false`

Ignore the restriction that `checked` and `defaultChecked` should not be used together.

### ignoreMissingProperties

type: `boolean`

default: `false`

Ignore the requirement to provide either `onChange` or `readOnly` when the `checked` prop is present.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/checked-requires-onchange-or-readonly": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/checked-requires-onchange-or-readonly --react-plugin
```

:::

## References

* Rule Source
