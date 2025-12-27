---
url: /docs/guide/usage/linter/rules/unicorn/no-thenable.md
---
# unicorn/no-thenable&#x20;

### What it does

Disallow `then` property

### Why is this bad?

If an object is defined as "thenable", once it's accidentally
used in an await expression, it may cause problems:

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function example() {
  const foo = {
    unicorn: 1,
    then() {},
  };

  const { unicorn } = await foo;

  console.log("after"); //<- This will never execute
}
```

Examples of **correct** code for this rule:

```javascript
async function example() {
  const foo = {
    unicorn: 1,
    bar() {},
  };

  const { unicorn } = await foo;

  console.log("after");
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-thenable": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-thenable
```

:::

## References

* Rule Source
