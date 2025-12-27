---
url: /docs/guide/usage/linter/rules/unicorn/catch-error-name.md
---
# unicorn/catch-error-name&#x20;

### What it does

This rule enforces consistent and descriptive naming for error variables
in `catch` statements, preventing the use of vague names like `badName`
or `_` when the error is used.

### Why is this bad?

Using non-descriptive names like `badName` or `_` makes the code harder
to read and understand, especially when debugging. It's important to use
clear, consistent names to represent errors.

### Examples

Examples of **incorrect** code for this rule:

```javascript
try {
} catch (badName) {}

// `_` is not allowed if it's used
try {
} catch (_) {
  console.log(_);
}

promise.catch((badName) => {});

promise.then(undefined, (badName) => {});
```

Examples of **correct** code for this rule:

```javascript
try {
} catch (error) {}

// `_` is allowed if it's not used
try {
} catch (_) {
  console.log(123);
}

promise.catch((error) => {});

promise.then(undefined, (error) => {});
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignore

type: `string[]`

A list of patterns to ignore when checking `catch` variable names. The pattern
can be a string or regular expression.

### name

type: `string`

default: `"error"`

The name to use for error variables in `catch` blocks. You can customize it
to something other than `'error'` (e.g., `'exception'`).

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/catch-error-name": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/catch-error-name
```

:::

## References

* Rule Source
