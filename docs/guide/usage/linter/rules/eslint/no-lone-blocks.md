---
url: /docs/guide/usage/linter/rules/eslint/no-lone-blocks.md
---
# eslint/no-lone-blocks&#x20;

### What it does

Disallows unnecessary standalone block statements.

### Why is this bad?

Standalone blocks can be confusing as they do not provide any meaningful purpose when used unnecessarily.
They may introduce extra nesting, reducing code readability, and can mislead readers about scope or intent.

### Examples

Examples of **incorrect** code for this rule:

```js
{
  var x = 1;
}
```

Examples of **correct** code for this rule:

```js
if (condition) {
  var x = 1;
}

{
  let x = 1; // Used to create a valid block scope.
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-lone-blocks": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-lone-blocks
```

:::

## References

* Rule Source
