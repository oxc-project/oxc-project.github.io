---
url: /docs/guide/usage/linter/rules/eslint/eqeqeq.md
---

### What it does

Requires the use of the `===` and `!==` operators, disallowing the use of `==` and `!=`.

### Why is this bad?

Using non-strict equality operators leads to unexpected behavior due to type coercion, which can cause hard-to-find bugs.

### Examples

Example JSON configuration:

```json
{
  "eqeqeq": ["error", "always", { "null": "ignore" }]
}
```

#### `"always"` (default)

Examples of **incorrect** code for this rule:

```js
/* eqeqeq: "error" */

if (x == 42) {
}
if ("" == text) {
}
if (obj.getStuff() != undefined) {
}
```

Examples of **correct** code for this rule:

```js
/* eqeqeq: "error" */

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
/* eqeqeq: ["error", "smart"] */

if (x == 42) {
}
if ("" == text) {
}
```

Examples of **correct** code for this rule with the `"smart"` option:

```js
/* eqeqeq: ["error", "smart"] */

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
/* eqeqeq: ["error", "always", { "null": "ignore" }] */
if (x == 42) {
}
if ("" == text) {
}
```

Examples of **correct** code for this rule with the `{ "null": "ignore" }` option:

```js
/* eqeqeq: ["error", "always", { "null": "ignore" }] */
if (foo == null) {
}
if (foo != null) {
}
```

#### `{"null": "always"}` (default - with `"always"` first option)

Examples of **incorrect** code for this rule with the `{ "null": "always" }` option:

```js
/* eqeqeq: ["error", "always", { "null": "always" }] */

if (foo == null) {
}
if (foo != null) {
}
```

Examples of **correct** code for this rule with the `{ "null": "always" }` option:

```js
/* eqeqeq: ["error", "always", { "null": "always" }] */

if (foo === null) {
}
if (foo !== null) {
}
```

#### `{"null": "never"}` (with `"always"` first option)

Examples of **incorrect** code for this rule with the `{ "null": "never" }` option:

```js
/* eqeqeq: ["error", "always", { "null": "never" }] */

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
/* eqeqeq: ["error", "always", { "null": "never" }] */

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

### The 1st option

type: `"always" | "smart"`

#### `"always"`

Always require triple-equal comparisons, `===`/`!==`.
This is the default.

#### `"smart"`

Allow certain safe comparisons to use `==`/`!=` (`typeof`, literals, nullish).

### The 2nd option

This option is an object with the following properties:

#### null

type: `"always" | "never" | "ignore"`

##### `"always"`

Always require triple-equals when comparing with null, `=== null`/`!== null`.
This is the default.

##### `"never"`

Never require triple-equals when comparing with null, always use `== null`/`!= null`.

##### `"ignore"`

Ignore null comparisons, allow either `== null`/`!= null` or `=== null`/`!== null`.

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
