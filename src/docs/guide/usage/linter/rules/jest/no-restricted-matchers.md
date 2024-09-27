<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/no-restricted-matchers <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Ban specific matchers & modifiers from being used, and can suggest alternatives.

### Example

```javascript
it("is false", () => {
  // if this has a modifier (i.e. `not.toBeFalsy`), it would be considered fine
  expect(a).toBeFalsy();
});

it("resolves", async () => {
  // all uses of this modifier are disallowed, regardless of matcher
  await expect(myPromise()).resolves.toBe(true);
});

describe("when an error happens", () => {
  it("does not upload the file", async () => {
    // all uses of this matcher are disallowed
    expect(uploadFileMock).not.toHaveBeenCalledWith("file.name");
  });
});
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jest/no_restricted_matchers.rs)