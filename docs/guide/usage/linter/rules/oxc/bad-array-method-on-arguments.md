---
url: /docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.md
---
# oxc/bad-array-method-on-arguments&#x20;

### What it does

This rule applies when an array method is called on the arguments object itself.

### Why is this bad?

The [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
is not an array, but an array-like object. It should be converted to a real array before calling an array method.
Otherwise, a TypeError exception will be thrown because of the non-existent method.

Note that you probably don't need this rule if you are using exclusively
TypeScript, as it will catch these errors when typechecking.

`arguments` usage is usually discouraged in modern JavaScript, and you should prefer using
rest parameters instead, e.g. `function sum(...args)`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function add(x, y) {
  return x + y;
}
function sum() {
  return arguments.reduce(add, 0);
}
```

Examples of **correct** code for this rule:

```javascript
function add(x, y) {
  return x + y;
}

function sum(...args) {
  return args.reduce(add, 0);
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-array-method-on-arguments": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/bad-array-method-on-arguments
```

:::

## References

* Rule Source
