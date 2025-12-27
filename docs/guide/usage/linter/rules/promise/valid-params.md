---
url: /docs/guide/usage/linter/rules/promise/valid-params.md
---
# promise/valid-params&#x20;

### What it does

Enforces the proper number of arguments are passed to Promise functions.

This rule is generally unnecessary if using TypeScript.

### Why is this bad?

Calling a Promise function with the incorrect number of arguments can lead to unexpected
behavior or hard to spot bugs.

### Examples

Examples of **incorrect** code for this rule:

```javascript
Promise.resolve(1, 2);
```

Examples of **correct** code for this rule:

```javascript
Promise.resolve(1);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/valid-params": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/valid-params --promise-plugin
```

:::

## References

* Rule Source
