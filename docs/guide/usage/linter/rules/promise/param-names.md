---
url: /docs/guide/usage/linter/rules/promise/param-names.md
---

### What it does

Enforce standard parameter names for Promise constructors.

### Why is this bad?

Ensures that new Promise() is instantiated with the parameter names resolve, reject to
avoid confusion with order such as reject, resolve. The Promise constructor uses the
RevealingConstructor pattern. Using the same parameter names as the language specification
makes code more uniform and easier to understand.

### Examples

Examples of **incorrect** code for this rule:

```javascript
new Promise(function (reject, resolve) {
  /* ... */
}); // incorrect order
new Promise(function (ok, fail) {
  /* ... */
}); // non-standard parameter names
```

Examples of **correct** code for this rule:

```javascript
new Promise(function (resolve, reject) {});
```

## Configuration

This rule accepts a configuration object with the following properties:

### rejectPattern

type: `string | null`

Regex pattern used to validate the `reject` parameter name. If provided, this pattern
is used instead of the default `^_?reject$` check.

### resolvePattern

type: `string | null`

Regex pattern used to validate the `resolve` parameter name. If provided, this pattern
is used instead of the default `^_?resolve$` check.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["promise"],
  "rules": {
    "promise/param-names": "error"
  }
}
```

```bash [CLI]
oxlint --deny promise/param-names --promise-plugin
```

:::

## References

* Rule Source
