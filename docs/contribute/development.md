---
url: /docs/contribute/development.md
---

# Getting Started

## Clone Repository

```bash
git clone -c core.longpaths=true git@github.com:oxc-project/oxc.git
```

## Set Up Project

### Install Rust

If you have not yet installed Rust, follow [the official instruction](https://www.rust-lang.org/tools/install) and install Rust.

After installing Rust, run the following command on the project root:

```bash
rustup show
```

`rustup show` reads the `./rust-toolchain.toml` file and installs the correct Rust toolchain and components for this project.

### `cargo binstall`

Some Cargo tools are required to develop OXC, and it is recommended to use [cargo binstall](https://github.com/cargo-bins/cargo-binstall), which provides a low-complexity mechanism to install rust binaries and is faster way than building them from source by running `cargo install`.

```bash
cargo install cargo-binstall
```

You can also download [the pre-compiled binary](https://github.com/cargo-bins/cargo-binstall#installation) and save it in `~/.cargo/bin`.

### `just`

OXC utilizes [`just`](https://github.com/casey/just), which is a handy way to save and run project-specific commands:

```bash
cargo binstall just -y
```

### Install CMake

Install CMake by downloading from the official [website](https://cmake.org/download/).

[Homebrew](https://brew.sh/) users can alternatively install with:

```bash
brew install cmake
```

### Install pnpm

Install `pnpm` (a package manager for node.js, similar to `npm`) by following instructions from the official [website](https://pnpm.io/installation).

#### Dependencies

Run the following command in `justfile` at the project root to install dependencies:

```bash
just init
```

You can see the list of available commands by running `just`.

You can run `just ready` (or, `just r` in short) to make sure the whole project builds and runs correctly.

## macOS: Faster Compilation

macOS has an antivirus feature called XProtect that scans executables for malware on first run. This can significantly slow down Rust builds, especially build scripts and test executables. You can speed up compilation by adding Terminal as a "developer tool" in System Settings:

1. Open System Settings > Privacy & Security > Developer Tools
2. Add your terminal app (Terminal, iTerm, etc.)
3. Restart the terminal app

**Note:** This disables an OS security feature. Only do this if you're comfortable with the trade-off.

More details: https://nnethercote.github.io/2025/09/04/faster-rust-builds-on-mac.html
