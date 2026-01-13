---
url: /docs/guide/usage/formatter/ignore-comments.md
---
# Inline ignore comments

Use `oxfmt-ignore` to skip formatting the next statement:

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
Prettier's trailing ignore comments are not supported for performance reasons.
:::

For non-JS files, see Prettier's [ignore documentation](https://prettier.io/docs/ignore#html).

TOML files do not support ignore comments.

## Prettier compatibility

`prettier-ignore` is also supported.
