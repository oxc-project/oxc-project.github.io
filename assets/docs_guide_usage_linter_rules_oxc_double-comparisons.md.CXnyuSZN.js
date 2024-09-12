import{_ as l,c as r,j as s,a,I as e,w as t,a4 as h,E as o,o as c}from"./chunks/framework.Qpa4gud8.js";const D=JSON.parse('{"title":"oxc/double-comparisons","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/double-comparisons.md","filePath":"docs/guide/usage/linter/rules/oxc/double-comparisons.md"}'),p={name:"docs/guide/usage/linter/rules/oxc/double-comparisons.md"},d={id:"oxc-double-comparisons",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#oxc-double-comparisons","aria-label":'Permalink to "oxc/double-comparisons <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},E=s("span",{class:"emoji"},"✅",-1),g=s("span",{class:"emoji"},"🛠️",-1),m=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule checks for double comparisons in logical expressions.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Redundant comparisons can be confusing and make code harder to understand.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/oxc/double_comparisons.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function _(b,x,y,f,v,A){const n=o("Badge"),i=o("Alert");return c(),r("div",null,[s("h1",d,[a("oxc/double-comparisons "),e(n,{type:"info",text:"Correctness"}),a(),k]),s("div",u,[e(i,{class:"default-on",type:"success"},{default:t(()=>[E,a(" This rule is turned on by default. ")]),_:1}),e(i,{class:"fix",type:"info"},{default:t(()=>[g,a(" An auto-fix is available for this rule. ")]),_:1})]),m])}const P=l(p,[["render",_]]);export{D as __pageData,P as default};
