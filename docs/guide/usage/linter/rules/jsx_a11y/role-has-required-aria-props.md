---
url: /docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.md
---

### What it does

Enforces that elements with ARIA roles must have all required attributes
for that role.

### Why is this bad?

Certain ARIA roles require specific attributes to express necessary
semantics for assistive technology.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div role="checkbox" />
```

Examples of **correct** code for this rule:

```jsx
<div role="checkbox" aria-checked="false" />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/role-has-required-aria-props": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/role-has-required-aria-props --jsx-a11y-plugin
```

:::

## References

* Rule Source
