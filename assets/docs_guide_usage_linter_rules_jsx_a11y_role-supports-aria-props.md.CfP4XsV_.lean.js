import{_ as l,c as h,j as i,a,G as e,a2 as k,B as n,o as p}from"./chunks/framework.DlAqvapY.js";const q=JSON.parse('{"title":"jsx_a11y/role-supports-aria-props","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.md"}'),r={name:"docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.md"},o={id:"jsx-a11y-role-supports-aria-props",tabindex:"-1"};function d(g,s,E,F,y,u){const t=n("Badge");return p(),h("div",null,[i("h1",o,[s[0]||(s[0]=a("jsx_a11y/role-supports-aria-props ")),e(t,{type:"info",text:"Correctness"}),s[1]||(s[1]=a()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#jsx-a11y-role-supports-aria-props","aria-label":'Permalink to "jsx_a11y/role-supports-aria-props <Badge type="info" text="Correctness" />"'},"​",-1))]),s[3]||(s[3]=k(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce that elements with explicit or implicit roles defined contain only <code>aria-*</code> properties supported by that <code>role</code>. Many ARIA attributes (states and properties) can only be used on elements with particular roles. Some elements have implicit roles, such as <code>&lt;a href=&quot;#&quot; /&gt;</code>, which will resolve to <code>role=&quot;link&quot;</code>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radiogroup&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;aria-labelledby&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-required</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Rainbow Trout&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-required</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Brook Trout&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-required</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Lake Trout&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radiogroup&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-required</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;aria-labelledby&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Rainbow Trout&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Brook Trout&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Lake Trout&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/role_supports_aria_props.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,10))])}const B=l(r,[["render",d]]);export{q as __pageData,B as default};
