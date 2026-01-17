---
url: /docs/guide/usage/linter/rules/eslint/no-const-assign.md
---

### What it does

Disallow reassigning `const` variables.

### Why is this bad?

We cannot modify variables that are declared using the `const` keyword,
as it will raise a runtime error.

Note that this rule is not necessary for TypeScript
code, as TypeScript will already catch this as an error.

### Examples

Examples of **incorrect** code for this rule:

```js
const a = 0;
a = 1;

const b = 0;
b += 1;
```

Examples of **correct** code for this rule:

```js
const a = 0;
console.log(a);

var b = 0;
b += 1;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-const-assign": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-const-assign
```

:::

## References

* Rule Source
