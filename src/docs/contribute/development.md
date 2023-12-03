---
title: Development
outline: deep
---

# Development

This page explains how to set up enrionment for OXC development.

## Clone Repository

```bash
git clone --recurse-submodules --shallow-submodules git@github.com:oxc-project/oxc.git
```

The `--recurse-submodules` and `--shallow-submodules` flags are needed to initialize git submodules that are needed to run conformance tests.

## Set Up Project

### Install Rust

If you have not yet installed Rust, follow [the official instruction](https://www.rust-lang.org/tools/install) and install Rust.

After installing Rust, run the following command at the project root:

```bash
rustup show
```

`rustup show` reads the `./rust-toolchain.toml` file and installs the correct Rust toolchain and components for this project.

### Install Project Tools

#### `cargo-binstall`

Some Cargo tools are required to develop OXC, and it is recommended to use [cargo binstall](https://github.com/cargo-bins/cargo-binstall), which provides a low-complexity mechanism to install rust binaries and is faster way than building them from source by running `cargo install`.

```bash
cargo install cargo-binstall
```

You can also download [the pre-compiled binary](https://github.com/cargo-bins/cargo-binstall#installation) and save it in `~/.cargo/bin`.

#### `just`

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

---

Now you are ready to develop OXC!
You can check out [good first issues](https://github.com/oxc-project/oxc/contribute) or ask us on [Discord](https://discord.gg/9uXCAwqQZW).
