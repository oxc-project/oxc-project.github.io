---
url: /docs/guide/usage/linter/rules/eslint/no-empty-pattern.md
---

### What it does

Disallow empty destructuring patterns.

### Why is this bad?

When using destructuring, it’s possible to create a pattern that has no effect.
This happens when empty curly braces are used to the right of
an embedded object destructuring pattern, such as:

```JavaScript
// doesn't create any variables
var {a: {}} = foo;
```

In this code, no new variables are created because a is just a location helper
while the `{}` is expected to contain the variables to create, such as:

```JavaScript
// creates variable b
var {a: { b }} = foo;
```

In many cases, the empty object pattern is a mistake
where the author intended to use a default value instead, such as:

```JavaScript
// creates variable a
var {a = {}} = foo;
```

The difference between these two patterns is subtle,
especially because the problematic empty pattern looks just like an object literal.

### Examples of **incorrect** code for this rule:

```JavaScript
var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}
```

### Examples of **correct** code for this rule:

```JavaScript
var {a = {}} = foo;
var {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-empty-pattern": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-empty-pattern
```

:::

## References

* Rule Source
