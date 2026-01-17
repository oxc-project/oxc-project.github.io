---
url: /docs/guide/usage/linter/rules/oxc/missing-throw.md
---

### What it does

Checks whether the `throw` keyword is missing in front of a `new` expression.

### Why is this bad?

The `throw` keyword is required in front of a `new` expression to throw an error. Omitting it is usually a mistake.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function foo() {
  throw Error();
}
const foo = () => {
  new Error();
};
```

Examples of **correct** code for this rule:

```javascript
function foo() {
  throw new Error();
}
const foo = () => {
  throw new Error();
};
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/missing-throw": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/missing-throw
```

:::

## References

* Rule Source
