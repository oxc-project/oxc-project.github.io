# Dead Code Elimination

Oxc minifier supports eliminating dead code. For example, it removes the statements inside a `if (false)` block and the unused private class fields.

This feature is always enabled, but you can remove more code by enabling some options.

::: tip Useful features in the transformer

Other than the options below, you can also use [the `define` feature in the transformer](/docs/guide/usage/transformer/global-variable-replacement#define) to replace global identifiers with constant expressions to remove more dead code.

:::

## Drop Console

You can remove all `console.*` calls by enabling the `dropConsole` option. This option behaves similar to [Terser](https://terser.org/)'s `drop_console` option and [esbuild's `drop: ['console']` option](https://esbuild.github.io/api/#drop).

```js
// input
const bar = window.bar();
console.log("foo", bar, baz());

// output
const bar = window.bar();
```

```js
// Example
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    dropConsole: true,
  },
});
```

::: warning The whole call expression is removed

Note that this option removes the whole call expression including the arguments. This is intentional because removing the evaluation of call arguments is useful for improving the runtime performance if those are expensive to compute. However, if any of those arguments have side effects, this transformation will change the behavior of your code.

<!-- TODO: suggest pure functions option when exposed -->

:::

## Drop Debugger

You can remove all `debugger` statements by enabling the `dropDebugger` option. This option is enabled by default. This option behaves similar to [Terser](https://terser.org/)'s `drop_debugger` option and [esbuild's `drop: ['debugger']` option](https://esbuild.github.io/api/#drop).

```js
// input
debugger;

// output
```

```js
// Example
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    dropDebugger: true,
  },
});
```

## Drop Labels

You can remove all labeled statements with specified labels by enabling the `dropLabels` option. This option behaves similar to [esbuild's `dropLabels` option](https://esbuild.github.io/api/#drop-labels).

```js
// input
DEV: console.log("foo");
console.log("bar");

// output
console.log("bar");
```

```js
// Example
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    dropLabels: ["DEV"],
  },
});
```

## Unused Declarations

All unused function / class / variable declarations are removed by default. You can keep them by using the `unused` option.

```js
// input
{
  function foo() {}
}

// output
```

```js
// Example
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    unused: true, // or "keep_assign"
  },
});
```

## Keep `name` Property Values

By default, Oxc minifier assumes that your code does not rely on the `name` property of functions / classes. This is because the `name` property is inferred from the function / class name or the variable name and keeping the original name would prevent reducing the output size.

To keep the `name` property values, you can use the `keepNames` option.

```js
// input
var bar = function foo() {};

// output
var bar = function foo() {};
```

```js
// Example
import { minify } from "oxc-minify";

const result = minify("lib.js", code, {
  compress: {
    keepNames: true, // shorthand of { function: true, class: true }
  },
});
```

::: tip `mangle.keepNames` option

If you are using the mangling feature, you may also want to enable [the `mangle.keepNames` option](./mangling#keep-name-property-values).

:::
