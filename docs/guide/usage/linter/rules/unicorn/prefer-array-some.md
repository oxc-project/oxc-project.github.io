---
url: /docs/guide/usage/linter/rules/unicorn/prefer-array-some.md
---

### What it does

Prefers using [`Array#some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) over [`Array#find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`Array#findLast()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) with comparing to undefined,
or [`Array#findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`Array#findLastIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
and a non-zero length check on the result of [`Array#filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Why is this bad?

Using `.some()` is more idiomatic and easier to read.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = array.find(fn) ? bar : baz;
const foo = array.findLast((elem) => hasRole(elem)) !== null;
foo.findIndex(bar) < 0;
foo.findIndex((element) => element.bar === 1) !== -1;
foo.findLastIndex((element) => element.bar === 1) !== -1;
array.filter(fn).length === 0;
```

Examples of **correct** code for this rule:

```javascript
const foo = array.some(fn) ? bar : baz;
foo.some((element) => element.bar === 1);
!array.some(fn);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-array-some": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-array-some
```

:::

## References

* Rule Source
