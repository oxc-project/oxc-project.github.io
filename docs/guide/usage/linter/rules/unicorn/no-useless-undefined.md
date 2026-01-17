---
url: /docs/guide/usage/linter/rules/unicorn/no-useless-undefined.md
---

### What it does

Do not use useless `undefined`.

### Why is this bad?

`undefined` is the default value for new variables, parameters, return statements, etc… so specifying it doesn't make any difference.

### Examples

Examples of **incorrect** code for this rule:

```javascript
let foo = undefined;
```

Examples of **correct** code for this rule:

```javascript
let foo;
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkArguments

type: `boolean`

default: `true`

Whether to check for useless `undefined` in function call arguments.

### checkArrowFunctionBody

type: `boolean`

default: `true`

Whether to check for useless `undefined` in arrow function bodies.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-undefined": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-useless-undefined
```

:::

## References

* Rule Source
