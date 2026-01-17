---
url: /docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md
---

### What it does

[`String#trimLeft()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft) and [`String#trimRight()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight) are aliases of [`String#trimStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) and [`String#trimEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd). This is to ensure consistency and use [direction](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)-independent wording.

### Why is this bad?

The `trimLeft` and `trimRight` names are confusing and inconsistent with the rest of the language.

### Examples

Examples of **incorrect** code for this rule:

```javascript
str.trimLeft();
str.trimRight();
```

Examples of **correct** code for this rule:

```javascript
str.trimStart();
str.trimEnd();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-string-trim-start-end": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-string-trim-start-end
```

:::

## References

* Rule Source
