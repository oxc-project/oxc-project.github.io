---
url: /docs/guide/usage/linter/rules/import/prefer-default-export.md
---
# import/prefer-default-export&#x20;

### What it does

In exporting files, this rule checks if there is default export or not.

### Why is this bad?

This rule exists to standardize module exports by preferring default exports
when a module only has one export, enhancing readability, maintainability.

### Examples

Examples of **incorrect** code for the `{ target: "single" }` option:

```js
export const foo = "foo";
```

Examples of **correct** code for the `{ target: "single" }` option:

```js
export const foo = "foo";
const bar = "bar";
export default bar;
```

Examples of **incorrect** code for the `{ target: "any" }` option:

```js
export const foo = "foo";
export const baz = "baz";
```

Examples of **correct** code for the `{ target: "any" }` option:

```js
export default function bar() {}
```

## Configuration

This rule accepts a configuration object with the following properties:

### target

type: `"single" | "any"`

default: `"single"`

Configuration option to specify the target type for preferring default exports.

* `"single"`: Prefer default export when there is only one export in the module.
* `"any"`: Prefer default export in any module that has exports.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/prefer-default-export": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/prefer-default-export --import-plugin
```

:::

## References

* Rule Source
