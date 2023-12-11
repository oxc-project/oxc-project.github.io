---
title: Getting Started
outline: deep
---

# Getting Started

## Overview

The JavaScript Oxidation Compiler (Oxc) is a collection of high-performance tools for the JavaScript language written in Rust.

Our focus lies in constructing essential compiler tools for JavaScript: parser, linter, formatter, transpiler, minifier and resolver.

Additionally, we provide support for emerging JavaScript tools like Rspack, Rolldown, and Ezno.

Our goal is to create and empower tooling for [The Third Age of JavaScript](https://www.swyx.io/js-third-age).

## Philosophy

This project shares the same philosophies as [Biome][biome] and [Ruff][ruff].

1. JavaScript tooling could be rewritten in a more performant language.
2. An integrated toolchain can tap into efficiencies that are not available to a disparate set of tools.

[biome]: https://biomejs.dev
[ruff]: https://beta.ruff.rs

## Adoptions

- A 5M LOC TypeScript codebase previously running ESLint parallelized across 48 workers in CI taking 75 mins (12m wall time), it is now 8 seconds on a single worker. ([Source](https://twitter.com/boshen_c/status/1714827365136929029))

## Endorsements

#### [Joe Savona](https://x.com/en_JS/status/1676467920334094336), React team member:

> For…reasons I am experimenting w various Rust-based JS compilers. I don’t agree w every design decision but overall oxc is really well done.

#### [Sathya Gunasekaran](https://x.com/_gsathya/status/1676453430263701506), React team member:

> oxc is kinda neat
