import{_ as l,C as a,c as o,o as d,j as t,ag as p,a as s,G as i,w as h}from"./chunks/framework.DteEOKvC.js";const _=JSON.parse('{"title":"unicorn/prefer-string-trim-start-end","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md"},g={id:"unicorn-prefer-string-trim-start-end",tabindex:"-1"},k={class:"rule-meta"};function u(b,e,f,m,E,v){const r=a("Badge"),n=a("Alert");return d(),o("div",null,[t("h1",g,[e[0]||(e[0]=s("unicorn/prefer-string-trim-start-end ")),i(r,{type:"info",text:"Style"}),e[1]||(e[1]=s()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#unicorn-prefer-string-trim-start-end","aria-label":'Permalink to "unicorn/prefer-string-trim-start-end <Badge type="info" text="Style" />"'},"​",-1))]),t("div",k,[i(n,{class:"fix",type:"info"},{default:h(()=>e[3]||(e[3]=[t("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft" target="_blank" rel="noreferrer"><code>String#trimLeft()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight" target="_blank" rel="noreferrer"><code>String#trimRight()</code></a> are aliases of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart" target="_blank" rel="noreferrer"><code>String#trimStart()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd" target="_blank" rel="noreferrer"><code>String#trimEnd()</code></a>. This is to ensure consistency and use <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions" target="_blank" rel="noreferrer">direction</a>-independent wording.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>trimLeft</code> and <code>trimRight</code> names are confusing and inconsistent with the rest of the language.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimLeft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-GG3Pp" id="tab-t6ExVxI" checked><label data-title="CLI" for="tab-t6ExVxI">CLI</label><input type="radio" name="group-GG3Pp" id="tab-g7wPzEa"><label data-title="Config (.oxlintrc.json)" for="tab-g7wPzEa">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/prefer-string-trim-start-end</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/prefer-string-trim-start-end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/unicorn/prefer_string_trim_start_end.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const x=l(c,[["render",u]]);export{_ as __pageData,x as default};
