import{_ as o,C as a,c as l,o as d,j as t,ag as p,a as r,G as s,w as c}from"./chunks/framework.K3-BBDXc.js";const v=JSON.parse('{"title":"unicorn/prefer-string-trim-start-end","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md"},g={id:"unicorn-prefer-string-trim-start-end",tabindex:"-1"},f={class:"rule-meta"};function m(u,e,k,b,E,_){const i=a("Badge"),n=a("Alert");return d(),l("div",null,[t("h1",g,[e[0]||(e[0]=r("unicorn/prefer-string-trim-start-end ")),s(i,{type:"info",text:"Style"}),e[1]||(e[1]=r()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#unicorn-prefer-string-trim-start-end","aria-label":'Permalink to "unicorn/prefer-string-trim-start-end <Badge type="info" text="Style" />"'},"​",-1))]),t("div",f,[s(n,{class:"fix",type:"info"},{default:c(()=>e[3]||(e[3]=[t("span",{class:"emoji"},"🛠️",-1),r(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft" target="_blank" rel="noreferrer"><code>String#trimLeft()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight" target="_blank" rel="noreferrer"><code>String#trimRight()</code></a> are aliases of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart" target="_blank" rel="noreferrer"><code>String#trimStart()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd" target="_blank" rel="noreferrer"><code>String#trimEnd()</code></a>. This is to ensure consistency and use <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions" target="_blank" rel="noreferrer">direction</a>-independent wording.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>trimLeft</code> and <code>trimRight</code> names are confusing and inconsistent with the rest of the language.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimLeft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/e453be4bf22d285a34825652a7a1d20b3fdf7121/crates/oxc_linter/src/rules/unicorn/prefer_string_trim_start_end.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const x=o(h,[["render",m]]);export{v as __pageData,x as default};
