---
url: /docs/guide/usage/linter/rules/jsdoc/require-returns.md
---
# jsdoc/require-returns&#x20;

### What it does

Requires that return statements are documented.
Will also report if multiple `@returns` tags are present.

### Why is this bad?

The rule is intended to prevent the omission of `@returns` tag when necessary.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** Foo. */
function quux() {
  return foo;
}

/**
 * @returns Foo!
 * @returns Foo?
 */
function quux() {
  return foo;
}
```

Examples of **correct** code for this rule:

```javascript
/** @returns Foo. */
function quux() {
  return foo;
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkConstructors

type: `boolean`

default: `false`

Whether to check constructor methods.

### checkGetters

type: `boolean`

default: `true`

Whether to check getter methods.

### exemptedBy

type: `string[]`

default: `["inheritdoc"]`

Tags that exempt functions from requiring `@returns`.

### forceRequireReturn

type: `boolean`

default: `false`

Whether to require a `@returns` tag even if the function doesn't return a value.

### forceReturnsWithAsync

type: `boolean`

default: `false`

Whether to require a `@returns` tag for async functions.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-returns": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-returns --jsdoc-plugin
```

:::

## References

* Rule Source
