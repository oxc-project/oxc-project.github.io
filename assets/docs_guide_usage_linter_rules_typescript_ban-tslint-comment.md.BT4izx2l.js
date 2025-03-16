import{_ as o,C as a,c as r,o as p,j as s,ag as h,a as t,G as i,w as d}from"./chunks/framework.Az7Yw7dm.js";const E=JSON.parse('{"title":"typescript/ban-tslint-comment","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/ban-tslint-comment.md","filePath":"docs/guide/usage/linter/rules/typescript/ban-tslint-comment.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/ban-tslint-comment.md"},u={id:"typescript-ban-tslint-comment",tabindex:"-1"},b={class:"rule-meta"};function m(k,e,g,y,f,v){const n=a("Badge"),l=a("Alert");return p(),r("div",null,[s("h1",u,[e[0]||(e[0]=t("typescript/ban-tslint-comment ")),i(n,{type:"info",text:"Style"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-ban-tslint-comment","aria-label":'Permalink to "typescript/ban-tslint-comment <Badge type="info" text="Style" />"'},"​",-1))]),s("div",b,[i(l,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),t(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule disallows <code>tslint:&lt;rule-flag&gt;</code> comments</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Useful when migrating from TSLint to ESLint. Once TSLint has been removed, this rule helps locate TSLint annotations</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tslint:disable-next-line</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">someCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-c7g0d" id="tab-xHe3a8G" checked><label data-title="CLI" for="tab-xHe3a8G">CLI</label><input type="radio" name="group-c7g0d" id="tab-_bbeiSK"><label data-title="Config (.oxlintrc.json)" for="tab-_bbeiSK">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript/ban-tslint-comment</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript/ban-tslint-comment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/typescript/ban_tslint_comment.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const C=o(c,[["render",m]]);export{E as __pageData,C as default};
