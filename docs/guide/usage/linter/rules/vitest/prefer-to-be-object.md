---
url: /docs/guide/usage/linter/rules/vitest/prefer-to-be-object.md
---
# vitest/prefer-to-be-object&#x20;

### What it does

This rule enforces using `toBeObject()` to check if a value is of type `Object`.

### Why is this bad?

Using other methods such as `toBeInstanceOf(Object)` or `instanceof Object` can
be less clear and potentially misleading. Enforcing the use of `toBeObject()`
provides more explicit and readable code, making your intentions clear and
improving the overall maintainability and readability of your tests.

### Examples

Examples of **incorrect** code for this rule:

```js
expectTypeOf({}).toBeInstanceOf(Object);
expectTypeOf({} instanceof Object).toBeTruthy();
```

Examples of **correct** code for this rule:

```js
expectTypeOf({}).toBeObject();
expectTypeOf({}).toBeObject();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/prefer-to-be-object": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/prefer-to-be-object --vitest-plugin
```

:::

## References

* Rule Source
