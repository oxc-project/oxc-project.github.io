import{_ as l,c as r,j as a,a as s,G as t,w as d,a2 as p,B as n,o as h}from"./chunks/framework.8qdJL5ht.js";const _=JSON.parse('{"title":"typescript/no-non-null-asserted-optional-chain","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md","filePath":"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.md"},u={id:"typescript-no-non-null-asserted-optional-chain",tabindex:"-1"},f={class:"rule-meta"};function k(b,e,y,g,m,x){const i=n("Badge"),o=n("Alert");return h(),r("div",null,[a("h1",u,[e[0]||(e[0]=s("typescript/no-non-null-asserted-optional-chain ")),t(i,{type:"info",text:"Correctness"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#typescript-no-non-null-asserted-optional-chain","aria-label":'Permalink to "typescript/no-non-null-asserted-optional-chain <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",f,[t(o,{class:"default-on",type:"success"},{default:d(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"✅",-1),s(" This rule is turned on by default. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow non-null assertions after an optional chain expression.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><code>?.</code> optional chain expressions provide undefined if an object is null or undefined. Using a <code>!</code> non-null assertion to assert the result of an <code>?.</code> optional chain expression is non-nullable is likely wrong.</p><p>Most of the time, either the object was not nullable and did not need the <code>?.</code> for its property lookup, or the <code>!</code> is incorrect and introducing a type safety hole.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo?.bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/45ef3eb2becc663e756a3da557df5a03fb40fd84/crates/oxc_linter/src/rules/typescript/no_non_null_asserted_optional_chain.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9))])}const v=l(c,[["render",k]]);export{_ as __pageData,v as default};
