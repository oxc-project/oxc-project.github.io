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

## Endorsements

#### [Evan You](https://twitter.com/youyuxi/status/1734439543280128030), creator of [Vue.js](https://vuejs.org) and [Vite](https://vitejs.dev):

> Ran oxlint on the Vue 3 codebase, ~200 rules + ~590 files finished in 50ms 🤯 (30ms re-runs)
>
> The performance is absolutely nuts

#### [Jason Miller](https://github.com/developit), creator of [Preact](https://preactjs.com):

> oxlint has been a massive win for us at Shopify. Our previous linting setup took 75 minutes to run, so we were fanning it out across 40+ workers in CI.
>
> By comparison, oxlint takes around 10 seconds to lint the same codebase on a single worker, and the output is easier to interpret.
>
> We even caught a few bugs that were hidden or skipped by our old setup when we migrated!

#### [Yagiz Nizipli](https://github.com/sponsors/anonrig), founder of [Node.js performance team](https://github.com/nodejs/performance):

> I'm impressed by how oxc is actively encouraging JavaScript tools to improve their performance.

### [Eric Simons](https://twitter.com/ericsimons40/status/1766525300584947999), CEO of [StackBlitz](https://stackblitz.com/):

> Oxc is slept on rn
>
> Most JS/TS toolchains will be using it within the next few yrs imo

#### [Miles Johnson](https://x.com/mileswjohnson/status/1734698340791800283), creator of [Moonrepo](https://moonrepo.dev):

> It's crazy how good oxlint (and oxc tools) is. Not just in performance, but ease of use. Banking on Rust was a good choice!

#### [Joe Savona](https://x.com/en_JS/status/1676467920334094336), [React](https://react.dev) team member:

> For…reasons I am experimenting w various Rust-based JS compilers. I don’t agree w every design decision but overall oxc is really well done.

#### [Sathya Gunasekaran](https://x.com/_gsathya/status/1676453430263701506), [React](https://react.dev) team member:

> oxc is kinda neat

## Special Thanks

- [Biome][biome] and [Ruff][ruff]: This project would not exist without the help, inspiration, and encouragement from these two projects, who are pioneers in the field of Rust-based unified toolchains.
- [quick-lint-js][quick-lint-js] and [elm-review][elm-review]: For educating how static analysis could be improved in both performance and usability.

[biome]: https://biomejs.dev
[ruff]: https://beta.ruff.rs
[quick-lint-js]: https://quick-lint-js.com/
[elm-review]: https://package.elm-lang.org/packages/jfmengels/elm-review/latest/
