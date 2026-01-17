---
url: /docs/guide/usage/linter/rules/jest/padding-around-test-blocks.md
---

### What it does

This rule enforces a line of padding before and after 1 or more test/it statements

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
