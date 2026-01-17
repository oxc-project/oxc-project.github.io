---
url: /docs/guide/usage/linter/rules/typescript/adjacent-overload-signatures.md
---

### What it does

Require that function overload signatures be consecutive.

### Why is this bad?

Function overload signatures represent multiple ways
a function can be called, potentially with different return types.
It's typical for an interface or type alias describing a function to place all overload signatures next to each other.
If Signatures placed elsewhere in the type are easier to be missed by future developers reading the code.

### Examples

Examples of **incorrect** code for this rule:

```typescript
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  foo(sn: string | number): void {}
}

export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/adjacent-overload-signatures": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/adjacent-overload-signatures
```

:::

## References

* Rule Source
