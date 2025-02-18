import{_ as i,C as n,c as l,o,j as e,ag as r,a,G as p}from"./chunks/framework.K3-BBDXc.js";const m=JSON.parse('{"title":"typescript/no-non-null-assertion","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-non-null-assertion.md","filePath":"docs/guide/usage/linter/rules/typescript/no-non-null-assertion.md"}'),h={name:"docs/guide/usage/linter/rules/typescript/no-non-null-assertion.md"},d={id:"typescript-no-non-null-assertion",tabindex:"-1"};function c(u,s,k,g,y,b){const t=n("Badge");return o(),l("div",null,[e("h1",d,[s[0]||(s[0]=a("typescript/no-non-null-assertion ")),p(t,{type:"info",text:"Restriction"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#typescript-no-non-null-assertion","aria-label":'Permalink to "typescript/no-non-null-assertion <Badge type="info" text="Restriction" />"'},"​",-1))]),s[3]||(s[3]=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow non-null assertions using the ! postfix operator.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>TypeScript&#39;s ! non-null assertion operator asserts to the type system that an expression is non-nullable, as in not null or undefined. Using assertions to tell the type system new information is often a sign that code is not fully type-safe. It&#39;s generally better to structure program logic so that TypeScript understands when values may be nullable.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x.y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WWTC-" id="tab-kh6Ye-V" checked><label data-title="CLI" for="tab-kh6Ye-V">CLI</label><input type="radio" name="group-WWTC-" id="tab-4K9Pm4p"><label data-title="Config (.oxlintrc.json)" for="tab-4K9Pm4p">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript/no-non-null-assertion</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript/no-non-null-assertion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/typescript/no_non_null_assertion.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const f=i(h,[["render",c]]);export{m as __pageData,f as default};
