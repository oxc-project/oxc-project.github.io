---
url: /docs/guide/usage/linter/rules/unicorn/prefer-default-parameters.md
---
# unicorn/prefer-default-parameters&#x20;

### What it does

Instead of reassigning a function parameter, default parameters should be used. The `foo = foo || 123` statement evaluates to `123` when `foo` is falsy, possibly leading to confusing behavior, whereas default parameters only apply when passed an `undefined` value.
This rule only reports reassignments to literal values.

You should disable this rule if you want your functions to deal with `null` and other falsy values the same way as `undefined`.
Default parameters are exclusively applied [when `undefined` is received.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#passing_undefined_vs._other_falsy_values).
However, we recommend [moving away from `null`](https://github.com/sindresorhus/meta/discussions/7).

### Why is this bad?

Using default parameters makes it clear that a parameter has a default value, improving code readability and maintainability.

### Examples

Examples of **incorrect** code for this rule:

```js
function abc(foo) {
  foo = foo || "bar";
}

function abc(foo) {
  const bar = foo || "bar";
}
```

Examples of **correct** code for this rule:

```js
function abc(foo = "bar") {}

function abc(bar = "bar") {}

function abc(foo) {
  foo = foo || bar();
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-default-parameters": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-default-parameters
```

:::

## References

* Rule Source
