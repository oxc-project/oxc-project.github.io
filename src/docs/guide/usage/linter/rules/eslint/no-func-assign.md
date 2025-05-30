<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_func_assign.rs`;
</script>

# eslint/no-func-assign <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow reassigning `function` declarations

### Why is this bad?

Overwriting/reassigning a function written as a FunctionDeclaration is often indicative of
a mistake or issue.

### Examples

Examples of **incorrect** code for this rule:

```javascript
function foo() {}
foo = bar;
```

```javascript
function foo() {
  foo = bar;
}
```

```javascript
let a = function hello() {
  hello = 123;
};
```

Examples of **correct** code for this rule:

```javascript
let foo = function() {};
foo = bar;
```

```javascript
function baz(baz) { // `baz` is shadowed.
  baz = bar;
}
```

```
function qux() {
  const qux = bar;  // `qux` is shadowed.
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-func-assign
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-func-assign": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
