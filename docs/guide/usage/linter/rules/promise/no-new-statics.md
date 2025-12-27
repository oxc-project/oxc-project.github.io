---
url: /docs/guide/usage/linter/rules/promise/no-new-statics.md
---
# promise/no-new-statics&#x20;

### What it does

Disallows calling new on static `Promise` methods.

### Why is this bad?

Calling a static `Promise` method with `new` is invalid and will result
in a `TypeError` at runtime.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const x = new Promise.resolve(value);
```

Examples of **correct** code for this rule:

```javascript
const x = Promise.resolve(value);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/no-new-statics": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/no-new-statics --promise-plugin
```

:::

## References

* Rule Source
