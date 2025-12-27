---
url: /docs/guide/usage/linter/rules/typescript/no-unsafe-member-access.md
---
# typescript/no-unsafe-member-access&#x20;

### What it does

This rule disallows member access on a value with type `any`.

### Why is this bad?

The `any` type in TypeScript disables type checking. When you access a member (property or method) on a value typed as `any`, TypeScript cannot verify that the member exists or what type it has. This can lead to runtime errors.

### Examples

Examples of **incorrect** code for this rule:

```ts
declare const anyValue: any;

anyValue.foo; // unsafe member access

anyValue.bar.baz; // unsafe nested member access

anyValue["key"]; // unsafe computed member access

const result = anyValue.method(); // unsafe method access
```

Examples of **correct** code for this rule:

```ts
declare const obj: { foo: string; bar: { baz: number } };
declare const unknownValue: unknown;

obj.foo; // safe

obj.bar.baz; // safe

obj["foo"]; // safe

// Type guard for unknown
if (typeof unknownValue === "object" && unknownValue !== null && "foo" in unknownValue) {
  console.log(unknownValue.foo); // safe after type guard
}

// Explicit type assertion if needed
(anyValue as { foo: string }).foo; // explicitly unsafe but intentional
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowOptionalChaining

type: `boolean`

default: `false`

Whether to allow `?.` optional chains on `any` values.
When `true`, optional chaining on `any` values will not be flagged.
Default is `false`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unsafe-member-access": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-unsafe-member-access
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
