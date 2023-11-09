---
id: parser
title: Parser
---

# Parser

We aim to be the fastest Rust-based ready-for-production parser.

## Conformance Tests

```bash
just c
```

Aliased to `just coverage`, runs the following conformance test suites by using the conformance runner found in [tasks/coverage](https://github.com/web-infra-dev/oxc/tree/main/tasks/coverage).

### Test262

JavaScript has the [ECMAScript Test Suite](https://github.com/tc39/test262) called Test262.
The goal of Test262 is to provide test material that covers every observable behavior specified in the specification.
Parser conformance uses the [parse phase tests](https://github.com/tc39/test262/blob/main/INTERPRETING.md#negative).

### Babel

When new language features are added to JavaScript, it is required to have them implemented by Babel,
this means Babel has another set of [parser tests](https://github.com/babel/babel/tree/main/packages/babel-parser/test).

### TypeScript

The TypeScript conformance tests can be found [here](https://github.com/microsoft/TypeScript/tree/main/tests/cases/conformance).

## Test Runner

Rome has implemented a test runner for the above test suites, they can be found .
