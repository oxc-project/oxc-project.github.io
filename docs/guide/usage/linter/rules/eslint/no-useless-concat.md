---
url: /docs/guide/usage/linter/rules/eslint/no-useless-concat.md
---
# eslint/no-useless-concat&#x20;

### What it does

Disallow unnecessary concatenation of literals or template literals

### Why is this bad?

It’s unnecessary to concatenate two strings together when they could
be combined into a single literal.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = "a" + "b";
```

```javascript
var foo = "a" + "b" + "c";
```

Examples of **correct** code for this rule:

```javascript
var foo = "a" + bar;
```

// when the string concatenation is multiline

```javascript
var foo = "a" + "b" + "c";
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-useless-concat": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-useless-concat
```

:::

## References

* Rule Source
