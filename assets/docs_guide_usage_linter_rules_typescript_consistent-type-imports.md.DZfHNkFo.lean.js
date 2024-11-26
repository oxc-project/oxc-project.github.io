import{_ as o,c as p,j as t,a as e,G as i,w as l,a2 as h,B as a,o as d}from"./chunks/framework.Cm5JpC29.js";const x=JSON.parse('{"title":"typescript/consistent-type-imports","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/consistent-type-imports.md","filePath":"docs/guide/usage/linter/rules/typescript/consistent-type-imports.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/consistent-type-imports.md"},k={id:"typescript-consistent-type-imports",tabindex:"-1"},y={class:"rule-meta"};function u(m,s,g,f,b,E){const n=a("Badge"),r=a("Alert");return d(),p("div",null,[t("h1",k,[s[0]||(s[0]=e("typescript/consistent-type-imports ")),i(n,{type:"info",text:"Nursery"}),s[1]||(s[1]=e()),s[2]||(s[2]=t("a",{class:"header-anchor",href:"#typescript-consistent-type-imports","aria-label":'Permalink to "typescript/consistent-type-imports <Badge type="info" text="Nursery" />"'},"​",-1))]),t("div",y,[i(r,{class:"fix",type:"info"},{default:l(()=>s[3]||(s[3]=[t("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule for some violations. ")])),_:1})]),s[4]||(s[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce consistent usage of type imports.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>inconsistent usage of type imports can make the code harder to read and understand.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Foo } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> S</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/typescript/consistent_type_imports.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const _=o(c,[["render",u]]);export{x as __pageData,_ as default};
