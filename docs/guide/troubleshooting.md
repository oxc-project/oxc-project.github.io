---
url: /docs/guide/troubleshooting.md
---
# Troubleshooting

## Cannot find native binding. npm has a bug related to optional dependencies

This is a npm (< v11.3.0) bug, things you can try:

* use latest npm
* use pnpm
* `rm -rf node_modules; npm i`
* Install one of these bindings explicitly in your package.json because package manager is not picking up the optional dependency:

```
@{app}/binding-win32-x64-msvc
@{app}/binding-win32-arm64-msvc
@{app}/binding-linux-x64-gnu
@{app}/binding-linux-x64-musl
@{app}/binding-freebsd-x64
@{app}/binding-linux-arm64-gnu
@{app}/binding-linux-arm64-musl
@{app}/binding-linux-arm-gnueabihf
@{app}/binding-linux-arm-musleabihf
@{app}/binding-linux-s390x-gnu
@{app}/binding-linux-riscv64-gnu
@{app}/binding-darwin-x64
@{app}/binding-darwin-arm64
@{app}/binding-android-arm64
@{app}/binding-wasm32-wasi
```

where app is `oxlint`, `oxfmt`, `oxc-parser`, `oxc-transform`, `oxc-minify`, `oxc-resolver`
