---
url: /docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.md
---

### What it does

Checks for comparisons between object and array literals.

### Why is this bad?

Comparing a variable to an object or array literal will always return false as object and array literals are never equal to each other.

If you want to check if an object or array is empty, use `Object.entries()` or `Object.keys()` and their lengths.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (x === {}) {
}
if (arr !== []) {
}
```

Examples of **correct** code for this rule:

```javascript
if (typeof x === "object" && Object.keys(x).length === 0) {
}
if (Array.isArray(x) && x.length === 0) {
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "oxc/bad-object-literal-comparison": "error"
  }
}
```

```bash [CLI]
oxlint --deny oxc/bad-object-literal-comparison
```

:::

## References

* Rule Source
