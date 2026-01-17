---
url: /docs/guide/usage/linter/rules/eslint/no-multi-str.md
---

### What it does

Disallow multiline strings.

### Why is this bad?

Some consider this to be a bad practice as it was an undocumented feature of JavaScript
that was only formalized later.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var x =
  "Line 1 \
 Line 2";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-multi-str": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-multi-str
```

:::

## References

* Rule Source
