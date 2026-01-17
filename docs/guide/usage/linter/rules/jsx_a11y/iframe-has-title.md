---
url: /docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.md
---

### What it does

Enforce iframe elements have a title attribute.

### Why is this bad?

Screen reader users rely on a iframe title to describe the contents of
the iframe. Navigating through iframe and iframe elements quickly
becomes difficult and confusing for users of this technology if the
markup does not contain a title attribute.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={''} />
<iframe title={``} />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />
```

Examples of **correct** code for this rule:

```jsx
<iframe title="This is a unique title" />
<iframe title={uniqueTitle} />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/iframe-has-title": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/iframe-has-title --jsx-a11y-plugin
```

:::

## References

* Rule Source
