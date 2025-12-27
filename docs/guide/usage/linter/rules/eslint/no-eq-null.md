---
url: /docs/guide/usage/linter/rules/eslint/no-eq-null.md
---
# eslint/no-eq-null&#x20;

### What it does

Disallow `null` comparisons without type-checking operators.

### Why is this bad?

Comparing to `null` without a type-checking operator (`==` or `!=`), can
have unintended results as the comparison will evaluate to `true` when
comparing to not just a `null`, but also an `undefined` value.

### Examples

Examples of **incorrect** code for this rule:

```js
if (foo == null) {
  bar();
}
if (baz != null) {
  bar();
}
```

Examples of **correct** code for this rule:

```js
if (foo === null) {
  bar();
}

if (baz !== null) {
  bar();
}

if (bang === undefined) {
  bar();
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-eq-null": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-eq-null
```

:::

## References

* Rule Source
