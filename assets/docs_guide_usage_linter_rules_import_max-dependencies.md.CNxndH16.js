import{_ as i,c as t,j as a,a as e,I as n,a3 as d,o,E as h}from"./chunks/framework.wOwjnRe1.js";const b=JSON.parse('{"title":"import/max-dependencies","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/import/max-dependencies.md","filePath":"docs/guide/usage/linter/rules/import/max-dependencies.md"}'),p={name:"docs/guide/usage/linter/rules/import/max-dependencies.md"},l={id:"import-max-dependencies",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#import-max-dependencies","aria-label":'Permalink to "import/max-dependencies <Badge type="info" text="Pedantic" />"'},"​",-1),c=d(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Forbid modules to have too many dependencies (import or require statements).</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>This is a useful rule because a module with too many dependencies is a code smell, and usually indicates the module is doing too much and/or should be broken up into smaller modules.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Given <code>{&quot;max&quot;: 2}</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,8);function m(k,u,g,E,_,y){const s=h("Badge");return o(),t("div",null,[a("h1",l,[e("import/max-dependencies "),n(s,{type:"info",text:"Pedantic"}),e(),r]),c])}const f=i(p,[["render",m]]);export{b as __pageData,f as default};
