---
url: /docs/guide/usage/linter/rules/unicorn/prefer-keyboard-event-key.md
---

### What it does

Enforces the use of [`KeyboardEvent#key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) over [`KeyboardEvent#keyCode`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) which is deprecated.
The `.key` property is also more semantic and readable.

### Why is this bad?

The `keyCode`, `which`, and `charCode` properties are deprecated and should be avoided in favor of the `key` property.

### Examples

Examples of **incorrect** code for this rule:

```js
window.addEventListener("keydown", (event) => {
  if (event.keyCode === 8) {
    console.log("Backspace was pressed");
  }
});

window.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
});
```

Examples of **correct** code for this rule:

```js
window.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    console.log("Backspace was pressed");
  }
});

window.addEventListener("click", (event) => {
  console.log(event.key);
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-keyboard-event-key": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-keyboard-event-key
```

:::

## References

* Rule Source
