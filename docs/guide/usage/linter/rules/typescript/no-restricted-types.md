---
url: /docs/guide/usage/linter/rules/typescript/no-restricted-types.md
---

### What it does

Disallow certain types from being used.

### Why is this bad?

Some built-in types have aliases, while some types are considered dangerous or harmful.
It's often a good idea to ban certain types to help with consistency and safety.

### Examples

Given `{ "types": { "Foo": { "message": "Use Bar instead", "fixWith": "Bar" } } }`:

Examples of **incorrect** code for this rule:

```ts
let value: Foo;
```

Examples of **correct** code for this rule:

```ts
let value: Bar;
```

Other examples of configuration option setups for this rule:

* Banning the `Foo` type with just a message, no fixes or suggestions:
  `{ "types": { "Foo": "Use `OtherType` instead." } }`

* Banning `Bar` type with suggestion:
  `{ "types": { "Bar": { "message": "Avoid using `Bar`.", "suggest": "BazQux" } } }`

* Banning `Object` type with a generic message:
  `{ "types": { "Object": true } }`

## Configuration

This rule accepts a configuration object with the following properties:

### types

type: `object`

default: `{}`

A mapping of type names to ban configurations.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-restricted-types": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-restricted-types
```

:::

## References

* Rule Source
