---
url: /docs/guide/usage/linter/rules/unicorn/no-hex-escape.md
---

### What it does

Enforces a convention of using [Unicode escapes](https://mathiasbynens.be/notes/javascript-escapes#unicode) instead of [hexadecimal escapes](https://mathiasbynens.be/notes/javascript-escapes#hexadecimal) for consistency and clarity.

### Why is this bad?

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = "\x1B";
const foo = `\x1B${bar}`;
```

Examples of **correct** code for this rule:

```javascript
const foo = "\u001B";
const foo = `\u001B${bar}`;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-hex-escape": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-hex-escape
```

:::

## References

* Rule Source
