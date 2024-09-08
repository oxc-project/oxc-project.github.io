import{_ as n,c as o,j as e,a,I as s,w as c,a4 as l,E as t,o as h}from"./chunks/framework.Qpa4gud8.js";const B=JSON.parse('{"title":"unicorn/empty-brace-spaces","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.md","filePath":"docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.md"},d={id:"unicorn-empty-brace-spaces",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#unicorn-empty-brace-spaces","aria-label":'Permalink to "unicorn/empty-brace-spaces <Badge type="info" text="Style" />"'},"​",-1),_={class:"rule-meta"},m=e("span",{class:"emoji"},"🛠️",-1),b=l(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Removes the extra spaces or new line characters inside a pair of braces that does not contain additional code.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There should be no spaces inside a pair of braces as it affects the overall readability of the code.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/empty_brace_spaces.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function k(f,y,g,x,v,E){const i=t("Badge"),r=t("Alert");return h(),o("div",null,[e("h1",d,[a("unicorn/empty-brace-spaces "),s(i,{type:"info",text:"Style"}),a(),u]),e("div",_,[s(r,{class:"fix",type:"info"},{default:c(()=>[m,a(" An auto-fix is available for this rule. ")]),_:1})]),b])}const C=n(p,[["render",k]]);export{B as __pageData,C as default};