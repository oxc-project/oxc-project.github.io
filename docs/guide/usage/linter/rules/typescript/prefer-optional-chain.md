---
url: /docs/guide/usage/linter/rules/typescript/prefer-optional-chain.md
---

### What it does

Enforce using concise optional chain expressions instead of chained logical AND
operators, negated logical OR operators, or empty objects.

### Why is this bad?

TypeScript 3.7 introduced optional chaining (`?.`) which provides a more concise
and readable way to access properties on potentially nullish values. Using optional
chaining instead of logical AND chains (`&&`) or other patterns improves code clarity.

### Examples

Examples of **incorrect** code for this rule:

```ts
foo && foo.bar;
foo && foo.bar && foo.bar.baz;
foo && foo["bar"];
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz;
foo && foo.bar && foo.bar.baz.buzz;
foo && foo.bar.baz && foo.bar.baz.buzz;
(foo || {}).bar;
```

Examples of **correct** code for this rule:

```ts
foo?.bar;
foo?.bar?.baz;
foo?.["bar"];
foo?.bar?.baz?.buzz;
foo?.bar?.baz.buzz;
foo?.bar.baz?.buzz;
foo?.bar;
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing

type: `boolean`

default: `false`

Allow autofixers that will change the return type of the expression.
This option is considered unsafe as it may break the build.

### checkAny

type: `boolean`

default: `true`

Check operands that are typed as `any` when inspecting "loose boolean" operands.

### checkBigInt

type: `boolean`

default: `true`

Check operands that are typed as `bigint` when inspecting "loose boolean" operands.

### checkBoolean

type: `boolean`

default: `true`

Check operands that are typed as `boolean` when inspecting "loose boolean" operands.

### checkNumber

type: `boolean`

default: `true`

Check operands that are typed as `number` when inspecting "loose boolean" operands.

### checkString

type: `boolean`

default: `true`

Check operands that are typed as `string` when inspecting "loose boolean" operands.

### checkUnknown

type: `boolean`

default: `true`

Check operands that are typed as `unknown` when inspecting "loose boolean" operands.

### requireNullish

type: `boolean`

default: `false`

Skip operands that are not typed with `null` and/or `undefined` when inspecting
"loose boolean" operands.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/prefer-optional-chain": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/prefer-optional-chain
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
