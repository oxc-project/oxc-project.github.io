---
url: /docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.md
---

### What it does

Enforces that any unique expression is only spread once.

### Why is this bad?

Generally spreading the same expression twice is an indicator of a mistake since any attribute between the spreads may be overridden when the intent was not to.
Even when that is not the case this will lead to unnecessary computations being performed.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<App {...props} myAttr="1" {...props} />
```

Examples of **correct** code for this rule:

```jsx
<App myAttr="1" {...props} />
<App {...props} myAttr="1" />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-props-no-spread-multi": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-props-no-spread-multi --react-plugin
```

:::

## References

* Rule Source
