---
url: /docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.md
---
# unicorn/no-unnecessary-array-splice-count&#x20;

### What it does

Disallows passing `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#splice()` or `Array#toSpliced()`.

### Why is this bad?

When calling `Array#splice(start, deleteCount)` or `Array#toSpliced(start, skipCount)`,
omitting the `deleteCount` or `skipCount` argument will delete or skip all elements after `start`.
Using `.length` or `Infinity` is unnecessary and makes the code more verbose.

### Examples

Examples of **incorrect** code for this rule:

```js
array.splice(1, array.length);
array.splice(1, Infinity);
array.splice(1, Number.POSITIVE_INFINITY);
array.toSpliced(1, array.length);
```

Examples of **correct** code for this rule:

```js
array.splice(1);
array.toSpliced(1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-unnecessary-array-splice-count": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-unnecessary-array-splice-count
```

:::

## References

* Rule Source
