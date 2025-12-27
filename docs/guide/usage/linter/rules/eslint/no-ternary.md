---
url: /docs/guide/usage/linter/rules/eslint/no-ternary.md
---
# eslint/no-ternary&#x20;

### What it does

Disallow ternary operators

### Why is this bad?

The ternary operator is used to conditionally assign a value to a
variable. Some believe that the use of ternary operators leads to
unclear code.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = isBar ? baz : qux;
```

```javascript
function quux() {
  return foo ? bar() : baz();
}
```

Examples of **correct** code for this rule:

```javascript
let foo;

if (isBar) {
  foo = baz;
} else {
  foo = qux;
}
```

```javascript
function quux() {
  if (foo) {
    return bar();
  } else {
    return baz();
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-ternary": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-ternary
```

:::

## References

* Rule Source
