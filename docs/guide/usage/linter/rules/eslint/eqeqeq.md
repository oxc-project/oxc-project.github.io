---
url: /docs/guide/usage/linter/rules/eslint/eqeqeq.md
---
# eslint/eqeqeq&#x20;

### What it does

Requires the use of the `===` and `!==` operators, disallowing the use of `==` and `!=`.

### Why is this bad?

Using non-strict equality operators leads to unexpected behavior due to type coercion, which can cause hard-to-find bugs.

### Options

First option:

* Type: `string`
* Default: `"always"`

Possible values:

* `"always"` - always require `===`/`!==`
* `"smart"` - allow safe comparisons (`typeof`, literals, nullish)

Second option (only used with `"always"`):

* Type: `object`
* Properties:
  * `null`: `string` (default: `"always"`) - `"ignore"` allows `== null` and `!= null`.

Possible values for `null`:

* `"always"` - always require `=== null`/`!== null`
* `"never"` - always require `== null`/`!= null`
* `"ignore"` - allow both `== null`/`!= null` and `=== null`/`!== null`

Example JSON configuration:

```json
{
  "eqeqeq": ["error", "always", { "null": "ignore" }]
}
```

### Examples

#### `"always"` (default)

Examples of **incorrect** code for this rule:

```js
/* eslint eqeqeq: "error" */

if (x == 42) {
}
if ("" == text) {
}
if (obj.getStuff() != undefined) {
}
```

Examples of **correct** code for this rule:

```js
/* eslint eqeqeq: "error" */

if (x === 42) {
}
if ("" === text) {
}
if (obj.getStuff() !== undefined) {
}
```

#### `"smart"`

Examples of **incorrect** code for this rule with the `"smart"` option:

```js
/* eslint eqeqeq: ["error", "smart"] */

if (x == 42) {
}
if ("" == text) {
}
```

Examples of **correct** code for this rule with the `"smart"` option:

```js
/* eslint eqeqeq: ["error", "smart"] */

if (typeof foo == "undefined") {
}
if (foo == null) {
}
if (foo != null) {
}
```

#### `{"null": "ignore"}` (with `"always"` first option)

Examples of **incorrect** code for this rule with the `{ "null": "ignore" }` option:

```js
/* eslint eqeqeq: ["error", "always", { "null": "ignore" }] */
if (x == 42) {
}
if ("" == text) {
}
```

Examples of **correct** code for this rule with the `{ "null": "ignore" }` option:

```js
/* eslint eqeqeq: ["error", "always", { "null": "ignore" }] */
if (foo == null) {
}
if (foo != null) {
}
```

#### `{"null": "always"}` (default - with `"always"` first option)

Examples of **incorrect** code for this rule with the `{ "null": "always" }` option:

```js
/* eslint eqeqeq: ["error", "always", { "null": "always" }] */

if (foo == null) {
}
if (foo != null) {
}
```

Examples of **correct** code for this rule with the `{ "null": "always" }` option:

```js
/* eslint eqeqeq: ["error", "always", { "null": "always" }] */

if (foo === null) {
}
if (foo !== null) {
}
```

#### `{"null": "never"}` (with `"always"` first option)

Examples of **incorrect** code for this rule with the `{ "null": "never" }` option:

```js
/* eslint eqeqeq: ["error", "always", { "null": "never" }] */

if (x == 42) {
}
if ("" == text) {
}
if (foo === null) {
}
if (foo !== null) {
}
```

Examples of **correct** code for this rule with the `{ "null": "never" }` option:

```js
/* eslint eqeqeq: ["error", "always", { "null": "never" }] */

if (x === 42) {
}
if ("" === text) {
}
if (foo == null) {
}
if (foo != null) {
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### compareType

type: `"always" | "smart"`

### nullType

type: `"always" | "never" | "ignore"`

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "eqeqeq": "error"
  }
}
```

```bash [CLI]
oxlint --deny eqeqeq
```

:::

## References

* Rule Source
