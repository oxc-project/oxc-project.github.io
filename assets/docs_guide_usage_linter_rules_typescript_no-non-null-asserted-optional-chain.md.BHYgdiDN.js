import{_ as l,C as i,c as r,o as p,j as e,ag as d,a,G as t,w as h}from"./chunks/framework.DteEOKvC.js";const x=JSON.parse('{"title":"typescript/no-non-null-asserted-optional-chain","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md","filePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md"},u={id:"typescript-no-non-null-asserted-optional-chain",tabindex:"-1"},k={class:"rule-meta"};function g(b,s,y,E,f,m){const n=i("Badge"),o=i("Alert");return p(),r("div",null,[e("h1",u,[s[0]||(s[0]=a("typescript/no-non-null-asserted-optional-chain ")),t(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#typescript-no-non-null-asserted-optional-chain","aria-label":'Permalink to "typescript/no-non-null-asserted-optional-chain <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",k,[t(o,{class:"default-on",type:"success"},{default:h(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"✅",-1),a(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow non-null assertions after an optional chain expression.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><code>?.</code> optional chain expressions provide undefined if an object is null or undefined. Using a <code>!</code> non-null assertion to assert the result of an <code>?.</code> optional chain expression is non-nullable is likely wrong.</p><p>Most of the time, either the object was not nullable and did not need the <code>?.</code> for its property lookup, or the <code>!</code> is incorrect and introducing a type safety hole.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo?.bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rlhPs" id="tab-XXGbRLE" checked><label data-title="CLI" for="tab-XXGbRLE">CLI</label><input type="radio" name="group-rlhPs" id="tab-fz7tk-S"><label data-title="Config (.oxlintrc.json)" for="tab-fz7tk-S">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript/no-non-null-asserted-optional-chain</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript/no-non-null-asserted-optional-chain&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/typescript/no_non_null_asserted_optional_chain.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const C=l(c,[["render",g]]);export{x as __pageData,C as default};
