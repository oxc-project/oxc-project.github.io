---
url: /docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.md
---

### What it does

Disallow awaiting on non-promise values.

### Why is this bad?

The `await` operator should only be used on `Promise` values.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function bad() {
  await await promise;
}
```

Examples of **correct** code for this rule:

```javascript
async function bad() {
  await promise;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-unnecessary-await": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-unnecessary-await
```

:::

## References

* Rule Source
