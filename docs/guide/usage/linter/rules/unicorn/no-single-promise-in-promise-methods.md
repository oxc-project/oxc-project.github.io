---
url: /docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.md
---
# unicorn/no-single-promise-in-promise-methods&#x20;

### What it does

Disallow passing single-element arrays to Promise methods

### Why is this bad?

Passing a single-element array to `Promise.all()`, `Promise.any()`, or
`Promise.race()` is likely a mistake.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function bad() {
  const foo = await Promise.all([promise]);
  const foo = await Promise.any([promise]);
  const foo = await Promise.race([promise]);
  const promise = Promise.all([nonPromise]);
}
```

Examples of **correct** code for this rule:

```javascript
async function good() {
  const foo = await promise;
  const promise = Promise.resolve(nonPromise);
  const foo = await Promise.all(promises);
  const foo = await Promise.any([promise, anotherPromise]);
  const [{ value: foo, reason: error }] = await Promise.allSettled([promise]);
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-single-promise-in-promise-methods": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-single-promise-in-promise-methods
```

:::

## References

* Rule Source
