<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# promise/catch-or-return <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Ensure that each time a `then()` is applied to a promise, a `catch()`
must be applied as well. Exceptions are made for promises returned from
a function.

### Why is this bad?

Not catching errors in a promise can cause hard to debug problems or
missing handling of error conditions. In the worst case, unhandled
promise rejections can cause your application to crash.

### Examples

Examples of **incorrect** code for this rule:

```javascript
myPromise.then(doSomething);
myPromise.then(doSomething, catchErrors); // catch() may be a little better
```

Examples of **correct** code for this rule:

```javascript
myPromise.then(doSomething).catch(errors);
function doSomethingElse() {
  return myPromise.then(doSomething);
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/fd0935cfcd660901d612b9b146bc136d40d2f02f/crates/oxc_linter/src/rules/promise/catch_or_return.rs)
