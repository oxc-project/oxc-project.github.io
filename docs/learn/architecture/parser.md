---
id: parser
title: Parser
---

# Parser

Oxc maintains its own AST and parser, which is by far the fastest and most conformant JavaScript and TypeScript (including JSX and TSX) parser written in Rust.

As the parser often represents a key performance bottleneck in JavaScript tooling,
any minor improvements can have a cascading effect on our downstream tools.
By developing our parser, we have the opportunity to explore and implement well-researched performance techniques.

While many existing JavaScript tools rely on [estree] as their AST specification,
a notable drawback is its abundance of ambiguous nodes.
This ambiguity often leads to confusion during development with [estree].

The Oxc AST differs slightly from the [estree] AST by removing ambiguous nodes and introducing distinct types.
For example, instead of using a generic [estree] `Identifier`,
the Oxc AST provides specific types such as `BindingIdentifier`, `IdentifierReference`, and `IdentifierName`.

This clear distinction greatly enhances the development experience by aligning more closely with the ECMAScript specification.

## How is it so fast

- AST is allocated in a [memory arena](https://crates.io/crates/bumpalo) for fast AST memory allocation and deallocation
- Short strings are inlined by [CompactString](https://crates.io/crates/compact_str)
- No other heap allocations are done except the above two
- Scope binding, symbol resolution and some syntax errors are not done in the parser, they are delegated to the semantic analyzer
