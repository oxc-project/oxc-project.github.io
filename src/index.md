---
titleTemplate: "The JavaScript Oxidation Compiler"
layout: home
hero:
  name: "The JavaScript Oxidation Compiler"
  tagline: A collection of JavaScript tools written in Rust
  image:
    src: https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round-bubbles.png
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
    details: 3x faster than swc<br/>All Test262 stage4 tests passed
    link: /docs/guide/usage/parser
    linkText: Usage guide
  - title: Linter ✅
    details: 50~100x faster than ESLint<br/>500+ rules and growing
    link: /docs/guide/usage/linter
    linkText: Usage guide
  - title: Resolver ✅
    details: 28x faster than enhanced-resolve
    link: /docs/guide/usage/resolver
    linkText: Usage guide
  - title: Transformer 🚧
    details: Babel compatible<br/>✓ TypeScript / React JSX<br/>✓ Isolated Declarations DTS Emit
    link: /docs/guide/usage/transformer
    linkText: Usage guide
  - title: Minifier
    details: Faster and better at compression<br/>Prototype is complete
  - title: Formatter
    details: Prettier compatible<br/>Prototype is complete
  - title: Rolldown Bundler 🚧
    details: Rollup compatible<br/>Designed for Vite
    link: https://rolldown.rs
    external: true
  - title: Nova JavaScript Engine 🚧
    details: ECMAScript specification with data-oriented design
    link: https://trynova.dev
    external: true
---

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

<script setup>
import SponsorsSVG from '../public/sponsors.svg?raw'
import { onMounted } from 'vue'

onMounted(() => {
  const img = document.querySelector('.VPHero .VPImage.image-src');
  img.onclick = () => {
    img.src = 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/uwu.png';
    img.alt = 'Oxc Kawaii Logo by @icarusgkx';
    img.style = "max-width:90%";
  };
})
</script>

<div class="Sponsors">
  <h2>Sponsored by</h2>
  <div v-html="SponsorsSVG"></div>
</div>
