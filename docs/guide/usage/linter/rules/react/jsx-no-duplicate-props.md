---
url: /docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.md
---
# react/jsx-no-duplicate-props&#x20;

### What it does

This rule prevents duplicate props in JSX elements.

### Why is this bad?

Having duplicate props in a JSX element is most likely a mistake.
Creating JSX elements with duplicate props can cause unexpected behavior in your application.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<App a a />;
<App foo={2} bar baz foo={3} />;
```

Examples of **correct** code for this rule:

```jsx
<App a />;
<App bar baz foo={3} />;
```

### Differences from eslint-plugin-react

This rule does not support the `ignoreCase` option. Props with different cases are
considered distinct and will not be flagged as duplicates (e.g., `<App foo Foo />`
is allowed). This is intentional, as props are case-sensitive in JSX.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-no-duplicate-props": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-no-duplicate-props --react-plugin
```

:::

## References

* Rule Source
