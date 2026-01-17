---
url: /docs/guide/usage/linter/rules/eslint/for-direction.md
---

### What it does

Disallow `for` loops where the update clause moves the counter in the wrong
direction, preventing the loop from reaching its stop condition.

### Why is this bad?

A `for` loop with a stop condition that can never be reached will run
infinitely. While infinite loops can be intentional, they are usually written
as `while` loops. More often, an infinite `for` loop is a bug.

### Examples

Examples of **incorrect** code for this rule:

```js
/* for-direction: "error" */

for (var i = 0; i < 10; i--) {}

for (var i = 10; i >= 0; i++) {}

for (var i = 0; i > 10; i++) {}

for (var i = 0; 10 > i; i--) {}

const n = -2;
for (let i = 0; i < 10; i += n) {}
```

Examples of **correct** code for this rule:

```js
/* for-direction: "error" */

for (var i = 0; i < 10; i++) {}

for (var i = 0; 10 > i; i++) {
  // with counter "i" on the right
}

for (let i = 10; i >= 0; i += this.step) {
  // direction unknown
}

for (let i = MIN; i <= MAX; i -= 0) {
  // not increasing or decreasing
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "for-direction": "error"
  }
}
```

```bash [CLI]
oxlint --deny for-direction
```

:::

## References

* Rule Source
