<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_unused_private_class_members.rs`;
</script>

# eslint/no-unused-private-class-members <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

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

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-unused-private-class-members
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-unused-private-class-members": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
