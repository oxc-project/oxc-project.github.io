---
title: Oxlint Type-Aware Preview
outline: deep
authors:
  - boshen
  - camchenry
  - auvred
---

<AppBlogPostHeader />

<br>

We're thrilled to announce type-aware rules support in Oxlint!

This preview release aims to engage with the community for collaboration and
discussion by documenting our decision process and technical details.

## Quick Start

If oxlint isn't already installed, please visit our [usage guide](https://oxc.rs/docs/guide/usage/linter.html).

To get started, run:

```bash
pnpm add -D oxlint-tsgolint
oxlint --tsconfig tsconfig.json
```

You'll then see two of our most requested type-aware rules in action:

- `no-floating-promises`
- `no-misused-promises`

The next version will enable all type-aware rules.

## Performance

Our testing shows that large repositories, which previously took several minutes to run with `typescript-eslint`,
now complete in less than 10 seconds.

We achieved this by leveraging [`typescript-go`](https://github.com/microsoft/typescript-go),
the [10x faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port) written in Go.

## Type-Aware linting

Please refer to
[Rust-Based JavaScript Linters: Fast, But No Typed Linting Right Now](https://www.joshuakgoldberg.com/blog/rust-based-javascript-linters-fast-but-no-typed-linting-right-now)
to understand the current status of type-aware linting in the ecosystem.

## Technical Details

The core of this new functionality is [oxc-project/tsgolint](https://github.com/oxc-project/tsgolint).

The tsgolint project was initially prototyped as [typescript-eslint/tsgolint](https://github.com/typescript-eslint/tsgolint).
However, the `typescript-eslint` team decided not to allocate development resources to this prototype, as they plan to continue their work on `typescript-eslint` for typed linting with ESLint.

@boshen then reached out to @auvred for a forked, scoped-down version adapted for oxlint.
This version would only contain type-aware rules without the sophisticated configuration resolution a full linter would require.

@auvred generously offered to continue its development under the Oxc organization.

### Architecture

`oxlint` (written in Rust) and `tsgolint` (written in Go) are compiled into their own binaries.

`oxlint` serves as the "frontend" for `tsgolint`, handling the CLI, path traversal, ignore logic, and diagnostic printing.

`tsgolint` acts as the backend for `oxlint`, accepting paths and configuration as input and outputting structured diagnostics.

This creates a simple pipeline:

```
Oxlint CLI (returns paths + rules + configuration)
  -> tsgolint (returns diagnostics)
  -> Oxlint CLI
```

### `tsgolint`

`tsgolint` does not communicate with typescript-go via public APIs.

Instead, it compiles `typescript-go` by [shimming its internal APIs to make them public](https://github.com/oxc-project/tsgolint/tree/main/shim).

All type-aware rules are written directly against these shimmed APIs.

While this isn't the recommended approach for accessing internals, it works!

## Decision Process

### Write our own type checker

Previous abandoned attempts to implement a type checker included:

- My own attempt at [writing type inference](https://gist.github.com/Boshen/d189de0fe0720a30c5182cb666e3e9a5)
- [Integrate](https://github.com/oxc-project/oxc/pull/413) [ezno type checker](https://github.com/kaleidawave/ezno) by @kaleidawave
- [stc](https://github.com/dudykr/stc) by @kdy1
- (There are also many attempts in the community that did not go far).

Additionally, there's the work-in-progress:

- [Biome 2.0](https://biomejs.dev/blog/biome-v2/) with its own type inference implementation.

We determined that writing our own type inferencer or type checker was not feasible due to
the challenge of keeping up with a fast-moving target like TypeScript.

### Communication with TypeScript

Prior to `typescript-go`, projects added plugin interfaces to TypeScript's public API by either mapping its AST to `estree` or directly traversing the TypeScript AST. Examples include:

- [typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting)
- [tsslint](https://github.com/johnsoncodehk/tsslint)
- [tsl](https://github.com/ArnaudBarre/tsl)

We also explored [inter-process communication with Oxlint](https://github.com/oxc-project/oxc/discussions/2855) but abandoned the idea.

With `typescript-go`, the TypeScript team is [leaning towards](https://github.com/microsoft/typescript-go/discussions/455)
encoding the TypeScript AST and decoding it on the JavaScript side through inter-process communication.

While these approaches work, they still incur:

- Performance issues of varying degrees that don't suit Oxlint's performance characteristics.
- The cost of maintaining an AST mapping from TypeScript's AST.

## Considerations

While `tsgolint` solves the performance issue, there are other technical challenges that need to be addressed.

### Requirement for a Different TypeScript Version

We plan to release snapshots of `typescript-go` versions and align their version numbers with TypeScript.
You will then be able to install `oxlint-typescript` with the correct TypeScript version.

The downside of this approach is that you may need to upgrade TypeScript if `oxlint-tsgolint` requires changes.

### Maintenance cost of `tsgolint`

Shimming TypeScript's internal APIs carries some risk. However, the TypeScript AST and its visitor are actually quite stable.
We accept this risk and will fix breaking changes when upgrading `typescript-go`.

Our `typescript-go` version is synced three times a week.

## Acknowledgements

We'd like to extend our gratitude to:

- The TypeScript team for creating `typescript-go`.
- [@auvred](https://github.com/auvred) for creaging `tsgolint`.
- [@camchenry](https://github.com/camchenry) for the `oxlint` + `tsgolint` integration.
- The `typescript-eslint` team for their heartwarming support.

## Join the Community

We'd love to hear your feedback on Oxlint and type-aware linting and are excited to see how it helps improve your development workflow.
Connect with us:

- **Discord**: Join our [community server](https://discord.gg/9uXCAwqQZW) for real-time discussions
- **GitHub**: Share feedback on [GitHub Discussions](https://github.com/oxc-project/oxc/discussions)
- **Issues**: Report bugs or request features on our [issue tracker](https://github.com/oxc-project/oxc/issues)

## Give It a Try

To get started, follow the [installation guide](https://oxc.rs/docs/guide/usage/linter), or learn more about the [Oxc project](https://oxc.rs/docs/guide/introduction).
