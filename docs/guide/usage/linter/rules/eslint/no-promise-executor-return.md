---
url: /docs/guide/usage/linter/rules/eslint/no-promise-executor-return.md
---
# eslint/no-promise-executor-return&#x20;

### What it does

Disallow returning values from Promise executor functions.

### Why is this bad?

The `new Promise` constructor accepts an executor function as an argument,
which has `resolve` and `reject` parameters that can be used to control the
state of the created Promise.

The return value of the executor is ignored. Returning a value from an executor
function is a possible error because the returned value cannot be used and it
doesn't affect the promise in any way.

### Examples

Examples of **incorrect** code for this rule:

```javascript
new Promise((resolve, reject) => {
  if (someCondition) {
    return defaultResult;
  }
  getSomething((err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

new Promise((resolve, reject) =>
  getSomething((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  }),
);

new Promise(() => {
  return 1;
});
```

Examples of **correct** code for this rule:

```javascript
new Promise((resolve, reject) => {
  if (someCondition) {
    resolve(defaultResult);
    return;
  }
  getSomething((err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

new Promise((resolve, reject) => {
  getSomething((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

new Promise((r) => {
  r(1);
});
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowVoid

type: `boolean`

default: `false`

If `true`, allows returning `void` expressions (e.g., `return void resolve()`).

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-promise-executor-return": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-promise-executor-return
```

:::

## References

* Rule Source
