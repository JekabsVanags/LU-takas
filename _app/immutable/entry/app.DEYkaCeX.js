const __vite__fileDeps=["../nodes/0.DVlcwVi9.js","../chunks/scheduler.DWY5Y_d_.js","../chunks/index.TFfKFxUl.js","../chunks/stores.D4P1NSu3.js","../chunks/paths.gWZbKTK0.js","../assets/0.Bb8MDSba.css","../nodes/1.BaRQiilt.js","../chunks/entry.CK5OS1GF.js","../nodes/2.BvezhE0W.js","../assets/2.Bwd38Gwz.css","../nodes/3.CI2rYK3H.js","../assets/3.qN-pRsPA.css","../nodes/4.CHlaeoOA.js","../chunks/each.D6YF6ztN.js","../assets/4.CtQpsaIV.css","../nodes/5.dBPrKbnG.js","../assets/5.N4mElUWg.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as N,b as B,o as U,d as I,t as j}from"../chunks/scheduler.DWY5Y_d_.js";import{S as z,i as W,s as F,o as d,f as G,g as k,p as h,q as A,r as g,d as w,e as H,c as J,a as K,l as O,m as p,t as Q,b as X,j as Y,u as D,v as y,w as R,x as S,y as P,z as L}from"../chunks/index.TFfKFxUl.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},T={},E=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in T)return;T[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=u.length-1;b>=0;b--){const v=u[b];if(v.href===o&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Z,f||(_.as="script",_.crossOrigin=""),_.href=o,s&&_.setAttribute("nonce",s),document.head.appendChild(_),f)return new Promise((b,v)=>{_.addEventListener("load",b),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(u=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=u,window.dispatchEvent(t),!t.defaultPrevented)throw u})},se={};function $(a){let e,n,i;var r=a[1][0];function u(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=y(r,u(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=d()},l(t){e&&S(e.$$.fragment,t),n=d()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,u(t)),t[12](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function u(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=y(r,u(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=d()},l(t){e&&S(e.$$.fragment,t),n=d()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,u(t)),t[11](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function u(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=y(r,u(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=d()},l(t){e&&S(e.$$.fragment,t),n=d()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,u(t)),t[10](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&L(e,t)}}}function V(a){let e,n=a[6]&&q(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(w),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){k(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function q(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,r,u;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&V(a);return{c(){n.c(),i=F(),f&&f.c(),r=d()},l(l){n.l(l),i=G(l),f&&f.l(l),r=d()},m(l,m){s[e].m(l,m),k(l,i,m),f&&f.m(l,m),k(l,r,m),u=!0},p(l,[m]){let _=e;e=o(l),e===_?s[e].p(l,m):(D(),h(s[_],1,1,()=>{s[_]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=V(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){u||(g(n),u=!0)},o(l){h(n),u=!1},d(l){l&&(w(i),w(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:u}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;B(i.page.notify);let l=!1,m=!1,_=null;U(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,_=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,u=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,u,s,o,f,l,m,_,i,r,b,v,C]}class oe extends z{constructor(e){super(),W(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>E(()=>import("../nodes/0.DVlcwVi9.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>E(()=>import("../nodes/1.BaRQiilt.js"),__vite__mapDeps([6,1,2,7,4]),import.meta.url),()=>E(()=>import("../nodes/2.BvezhE0W.js"),__vite__mapDeps([8,1,2,4,3,9]),import.meta.url),()=>E(()=>import("../nodes/3.CI2rYK3H.js"),__vite__mapDeps([10,1,2,4,3,11]),import.meta.url),()=>E(()=>import("../nodes/4.CHlaeoOA.js"),__vite__mapDeps([12,1,2,13,4,3,14]),import.meta.url),()=>E(()=>import("../nodes/5.dBPrKbnG.js"),__vite__mapDeps([15,1,2,13,3,4,16]),import.meta.url)],le=[],fe={"/":[2],"/programmas":[3],"/programmas/[name]":[-5],"/programmas/[name]/[year]":[-6]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};