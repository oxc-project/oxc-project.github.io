---
url: /docs/guide/usage/linter/rules/eslint/no-object-constructor.md
---

### What it does

Disallow calls to the Object constructor without an argument

### Why is this bad?

Use of the Object constructor to construct a new empty object is generally discouraged in favor of object literal notation because of conciseness and because the Object global may be redefined. The exception is when the Object constructor is used to intentionally wrap a specified value which is passed as an argument.

### Examples

Examples of **incorrect** code for this rule:

```js
Object();
new Object();
```

Examples of **correct** code for this rule:

```js
Object("foo");
const obj = { a: 1, b: 2 };
const isObject = (value) => value === Object(value);
const createObject = (Object) => new Object();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-object-constructor": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-object-constructor
```

:::

## References

* Rule Source
