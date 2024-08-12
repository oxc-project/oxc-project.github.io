import{_ as t,c as i,j as e,a as s,I as n,a3 as l,o,E as r}from"./chunks/framework.wOwjnRe1.js";const F=JSON.parse('{"title":"jsx_a11y/aria-unsupported-elements","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.md"}'),p={name:"docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.md"},d={id:"jsx-a11y-aria-unsupported-elements",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#jsx-a11y-aria-unsupported-elements","aria-label":'Permalink to "jsx_a11y/aria-unsupported-elements <Badge type="info" text="Correctness" />"'},"​",-1),c=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Certain reserved DOM elements do not support ARIA roles, states and properties. This is often because they are not visible, for example <code>meta</code>, <code>html</code>, <code>script</code>, <code>style</code>. This rule enforces that these DOM elements do not contain the <code>role</code> and/or <code>aria-*</code> props.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-hidden</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,5);function k(u,m,_,g,y,E){const a=r("Badge");return o(),i("div",null,[e("h1",d,[s("jsx_a11y/aria-unsupported-elements "),n(a,{type:"info",text:"Correctness"}),s(),h]),c])}const f=t(p,[["render",k]]);export{F as __pageData,f as default};
