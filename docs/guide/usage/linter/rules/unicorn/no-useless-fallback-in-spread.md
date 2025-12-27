---
url: /docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.md
---
# unicorn/no-useless-fallback-in-spread&#x20;

### What it does

Disallow useless fallback when spreading in object literals.

### Why is this bad?

Spreading [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) in object literals won't add any unexpected properties, so it's unnecessary to add an empty object as fallback.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const object = { ...(foo || {}) };
```

Examples of **correct** code for this rule:

```javascript
const object = { ...foo };
const object = { ...(foo || { not: "empty" }) };
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-fallback-in-spread": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-useless-fallback-in-spread
```

:::

## References

* Rule Source
