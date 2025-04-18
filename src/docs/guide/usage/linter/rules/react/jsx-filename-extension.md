<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/jsx-filename-extension <Badge type="info" text="Restriction" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Enforces consistent use of the JSX file extension.

### Why is this bad?

Some bundlers or parsers need to know by the file extension that it contains JSX

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

### Rule options

#### `allow` (default: `"always"`)

When to allow a JSX filename extension. By default all files may have a JSX extension.
Set this to `as-needed` to only allow JSX file extensions in files that contain JSX syntax.

```js
"rules": {
    "react/jsx-filename-extension": ["error", { "allow": "as-needed" }]
}
```

#### `extensions` (default: `[".jsx"]`)

The set of allowed extensions is configurable. By default `'.jsx'` is allowed. If you wanted to allow both `'.jsx'` and `'.tsx'`, the configuration would be:

```js
"rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }]
}
```

#### `ignoreFilesWithoutCode` (default: `false`)

If enabled, files that do not contain code (i.e. are empty, contain only whitespaces or comments) will not be rejected.

```js
"rules": {
    "react/jsx-filename-extension": ["error", { "ignoreFilesWithoutCode": true }]
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny react/jsx-filename-extension
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "react/jsx-filename-extension": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/react/jsx_filename_extension.rs)
