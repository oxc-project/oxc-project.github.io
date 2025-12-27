---
url: /docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.md
---
# unicorn/prefer-structured-clone&#x20;

### What it does

Prefer using structuredClone to create a deep clone.

### Why is this bad?

structuredClone is the modern way to create a deep clone of a value.

### Examples

Examples of **incorrect** code for this rule:

```js
const clone = JSON.parse(JSON.stringify(foo));

const clone = _.cloneDeep(foo);
```

Examples of **correct** code for this rule:

```js
const clone = structuredClone(foo);
```

## Configuration

This rule accepts a configuration object with the following properties:

### functions

type: `string[]`

default: `["cloneDeep", "utils.clone"]`

List of functions that are allowed to be used for deep cloning instead of structuredClone.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-structured-clone": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-structured-clone
```

:::

## References

* Rule Source
