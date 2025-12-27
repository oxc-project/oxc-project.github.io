---
url: /docs/guide/usage/linter/rules/jsx_a11y/prefer-tag-over-role.md
---
# jsx\_a11y/prefer-tag-over-role&#x20;

### What it does

Enforces using semantic HTML tags over `role` attribute.

### Why is this bad?

Using semantic HTML tags can improve accessibility and readability of the code.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div role="button" />
```

Examples of **correct** code for this rule:

```jsx
<button />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/prefer-tag-over-role": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/prefer-tag-over-role --jsx-a11y-plugin
```

:::

## References

* Rule Source
