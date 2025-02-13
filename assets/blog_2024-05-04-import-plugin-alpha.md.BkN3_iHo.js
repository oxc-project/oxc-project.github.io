import{_ as r,C as o,c as a,o as s,G as n,ag as i}from"./chunks/framework.K3-BBDXc.js";const b=JSON.parse('{"title":"Oxlint Import Plugin Alpha","description":"","frontmatter":{"title":"Oxlint Import Plugin Alpha","outline":"deep","authors":["boshen"]},"headers":[],"relativePath":"blog/2024-05-04-import-plugin-alpha.md","filePath":"blog/2024-05-04-import-plugin-alpha.md"}'),l={name:"blog/2024-05-04-import-plugin-alpha.md"};function p(c,e,u,h,d,m){const t=o("AppBlogPostHeader");return s(),a("div",null,[n(t),e[0]||(e[0]=i(`<p>We are excited to announce an alpha release for <code>oxlint --import-plugin</code>, a port of <a href="https://github.com/import-js/eslint-plugin-import" target="_blank" rel="noreferrer"><code>eslint-plugin-import</code></a>.</p><p>This port aims to resolve all known issues associated with <code>eslint-plugin-import</code>:</p><ul><li>Performance - execution time exceeding one minute when certain rules are enabled</li><li>Dependency size - 188 dependencies totaling 30M</li><li>Backwards compatibility - the necessity to <a href="https://github.com/import-js/eslint-plugin-import/pull/2447#issuecomment-1117384140" target="_blank" rel="noreferrer">support Node.js v4.0.0</a></li><li>Dependency compatibility - the need to replace it with <a href="https://github.com/un-ts/eslint-plugin-import-x" target="_blank" rel="noreferrer"><code>eslint-plugin-import-x</code></a></li><li><a href="https://github.com/import-js/eslint-plugin-import/issues/2948" target="_blank" rel="noreferrer">Upgrading to ESLint v9</a></li></ul><h2 id="what-s-in-the-release" tabindex="-1">What&#39;s in the release? <a class="header-anchor" href="#what-s-in-the-release" aria-label="Permalink to &quot;What&#39;s in the release?&quot;">​</a></h2><p>This alpha release is expected to work if your project is in ESM (ECMAScript Modules).</p><p>If path aliases (e.g. <code>@/foo</code>) is required through <a href="https://www.typescriptlang.org/tsconfig/#paths" target="_blank" rel="noreferrer">tsconfig.compilerOptions.paths</a>, the <code>--tsconfig</code> option can be used:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx oxlint@latest --tsconfig ./tsconfig.json --import-plugin</span></span></code></pre></div><p>The rules that are enabled by default via <code>npx oxlint@latest --import-plugin</code> are:</p><ul><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/default.md" target="_blank" rel="noreferrer">default</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/named.md" target="_blank" rel="noreferrer">named</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/namespace.md" target="_blank" rel="noreferrer">namespace</a></li></ul><p>Rules that can be enabled selectively via <code>npx oxlint@latest --import-plugin -D rule-name</code> are:</p><ul><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-as-default.md" target="_blank" rel="noreferrer">no-named-as-default</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-as-default-member.md" target="_blank" rel="noreferrer">no-named-as-default-member</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-self-import.md" target="_blank" rel="noreferrer">no-self-import</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-duplicates.md" target="_blank" rel="noreferrer">no-duplicates</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-amd.md" target="_blank" rel="noreferrer">no-amd</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-default-export.md" target="_blank" rel="noreferrer">no-default-export</a></li><li><a href="https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-cycle.md" target="_blank" rel="noreferrer">no-cycle</a></li></ul><p>There are also improvements to these rules; for example, the diagnostics for the <code>no-cycle</code> rule have been improved:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  ⚠ eslint-plugin-import(no-cycle): Dependency cycle detected</span></span>
<span class="line"><span>    ╭─[apps/web/playwright/lib/fixtures.ts:13:42]</span></span>
<span class="line"><span> 12 │ import { createPaymentsFixture } from &quot;../fixtures/payments&quot;;</span></span>
<span class="line"><span> 13 │ import { createBookingPageFixture } from &quot;../fixtures/regularBookings&quot;;</span></span>
<span class="line"><span>    ·                                          ─────────────────────────────</span></span>
<span class="line"><span> 14 │ import { createRoutingFormsFixture } from &quot;../fixtures/routingForms&quot;;</span></span>
<span class="line"><span>    ╰────</span></span>
<span class="line"><span>  help: These paths form a cycle:</span></span>
<span class="line"><span>        -&gt; ../fixtures/regularBookings - apps/web/playwright/fixtures/regularBookings.ts</span></span>
<span class="line"><span>        -&gt; ./users - apps/web/playwright/fixtures/users.ts</span></span>
<span class="line"><span>        -&gt; ../lib/testUtils - apps/web/playwright/lib/testUtils.ts</span></span>
<span class="line"><span>        -&gt; ./fixtures - apps/web/playwright/lib/fixtures.ts</span></span></code></pre></div><p>This isn&#39;t a long list of features, but due to the complexity of the current state of the ecosystem, it requires a lot of effort to implement these rules and ensure they work correctly.</p><p>Over the past six months, we have worked in our spare time and successfully completed all the prerequisites for the <code>--import-plugin</code> to work:</p><ul><li>a <a href="https://github.com/oxc-project/oxc-resolver" target="_blank" rel="noreferrer">resolver</a> for module resolution</li><li>a small <a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/service.rs" target="_blank" rel="noreferrer">&quot;runtime&quot;</a> to maximize processing dependent files in parallel</li><li>a <a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_syntax/src/module_record.rs" target="_blank" rel="noreferrer"><code>ModuleRecord</code></a> data structure for storing import / export information, and its respective <a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_semantic/src/module_record/builder.rs" target="_blank" rel="noreferrer">builder</a></li></ul><h2 id="how-can-i-help" tabindex="-1">How can I help? <a class="header-anchor" href="#how-can-i-help" aria-label="Permalink to &quot;How can I help?&quot;">​</a></h2><p>If you are a project maintainer (a.k.a. configuration engineer) and lack the time or energy to keep ESLint and all its plugins updated, you may follow <a href="https://github.com/brooooooklyn" target="_blank" rel="noreferrer">@brooooooklyn</a>&#39;s lead and <a href="https://github.com/napi-rs/napi-rs/pull/2032" target="_blank" rel="noreferrer">replace ESLint with oxlint in all his projects</a>.</p><p>If you are an open-source enthusiast and are willing to help out, come talk to us on <a href="https://discord.gg/9uXCAwqQZW" target="_blank" rel="noreferrer">discord</a>, check out the <a href="https://github.com/oxc-project/oxc/issues/481" target="_blank" rel="noreferrer">linter product plan and progress issue</a>, or help by <a href="https://github.com/oxc-project/oxc/issues/3161" target="_blank" rel="noreferrer">proposing new rules</a> that were deferred.</p><p>If you are an engineering manager, or are willing to migrate your project to oxlint (with 330 rules and growing) to keep your infrastructure costs down, you may consider <a href="https://github.com/sponsors/Boshen" target="_blank" rel="noreferrer">sponsoring</a> so we can prioritize your project.</p><p>Please remember <code>oxlint</code> is currently community driven, I believe that with enough resources, we can make <code>--import-plugin</code> generally available in the next few months.</p><hr><p>To start using <code>oxlint</code>, follow the <a href="/docs/guide/usage/linter.html">installation guide</a> or learn more about the <a href="/docs/guide/introduction.html">oxc project</a>.</p>`,23))])}const f=r(l,[["render",p]]);export{b as __pageData,f as default};
