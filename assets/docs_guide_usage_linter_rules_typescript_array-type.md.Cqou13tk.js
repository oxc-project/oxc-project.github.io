import{_ as l,c as p,j as a,a as e,G as i,w as h,a2 as o,B as t,o as d}from"./chunks/framework.Cm5JpC29.js";const x=JSON.parse('{"title":"typescript/array-type","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/array-type.md","filePath":"docs/guide/usage/linter/rules/typescript/array-type.md"}'),k={name:"docs/guide/usage/linter/rules/typescript/array-type.md"},y={id:"typescript-array-type",tabindex:"-1"},c={class:"rule-meta"};function g(u,s,m,E,f,b){const r=t("Badge"),n=t("Alert");return d(),p("div",null,[a("h1",y,[s[0]||(s[0]=e("typescript/array-type ")),i(r,{type:"info",text:"Style"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#typescript-array-type","aria-label":'Permalink to "typescript/array-type <Badge type="info" text="Style" />"'},"​",-1))]),a("div",c,[i(n,{class:"fix",type:"info"},{default:h(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require consistently using either <code>T[]</code> or <code>Array&lt;T&gt;</code> for arrays.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using the <code>Array</code> type directly is not idiomatic. Instead, use the array type <code>T[]</code> or <code>Array&lt;T&gt;</code>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/a6b0100501fda75ec313146a992a9f5fce995518/crates/oxc_linter/src/rules/typescript/array_type.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const C=l(k,[["render",g]]);export{x as __pageData,C as default};
