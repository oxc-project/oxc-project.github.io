---
url: /docs/guide/usage/linter/rules/eslint/accessor-pairs.md
---
# eslint/accessor-pairs&#x20;

### What it does

Enforces getter/setter pairs in objects and classes.

### Why is this bad?

It's a common mistake in JavaScript to create an object with just a setter
for a property but never have a corresponding getter defined for it.
Without a getter, you cannot read the property, so it ends up not being used.

### Examples

Examples of **incorrect** code for this rule:

```js
var o = {
  set a(value) {
    this.val = value;
  },
};

class C {
  set a(value) {
    this.val = value;
  }
}
```

Examples of **correct** code for this rule:

```js
var o = {
  set a(value) {
    this.val = value;
  },
  get a() {
    return this.val;
  },
};

class C {
  set a(value) {
    this.val = value;
  }
  get a() {
    return this.val;
  }
}
```

## Configuration

This rule accepts a configuration object with the following properties:

### enforceForClassMembers

type: `boolean`

default: `true`

Enforce the rule for class members.

### enforceForTSTypes

type: `boolean`

default: `false`

Enforce the rule for TypeScript interfaces and types.

### getWithoutSet

type: `boolean`

default: `false`

Report a getter without a setter.

### setWithoutGet

type: `boolean`

default: `true`

Report a setter without a getter.

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "accessor-pairs": "error"
  }
}
```

```bash [CLI]
oxlint --deny accessor-pairs
```

:::

## References

* Rule Source
