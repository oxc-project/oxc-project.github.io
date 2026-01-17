---
url: /docs/guide/usage/linter/rules/typescript/ban-tslint-comment.md
---

### What it does

This rule disallows `tslint:<rule-flag>` comments

### Why is this bad?

Useful when migrating from TSLint to ESLint. Once TSLint has been
removed, this rule helps locate TSLint annotations

### Examples

Examples of **incorrect** code for this rule:

```ts
// tslint:disable-next-line
someCode();
```

Examples of **correct** code for this rule:

```ts
someCode();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/ban-tslint-comment": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/ban-tslint-comment
```

:::

## References

* Rule Source
