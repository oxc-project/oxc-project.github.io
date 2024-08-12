import{_ as i,c as t,j as s,a as e,I as n,a3 as r,o as d,E as o}from"./chunks/framework.wOwjnRe1.js";const y=JSON.parse('{"title":"unicorn/prefer-add-event-listener","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.md"}'),l={name:"docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.md"},h={id:"unicorn-prefer-add-event-listener",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#unicorn-prefer-add-event-listener","aria-label":'Permalink to "unicorn/prefer-add-event-listener <Badge type="info" text="Suspicious" />"'},"​",-1),c=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of <code>.addEventListener()</code> and <code>.removeEventListener()</code> over their <code>on</code>-function counterparts.</p><p>For example, <code>foo.addEventListener(&#39;click&#39;, handler);</code> is preferred over <code>foo.onclick = handler;</code> for HTML DOM Events.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are <a href="https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick/35093997#35093997" target="_blank" rel="noreferrer">numerous advantages of using <code>addEventListener</code></a>. Some of these advantages include registering unlimited event handlers and optionally having the event handler invoked only once.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {});</span></span></code></pre></div>`,8);function k(u,E,g,v,f,_){const a=o("Badge");return d(),t("div",null,[s("h1",h,[e("unicorn/prefer-add-event-listener "),n(a,{type:"info",text:"Suspicious"}),e(),p]),c])}const b=i(l,[["render",k]]);export{y as __pageData,b as default};
