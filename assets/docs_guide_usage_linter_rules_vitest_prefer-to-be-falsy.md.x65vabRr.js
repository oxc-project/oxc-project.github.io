import{_ as o,C as i,c as p,o as r,j as e,ag as h,a,G as t,w as d}from"./chunks/framework.DteEOKvC.js";const C=JSON.parse('{"title":"vitest/prefer-to-be-falsy","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.md","filePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.md"}'),c={name:"docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.md"},k={id:"vitest-prefer-to-be-falsy",tabindex:"-1"},g={class:"rule-meta"};function u(f,s,y,E,b,v){const l=i("Badge"),n=i("Alert");return r(),p("div",null,[e("h1",k,[s[0]||(s[0]=a("vitest/prefer-to-be-falsy ")),t(l,{type:"info",text:"Style"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#vitest-prefer-to-be-falsy","aria-label":'Permalink to "vitest/prefer-to-be-falsy <Badge type="info" text="Style" />"'},"​",-1))]),e("div",g,[t(n,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule warns when <code>toBe(false)</code> is used with <code>expect</code> or <code>expectTypeOf</code>. With <code>--fix</code>, it will be replaced with <code>toBeFalsy()</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using <code>toBe(false)</code> is less expressive and may not account for other falsy values like <code>0</code>, <code>null</code>, or <code>undefined</code>. <code>toBeFalsy()</code> provides a more comprehensive check for any falsy value, improving the robustness of the tests.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeFalsy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeFalsy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-N2pe2" id="tab-rM1YWn-" checked><label data-title="CLI" for="tab-rM1YWn-">CLI</label><input type="radio" name="group-N2pe2" id="tab-tvrkg79"><label data-title="Config (.oxlintrc.json)" for="tab-tvrkg79">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitest/prefer-to-be-falsy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --vitest-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vitest/prefer-to-be-falsy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/vitest/prefer_to_be_falsy.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const m=o(c,[["render",u]]);export{C as __pageData,m as default};
