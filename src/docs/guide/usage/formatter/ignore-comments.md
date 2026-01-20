# Inline ignore comments

For JS/TS files, use `oxfmt-ignore` to skip formatting the next statement:

<!-- prettier-ignore-start -->
```js
// oxfmt-ignore
const a    = 42;

/* oxfmt-ignore */
const x = () => { return 2; };

<>
  {/* oxfmt-ignore */}
  <span   ugly   format=""   />
</>;
```
<!-- prettier-ignore-end -->

For non-JS files, use `prettier-ignore` comment. See also Prettier's [ignore documentation](https://prettier.io/docs/ignore#html).

Currently, TOML files do not support ignore comments.

## Prettier compatibility

- `prettier-ignore` comment is also supported
- Trailing ignore comments in JS/TS files are not supported for performance reasons
