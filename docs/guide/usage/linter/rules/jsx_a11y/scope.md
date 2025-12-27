---
url: /docs/guide/usage/linter/rules/jsx_a11y/scope.md
---
# jsx\_a11y/scope&#x20;

### What it does

The scope prop should be used only on `<th>` elements.

### Why is this bad?

The scope attribute makes table navigation much easier for screen reader users, provided that it is used correctly.
Incorrectly used, scope can make table navigation much harder and less efficient.
A screen reader operates under the assumption that a table has a header and that this header specifies a scope. Because of the way screen readers function, having an accurate header makes viewing a table far more accessible and more efficient for people who use the device.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<div scope />
```

Examples of **correct** code for this rule:

```jsx
<th scope="col" />
<th scope={scope} />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/scope": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/scope --jsx-a11y-plugin
```

:::

## References

* Rule Source
