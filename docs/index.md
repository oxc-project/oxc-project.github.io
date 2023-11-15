---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "The JavaScript Oxidation Compiler"
  text: ""
  tagline: A collection of JavaScript tools written in Rust
  image:
    src: https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round.png
    alt: The JavaScript Oxidation Compiler
  actions:
    - theme: brand
      text: Get Started
      link: /docs/usage/linter
    - theme: alt
      text: View on GitHub
      link: https://github.com/oxc-project/oxc
features:
  - title: <a href="/docs/usage/parser">Parser ✅</a>
    details: 2x faster than swc<br>Passes 99% of Test262
  - title: <a href="/docs/usage/linter">Linter ✅</a>
    details: 50 - 100x faster than ESLint<br>Zero config
  - title: <a href="/docs/usage/resolver">Resolver ✅</a>
    details: 28x faster than enhanced-resolve<br>Feature complete
  - title: Formatter 🚧
    details: Prettier compatible<br>Work in progress
  - title: Transformer
    details: Babel compatible<br>Prototype
  - title: Minifier
    details: Optimization of Google Closure Compiler<br>Prototype
  - title: <a href="https://github.com/kaleidawave/ezno">Ezno Type Checker</a>
    details: A novel TypeScript type checker
  - title: <a href="https://rspack.dev">Rspack Bundler ✅</a>
    details: Rust port of Webpack<br>Partnership
  - title: Rolldown Bundler
    details: Rust port of Rollup<br>Partnership
---
