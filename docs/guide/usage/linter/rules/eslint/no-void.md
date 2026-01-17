---
url: /docs/guide/usage/linter/rules/eslint/no-void.md
---

### What it does

Disallows the use of the `void` operator.

### Why is this bad?

The `void` operator is often used to get `undefined`, but this is
unnecessary because `undefined` can be used directly instead.

### Examples

Examples of **incorrect** code for this rule:

```ts
void 0;
var foo = void 0;
```

Examples of **correct** code for this rule:

```ts
"var foo = bar()";
"foo.void()";
"foo.void = bar";
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowAsStatement

type: `boolean`

default: `false`

If set to `true`, using `void` as a standalone statement is allowed.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-void": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-void
```

:::

## References

* Rule Source
