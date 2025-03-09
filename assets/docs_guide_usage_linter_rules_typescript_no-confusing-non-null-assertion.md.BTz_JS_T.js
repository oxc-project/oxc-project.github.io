import{_ as o,C as n,c as r,o as p,j as a,ag as h,a as i,G as e,w as d}from"./chunks/framework.B7cJCh-b.js";const x=JSON.parse('{"title":"typescript/no-confusing-non-null-assertion","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.md","filePath":"docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.md"},u={id:"typescript-no-confusing-non-null-assertion",tabindex:"-1"},k={class:"rule-meta"};function g(b,s,y,E,f,m){const t=n("Badge"),l=n("Alert");return p(),r("div",null,[a("h1",u,[s[0]||(s[0]=i("typescript/no-confusing-non-null-assertion ")),e(t,{type:"info",text:"Suspicious"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#typescript-no-confusing-non-null-assertion","aria-label":'Permalink to "typescript/no-confusing-non-null-assertion <Badge type="info" text="Suspicious" />"'},"​",-1))]),a("div",k,[e(l,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🚧",-1),i(" An auto-fix is still under development. ")])),_:1})]),s[4]||(s[4]=h('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow non-null assertion in locations that may be confusing.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using a non-null assertion (!) next to an assign or equals check (= or == or ===) creates code that is confusing as it looks similar to a not equals check (!= !==).</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a non-null assertions(`!`) and an equals test(`==`)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// not equals test(`!==`)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a non-null assertions(`!`) and an triple equals test(`===`)</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lZegA" id="tab-KrPvZjJ" checked><label data-title="CLI" for="tab-KrPvZjJ">CLI</label><input type="radio" name="group-lZegA" id="tab-XMs6Fss"><label data-title="Config (.oxlintrc.json)" for="tab-XMs6Fss">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript/no-confusing-non-null-assertion</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript/no-confusing-non-null-assertion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/typescript/no_confusing_non_null_assertion.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const _=o(c,[["render",g]]);export{x as __pageData,_ as default};
