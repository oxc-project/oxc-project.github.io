---
url: /docs/guide/usage/linter/rules/unicorn/throw-new-error.md
---
# unicorn/throw-new-error&#x20;

### What it does

This rule makes sure you always use `new` when throwing an error.

### Why is this bad?

In JavaScript, omitting `new` (e.g., `throw Error('message')`) is allowed,
but it does not properly initialize the error object. This can lead to missing
stack traces or incorrect prototype chains. Using `new` makes the intent clear,
ensures consistent behavior, and helps avoid subtle bugs.

### Examples

Examples of **incorrect** code for this rule:

```javascript
throw Error("🦄");
throw TypeError("unicorn");
throw lib.TypeError("unicorn");
```

Examples of **correct** code for this rule:

```javascript
throw new Error("🦄");
throw new TypeError("unicorn");
throw new lib.TypeError("unicorn");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/throw-new-error": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/throw-new-error
```

:::

## References

* Rule Source
