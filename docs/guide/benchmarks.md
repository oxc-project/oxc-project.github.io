---
url: /docs/guide/benchmarks.md
---

# All Benchmarks

## Parser

Oxc's parser is at least 3x faster than swc and 5x faster than Biome.

Please note that it is not an apple-to-apple comparison with Biome. Biome's parser [produces a CST](https://biomejs.dev/internals/architecture) instead of an AST, which requires a lot more work.

See repository [bench-javascript-parser-written-in-rust](https://github.com/oxc-project/bench-javascript-parser-written-in-rust).

## Transformer

* Compared to swc, oxc transformer is 4x faster, uses 20% less memory, and is 35 MB smaller in package size (from swc's 37MB).
* Compared to babel, oxc transformer is 40x faster, uses 70% less memory, and is 19 MB smaller with 168 npm packages less to install.

See repository [bench-transformer](https://github.com/oxc-project/bench-transformer).

## Linter

Oxlint is 50x - 100x faster than ESLint depending on the number of CPU cores.

See repository [bench-javascript-linter](https://github.com/oxc-project/bench-javascript-linter).

## Formatter

Oxfmt is 3x faster than Biome, 35x faster than prettier.

See repository [bench-formatter](https://github.com/oxc-project/bench-formatter).

## Resolver

`oxc-resolver` is 30x faster than webpack's `enhanced-resolve`.

See repository [bench-resolver](https://github.com/oxc-project/bench-resolver).
