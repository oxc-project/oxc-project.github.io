---
url: /docs/guide/usage/linter/rules/eslint/no-cond-assign.md
---

### What it does

Disallow assignment operators in conditional expressions

### Why is this bad?

In conditional statements, it is very easy to mistype a comparison
operator (such as `==`) as an assignment operator (such as `=`).

There are valid reasons to use assignment operators in conditional
statements. However, it can be difficult to tell whether a specific
assignment was intentional.

### Examples

Examples of **incorrect** code for this rule:

```js
// Check the user's job title
if ((user.jobTitle = "manager")) {
  // user.jobTitle is now incorrect
}
```

Examples of **correct** code for this rule:

```js
// Check the user's job title
if (user.jobTitle === "manager") {
  // correctly compared `jobTitle`
}
```

## Configuration

This rule accepts one of the following string values:

### `"except-parens"`

Allow assignments in conditional expressions only if they are
enclosed in parentheses.

### `"always"`

Disallow all assignments in conditional expressions.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-cond-assign": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-cond-assign
```

:::

## References

* Rule Source
