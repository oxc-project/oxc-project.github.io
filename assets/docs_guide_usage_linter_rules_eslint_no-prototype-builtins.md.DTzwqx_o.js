import{_ as t,C as n,c as o,o as l,j as e,ag as r,a as i,G as p}from"./chunks/framework.Az7Yw7dm.js";const f=JSON.parse('{"title":"eslint/no-prototype-builtins","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-prototype-builtins.md","filePath":"docs/guide/usage/linter/rules/eslint/no-prototype-builtins.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-prototype-builtins.md"},d={id:"eslint-no-prototype-builtins",tabindex:"-1"};function c(k,s,u,b,y,g){const a=n("Badge");return l(),o("div",null,[e("h1",d,[s[0]||(s[0]=i("eslint/no-prototype-builtins ")),p(a,{type:"info",text:"Pedantic"}),s[1]||(s[1]=i()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#eslint-no-prototype-builtins","aria-label":'Permalink to "eslint/no-prototype-builtins <Badge type="info" text="Pedantic" />"'},"​",-1))]),s[3]||(s[3]=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow calling some Object.prototype methods directly on objects</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In ECMAScript 5.1, Object.create was added, which enables the creation of objects with a specified [[Prototype]]. Object.create(null) is a common pattern used to create objects that will be used as a Map. This can lead to errors when it is assumed that objects will have properties from Object.prototype. This rule prevents calling some Object.prototype methods directly from an object. Additionally, objects can have properties that shadow the builtins on Object.prototype, potentially causing unintended behavior or denial-of-service security vulnerabilities. For example, it would be unsafe for a webserver to parse JSON input from a client and call hasOwnProperty directly on the resulting object, because a malicious client could send a JSON value like {&quot;hasOwnProperty&quot;: 1} and cause the server to crash.</p><p>To avoid subtle bugs like this, it’s better to always call these methods from Object.prototype. For example, foo.hasOwnProperty(&quot;bar&quot;) should be replaced with Object.prototype.hasOwnProperty.call(foo, &quot;bar&quot;).</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hasBarProperty </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isPrototypeOfBar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isPrototypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> barIsEnumerable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">propertyIsEnumerable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4f4ZA" id="tab-cAonHLE" checked><label data-title="CLI" for="tab-cAonHLE">CLI</label><input type="radio" name="group-4f4ZA" id="tab-t3hF1wG"><label data-title="Config (.oxlintrc.json)" for="tab-t3hF1wG">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-prototype-builtins</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-prototype-builtins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/eslint/no_prototype_builtins.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,13))])}const m=t(h,[["render",c]]);export{f as __pageData,m as default};
