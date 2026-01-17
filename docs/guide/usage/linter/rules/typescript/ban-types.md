---
url: /docs/guide/usage/linter/rules/typescript/ban-types.md
---

### What it does

This rule bans specific types and can suggest alternatives. Note that it does not ban the corresponding runtime objects from being used.

### Why is this bad?

Some built-in types have aliases, while some types are considered dangerous or harmful. It's often a good idea to ban certain types to help with consistency and safety.

### Examples

Examples of **incorrect** code for this rule:

```typescript
let foo: String = "foo";

let bar: Boolean = true;
```

Examples of **correct** code for this rule:

```typescript
let foo: string = "foo";

let bar: boolean = true;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/ban-types": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/ban-types
```

:::

## References

* Rule Source
