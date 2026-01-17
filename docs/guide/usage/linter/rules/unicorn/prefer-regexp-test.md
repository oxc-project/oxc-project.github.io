---
url: /docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.md
---

### What it does

Prefers `RegExp#test()` over `String#match()` and `String#exec()`.

### Why is this bad?

When you want to know whether a pattern is found in a string, use
[`RegExp#test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
instead of [`String#match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
or [`RegExp#exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec),
as it exclusively returns a boolean and therefore is more efficient.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (string.match(/unicorn/)) {
}
if (/unicorn/.exec(string)) {
}
```

Examples of **correct** code for this rule:

```javascript
if (/unicorn/.test(string)) {
}
Boolean(string.match(/unicorn/));
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-regexp-test": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-regexp-test
```

:::

## References

* Rule Source
