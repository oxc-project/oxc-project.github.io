---
url: /docs/learn/architecture/ast-tools.md
---

# AST Tools

The [AST Tools](https://github.com/oxc-project/oxc/tree/main/tasks/ast_tools) task serves as our secret weapon for managing all generated files.
These tools include the AST builder, visitors, traits like `ContentEq` and `ContentHash`, and TypeScript types - all of which are machine-generated.

For instance, the following files are automatically generated:

* `crates/oxc_ast/src/generated/ast_builder.rs`
* `crates/oxc_ast/src/generated/visit.rs`
* `crates/oxc_ast/src/generated/visit_mut.rs`
* `crates/oxc_ast/src/generated/derive_content_eq.rs`
* `crates/oxc_ast/src/generated/derive_content_hash.rs`
* `npm/oxc-types/src/generated/types.d.ts`

## Background

Rust's compile time is notoriously slow, and using procedural macros to generate this much code worsens the issue.

Requiring users to wait for code generation to complete at build time would significantly hinder the development experience for downstream projects.

Both cold and incremental build times [can regress drastically](https://github.com/swc-project/swc/issues/7071).

## The RFC

The team discussed the topic in [RFC: codegen AST related codes](https://github.com/oxc-project/oxc/issues/4134) and agreed on the following requirements and user story:

### Requirements

* No build.rs published to the user.
* All generated code are checked into git.
* No nightly.
* Rust code is source of truth, need to parse types marked `#[ast]`.
* Avoid compile-time procedural macros as much as possible.

### Workflow

* A user changes code in repo.
* A watch change picks it up.
* Parse all types marked `#[ast]`.
* Record details of all AST types in a schema.
* Generate code from schema and save to files.

## Infrastructure

More details to follow.
