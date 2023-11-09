---
id: parser
title: Parser
---

# Parser

## Features

- 2x faster then swc parser
- by far the fastest and most conformant JavaScript and TypeScript (including JSX and TSX) parser written in Rust

[Benchmark](https://github.com/oxc-project/bench-javascript-parser-written-in-rust)

## Usage in Rust

- The umbrella crate [oxc][docs-oxc-url] exports all public crates from this repository.
- The AST and parser crates [oxc_ast][docs-ast-url] and [oxc_parser][docs-parser-url] are production ready.

## Usage in Node

- Via napi: [@oxidation-compiler/napi][npm-napi]

[docs-oxc-url]: https://docs.rs/oxc
[docs-ast-url]: https://docs.rs/oxc_ast
[docs-parser-url]: https://docs.rs/oxc_parser
[npm-napi]: https://www.npmjs.com/package/@oxidation-compiler/napi
