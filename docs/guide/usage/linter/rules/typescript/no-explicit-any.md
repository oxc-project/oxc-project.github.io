---
url: /docs/guide/usage/linter/rules/typescript/no-explicit-any.md
---
# typescript/no-explicit-any&#x20;

### What it does

Disallows explicit use of the `any` type.

### Why is this bad?

The `any` type in TypeScript is a dangerous "escape hatch" from the type system. Using
`any` disables many type checking rules and is generally best used only as a last resort or
when prototyping code. This rule reports on explicit uses of the `any` keyword as a type
annotation.

> TypeScript's `--noImplicitAny` compiler option prevents an implied `any`, but doesn't
> prevent `any` from being explicitly used the way this rule does.

### Examples

Examples of **incorrect** code for this rule:

```typescript
const age: any = "seventeen";
const ages: any[] = ["seventeen"];
const ages: Array<any> = ["seventeen"];
function greet(): any {}
function greet(): any[] {}
function greet(): Array<any> {}
function greet(): Array<Array<any>> {}
function greet(param: Array<any>): string {}
function greet(param: Array<any>): Array<any> {}
```

Examples of **correct** code for this rule:

```typescript
const age: number = 17;
const ages: number[] = [17];
const ages: Array<number> = [17];
function greet(): string {}
function greet(): string[] {}
function greet(): Array<string> {}
function greet(): Array<Array<string>> {}
function greet(param: Array<string>): string {}
function greet(param: Array<string>): Array<string> {}
```

## Configuration

This rule accepts a configuration object with the following properties:

### fixToUnknown

type: `boolean`

default: `false`

Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.

### ignoreRestArgs

type: `boolean`

default: `false`

Whether to ignore rest parameter arrays.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-explicit-any": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-explicit-any
```

:::

## References

* Rule Source
