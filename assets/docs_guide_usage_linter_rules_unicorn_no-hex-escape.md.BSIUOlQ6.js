import{_ as h,C as e,c as o,o as p,j as a,ag as r,a as i,G as t,w as d}from"./chunks/framework.DteEOKvC.js";const x=JSON.parse('{"title":"unicorn/no-hex-escape","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md"}'),k={name:"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md"},c={id:"unicorn-no-hex-escape",tabindex:"-1"},u={class:"rule-meta"};function g(F,s,b,y,E,C){const n=e("Badge"),l=e("Alert");return p(),o("div",null,[a("h1",c,[s[0]||(s[0]=i("unicorn/no-hex-escape ")),t(n,{type:"info",text:"Pedantic"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#unicorn-no-hex-escape","aria-label":'Permalink to "unicorn/no-hex-escape <Badge type="info" text="Pedantic" />"'},"​",-1))]),a("div",u,[t(l,{class:"fix",type:"info"},{default:d(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"🛠️",-1),i(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=r('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces a convention of using <a href="https://mathiasbynens.be/notes/javascript-escapes#unicode" target="_blank" rel="noreferrer">Unicode escapes</a> instead of <a href="https://mathiasbynens.be/notes/javascript-escapes#hexadecimal" target="_blank" rel="noreferrer">hexadecimal escapes</a> for consistency and clarity.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x1B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x1B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><p>To <strong>enable</strong> this rule in the CLI or using the config file, you can use:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wK2Gt" id="tab-Unqr75K" checked><label data-title="CLI" for="tab-Unqr75K">CLI</label><input type="radio" name="group-wK2Gt" id="tab-HbPOuOR"><label data-title="Config (.oxlintrc.json)" for="tab-HbPOuOR">Config (.oxlintrc.json)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oxlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unicorn/no-hex-escape</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unicorn/no-hex-escape&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/30318457d425dbf627aa428aad8004f6b92b1c59/crates/oxc_linter/src/rules/unicorn/no_hex_escape.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',13))])}const m=h(k,[["render",g]]);export{x as __pageData,m as default};
