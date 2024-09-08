import{_ as t,c as s,j as a,a as e,I as i,a4 as o,o as n,E as c}from"./chunks/framework.Qpa4gud8.js";const E=JSON.parse('{"title":"unicorn/no-array-reduce","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-array-reduce.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-array-reduce.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/no-array-reduce.md"},l={id:"unicorn-no-array-reduce",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#unicorn-no-array-reduce","aria-label":'Permalink to "unicorn/no-array-reduce <Badge type="info" text="Restriction" />"'},"​",-1),u=o(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow <code>Array#reduce()</code> and <code>Array#reduceRight()</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p><code>Array#reduce()</code> and <code>Array#reduceRight()</code> usually result in <a href="https://twitter.com/jaffathecake/status/1213077702300852224" target="_blank" rel="noreferrer">hard-to-read</a> and <a href="https://www.richsnapp.com/article/2019/06-09-reduce-spread-anti-pattern" target="_blank" rel="noreferrer">less performant</a> code. In almost every case, it can be replaced by <code>.map</code>, <code>.filter</code>, or a <code>for-of</code> loop.</p><p>It&#39;s only somewhat useful in the rare case of summing up numbers, which is allowed by default.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reducer, initialValue);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduceRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reducer, initialValue);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_array_reduce.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,10);function p(_,y,f,m,k,g){const r=c("Badge");return n(),s("div",null,[a("h1",l,[e("unicorn/no-array-reduce "),i(r,{type:"info",text:"Restriction"}),e(),h]),u])}const x=t(d,[["render",p]]);export{E as __pageData,x as default};