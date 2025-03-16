import{_ as l,C as i,c as o,o as p,j as a,ag as h,a as s,G as r,w as c}from"./chunks/framework.Az7Yw7dm.js";const _=JSON.parse('{"title":"unicorn/prefer-number-properties","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-number-properties.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-number-properties.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/prefer-number-properties.md"},k={id:"unicorn-prefer-number-properties",tabindex:"-1"},b={class:"rule-meta"};function g(u,e,f,m,E,v){const t=i("Badge"),n=i("Alert");return p(),o("div",null,[a("h1",k,[e[0]||(e[0]=s("unicorn/prefer-number-properties ")),r(t,{type:"info",text:"Restriction"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#unicorn-prefer-number-properties","aria-label":'Permalink to "unicorn/prefer-number-properties <Badge type="info" text="Restriction" />"'},"​",-1))]),a("div",b,[r(n,{class:"fix",type:"info"},{default:c(()=>e[3]||(e[3]=[a("span",{class:"emoji"},"🚧",-1),s(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallows use of <code>parseInt()</code>, <code>parseFloat()</code>, <code>isNan()</code>, <code>isFinite()</code>, <code>Nan</code>, <code>Infinity</code> and <code>-Infinity</code> as global variables.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>ECMAScript 2015 moved globals onto the <code>Number</code> constructor for consistency and to slightly improve them. This rule enforces their usage to limit the usage of globals:</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt" target="_blank" rel="noreferrer"><code>Number.parseInt()</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target="_blank" rel="noreferrer"><code>parseInt()</code></a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat" target="_blank" rel="noreferrer"><code>Number.parseFloat()</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat" target="_blank" rel="noreferrer"><code>parseFloat()</code></a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" target="_blank" rel="noreferrer"><code>Number.isNaN()</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN" target="_blank" rel="noreferrer"><code>isNaN()</code></a> <em>(they have slightly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#difference_between_number.isnan_and_global_isnan" target="_blank" rel="noreferrer">different behavior</a>)</em></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" target="_blank" rel="noreferrer"><code>Number.isFinite()</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite" target="_blank" rel="noreferrer"><code>isFinite()</code></a> <em>(they have slightly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#difference_between_number.isfinite_and_global_isfinite" target="_blank" rel="noreferrer">different behavior</a>)</em></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN" target="_blank" rel="noreferrer"><code>Number.NaN</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" target="_blank" rel="noreferrer"><code>NaN</code></a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY" target="_blank" rel="noreferrer"><code>Number.POSITIVE_INFINITY</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity" target="_blank" rel="noreferrer"><code>Infinity</code></a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY" target="_blank" rel="noreferrer"><code>Number.NEGATIVE_INFINITY</code></a> over <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity" target="_blank" rel="noreferrer"><code>-Infinity</code></a></li></ul><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10.5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10.5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-S_Qzk" id="tab-zIobABQ" checked><label data-title="CLI" for="tab-zIobABQ">CLI</label><input type="radio" name="group-S_Qzk" id="tab-yRUqWHC"><label data-title="Config (.oxlintrc.json)" for="tab-yRUqWHC">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/prefer-number-properties</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/prefer-number-properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/c22276e8fbbf443c4293a3cfe7758ac1ceea325c/crates/oxc_linter/src/rules/unicorn/prefer_number_properties.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,15))])}const F=l(d,[["render",g]]);export{_ as __pageData,F as default};
