---
url: /docs/guide/usage/linter/rules/unicorn/prefer-top-level-await.md
---
# unicorn/prefer-top-level-await&#x20;

### What it does

Prefer top-level await over top-level promises and async function calls.

### Why is this bad?

Top-level await is more readable and can prevent unhandled rejections.

### Examples

Examples of **incorrect** code for this rule:

```js
(async () => {
  await run();
})();

run().catch((error) => {
  console.error(error);
});
```

Examples of **correct** code for this rule:

```js
await run();

try {
  await run();
} catch (error) {
  console.error(error);
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-top-level-await": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-top-level-await
```

:::

## References

* Rule Source
