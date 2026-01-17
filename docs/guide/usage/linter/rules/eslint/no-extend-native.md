---
url: /docs/guide/usage/linter/rules/eslint/no-extend-native.md
---

### What it does

Prevents extending native global objects such as `Object`, `String`, or `Array` with new
properties.

### Why is this bad?

Extending native objects can cause unexpected behavior and conflicts with other code.

For example:

```js
// Adding a new property, which might seem okay
Object.prototype.extra = 55;

// Defining a user object
const users = {
  1: "user1",
  2: "user2",
};

for (const id in users) {
  // This will print "extra" as well as "1" and "2":
  console.log(id);
}
```

### Examples

Examples of **incorrect** code for this rule:

```js
Object.prototype.p = 0;
Object.defineProperty(Array.prototype, "p", { value: 0 });
```

Examples of **correct** code for this rule:

```js
x.prototype.p = 0;
Object.defineProperty(x.prototype, "p", { value: 0 });
```

## Configuration

This rule accepts a configuration object with the following properties:

### exceptions

type: `string[]`

default: `[]`

A list of objects which are allowed to be exceptions to the rule.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-extend-native": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-extend-native
```

:::

## References

* Rule Source
