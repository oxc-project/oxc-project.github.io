import{_ as i,C as n,c as r,o,j as a,ag as l,a as s,G as p}from"./chunks/framework.B7cJCh-b.js";const E=JSON.parse('{"title":"unicorn/prefer-event-target","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-event-target.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-event-target.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/prefer-event-target.md"},h={id:"unicorn-prefer-event-target",tabindex:"-1"};function c(g,e,k,u,v,b){const t=n("Badge");return o(),r("div",null,[a("h1",h,[e[0]||(e[0]=s("unicorn/prefer-event-target ")),p(t,{type:"info",text:"Pedantic"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#unicorn-prefer-event-target","aria-label":'Permalink to "unicorn/prefer-event-target <Badge type="info" text="Pedantic" />"'},"​",-1))]),e[3]||(e[3]=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefers <code>EventTarget</code> over <code>EventEmitter</code>.</p><p>This rule reduces the bundle size and makes your code more cross-platform friendly.</p><p>See the <a href="https://nodejs.org/api/events.html#eventtarget-and-event-api" target="_blank" rel="noreferrer">differences</a> between <code>EventEmitter</code> and <code>EventTarget</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>While <a href="https://nodejs.org/api/events.html#class-eventemitter" target="_blank" rel="noreferrer"><code>EventEmitter</code></a> is only available in Node.js, <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget" target="_blank" rel="noreferrer"><code>EventTarget</code></a> is also available in <em>Deno</em> and browsers.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OtherClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3INeh" id="tab-2qp7CyX" checked><label data-title="CLI" for="tab-2qp7CyX">CLI</label><input type="radio" name="group-3INeh" id="tab-4i3uvE6"><label data-title="Config (.oxlintrc.json)" for="tab-4i3uvE6">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/prefer-event-target</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/prefer-event-target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/unicorn/prefer_event_target.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,17))])}const m=i(d,[["render",c]]);export{E as __pageData,m as default};
