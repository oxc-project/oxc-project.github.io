# Inline ignore comments

For JS/TS files, you can use a `oxfmt-ignore` comment.

This takes effect on the next statement/expression.

```js
// oxfmt-ignore
const a = 42;

/* oxfmt-ignore */
const x = () => {
  return 2;
};

<>
  {/* oxfmt-ignore */}
  <span ugly format="" />
</>;
```

::: warning
(Not documented, but) Prettier supports trailing ignore comment too.
However, we don't support it to avoid a performance hit.
Please update your code in that case.
:::

For non-JS files, the same convention as Prettier works.
Please see Prettier's [documentation](https://prettier.io/docs/ignore#html).

For TOML files, ignore comments are not supported.

## Prettier compatibility

`prettier-ignore` is also supported.
