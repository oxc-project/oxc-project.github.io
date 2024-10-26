import{_ as o,c as t,a2 as a,o as i}from"./chunks/framework.8qdJL5ht.js";const h=JSON.parse('{"title":"Rules and Policy","description":"","frontmatter":{"title":"Rules and Policy","outline":"deep"},"headers":[],"relativePath":"docs/contribute/rules.md","filePath":"docs/contribute/rules.md"}'),r={name:"docs/contribute/rules.md"};function n(l,e,c,s,d,u){return i(),t("div",null,e[0]||(e[0]=[a('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><h2 id="pr-rules" tabindex="-1">PR Rules <a class="header-anchor" href="#pr-rules" aria-label="Permalink to &quot;PR Rules&quot;">​</a></h2><ul><li>We <a href="https://graphite.dev/blog/how-large-prs-slow-down-development" target="_blank" rel="noreferrer">prefer smaller PRs</a>.</li><li>Try stacked PRs with <a href="https://graphite.dev" target="_blank" rel="noreferrer">graphite</a> if you have write access, which will be given to you when you contribute a lot.</li><li>Please create an issue or discussion if the PR contains architectural changes.</li></ul><h2 id="development-policy" tabindex="-1">Development Policy <a class="header-anchor" href="#development-policy" aria-label="Permalink to &quot;Development Policy&quot;">​</a></h2><ul><li>Embrace data-oriented design.</li><li>Keep APIs simple and well-documented.</li><li>Always provide a reference to the source if the implementation is from another project.</li></ul><h3 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h3><ul><li>All performance issues are considered as bugs in this project, this includes all runtime and compilation performance issues. <ul><li>Follow guidance from the <a href="https://nnethercote.github.io/perf-book/introduction.html" target="_blank" rel="noreferrer">Rust performance book</a>.</li><li>Minimize the use of the <code>regex</code> crate. Use Rust iterators and string methods for better performance.</li></ul></li><li>Compile time must be minimized to reduce impact on development workflow and downstream tools. <ul><li>Minimize third-party dependencies to reduce compilation speed and project complexity.</li><li>Avoid heavy macros, generics, or any Rust techniques that slow down compilation.</li><li>Our <a href="https://github.com/oxc-project/oxc/actions/workflows/ci.yml?query=branch%3Amain" target="_blank" rel="noreferrer">CI runs</a> complete in 3 minutes, any regressions need to be fixed.</li></ul></li></ul><h2 id="maintenance-policy" tabindex="-1">Maintenance Policy <a class="header-anchor" href="#maintenance-policy" aria-label="Permalink to &quot;Maintenance Policy&quot;">​</a></h2><ul><li>Monitor code coverage for unused code. Aim for 99% code coverage.</li><li>Actively monitor and work on reducing the CI time to speed up merging of PRs. The current CI time on GitHub actions is around 3 minutes.</li><li>Documentation first - documentation should serve as the source of truth. Keep the documentation updated and share the link instead of repeatedly answering the same questions. See GitLab&#39;s <a href="https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first" target="_blank" rel="noreferrer">handbook-first</a> approach.</li></ul><h2 id="conventional-commits" tabindex="-1">Conventional Commits <a class="header-anchor" href="#conventional-commits" aria-label="Permalink to &quot;Conventional Commits&quot;">​</a></h2><p>We follow <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noreferrer">conventional commits</a>:</p><p>The commit contains the following structural elements, to communicate intent to the consumers:</p><ul><li><code>fix</code>: a commit of the type fix patches a bug in your codebase.</li><li><code>feat</code>: a commit of the type feat introduces a new feature to the codebase.</li><li>BREAKING CHANGE: a appends a <code>!</code> after the type/scope, introduces a breaking API change, e.g. <code>feat(parser)!: new feature</code>.</li><li>the scopes are crate names.</li><li>the types are <code>feat:</code>, <code>fix:</code>, <code>chore:</code>, <code>ci:</code>, <code>docs:</code>, <code>style:</code>, <code>refactor:</code>, <code>perf:</code> and <code>test:</code>.</li></ul><h2 id="action-policy" tabindex="-1">Action Policy <a class="header-anchor" href="#action-policy" aria-label="Permalink to &quot;Action Policy&quot;">​</a></h2><p>Taken from <a href="https://astral-sh.notion.site/Astral-s-Values-0ed6a642bcc84e91af6836b2373572f5" target="_blank" rel="noreferrer">Astral&#39;s values</a>:</p><blockquote><p>We bias towards action, even in the face of uncertainty. We favor <em>pragmatic doing</em> over <strong>prolonged debating</strong>; we favor asking for <em>forgiveness</em> over <em>permission</em>. We value <strong>decisiveness — especially</strong> when a decision isn’t clear cut, and <strong>especially</strong> when a decision is reversible.</p><p>A bias towards action is <em>not</em> the same as recklessness. Rather, it’s a bias towards making <em>responsible</em> decisions and acting on them with <em>urgency</em>, even if we’re left with lingering ambiguity or known unknowns.</p></blockquote>',16)]))}const p=o(r,[["render",n]]);export{h as __pageData,p as default};
