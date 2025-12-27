---
url: /docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.md
---
# unicorn/prefer-optional-catch-binding&#x20;

### What it does

Prefers omitting the catch binding parameter if it is unused

### Why is this bad?

It is unnecessary to bind the error to a variable if it is not used.

### Examples

Examples of **incorrect** code for this rule:

```javascript
try {
  // ...
} catch (e) {}
```

Examples of **correct** code for this rule:

```javascript
try {
  // ...
} catch {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-optional-catch-binding": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-optional-catch-binding
```

:::

## References

* Rule Source
