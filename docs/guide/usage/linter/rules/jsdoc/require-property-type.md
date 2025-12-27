---
url: /docs/guide/usage/linter/rules/jsdoc/require-property-type.md
---
# jsdoc/require-property-type&#x20;

### What it does

Requires that each `@property` tag has a type value (within curly brackets).

### Why is this bad?

The type of a property should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/**
 * @typedef {SomeType} SomeTypedef
 * @property foo
 */
```

Examples of **correct** code for this rule:

```javascript
/**
 * @typedef {SomeType} SomeTypedef
 * @property {number} foo
 */
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-property-type": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-property-type --jsdoc-plugin
```

:::

## References

* Rule Source
