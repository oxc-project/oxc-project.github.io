---
url: /docs/guide/usage/linter/rules/react_perf/jsx-no-jsx-as-prop.md
---

### What it does

Prevent JSX elements that are local to the current method from being
used as values of JSX props.

### Why is this bad?

Using locally defined JSX elements as values for props can lead to
unintentional re-renders and performance issues. Every time the parent
renders, a new instance of the JSX element is created, causing unnecessary
re-renders of child components. This also leads to harder-to-maintain code
as the component's props are not passed consistently.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<Item jsx={<SubItem />} />
<Item jsx={this.props.jsx || <SubItem />} />
<Item jsx={this.props.jsx ? this.props.jsx : <SubItem />} />
```

Examples of **correct** code for this rule:

```jsx
<Item callback={this.props.jsx} />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react-perf"],
  "rules": {
    "react-perf/jsx-no-jsx-as-prop": "error"
  }
}
```

```bash [CLI]
oxlint --deny react-perf/jsx-no-jsx-as-prop --react-perf-plugin
```

:::

## References

* Rule Source
