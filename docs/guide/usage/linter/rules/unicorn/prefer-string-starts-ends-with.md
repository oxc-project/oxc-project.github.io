---
url: /docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.md
---

### What it does

Prefer [`String#startsWith()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) and [`String#endsWith()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) over using a regex with `/^foo/` or `/foo$/`.

### Why is this bad?

Using `String#startsWith()` and `String#endsWith()` is more readable and performant as it does not need to parse a regex.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = "hello";
/^abc/.test(foo);
```

Examples of **correct** code for this rule:

```javascript
const foo = "hello";
foo.startsWith("abc");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-string-starts-ends-with": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-string-starts-ends-with
```

:::

## References

* Rule Source
