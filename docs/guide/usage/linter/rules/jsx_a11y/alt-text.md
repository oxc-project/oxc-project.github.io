---
url: /docs/guide/usage/linter/rules/jsx_a11y/alt-text.md
---
# jsx\_a11y/alt-text&#x20;

### What it does

Enforce that all elements that require alternative text have meaningful
information to relay back to the end user.

### Why is this bad?

Alternative text is a critical component of accessibility for screen
reader users, enabling them to understand the content and function of
an element. Missing or inadequate alt text makes content inaccessible
to users who rely on assistive technologies.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<img src="flower.jpg" />
<img src="flower.jpg" alt="" />
<object />
<area />
```

Examples of **correct** code for this rule:

```jsx
<img src="flower.jpg" alt="A close-up of a white daisy" />
<img src="decorative.jpg" alt="" role="presentation" />
<object aria-label="Interactive chart" />
<area alt="Navigation link" />
```

## Configuration

This rule accepts a configuration object with the following properties:

### area

type: `string[]`

default: `[]`

Custom components to check for alt text on `area` elements.

### img

type: `string[]`

default: `[]`

Custom components to check for alt text on `img` elements.

### input\[type="image"]

type: `string[]`

default: `[]`

Custom components to check for alt text on `input[type="image"]` elements.

### object

type: `string[]`

default: `[]`

Custom components to check for alt text on `object` elements.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/alt-text": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/alt-text --jsx-a11y-plugin
```

:::

## References

* Rule Source
