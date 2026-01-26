---
url: /docs/guide/usage/linter/rules/jest/padding-around-test-blocks.md
---

### What it does

This rule enforces a line of padding before and after 1 or more
`test`/`it` statements.

### Why is this bad?

Inconsistent formatting of code can make the code more difficult to read
and follow. This rule helps ensure that test blocks are visually
separated from the rest of the code, making them easier to identify while
looking through test files.

### Examples

Examples of **incorrect** code for this rule:

```js
const thing = 123;
test("foo", () => {});
test("bar", () => {});
```

```js
const thing = 123;
it("foo", () => {});
it("bar", () => {});
```

Examples of **correct** code for this rule:

```js
const thing = 123;

test("foo", () => {});

test("bar", () => {});
```

```js
const thing = 123;

it("foo", () => {});

it("bar", () => {});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/padding-around-test-blocks": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/padding-around-test-blocks --jest-plugin
```

:::

## References

* Rule Source
