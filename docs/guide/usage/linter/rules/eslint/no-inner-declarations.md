---
url: /docs/guide/usage/linter/rules/eslint/no-inner-declarations.md
---

### What it does

Disallow variable or function declarations in nested blocks

### Why is this bad?

A variable declaration is permitted anywhere a statement can go, even nested deeply inside other blocks.
This is often undesirable due to variable hoisting, and moving declarations to the root of the program or function body can increase clarity.
Note that block bindings (let, const) are not hoisted and therefore they are not affected by this rule.

### Examples

Examples of **incorrect** code for this rule:

```javascript
if (test) {
  function doSomethingElse() {}
}
```

Examples of **correct** code for this rule:

```javascript
function doSomethingElse() {}
if (test) {
  // your code here
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### blockScopedFunctions

type: `"allow" | "disallow"`

default: `null`

Controls whether function declarations in nested blocks are allowed in strict mode (ES6+ behavior).

#### `"allow"`

Allow function declarations in nested blocks in strict mode (ES6+ behavior).

#### `"disallow"`

Disallow function declarations in nested blocks regardless of strict mode.

### config

type: `"functions" | "both"`

default: `"functions"`

Determines what type of declarations to check.

#### `"functions"`

Disallows function declarations in nested blocks.

#### `"both"`

Disallows function and var declarations in nested blocks.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-inner-declarations": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-inner-declarations
```

:::

## References

* Rule Source
