---
title: Profiling
outline: deep
---

# Profiling

## Compiling `oxlint` in release mode with debug information

For profiling, you will need to compile the `oxlint` binary in release mode with debug information enabled. You can do that by passing `--profile release-with-debug` to `cargo build`:

```bash
cargo build --profile release-with-debug --bin oxlint
```

After building, the binary is located at `./target/release-with-debug/oxlint`. This is the binary that should be used for profiling.

## CPU - Samply

[Samply](https://github.com/mstange/samply) is a command line CPU profiler which uses the Firefox profiler as its UI. Works on macOS and Linux.

To use Samply with `oxlint`, run `samply record` followed by the `oxlint` command and arguments:

```bash
samply record ./target/release-with-debug/oxlint .
```

To improve the profiling experience, you might consider some of the following options:

- `oxlint`: `--silent` will suppress diagnostics output and keep the profile more focused.
- `oxlint`: `--threads 1` will run the linter single threaded, which is slower, but makes it easier to analyze the profile for single-threaded performance.
- `samply record`: `--rate <number>` will sample the profile at a higher rate. The default is 1000Hz (1ms), but increasing this will provide more detailed information at the cost of a larger profile file.

For example, running `oxlint` single-threaded with a 0.1ms sample rate:

```bash
samply record --rate 10000 ./target/release-with-debug/oxlint --silent --threads 1 .
```

## CPU - Mac Xcode Instruments

[`cargo instruments`](https://github.com/cmyr/cargo-instruments) is the tool of choice to bridge Mac Xcode instruments.

The following instruction replicates the procedure of `cargo instruments`.

First, install Xcode Instruments command-line tools:

```bash
xcode-select --install
```

Then, if you haven't already, [ensure that the `oxlint` binary is compiled](#compiling-oxlint-in-release-mode-with-debug-information).

Under the hood, `cargo instruments` invokes the `xcrun xctrace` command, which is equivalent to

```bash
xcrun xctrace record --template 'Time Profile' --output . --launch -- /path/to/oxc/target/release-with-debug/oxlint
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

For more detailed CPU profiling, such as L1/L2 cache misses, cycle and instruction counts, and branch prediction info, you need to use a custom "CPU Counters" template:

1. Open Instruments and select the "CPU Counters" template.
2. In the "CPU Counters" settings:
   1. Turn on the "High Frequency Sampling" option.
   2. Below the "High Frequency Sampling" option, click the plus icon and select an event type. Some suggested event types:
      - Cycles - for getting a rough idea of how many CPU cycles are spent in each function.
      - Instructions - for getting a rough idea of how many CPU instructions are executed in each function and how many cycles that takes
      - `L1D_CACHE_MISS_LD` - count of L1 cache misses from loading data from memory
3. Once you have enabled the events you are interested in, save the template in "File > Save as Template ..." and give it a name.
4. Now you can use this with `xctrace` by passing the template name to the `--template` option: `xcrun xctrace record --template 'My Custom CPU Counters' --output . --launch -- /path/to/oxc/target/release-with-debug/oxlint`

## Heap Allocation

Try [dhat](https://docs.rs/dhat/latest/dhat).
