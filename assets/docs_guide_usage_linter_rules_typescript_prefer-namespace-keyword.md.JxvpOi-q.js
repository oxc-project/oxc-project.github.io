import{_ as n,C as t,c as p,o as l,j as a,ag as d,a as s,G as i,w as h}from"./chunks/framework.Az7Yw7dm.js";const v=JSON.parse('{"title":"typescript/prefer-namespace-keyword","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.md","filePath":"docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.md"},u={id:"typescript-prefer-namespace-keyword",tabindex:"-1"},k={class:"rule-meta"};function y(m,e,f,g,b,x){const r=t("Badge"),o=t("Alert");return l(),p("div",null,[a("h1",u,[e[0]||(e[0]=s("typescript/prefer-namespace-keyword ")),i(r,{type:"info",text:"Style"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#typescript-prefer-namespace-keyword","aria-label":'Permalink to "typescript/prefer-namespace-keyword <Badge type="info" text="Style" />"'},"​",-1))]),a("div",k,[i(o,{class:"fix",type:"info"},{default:h(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule reports when the module keyword is used instead of namespace. This rule does not report on the use of TypeScript module declarations to describe external APIs (declare module &#39;foo&#39; {}).</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Namespaces are an outdated way to organize TypeScript code. ES2015 module syntax is now preferred (import/export). For projects still using custom modules / namespaces, it&#39;s preferred to refer to them as namespaces.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-9KBLA" id="tab-m3MyL3_" checked><label data-title="CLI" for="tab-m3MyL3_">CLI</label><input type="radio" name="group-9KBLA" id="tab-atwV34S"><label data-title="Config (.oxlintrc.json)" for="tab-atwV34S">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript/prefer-namespace-keyword</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript/prefer-namespace-keyword&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/f5b53d4cbba0da3f684f1854f5801e8a6d15f214/crates/oxc_linter/src/rules/typescript/prefer_namespace_keyword.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const w=n(c,[["render",y]]);export{v as __pageData,w as default};
