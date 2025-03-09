import{_ as r,C as i,c as d,o as l,j as s,ag as p,a,G as t,w as c}from"./chunks/framework.DteEOKvC.js";const C=JSON.parse('{"title":"unicorn/prefer-modern-dom-apis","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.md"},u={id:"unicorn-prefer-modern-dom-apis",tabindex:"-1"},k={class:"rule-meta"};function g(b,e,m,f,E,v){const o=i("Badge"),n=i("Alert");return l(),d("div",null,[s("h1",u,[e[0]||(e[0]=a("unicorn/prefer-modern-dom-apis ")),t(o,{type:"info",text:"Style"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#unicorn-prefer-modern-dom-apis","aria-label":'Permalink to "unicorn/prefer-modern-dom-apis <Badge type="info" text="Style" />"'},"​",-1))]),s("div",k,[t(n,{class:"fix",type:"info"},{default:c(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🚧",-1),a(" An auto-fix is still under development. ")])),_:1})]),e[4]||(e[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of:</p><ul><li><code>childNode.replaceWith(newNode)</code> over <code>parentNode.replaceChild(newNode, oldNode)</code></li><li><code>referenceNode.before(newNode)</code> over <code>parentNode.insertBefore(newNode, referenceNode)</code></li><li><code>referenceNode.before(&#39;text&#39;)</code> over <code>referenceNode.insertAdjacentText(&#39;beforebegin&#39;, &#39;text&#39;)</code></li><li><code>referenceNode.before(newNode)</code> over <code>referenceNode.insertAdjacentElement(&#39;beforebegin&#39;, newNode)</code></li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are some advantages of using the newer DOM APIs, like:</p><ul><li>Traversing to the parent node is not necessary.</li><li>Appending multiple nodes at once.</li><li>Both <code>DOMString</code> and DOM node objects can be manipulated.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oldChildNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChildNode);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChildNode, oldChildNode);</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qCOG0" id="tab-HKsbWcB" checked><label data-title="CLI" for="tab-HKsbWcB">CLI</label><input type="radio" name="group-qCOG0" id="tab-0orSx8h"><label data-title="Config (.oxlintrc.json)" for="tab-0orSx8h">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/prefer-modern-dom-apis</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/prefer-modern-dom-apis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/unicorn/prefer_modern_dom_apis.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,16))])}const x=r(h,[["render",g]]);export{C as __pageData,x as default};
