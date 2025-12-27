---
url: /docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.md
---
# unicorn/prefer-string-replace-all&#x20;

### What it does

Prefers [`String#replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) over [`String#replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) when using a regex with the global flag.

### Why is this bad?

The [`String#replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) method is both faster and safer as you don't have to use a regex and remember to escape it if the string is not a literal. And when used with a regex, it makes the intent clearer.

### Examples

Examples of **incorrect** code for this rule:

```js
foo.replace(/a/g, bar);
```

Examples of **correct** code for this rule:

```js
foo.replace(/a/, bar);
foo.replaceAll(/a/, bar);

const pattern = "not-a-regexp";
foo.replace(pattern, bar);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-string-replace-all": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-string-replace-all
```

:::

## References

* Rule Source
