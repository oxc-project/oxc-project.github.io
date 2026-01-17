---
url: /docs/guide/usage/linter/rules/jest/valid-title.md
---

### What it does

Checks that the titles of Jest and Vitest blocks are valid.

Titles must be:

* not empty,
* strings,
* not prefixed with their block name,
* have no leading or trailing spaces.

### Why is this bad?

Titles that are not valid can be misleading and make it harder to understand the purpose of the test.

### Examples

Examples of **incorrect** code for this rule:

```javascript
describe("", () => {});
describe("foo", () => {
  it("", () => {});
});
it("", () => {});
test("", () => {});
xdescribe("", () => {});
xit("", () => {});
xtest("", () => {});
```

Examples of **correct** code for this rule:

```javascript
describe("foo", () => {});
it("bar", () => {});
test("baz", () => {});
```

### Options

```typescript
interface Options {
  ignoreSpaces?: boolean;
  ignoreTypeOfTestName?: boolean;
  ignoreTypeOfDescribeName?: boolean;
  allowArguments?: boolean;
  disallowedWords?: string[];
  mustNotMatch?: Partial<Record<"describe" | "test" | "it", string>> | string;
  mustMatch?: Partial<Record<"describe" | "test" | "it", string>> | string;
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["jest"],
  "rules": {
    "jest/valid-title": "error"
  }
}
```

```bash [CLI]
oxlint --deny jest/valid-title --jest-plugin
```

:::

## References

* Rule Source
