---
url: /docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.md
---

### What it does

Disallow unused private class members

### Why is this bad?

Private class members that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such class members take up space in the code and can lead to confusion by readers.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class A {
  #unusedMember = 5;
}

class B {
  #usedOnlyInWrite = 5;
  method() {
    this.#usedOnlyInWrite = 42;
  }
}

class C {
  #usedOnlyToUpdateItself = 5;
  method() {
    this.#usedOnlyToUpdateItself++;
  }
}

class D {
  #unusedMethod() {}
}

class E {
  get #unusedAccessor() {}
  set #unusedAccessor(value) {}
}
```

Examples of **correct** code for this rule:

```javascript
class A {
  #usedMember = 42;
  method() {
    return this.#usedMember;
  }
}

class B {
  #usedMethod() {
    return 42;
  }
  anotherMethod() {
    return this.#usedMethod();
  }
}

class C {
  get #usedAccessor() {}
  set #usedAccessor(value) {}

  method() {
    this.#usedAccessor = 42;
  }
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unused-private-class-members": "error"
  }
}
```

```bash [CLI]
oxlint --deny no-unused-private-class-members
```

:::

## References

* Rule Source
