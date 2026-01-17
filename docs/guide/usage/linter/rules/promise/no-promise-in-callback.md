---
url: /docs/guide/usage/linter/rules/promise/no-promise-in-callback.md
---

### What it does

Disallows the use of Promises within error-first callback functions.

### Why is this bad?

Mixing Promises and callbacks can lead to unclear and inconsistent code.
Promises and callbacks are different patterns for handling asynchronous code.
Mixing them makes the logic flow harder to follow and complicates error handling,
as callbacks rely on an error-first pattern, while Promises use `catch`.

### Examples

Examples of **incorrect** code for this rule:

```js
doSomething((err, val) => {
  if (err) console.error(err);
  else doSomethingElse(val).then(console.log);
});
```

Examples of **correct** code for this rule:

```js
promisify(doSomething)().then(doSomethingElse).then(console.log).catch(console.error);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/no-promise-in-callback": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/no-promise-in-callback --promise-plugin
```

:::

## References

* Rule Source
