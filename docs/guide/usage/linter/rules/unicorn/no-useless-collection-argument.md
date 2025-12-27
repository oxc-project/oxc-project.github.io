---
url: /docs/guide/usage/linter/rules/unicorn/no-useless-collection-argument.md
---
# unicorn/no-useless-collection-argument&#x20;

### What it does

Disallow useless values or fallbacks in Set, Map, WeakSet, or WeakMap

### Why is this bad?

It's unnecessary to pass an empty array or string when constructing a Set, Map, WeakSet, or WeakMap, since they accept nullish values.
It's also unnecessary to provide a fallback for possible nullish values.

### Examples

Examples of **incorrect** code for this rule:

```js
const set = new Set([]);
const set = new Set("");
```

Examples of **correct** code for this rule:

```js
const set = new Set();
```

Examples of **incorrect** code for this rule:

```js
const set = new Set(foo ?? []);
const set = new Set(foo ?? "");
```

Examples of **correct** code for this rule:

```js
const set = new Set(foo);
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-useless-collection-argument": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-useless-collection-argument
```

:::

## References

* Rule Source
