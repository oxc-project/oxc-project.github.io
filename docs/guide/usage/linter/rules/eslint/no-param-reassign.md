---
url: /docs/guide/usage/linter/rules/eslint/no-param-reassign.md
---
# eslint/no-param-reassign&#x20;

### What it does

Disallow reassigning function parameters or, optionally, their properties.

### Why is this bad?

Reassigning parameters can lead to unexpected behavior, especially when relying on the
original arguments passed into the function. Mutating parameter properties can be similarly
surprising and harder to reason about.

### Examples

```javascript
function foo(bar) {
  bar = 1;
}

function baz(qux) {
  qux.prop = 2; // when `props` option is enabled
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignorePropertyModificationsFor

type: `string[]`

default: `[]`

An array of parameter names whose property modifications should be ignored.

### ignorePropertyModificationsForRegex

type: `string[]`

An array of regex patterns (as strings) for parameter names whose property modifications should be ignored.
Note that this uses [Rust regex syntax](https://docs.rs/regex/latest/regex/) and so may not have all features
available to JavaScript regexes.

### props

type: `boolean`

default: `false`

When true, also check for modifications to properties of parameters.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-param-reassign": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-param-reassign
```

:::

## References

* Rule Source
