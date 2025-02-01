import{_ as n,c as l,j as s,a,G as t,w as d,a2 as p,B as o,o as c}from"./chunks/framework.Cm5JpC29.js";const v=JSON.parse('{"title":"unicorn/prefer-node-protocol","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.md"},u={id:"unicorn-prefer-node-protocol",tabindex:"-1"},f={class:"rule-meta"};function k(g,e,m,b,x,E){const i=o("Badge"),r=o("Alert");return c(),l("div",null,[s("h1",u,[e[0]||(e[0]=a("unicorn/prefer-node-protocol ")),t(i,{type:"info",text:"Restriction"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-prefer-node-protocol","aria-label":'Permalink to "unicorn/prefer-node-protocol <Badge type="info" text="Restriction" />"'},"​",-1))]),s("div",f,[t(r,{class:"fix",type:"info"},{default:d(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=p('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefer using the <code>node:protocol</code> when importing Node.js builtin modules</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Node.js builtin modules should be imported using the <code>node:</code> protocol to avoid ambiguity with local modules.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node:fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/57b7ca8eae8a1d308119ac0e0a8e657e5e61b4bb/crates/oxc_linter/src/rules/unicorn/prefer_node_protocol.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11))])}const _=n(h,[["render",k]]);export{v as __pageData,_ as default};
