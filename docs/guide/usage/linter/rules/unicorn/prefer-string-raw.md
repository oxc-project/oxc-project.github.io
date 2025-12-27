---
url: /docs/guide/usage/linter/rules/unicorn/prefer-string-raw.md
---
# unicorn/prefer-string-raw&#x20;

### What it does

Prefers use of String.raw to avoid escaping .

### Why is this bad?

Excessive backslashes can make string values less readable which can be avoided by using `String.raw`.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const file = "C:\\windows\\style\\path\\to\\file.js";
const regexp = new RegExp("foo\\.bar");
```

Examples of **correct** code for this rule:

```javascript
const file = String.raw`C:\windows\style\path\to\file.js`;
const regexp = new RegExp(String.raw`foo\.bar`);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-string-raw": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-string-raw
```

:::

## References

* Rule Source
