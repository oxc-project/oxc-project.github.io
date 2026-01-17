---
url: /docs/guide/usage/linter/rules/eslint/no-array-constructor.md
---

### What it does

Disallows creating arrays with the `Array` constructor.

### Why is this bad?

Use of the `Array` constructor to construct a new array is generally
discouraged in favor of array literal notation because of the
single-argument pitfall and because the `Array` global may be redefined.
The exception is when the `Array` constructor is used to intentionally
create sparse arrays of a specified size by giving the constructor a
single numeric argument.

### Examples

Examples of **incorrect** code for this rule:

```javascript
let arr = new Array();
```

Examples of **correct** code for this rule:

```javascript
let arr = [];
let arr2 = Array.from(iterable);
let arr3 = new Array(9);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-array-constructor": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-array-constructor
```

:::

## References

* Rule Source
