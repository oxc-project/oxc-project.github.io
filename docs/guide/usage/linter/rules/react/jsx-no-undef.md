---
url: /docs/guide/usage/linter/rules/react/jsx-no-undef.md
---

### What it does

Disallow undeclared variables in JSX

### Why is this bad?

It is most likely a potential ReferenceError caused by a misspelling of a variable or parameter name.

### Examples

Examples of **incorrect** code for this rule:

```jsx
const A = () => <App />;
const C = <B />;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-no-undef": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-no-undef --react-plugin
```

:::

## References

* Rule Source
