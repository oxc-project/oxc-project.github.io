---
url: /docs/guide/usage/linter/rules/react_perf/jsx-no-new-array-as-prop.md
---
# react\_perf/jsx-no-new-array-as-prop&#x20;

### What it does

Prevent Arrays that are local to the current method from being used
as values of JSX props.

### Why is this bad?

Using locally defined Arrays as values for props can lead to unintentional
re-renders and performance issues. Every time the parent component renders,
a new instance of the Array is created, causing unnecessary re-renders of
child components. This also leads to harder-to-maintain code as the
component's props are not passed consistently.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<Item list={[]} />
<Item list={new Array()} />
<Item list={Array()} />
<Item list={this.props.list || []} />
<Item list={this.props.list ? this.props.list : []} />
```

Examples of **correct** code for this rule:

```jsx
<Item list={this.props.list} />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react-perf"],
  "rules": {
    "react-perf/jsx-no-new-array-as-prop": "error"
  }
}
```

```bash [CLI]
oxlint --deny react-perf/jsx-no-new-array-as-prop --react-perf-plugin
```

:::

## References

* Rule Source
