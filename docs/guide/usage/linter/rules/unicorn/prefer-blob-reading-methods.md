---
url: /docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.md
---
# unicorn/prefer-blob-reading-methods&#x20;

### What it does

Recommends using `Blob#text()` and `Blob#arrayBuffer()` over `FileReader#readAsText()` and `FileReader#readAsArrayBuffer()`.

### Why is this bad?

`FileReader` predates promises, and the newer [`Blob#arrayBuffer()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer) and [`Blob#text()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text) methods are much cleaner and easier to use.

### Examples

Examples of **incorrect** code for this rule:

```javascript
async function bad() {
  const arrayBuffer = await new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      resolve(fileReader.result);
    });
    fileReader.addEventListener("error", () => {
      reject(fileReader.error);
    });
    fileReader.readAsArrayBuffer(blob);
  });
}
```

Examples of **correct** code for this rule:

```javascript
async function good() {
  const arrayBuffer = await blob.arrayBuffer();
}
```

## How to use

To **enable** this rule using the config file or in the CLI, you can use:

::: code-group

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "unicorn/prefer-blob-reading-methods": "error"
  }
}
```

```bash [CLI]
oxlint --deny unicorn/prefer-blob-reading-methods
```

:::

## References

* Rule Source
