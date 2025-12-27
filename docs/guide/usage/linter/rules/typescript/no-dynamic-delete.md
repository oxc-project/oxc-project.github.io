---
url: /docs/guide/usage/linter/rules/typescript/no-dynamic-delete.md
---
# typescript/no-dynamic-delete&#x20;

### What it does

Disallow using the delete operator on computed key expressions.

### Why is this bad?

Deleting dynamically computed keys can be dangerous and in some cases not well optimized.
Using the delete operator on keys that aren't runtime constants could be a sign that you're using the wrong data structures.
Consider using a Map or Set if you’re using an object as a key-value collection.

### Examples

Examples of **incorrect** code for this rule:

```ts
const container: { [i: string]: 0 } = {};
delete container["aa" + "b"];
```

Examples of **correct** code for this rule:

```ts
const container: { [i: string]: 0 } = {};
delete container.aab;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-dynamic-delete": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-dynamic-delete
```

:::

## References

* Rule Source
