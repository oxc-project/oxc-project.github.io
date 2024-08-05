<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/no-conditional-expect

<div class="rule-meta">
</div>

### What it does

This rule prevents the use of expect in conditional blocks, such as ifs & catch(s).
This includes using expect in callbacks to functions named catch, which are assumed to be promises.

### Why is this bad?

Jest only considers a test to have failed if it throws an error, meaning if calls to assertion functions like expect occur in conditional code such as a catch statement, tests can end up passing but not actually test anything.
Additionally, conditionals tend to make tests more brittle and complex, as they increase the amount of mental thinking needed to understand what is actually being tested.

### Example

```javascript
it('foo', () => {
  doTest && expect(1).toBe(2);
});

it('bar', () => {
  if (!skipTest) {
    expect(1).toEqual(2);
  }
});

it('throws an error', async () => {
```

This rule is compatible with [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md),
to use it, add the following configuration to your `.eslintrc.json`:

```json
{
  "rules": {
    "vitest/no-conditional-expect": "error"
  }
}
```