---
url: /docs/guide/usage/linter/rules/promise/spec-only.md
---
# promise/spec-only&#x20;

### What it does

Disallow use of non-standard Promise static methods.

### Why is this bad?

Non-standard Promises may cost more maintenance work.

### Examples

Examples of **incorrect** code for this rule:

```js
Promise.done();
```

Examples of **correct** code for this rule:

```js
Promise.resolve();
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowedMethods

type: `string[]`

default: `null`

List of Promise static methods that are allowed to be used.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/spec-only": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/spec-only --promise-plugin
```

:::

## References

* Rule Source
