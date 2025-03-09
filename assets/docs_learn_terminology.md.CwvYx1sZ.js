import{_ as a,c as n,o as t,ag as o}from"./chunks/framework.B7cJCh-b.js";const b=JSON.parse('{"title":"Terminology","description":"","frontmatter":{"title":"Terminology","outline":"deep"},"headers":[],"relativePath":"docs/learn/terminology.md","filePath":"docs/learn/terminology.md"}'),i={name:"docs/learn/terminology.md"};function r(s,e,l,h,c,d){return t(),n("div",null,e[0]||(e[0]=[o('<h1 id="terminology" tabindex="-1">Terminology <a class="header-anchor" href="#terminology" aria-label="Permalink to &quot;Terminology&quot;">​</a></h1><h2 id="binding" tabindex="-1">Binding <a class="header-anchor" href="#binding" aria-label="Permalink to &quot;Binding&quot;">​</a></h2><p>A value being assigned/bound within a scope.</p><h2 id="binding-type" tabindex="-1">Binding type <a class="header-anchor" href="#binding-type" aria-label="Permalink to &quot;Binding type&quot;">​</a></h2><p>The type of the binding: imported value, assigned value (let/const/var), exported value, func/class declaration, func/method arguments, etc.</p><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>A block in which bindings can exist. A block is any code surrounded with {}, such as classes, functions, methods, callbacks, if/else, etc. Scopes have a hierarchy, with parents having children (not always), and children belonging to a parent. Bindings in a child shadow those in a parent if they have the same name.</p><h2 id="scope-flags" tabindex="-1">Scope flags <a class="header-anchor" href="#scope-flags" aria-label="Permalink to &quot;Scope flags&quot;">​</a></h2><p>Metadata about the current scope (not inherited hierarchy scope): function, constructor, top-level (program), etc.</p><h2 id="symbol" tabindex="-1">Symbol <a class="header-anchor" href="#symbol" aria-label="Permalink to &quot;Symbol&quot;">​</a></h2><p>A binding wrapper with references to each usage/call site of the bound variable within the current source text. A symbol is assigned an ID in the order they are scanned, and reach reference points to the symbol by that ID.</p><h2 id="symbol-flags" tabindex="-1">Symbol flags <a class="header-anchor" href="#symbol-flags" aria-label="Permalink to &quot;Symbol flags&quot;">​</a></h2><p>Metadata about the symbol/binding.</p><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p>A symbol reference is the usage of a symbol (and in turn a binding), and is assigned an ID in the order they are scanned. Each reference is flagged as read, write, or both.</p><h2 id="span" tabindex="-1">Span <a class="header-anchor" href="#span" aria-label="Permalink to &quot;Span&quot;">​</a></h2><p>The start/end offset of the node within the source text.</p>',17)]))}const g=a(i,[["render",r]]);export{b as __pageData,g as default};
