---
url: /docs/guide/usage/linter/rules/eslint/no-alert.md
---

### What it does

Disallow the use of alert, confirm, and prompt

### Why is this bad?

JavaScript’s alert, confirm, and prompt functions are widely considered to be obtrusive as UI elements and should be replaced by a more appropriate custom UI implementation.
Furthermore, alert is often used while debugging code, which should be removed before deployment to production.

### Examples

Examples of **incorrect** code for this rule:

```js
alert("here!");

confirm("Are you sure?");

prompt("What's your name?", "John Doe");
```

Examples of **correct** code for this rule:

```js
customAlert("Something happened!");

customConfirm("Are you sure?");

customPrompt("Who are you?");

function foo() {
  var alert = myCustomLib.customAlert;
  alert();
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-alert": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-alert
```

:::

## References

* Rule Source
