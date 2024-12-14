import{_ as t,c as n,j as s,a,G as l,a2 as r,B as o,o as d}from"./chunks/framework.Cm5JpC29.js";const E=JSON.parse('{"title":"typescript/no-dynamic-delete","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-dynamic-delete.md","filePath":"docs/guide/usage/linter/rules/typescript/no-dynamic-delete.md"}'),h={name:"docs/guide/usage/linter/rules/typescript/no-dynamic-delete.md"},p={id:"typescript-no-dynamic-delete",tabindex:"-1"};function c(k,e,y,u,g,m){const i=o("Badge");return d(),n("div",null,[s("h1",p,[e[0]||(e[0]=a("typescript/no-dynamic-delete ")),l(i,{type:"info",text:"Restriction"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-no-dynamic-delete","aria-label":'Permalink to "typescript/no-dynamic-delete <Badge type="info" text="Restriction" />"'},"​",-1))]),e[3]||(e[3]=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow using the delete operator on computed key expressions.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Deleting dynamically computed keys can be dangerous and in some cases not well optimized. Using the delete operator on keys that aren&#39;t runtime constants could be a sign that you&#39;re using the wrong data structures. Consider using a Map or Set if you’re using an object as a key-value collection.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;aa&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/36ebb3e7841818c238c44349d6cf859db4177d55/crates/oxc_linter/src/rules/typescript/no_dynamic_delete.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const f=t(h,[["render",c]]);export{E as __pageData,f as default};