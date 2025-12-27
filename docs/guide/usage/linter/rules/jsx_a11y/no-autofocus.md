---
url: /docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.md
---
# jsx\_a11y/no-autofocus&#x20;

### What it does

Enforce that `autoFocus` prop is not used on elements.

### Why is this bad?

Autofocusing elements can cause usability issues for sighted and
non-sighted users alike. It can be disorienting when focus is shifted
without user input and can interfere with assistive technologies.
Users should control when and where focus moves on a page.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div autoFocus />
<div autoFocus="true" />
<div autoFocus="false" />
<div autoFocus={undefined} />
```

Examples of **correct** code for this rule:

```jsx
<div />
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignoreNonDOM

type: `boolean`

default: `false`

Determines if developer-created components are checked.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/no-autofocus": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/no-autofocus --jsx-a11y-plugin
```

:::

## References

* Rule Source
