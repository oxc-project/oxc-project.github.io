# Test Infrastructure

::: info

This article serves as an invitation for sharing ideas to improve our test infrastructure,
feel free to contact us on [Discord][discord-url].

:::

In Oxc, correctness and reliability are taken extremely seriously.

We spend a great deal of time strengthening the test infrastructure to prevent problems from propagating to downstream tools.

## Parser

### Conformance

Parser tests from [Test262](https://github.com/tc39/test262), [Babel](https://github.com/babel/babel), and [TypeScript](https://github.com/microsoft/TypeScript) are used to test JavaScript, TypeScript, and JSX syntax.

For Test262, all stage 4 and regular expression tests are included.

All conformance results are stored in a snapshot file for tracking changes:

- [test262.snap](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/parser_test262.snap), reporting `43765/43765 (100.00%)`.
- [babel.snap](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/parser_babel.snap), reporting `2093/2101 (99.62%)`.
- [typescript.snap](https://github.com/oxc-project/oxc/blob/main/tasks/coverage/parser_typescript.snap), reporting `6470/6479 (99.86%)`.

All syntax errors are written to these snapshot files for diffing changes.

### Fuzzing

To ensure that the parser does not panic when encountering random data, three fuzzers are used:

1. [cargo fuzz](https://github.com/rust-fuzz/cargo-fuzz) for [sending random bytes](https://github.com/oxc-project/oxc-fuzz-parser/blob/main/fuzz/fuzz_targets/parser.rs) to the parser.
2. [shift-fuzzer-js](https://github.com/shapesecurity/shift-fuzzer-js) by [bakkot](https://github.com/bakkot) for producing random but valid ASTs.
3. [Automated-Fuzzer](https://github.com/qarmin/Automated-Fuzzer) by [qarmin](https://github.com/qarmin), which [actively reports](https://github.com/oxc-project/oxc/issues?q=is%3Aissue+author%3Aqarmin+) crashes.

### Memory Safety

The oxc parser uses [`bumpalo`](https://docs.rs/bumpalo/latest/bumpalo) as the memory allocator for its AST.
None of the AST nodes have a `drop` implementation.
Miri [is used](https://github.com/oxc-project/oxc/actions/workflows/miri.yml) to ensure that no heap-allocated data
is stored on the AST nodes, which would result in memory leaks when the allocator is dropped.

## Linter

### Snapshot Diagnostics

All linter diagnostics are written to a [snapshot file](https://github.com/oxc-project/oxc/tree/main/crates/oxc_linter/src/snapshots) for testing against regressions.

For example:

```javascript
 ⚠ typescript-eslint(adjacent-overload-signatures): All "foo" signatures should be adjacent.
  ╭─[adjacent_overload_signatures.tsx:3:18]
2 │         function foo(s: string);
3 │         function foo(n: number);
  ·                  ───
4 │         type bar = number;
5 │         function foo(sn: string | number) {}
  ·                  ───
6 │       }
  ╰────
```

### Ecosystem CI

[oxlint-ecosystem-ci](https://github.com/oxc-project/oxlint-ecosystem-ci) runs `oxlint` against large repositories to check for false positives, regressions, and panics. The repositories tested include:

- [rolldown/rolldown](https://github.com/rolldown-rs/rolldown)
- [napi-rs/napi-rs](https://github.com/napi-rs/napi-rs)
- [toeverything/affine](https://github.com/toeverything/affine)
- [preactjs/preact](https://github.com/preactjs/preact)
- [microsoft/vscode](https://github.com/microsoft/vscode)
- [bbc/simorgh](https://github.com/bbc/simorgh)
- [elastic/kibana](https://github.com/elastic/kibana)
- [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

## Idempotency

Idempotency testing is used for integration tests and end-to-end tests on all tools.

An idempotency test follows this procedure:

```javascript
let sourceText = "foo";
let printed = tool(sourceText);
let printed2 = tool(printed);
assert(printed == printed2);
```

For example, idempotently minifying a piece of code should yield the same result.

All tools (parser, transformer, minifer, etc.) are idempotently tested on Test262, Babel and TypeScript test files.

## Integration Tests

Integration tests are preferred over unit tests.

[codecov](https://app.codecov.io/gh/oxc-project/oxc) currently reports
<span style="display:inline-block">[![Code Coverage][code-coverage-badge]][code-coverage-url]</span>
line coverage.

## End to End

The repository [monitor-oxc](https://github.com/oxc-project/monitor-oxc) performs end-to-end tests against the top 3000 npm packages from [npm-high-impact](https://github.com/wooorm/npm-high-impact).

Its `package.json` has 3000 dependencies:

```json
"devDependencies": {
  "@aashutoshrathi/word-wrap": "latest",
  "@actions/http-client": "latest",
  "@adobe/css-tools": "latest",
  "@alloc/quick-lru": "latest",
 ...
  "zip-stream": "latest",
  "zod": "latest",
  "zone.js": "latest",
  "zustand": "latest"
}
```

And a test file that imports these packages and asserts the import:

`src/dynamic.test.mjs`

```javascript
import test from "node:test";
import assert from "node:assert";
test("@aashutoshrathi/word-wrap", () => import("@aashutoshrathi/word-wrap").then(assert.ok));
test("@actions/http-client", () => import("@actions/http-client").then(assert.ok));
test("@adobe/css-tools", () => import("@adobe/css-tools").then(assert.ok));
test("@alloc/quick-lru", () => import("@alloc/quick-lru").then(assert.ok));
...
test("zod", () => import("zod").then(assert.ok));
test("zone.js", () => import("zone.js").then(assert.ok));
test("zustand", () => import("zustand").then(assert.ok));
test("zwitch", () => import("zwitch").then(assert.ok));
```

This test file is run after each of the tools (codegen, transformer, minifier, etc.) rewrites all the files in `node_modules`.

The packages are updated to their latest versions daily.

This setup has caught many obscure bugs that the conformance test suites missed.

---

If you any ideas on how to improve our test infrastructure,
feel free to contact us on [Discord][discord-url].

[discord-url]: https://discord.gg/9uXCAwqQZW
[code-coverage-badge]: https://codecov.io/github/oxc-project/oxc/branch/main/graph/badge.svg
[code-coverage-url]: https://codecov.io/gh/oxc-project/oxc
