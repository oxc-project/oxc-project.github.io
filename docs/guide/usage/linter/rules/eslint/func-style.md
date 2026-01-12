---
url: /docs/guide/usage/linter/rules/eslint/func-style.md
---
# eslint/func-style&#x20;

### What it does

Enforce the consistent use of either function declarations or expressions assigned to variables

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

Examples of incorrect code for this rule with the default "expression" option:

```js
/*eslint func-style: ["error", "expression"]*/

function foo() {
  // ...
}
```

Examples of incorrect code for this rule with the "declaration" option:

```js
/*eslint func-style: ["error", "declaration"]*/
var foo = function () {
  // ...
};

var foo = () => {};
```

Examples of incorrect code for this rule with the "declaration" and {"overrides": { "namedExports": "expression" }} option:

```js
/*eslint func-style: ["error", "declaration", { "overrides": { "namedExports": "expression" } }]*/
export function foo() {
  // ...
}
```

Examples of incorrect code for this rule with the "expression" and {"overrides": { "namedExports": "declaration" }} option:

```js
/*eslint func-style: ["error", "expression", { "overrides": { "namedExports": "declaration" } }]*/
export var foo = function () {
  // ...
};

export var bar = () => {};
```

Examples of correct code for this rule with the default "expression" option:

```js
/*eslint func-style: ["error", "expression"]*/
var foo = function () {
  // ...
};
```

Examples of correct code for this rule with the "declaration" option:

```js
/*eslint func-style: ["error", "declaration"]*/
function foo() {
  // ...
}
// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function () {
  // ...
};
```

Examples of additional correct code for this rule with the "declaration", { "allowArrowFunctions": true } options:

```js
/*eslint func-style: ["error", "declaration", { "allowArrowFunctions": true }]*/
var foo = () => {};
```

Examples of correct code for this rule with the "declaration" and {"overrides": { "namedExports": "expression" }} option:

```js
/*eslint func-style: ["error", "declaration", { "overrides": { "namedExports": "expression" } }]*/
export var foo = function () {
  // ...
};
export var bar = () => {};
```

Examples of correct code for this rule with the "expression" and {"overrides": { "namedExports": "declaration" }} option:

```js
/*eslint func-style: ["error", "expression", { "overrides": { "namedExports": "declaration" } }]*/
export function foo() {
  // ...
}
```

Examples of correct code for this rule with the {"overrides": { "namedExports": "ignore" }} option:

```js
/*eslint func-style: ["error", "expression", { "overrides": { "namedExports": "ignore" } }]*/
export var foo = function () {
  // ...
};

export var bar = () => {};
export function baz() {
  // ...
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowArrowFunctions

type: `boolean`

default: `false`

When true, arrow functions are allowed regardless of the style setting.

### allowTypeAnnotation

type: `boolean`

default: `false`

When true, functions with type annotations are allowed regardless of the style setting.

### namedExports

type: `"ignore" | "expression" | "declaration" | null`

default: `null`

Override the style specifically for named exports. Can be "expression", "declaration", or "ignore" (default).

### style

type: `"expression" | "declaration"`

default: `"expression"`

The style to enforce. Either "expression" (default) or "declaration".

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
