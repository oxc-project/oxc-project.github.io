---
url: /docs/learn/architecture/linter.md
---

# Linter Architecture

This article is originally posted on [leaysgur.github.io/posts](https://leaysgur.github.io/posts/2024/01/15/160838) by [@leaysgur](https://github.com/leaysgur).

## apps/oxlint

The `oxlint` binary is the result of building `main.rs` from the `apps/oxlint` crate.

> [Cargo.toml Configuration](https://github.com/oxc-project/oxc/blob/main/apps/oxlint/Cargo.toml)

Here, it parses arguments and then runs the `LintRunner`.

> [Lint Execution Flow](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_cli/src/lint/main.rs#L17-L19)

## crates/oxc\_diagnostics

The `LintService` passes the `mpsc::channel` Sender to `oxc_diagnostics` to receive lint results.

> [Receiving Lint Results](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_diagnostics/src/service.rs#L96)

It formats and displays the received messages. The formatting is done by the `miette` crate.

> [miette Crate Reference](https://github.com/zkat/miette)

## crates/oxc\_linter

Starting with the `LintService`:

* Holds `self.runtime` as `Arc<Runtime>`
* `Runtime` holds paths for linting
* Upon running, it iterates over `Runtime` paths in parallel using `rayon`
* It sends a `None` to finish

> [LintService Implementation](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/service.rs#L51)

### `Runtime`: `process_path()`

* Infers extension and content from the path
* Supports `.[m|c]?[j|t]s` or `.[j|t]sx` extensions
* Exceptions for `.vue`, `.astro`, and `.svelte` with partial support for `script` blocks
* Processes JavaScript and TypeScript sources
* Executes linting and sends results to `DiagnosticService`

> [Runtime Path Processing](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/service.rs#L162)

### `Runtime`: `process_source()`

* Processes the source with a parser into an AST
* Creates a `LintContext` from `SemanticBuilder` and runs it through `Linter`

> [Runtime Source Processing](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/service.rs#L206)

## crates/oxc\_semantic: `SemanticBuilder`

`SemanticBuilder` builds semantic information extracted from the source.

> [SemanticBuilder Source](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_semantic/src/builder.rs#L156)

* `source_text`: Source code
* `nodes`: AST nodes
* `classes`: Classes
* `scopes`: Scopes
* `trivias`: Comments
* `jsdoc`: JSDoc
* etc.

When `SemanticBuilder` builds, it generates `SemanticBuilderReturn`, but only `Semantic` is passed to `LintContext`.

> [SemanticBuilder Return](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_semantic/src/lib.rs#L34)

## crates/oxc\_linter: `LintContext`

> [LintContext Source](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/context.rs#L14)

Represents the context, with `Semantic` as the main body. It includes getters for each piece of information and methods like `diagnostic()` to notify of linting issues.

## crates/oxc\_linter: `Linter`

> [Linter Source](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/lib.rs#L140)

The `run()` function of this `Linter` is the core of the linting process.

* `Linter` holds rules to execute on the target source in `self.rules`
* Each rule can implement three types of processing as per the trait
* It sequentially executes these three patterns

For the currently implemented rules, refer to this list.

> [Implemented Rules](https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/rules.rs)

For adding new rules, remember to update this list.

## Linter Example

The repository provides the minimum code configuration for creating a linter.

> [Minimal Linter Code](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/examples/linter.rs)
