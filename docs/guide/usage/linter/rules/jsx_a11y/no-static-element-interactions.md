---
url: /docs/guide/usage/linter/rules/jsx_a11y/no-static-element-interactions.md
---

### What it does

Enforces that static HTML elements with event handlers must have appropriate ARIA roles.

### Why is this bad?

Static HTML elements do not have semantic meaning in accessibility contexts.
When these elements receive click or keyboard event handlers, they must declare a role
to indicate their interactive purpose to assistive technologies.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div onClick={() => {}} />
<span onKeyDown={handleKeyDown} />
```

Examples of **correct** code for this rule:

```jsx
<button onClick={() => {}} />
<div onClick={() => {}} role="button" />
<input type="text" onClick={() => {}} />
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowExpressionValues

type: `boolean`

default: `false`

If `true`, role attribute values that are JSX expressions (e.g., `role={ROLE}`) are allowed.
If `false`, only string literal role values are permitted.

### handlers

type: `string[]`

default: `null`

An array of event handler names that should trigger this rule (e.g., `onClick`, `onKeyDown`).

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/no-static-element-interactions": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/no-static-element-interactions --jsx-a11y-plugin
```

:::

## References

* Rule Source
