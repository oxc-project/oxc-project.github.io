---
url: /docs/guide/usage/linter/rules/jsdoc/require-property-name.md
---

### What it does

Requires that all `@property` tags have names.

### Why is this bad?

The name of a property type should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/**
 * @typedef {SomeType} SomeTypedef
 * @property {number}
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
    "jsdoc/require-property-name": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-property-name --jsdoc-plugin
```

:::

## References

* Rule Source
