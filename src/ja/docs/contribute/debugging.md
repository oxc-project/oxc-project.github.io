---
title: Debugging
outline: deep
---

# Debugging

## rust-lldb

rust-lldb can be used to get panic information from debug builds.

Enable debug symbols:

```toml Cargo.toml
[profile.release]
debug = true
strip = false
panic = "unwind"
```

Build the binary:

```bash
cargo build --release -p oxc_cli --bin oxlint
```

Run the binary:

```bash
rust-lldb -- ./target/release/oxlint
```

Once it launches, press `r` for running the program.
