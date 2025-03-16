import{_ as r,C as i,c as h,o,j as e,ag as p,a as t,G as a,w as d}from"./chunks/framework.Az7Yw7dm.js";const C=JSON.parse('{"title":"vitest/prefer-to-be-truthy","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md","filePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md"}'),k={name:"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md"},c={id:"vitest-prefer-to-be-truthy",tabindex:"-1"},u={class:"rule-meta"};function g(y,s,E,b,f,v){const n=i("Badge"),l=i("Alert");return o(),h("div",null,[e("h1",c,[s[0]||(s[0]=t("vitest/prefer-to-be-truthy ")),a(n,{type:"info",text:"Style"}),s[1]||(s[1]=t()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#vitest-prefer-to-be-truthy","aria-label":'Permalink to "vitest/prefer-to-be-truthy <Badge type="info" text="Style" />"'},"​",-1))]),e("div",u,[a(l,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"🛠️",-1),t(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule warns when <code>toBe(true)</code> is used with <code>expect</code> or <code>expectTypeOf</code>. With <code>--fix</code>, it will be replaced with <code>toBeTruthy()</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using <code>toBe(true)</code> is less flexible and may not account for other truthy values like non-empty strings or objects. <code>toBeTruthy()</code> checks for any truthy value, which makes the tests more comprehensive and robust.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeTruthy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeTruthy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-zU0Lw" id="tab-FA5342M" checked><label data-title="CLI" for="tab-FA5342M">CLI</label><input type="radio" name="group-zU0Lw" id="tab-2Nk0FPT"><label data-title="Config (.oxlintrc.json)" for="tab-2Nk0FPT">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitest/prefer-to-be-truthy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --vitest-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vitest/prefer-to-be-truthy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/vitest/prefer_to_be_truthy.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const m=r(k,[["render",g]]);export{C as __pageData,m as default};
