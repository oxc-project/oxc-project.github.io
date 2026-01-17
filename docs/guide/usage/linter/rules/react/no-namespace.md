---
url: /docs/guide/usage/linter/rules/react/no-namespace.md
---

### What it does

Enforce that namespaces are not used in React elements.

### Why is this bad?

Namespaces in React elements, such as svg:circle, are not supported by React.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<ns:TestComponent />
<Ns:TestComponent />
```

Examples of **correct** code for this rule:

```jsx
<TestComponent />
<testComponent />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-namespace": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-namespace --react-plugin
```

:::

## References

* Rule Source
