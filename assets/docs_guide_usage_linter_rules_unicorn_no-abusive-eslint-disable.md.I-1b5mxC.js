import{_ as e,c as n,j as i,a as s,I as l,a3 as t,o as h,E as o}from"./chunks/framework.wOwjnRe1.js";const v=JSON.parse('{"title":"unicorn/no-abusive-eslint-disable","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.md"},d={id:"unicorn-no-abusive-eslint-disable",tabindex:"-1"},r=i("a",{class:"header-anchor",href:"#unicorn-no-abusive-eslint-disable","aria-label":'Permalink to "unicorn/no-abusive-eslint-disable <Badge type="info" text="Restriction" />"'},"​",-1),c=t(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule disallows <code>eslint-disable</code> comments that do not specify any rules to disable.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>When only one rule should be disabled but the <code>eslint-disable</code> comment does not specify any rules, other useful errors will also be silently ignored.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fail</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint-disable */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint-disable-line</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint-disable-next-line</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Pass</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint-disable no-console */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint-disable-line no-console</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint-disable-next-line no-console</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message);</span></span></code></pre></div>`,7);function k(g,E,u,b,y,m){const a=o("Badge");return h(),n("div",null,[i("h1",d,[s("unicorn/no-abusive-eslint-disable "),l(a,{type:"info",text:"Restriction"}),s(),r]),c])}const A=e(p,[["render",k]]);export{v as __pageData,A as default};
