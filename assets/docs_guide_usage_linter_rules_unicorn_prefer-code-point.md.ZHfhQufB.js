import{_ as o,c as n,j as e,a as i,I as a,w as l,a4 as d,E as s,o as c}from"./chunks/framework.Qpa4gud8.js";const S=JSON.parse('{"title":"unicorn/prefer-code-point","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-code-point.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-code-point.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/prefer-code-point.md"},h={id:"unicorn-prefer-code-point",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#unicorn-prefer-code-point","aria-label":'Permalink to "unicorn/prefer-code-point <Badge type="info" text="Pedantic" />"'},"​",-1),g={class:"rule-meta"},f=e("span",{class:"emoji"},"🛠️",-1),u=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefers usage of <code>String.prototype.codePointAt</code> over <code>String.prototype.charCodeAt</code>. Prefers usage of <code>String.fromCodePoint</code> over <code>String.fromCharCode</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Unicode is better supported in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt" target="_blank" rel="noreferrer"><code>String#codePointAt()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint" target="_blank" rel="noreferrer"><code>String.fromCodePoint()</code></a>.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#compared_to_fromcharcode" target="_blank" rel="noreferrer">Difference between <code>String.fromCodePoint()</code> and <code>String.fromCharCode()</code></a></p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;🦄&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charCodeAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCharCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1f984</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;🦄&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">codePointAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCodePoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1f984</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_code_point.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12);function E(_,m,b,C,y,v){const t=s("Badge"),r=s("Alert");return c(),n("div",null,[e("h1",h,[i("unicorn/prefer-code-point "),a(t,{type:"info",text:"Pedantic"}),i(),k]),e("div",g,[a(r,{class:"fix",type:"info"},{default:l(()=>[f,i(" An auto-fix is available for this rule. ")]),_:1})]),u])}const P=o(p,[["render",E]]);export{S as __pageData,P as default};
