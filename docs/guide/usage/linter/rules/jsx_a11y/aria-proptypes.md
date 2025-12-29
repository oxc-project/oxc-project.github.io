---
url: /docs/guide/usage/linter/rules/jsx_a11y/aria-proptypes.md
---
# jsx\_a11y/aria-proptypes&#x20;

### What it does

Enforces that elements do not use invalid ARIA state and property values.

### Why is this bad?

Using invalid ARIA state and property values can mislead screen readers and other assistive technologies.
It may cause the accessibility features of the website to fail, making it difficult for users with disabilities to use the site effectively.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div aria-level="yes" />
<div aria-relevant="additions removalss" />
```

Examples of **correct** code for this rule:

```jsx
<div aria-label="foo" />
<div aria-labelledby="foo bar" />
<div aria-checked={false} />
<div aria-invalid="grammar" />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/aria-proptypes": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/aria-proptypes --jsx-a11y-plugin
```

:::

## References

* Rule Source
