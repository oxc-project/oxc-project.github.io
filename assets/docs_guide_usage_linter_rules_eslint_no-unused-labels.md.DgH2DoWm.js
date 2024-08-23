import{_ as o,c as r,j as s,a as e,I as a,w as t,a4 as h,E as n,o as d}from"./chunks/framework.D6UG3LSr.js";const A=JSON.parse('{"title":"eslint/no-unused-labels","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-unused-labels.md","filePath":"docs/guide/usage/linter/rules/eslint/no-unused-labels.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-unused-labels.md"},p={id:"eslint-no-unused-labels",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#eslint-no-unused-labels","aria-label":'Permalink to "eslint/no-unused-labels <Badge type="info" text="Correctness" />"'},"​",-1),k={class:"rule-meta"},_=s("span",{class:"emoji"},"✅",-1),E=s("span",{class:"emoji"},"🛠️",-1),g=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow unused labels</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OUTER_LOOP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> student</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> students) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkScores</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(student.scores)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(student);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_unused_labels.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function b(f,m,y,x,C,F){const l=n("Badge"),i=n("Alert");return d(),r("div",null,[s("h1",p,[e("eslint/no-unused-labels "),a(l,{type:"info",text:"Correctness"}),e(),u]),s("div",k,[a(i,{class:"default-on",type:"success"},{default:t(()=>[_,e(" This rule is turned on by default. ")]),_:1}),a(i,{class:"fix",type:"info"},{default:t(()=>[E,e(" An auto-fix is available for this rule. ")]),_:1})]),g])}const B=o(c,[["render",b]]);export{A as __pageData,B as default};
