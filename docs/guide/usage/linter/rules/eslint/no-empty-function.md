---
url: /docs/guide/usage/linter/rules/eslint/no-empty-function.md
---
# eslint/no-empty-function&#x20;

### What it does

Disallows the usages of empty functions

### Why is this bad?

Empty functions can reduce readability because readers need to guess whether it's
intentional or not. So writing a clear comment for empty functions is a good practice.

### Options

#### allow

`{ type: string[], default: [] }`

You may pass a list of allowed function kinds, which will allow functions of
these kinds to be empty.

Example:

```json
{
  "no-empty-function": ["error", { "allow": ["functions"] }]
}
```

`allow` accepts the following values:

* `"functions"`
* `"arrowFunctions"`
* `"generatorFunctions"`
* `"methods"`
* `"generatorMethods"`
* `"getters"`
* `"setters"`
* `"constructors"`
* `"privateConstructors"`
* `"protectedConstructors"`
* `"asyncFunctions"`
* `"asyncMethods"`
* `"decoratedFunctions"`
* `"overrideMethods"`

### Examples

Examples of **incorrect** code for this rule:

```typescript
function foo() {}

const bar = () => {};

class Foo {
  constructor();
  someMethod() {}
  set bar(value) {}
}
```

Examples of **correct** code for this rule:

```typescript
function foo() {
  // do nothing
}

function foo() {
  return;
}
const add = (a, b) => a + b;

class Foo {
  // constructor body is empty, but it declares a private property named
  // `_name`
  constructor(private _name: string) {}

  public get name() {
    return this._name;
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-empty-function": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-empty-function
```

:::

## References

* Rule Source
