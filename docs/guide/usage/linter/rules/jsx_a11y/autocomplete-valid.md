---
url: /docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.md
---
# jsx\_a11y/autocomplete-valid&#x20;

### What it does

Enforces that an element's autocomplete attribute must be a valid value.

### Why is this bad?

Incorrectly using the autocomplete attribute may decrease the accessibility of the website for users.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<input autocomplete="invalid-value" />
```

Examples of **correct** code for this rule:

```jsx
<input autocomplete="name" />
```

## Configuration

This rule accepts a configuration object with the following properties:

### inputComponents

type: `string[]`

default: `["input"]`

List of custom component names that should be treated as input elements.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/autocomplete-valid": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/autocomplete-valid --jsx-a11y-plugin
```

:::

## References

* Rule Source
