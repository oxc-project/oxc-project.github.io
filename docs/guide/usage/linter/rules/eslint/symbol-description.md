---
url: /docs/guide/usage/linter/rules/eslint/symbol-description.md
---
# eslint/symbol-description&#x20;

### What it does

Require symbol descriptions.

### Why is this bad?

The Symbol function may have an optional description.

```js
var foo = Symbol("some description");

var someString = "some description";
var bar = Symbol(someString);
```

Using `description` promotes easier debugging: when a symbol is logged the description is used:

```js
var foo = Symbol("some description");

console.log(foo);
// prints - Symbol(some description)
```

### Examples

Examples of **incorrect** code for this rule:

```javascript
var foo = Symbol();
```

Examples of **correct** code for this rule:

```javascript
var foo = Symbol("some description");
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "symbol-description": "error"
  }
}
```

```bash [CLI]
oxlint --deny symbol-description
```

:::

## References

* Rule Source
