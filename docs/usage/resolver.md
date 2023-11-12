# Resolver

Node.js Module Resolution.

- Feature complete
- All configuration options are aligned with enhanced-resolve

## Rust Usage

- https://docs.rs/oxc_resolver
- https://crates.io/oxc_resolver

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
