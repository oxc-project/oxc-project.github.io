---
url: /docs/guide/usage/linter/rules/jsx_a11y/img-redundant-alt.md
---

### What it does

Enforce that `img` alt attributes do not contain redundant words like
"image", "picture", or "photo".

### Why is this bad?

Screen readers already announce `img` elements as an image, so there is
no need to use words such as "image", "photo", or "picture" in the alt
text. This creates redundant information for users of assistive
technologies and makes the alt text less concise and useful.

### Examples

Examples of **incorrect** code for this rule:

```jsx
<img src="foo" alt="Photo of foo being weird." />
<img src="bar" alt="Image of me at a bar!" />
<img src="baz" alt="Picture of baz fixing a bug." />
```

Examples of **correct** code for this rule:

```jsx
<img src="foo" alt="Foo eating a sandwich." />
<img src="bar" aria-hidden alt="Picture of me taking a photo of an image" /> // Will pass because it is hidden.
<img src="baz" alt={`Baz taking a ${photo}`} /> // This is valid since photo is a variable name.
```

## Configuration

This rule accepts a configuration object with the following properties:

### components

type: `string[]`

default: `["img"]`

JSX element types to validate (component names) where the rule applies.
For example, `["img", "Image"]`.

### words

type: `string[]`

default: `["image", "photo", "picture"]`

Words considered redundant in alt text that should trigger a warning.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/img-redundant-alt": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsx-a11y/img-redundant-alt --jsx-a11y-plugin
```

:::

## References

* Rule Source
