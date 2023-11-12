# Performance Tuning

## Compile Time

While Rust has gained a reputation for its comparatively slower compilation speed,
we have dedicated significant effort to fine-tune the Rust compilation speed.
Our aim is to minimize any impact on your development workflow,
ensuring that developing your own Oxc based tools remains a smooth and efficient experience.

This is demonstrated by our [CI runs](https://github.com/oxc-project/oxc/actions/workflows/ci.yml?query=branch%3Amain),
where warm runs complete in 5 minutes.

## Profile

### Mac Xcode Instruments

Mac Xcode instruments can be used to produce a CPU profile.

To install Xcode Instruments, install the Command Line Tools:

```bash
xcode-select --install
```

For normal Rust builds, [`cargo instruments`](https://github.com/cmyr/cargo-instruments) can be used as the glue
for profiling and creating the trace file.

First, change the profile for showing debug symbols.

```toml
[profile.release]
debug = 1 # debug info with line tables only
strip = false # do not strip symbols
```

Then build the project

```bash
cargo build --release -p oxc_cli --bin oxlint
```

The binary is located at `./target/release/oxlint` once the project is built.

Under the hood, `cargo instruments` invokes the `xcrun` command, equivalent to

```bash
xcrun xctrace record --template 'Time Profile' --output . --launch -- /path/to/oxc/target/release/oxlint --quiet
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
