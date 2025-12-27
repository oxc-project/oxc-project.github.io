---
url: /docs/guide/usage/linter/rules/jsx_a11y/no-aria-hidden-on-focusable.md
---
# jsx\_a11y/no-aria-hidden-on-focusable&#x20;

### What it does

Enforces that `aria-hidden="true"` is not set on focusable elements.

### Why is this bad?

`aria-hidden="true"` on focusable elements can lead to confusion or unexpected behavior for screen reader users.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div aria-hidden="true" tabIndex="0" />
```

Examples of **correct** code for this rule:

```jsx
<div aria-hidden="true" />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/no-aria-hidden-on-focusable": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/no-aria-hidden-on-focusable --jsx-a11y-plugin
```

:::

## References

* Rule Source
