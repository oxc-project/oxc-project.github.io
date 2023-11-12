---
id: intro
title: Installation
---

# Installation

## Clone Repo

```bash
git clone --recurse-submodules git@github.com:oxc-project/oxc.git
cd oxc
```

The `--recurse-submodules` flag will also clone some submodules ([test262](https://github.com/tc39/test262), [babel](https://github.com/babel/babel), [typescript](https://github.com/microsoft/TypeScript)).

## New to Rust

### Install Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup show
```

`rustup show` reads the `./rust-toolchain.toml` file and installs the correct Rust toolchain and components for this project.

### Cargo Tools

Some additional Cargo tools are required for developing this project, they can be installed via [`cargo binstall`](https://github.com/cargo-bins/cargo-binstall).

```bash
cargo install cargo-binstall
```

`cargo binstall` provides a low-complexity mechanism for installing rust binaries as an alternative to building from source via the slower `cargo install`.

You can also download the [pre-compiled binary](https://github.com/cargo-bins/cargo-binstall#installation) and save it in `~/.cargo/bin`.

## Required tools

```bash
cargo binstall just -y
```

[`just`](https://github.com/casey/just) is a handy way to save and run project-specific commands.
To initialize all the required tools, run

```
just init
```

## Commands

Run `just` for the list of available commands.

Run `just r` (alias for `just ready`) to make sure the whole project builds and runs correctly.
