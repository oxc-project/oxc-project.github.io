<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# promise/prefer-await-to-callbacks <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

The rule encourages the use of `async/await` for handling asynchronous code
instead of traditional callback functions. `async/await`, introduced in ES2017,
provides a clearer and more concise syntax for writing asynchronous code,
making it easier to read and maintain.

### Why is this bad?

Using callbacks can lead to complex, nested structures known as "callback hell,"
which make code difficult to read and maintain. Additionally, error handling can
become cumbersome with callbacks, whereas `async/await` allows for more straightforward
try/catch blocks for managing errors.

### Examples

Examples of **incorrect** code for this rule:

```js
cb();
callback();
doSomething(arg, (err) => {});
function doSomethingElse(cb) {}
```

Examples of **correct** code for this rule:

```js
await doSomething(arg);
async function doSomethingElse() {}
function* generator() {
  yield yieldValue((err) => {});
}
eventEmitter.on("error", (err) => {});
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/2b14a6fb5403dfe5eff8dfade3baf7725b837052/crates/oxc_linter/src/rules/promise/prefer_await_to_callbacks.rs)