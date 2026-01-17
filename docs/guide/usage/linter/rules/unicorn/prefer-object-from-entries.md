---
url: /docs/guide/usage/linter/rules/unicorn/prefer-object-from-entries.md
---

### What it does

Encourages using `Object.fromEntries` when converting an array of key-value pairs
into an object.

### Why is this bad?

Manually constructing objects from key-value pairs using `reduce` or `forEach`
is more verbose, error-prone, and harder to understand. The `Object.fromEntries`
method is clearer, more declarative, and built for exactly this purpose.

### Examples

Examples of **incorrect** code for this rule:

```js
const result = pairs.reduce((obj, [key, value]) => {
  obj[key] = value;
  return obj;
}, {});

const result = {};
pairs.forEach(([key, value]) => {
  result[key] = value;
});
```

Examples of **correct** code for this rule:

```js
const result = Object.fromEntries(pairs);
```

## Configuration

This rule accepts a configuration object with the following properties:

### functions

type: `string[]`

default: `["_.fromPairs", "lodash.fromPairs"]`

Additional functions to treat as equivalents to `Object.fromEntries`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-object-from-entries": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-object-from-entries
```

:::

## References

* Rule Source
