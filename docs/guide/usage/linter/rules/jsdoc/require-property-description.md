---
url: /docs/guide/usage/linter/rules/jsdoc/require-property-description.md
---

### What it does

Requires that all `@property` tags have descriptions.

### Why is this bad?

The description of a property should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/**
 * @typedef {SomeType} SomeTypedef
 * @property {number} foo
 */
```

Examples of **correct** code for this rule:

```javascript
/**
 * @typedef {SomeType} SomeTypedef
 * @property {number} foo Foo.
 */
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-property-description": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-property-description --jsdoc-plugin
```

:::

## References

* Rule Source
