import{_ as r,c as l,j as s,a as e,I as a,w as h,a3 as p,E as i,o as d}from"./chunks/framework.wOwjnRe1.js";const b=JSON.parse('{"title":"react/no-render-return-value","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/no-render-return-value.md","filePath":"docs/guide/usage/linter/rules/react/no-render-return-value.md"}'),o={name:"docs/guide/usage/linter/rules/react/no-render-return-value.md"},k={id:"react-no-render-return-value",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#react-no-render-return-value","aria-label":'Permalink to "react/no-render-return-value <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},E=s("span",{class:"emoji"},"✅",-1),g=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule will warn you if you try to use the ReactDOM.render() return value.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vaa inst </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;, document.body);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;, document.body);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;, document.body);</span></span></code></pre></div>`,4);function _(y,m,v,f,C,x){const t=i("Badge"),n=i("Alert");return d(),l("div",null,[s("h1",k,[e("react/no-render-return-value "),a(t,{type:"info",text:"Correctness"}),e(),c]),s("div",u,[a(n,{class:"default-on",type:"success"},{default:h(()=>[E,e(" This rule is turned on by default. ")]),_:1})]),g])}const A=r(o,[["render",_]]);export{b as __pageData,A as default};
