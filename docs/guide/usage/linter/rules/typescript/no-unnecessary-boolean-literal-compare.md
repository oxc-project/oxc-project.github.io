---
url: >-
  /docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare.md
---

### What it does

This rule disallows unnecessary equality comparisons with boolean literals.

### Why is this bad?

Comparing boolean values to boolean literals is unnecessary when the comparison can be eliminated. These comparisons make code more verbose without adding value.

### Examples

Examples of **incorrect** code for this rule:

```ts
declare const someCondition: boolean;

if (someCondition === true) {
  // ...
}

if (someCondition === false) {
  // ...
}

if (someCondition !== true) {
  // ...
}

if (someCondition !== false) {
  // ...
}

const result = someCondition == true;
```

Examples of **correct** code for this rule:

```ts
declare const someCondition: boolean;

if (someCondition) {
  // ...
}

if (!someCondition) {
  // ...
}

// Comparisons with non-boolean types are allowed
declare const someValue: unknown;
if (someValue === true) {
  // ...
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowComparingNullableBooleansToFalse

type: `boolean`

default: `true`

Whether to allow comparing nullable boolean expressions to `false`.
When false, `x === false` where x is `boolean | null` will be flagged.

### allowComparingNullableBooleansToTrue

type: `boolean`

default: `true`

Whether to allow comparing nullable boolean expressions to `true`.
When false, `x === true` where x is `boolean | null` will be flagged.

### allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing

type: `boolean`

default: `false`

Whether to allow this rule to run without `strictNullChecks` enabled.
This is not recommended as the rule may produce incorrect results.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-unnecessary-boolean-literal-compare": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-unnecessary-boolean-literal-compare
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
