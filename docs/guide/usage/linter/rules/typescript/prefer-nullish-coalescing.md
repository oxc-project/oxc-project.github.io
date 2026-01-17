---
url: /docs/guide/usage/linter/rules/typescript/prefer-nullish-coalescing.md
---

### What it does

Enforce using the nullish coalescing operator (`??`) instead of logical OR (`||`)
or conditional expressions when the left operand might be `null` or `undefined`.

### Why is this bad?

The `||` operator returns the right-hand side when the left-hand side is any
falsy value (`false`, `0`, `''`, `null`, `undefined`, `NaN`). This can lead
to unexpected behavior when you only want to provide a default for `null`
or `undefined`.

The nullish coalescing operator (`??`) only returns the right-hand side when
the left-hand side is `null` or `undefined`, making the intent clearer and
avoiding bugs with other falsy values.

### Examples

Examples of **incorrect** code for this rule:

```ts
declare const x: string | null;

// Using || when ?? would be more appropriate
const foo = x || "default";

// Ternary that could use ??
const bar = x !== null && x !== undefined ? x : "default";
const baz = x != null ? x : "default";

// If statement that could use ??
let value = "default";
if (x !== null && x !== undefined) {
  value = x;
}
```

Examples of **correct** code for this rule:

```ts
declare const x: string | null;

// Using nullish coalescing
const foo = x ?? "default";

// || is fine when you want falsy behavior
declare const y: string;
const bar = y || "default";

// Boolean coercion (can be ignored with ignoreBooleanCoercion)
const bool = Boolean(x || y);
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing

type: `boolean`

default: `false`

Unless this is set to `true`, the rule will error on every file whose
`tsconfig.json` does *not* have the `strictNullChecks` compiler option
(or `strict`) set to `true`.

It is *not* recommended to enable this config option.

### ignoreBooleanCoercion

type: `boolean`

default: `false`

Whether to ignore arguments to the `Boolean` constructor.

### ignoreConditionalTests

type: `boolean`

default: `true`

Whether to ignore cases that are located within a conditional test.

### ignoreIfStatements

type: `boolean`

default: `false`

Whether to ignore any if statements that could be simplified by using
the nullish coalescing operator.

### ignoreMixedLogicalExpressions

type: `boolean`

default: `false`

Whether to ignore any logical or expressions that are part of a mixed
logical expression (with `&&`).

### ignorePrimitives

type: `boolean`

Represents the different ways `ignorePrimitives` can be specified in JSON.
Can be:

* `true` - ignore all primitive types
* An object specifying which primitives to ignore

### ignoreTernaryTests

type: `boolean`

default: `false`

Whether to ignore any ternary expressions that could be simplified by
using the nullish coalescing operator.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/prefer-nullish-coalescing": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/prefer-nullish-coalescing
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
