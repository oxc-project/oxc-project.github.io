---
url: /docs/guide/usage/linter/rules/eslint/no-return-assign.md
---
# eslint/no-return-assign&#x20;

### What it does

Disallows assignment operators in return statements.

### Why is this bad?

Assignment is allowed by js in return expressions, but usually, an expression with only one equal sign is intended to be a comparison.
However, because of the missing equal sign, this turns to assignment, which is valid js code
Because of this ambiguity, it’s considered a best practice to not use assignment in return statements.

### Examples

Examples of **incorrect** code for this rule:

```js
() => (a = b);
function x() {
  return (a = b);
}
```

Examples of **correct** code for this rule:

```js
() => (a = b);
function x() {
  var result = (a = b);
  return result;
}
```

## Configuration

This rule accepts one of the following string values:

### `"always"`

Disallow all assignments in return statements.

### `"except-parens"`

Allow assignments in return statements only if they are enclosed in parentheses.
This is the default mode.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-return-assign": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-return-assign
```

:::

## References

* Rule Source
