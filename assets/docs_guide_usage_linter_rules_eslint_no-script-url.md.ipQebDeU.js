import{_ as i,c as t,j as s,a as e,I as r,a4 as n,o as l,E as o}from"./chunks/framework.D6UG3LSr.js";const v=JSON.parse('{"title":"eslint/no-script-url","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-script-url.md","filePath":"docs/guide/usage/linter/rules/eslint/no-script-url.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-script-url.md"},h={id:"eslint-no-script-url",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#eslint-no-script-url","aria-label":'Permalink to "eslint/no-script-url <Badge type="info" text="Style" />"'},"​",-1),d=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow javascript: urls</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using javascript: URLs is considered by some as a form of eval. Code passed in javascript: URLs has to be parsed and evaluated by the browser in the same way that eval is processed.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*eslint no-script-url: &quot;error&quot;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;javascript:void(0)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`javascript:void(0)\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_script_url.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9);function u(k,_,g,m,b,f){const a=o("Badge");return l(),t("div",null,[s("h1",h,[e("eslint/no-script-url "),r(a,{type:"info",text:"Style"}),e(),p]),d])}const y=i(c,[["render",u]]);export{v as __pageData,y as default};