---
url: /docs/guide/usage/linter/rules/react/void-dom-elements-no-children.md
---
# react/void-dom-elements-no-children&#x20;

### What it does

Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children.

### Why is this bad?

There are some HTML elements that are only self-closing (e.g. img, br, hr). These are collectively known as void DOM elements.
This rule checks that children are not passed to void DOM elements.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<br>Children</br>
<br children='Children' />
<br dangerouslySetInnerHTML={{ __html: 'HTML' }} />
React.createElement('br', undefined, 'Children')
React.createElement('br', { children: 'Children' })
React.createElement('br', { dangerouslySetInnerHTML: { __html: 'HTML' } })
```

Examples of **correct** code for this rule:

```jsx
<div>Children</div>
<div children='Children' />
<div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
React.createElement('div', undefined, 'Children')
React.createElement('div', { children: 'Children' })
React.createElement('div', { dangerouslySetInnerHTML: { __html: 'HTML' } })
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/void-dom-elements-no-children": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/void-dom-elements-no-children --react-plugin
```

:::

## References

* Rule Source
