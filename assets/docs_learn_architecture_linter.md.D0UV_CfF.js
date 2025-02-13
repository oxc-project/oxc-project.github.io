import{_ as t,c as o,o as r,ag as c}from"./chunks/framework.K3-BBDXc.js";const h=JSON.parse('{"title":"Linter","description":"","frontmatter":{"title":"Linter","outline":"deep"},"headers":[],"relativePath":"docs/learn/architecture/linter.md","filePath":"docs/learn/architecture/linter.md"}'),i={name:"docs/learn/architecture/linter.md"};function a(n,e,l,s,d,u){return r(),o("div",null,e[0]||(e[0]=[c('<h1 id="linter-architecture" tabindex="-1">Linter Architecture <a class="header-anchor" href="#linter-architecture" aria-label="Permalink to &quot;Linter Architecture&quot;">​</a></h1><p>This article is originally posted on <a href="https://leaysgur.github.io/posts/2024/01/15/160838" target="_blank" rel="noreferrer">leaysgur.github.io/posts</a> by <a href="https://github.com/leaysgur" target="_blank" rel="noreferrer">@leaysgur</a>.</p><h2 id="apps-oxlint" tabindex="-1">apps/oxlint <a class="header-anchor" href="#apps-oxlint" aria-label="Permalink to &quot;apps/oxlint&quot;">​</a></h2><p>The <code>oxlint</code> binary is the result of building <code>main.rs</code> from the <code>apps/oxlint</code> crate.</p><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/main/apps/oxlint/Cargo.toml" target="_blank" rel="noreferrer">Cargo.toml Configuration</a></p></blockquote><p>Here, it parses arguments and then runs the <code>LintRunner</code>.</p><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_cli/src/lint/main.rs#L17-L19" target="_blank" rel="noreferrer">Lint Execution Flow</a></p></blockquote><h2 id="crates-oxc-diagnostics" tabindex="-1">crates/oxc_diagnostics <a class="header-anchor" href="#crates-oxc-diagnostics" aria-label="Permalink to &quot;crates/oxc_diagnostics&quot;">​</a></h2><p>The <code>LintService</code> passes the <code>mpsc::channel</code> Sender to <code>oxc_diagnostics</code> to receive lint results.</p><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_diagnostics/src/service.rs#L96" target="_blank" rel="noreferrer">Receiving Lint Results</a></p></blockquote><p>It formats and displays the received messages. The formatting is done by the <code>miette</code> crate.</p><blockquote><p><a href="https://github.com/zkat/miette" target="_blank" rel="noreferrer">miette Crate Reference</a></p></blockquote><h2 id="crates-oxc-linter" tabindex="-1">crates/oxc_linter <a class="header-anchor" href="#crates-oxc-linter" aria-label="Permalink to &quot;crates/oxc_linter&quot;">​</a></h2><p>Starting with the <code>LintService</code>:</p><ul><li>Holds <code>self.runtime</code> as <code>Arc&lt;Runtime&gt;</code></li><li><code>Runtime</code> holds paths for linting</li><li>Upon running, it iterates over <code>Runtime</code> paths in parallel using <code>rayon</code></li><li>It sends a <code>None</code> to finish</li></ul><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/service.rs#L51" target="_blank" rel="noreferrer">LintService Implementation</a></p></blockquote><h3 id="runtime-process-path" tabindex="-1"><code>Runtime</code>: <code>process_path()</code> <a class="header-anchor" href="#runtime-process-path" aria-label="Permalink to &quot;`Runtime`: `process_path()`&quot;">​</a></h3><ul><li>Infers extension and content from the path</li><li>Supports <code>.[m|c]?[j|t]s</code> or <code>.[j|t]sx</code> extensions</li><li>Exceptions for <code>.vue</code>, <code>.astro</code>, and <code>.svelte</code> with partial support for <code>script</code> blocks</li><li>Processes JavaScript and TypeScript sources</li><li>Executes linting and sends results to <code>DiagnosticService</code></li></ul><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/service.rs#L162" target="_blank" rel="noreferrer">Runtime Path Processing</a></p></blockquote><h3 id="runtime-process-source" tabindex="-1"><code>Runtime</code>: <code>process_source()</code> <a class="header-anchor" href="#runtime-process-source" aria-label="Permalink to &quot;`Runtime`: `process_source()`&quot;">​</a></h3><ul><li>Processes the source with a parser into an AST</li><li>Creates a <code>LintContext</code> from <code>SemanticBuilder</code> and runs it through <code>Linter</code></li></ul><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/service.rs#L206" target="_blank" rel="noreferrer">Runtime Source Processing</a></p></blockquote><h2 id="crates-oxc-semantic-semanticbuilder" tabindex="-1">crates/oxc_semantic: <code>SemanticBuilder</code> <a class="header-anchor" href="#crates-oxc-semantic-semanticbuilder" aria-label="Permalink to &quot;crates/oxc_semantic: `SemanticBuilder`&quot;">​</a></h2><p><code>SemanticBuilder</code> builds semantic information extracted from the source.</p><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_semantic/src/builder.rs#L156" target="_blank" rel="noreferrer">SemanticBuilder Source</a></p></blockquote><ul><li><code>source_text</code>: Source code</li><li><code>nodes</code>: AST nodes</li><li><code>classes</code>: Classes</li><li><code>scopes</code>: Scopes</li><li><code>trivias</code>: Comments</li><li><code>jsdoc</code>: JSDoc</li><li>etc.</li></ul><p>When <code>SemanticBuilder</code> builds, it generates <code>SemanticBuilderReturn</code>, but only <code>Semantic</code> is passed to <code>LintContext</code>.</p><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_semantic/src/lib.rs#L34" target="_blank" rel="noreferrer">SemanticBuilder Return</a></p></blockquote><h2 id="crates-oxc-linter-lintcontext" tabindex="-1">crates/oxc_linter: <code>LintContext</code> <a class="header-anchor" href="#crates-oxc-linter-lintcontext" aria-label="Permalink to &quot;crates/oxc_linter: `LintContext`&quot;">​</a></h2><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/context.rs#L14" target="_blank" rel="noreferrer">LintContext Source</a></p></blockquote><p>Represents the context, with <code>Semantic</code> as the main body. It includes getters for each piece of information and methods like <code>diagnostic()</code> to notify of linting issues.</p><h2 id="crates-oxc-linter-linter" tabindex="-1">crates/oxc_linter: <code>Linter</code> <a class="header-anchor" href="#crates-oxc-linter-linter" aria-label="Permalink to &quot;crates/oxc_linter: `Linter`&quot;">​</a></h2><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/lib.rs#L140" target="_blank" rel="noreferrer">Linter Source</a></p></blockquote><p>The <code>run()</code> function of this <code>Linter</code> is the core of the linting process.</p><ul><li><code>Linter</code> holds rules to execute on the target source in <code>self.rules</code></li><li>Each rule can implement three types of processing as per the trait</li><li>It sequentially executes these three patterns</li></ul><p>For the currently implemented rules, refer to this list.</p><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/oxlint_v0.2.0/crates/oxc_linter/src/rules.rs" target="_blank" rel="noreferrer">Implemented Rules</a></p></blockquote><p>For adding new rules, remember to update this list.</p><h2 id="linter-example" tabindex="-1">Linter Example <a class="header-anchor" href="#linter-example" aria-label="Permalink to &quot;Linter Example&quot;">​</a></h2><p>The repository provides the minimum code configuration for creating a linter.</p><blockquote><p><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/examples/linter.rs" target="_blank" rel="noreferrer">Minimal Linter Code</a></p></blockquote>',41)]))}const b=t(i,[["render",a]]);export{h as __pageData,b as default};
