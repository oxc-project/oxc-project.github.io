# Global Variable Replacement

Oxc transformer supports replacing global variables.

## Define

"Define" feature provides a way to replace global variables with constant expressions. This feature is similar to [esbuild's `define` option](https://esbuild.github.io/api/#define).

```js
// input
const foo = __DEV__ ? 1 : 2;

// output
const foo = 1;
```

```js
// Example
import { transform } from "oxc-transform";

const result = transform("lib.js", sourceCode, {
  define: {
    __DEV__: "true",
  },
});
```

<!-- TODO: describe what value can come for the value of each property -->

::: tip The object reference are not shared

Differently from esbuild, when passing an object to the value of the `define` option, the object reference is not shared. This means that if you change the object, the changes will not be reflected in the other places.

```js
const foo = __OBJECT__;
foo.bar = 1;
console.log(foo.bar); // 1

const bar = __OBJECT__;
console.log(foo.bar); // undefined
```

```js
// Example
import { transform } from "oxc-transform";

const result = transform("lib.js", sourceCode, {
  define: {
    __OBJECT__: "{}",
  },
});
```

:::

## Inject

"Inject" feature provides a way to replace global variables with an import from a module. This feature is similar to [esbuild's `inject` option](https://esbuild.github.io/api/#inject) and [`@rollup/plugin-inject`](https://github.com/rollup/plugins/tree/master/packages/inject).

```js
// input
const foo = new Promise((resolve) => resolve(1));

// output
import { Promise as P } from "es6-promise";
const foo = new P((resolve) => resolve(1));
```

```js
// Example
import { transform } from "oxc-transform";

const result = transform("lib.js", sourceCode, {
  inject: {
    P: ["es6-promise", "Promise"],
  },
});
```

<!-- TODO: describe more about what value the option takes -->
