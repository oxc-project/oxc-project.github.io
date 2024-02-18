import{_ as s,c as e,J as t,a5 as i,o as r,G as l}from"./chunks/framework.BWLfa7pZ.js";const m=JSON.parse('{"title":"Parser","description":"","frontmatter":{"title":"Parser","outline":"deep","badges":[{"src":"https://img.shields.io/npm/dw/oxc-parser","alt":"npm"}]},"headers":[],"relativePath":"zh/docs/guide/usage/parser.md","filePath":"zh/docs/guide/usage/parser.md"}'),n={name:"zh/docs/guide/usage/parser.md"},p=i('<h1 id="parser" tabindex="-1">Parser <a class="header-anchor" href="#parser" aria-label="Permalink to &quot;Parser&quot;">​</a></h1><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>2x faster than <a href="https://swc.rs" target="_blank" rel="noreferrer">swc</a> parser</li><li>By far the fastest and most conformant JavaScript and TypeScript (including JSX and TSX) parser written in Rust</li></ul><p>You can check <a href="https://github.com/oxc-project/bench-javascript-parser-written-in-rust" target="_blank" rel="noreferrer">benchmark</a> for more detail.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="rust" tabindex="-1">Rust <a class="header-anchor" href="#rust" aria-label="Permalink to &quot;Rust&quot;">​</a></h3><p>Install crates:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo install oxc</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo install oxc_ast</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cargo install oxc_parser</span></span></code></pre></div><ul><li>The umbrella crate <a href="https://docs.rs/oxc" target="_blank" rel="noreferrer">oxc</a> exports all public crates from this repository</li><li>The AST and parser crates <a href="https://docs.rs/oxc_ast" target="_blank" rel="noreferrer">oxc_ast</a> and <a href="https://docs.rs/oxc_parser" target="_blank" rel="noreferrer">oxc_parser</a> are production ready</li></ul><h3 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h3><p>Install <a href="https://www.npmjs.com/package/oxc-parser" target="_blank" rel="noreferrer">oxc-parser</a>:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-YLhs8" id="tab-8OIAGU1" checked="checked"><label for="tab-8OIAGU1">npm</label><input type="radio" name="group-YLhs8" id="tab-BOAnS2F"><label for="tab-BOAnS2F">pnpm</label><input type="radio" name="group-YLhs8" id="tab-MzndnrU"><label for="tab-MzndnrU">yarn</label><input type="radio" name="group-YLhs8" id="tab-2Snwjga"><label for="tab-2Snwjga">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm add -D oxc-parser</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm add -D oxc-parser</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn add -D oxc-parser</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun add -D oxc-parser</span></span></code></pre></div></div></div>',14);function o(h,d,c,u,g,k){const a=l("AppBadgeList");return r(),e("div",null,[t(a),p])}const v=s(n,[["render",o]]);export{m as __pageData,v as default};