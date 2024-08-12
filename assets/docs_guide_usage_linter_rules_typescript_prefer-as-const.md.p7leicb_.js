import{_ as n,c as p,j as e,a as s,I as t,w as i,a3 as o,E as r,o as h}from"./chunks/framework.wOwjnRe1.js";const A=JSON.parse('{"title":"typescript/prefer-as-const","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/prefer-as-const.md","filePath":"docs/guide/usage/linter/rules/typescript/prefer-as-const.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/prefer-as-const.md"},d={id:"typescript-prefer-as-const",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#typescript-prefer-as-const","aria-label":'Permalink to "typescript/prefer-as-const <Badge type="info" text="Correctness" />"'},"​",-1),y={class:"rule-meta"},u=e("span",{class:"emoji"},"✅",-1),_=e("span",{class:"emoji"},"🛠️",-1),g=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce the use of as const over literal type.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are two common ways to tell TypeScript that a literal value should be interpreted as its literal type (e.g. 2) rather than general primitive type (e.g. number);</p><p>as const: telling TypeScript to infer the literal type automatically as with the literal type: explicitly telling the literal type to TypeScript</p><p>as const is generally preferred, as it doesn&#39;t require re-typing the literal value. This rule reports when an as with an explicit literal type can be replaced with an as const.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { bar: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;baz&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;baz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span></code></pre></div>`,8);function f(m,E,b,x,F,v){const l=r("Badge"),a=r("Alert");return h(),p("div",null,[e("h1",d,[s("typescript/prefer-as-const "),t(l,{type:"info",text:"Correctness"}),s(),k]),e("div",y,[t(a,{class:"default-on",type:"success"},{default:i(()=>[u,s(" This rule is turned on by default. ")]),_:1}),t(a,{class:"fix",type:"info"},{default:i(()=>[_,s(" An auto-fix is available for this rule for some violations. ")]),_:1})]),g])}const T=n(c,[["render",f]]);export{A as __pageData,T as default};
