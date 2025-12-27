---
url: /docs/guide/usage/linter/rules/jsdoc/require-returns-description.md
---
# jsdoc/require-returns-description&#x20;

### What it does

Requires that the `@returns` tag has a description value.
The error will not be reported if the return value is `void `or `undefined` or if it is `Promise<void>` or `Promise<undefined>`.

### Why is this bad?

A `@returns` tag should have a description value.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @returns */
function quux(foo) {}
```

Examples of **correct** code for this rule:

```javascript
/** @returns Foo. */
function quux(foo) {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-returns-description": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/require-returns-description --jsdoc-plugin
```

:::

## References

* Rule Source
