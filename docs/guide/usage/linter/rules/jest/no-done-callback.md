---
url: /docs/guide/usage/linter/rules/jest/no-done-callback.md
---
# jest/no-done-callback&#x20;

### What it does

This rule checks the function parameter of hooks & tests for use of the done argument, suggesting you return a promise instead.

### Why is this bad?

When calling asynchronous code in hooks and tests, jest needs to know when the asynchronous work is complete to progress the current run.
Originally the most common pattern to achieve this was to use callbacks:

```javascript
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
```

This can be very error-prone however, as it requires careful understanding of how assertions work in tests or otherwise tests won't behave as expected.

### Examples

Examples of **incorrect** code for this rule:

```javascript
beforeEach((done) => {
  // ...
});

test("myFunction()", (done) => {
  // ...
});

test("myFunction()", function (done) {
  // ...
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/no-done-callback": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/no-done-callback --jest-plugin
```

:::

## References

* Rule Source
