---
url: /docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.md
---
# oxc/bad-replace-all-arg&#x20;

### What it does

This rule warns when the `replaceAll` method is called with a regular expression that does not have the global flag (g).

### Why is this bad?

The `replaceAll` method replaces all occurrences of a string with another string. If the global flag (g) is not used in the regular expression, only the first occurrence of the string will be replaced.

### Examples

Examples of **incorrect** code for this rule:

```javascript
withSpaces.replaceAll(/\s+/, ",");
```

Examples of **correct** code for this rule:

```javascript
withSpaces.replaceAll(/\s+/g, ",");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-replace-all-arg": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/bad-replace-all-arg
```

:::

## References

* Rule Source
