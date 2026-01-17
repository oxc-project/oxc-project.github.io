---
url: /docs/guide/usage/linter/rules/react/no-unknown-property.md
---

### What it does

Disallow usage of unknown DOM properties.

### Why is this bad?

You can use unknown property name that has no effect.

### Examples

Examples of **incorrect** code for this rule:

```jsx
// Unknown properties
const Hello = <div class="hello">Hello World</div>;
const Alphabet = <div abc="something">Alphabet</div>;

// Invalid aria-* attribute
const IconButton = <div aria-foo="bar" />;
```

Examples of **correct** code for this rule:

```jsx
// Unknown properties
const Hello = <div className="hello">Hello World</div>;
const Alphabet = <div>Alphabet</div>;

// Invalid aria-* attribute
const IconButton = <div aria-label="bar" />;
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignore

type: `string[]`

default: `[]`

List of properties to ignore.

### requireDataLowercase

type: `boolean`

default: `false`

Require `data-*` attributes to be lowercase, e.g. `data-foobar` instead of `data-fooBar`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["react"],
  "rules": {
    "react/no-unknown-property": "error"
  }
}
```

```bash [CLI]
oxlint --deny react/no-unknown-property --react-plugin
```

:::

## References

* Rule Source
