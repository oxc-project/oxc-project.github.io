import{_ as r,c as l,j as s,a as e,I as a,w as o,a4 as h,E as t,o as p}from"./chunks/framework.Qpa4gud8.js";const A=JSON.parse('{"title":"typescript/no-extra-non-null-assertion","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.md","filePath":"docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.md"}'),d={name:"docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.md"},c={id:"typescript-no-extra-non-null-assertion",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#typescript-no-extra-non-null-assertion","aria-label":'Permalink to "typescript/no-extra-non-null-assertion <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},_=s("span",{class:"emoji"},"✅",-1),y=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow extra non-null assertions.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>!</code> non-null assertion operator in TypeScript is used to assert that a value&#39;s type does not include null or undefined. Using the operator any more than once on a single value does nothing.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.bar;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/no_extra_non_null_assertion.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function g(x,m,b,f,E,F){const i=t("Badge"),n=t("Alert");return p(),l("div",null,[s("h1",c,[e("typescript/no-extra-non-null-assertion "),a(i,{type:"info",text:"Correctness"}),e(),k]),s("div",u,[a(n,{class:"default-on",type:"success"},{default:o(()=>[_,e(" This rule is turned on by default. ")]),_:1})]),y])}const B=r(d,[["render",g]]);export{A as __pageData,B as default};