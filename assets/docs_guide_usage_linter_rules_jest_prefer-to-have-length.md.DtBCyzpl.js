import{_ as h,c as l,j as s,a as i,I as a,w as p,a3 as k,E as e,o as r}from"./chunks/framework.wOwjnRe1.js";const x=JSON.parse('{"title":"jest/prefer-to-have-length","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/prefer-to-have-length.md","filePath":"docs/guide/usage/linter/rules/jest/prefer-to-have-length.md"}'),o={name:"docs/guide/usage/linter/rules/jest/prefer-to-have-length.md"},d={id:"jest-prefer-to-have-length",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#jest-prefer-to-have-length","aria-label":'Permalink to "jest/prefer-to-have-length <Badge type="info" text="Style" />"'},"​",-1),c={class:"rule-meta"},g=s("span",{class:"emoji"},"🛠️",-1),y=k(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>In order to have a better failure message, <code>toHaveLength()</code> should be used upon asserting expectations on objects length property.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>This rule triggers a warning if <code>toBe()</code>, <code>toEqual()</code> or <code>toStrictEqual()</code> is used to assert objects length property.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// valid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">expect.hasAssertions;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">expect.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasAssertions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(files).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toHaveLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(files.name).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(files[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;length&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(files[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;length&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(files[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;length&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;not&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,6);function u(F,_,f,B,C,m){const t=e("Badge"),n=e("Alert");return r(),l("div",null,[s("h1",d,[i("jest/prefer-to-have-length "),a(t,{type:"info",text:"Style"}),i(),E]),s("div",c,[a(n,{class:"fix",type:"info"},{default:p(()=>[g,i(" An auto-fix is available for this rule. ")]),_:1})]),y])}const b=h(o,[["render",u]]);export{x as __pageData,b as default};
