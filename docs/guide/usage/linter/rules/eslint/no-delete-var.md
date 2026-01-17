---
url: /docs/guide/usage/linter/rules/eslint/no-delete-var.md
---

### What it does

The purpose of the `delete` operator is to remove a property from an
object.

### Why is this bad?

Using the `delete` operator on a variable might lead to unexpected
behavior.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var x;
delete x;
```

Examples of **correct** code for this rule:

```javascript
var x;

var y;
delete y.prop;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-delete-var": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-delete-var
```

:::

## References

* Rule Source
