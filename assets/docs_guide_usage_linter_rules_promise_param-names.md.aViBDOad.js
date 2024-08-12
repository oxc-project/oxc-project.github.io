import{_ as e,c as t,j as a,a as s,I as n,a3 as r,o as h,E as p}from"./chunks/framework.wOwjnRe1.js";const A=JSON.parse('{"title":"promise/param-names","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/promise/param-names.md","filePath":"docs/guide/usage/linter/rules/promise/param-names.md"}'),l={name:"docs/guide/usage/linter/rules/promise/param-names.md"},o={id:"promise-param-names",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#promise-param-names","aria-label":'Permalink to "promise/param-names <Badge type="info" text="Style" />"'},"​",-1),k=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce standard parameter names for Promise constructors.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Ensures that new Promise() is instantiated with the parameter names resolve, reject to avoid confusion with order such as reject, resolve. The Promise constructor uses the RevealingConstructor pattern. Using the same parameter names as the language specification makes code more uniform and easier to understand.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// incorrect order</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ok</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// non-standard parameter names</span></span></code></pre></div>`,7);function c(m,E,g,u,y,_){const i=p("Badge");return h(),t("div",null,[a("h1",o,[s("promise/param-names "),n(i,{type:"info",text:"Style"}),s(),d]),k])}const b=e(l,[["render",c]]);export{A as __pageData,b as default};
