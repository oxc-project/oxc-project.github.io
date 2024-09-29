# Transformer

## Features

- Transforming TypeScript to ESNext.
- Transforming React JSX to ESNext, with built-in React Refresh.
- [TypeScript Isolated Declarations Emit](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/#isolated-declarations) without using the TypeScript compiler.

## Installation

### Node.js

Use the experimental node binding [oxc-transform][url-oxc-transform-npm].

### Rust

Use the umbrella crate [oxc][url-oxc-crate] with the `transformer` feature.

Rust usage example can be found [here](https://github.com/oxc-project/oxc/blob/main/crates/oxc_transformer/examples/transformer.rs).

## API Example

```javascript
import { transform } from "oxc-transform";
const transformed = transform(filePath, sourceCode, {
  typescript: {
    onlyRemoveTypeImports: true,
    declaration: { stripInternal: true },
  },
});
await fs.writeFile("out.js", transformed.code);
await fs.writeFile("out.d.ts", transformed.declaration);
```

## Isolated Declarations

- [`unplugin-isolated-decl`](https://github.com/unplugin/unplugin-isolated-decl)

<!-- Links -->

[url-oxc-crate]: https://docs.rs/oxc
[url-oxc-transform-npm]: https://www.npmjs.com/package/oxc-transform
