import{d,j as r,ai as m,y as p,aj as u,x as h,k as _,o as f,c as b,l as e,a as v,p as x,q as g,_ as w}from"./framework.PqJSex99.js";const L=t=>(x("data-v-bb4bda92"),t=t(),g(),t),y=L(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})],-1)),B=[y],a="/blog/2024-05-04-import-plugin-alpha.html",E=d({__name:"Banner",setup(t){const o=r(),{height:n}=m(o);p(()=>{n.value&&document.documentElement.style.setProperty("--vp-layout-top-height",`${n.value+16}px`)});const l=()=>{document.documentElement.classList.remove("banner-dismissed")},c=()=>{document.documentElement.classList.add("banner-dismissed")},s=u(`oxc-banner-dismissed-${a}`,!1);h(s,()=>{s.value&&c()},{immediate:!0}),_(()=>{location.pathname.includes(a)?c():s.value||l()});const i=()=>{s.value=!0};return(k,I)=>(f(),b("div",{ref_key:"el",ref:o,class:"banner"},[e("div",{class:"text"},[e("a",{href:a},"Oxlint Import Plugin Alpha Release"),v(" 🎉 ")]),e("button",{type:"button",onClick:i},B)],512))}}),C=w(E,[["__scopeId","data-v-bb4bda92"]]);export{C as default};
