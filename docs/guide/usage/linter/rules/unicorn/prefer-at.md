---
url: /docs/guide/usage/linter/rules/unicorn/prefer-at.md
---

### What it does

Prefer `.at()` method for index access and `String#charAt()`.

### Why is this bad?

The `.at()` method is more readable and consistent for accessing elements by index,
especially for negative indices which access elements from the end.

### Examples

Examples of **incorrect** code for this rule:

```js
const foo = array[array.length - 1];
const foo = array.slice(-1)[0];
const foo = string.charAt(string.length - 1);
```

Examples of **correct** code for this rule:

```js
const foo = array.at(-1);
const foo = array.at(-5);
const foo = string.at(-1);
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkAllIndexAccess

type: `boolean`

default: `false`

Check all index access, not just special patterns like `array.length - 1`.
When enabled, `array[0]`, `array[1]`, etc. will also be flagged.

### getLastElementFunctions

type: `string[]`

default: `[]`

List of function names to treat as "get last element" functions.
These functions will be checked for `.at(-1)` usage.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-at": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-at
```

:::

## References

* Rule Source
