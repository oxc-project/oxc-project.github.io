import{_ as t,c as n,j as i,a,G as h,a2 as p,B as l,o as r}from"./chunks/framework.Cm5JpC29.js";const u=JSON.parse('{"title":"react_perf/jsx-no-new-object-as-prop","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.md","filePath":"docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.md"}'),k={name:"docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.md"},o={id:"react-perf-jsx-no-new-object-as-prop",tabindex:"-1"};function d(c,s,g,E,y,f){const e=l("Badge");return r(),n("div",null,[i("h1",o,[s[0]||(s[0]=a("react_perf/jsx-no-new-object-as-prop ")),h(e,{type:"info",text:"Perf"}),s[1]||(s[1]=a()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#react-perf-jsx-no-new-object-as-prop","aria-label":'Permalink to "react_perf/jsx-no-new-object-as-prop <Badge type="info" text="Perf" />"'},"​",-1))]),s[3]||(s[3]=p(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent Objects that are local to the current method from being used as values of JSX props.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using locally defined Objects as values for props can lead to unintentional re-renders and performance issues. Every time the parent component renders, a new instance of the Object is created, causing unnecessary re-renders of child components. This also leads to harder-to-maintain code as the component&#39;s props are not passed consistently.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{}} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{display: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}} /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{staticConfig} /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/55744fd9775a032ea83215dadc77a6bff3e2a87d/crates/oxc_linter/src/rules/react_perf/jsx_no_new_object_as_prop.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const b=t(k,[["render",d]]);export{u as __pageData,b as default};