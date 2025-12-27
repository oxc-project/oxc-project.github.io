---
url: /docs/guide/usage/linter/rules/eslint/sort-keys.md
---
# eslint/sort-keys&#x20;

### What it does

When declaring multiple properties, sorting property names alphabetically makes it easier
to find and/or diff necessary properties at a later time.

### Why is this bad?

Unsorted property keys can make the code harder to read and maintain.

### Examples

Examples of **incorrect** code for this rule:

```js
let myObj = {
  c: 1,
  a: 2,
};
```

Examples of **correct** code for this rule:

```js
let myObj = {
  a: 2,
  c: 1,
};
```

## Configuration

### The 1st option

type: `"desc" | "asc"`

Sorting order for keys. Accepts "asc" for ascending or "desc" for descending.

### The 2nd option

This option is an object with the following properties:

#### allowLineSeparatedGroups

type: `boolean`

default: `false`

When true, groups of properties separated by a blank line are sorted independently.

#### caseSensitive

type: `boolean`

default: `true`

Whether the sort comparison is case-sensitive (A < a when true).

#### minKeys

type: `integer`

default: `2`

Minimum number of properties required in an object before sorting is enforced.

#### natural

type: `boolean`

default: `false`

Use natural sort order so that, for example, "a2" comes before "a10".

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "sort-keys": "error"
  }
}
```

```bash [CLI]
oxlint --deny sort-keys
```

:::

## References

* Rule Source
