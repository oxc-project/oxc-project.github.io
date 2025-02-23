import{_ as t,c as a,o as s,ag as i}from"./chunks/framework.DteEOKvC.js";const u=JSON.parse('{"title":"Linter","description":"","frontmatter":{"title":"Linter","outline":"deep"},"headers":[],"relativePath":"docs/contribute/linter.md","filePath":"docs/contribute/linter.md"}'),n={name:"docs/contribute/linter.md"};function r(o,e,l,c,d,h){return s(),a("div",null,e[0]||(e[0]=[i('<h1 id="linter" tabindex="-1">Linter <a class="header-anchor" href="#linter" aria-label="Permalink to &quot;Linter&quot;">​</a></h1><h2 id="contributing-new-rules" tabindex="-1">Contributing New Rules <a class="header-anchor" href="#contributing-new-rules" aria-label="Permalink to &quot;Contributing New Rules&quot;">​</a></h2><p>See the <a href="./linter/adding-rules.html">adding rules</a> guide for how to add new rules to Oxlint.</p><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h2><p>Create a <code>./test.ts</code> and then</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;run --bin oxlint -- test.ts&quot;</span></span></code></pre></div><p>Or test and filter against the rule:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;test -p oxc_linter -- rule-name&quot;</span></span></code></pre></div><h3 id="snapshot-testing" tabindex="-1">Snapshot Testing <a class="header-anchor" href="#snapshot-testing" aria-label="Permalink to &quot;Snapshot Testing&quot;">​</a></h3><p><a href="https://insta.rs/docs" target="_blank" rel="noreferrer"><code>cargo insta</code></a> is used for snapshot testing.</p><p>After running <code>cargo test -p oxc_linter</code> and the line <code>Tester::new(RULE::NAME, pass, fail).test_and_snapshot()</code> is called, a new <code>rule.snap.new</code> file will be generated.</p><p>Use <code>cargo insta accept</code> to accept all snapshot changes.</p><h2 id="rule-category" tabindex="-1">Rule Category <a class="header-anchor" href="#rule-category" aria-label="Permalink to &quot;Rule Category&quot;">​</a></h2><ul><li><strong>correctness</strong> - code that is outright wrong or useless</li><li><strong>suspicious</strong> - code that is most likely wrong or useless</li><li><strong>pedantic</strong> - lints which are rather strict or have occasional false positives</li><li><strong>perf</strong> - code that can be written to run faster</li><li><strong>style</strong> - code that should be written in a more idiomatic way</li><li><strong>restriction</strong> - lints should be considered on a case-by-case basis before enabling.</li><li><strong>nursery</strong> - new lints that are still under development</li></ul>',14)]))}const g=t(n,[["render",r]]);export{u as __pageData,g as default};
