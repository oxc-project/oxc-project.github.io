---
url: /docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.md
---
# typescript/no-extra-non-null-assertion&#x20;

### What it does

Disallow extra non-null assertions.

### Why is this bad?

The `!` non-null assertion operator in TypeScript is used to assert that a value's type
does not include null or undefined. Using the operator any more than once on a single value
does nothing.

### Examples

Examples of **incorrect** code for this rule:

```ts
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;
```

```ts
function foo(bar: number | undefined) {
  const bar: number = bar!!!;
}
```

```ts
function foo(bar?: { n: number }) {
  return bar!?.n;
}
```

Examples of **correct** code for this rule:

```ts
const foo: { bar: number } | null = null;
const bar = foo!.bar;
```

```ts
function foo(bar: number | undefined) {
  const bar: number = bar!;
}
```

```ts
function foo(bar?: { n: number }) {
  return bar?.n;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-extra-non-null-assertion": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-extra-non-null-assertion
```

:::

## References

* Rule Source
