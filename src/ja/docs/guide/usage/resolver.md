---
title: Resolver
outline: deep
badges:
  - src: https://img.shields.io/crates/d/oxc_resolver
    alt: total downloads from crates.io
---

# Resolver

<AppBadgeList />

Node.js cjs and esm path resolution.

## Features

- All configurations are aligned with [webpack/enhanced-resolve][url-enhanced-resolve].
- 28x faster than [webpack/enhanced-resolve][url-enhanced-resolve] ([benchmark](https://github.com/oxc-project/bench-nodejs-resolver)).

## Installation

### Rust

The [oxc\_resolver][url-oxc-resolver-crate] crate and its [documentation][url-oxc-resolver-docs] are both available.

### Node.js

The node binding [oxc-resolver][url-oxc-resolver-npm] is currently work in progress.

## Rust Usage

Check out [this example](https://github.com/oxc-project/oxc_resolver/blob/main/examples/resolver.rs).

<!-- Links -->

[url-oxc-resolver-crate]: https://crates.io/crates/oxc_resolver

[url-oxc-resolver-docs]: https://docs.rs/oxc_resolver

[url-oxc-resolver-npm]: https://www.npmjs.com/package/oxc-resolver

[url-enhanced-resolve]: https://github.com/webpack/enhanced-resolve
