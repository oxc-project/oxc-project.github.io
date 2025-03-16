import{_ as r,c as a,o as t,ag as s}from"./chunks/framework.Az7Yw7dm.js";const d=JSON.parse('{"title":"All Benchmarks","description":"","frontmatter":{"title":"All Benchmarks","outline":"deep"},"headers":[],"relativePath":"docs/guide/benchmarks.md","filePath":"docs/guide/benchmarks.md"}'),o={name:"docs/guide/benchmarks.md"};function n(i,e,l,c,h,p){return t(),a("div",null,e[0]||(e[0]=[s('<h1 id="all-benchmarks" tabindex="-1">All Benchmarks <a class="header-anchor" href="#all-benchmarks" aria-label="Permalink to &quot;All Benchmarks&quot;">​</a></h1><h2 id="parser" tabindex="-1">Parser <a class="header-anchor" href="#parser" aria-label="Permalink to &quot;Parser&quot;">​</a></h2><p>Oxc&#39;s parser is at least 3x faster than swc and 5x faster than Biome.</p><p>Please note that it is not an apple-to-apple comparison with Biome. Biome&#39;s parser <a href="https://biomejs.dev/internals/architecture" target="_blank" rel="noreferrer">produces a CST</a> instead of an AST, which requires a lot more work.</p><p>See repository <a href="https://github.com/oxc-project/bench-javascript-parser-written-in-rust" target="_blank" rel="noreferrer">bench-javascript-parser-written-in-rust</a>.</p><h2 id="transformer" tabindex="-1">Transformer <a class="header-anchor" href="#transformer" aria-label="Permalink to &quot;Transformer&quot;">​</a></h2><ul><li>Compared to swc, oxc transformer is 4x faster, uses 20% less memory, and is 35 MB smaller in package size (from swc&#39;s 37MB).</li><li>Compared to babel, oxc transformer is 40x faster, uses 70% less memory, and is 19 MB smaller with 168 npm packages less to install.</li></ul><p>See repository <a href="https://github.com/oxc-project/bench-transformer" target="_blank" rel="noreferrer">bench-transformer</a>.</p><h2 id="linter" tabindex="-1">Linter <a class="header-anchor" href="#linter" aria-label="Permalink to &quot;Linter&quot;">​</a></h2><p>Oxlint is 50x - 100x faster than ESLint depending on the number of CPU cores.</p><p>See repository <a href="https://github.com/oxc-project/bench-javascript-linter" target="_blank" rel="noreferrer">bench-javascript-linter</a>.</p><h2 id="resolver" tabindex="-1">Resolver <a class="header-anchor" href="#resolver" aria-label="Permalink to &quot;Resolver&quot;">​</a></h2><p><code>oxc-resolver</code> is 20x faster than webpack&#39;s <code>enhanced-resolve</code>.</p><p>See repository <a href="https://github.com/oxc-project/bench-resolver" target="_blank" rel="noreferrer">bench-resolver</a>.</p>',14)]))}const f=r(o,[["render",n]]);export{d as __pageData,f as default};
