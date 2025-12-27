---
url: /docs/guide/usage/linter/rules/eslint/no-unused-expressions.md
---
# eslint/no-unused-expressions&#x20;

### What it does

This rule disallows unused expressions.

### Why is this bad?

Unused expressions are usually a mistake. They can be a symptom of a bug or a misunderstanding of the code.

### Examples

Examples of **incorrect** code for this rule:

```ts
Set<number>;
1 as number;
window!;
```

Examples of **correct** code for this rule:

```ts
const foo = new Set<number>();
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowShortCircuit

type: `boolean`

default: `false`

When set to `true`, allows short circuit evaluations in expressions.

### allowTaggedTemplates

type: `boolean`

default: `false`

When set to `true`, allows tagged template literals in expressions.

### allowTernary

type: `boolean`

default: `false`

When set to `true`, allows ternary operators in expressions.

### enforceForJSX

type: `boolean`

default: `false`

When set to `true`, enforces the rule for unused JSX expressions also.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unused-expressions": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unused-expressions
```

:::

## References

* Rule Source
