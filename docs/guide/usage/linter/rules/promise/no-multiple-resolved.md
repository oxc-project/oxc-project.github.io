---
url: /docs/guide/usage/linter/rules/promise/no-multiple-resolved.md
---
# promise/no-multiple-resolved&#x20;

### What it does

This rule warns of paths that resolve multiple times in executor functions that Promise constructors.

### Why is this bad?

Multiple resolve/reject calls:

* Violate the Promise/A+ specification
* Have no effect on the Promise's behavior
* Make the code's intent unclear
* May indicate logical errors in the implementation

### Examples

Examples of **incorrect** code for this rule:

```javascript
new Promise((resolve, reject) => {
  fn((error, value) => {
    if (error) {
      reject(error);
    }

    resolve(value); // Both `reject` and `resolve` may be called.
  });
});
```

Examples of **correct** code for this rule:

```javascript
new Promise((resolve, reject) => {
  fn((error, value) => {
    if (error) {
      reject(error);
    } else {
      resolve(value);
    }
  });
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/no-multiple-resolved": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/no-multiple-resolved --promise-plugin
```

:::

## References

* Rule Source
