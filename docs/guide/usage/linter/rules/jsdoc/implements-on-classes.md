---
url: /docs/guide/usage/linter/rules/jsdoc/implements-on-classes.md
---

### What it does

Reports an issue with any non-constructor function using `@implements`.

### Why is this bad?

Constructor functions should be
whether marked with `@class`, `@constructs`, or being a class constructor.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/**
 * @implements {SomeClass}
 */
function quux() {}
```

Examples of **correct** code for this rule:

```javascript
class Foo {
  /**
   * @implements {SomeClass}
   */
  constructor() {}
}
/**
 * @implements {SomeClass}
 * @class
 */
function quux() {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/implements-on-classes": "error"
  }
}
```

```bash [CLI]
oxlint --deny jsdoc/implements-on-classes --jsdoc-plugin
```

:::

## References

* Rule Source
