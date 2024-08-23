import{_ as n,c as h,j as e,a as s,I as t,w as l,a4 as o,E as a,o as p}from"./chunks/framework.D6UG3LSr.js";const F=JSON.parse('{"title":"vitest/prefer-to-be-truthy","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md","filePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md"}'),d={name:"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md"},c={id:"vitest-prefer-to-be-truthy",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#vitest-prefer-to-be-truthy","aria-label":'Permalink to "vitest/prefer-to-be-truthy <Badge type="info" text="Style" />"'},"​",-1),u={class:"rule-meta"},y=e("span",{class:"emoji"},"🛠️",-1),E=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule warns when <code>toBe(true)</code> is used with <code>expect</code> or <code>expectTypeOf</code>. With <code>--fix</code>, it will be replaced with <code>toBeTruthy()</code>.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bad</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// good</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeTruthy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeTruthy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/vitest/prefer_to_be_truthy.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,6);function f(_,g,b,x,m,B){const i=a("Badge"),r=a("Alert");return p(),h("div",null,[e("h1",c,[s("vitest/prefer-to-be-truthy "),t(i,{type:"info",text:"Style"}),s(),k]),e("div",u,[t(r,{class:"fix",type:"info"},{default:l(()=>[y,s(" An auto-fix is available for this rule. ")]),_:1})]),E])}const C=n(d,[["render",f]]);export{F as __pageData,C as default};
