---
url: /docs/guide/usage/linter/rules/eslint/no-empty-character-class.md
---

### What it does

Disallow empty character classes in regular expressions

### Why is this bad?

Because empty character classes in regular expressions do not match anything, they might be typing mistakes.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = /^abc[]/;
```

Examples of **correct** code for this rule:

```javascript
var foo = /^abc/;
var foo2 = /^abc[123]/;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-empty-character-class": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-empty-character-class
```

:::

## References

* Rule Source
