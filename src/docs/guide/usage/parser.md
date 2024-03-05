---
title: Parser
outline: deep
badges:
  - src: https://img.shields.io/crates/d/oxc_parser
    alt: total downloads from crates.io
---

# Parser

<AppBadgeList />

The Rust crate `oxc_parser` is production ready.

## Features

- 3x faster than swc parser ([benchmark][url-benchmark]).
- parses `.js(x)` and `.ts(x)`.
- passes all parser tests from Test262 and almost all from Babel and TypeScript.

## Installation

### Rust

Use the umbrella crate [oxc][url-oxc-crate] or individual [oxc_ast][url-oxc-ast-crate] and [oxc_parser][url-oxc-parser-crate] crates.

### Node.js

The node binding [oxc-parser][url-oxc-parser-npm] is available for experimental use.

## Rust Usage

Check out [this example](https://github.com/oxc-project/oxc/blob/main/crates/oxc_parser/examples/parser.rs).

<!-- Links -->

[url-swc]: https://swc.rs
[url-benchmark]: https://github.com/oxc-project/bench-javascript-parser-written-in-rust
[url-oxc-crate]: https://docs.rs/oxc
[url-oxc-ast-crate]: https://docs.rs/oxc_ast
[url-oxc-parser-crate]: https://docs.rs/oxc_parser
[url-oxc-parser-npm]: https://www.npmjs.com/package/oxc-parser
