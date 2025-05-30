<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

<script setup>
import { data } from '../version.data.js';
const source = `https://github.com/oxc-project/oxc/blob/${ data }/crates/oxc_linter/src/rules/eslint/no_async_promise_executor.rs`;
</script>

# eslint/no-async-promise-executor <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow using an async function as a Promise executor.

### Why is this bad?

The `new Promise` constructor accepts an executor function as an argument,
which has `resolve` and `reject` parameters that can be used to control the state of the
created Promise. For example:

```javascript
const result = new Promise(function executor(resolve, reject) {
  readFile("foo.txt", function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
```

The executor function can also be an `async function`. However, this is usually a mistake, for a few reasons:

- If an async executor function throws an error, the error will be lost and won’t cause
  the newly-constructed `Promise` to reject.This could make it difficult to debug and handle some errors.
- If a `Promise` executor function is using `await`, this is usually a sign that it is not
  actually necessary to use the new `Promise` constructor, or the scope of the new
  `Promise` constructor can be reduced.

### Examples

Examples of **incorrect** code for this rule:

```javascript
const foo = new Promise(async (resolve, reject) => {
  readFile("foo.txt", function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});
```

Examples of **correct** code for this rule:

```javascript
const foo = new Promise((resolve, reject) => {
  readFile("foo.txt", function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = Promise.resolve(foo);
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-async-promise-executor
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-async-promise-executor": "error"
  }
}
```

:::

## References

- <a v-bind:href="source" target="_blank" rel="noreferrer">Rule Source</a>
