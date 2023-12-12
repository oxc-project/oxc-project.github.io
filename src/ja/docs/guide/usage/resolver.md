---
title: Resolver
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxc-resolver
    alt: npm
---

<AppBadgeList />

# Resolver

Node.js Module Resolution.

- Feature complete
- All configuration options are aligned with enhanced-resolve

## Installation

### Rust

Install [oxc_resolver][url-oxc-resolver-crate] crate:

```sh
$ cargo install oxc_resolver
```

You should also check [documentation][url-oxc-resolver-docs].

### Node.js

Install [oxc-resolver][url-oxc-resolver-npm]:

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

## Example

```rust
use std::{env, path::PathBuf};

use oxc_resolver::{ResolveOptions, Resolver};

fn main() {
    let path = env::args().nth(1).expect("require path");
    let request = env::args().nth(2).expect("require request");
    let path = PathBuf::from(path).canonicalize().unwrap();

    println!("path: {path:?}");
    println!("request: {request}");

    match Resolver::new(ResolveOptions::default()).resolve(path, &request) {
        Err(error) => println!("Error: {error}"),
        Ok(resolution) => println!("Resolved: {}", resolution.full_path().to_string_lossy()),
    }
}
```

<!-- Links -->

[url-oxc-resolver-crate]: https://crates.io/crates/oxc_resolver
[url-oxc-resolver-docs]: https://docs.rs/oxc_resolver
[url-oxc-resolver-npm]: https://www.npmjs.com/package/oxc-resolver
