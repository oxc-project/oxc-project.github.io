---
url: /docs/guide/usage/linter/rules/oxc/branches-sharing-code.md
---
# oxc/branches-sharing-code&#x20;

### What it does

Checks if the `if` and `else` blocks contain shared code that can be moved out of the blocks.

### Why is this bad?

Duplicate code is less maintainable. Extracting common code from branches makes the code more DRY (Don't Repeat Yourself)
and easier to maintain.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (condition) {
  console.log("Hello");
  return 13;
} else {
  console.log("Hello");
  return 42;
}

if (condition) {
  doSomething();
  cleanup();
} else {
  doSomethingElse();
  cleanup();
}
```

Examples of **correct** code for this rule:

```javascript
console.log("Hello");
if (condition) {
  return 13;
} else {
  return 42;
}

if (condition) {
  doSomething();
} else {
  doSomethingElse();
}
cleanup();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/branches-sharing-code": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/branches-sharing-code
```

:::

## References

* Rule Source
