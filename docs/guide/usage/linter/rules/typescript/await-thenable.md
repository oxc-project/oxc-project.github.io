---
url: /docs/guide/usage/linter/rules/typescript/await-thenable.md
---
# typescript/await-thenable&#x20;

### What it does

This rule disallows awaiting a value that is not a Thenable.

### Why is this bad?

While it is valid JavaScript to await a non-Promise-like value (it will resolve immediately), this practice can be confusing for readers who are not aware of this behavior. It can also be a sign of a programmer error, such as forgetting to add parentheses to call a function that returns a Promise.

### Examples

Examples of **incorrect** code for this rule:

```
await 12;
await (() => {});

// non-Promise values
await Math.random;
await { then() {} };

// this is not a Promise - it's a function that returns a Promise
declare const getPromise: () => Promise<string>;
await getPromise;
```

Examples of **correct** code for this rule:

```
await Promise.resolve("value");
await Promise.reject(new Error());

// Promise-like values
await {
  then(onfulfilled, onrejected) {
    onfulfilled("value");
  },
};

// this is a Promise - produced by calling a function
declare const getPromise: () => Promise<string>;
await getPromise();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/await-thenable": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/await-thenable
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
