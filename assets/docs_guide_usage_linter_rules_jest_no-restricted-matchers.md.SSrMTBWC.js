import{_ as e,c as t,j as i,a as s,I as n,a3 as h,o as l,E as p}from"./chunks/framework.wOwjnRe1.js";const B=JSON.parse('{"title":"jest/no-restricted-matchers","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/no-restricted-matchers.md","filePath":"docs/guide/usage/linter/rules/jest/no-restricted-matchers.md"}'),k={name:"docs/guide/usage/linter/rules/jest/no-restricted-matchers.md"},r={id:"jest-no-restricted-matchers",tabindex:"-1"},d=i("a",{class:"header-anchor",href:"#jest-no-restricted-matchers","aria-label":'Permalink to "jest/no-restricted-matchers <Badge type="info" text="Style" />"'},"​",-1),E=h(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Ban specific matchers &amp; modifiers from being used, and can suggest alternatives.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">it</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;is false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // if this has a modifier (i.e. \`not.toBeFalsy\`), it would be considered fine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeFalsy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">it</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;resolves&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // all uses of this modifier are disallowed, regardless of matcher</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myPromise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()).resolves.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">describe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;when an error happens&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  it</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;does not upload the file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // all uses of this matcher are disallowed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uploadFileMock).not.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toHaveBeenCalledWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file.name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,5);function o(c,g,y,F,u,m){const a=p("Badge");return l(),t("div",null,[i("h1",r,[s("jest/no-restricted-matchers "),n(a,{type:"info",text:"Style"}),s(),d]),E])}const f=e(k,[["render",o]]);export{B as __pageData,f as default};
