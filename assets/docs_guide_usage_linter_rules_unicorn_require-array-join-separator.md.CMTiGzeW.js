import{_ as n,c as l,j as e,a as r,G as s,w as p,a2 as h,B as i,o as d}from"./chunks/framework.8qdJL5ht.js";const j=JSON.parse('{"title":"unicorn/require-array-join-separator","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/require-array-join-separator.md","filePath":"docs/guide/usage/linter/rules/unicorn/require-array-join-separator.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/require-array-join-separator.md"},u={id:"unicorn-require-array-join-separator",tabindex:"-1"},g={class:"rule-meta"};function k(f,a,m,y,b,E){const t=i("Badge"),o=i("Alert");return d(),l("div",null,[e("h1",u,[a[0]||(a[0]=r("unicorn/require-array-join-separator ")),s(t,{type:"info",text:"Style"}),a[1]||(a[1]=r()),a[2]||(a[2]=e("a",{class:"header-anchor",href:"#unicorn-require-array-join-separator","aria-label":'Permalink to "unicorn/require-array-join-separator <Badge type="info" text="Style" />"'},"​",-1))]),e("div",g,[s(o,{class:"fix",type:"info"},{default:p(()=>a[3]||(a[3]=[e("span",{class:"emoji"},"🛠️",-1),r(" An auto-fix is available for this rule for some violations. ")])),_:1})]),a[4]||(a[4]=h('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce using the separator argument with Array#join()</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>It&#39;s better to make it clear what the separator is when calling Array#join(), instead of relying on the default comma (&#39;,&#39;) separator.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/require_array_join_separator.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const q=n(c,[["render",k]]);export{j as __pageData,q as default};