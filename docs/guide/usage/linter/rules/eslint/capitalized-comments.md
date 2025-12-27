---
url: /docs/guide/usage/linter/rules/eslint/capitalized-comments.md
---
# eslint/capitalized-comments&#x20;

### What it does

Enforces or disallows capitalization of the first letter of a comment.

### Why is this bad?

Inconsistent capitalization of comments can make code harder to read.
This rule helps enforce a consistent style across the codebase.

### Examples

Examples of **incorrect** code for this rule with the default `"always"` option:

```js
// lowercase comment
/* lowercase block comment */
```

Examples of **correct** code for this rule with the default `"always"` option:

```js
// Capitalized comment
/* Capitalized block comment */
// 123 - comments starting with non-letters are ignored
```

## Configuration

This rule accepts a configuration object with the following properties:

### block

type: `object | null`

#### block.ignoreConsecutiveComments

type: `boolean | null`

#### block.ignoreInlineComments

type: `boolean | null`

#### block.ignorePattern

type: `string | null`

### ignoreConsecutiveComments

type: `boolean | null`

### ignoreInlineComments

type: `boolean | null`

### ignorePattern

type: `string | null`

### line

type: `object | null`

#### line.ignoreConsecutiveComments

type: `boolean | null`

#### line.ignoreInlineComments

type: `boolean | null`

#### line.ignorePattern

type: `string | null`

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "capitalized-comments": "error"
  }
}
```

```bash [CLI]
oxlint --deny capitalized-comments
```

:::

## References

* Rule Source
