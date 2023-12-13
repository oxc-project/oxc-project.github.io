---
title: Parser
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxc-parser
    alt: npm
---

<AppBadgeList />

# Parser

## Features

- 2x faster than [swc][url-swc] parser
- By far the fastest and most conformant JavaScript and TypeScript (including JSX and TSX) parser written in Rust

You can check [benchmark][url-benchmark] for more detail.

## Installation

### Rust

Install crates:

```sh
$ cargo install oxc
```

```sh
$ cargo install oxc_ast
```

```sh
$ cargo install oxc_parser
```

- The umbrella crate [oxc][url-oxc-crate] exports all public crates from this repository
- The AST and parser crates [oxc_ast][url-oxc-ast-crate] and [oxc_parser][url-oxc-parser-crate] are production ready

### Node.js

Install [oxc-parser][url-oxc-parser-npm]:

::: code-group

```sh [npm]
$ npm add -D oxc-parser
```

```sh [pnpm]
$ pnpm add -D oxc-parser
```

```sh [yarn]
$ yarn add -D oxc-parser
```

```sh [bun]
$ bun add -D oxc-parser
```

:::

<!-- Links -->

[url-swc]: https://swc.rs
[url-benchmark]: https://github.com/oxc-project/bench-javascript-parser-written-in-rust
[url-oxc-crate]: https://docs.rs/oxc
[url-oxc-ast-crate]: https://docs.rs/oxc_ast
[url-oxc-parser-crate]: https://docs.rs/oxc_parser
[url-oxc-parser-npm]: https://www.npmjs.com/package/oxc-parser
