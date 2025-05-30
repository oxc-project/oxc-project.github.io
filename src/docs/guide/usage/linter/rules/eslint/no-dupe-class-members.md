<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_dupe_class_members.rs`;
</script>

# eslint/no-dupe-class-members <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow duplicate class members

### Why is this bad?

If there are declarations of the same name in class members,
the last declaration overwrites other declarations silently. It can cause unexpected behaviors.

### Examples

Examples of **incorrect** code for this rule:

```javascript
class A {
  foo() {
    console.log("foo");
  }
  foo = 123;
}
let a = new A();
a.foo(); // Uncaught TypeError: a.foo is not a function
```

Examples of **correct** code for this rule:

```javascript
class A {
  foo() {
    console.log("foo");
  }
}
let a = new A();
a.foo();
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-dupe-class-members
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-dupe-class-members": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
