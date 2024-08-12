import{_ as i,c as d,j as e,a as t,I as a,w as n,a3 as c,E as s,o as l}from"./chunks/framework.wOwjnRe1.js";const T=JSON.parse('{"title":"jest/no-deprecated-functions","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/no-deprecated-functions.md","filePath":"docs/guide/usage/linter/rules/jest/no-deprecated-functions.md"}'),h={name:"docs/guide/usage/linter/rules/jest/no-deprecated-functions.md"},u={id:"jest-no-deprecated-functions",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#jest-no-deprecated-functions","aria-label":'Permalink to "jest/no-deprecated-functions <Badge type="info" text="Style" />"'},"​",-1),m={class:"rule-meta"},f=e("span",{class:"emoji"},"🛠️",-1),k=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Over the years Jest has accrued some debt in the form of functions that have either been renamed for clarity, or replaced with more powerful APIs.</p><p>This rule can also autofix a number of these deprecations for you.</p><h4 id="jest-resetmoduleregistry" tabindex="-1"><code>jest.resetModuleRegistry</code> <a class="header-anchor" href="#jest-resetmoduleregistry" aria-label="Permalink to &quot;`jest.resetModuleRegistry`&quot;">​</a></h4><p>This function was renamed to <code>resetModules</code> in Jest 15 and removed in Jest 27.</p><h4 id="jest-addmatchers" tabindex="-1"><code>jest.addMatchers</code> <a class="header-anchor" href="#jest-addmatchers" aria-label="Permalink to &quot;`jest.addMatchers`&quot;">​</a></h4><p>This function was replaced with <code>expect.extend</code> in Jest 17 and removed in Jest 27.</p><h4 id="require-requireactual-require-requiremock" tabindex="-1"><code>require.requireActual</code> &amp; <code>require.requireMock</code> <a class="header-anchor" href="#require-requireactual-require-requiremock" aria-label="Permalink to &quot;`require.requireActual` &amp; `require.requireMock`&quot;">​</a></h4><p>These functions were replaced in Jest 21 and removed in Jest 26.</p><p>Originally, the <code>requireActual</code> &amp; <code>requireMock</code> the <code>requireActual</code>&amp; <code>requireMock</code> functions were placed onto the <code>require</code> function.</p><p>These functions were later moved onto the <code>jest</code> object in order to be easier for type checkers to handle, and their use via <code>require</code> deprecated. Finally, the release of Jest 26 saw them removed from the <code>require</code> function altogether.</p><h4 id="jest-runtimerstotime" tabindex="-1"><code>jest.runTimersToTime</code> <a class="header-anchor" href="#jest-runtimerstotime" aria-label="Permalink to &quot;`jest.runTimersToTime`&quot;">​</a></h4><p>This function was renamed to <code>advanceTimersByTime</code> in Jest 22 and removed in Jest 27.</p><h4 id="jest-genmockfrommodule" tabindex="-1"><code>jest.genMockFromModule</code> <a class="header-anchor" href="#jest-genmockfrommodule" aria-label="Permalink to &quot;`jest.genMockFromModule`&quot;">​</a></h4><p>This function was renamed to <code>createMockFromModule</code> in Jest 26, and is scheduled for removal in Jest 30.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>While typically these deprecated functions are kept in the codebase for a number of majors, eventually they are removed completely.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jest.resetModuleRegistry; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// since Jest 15</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jest.addMatchers; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// since Jest 17</span></span></code></pre></div>',19);function q(_,b,j,y,g,x){const o=s("Badge"),r=s("Alert");return l(),d("div",null,[e("h1",u,[t("jest/no-deprecated-functions "),a(o,{type:"info",text:"Style"}),t(),p]),e("div",m,[a(r,{class:"fix",type:"info"},{default:n(()=>[f,t(" An auto-fix is available for this rule. ")]),_:1})]),k])}const w=i(h,[["render",q]]);export{T as __pageData,w as default};
