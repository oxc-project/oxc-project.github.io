---
url: /docs/guide/usage/linter/rules/react/jsx-max-depth.md
---

### What it does

Enforces a maximum depth for nested JSX elements and fragments.

### Why is this bad?

Excessively nested JSX makes components harder to read and maintain.

### Examples

Examples of **incorrect** code for this rule:

```jsx
const Component = () => (
  <div>
    <div>
      <div>
        <span />
      </div>
    </div>
  </div>
);
```

Examples of **correct** code for this rule:

```jsx
const Component = () => (
  <div>
    <div>
      <span />
    </div>
  </div>
);
```

## Configuration

This rule accepts a configuration object with the following properties:

### max

type: `integer`

default: `2`

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-max-depth": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-max-depth --react-plugin
```

:::

## References

* Rule Source
