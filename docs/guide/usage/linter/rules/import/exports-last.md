---
url: /docs/guide/usage/linter/rules/import/exports-last.md
---

### What it does

This rule enforces that all exports are declared at the bottom of the file.
This rule will report any export declarations that comes before any non-export statements.

### Why is this bad?

Exports scattered throughout the file can lead to poor code readability
and increase the cost of locating the export quickly

### Examples

Examples of **incorrect** code for this rule:

```js
const bool = true;
export const foo = "bar";
const str = "foo";
```

Examples of **correct** code for this rule:

```js
const arr = ["bar"];
export const bool = true;
export const str = "foo";
export function func() {
  console.log("Hello World");
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/exports-last": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/exports-last --import-plugin
```

:::

## References

* Rule Source
