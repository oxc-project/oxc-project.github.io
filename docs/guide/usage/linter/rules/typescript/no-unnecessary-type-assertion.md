---
url: /docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion.md
---
# typescript/no-unnecessary-type-assertion&#x20;

### What it does

This rule disallows type assertions that do not change the type of an expression.

### Why is this bad?

Type assertions that don't actually change the type of an expression are unnecessary and can be safely removed. They add visual noise without providing any benefit and may indicate confusion about TypeScript's type system.

### Examples

Examples of **incorrect** code for this rule:

```ts
const str: string = "hello";
const redundant = str as string; // unnecessary, str is already string

function getString(): string {
  return "hello";
}
const result = getString() as string; // unnecessary, getString() already returns string

const num = 42;
const alsoRedundant = num as 42; // unnecessary if TypeScript can infer literal type

// Unnecessary assertion to wider type
const literal = "hello" as string;
```

Examples of **correct** code for this rule:

```ts
const unknown: unknown = "hello";
const str = unknown as string; // necessary to narrow type

const element = document.getElementById("myElement") as HTMLInputElement; // necessary for specific element type

const obj = { name: "John" };
const name = obj.name as const; // necessary for literal type

// No assertion needed
const str2: string = "hello";
const num: number = 42;
```

## Configuration

This rule accepts a configuration object with the following properties:

### checkLiteralConstAssertions

type: `boolean`

default: `false`

Whether to check literal const assertions like `'foo' as const`.
When `false` (default), const assertions on literal types are not flagged.
When `true`, these will be reported as unnecessary since the type is already a literal.

### typesToIgnore

type: `string[]`

default: `[]`

A list of type names to ignore when checking for unnecessary assertions.
Type assertions to these types will not be flagged even if they appear unnecessary.
Example: `["Foo", "Bar"]` to allow `x as Foo` or `x as Bar`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unnecessary-type-assertion": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-unnecessary-type-assertion
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
