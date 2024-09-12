import{_ as h,c as r,j as s,a,I as i,w as l,a4 as o,E as e,o as p}from"./chunks/framework.Qpa4gud8.js";const B=JSON.parse('{"title":"unicorn/no-hex-escape","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/no-hex-escape.md"},d={id:"unicorn-no-hex-escape",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#unicorn-no-hex-escape","aria-label":'Permalink to "unicorn/no-hex-escape <Badge type="info" text="Pedantic" />"'},"​",-1),g={class:"rule-meta"},u=s("span",{class:"emoji"},"🛠️",-1),F=o('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces a convention of using <a href="https://mathiasbynens.be/notes/javascript-escapes#unicode" target="_blank" rel="noreferrer">Unicode escapes</a> instead of <a href="https://mathiasbynens.be/notes/javascript-escapes#hexadecimal" target="_blank" rel="noreferrer">hexadecimal escapes</a> for consistency and clarity.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x1B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x1B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\u001B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_hex_escape.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',10);function y(_,E,f,x,b,m){const t=e("Badge"),n=e("Alert");return p(),r("div",null,[s("h1",d,[a("unicorn/no-hex-escape "),i(t,{type:"info",text:"Pedantic"}),a(),k]),s("div",g,[i(n,{class:"fix",type:"info"},{default:l(()=>[u,a(" An auto-fix is available for this rule. ")]),_:1})]),F])}const v=h(c,[["render",y]]);export{B as __pageData,v as default};
