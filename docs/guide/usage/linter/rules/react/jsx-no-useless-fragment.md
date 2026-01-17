---
url: /docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.md
---

### What it does

Disallow unnecessary fragments.

### Why is this bad?

Fragments are a useful tool when you need to group multiple children without adding a
node to the DOM tree. However, sometimes you might end up with a fragment with a single
child. When this child is an element, string, or expression, it's not necessary to
use a fragment.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<>foo</>
<div><>foo</></div>
```

Examples of **correct** code for this rule:

```jsx
<>foo <div></div></>
<div>foo</div>
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowExpressions

type: `boolean`

default: `false`

Allow fragments with a single expression child.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-no-useless-fragment": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/jsx-no-useless-fragment --react-plugin
```

:::

## References

* Rule Source
