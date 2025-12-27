---
url: /docs/guide/usage/linter/rules/jsdoc/require-yields.md
---
# jsdoc/require-yields&#x20;

### What it does

Requires that yields are documented.
Will also report if multiple `@yields` tags are present.

### Why is this bad?

The rule is intended to prevent the omission of `@yields` tags when they are necessary.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function* quux(foo) {
  yield foo;
}

/**
 * @yields {undefined}
 * @yields {void}
 */
function* quux(foo) {}
```

Examples of **correct** code for this rule:

```javascript
/** * @yields Foo */
function* quux(foo) {
  yield foo;
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### exemptedBy

type: `string[]`

default: `["inheritdoc"]`

Functions with these tags will be exempted from the lint rule.

### forceRequireYields

type: `boolean`

default: `false`

When `true`, all generator functions must have a `@yields` tag, even if they don't yield a value or have an empty body.

### withGeneratorTag

type: `boolean`

default: `false`

When `true`, require `@yields` when a `@generator` tag is present.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-yields": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-yields --jsdoc-plugin
```

:::

## References

* Rule Source
