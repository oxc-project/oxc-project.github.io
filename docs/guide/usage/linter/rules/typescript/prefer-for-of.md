---
url: /docs/guide/usage/linter/rules/typescript/prefer-for-of.md
---
# typescript/prefer-for-of&#x20;

### What it does

Enforces the use of for-of loop instead of a for loop with a simple iteration.

### Why is this bad?

Using a for loop with a simple iteration over an array can be replaced with a more concise
and readable for-of loop. For-of loops are easier to read and less error-prone, as they
eliminate the need for an index variable and manual array access.

### Examples

Examples of **incorrect** code for this rule:

```typescript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Examples of **correct** code for this rule:

```typescript
for (const item of arr) {
  console.log(item);
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/prefer-for-of": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/prefer-for-of
```

:::

## References

* Rule Source
