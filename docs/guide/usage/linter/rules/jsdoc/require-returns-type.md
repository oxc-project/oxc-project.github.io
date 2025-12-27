---
url: /docs/guide/usage/linter/rules/jsdoc/require-returns-type.md
---
# jsdoc/require-returns-type&#x20;

### What it does

Requires that `@returns` tag has a type value (in curly brackets).

### Why is this bad?

A `@returns` tag should have a type value.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @returns */
function quux(foo) {}
```

Examples of **correct** code for this rule:

```javascript
/** @returns {string} */
function quux(foo) {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-returns-type": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-returns-type --jsdoc-plugin
```

:::

## References

* Rule Source
