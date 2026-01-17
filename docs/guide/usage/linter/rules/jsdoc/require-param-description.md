---
url: /docs/guide/usage/linter/rules/jsdoc/require-param-description.md
---

### What it does

Requires that each `@param` tag has a description value.

### Why is this bad?

The description of a param should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @param foo */
function quux(foo) {}
```

Examples of **correct** code for this rule:

```javascript
/** @param foo Foo. */
function quux(foo) {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-param-description": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-param-description --jsdoc-plugin
```

:::

## References

* Rule Source
