# Transformer

## Features

- Transforming TypeScript to ESNext.
- Transforming React JSX to ESNext, with built-in React Refresh.
- [TypeScript Isolated Declarations Emit](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/#isolated-declarations) without using the TypeScript compiler.

## Installation

### Node.js

- Use the node binding [oxc-transform][url-oxc-transform-npm].
- Try on [stackblitz](https://stackblitz.com/edit/oxc-transform).

### Rust

Use the umbrella crate [oxc][url-oxc-crate] with the `transformer` feature.

Rust usage example can be found [here](https://github.com/oxc-project/oxc/blob/main/crates/oxc_transformer/examples/transformer.rs).

## Isolated Declarations

- [`unplugin-isolated-decl`](https://github.com/unplugin/unplugin-isolated-decl)

<!-- Links -->

[url-oxc-crate]: https://docs.rs/oxc
[url-oxc-transform-npm]: https://www.npmjs.com/package/oxc-transform
