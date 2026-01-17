---
url: /docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.md
---

### What it does

Enforces that the explicit `role` property is not the same as
implicit/default role property on element.

### Why is this bad?

Redundant roles can lead to confusion and verbosity in the codebase.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<nav role="navigation" />
```

Examples of **correct** code for this rule:

```jsx
<nav />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/no-redundant-roles": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/no-redundant-roles --jsx-a11y-plugin
```

:::

## References

* Rule Source
