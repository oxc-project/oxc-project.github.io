# FAQ

## Top level variables are removed

Top level variables are removed when the source type is `module`. This is because top level variables in module code are not accessible from other modules. Contrary to that, top level variables in script code are treated as global variables and are accessible from other scripts. If you expect the top level variables to be kept, you should not use a `.mjs` filename nor enable `module` option.

## New lines in strings are not removed

It may be surprising that new lines in strings are not removed and replaced with `\n` in minified code. This behavior is because the character escape sequences `\n` is two bytes long while the new line character is one byte long.

```js
// this code is 16 bytes
const foo = "a\nb";

// this code is 15 bytes
const foo = `a
b`;
```
