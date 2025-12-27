---
url: /docs/guide/usage/linter/rules/eslint/no-unassigned-vars.md
---
# eslint/no-unassigned-vars&#x20;

### What it does

Disallow let or var variables that are read but never assigned

### Why is this bad?

This rule flags let or var declarations that are never assigned a value but are still read or used in the code.
Since these variables will always be undefined, their usage is likely a programming mistake.

### Examples

Examples of **incorrect** code for this rule:

```js
let status;
if (status === "ready") {
  console.log("Ready!");
}
```

Examples of **correct** code for this rule:

```js
let message = "hello";
console.log(message);

let user;
user = getUser();
console.log(user.name);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unassigned-vars": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unassigned-vars
```

:::

## References

* Rule Source
