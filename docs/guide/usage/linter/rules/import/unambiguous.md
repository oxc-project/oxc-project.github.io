---
url: /docs/guide/usage/linter/rules/import/unambiguous.md
---

### What it does

Warn if a `module` could be mistakenly parsed as a `script` instead of
as a pure [ES module](https://nodejs.org/api/esm.html#modules-ecmascript-modules).

### Why is this bad?

For ESM-only environments, ambiguous files may lead to unexpected results and problems.

### Examples

Examples of **incorrect** code for this rule:

```js
function x() {}

(function x() {
  return 42;
})();
```

Examples of **correct** code for this rule:

```js
import "foo";
function x() {
  return 42;
}

export function x() {
  return 42;
}

(function x() {
  return 42;
})();
export {}; // simple way to mark side-effects-only file as 'module' without any imports/exports
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/unambiguous": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/unambiguous --import-plugin
```

:::

## References

* Rule Source
