import{_ as t,C as l,c as n,o,j as a,ag as r,a as e,G as h}from"./chunks/framework.DteEOKvC.js";const y=JSON.parse('{"title":"eslint/no-restricted-globals","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-restricted-globals.md","filePath":"docs/guide/usage/linter/rules/eslint/no-restricted-globals.md"}'),p={name:"docs/guide/usage/linter/rules/eslint/no-restricted-globals.md"},d={id:"eslint-no-restricted-globals",tabindex:"-1"};function c(k,s,g,u,b,E){const i=l("Badge");return o(),n("div",null,[a("h1",d,[s[0]||(s[0]=e("eslint/no-restricted-globals ")),h(i,{type:"info",text:"Restriction"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#eslint-no-restricted-globals","aria-label":'Permalink to "eslint/no-restricted-globals <Badge type="info" text="Restriction" />"'},"​",-1))]),s[3]||(s[3]=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule allows you to specify global variable names that you don&#39;t want to use in your application.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Disallowing usage of specific global variables can be useful if you want to allow a set of global variables by enabling an environment, but still want to disallow some of those.</p><p>For instance, early Internet Explorer versions exposed the current DOM event as a global variable <code>event</code>, but using this variable has been considered as a bad practice for a long time. Restricting this will make sure this variable isn&#39;t used in browser code.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>If we have options:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;no-restricted-globals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;event&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>The following patterns are considered problems:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Unexpected global variable &#39;event&#39;. Use local parameter instead.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Z4rhM" id="tab-ZdaGryi" checked><label data-title="CLI" for="tab-ZdaGryi">CLI</label><input type="radio" name="group-Z4rhM" id="tab-z3DKfMK"><label data-title="Config (.oxlintrc.json)" for="tab-z3DKfMK">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-restricted-globals</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-restricted-globals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/eslint/no_restricted_globals.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,16))])}const f=t(p,[["render",c]]);export{y as __pageData,f as default};
