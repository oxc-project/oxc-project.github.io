import{_ as o,C as e,c as h,o as r,j as t,ag as p,a,G as i,w as d}from"./chunks/framework.Az7Yw7dm.js";const v=JSON.parse('{"title":"jsx_a11y/alt-text","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/alt-text.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/alt-text.md"}'),c={name:"docs/guide/usage/linter/rules/jsx_a11y/alt-text.md"},k={id:"jsx-a11y-alt-text",tabindex:"-1"},u={class:"rule-meta"};function g(y,s,x,b,E,f){const n=e("Badge"),l=e("Alert");return r(),h("div",null,[t("h1",k,[s[0]||(s[0]=a("jsx_a11y/alt-text ")),i(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=a()),s[2]||(s[2]=t("a",{class:"header-anchor",href:"#jsx-a11y-alt-text","aria-label":'Permalink to "jsx_a11y/alt-text <Badge type="info" text="Correctness" />"'},"​",-1))]),t("div",u,[i(l,{class:"default-on",type:"success"},{default:d(()=>s[3]||(s[3]=[t("span",{class:"emoji"},"✅",-1),a(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce that all elements that require alternative text have meaningful information to relay back to the end user.</p><h3 id="why-is-this-necessary" tabindex="-1">Why is this necessary? <a class="header-anchor" href="#why-is-this-necessary" aria-label="Permalink to &quot;Why is this necessary?&quot;">​</a></h3><p>Alternative text is a critical component of accessibility for screen reader users, enabling them to understand the content and function of an element.</p><h3 id="what-it-checks" tabindex="-1">What it checks <a class="header-anchor" href="#what-it-checks" aria-label="Permalink to &quot;What it checks&quot;">​</a></h3><p>This rule checks for alternative text on the following elements: <code>&lt;img&gt;</code>, <code>&lt;area&gt;</code>, <code>&lt;input type=&quot;image&quot;&gt;</code>, and <code>&lt;object&gt;</code>.</p><h3 id="how-to-fix-it" tabindex="-1">How to fix it <a class="header-anchor" href="#how-to-fix-it" aria-label="Permalink to &quot;How to fix it&quot;">​</a></h3><p>Ensure that the <code>alt</code> attribute is present and contains meaningful text that describes the element&#39;s content or purpose.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flower.jpg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A close-up of a white daisy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flower.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HtRvN" id="tab-wJSOh0T" checked><label data-title="CLI" for="tab-wJSOh0T">CLI</label><input type="radio" name="group-HtRvN" id="tab-Rv3YM7t"><label data-title="Config (.oxlintrc.json)" for="tab-Rv3YM7t">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jsx-a11y/alt-text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --jsx-a11y-plugin</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jsx-a11y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jsx-a11y/alt-text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/jsx_a11y/alt_text.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,18))])}const C=o(c,[["render",g]]);export{v as __pageData,C as default};
