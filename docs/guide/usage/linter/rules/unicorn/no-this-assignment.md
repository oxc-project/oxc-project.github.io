---
url: /docs/guide/usage/linter/rules/unicorn/no-this-assignment.md
---
# unicorn/no-this-assignment&#x20;

### What it does

Disallow assigning `this` to a variable.

### Why is this bad?

Assigning `this` to a variable is unnecessary and confusing.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = this;
class Bar {
  method() {
    foo.baz();
  }
}

new Bar().method();
```

Examples of **correct** code for this rule:

```javascript
class Bar {
  constructor(fooInstance) {
    this.fooInstance = fooInstance;
  }
  method() {
    this.fooInstance.baz();
  }
}

new Bar(this).method();
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/no-this-assignment": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/no-this-assignment
```

:::

## References

* Rule Source
