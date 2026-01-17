---
url: /docs/guide/usage/linter/rules/react/no-unescaped-entities.md
---

### What it does

This rule prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.

### Why is this bad?

JSX escape characters are used to inject characters into JSX statements that would otherwise be interpreted as code.

### Example

Incorrect

```jsx
<div> > </div>
```

Correct

```jsx
<div> &gt; </div>
```

```jsx
<div> {">"} </div>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-unescaped-entities": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-unescaped-entities --react-plugin
```

:::

## References

* Rule Source
