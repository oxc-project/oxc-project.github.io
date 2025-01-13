import{_ as p,c as o,j as e,a as i,G as a,w as l,a2 as d,B as t,o as h}from"./chunks/framework.Cm5JpC29.js";const x=JSON.parse('{"title":"jsdoc/require-property-description","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/require-property-description.md","filePath":"docs/guide/usage/linter/rules/jsdoc/require-property-description.md"}'),c={name:"docs/guide/usage/linter/rules/jsdoc/require-property-description.md"},k={id:"jsdoc-require-property-description",tabindex:"-1"},u={class:"rule-meta"};function y(g,s,m,f,b,A){const r=t("Badge"),n=t("Alert");return h(),o("div",null,[e("h1",k,[s[0]||(s[0]=i("jsdoc/require-property-description ")),a(r,{type:"info",text:"Correctness"}),s[1]||(s[1]=i()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#jsdoc-require-property-description","aria-label":'Permalink to "jsdoc/require-property-description <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",u,[a(n,{class:"default-on",type:"success"},{default:l(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"✅",-1),i(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Requires that all <code>@property</code> tags have descriptions.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The description of a property should be documented.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {SomeType}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {SomeType}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Foo.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/457aa31d92800aaf37a12c695928e8d941308d33/crates/oxc_linter/src/rules/jsdoc/require_property_description.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const q=p(c,[["render",y]]);export{x as __pageData,q as default};
