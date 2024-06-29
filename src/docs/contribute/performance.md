---
title: Performance
outline: deep
---

# Performance

- All performance issues (runtime and compilation speed) are considered as bugs in this project.
- Follow guidance from the [Rust performance book](https://nnethercote.github.io/perf-book/introduction.html).

## Compile Time

While Rust has gained a reputation for its comparatively slower compilation speed,
we have dedicated significant effort to fine-tune the Rust compilation speed.

Our goal is to minimize any impact on development workflow,
ensuring that Oxc based tools remain fast to compile.

Our [CI runs](https://github.com/oxc-project/oxc/actions/workflows/ci.yml?query=branch%3Amain) complete in 3 minutes,
any regressions need to be fixed.

## Profile

### Heap Allocation

Try [dhat](https://docs.rs/dhat/latest/dhat).

### CPU - Mac Xcode Instruments

[`cargo instruments`](https://github.com/cmyr/cargo-instruments) is the tool of choice to bridge Mac Xcode instruments.

The following instruction replicates the procedure of `cargo instruments`.

First, install Xcode Instruments command-line tools:

```bash
xcode-select --install
```

And then change the build profile to show debug symbols:

```toml
[profile.release]
debug = true # enable debug symbols
strip = false # do not strip symbols
```

Build the binary with `--release`:

```bash
cargo build --release --bin oxlint --features allocator
```

Once the project is built, the binary is located at `./target/release/oxlint`.

Under the hood, `cargo instruments` invokes the `xcrun xctrace` command, which is equivalent to

```bash
xcrun xctrace record --template 'Time Profile' --output . --launch -- /path/to/oxc/target/release/oxlint
```

Running the command above produces the following output

```
Starting recording with the Time Profiler template. Launching process: oxlint.
Ctrl-C to stop the recording
Target app exited, ending recording...
Recording completed. Saving output file...
Output file saved as: Launch_oxlint_2023-09-03_4.41.45 PM_EB179B85.trace
```

Open the trace file `open Launch_oxlint_2023-09-03_4.41.45\ PM_EB179B85.trace`.

To see a top down trace:

1. On the top panel, click CPUs
2. On the left input box, click `x` then select `Time Profiler`
3. At the bottom panel, click "Call Tree", turn on "Invert Call Tree" and turn off separate by thread.

For memory and disk operations, use `--template 'Allocations'` and `--template 'File Activity'`.
