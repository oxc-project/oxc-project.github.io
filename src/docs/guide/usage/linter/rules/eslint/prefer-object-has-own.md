<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/prefer_object_has_own.rs`;
</script>

# eslint/prefer-object-has-own <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule for some violations.
</Alert>
</div>

### What it does

Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`

### Why is this bad?

It is very common to write code like:

```javascript
if (Object.prototype.hasOwnProperty.call(object, "foo")) {
  console.log("has property foo");
}
```

This is a common practice because methods on Object.prototype can sometimes be unavailable or redefined (see the no-prototype-builtins rule).
Introduced in ES2022, Object.hasOwn() is a shorter alternative to Object.prototype.hasOwnProperty.call():

```javascript
if (Object.hasOwn(object, "foo")) {
  console.log("has property foo");
}
```

### Examples

Examples of **incorrect** code for this rule:

```js
Object.prototype.hasOwnProperty.call(obj, "a");
Object.hasOwnProperty.call(obj, "a");
({}).hasOwnProperty.call(obj, "a");
const hasProperty = Object.prototype.hasOwnProperty.call(object, property);
```

Examples of **correct** code for this rule:

```js
Object.hasOwn(obj, "a");
const hasProperty = Object.hasOwn(object, property);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny prefer-object-has-own
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "prefer-object-has-own": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
