---
url: /docs/guide/usage/linter/rules/eslint/no-sparse-arrays.md
---

### What it does

Disallow sparse arrays.

### Why is this bad?

Take the following example:

```javascript
const items = [, ,];
```

While the items array in this example has a length of 2, there are actually
no values in items\[0] or items\[1]. The fact that the array literal is
valid with only commas inside, coupled with the length being set and
actual item values not being set, make sparse arrays confusing for many
developers.

The confusion around sparse arrays is enough that it’s recommended to
avoid using them unless you are certain that they are useful in your
code.

### Examples

Examples of **incorrect** code for this rule:

```javascript
var items = [, ,];
```

```javascript
var colors = ["red", , "blue"];
```

Examples of **correct** code for this rule:

```javascript
var items = [];
```

// trailing comma (after the last element) is not a problem

```javascript
var colors = ["red", "blue"];
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-sparse-arrays": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-sparse-arrays
```

:::

## References

* Rule Source
