---
url: /docs/guide/usage/linter/rules/typescript/no-this-alias.md
---

### What it does

Disallow aliasing of `this`.

### Why is this bad?

Assigning a variable to `this` instead of properly using
arrow lambdas may be a symptom of pre-ES2015 practices or not managing scope well.

### Examples

Examples of **incorrect** code for this rule:

```js
const self = this;

setTimeout(function () {
  self.doWork();
});
```

Examples of **correct** code for this rule:

```js
setTimeout(() => {
  this.doWork();
});
```

## Configuration

This rule accepts a configuration object with the following properties:

### allowDestructuring

type: `boolean`

default: `true`

Whether to allow destructuring of `this` to local variables.

### allowedNames

type: `string[]`

default: `[]`

An array of variable names that are allowed to alias `this`.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "typescript/no-this-alias": "error"
  }
}
```

```bash [CLI]
oxlint --deny typescript/no-this-alias
```

:::

## References

* Rule Source
