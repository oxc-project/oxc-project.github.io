import{_ as l,C as i,c as r,o as h,j as a,ag as p,a as e,G as t,w as d}from"./chunks/framework.K3-BBDXc.js";const C=JSON.parse('{"title":"oxc/no-const-enum","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/no-const-enum.md","filePath":"docs/guide/usage/linter/rules/oxc/no-const-enum.md"}'),c={name:"docs/guide/usage/linter/rules/oxc/no-const-enum.md"},u={id:"oxc-no-const-enum",tabindex:"-1"},k={class:"rule-meta"};function g(b,s,m,E,y,x){const n=i("Badge"),o=i("Alert");return h(),r("div",null,[a("h1",u,[s[0]||(s[0]=e("oxc/no-const-enum ")),t(n,{type:"info",text:"Restriction"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#oxc-no-const-enum","aria-label":'Permalink to "oxc/no-const-enum <Badge type="info" text="Restriction" />"'},"​",-1))]),a("div",k,[t(o,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow TypeScript <code>const enum</code></p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Const enums are enums that should be inlined at use sites. Const enums are not supported by bundlers and are incompatible with the isolatedModules mode. Their use can lead to import nonexistent values (because const enums are erased).</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-n1cp_" id="tab-j0Yk_os" checked><label data-title="CLI" for="tab-j0Yk_os">CLI</label><input type="radio" name="group-n1cp_" id="tab-W9P3NIZ"><label data-title="Config (.oxlintrc.json)" for="tab-W9P3NIZ">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxc/no-const-enum</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;oxc/no-const-enum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/oxc/no_const_enum.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const v=l(c,[["render",g]]);export{C as __pageData,v as default};
