---
url: /docs/guide/usage/linter/rules/eslint/func-style.md
---

### What it does

Enforce the consistent use of either function declarations or expressions assigned to variables.

### Why is this bad?

This rule enforces a particular type of function style, either function declarations or expressions assigned to variables.
You can specify which you prefer in the configuration.

### Examples

```js
// function declaration
function doSomething() {
  // ...
}

// arrow function expression assigned to a variable
const doSomethingElse = () => {
  // ...
};

// function expression assigned to a variable
const doSomethingAgain = function () {
  // ...
};
```

Examples of **incorrect** code for this rule with the default `"expression"` option:

```js
/* func-style: ["error", "expression"] */

function foo() {
  // ...
}
```

Examples of **incorrect** code for this rule with the `"declaration"` option:

```js
/* func-style: ["error", "declaration"] */
var foo = function () {
  // ...
};

var foo = () => {};
```

Examples of **incorrect** code for this rule with the `"declaration"` and `{"overrides": { "namedExports": "expression" }}` option:

```js
/* func-style: ["error", "declaration", { "overrides": { "namedExports": "expression" } }] */
export function foo() {
  // ...
}
```

Examples of **incorrect** code for this rule with the `"expression"` and `{"overrides": { "namedExports": "declaration" }}` option:

```js
/* func-style: ["error", "expression", { "overrides": { "namedExports": "declaration" } }] */
export var foo = function () {
  // ...
};

export var bar = () => {};
```

Examples of **correct** code for this rule with the default `"expression"` option:

```js
/* func-style: ["error", "expression"] */
var foo = function () {
  // ...
};
```

Examples of **correct** code for this rule with the `"declaration"` option:

```js
/* func-style: ["error", "declaration"] */
function foo() {
  // ...
}
// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function () {
  // ...
};
```

Examples of additional correct code for this rule with the `"declaration"`, `{ "allowArrowFunctions": true }` options:

```js
/* func-style: ["error", "declaration", { "allowArrowFunctions": true }] */
var foo = () => {};
```

Examples of **correct** code for this rule with the `"declaration"` and `{"overrides": { "namedExports": "expression" }}` option:

```js
/* func-style: ["error", "declaration", { "overrides": { "namedExports": "expression" } }] */
export var foo = function () {
  // ...
};
export var bar = () => {};
```

Examples of **correct** code for this rule with the `"expression"` and `{"overrides": { "namedExports": "declaration" }}` option:

```js
/* func-style: ["error", "expression", { "overrides": { "namedExports": "declaration" } }] */
export function foo() {
  // ...
}
```

Examples of **correct** code for this rule with the `{"overrides": { "namedExports": "ignore" }}` option:

```js
/* func-style: ["error", "expression", { "overrides": { "namedExports": "ignore" } }] */
export var foo = function () {
  // ...
};

export var bar = () => {};
export function baz() {
  // ...
}
```

## Configuration

### The 1st option

type: `"expression" | "declaration"`

### The 2nd option

This option is an object with the following properties:

#### allowArrowFunctions

type: `boolean`

default: `false`

When true, arrow functions are allowed regardless of the style setting.

#### allowTypeAnnotation

type: `boolean`

default: `false`

When true, functions with type annotations are allowed regardless of the style setting.

#### overrides

type: `object`

##### overrides.namedExports

type: `"ignore" | "expression" | "declaration"`

default: `null`

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "func-style": "error"
  }
}
```

```bash [CLI]
oxlint --deny func-style
```

:::

## References

* Rule Source
