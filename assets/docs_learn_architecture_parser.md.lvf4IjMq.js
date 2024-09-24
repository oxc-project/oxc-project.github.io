import{_ as a,c as t,a2 as r,o as i}from"./chunks/framework.DlAqvapY.js";const f=JSON.parse('{"title":"Parser","description":"","frontmatter":{"title":"Parser","outline":"deep"},"headers":[],"relativePath":"docs/learn/architecture/parser.md","filePath":"docs/learn/architecture/parser.md"}'),o={name:"docs/learn/architecture/parser.md"};function n(s,e,c,l,d,p){return i(),t("div",null,e[0]||(e[0]=[r('<h1 id="parser" tabindex="-1">Parser <a class="header-anchor" href="#parser" aria-label="Permalink to &quot;Parser&quot;">​</a></h1><p>Oxc maintains its own AST and parser, which is by far the fastest and most conformant JavaScript and TypeScript (including JSX and TSX) parser written in Rust.</p><p>As the parser often represents a key performance bottleneck in JavaScript tooling, any minor improvements can have a cascading effect on our downstream tools. By developing our parser, we have the opportunity to explore and implement well-researched performance techniques.</p><p>While many existing JavaScript tools rely on [estree] as their AST specification, a notable drawback is its abundance of ambiguous nodes. This ambiguity often leads to confusion during development with [estree].</p><p>The Oxc AST differs slightly from the [estree] AST by removing ambiguous nodes and introducing distinct types. For example, instead of using a generic [estree] <code>Identifier</code>, the Oxc AST provides specific types such as <code>BindingIdentifier</code>, <code>IdentifierReference</code>, and <code>IdentifierName</code>.</p><p>This clear distinction greatly enhances the development experience by aligning more closely with the ECMAScript specification.</p><h2 id="how-is-it-so-fast" tabindex="-1">How is it so fast <a class="header-anchor" href="#how-is-it-so-fast" aria-label="Permalink to &quot;How is it so fast&quot;">​</a></h2><ul><li>AST is allocated in a <a href="https://crates.io/crates/bumpalo" target="_blank" rel="noreferrer">memory arena</a> for fast AST memory allocation and deallocation</li><li>Short strings are inlined by <a href="https://crates.io/crates/compact_str" target="_blank" rel="noreferrer">CompactString</a></li><li>No other heap allocations are done except the above two</li><li>Scope binding, symbol resolution and some syntax errors are not done in the parser, they are delegated to the semantic analyzer</li></ul>',8)]))}const m=a(o,[["render",n]]);export{f as __pageData,m as default};
