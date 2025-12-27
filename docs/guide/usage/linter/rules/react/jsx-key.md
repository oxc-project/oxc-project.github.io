---
url: /docs/guide/usage/linter/rules/react/jsx-key.md
---
# react/jsx-key&#x20;

### What it does

Enforce `key` prop for elements in array

### Why is this bad?

React requires a `key` prop for elements in an array to help identify which items have changed, are added, or are removed.

### Examples

Examples of **incorrect** code for this rule:

```jsx
[1, 2, 3].map((x) => <App />);
[1, 2, 3]?.map((x) => <BabelEslintApp />);
```

Examples of **correct** code for this rule:

```jsx
[1, 2, 3].map((x) => <App key={x} />);
[1, 2, 3]?.map((x) => <BabelEslintApp key={x} />);
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkFragmentShorthand

type: `boolean`

default: `true`

When true, check fragment shorthand `<>` for keys

### checkKeyMustBeforeSpread

type: `boolean`

default: `true`

When true, require key prop to be placed before any spread props

### warnOnDuplicates

type: `boolean`

default: `true`

When true, warn on duplicate key values

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-key": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-key --react-plugin
```

:::

## References

* Rule Source
