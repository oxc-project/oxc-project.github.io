<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/guard_for_in.rs`;
</script>

# eslint/guard-for-in <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Require for-in loops to include an if statement.

### Why is this bad?

Looping over objects with a `for in` loop will include properties that are inherited through
the prototype chain. Using a `for in` loop without filtering the results in the loop can
lead to unexpected items in your for loop which can then lead to unexpected behaviour.

### Examples

Examples of **incorrect** code for this rule:

```javascript
for (key in foo) {
  doSomething(key);
}
```

Examples of **correct** code for this rule:

```javascript
for (key in foo) {
  if (Object.hasOwn(foo, key)) {
    doSomething(key);
  }
}
```

```javascript
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}
```

```javascript
for (key in foo) {
  if ({}.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny guard-for-in
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "guard-for-in": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
