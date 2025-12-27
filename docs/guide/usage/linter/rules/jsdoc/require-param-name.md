---
url: /docs/guide/usage/linter/rules/jsdoc/require-param-name.md
---
# jsdoc/require-param-name&#x20;

### What it does

Requires that all `@param` tags have names.

### Why is this bad?

The name of a param should be documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @param {SomeType} */
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
    "jsdoc/require-param-name": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-param-name --jsdoc-plugin
```

:::

## References

* Rule Source
