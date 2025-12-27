---
url: /docs/guide/usage/linter/rules/react/jsx-filename-extension.md
---
# react/jsx-filename-extension&#x20;

### What it does

Enforces consistent use of the `.jsx` file extension.

### Why is this bad?

Some bundlers or parsers need to know by the file extension that it contains JSX
in order to properly handle the files.

### Examples

Examples of **incorrect** code for this rule:

```jsx
// filename: MyComponent.js
function MyComponent() {
  return <div />;
}
```

Examples of **correct** code for this rule:

```jsx
// filename: MyComponent.jsx
function MyComponent() {
  return <div />;
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allow

type: `"always" | "as-needed"`

default: `"always"`

When to allow a JSX filename extension. By default all files may have a JSX extension.
Set this to `as-needed` to only allow JSX file extensions in files that contain JSX syntax.

### extensions

type: `string[]`

default: `["jsx"]`

The set of allowed file extensions.
Can include or exclude the leading dot (e.g., "jsx" and ".jsx" are both valid).

### ignoreFilesWithoutCode

type: `boolean`

default: `false`

If enabled, files that do not contain code (i.e. are empty, contain only whitespaces or comments) will not be rejected.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-filename-extension": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-filename-extension --react-plugin
```

:::

## References

* Rule Source
