---
url: /docs/guide/usage/linter/rules/jsdoc/require-property.md
---
# jsdoc/require-property&#x20;

### What it does

Requires that all `@typedef` and `@namespace` tags have `@property` tags
when their type is a plain `object`, `Object`, or `PlainObject`.

Note: this rule can be configured via [jsdoc settings](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#settings) option.

### Why is this bad?

Object type should have properties defined.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/**
 * @typedef {Object} SomeTypedef
 */

/**
 * @namespace {Object} SomeNamesoace
 */
```

Examples of **correct** code for this rule:

```javascript
/**
 * @typedef {Object} SomeTypedef
 * @property {SomeType} propName Prop description
 */

/**
 * @typedef {object} Foo
 * @property someProp
 */
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-property": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-property --jsdoc-plugin
```

:::

## References

* Rule Source
