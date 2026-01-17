---
url: /docs/guide/usage/linter/rules/eslint/no-inline-comments.md
---

### What it does

Disallows comments on the same line as code.

### Why is this bad?

Comments placed at the end of a line of code can make code harder to read.
They can easily be missed when scanning vertically, and they make lines longer.
Moving comments to their own lines makes them more prominent and reduces line length.

### Examples

Examples of **incorrect** code for this rule:

```js
var a = 1; // inline comment
var b = 2; /* another inline comment */
```

Examples of **correct** code for this rule:

```js
// comment on its own line
var a = 1;

/* block comment on its own line */
var b = 2;
```

## Configuration

This rule accepts a configuration object with the following properties:

### ignorePattern

type: `string | null`

A regex pattern to ignore certain inline comments.

Comments matching this pattern will not be reported.

Example configuration:

```json
{
  "no-inline-comments": ["error", { "ignorePattern": "webpackChunkName" }]
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-inline-comments": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-inline-comments
```

:::

## References

* Rule Source
