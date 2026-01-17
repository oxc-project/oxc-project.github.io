---
url: /docs/guide/usage/linter/rules/promise/prefer-await-to-then.md
---

### What it does

Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values

### Why is this bad?

Async/await syntax can be seen as more readable.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function foo() {
  hey.then((x) => {});
}
```

Examples of **correct** code for this rule:

```javascript
async function hi() {
  await thing();
}
```

### Example with strict mode

Examples of **incorrect** code with `{ strict: true }`:

```javascript
async function hi() {
  await thing().then((x) => {});
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### strict

type: `boolean`

default: `false`

If true, enforces the rule even after an `await` or `yield` expression.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/prefer-await-to-then": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/prefer-await-to-then --promise-plugin
```

:::

## References

* Rule Source
