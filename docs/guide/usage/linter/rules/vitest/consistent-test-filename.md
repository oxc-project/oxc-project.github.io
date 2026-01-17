---
url: /docs/guide/usage/linter/rules/vitest/consistent-test-filename.md
---

### What it does

This rule triggers an error when a file is considered a test file, but its name
does not match an expected filename format.

### Why is this bad?

Files that are tests but with an unexpected filename make it hard to distinguish between
source code files and test files.

### Examples

An example of an **incorrect** file path for this rule configured as `{"allTestPattern": "__tests__",  "pattern": ".*\.spec\.ts$"}`:

**tests**/2.ts

An example of a **correct** file path for this rule configured as `{"allTestPattern": "__tests__",  "pattern": ".*\.spec\.ts$"}`:

**tests**/2.spec.ts

## Configuration

This rule accepts a configuration object with the following properties:

### allTestPattern

type: `string`

Regex pattern to ensure we are linting only test filenames.
Decides whether a file is a testing file.

### pattern

type: `string`

Required regex to check if a test filename have a valid formart.
Pattern doesn't have a default value, you must provide one.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/consistent-test-filename": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/consistent-test-filename --vitest-plugin
```

:::

## References

* Rule Source
