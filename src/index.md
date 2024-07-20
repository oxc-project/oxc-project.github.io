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
  - title: Transformer 🚧
    details: Babel compatible<br/>Isolated Declarations Dts Emit
    link: /docs/guide/usage/transformer
  - title: Formatter
    details: Prettier compatible
  - title: Minifier
    details: Faster and better at compression
  - title: Rolldown Bundler 🚧
    details: Rollup compatible<br/>Designed for Vite
    link: https://rolldown.rs
    external: true
  - title: Nova JavaScript Engine 🚧
    details: ECMAScript specification with data-oriented design
    link: https://trynova.dev
    external: true
---

<script setup>
import SponsorsSVG from '../public/sponsors.svg?raw'
</script>

<div class="Sponsors">
  <h2>Sponsored by</h2>
  <div v-html="SponsorsSVG"></div>
</div>

<style>
.VPHero .VPImage.image-src {
  max-width: 90%;
}

.Sponsors {
  display: grid;
  justify-items: center;

  /* Support narrow viewport */
  svg {
    width: 100%;
    height: auto;
  }
}
</style>
