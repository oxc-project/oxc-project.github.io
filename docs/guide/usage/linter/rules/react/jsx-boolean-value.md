---
url: /docs/guide/usage/linter/rules/react/jsx-boolean-value.md
---

### What it does

Enforce a consistent boolean attribute style in your code.

### Why is this bad?

In JSX, you can set a boolean attribute to `true` or omit it. This rule will enforce a consistent style for boolean attributes.

### Examples

Examples of **incorrect** code for this rule:

```jsx
const Hello = <Hello personal={true} />;
```

Examples of **correct** code for this rule:

```jsx
const Hello = <Hello personal />;
```

## Configuration

This rule accepts a configuration object with the following properties:

### assumeUndefinedIsFalse

type: `boolean`

default: `false`

If true, treats `prop={false}` as equivalent to the prop being undefined

### enforceBooleanAttribute

type: `"always" | "never"`

default: `"never"`

Enforce boolean attributes to always or never have a value.

### exceptions

type: `string[]`

default: `[]`

List of attribute names to exclude from the rule.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-boolean-value": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-boolean-value --react-plugin
```

:::

## References

* Rule Source
