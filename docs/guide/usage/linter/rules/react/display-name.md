---
url: /docs/guide/usage/linter/rules/react/display-name.md
---

### What it does

Enforces that React components have a `displayName` property.

### Why is this bad?

React DevTools uses `displayName` to show component names in the component tree.
Without `displayName`, components will show up as "Unknown" in DevTools.

### Examples

Examples of **incorrect** code for this rule:

```jsx
const MyComponent = () => <div>Hello</div>;
```

Examples of **correct** code for this rule:

```jsx
const MyComponent = () => <div>Hello</div>;
MyComponent.displayName = "MyComponent";
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkContextObjects

type: `boolean`

default: `false`

When `true`, this rule will warn on context objects
without a `displayName`.

`displayName` allows you to [name your context](https://reactjs.org/docs/context.html#contextdisplayname) object.
This name is used in the React DevTools for the context's `Provider` and `Consumer`.

### ignoreTranspilerName

type: `boolean`

default: `false`

When `true`, the rule will ignore the name set by the transpiler
and require a `displayName` property in this case.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/display-name": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/display-name --react-plugin
```

:::

## References

* Rule Source
