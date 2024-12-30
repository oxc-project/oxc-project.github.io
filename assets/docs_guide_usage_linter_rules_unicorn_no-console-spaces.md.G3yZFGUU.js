import{_ as l,c as r,j as e,a,G as i,w as d,a2 as c,B as t,o as p}from"./chunks/framework.Cm5JpC29.js";const v=JSON.parse('{"title":"unicorn/no-console-spaces","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-console-spaces.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-console-spaces.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/no-console-spaces.md"},u={id:"unicorn-no-console-spaces",tabindex:"-1"},k={class:"rule-meta"};function g(E,s,m,f,b,y){const o=t("Badge"),n=t("Alert");return p(),r("div",null,[e("h1",u,[s[0]||(s[0]=a("unicorn/no-console-spaces ")),i(o,{type:"info",text:"Style"}),s[1]||(s[1]=a()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#unicorn-no-console-spaces","aria-label":'Permalink to "unicorn/no-console-spaces <Badge type="info" text="Style" />"'},"​",-1))]),e("div",k,[i(n,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows leading/trailing space inside <code>console.log()</code> and similar methods.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>console.log()</code> method and similar methods join the parameters with a space so adding a leading/trailing space to a parameter, results in two spaces being added.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;def&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;def&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/55744fd9775a032ea83215dadc77a6bff3e2a87d/crates/oxc_linter/src/rules/unicorn/no_console_spaces.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const q=l(h,[["render",g]]);export{v as __pageData,q as default};