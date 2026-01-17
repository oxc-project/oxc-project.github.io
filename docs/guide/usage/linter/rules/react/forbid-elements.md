---
url: /docs/guide/usage/linter/rules/react/forbid-elements.md
---

### What it does

Allows you to configure a list of forbidden elements and to specify their desired replacements.

### Why is this bad?

You may want to forbid usage of certain elements in favor of others, (e.g. forbid all  and use  instead)

### Examples

Examples of **incorrect** code for this rule:

```jsx
// [1, { "forbid": ["button"] }]
<button />;
React.createElement("button");

// [1, { "forbid": ["Modal"] }]
<Modal />;
React.createElement(Modal);

// [1, { "forbid": ["Namespaced.Element"] }]
<Namespaced.Element />;
React.createElement(Namespaced.Element);

// [1, { "forbid": [{ "element": "button", "message": "use <Button> instead" }, "input"] }]
<div>
  <button />
  <input />
</div>;
React.createElement("div", {}, React.createElement("button", {}, React.createElement("input")));
```

Examples of **correct** code for this rule:

```jsx
// [1, { "forbid": ["button"] }]
<Button />

// [1, { "forbid": [{ "element": "button" }] }]
<Button />
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/forbid-elements": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/forbid-elements --react-plugin
```

:::

## References

* Rule Source
