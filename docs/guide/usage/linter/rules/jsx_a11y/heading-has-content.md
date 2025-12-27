---
url: /docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.md
---
# jsx\_a11y/heading-has-content&#x20;

### What it does

Enforce that heading elements (h1, h2, etc.) have content and
that the content is accessible to screen readers.
Accessible means that it is not hidden using the aria-hidden prop.

### Why is this bad?

Screen readers alert users to the presence of a heading tag.
If the heading is empty or the text cannot be accessed,
this could either confuse users or even prevent them
from accessing information on the page's structure.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<h1 />
```

Examples of **correct** code for this rule:

```jsx
<h1>Foo</h1>
```

## Configuration

This rule accepts a configuration object with the following properties:

### components

type: `string[]`

default: `null`

Additional custom component names to treat as heading elements.
These will be validated in addition to the standard h1-h6 elements.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/heading-has-content": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/heading-has-content --jsx-a11y-plugin
```

:::

## References

* Rule Source
