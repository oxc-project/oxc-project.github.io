---
url: /docs/guide/usage/linter/rules/typescript/no-unnecessary-type-arguments.md
---

### What it does

This rule disallows type arguments that are identical to the default type parameter.

### Why is this bad?

Explicit type arguments that are the same as their default values are unnecessary and add visual noise to the code. TypeScript will infer these types automatically.

### Examples

Examples of **incorrect** code for this rule:

```ts
function identity<T = string>(arg: T): T {
  return arg;
}

// Unnecessary type argument - string is the default
const result = identity<string>("hello");

interface Container<T = number> {
  value: T;
}

// Unnecessary type argument - number is the default
const container: Container<number> = { value: 42 };

class MyClass<T = boolean> {
  constructor(public value: T) {}
}

// Unnecessary type argument - boolean is the default
const instance = new MyClass<boolean>(true);
```

Examples of **correct** code for this rule:

```ts
function identity<T = string>(arg: T): T {
  return arg;
}

// Using default type
const result1 = identity("hello");

// Using different type
const result2 = identity<number>(42);

interface Container<T = number> {
  value: T;
}

// Using default type
const container1: Container = { value: 42 };

// Using different type
const container2: Container<string> = { value: "hello" };
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unnecessary-type-arguments": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-unnecessary-type-arguments
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
