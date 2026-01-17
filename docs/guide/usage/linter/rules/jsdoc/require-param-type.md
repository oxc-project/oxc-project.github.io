---
url: /docs/guide/usage/linter/rules/jsdoc/require-param-type.md
---

### What it does

Requires that each `@param` tag has a type value (within curly brackets).

### Why is this bad?

The type of a parameter should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @param foo */
function quux(foo) {}
```

Examples of **correct** code for this rule:

```javascript
/** @param {SomeType} foo */
function quux(foo) {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-param-type": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-param-type --jsdoc-plugin
```

:::

## References

* Rule Source
