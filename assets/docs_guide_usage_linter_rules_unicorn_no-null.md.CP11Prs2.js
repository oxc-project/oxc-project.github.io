import{_ as l,c as r,j as a,a as s,G as t,w as d,a2 as c,B as i,o as p}from"./chunks/framework.Cm5JpC29.js";const E=JSON.parse('{"title":"unicorn/no-null","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-null.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-null.md"}'),u={name:"docs/guide/usage/linter/rules/unicorn/no-null.md"},h={id:"unicorn-no-null",tabindex:"-1"},f={class:"rule-meta"};function g(k,e,m,b,x,y){const o=i("Badge"),n=i("Alert");return p(),r("div",null,[a("h1",h,[e[0]||(e[0]=s("unicorn/no-null ")),t(o,{type:"info",text:"Style"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#unicorn-no-null","aria-label":'Permalink to "unicorn/no-null <Badge type="info" text="Style" />"'},"​",-1))]),a("div",f,[t(n,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"🛠️",-1),s(" An auto-fix is available for this rule for some violations. ")])),_:1})]),e[4]||(e[4]=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow the use of the <code>null</code> literal, to encourage using <code>undefined</code> instead.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are some reasons for using <code>undefined</code> instead of <code>null</code>.</p><ul><li>From experience, most developers use <code>null</code> and <code>undefined</code> inconsistently and interchangeably, and few know when to use which.</li><li>Supporting both <code>null</code> and <code>undefined</code> complicates input validation.</li><li>Using <code>null</code> makes TypeScript types more verbose: <code>type A = {foo?: string | null}</code> vs <code>type A = {foo?: string}</code>.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/55744fd9775a032ea83215dadc77a6bff3e2a87d/crates/oxc_linter/src/rules/unicorn/no_null.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const _=l(u,[["render",g]]);export{E as __pageData,_ as default};