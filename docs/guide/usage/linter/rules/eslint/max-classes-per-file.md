---
url: /docs/guide/usage/linter/rules/eslint/max-classes-per-file.md
---
# eslint/max-classes-per-file&#x20;

### What it does

Enforce a maximum number of classes per file

### Why is this bad?

Files containing multiple classes can often result in a less navigable and poorly
structured codebase. Best practice is to keep each file limited to a single responsibility.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class Foo {}
class Bar {}
```

Examples of **correct** code for this rule:

```js
function foo() {
  var bar = 1;
  let baz = 2;
  const qux = 3;
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignoreExpressions

type: `boolean`

default: `false`

Whether to ignore class expressions when counting classes.

### max

type: `integer`

default: `1`

The maximum number of classes allowed per file.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "max-classes-per-file": "error"
  }
}
```

```bash [CLI]
oxlint --deny max-classes-per-file
```

:::

## References

* Rule Source
