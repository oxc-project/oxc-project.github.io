---
titleTemplate: "The JavaScript Oxidation Compiler"
layout: home
hero:
  name: "The JavaScript Oxidation Compiler"
  tagline: A collection of JavaScript tools written in Rust
  image:
    src: https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/uwu.png
    alt: The JavaScript Oxidation Compiler
  actions:
    - theme: brand
      text: Get Started
      link: /docs/guide/introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/oxc-project/oxc
features:
  - title: Parser ✅
    details: 3x faster than swc
    link: /docs/guide/usage/parser
    linkText: Usage guide
  - title: Linter ✅
    details: 50~100x faster than ESLint<br/>340+ rules and counting
    link: /docs/guide/usage/linter
    linkText: Usage guide
  - title: Resolver ✅
    details: 28x faster than enhanced-resolve
    link: /docs/guide/usage/resolver
    linkText: Usage guide
  - title: Formatter
    details: Prettier compatible
  - title: Transformer 🚧
    details: Babel compatible
  - title: Minifier
    details: Faster and better at compression
  - title: Rolldown Bundler 🚧
    details: Rollup compatible<br/>Designed for Vite
    link: https://rolldown.rs
    external: true
  - title: Rspack Bundler ✅
    details: Webpack compatible
    link: https://rspack.dev
    external: true
---

<script setup>
import Sponsors from 'sponsors/sponsors.svg?component'
</script>

<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
  <h2>Sponsored by</h2>
  <Sponsors />
</div>

<style>
.VPHero .VPImage.image-src {
  max-width: 90%;
}
</style>
