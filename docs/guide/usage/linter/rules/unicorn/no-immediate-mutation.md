---
url: /docs/guide/usage/linter/rules/unicorn/no-immediate-mutation.md
---

### What it does

Disallows mutating a variable immediately after initialization.

### Why is this bad?

When you initialize a variable and immediately mutate it, it's cleaner to include
the mutation in the initialization. This makes the code more readable and reduces
the number of statements.

### Examples

Examples of **incorrect** code for this rule:

```js
const array = [1, 2];
array.push(3);

const object = { foo: 1 };
object.bar = 2;

const set = new Set([1, 2]);
set.add(3);

const map = new Map([["foo", 1]]);
map.set("bar", 2);
```

Examples of **correct** code for this rule:

```js
const array = [1, 2, 3];

const object = { foo: 1, bar: 2 };

const set = new Set([1, 2, 3]);

const map = new Map([
  ["foo", 1],
  ["bar", 2],
]);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-immediate-mutation": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-immediate-mutation
```

:::

## References

* Rule Source
