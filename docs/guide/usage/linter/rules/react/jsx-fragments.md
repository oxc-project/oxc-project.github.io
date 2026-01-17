---
url: /docs/guide/usage/linter/rules/react/jsx-fragments.md
---

### What it does

Enforces the shorthand or standard form for React Fragments.

### Why is this bad?

Makes code using fragments more consistent one way or the other.

## Configuration

This rule accepts one of the following string values:

### `"syntax"`

This is the default mode. It will enforce the shorthand syntax for React fragments, with one exception.
Keys or attributes are not supported by the shorthand syntax, so the rule will not warn on standard-form fragments that use those.

Examples of **incorrect** code for this rule:

```jsx
<React.Fragment>
  <Foo />
</React.Fragment>
```

Examples of **correct** code for this rule:

```jsx
<>
  <Foo />
</>
```

```jsx
<React.Fragment key="key">
  <Foo />
</React.Fragment>
```

### `"element"`

This mode enforces the standard form for React fragments.

Examples of **incorrect** code for this rule:

```jsx
<>
  <Foo />
</>
```

Examples of **correct** code for this rule:

```jsx
<React.Fragment>
  <Foo />
</React.Fragment>
```

```jsx
<React.Fragment key="key">
  <Foo />
</React.Fragment>
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-fragments": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-fragments --react-plugin
```

:::

## References

* Rule Source
