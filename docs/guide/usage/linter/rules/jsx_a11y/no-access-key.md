---
url: /docs/guide/usage/linter/rules/jsx_a11y/no-access-key.md
---
# jsx\_a11y/no-access-key&#x20;

### What it does

Enforces that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.

### Why is this bad?

Access keys are HTML attributes that allow web developers to assign keyboard shortcuts to elements.
Inconsistencies between keyboard shortcuts and keyboard commands used by screenreaders and keyboard-only users create accessibility complications so to avoid complications, access keys should not be used.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div accessKey="h" />
```

Examples of **correct** code for this rule:

```jsx
<div />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/no-access-key": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/no-access-key --jsx-a11y-plugin
```

:::

## References

* Rule Source
