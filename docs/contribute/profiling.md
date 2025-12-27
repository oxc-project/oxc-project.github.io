---
url: /docs/contribute/profiling.md
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

* `oxlint`: `--silent` will suppress diagnostics output and keep the profile more focused.
* `oxlint`: `--threads 1` will run the linter single threaded, which is slower, but makes it easier to analyze the profile for single-threaded performance.
* `samply record`: `--rate <number>` will sample the profile at a higher rate. The default is 1000Hz (1ms), but increasing this will provide more detailed information at the cost of a larger profile file.

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
      * Cycles - for getting a rough idea of how many CPU cycles are spent in each function.
      * Instructions - for getting a rough idea of how many CPU instructions are executed in each function and how many cycles that takes
      * `L1D_CACHE_MISS_LD` - count of L1 cache misses from loading data from memory
3. Once you have enabled the events you are interested in, save the template in "File > Save as Template ..." and give it a name.
4. Now you can use this with `xctrace` by passing the template name to the `--template` option: `xcrun xctrace record --template 'My Custom CPU Counters' --output . --launch -- /path/to/oxc/target/release-with-debug/oxlint`

## Heap Allocation - dhat

[dhat](https://docs.rs/dhat/latest/dhat) is a heap profiler that can help identify memory leaks and analyze heap allocation patterns.

### Setup

Add dhat as a dependency to your `Cargo.toml`:

```toml
[dependencies]
dhat = "0.3"
```

Then add a global allocator at the top of your binary crate:

```rust
#[global_allocator]
static ALLOC: dhat::Alloc = dhat::Alloc;
```

### Profiling

Create a profiler in the scope you want to profile. The profiler will track allocations from when it's created until it's dropped:

```rust
fn main() {
    let _profiler = dhat::Profiler::new_heap();
    // Your code here - all heap allocations will be tracked
}
```

You can also add `_profiler` to any function to track memory only for that specific function:

```rust
fn my_function() {
    let _profiler = dhat::Profiler::new_heap();
    // Only allocations within this function scope will be tracked
}
```

The profiler will automatically generate a `dhat-heap.json` file when it's dropped.

### Loading and Reading the Profile

After running your program, a `dhat-heap.json` file will be created in your working directory.

To analyze the profile:

1. Open the dhat viewer at https://nnethercote.github.io/dh\_view/dh\_view.html
2. Load the `dhat-heap.json` file
3. Select a metric in "Sort metrics" to analyze different aspects of memory usage:
   * **"At t-gmax (bytes)"**: Shows allocations at the point of peak memory usage. Use this to identify what's consuming the most memory when your program reaches its maximum heap size.
   * **"At t-end (bytes)"**: Shows memory that was not dropped before the profiler was destroyed. This is particularly useful for identifying memory leaks, as it reveals allocations that remain at the end of the profiled scope.
   * **"Total (bytes)"**: Shows the total number of bytes allocated over the entire execution. Use this to identify which parts of your code are performing the most allocations, even if the memory is later freed.

### Advanced: Controlling Profiler Lifetime

For more control over when profiling stops, you can explicitly manage the profiler's lifetime. For example, to profile only the core logic and exclude cleanup:

```rust
struct MyApp {
    profiler: Option<dhat::Profiler>,
    // other fields
}

impl MyApp {
    fn close(&mut self) {
        // Drop the profiler here to capture the heap state before cleanup
        self.profiler = None;
        // cleanup code
    }
}
```

This pattern helps identify which data structures are holding memory at a specific point in your program's execution.
