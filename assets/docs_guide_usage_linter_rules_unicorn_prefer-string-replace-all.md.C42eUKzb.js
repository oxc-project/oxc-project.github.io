import{_ as l,c as n,j as e,a,I as s,w as h,a4 as o,E as i,o as p}from"./chunks/framework.D6UG3LSr.js";const C=JSON.parse('{"title":"unicorn/prefer-string-replace-all","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.md"},d={id:"unicorn-prefer-string-replace-all",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#unicorn-prefer-string-replace-all","aria-label":'Permalink to "unicorn/prefer-string-replace-all <Badge type="info" text="Pedantic" />"'},"​",-1),g={class:"rule-meta"},u=e("span",{class:"emoji"},"🛠️",-1),E=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefers <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll" target="_blank" rel="noreferrer"><code>String#replaceAll()</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank" rel="noreferrer"><code>String#replace()</code></a> when using a regex with the global flag.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll" target="_blank" rel="noreferrer"><code>String#replaceAll()</code></a> method is both faster and safer as you don&#39;t have to use a regex and remember to escape it if the string is not a literal. And when used with a regex, it makes the intent clearer.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduceRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reducer, initialValue);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bar);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, bar);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;not-a-regexp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pattern, bar);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_string_replace_all.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function f(_,b,m,y,F,x){const t=i("Badge"),r=i("Alert");return p(),n("div",null,[e("h1",d,[a("unicorn/prefer-string-replace-all "),s(t,{type:"info",text:"Pedantic"}),a(),k]),e("div",g,[s(r,{class:"fix",type:"info"},{default:h(()=>[u,a(" An auto-fix is available for this rule. ")]),_:1})]),E])}const S=l(c,[["render",f]]);export{C as __pageData,S as default};