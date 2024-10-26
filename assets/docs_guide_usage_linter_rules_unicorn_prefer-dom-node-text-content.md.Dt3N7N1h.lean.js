import{_ as r,c as d,j as t,a as o,G as s,w as l,a2 as c,B as a,o as p}from"./chunks/framework.8qdJL5ht.js";const _=JSON.parse('{"title":"unicorn/prefer-dom-node-text-content","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.md"},u={id:"unicorn-prefer-dom-node-text-content",tabindex:"-1"},f={class:"rule-meta"};function m(x,e,g,k,b,y){const n=a("Badge"),i=a("Alert");return p(),d("div",null,[t("h1",u,[e[0]||(e[0]=o("unicorn/prefer-dom-node-text-content ")),s(n,{type:"info",text:"Style"}),e[1]||(e[1]=o()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#unicorn-prefer-dom-node-text-content","aria-label":'Permalink to "unicorn/prefer-dom-node-text-content <Badge type="info" text="Style" />"'},"​",-1))]),t("div",f,[s(i,{class:"fix",type:"info"},{default:l(()=>e[3]||(e[3]=[t("span",{class:"emoji"},"🛠️",-1),o(" An auto-fix is available for this rule for some violations. ")])),_:1})]),e[4]||(e[4]=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of <code>.textContent</code> over <code>.innerText</code> for DOM nodes.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are some disadvantages of using .innerText.</p><ul><li><code>.innerText</code> is much more performance-heavy as it requires layout information to return the result.</li><li><code>.innerText</code> is defined only for HTMLElement objects, while <code>.textContent</code> is defined for all Node objects.</li><li><code>.innerText</code> is not standard, for example, it is not present in Firefox.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.innerText;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo.textContent;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_dom_node_text_content.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12))])}const E=r(h,[["render",m]]);export{_ as __pageData,E as default};
