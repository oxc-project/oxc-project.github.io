---
url: /docs/guide/usage/linter/rules/jsdoc/check-property-names.md
---
# jsdoc/check-property-names&#x20;

### What it does

Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.

### Why is this bad?

`@property` tags with the same name can be confusing and may indicate a mistake.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/**
 * @typedef {object} state
 * @property {number} foo
 * @property {string} foo
 */

/**
 * @typedef {object} state
 * @property {number} foo.bar
 */
```

Examples of **correct** code for this rule:

```javascript
/**
 * @typedef {object} state
 * @property {number} foo
 */

/**
 * @typedef {object} state
 * @property {object} foo
 * @property {number} foo.bar
 */
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/check-property-names": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/check-property-names --jsdoc-plugin
```

:::

## References

* Rule Source
