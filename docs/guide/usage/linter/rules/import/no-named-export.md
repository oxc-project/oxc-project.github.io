---
url: /docs/guide/usage/linter/rules/import/no-named-export.md
---
# import/no-named-export&#x20;

### What it does

Prohibit named exports.

### Why is this bad?

Named exports require strict identifier matching and can lead to fragile imports,
while default exports enforce a single, consistent module entry point.

### Examples

Examples of **incorrect** code for this rule:

```js
export const foo = "foo";

const bar = "bar";
export { bar };
```

Examples of **correct** code for this rule:

```js
export default 'bar';

const foo = 'foo';
export { foo as default }
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["import"],
  "rules": {
    "import/no-named-export": "error"
  }
}
```

```bash [CLI]
oxlint --deny import/no-named-export --import-plugin
```

:::

## References

* Rule Source
