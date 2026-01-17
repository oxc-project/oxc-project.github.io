---
url: /docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.md
---

### What it does

Disallow unsafe declaration merging.

### Why is this bad?

Declaration merging between classes and interfaces is unsafe.
The TypeScript compiler doesn't check whether properties are initialized, which can lead to TypeScript not detecting code that will cause runtime errors.

### Examples

Examples of **incorrect** code for this rule:

```ts
interface Foo {}
class Foo {}
```

Examples of **correct** code for this rule:

```ts
interface Foo {}
class Bar {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unsafe-declaration-merging": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-unsafe-declaration-merging
```

:::

## References

* Rule Source
