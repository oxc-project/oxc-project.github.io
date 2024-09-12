import{_ as i,c as t,j as s,a as e,I as o,a4 as l,o as c,E as n}from"./chunks/framework.Qpa4gud8.js";const v=JSON.parse('{"title":"jsdoc/empty-tags","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/empty-tags.md","filePath":"docs/guide/usage/linter/rules/jsdoc/empty-tags.md"}'),d={name:"docs/guide/usage/linter/rules/jsdoc/empty-tags.md"},r={id:"jsdoc-empty-tags",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#jsdoc-empty-tags","aria-label":'Permalink to "jsdoc/empty-tags <Badge type="info" text="Restriction" />"'},"​",-1),h=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Expects the following tags to be empty of any content:</p><ul><li><code>@abstract</code></li><li><code>@async</code></li><li><code>@generator</code></li><li><code>@global</code></li><li><code>@hideconstructor</code></li><li><code>@ignore</code></li><li><code>@inner</code></li><li><code>@instance</code></li><li><code>@override</code></li><li><code>@readonly</code></li><li><code>@inheritDoc</code></li><li><code>@internal</code></li><li><code>@overload</code></li><li><code>@package</code></li><li><code>@private</code></li><li><code>@protected</code></li><li><code>@public</code></li><li><code>@static</code></li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The void tags should be empty.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@async</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> foo */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> bar */</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@async</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsdoc/empty_tags.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,13);function g(k,u,m,y,b,_){const a=n("Badge");return c(),t("div",null,[s("h1",r,[e("jsdoc/empty-tags "),o(a,{type:"info",text:"Restriction"}),e(),p]),h])}const x=i(d,[["render",g]]);export{v as __pageData,x as default};
