---
url: /docs/guide/usage/linter/rules/eslint/unicode-bom.md
---
# eslint/unicode-bom&#x20;

### What it does

Require or disallow Unicode byte order mark (BOM)

### Why is this bad?

The Unicode Byte Order Mark (BOM) is used to specify whether code units are big endian or
little endian. That is, whether the most significant or least significant bytes come first.
UTF-8 does not require a BOM because byte ordering does not matter when characters are a
single byte. Since UTF-8 is the dominant encoding of the web, we make "never" the default
option.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var a = 123;
```

## Configuration

This rule accepts one of the following string values:

### `"always"`

Always require a Unicode BOM (Byte Order Mark) at the beginning of the file.

### `"never"`

Never allow a Unicode BOM (Byte Order Mark) at the beginning of the file.
This is the default option.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicode-bom": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicode-bom
```

:::

## References

* Rule Source
