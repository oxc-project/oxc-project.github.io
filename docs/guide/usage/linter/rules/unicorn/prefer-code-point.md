---
url: /docs/guide/usage/linter/rules/unicorn/prefer-code-point.md
---

### What it does

Prefers usage of `String.prototype.codePointAt` over `String.prototype.charCodeAt`.
Prefers usage of `String.fromCodePoint` over `String.fromCharCode`.

### Why is this bad?

Unicode is better supported in [`String#codePointAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) and [`String.fromCodePoint()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint).

[Difference between `String.fromCodePoint()` and `String.fromCharCode()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#compared_to_fromcharcode)

### Examples

Examples of **incorrect** code for this rule:

```javascript
"🦄".charCodeAt(0);
String.fromCharCode(0x1f984);
```

Examples of **correct** code for this rule:

```javascript
"🦄".codePointAt(0);
String.fromCodePoint(0x1f984);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-code-point": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-code-point
```

:::

## References

* Rule Source
