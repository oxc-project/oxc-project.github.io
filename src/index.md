---
titleTemplate: "The JavaScript Oxidation Compiler"
layout: home
hero:
  name: "The JavaScript Oxidation Compiler"
  tagline: A collection of JavaScript tools written in Rust
  image:
    src: https://raw.githubusercontent.com/oxc-project/oxc-assets/main/logo-round-min.png
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
    linkText: Learn more
  - title: Linter ✅
    details: 50~100x faster than ESLint
    link: /docs/guide/usage/linter
    linkText: Learn more
  - title: Resolver ✅
    details: 28x faster than enhanced-resolve
    link: /docs/guide/usage/resolver
    linkText: Learn more
  - title: Formatter
    details: Prettier compatible
  - title: Transformer 🚧
    details: Babel compatible
  - title: Minifier
    details: Faster and better at compression
  - title: Rspack Bundler ✅
    details: Webpack compatible
    link: https://rspack.dev
    external: true
  - title: Rolldown Bundler 🚧
    details: Rollup compatible
    link: https://rolldown.rs
    external: true
---

<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
  <h2>Sponsored by</h2>
  <a href="https://github.com/sponsors/Boshen" target="_blank" rel="noopener noreferrer">
    <img
      crossorigin="anonymous"
      inline-block
      width="768" height="1464"
      class="resizable-img"
      loading="lazy"
      src="https://cdn.jsdelivr.net/gh/boshen/sponsors/sponsors.svg"
      alt="Sponsors"
    >
  </a>
</div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('uwu') != null) {
    const img = document.querySelector('.VPHero .VPImage.image-src');
    img.src = 'https://raw.githubusercontent.com/oxc-project/oxc-assets/main/uwu.png';
    img.alt = 'Oxc Kawaii Logo by @icarusgkx';
    img.style = "max-width:90%";
  }
})
</script>
