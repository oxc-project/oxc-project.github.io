---
url: /docs/guide/usage/linter/rules/typescript/no-implied-eval.md
---
# typescript/no-implied-eval&#x20;

### What it does

This rule disallows the use of eval-like methods.

### Why is this bad?

It's considered a good practice to avoid using eval() in JavaScript. There are security and performance implications involved with doing so, which is why many linters recommend disallowing eval(). However, there are some other ways to pass a string and have it interpreted as JavaScript code that have similar concerns.

### Examples

Examples of **incorrect** code for this rule:

```ts
setTimeout('alert("Hi!");', 100);

setInterval('alert("Hi!");', 100);

setImmediate('alert("Hi!")');

window.setTimeout("count = 5", 10);

window.setInterval("foo = bar", 10);

const fn = new Function("a", "b", "return a + b");
```

Examples of **correct** code for this rule:

```ts
setTimeout(() => {
  alert("Hi!");
}, 100);

setInterval(() => {
  alert("Hi!");
}, 100);

setImmediate(() => {
  alert("Hi!");
});

const fn = (a: number, b: number) => a + b;
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-implied-eval": "error"
  }
}
```

```bash [CLI]
oxlint --type-aware --deny typescript/no-implied-eval
```

:::

## References

* Rule Source
* Rule Source (tsgolint)
