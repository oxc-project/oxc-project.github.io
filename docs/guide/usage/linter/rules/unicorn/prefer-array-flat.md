---
url: /docs/guide/usage/linter/rules/unicorn/prefer-array-flat.md
---

### What it does

Prefers `Array#flat()` over legacy techniques to flatten arrays.

### Why is this bad?

ES2019 introduced a new method [`Array#flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) that flatten arrays.

This rule aims to standardize the use of `Array#flat()` over legacy techniques to flatten arrays.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = array.flatMap((x) => x);
const foo = array.reduce((a, b) => a.concat(b), []);
const foo = array.reduce((a, b) => [...a, ...b], []);
const foo = [].concat(maybeArray);
const foo = [].concat(...array);
const foo = [].concat.apply([], array);
const foo = Array.prototype.concat.apply([], array);
const foo = Array.prototype.concat.call([], maybeArray);
const foo = Array.prototype.concat.call([], ...array);
```

Examples of **correct** code for this rule:

```javascript
const foo = array.flat();
const foo = [maybeArray].flat();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-array-flat": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-array-flat
```

:::

## References

* Rule Source
