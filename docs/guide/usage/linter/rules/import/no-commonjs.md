---
url: /docs/guide/usage/linter/rules/import/no-commonjs.md
---

### What it does

Forbids the use of CommonJS `require` calls. Also forbids `module.exports` and `exports.*`.

### Why is this bad?

ESM modules or Typescript uses `import` and `export` syntax instead of CommonJS syntax.
This rule enforces the use of more modern module systems to improve maintainability and consistency across the codebase.

### Examples

Examples of **incorrect** code for this rule:

```js
var mod = require("fs");

var exports = (module.exports = {});

exports.sayHello = function () {
  return "Hello";
};

module.exports = "Hola";
```

Examples of **correct** code for this rule:

```js
var a = b && require("c");

if (typeof window !== "undefined") {
  require("somelib");
}

var fs = null;
try {
  fs = require("fs");
} catch (error) {}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowConditionalRequire

type: `boolean`

default: `true`

When set to `true`, allows conditional `require()` calls (e.g., inside `if` statements or try-catch blocks).
This is useful for places where you need to conditionally load via commonjs requires if ESM imports are not supported.

### allowPrimitiveModules

type: `boolean`

default: `false`

If `allowPrimitiveModules` option is set to true, the following is valid:

```js
module.exports = "foo";
module.exports = function rule(context) {
  return {
    /* ... */
  };
};
```

but this is still reported:

```js
module.exports = { x: "y" };
exports.z = function bark() {
  /* ... */
};
```

### allowRequire

type: `boolean`

default: `false`

If set to `true`, `require` calls are valid:

```js
var mod = require("./mod");
```

but `module.exports` is reported as usual.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-commonjs": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/no-commonjs --import-plugin
```

:::

## References

* Rule Source
