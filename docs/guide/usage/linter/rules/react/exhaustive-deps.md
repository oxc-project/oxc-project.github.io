---
url: /docs/guide/usage/linter/rules/react/exhaustive-deps.md
---
# react/exhaustive-deps&#x20;

### What it does

Verifies the list of dependencies for Hooks like `useEffect` and similar.

### Why is this bad?

React Hooks like `useEffect` and similar require a list of dependencies to be passed as an argument. This list is used to determine when the effect should be re-run. If the list is missing or incomplete, the effect may run more often than necessary, or not at all.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function MyComponent(props) {
  useEffect(() => {
    console.log(props.foo);
  }, []);
  // `props` is missing from the dependencies array
  return <div />;
}
```

Examples of **correct** code for this rule:

```javascript
function MyComponent(props) {
  useEffect(() => {
    console.log(props.foo);
  }, [props]);
  return <div />;
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### additionalHooks

type: `string | null`

default: `null`

Optionally provide a regex of additional hooks to check.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/exhaustive-deps": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/exhaustive-deps --react-plugin
```

:::

## References

* Rule Source
