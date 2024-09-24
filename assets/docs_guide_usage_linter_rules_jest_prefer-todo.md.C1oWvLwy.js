import{_ as l,c as h,j as e,a as t,G as i,w as o,a2 as p,B as a,o as d}from"./chunks/framework.DlAqvapY.js";const F=JSON.parse('{"title":"jest/prefer-todo","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/prefer-todo.md","filePath":"docs/guide/usage/linter/rules/jest/prefer-todo.md"}'),k={name:"docs/guide/usage/linter/rules/jest/prefer-todo.md"},E={id:"jest-prefer-todo",tabindex:"-1"},c={class:"rule-meta"};function u(g,s,y,f,m,b){const n=a("Badge"),r=a("Alert");return d(),h("div",null,[e("h1",E,[s[0]||(s[0]=t("jest/prefer-todo ")),i(n,{type:"info",text:"Style"}),s[1]||(s[1]=t()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#jest-prefer-todo","aria-label":'Permalink to "jest/prefer-todo <Badge type="info" text="Style" />"'},"​",-1))]),e("div",c,[i(r,{class:"fix",type:"info"},{default:o(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"🛠️",-1),t(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>When test cases are empty then it is better to mark them as <code>test.todo</code> as it will be highlighted in the summary output.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>This rule triggers a warning if empty test cases are used without &#39;test.todo&#39;.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i need to write this test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i need to write this test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">skip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i need to write this test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">todo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i need to write this test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jest/prefer_todo.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const q=l(k,[["render",u]]);export{F as __pageData,q as default};