---
url: /docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.md
---
# typescript/no-unsafe-function-type&#x20;

### What it does

Disallow using the unsafe built-in Function type.

### Why is this bad?

TypeScript's built-in Function type allows being called with any number of arguments and returns type any. Function also allows classes or plain objects that happen to possess all properties of the Function class. It's generally better to specify function parameters and return types with the function type syntax.

### Examples

Examples of **incorrect** code for this rule:

```ts
let noParametersOrReturn: Function;
noParametersOrReturn = () => {};

let stringToNumber: Function;
stringToNumber = (text: string) => text.length;

let identity: Function;
identity = (value) => value;
```

Examples of **correct** code for this rule:

```ts
let noParametersOrReturn: () => void;
noParametersOrReturn = () => {};

let stringToNumber: (text: string) => number;
stringToNumber = (text) => text.length;

let identity: <T>(value: T) => T;
identity = (value) => value;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unsafe-function-type": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-unsafe-function-type
```

:::

## References

* Rule Source
