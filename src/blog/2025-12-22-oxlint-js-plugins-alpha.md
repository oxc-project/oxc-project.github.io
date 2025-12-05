---
title: Oxlint JS Plugins Alpha
outline: deep
authors:
  - overlookmotel
  - cameron
---

<AppBlogPostHeader />

<br>

**We're excited to announce the alpha release of JavaScript plugins for Oxlint!**

For a long time, users have asked for a way to customize the behavior of Oxlint.

2 months ago we released the first technical preview of our solution - support for Oxlint plugins written in Javascript, _and_ compatible with ESLint's plugin API. However, that initial preview was incomplete. Many APIs were not implemented yet.

Since the initial preview, we've been beavering away on filling out the API surface. At this point, we feel it's ready for testing in real world projects.

We expect 80% of users will find they are now able to switch from ESLint to Oxlint and it should "just work".

Oxlint supports over 600 popular rules re-implemented in Rust, which run at native speed. JS plugins aim to "fill in the gaps" where Oxlint does not yet support all the rules users need. The combination of raw native performance for the majority of lint rules, and the flexibility of JS plugins for the rest, aims to make Oxlint "the best of both worlds".

## Overview

### What it can do

Oxlint now supports:

- Running most existing ESLint plugins without modification.
- Writing your own custom lint rules in Javascript.

Oxlint passes 100% the tests for these popular ESLint plugins:

- `eslint-plugin-react-hooks` (including the React Compiler-powered rules) **TBC - not tested yet**
- TBC
- TBC
- TBC

Just because a plugin isn't included in the list above, doesn't mean it doesn't work. Most likely we just haven't tested it yet. Please try it out and let us know!

### What it can't do (yet)

- No language server support yet. Errors from JS plugins are reported from Oxlint's CLI, but not in IDEs.
- Support front-end frameworks with custom file formats (e.g. Svelte, Vue, Angular) - this will come next year.
- Blow your socks off with it's speed.

Our efforts over recent months have been to achieve compatibility with ESLint, and to make painless migration possible for as many users as possible. Performance has not been our focus to date. But please believe us when we say that we know exactly how we're going to achieve a leap in performance which will astonish many who say that it's impossible to make Javascript run fast, and we'll get into that next year (more details [in performance section](#performance) below).

That said, you will very likely find switching from ESLint to Oxlint to be a _large_ speed-up. It's just that we're not satisfied with large - we want _huge_! This is just the beginning.

## Quick Start

TODO: Add quick start instructions here - installation, adding a plugin etc.

## Performance

As noted above, performance has not been our main focus in this first phase of development of Oxlint JS plugins.

Much of the API is currently implemented in JS, in part by borrowing heavily from projects like TypeScript-ESLint. Our next step is "Rustification", which will produce dramatic performance gains.

However, the current version of Oxlint does contain our "secret weapon" - a new, highly optimized, low-level API for communicating between Rust and JS, which we call "raw transfer". This technique completely destroys the traditional language barrier, reducing the cost of moving data between the "two worlds" of JS and Rust almost to zero.

This barrier has always been the fundamental problem for native tooling supporting JS plugins. The native code may well run at the speed of light, but the cost of sending data back and forth to JS is so high that it can offset much of that gain. We believe that we have finally solved this problem.

"Raw transfer" is the foundation on which we can build the _next_ version of Oxlint JS plugins, leveraging it to unlock many other optimizations, with which we believe can achieve the seemingly impossible - bring JS plugins up to _almost_ the same level of performance as Rust.

In short: Oxlint is already the fastest linter in the world. It's going to get a lot faster.

For more details, see [under the hood](#under-the-hood) below.

### Benchmarks

TODO: Add benchmarks ESLint vs Oxlint with JS plugins

## Alternative API

Oxlint aims for 100% compatibility with ESLint's plugin API.

However, we also offer a slightly different API which is more performant.

TODO: Example (similar to preview blog post).

## Under the hood

TODO: Explanation of AST transfer, lazy deserialization etc (similar to preview blog post).

TODO: Add video of overlookmotel's ViteConf talk.

## What's next

Development of Oxlint plugin support is progressing at a rapid pace. Within the next few months, you can expect to see:

- Language server support (VS Code etc).
- Dramatic performance improvements.
- Full support for frameworks with custom file formats like Svelte, Vue, and Angular.

## Try it out!

TODO: Get to it people! Let's go!

## TODO

- Windows memory problem - need to warn about this somewhere.
