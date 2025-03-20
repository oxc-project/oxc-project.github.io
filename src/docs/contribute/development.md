---
title: Getting Started
outline: deep
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

#### Dependencies

Run the following command in `justfile` at the project root to install dependencies:

```bash
just init
```

You can see the list of available commands by running `just`.

You can run `just ready` (or, `just r` in short) to make sure the whole project builds and runs correctly.
