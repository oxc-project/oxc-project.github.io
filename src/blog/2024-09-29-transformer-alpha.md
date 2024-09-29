---
title: Oxc Transformer Alpha
outline: deep
authors:
  - boshen
  - Dunqing
  - overlookmotel
---

<AppBlogPostHeader />

We are excited to announce an alpha release for Oxc transform (a.k.a transpile).

This release contains three major features:

1. Transforming TypeScript to ESNext.
2. Transforming React JSX to ESNext, with built-in React Refresh.
3. [TypeScript Isolated Declarations DTS Emit](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#isolated-declarations) (`tsc --isolatedDeclarations`).

In this alpha stage, we recommend to experiment with these features to speed up build times.

[Our benchmark](https://github.com/oxc-project/bench-transformer) shows:

- Transform: Oxc is 3x - 5x faster than SWC, uses 20% less memory, and has smaller package size (2 MB vs SWC's 37 MB).
- Transform: Oxc is 20x - 50x faster than Babel, uses 70% less memory, and is 19 MB smaller, with only 2 npm packages to install vs Babel's 170.
- React development + React Refresh: Oxc is 5x faster than SWC, 50x faster than Babel.
- TS isolated declarations `.d.ts` emit: Oxc is 40x faster than TSC on typical files, 20x faster on larger files.

## Usage Examples

### [`oxc-transform`](https://www.npmjs.com/package/oxc-transform) npm package

Vue.js is currently [experimenting](https://github.com/vuejs/core/blob/0895b2624b707ea1e75c41f2e1f75388e7a6f101/scripts/build-types.js#L20)
the [`oxc-transform`](https://www.npmjs.com/package/oxc-transform) npm package for isolated declarations in its build pipeline:

```javascript
import { isolatedDeclaration } from "oxc-transform";
const dts = isolatedDeclaration(filename, ts);
```

[@lukeed](https://github.com/lukeed) and [@maraisr](https://github.com/maraisr) are utilizing `oxc-transform`
for their packages
[`empathic`](https://github.com/lukeed/empathic) and [`dldr`](https://github.com/maraisr/dldr)
to transform and generate `.d.ts` [in a single step](https://github.com/lukeed/empathic/blob/b83a360ff55051590dec19aa913cd12da97fa3f8/scripts/build.ts#L45-L52).

The following example demonstrates emitting `.js` and `.d.ts` in a single transformation step:

```javascript
import { transform } from "oxc-transform";
const transformed = transform(filePath, sourceCode, {
  typescript: {
    onlyRemoveTypeImports: true,
    declaration: { stripInternal: true },
  },
});
await fs.writeFile("out.js", transformed.code);
await fs.writeFile("out.d.ts", transformed.declaration);
```

### [`unplugin-isolated-decl`](https://github.com/unplugin/unplugin-isolated-decl)

`vue-macros` [uses](https://github.com/vue-macros/vue-macros/blob/4247c7ba9189c630111e058245ce1412c8da9229/tsup.config.ts#L10) `unplugin-isolated-decl` as the integration tool for its esbuild plugin.

[@sxzz](https://github.com/sxzz) [reports](https://x.com/sanxiaozhizi/status/1821320327231893600) their `.d.ts` generation time is reduced from 76s to 16s.

### Bazel build at [Airtable](https://github.com/Airtable)

[@michaelm](https://github.com/MichaelMitchell-at) from [Airtable](https://github.com/Airtable)
is integrating Oxc's isolated declarations `.d.ts` emit in their CI pipeline within their [Bazel build](https://github.com/aspect-build/rules_ts/pull/697).

### Rust [`oxc_transformer`](https://crates.io/crates/oxc_transformer) crate

The [Rolldown](https://rolldown.rs) bundler uses the `oxc_transformer` Rust crate [directly](https://github.com/rolldown/rolldown/blob/3213e8fdb9e25f29295b6ec0d92fcc2ce03ce396/crates/rolldown/src/utils/pre_process_ecma_ast.rs#L67-L75).

## Benchmark Results

The benchmark setup is located at [oxc-project/bench-transformer](https://github.com/oxc-project/bench-transformer)
and the benchmarks are shown in its [GitHub Actions](https://github.com/oxc-project/bench-transformer/actions/workflows/ci.yml).

(Corrections are welcome for any misconfigurations.)

On `ubuntu-latest`, different lines of code are measured:

### Transform

| Lines  | oxc     | swc     | babel   |
| ------ | ------- | ------- | ------- |
| ~100   | 0.17 ms | 0.9 ms  | 14.5 ms |
| ~1000  | 1.0 ms  | 4.5 ms  | 42.1 ms |
| ~10000 | 22.9 ms | 37.3 ms | 552 ms  |

Oxc is 3x - 5x faster than SWC and 20x - 50x faster than Babel.

### Isolated Declarations

| Lines  | oxc    | tsc      |
| ------ | ------ | -------- |
| ~100   | 0.1 ms | 23.1 ms  |
| ~1000  | 3.1 ms | 26.8 ms  |
| ~10000 | 3.5 ms | 115.2 ms |

Oxc is 20x - 40x faster than TSC.

## Package size

Oxc downloads only 2 npm packages, a total of 2 MB.

| Package                                                                                  | Size                                                                                        |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `@oxc-transform/binding-darwin-arm64`                                                    | [2.0 MB](https://www.npmjs.com/package/@oxc-transform/binding-darwin-arm64)                 |
| `@swc/core-darwin-arm64`                                                                 | [37.5 MB](https://www.npmjs.com/package/@swc/core-darwin-arm64)                             |
| `@babel/core` + `@babel/preset-env` + `@babel/preset-react` + `@babel/preset-typescript` | [21 MB and 170 packages](https://www.npmjs.com/package/@oxc-transform/binding-darwin-arm64) |

## Memory Usage

Oxc uses less memory.

Memory usage transforming `parser.ts` (10777 lines) - measured using `/usr/bin/time -alh node`:

|       | Max RSS |
| ----- | ------- |
| oxc   | 51 MB   |
| swc   | 67 MB   |
| babel | 172 MB  |

## Next Release

Our next release will include target lowering to ES6 and `@babel/plugin-transform-modules-commonjs`.
