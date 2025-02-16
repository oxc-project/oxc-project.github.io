import{_ as t,C as l,c as n,o,j as a,ag as d,a as i,G as p}from"./chunks/framework.K3-BBDXc.js";const v=JSON.parse('{"title":"jsdoc/empty-tags","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/empty-tags.md","filePath":"docs/guide/usage/linter/rules/jsdoc/empty-tags.md"}'),r={name:"docs/guide/usage/linter/rules/jsdoc/empty-tags.md"},c={id:"jsdoc-empty-tags",tabindex:"-1"};function h(k,s,g,u,y,b){const e=l("Badge");return o(),n("div",null,[a("h1",c,[s[0]||(s[0]=i("jsdoc/empty-tags ")),p(e,{type:"info",text:"Restriction"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#jsdoc-empty-tags","aria-label":'Permalink to "jsdoc/empty-tags <Badge type="info" text="Restriction" />"'},"​",-1))]),s[3]||(s[3]=d(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Expects the following tags to be empty of any content:</p><ul><li><code>@abstract</code></li><li><code>@async</code></li><li><code>@generator</code></li><li><code>@global</code></li><li><code>@hideconstructor</code></li><li><code>@ignore</code></li><li><code>@inner</code></li><li><code>@instance</code></li><li><code>@override</code></li><li><code>@readonly</code></li><li><code>@inheritDoc</code></li><li><code>@internal</code></li><li><code>@overload</code></li><li><code>@package</code></li><li><code>@private</code></li><li><code>@protected</code></li><li><code>@public</code></li><li><code>@static</code></li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The void tags should be empty.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@async</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> foo */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> bar */</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@async</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ict_c" id="tab-ZfxHamu" checked><label data-title="CLI" for="tab-ZfxHamu">CLI</label><input type="radio" name="group-ict_c" id="tab-i9yr4gI"><label data-title="Config (.oxlintrc.json)" for="tab-i9yr4gI">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jsdoc/empty-tags</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --jsdoc-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jsdoc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jsdoc/empty-tags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/jsdoc/empty_tags.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,16))])}const f=t(r,[["render",h]]);export{v as __pageData,f as default};
