import{_ as o,c as l,j as e,a as s,I as a,w as r,a3 as d,E as t,o as p}from"./chunks/framework.wOwjnRe1.js";const w=JSON.parse('{"title":"typescript/no-non-null-asserted-optional-chain","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md","filePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md"}'),h={name:"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md"},c={id:"typescript-no-non-null-asserted-optional-chain",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#typescript-no-non-null-asserted-optional-chain","aria-label":'Permalink to "typescript/no-non-null-asserted-optional-chain <Badge type="info" text="Correctness" />"'},"​",-1),_={class:"rule-meta"},k=e("span",{class:"emoji"},"✅",-1),y=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow non-null assertions after an optional chain expression.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><code>?.</code> optional chain expressions provide undefined if an object is null or undefined. Using a <code>!</code> non-null assertion to assert the result of an <code>?.</code> optional chain expression is non-nullable is likely wrong.</p><p>Most of the time, either the object was not nullable and did not need the <code>?.</code> for its property lookup, or the <code>!</code> is incorrect and introducing a type safety hole.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo?.bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,7);function f(g,m,E,b,x,v){const n=t("Badge"),i=t("Alert");return p(),l("div",null,[e("h1",c,[s("typescript/no-non-null-asserted-optional-chain "),a(n,{type:"info",text:"Correctness"}),s(),u]),e("div",_,[a(i,{class:"default-on",type:"success"},{default:r(()=>[k,s(" This rule is turned on by default. ")]),_:1})]),y])}const A=o(h,[["render",f]]);export{w as __pageData,A as default};
