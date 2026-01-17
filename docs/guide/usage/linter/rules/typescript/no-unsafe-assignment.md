---
url: /docs/guide/usage/linter/rules/typescript/no-unsafe-assignment.md
---

### What it does

This rule disallows assigning a value with type `any` to variables and properties.

### Why is this bad?

The `any` type in TypeScript disables type checking and can lead to runtime errors. When you assign an `any` value to a typed variable, you're essentially bypassing TypeScript's type safety without any guarantees about the actual value.

### Examples

Examples of **incorrect** code for this rule:

```ts
declare const anyValue: any;

const str: string = anyValue; // unsafe assignment

let num: number;
num = anyValue; // unsafe assignment

const obj = {
  prop: anyValue as any, // unsafe assignment
};

interface User {
  name: string;
  age: number;
}

const user: User = anyValue; // unsafe assignment
```

Examples of **correct** code for this rule:

```ts
declare const stringValue: string;
declare const numberValue: number;
declare const unknownValue: unknown;

const str: string = stringValue; // safe

let num: number;
num = numberValue; // safe

// Use type guards with unknown
if (typeof unknownValue === "string") {
  const str2: string = unknownValue; // safe after type guard
}

// Explicit any assignment (still not recommended, but intentional)
const anything: any = unknownValue;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unsafe-assignment": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-unsafe-assignment
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
