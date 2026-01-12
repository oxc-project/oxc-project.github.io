---
url: /docs/guide/usage/linter/rules/vitest/hoisted-apis-on-top.md
---
# vitest/hoisted-apis-on-top&#x20;

### What it does

Enforce hoisted APIs to be on top of the file.

### Why is this bad?

Some Vitest APIs are hoisted automatically during the transform process. Using this APIs
in look like runtime code can lead to unexpected results running tests.

### Examples

Examples of **incorrect** code for this rule:

```js
if (condition) {
  vi.mock("some-module", () => {});
}
```

```js
if (condition) {
  vi.unmock("some-module", () => {});
}
```

```js
if (condition) {
  vi.hoisted(() => {});
}
```

```js
describe("suite", () => {
  it("test", async () => {
    vi.mock("some-module", () => {});

    const sm = await import("some-module");
  });
});
```

Examples of **correct** code for this rule:

```js
if (condition) {
  vi.doMock("some-module", () => {});
}
```

```js
vi.mock("some-module", () => {});
if (condition) {
}
```

```js
vi.unmock("some-module", () => {});
if (condition) {
}
```

```js
vi.hoisted(() => {});
if (condition) {
}
```

```js
vi.mock("some-module", () => {});

describe("suite", () => {
  it("test", async () => {
    const sm = await import("some-module");
  });
});
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "plugins": ["vitest"],
  "rules": {
    "vitest/hoisted-apis-on-top": "error"
  }
}
```

```bash [CLI]
oxlint --deny vitest/hoisted-apis-on-top --vitest-plugin
```

:::

## References

* Rule Source
