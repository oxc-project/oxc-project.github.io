import{_ as e,c as o,o as t,a5 as a}from"./chunks/framework.BWLfa7pZ.js";const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"title":"Introduction","outline":"deep"},"headers":[],"relativePath":"docs/learn/parser_in_rust/intro.md","filePath":"docs/learn/parser_in_rust/intro.md"}'),r={name:"docs/learn/parser_in_rust/intro.md"},n=a('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>We are in <a href="https://www.swyx.io/js-third-age/" target="_blank" rel="noreferrer">The Third Age of JavaScript</a>, the common trend right now is to author JavaScript tools in Rust or Go for their performance gains.</p><p>But authoring JavaScript tools are challenging, let alone writing them in Rust. I have struggled a lot when learning these technologies, and I wish fewer people to take the same struggling journey.</p><p>I want to make my own contribution to the community by writing this guide, so you don&#39;t have to take the same journey as I had.</p><p>There are only a handful of developers on the Rust side, and I would like to see you here and join us, so we can build better and faster tools for everyone to enjoy.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>For this guide, the standard compiler frontend phases will be applied:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Source Text --&gt; Lexer --&gt; Token --&gt; Parser --&gt; AST</span></span></code></pre></div><p>Writing a JavaScript parser is fairly easy, it is 10% architectural decisions and 90% hard work on the fine-grained details.</p><p>The architectural decisions will mostly affect two categories:</p><ul><li>the performance of our parser</li><li>how nice it is to consume our AST</li></ul><p>Knowing all the options and trade-offs before building a parser in Rust will make our whole journey much smoother.</p><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h2><p>The key to a performant Rust program is to <strong>allocate less memory</strong> and <strong>use fewer CPU cycles</strong>.</p><p>It is mostly transparent where memory allocations are made just by looking for heap-allocated objects such as a <code>Vec</code>, <code>Box</code> or <code>String</code>. Reasoning about their usage will give us a sense of how fast our program will be - the more we allocate, the slower our program will be.</p><p>Rust gives us the power of zero-cost abstractions, we don&#39;t need to worry too much about abstractions causing slower performance. Be careful with our algorithmic complexities and we will be all good to go.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You should also read <a href="https://nnethercote.github.io/perf-book/introduction.html" target="_blank" rel="noreferrer">The Rust Performance Book</a>.</p></div><h2 id="rust-source-code" tabindex="-1">Rust Source Code <a class="header-anchor" href="#rust-source-code" aria-label="Permalink to &quot;Rust Source Code&quot;">​</a></h2><p>Whenever the performance of an function call cannot be deduced, do not be afraid to click the &quot;source&quot; button on the Rust documentation and read the source code, they are easy to understand most of the time.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>When navigating the Rust source code, searching for a definition is simply looking for <code>fn function_name</code>, <code>struct struct_name</code>, <code>enum enum_name</code> etc. This is one advantage of having constant grammar in Rust (compared to JavaScript 😉).</p></div>',20),i=[n];function s(c,l,d,u,h,p){return t(),o("div",null,i)}const g=e(r,[["render",s]]);export{f as __pageData,g as default};
