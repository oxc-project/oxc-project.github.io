---
url: /docs/guide/usage/linter/rules/unicorn/no-useless-length-check.md
---

### What it does

It checks for an unnecessary array length check in a logical expression.

The cases are:

* `array.length === 0 || array.every(Boolean)` (`array.every` returns `true` if array is has elements)
* `array.length > 0 && array.some(Boolean)` (`array.some` returns `false` if array is empty)

### Why is this bad?

An extra unnecessary length check is done.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (array.length === 0 || array.every(Boolean)) {
  // do something!
}
```

Examples of **correct** code for this rule:

```javascript
if (array.every(Boolean)) {
  // do something!
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-length-check": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-useless-length-check
```

:::

## References

* Rule Source
