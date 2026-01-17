---
url: /docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.md
---

### What it does

This rule disallows \8 and \9 escape sequences in string literals

### Why is this bad?

ECMAScript specification treats \8 and \9 in string literals as a legacy feature

### Examples

Examples of **incorrect** code for this rule:

```javascript
let x = "\8";
let y = "\9";
```

Examples of **correct** code for this rule:

```javascript
let x = "8";
let y = "\\9";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-nonoctal-decimal-escape": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-nonoctal-decimal-escape
```

:::

## References

* Rule Source
