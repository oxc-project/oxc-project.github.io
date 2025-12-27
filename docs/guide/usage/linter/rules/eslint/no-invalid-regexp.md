---
url: /docs/guide/usage/linter/rules/eslint/no-invalid-regexp.md
---
# eslint/no-invalid-regexp&#x20;

### What it does

Disallow invalid regular expression strings in RegExp constructors.

### Why is this bad?

An invalid pattern in a regular expression literal is a SyntaxError when the code is parsed,
but an invalid string in RegExp constructors throws a SyntaxError only when the code is executed.

### Examples

Examples of **incorrect** code for this rule:

```js
RegExp("[");
RegExp(".", "z");
new RegExp("\\");
```

Examples of **correct** code for this rule:

```js
RegExp(".");
new RegExp();
this.RegExp("[");
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowConstructorFlags

type: `string[]`

default: `[]`

Case-sensitive array of flags that will be allowed.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-invalid-regexp": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-invalid-regexp
```

:::

## References

* Rule Source
