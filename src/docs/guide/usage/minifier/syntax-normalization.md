# Syntax Normalization

Oxc minifier supports transforming syntaxes to make the output shorter and repetitive.

This feature is enabled by default and can be disabled by setting the `compress` option to `false`.

## Target

Oxc minifier uses some syntaxes that are only supported in newer environments. You can specify the target environment by setting the `target` option. The default value is `esnext`, which allows the use of any syntaxes that are supported by the latest ECMAScript standard. The supported value is same as [the `target` option in the transformer](/docs/guide/usage/transformer/lowering#target).

```js
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    target: "chrome87",
  },
});
```

## Join Variables

By default, consecutive variable declarations are merged into a single declaration. You can disable this behavior by setting the `compress.joinVars` option to `false`.

```js
// input
var foo = 1;
var bar = 2;

// output
var foo = 1;
var bar = 2;
```

```js
// Example
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    joinVars: false,
  },
});
```

## Sequences

By default, consecutive statements are merged into a single statement using the comma operator. You can disable this behavior by setting the `compress.sequences` option to `false`.

```js
// input
foo();
bar();

// output
foo();
bar();
```

```js
// Example
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    sequences: false,
  },
});
```
