import{s as L,n as Y}from"../chunks/scheduler.DWY5Y_d_.js";import{S as N,i as O,e as p,t as A,s as C,c as k,a as y,b as P,d as g,f as S,k as T,l as d,g as Q,h,j as q,m as $,r as I,q as U,p as z,A as W,w as X,x as Z,y as x,z as ee,u as te}from"../chunks/index.TFfKFxUl.js";import{e as F}from"../chunks/each.D6YF6ztN.js";import{b as G}from"../chunks/paths.DkU411h_.js";import{d as ae}from"../chunks/stores.BIyVjjdt.js";function se(n){let e,a,t,i,f,c,D=".gads",v;return{c(){e=p("a"),a=p("div"),t=p("h1"),i=A(n[0]),f=C(),c=p("p"),c.textContent=D,this.h()},l(u){e=k(u,"A",{href:!0,class:!0});var m=y(e);a=k(m,"DIV",{class:!0});var b=y(a);t=k(b,"H1",{class:!0});var _=y(t);i=P(_,n[0]),_.forEach(g),f=S(b),c=k(b,"P",{class:!0,"data-svelte-h":!0}),T(c)!=="svelte-xhfz2p"&&(c.textContent=D),b.forEach(g),m.forEach(g),this.h()},h(){d(t,"class","svelte-vt4f3g"),d(c,"class","svelte-vt4f3g"),d(a,"class","text svelte-vt4f3g"),d(e,"href",n[1]),d(e,"class",v="card "+(n[2]?"dark-mode":"light-mode")+" svelte-vt4f3g")},m(u,m){Q(u,e,m),h(e,a),h(a,t),h(t,i),h(a,f),h(a,c)},p(u,[m]){m&1&&q(i,u[0]),m&2&&d(e,"href",u[1]),m&4&&v!==(v="card "+(u[2]?"dark-mode":"light-mode")+" svelte-vt4f3g")&&d(e,"class",v)},i:Y,o:Y,d(u){u&&g(e)}}}function le(n,e,a){let{year:t}=e,{link:i}=e,f;return ae.subscribe(c=>{a(2,f=c)}),n.$$set=c=>{"year"in c&&a(0,t=c.year),"link"in c&&a(1,i=c.link)},[t,i,f]}class re extends N{constructor(e){super(),O(this,e,le,se,L,{year:0,link:1})}}function J(n,e,a){const t=n.slice();return t[1]=e[a],t[3]=a,t}function K(n){let e,a;return e=new re({props:{year:n[3]+1,link:G+"/programmas/"+n[0].slug+"/"+(n[3]+1)}}),{c(){X(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){x(e,t,i),a=!0},p(t,i){const f={};i&1&&(f.link=G+"/programmas/"+t[0].slug+"/"+(t[3]+1)),e.$set(f)},i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){z(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function ne(n){let e,a,t,i,f=n[0].name+"",c,D,v,u=n[0].description+"",m,b,_,E,w=F(Array(n[0].years)),l=[];for(let s=0;s<w.length;s+=1)l[s]=K(J(n,w,s));const R=s=>z(l[s],1,1,()=>{l[s]=null});return{c(){e=p("div"),a=p("div"),t=p("div"),i=p("h1"),c=A(f),D=C(),v=p("p"),m=A(u),b=C(),_=p("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=k(s,"DIV",{id:!0,class:!0});var o=y(e);a=k(o,"DIV",{id:!0,style:!0,class:!0});var r=y(a);t=k(r,"DIV",{id:!0,class:!0});var j=y(t);i=k(j,"H1",{class:!0});var H=y(i);c=P(H,f),H.forEach(g),D=S(j),v=k(j,"P",{class:!0});var M=y(v);m=P(M,u),M.forEach(g),j.forEach(g),r.forEach(g),b=S(o),_=k(o,"DIV",{id:!0,class:!0});var B=y(_);for(let V=0;V<l.length;V+=1)l[V].l(B);B.forEach(g),o.forEach(g),this.h()},h(){d(i,"class","svelte-5wigjd"),d(v,"class","svelte-5wigjd"),d(t,"id","text-div"),d(t,"class","svelte-5wigjd"),d(a,"id","image-div"),$(a,"background-image","url("+n[0].img+")"),d(a,"class","svelte-5wigjd"),d(_,"id","year-list"),d(_,"class","svelte-5wigjd"),d(e,"id","container"),d(e,"class","svelte-5wigjd")},m(s,o){Q(s,e,o),h(e,a),h(a,t),h(t,i),h(i,c),h(t,D),h(t,v),h(v,m),h(e,b),h(e,_);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(_,null);E=!0},p(s,[o]){if((!E||o&1)&&f!==(f=s[0].name+"")&&q(c,f),(!E||o&1)&&u!==(u=s[0].description+"")&&q(m,u),(!E||o&1)&&$(a,"background-image","url("+s[0].img+")"),o&1){w=F(Array(s[0].years));let r;for(r=0;r<w.length;r+=1){const j=J(s,w,r);l[r]?(l[r].p(j,o),I(l[r],1)):(l[r]=K(j),l[r].c(),I(l[r],1),l[r].m(_,null))}for(te(),r=w.length;r<l.length;r+=1)R(r);U()}},i(s){if(!E){for(let o=0;o<w.length;o+=1)I(l[o]);E=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)z(l[o]);E=!1},d(s){s&&g(e),W(l,s)}}}function ie(n,e,a){let{data:t}=e;return n.$$set=i=>{"data"in i&&a(0,t=i.data)},[t]}class he extends N{constructor(e){super(),O(this,e,ie,ne,L,{data:0})}}export{he as component};