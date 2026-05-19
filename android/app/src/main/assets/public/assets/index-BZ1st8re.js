const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-DOgG8IyJ.js","./vendor-lucide-CeTbX5Qt.js","./vendor-react-oYV170lA.js","./web-DD6av5EV.js","./updateGameState-BMqH1Xqm.js"])))=>i.map(i=>d[i]);
import{r as Ep,g as Ip,R as ds,a as O,b as qd,C as ms,P as Yi,c as Et,A as Kd,S as Na,d as dc,e as _o,W as si,f as Gd,h as ys,T as hc,V as Tp,i as Ap,Z as Sp,j as Jd,k as Fs,U as Yl,I as Ra,l as Yd,L as Np,m as Qd,n as fc,B as Rp,o as Ql,p as Cp,q as Pp,s as jp,t as vo,M as Dp,u as Op,v as mc,F as Vp,D as Lp,w as Mp,x as pc,y as ko,z as Xd,X as Bn,E as Ca,G as Xl,H as Zl,J as eu,K as Up,N as Ui,O as tu,Q as Fp,Y as zp,_ as $p,$ as Bp,a0 as Hp,a1 as Wp,a2 as qp,a3 as Kp,a4 as Gp}from"./vendor-lucide-CeTbX5Qt.js";import{r as Jp}from"./vendor-react-oYV170lA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var oa={exports:{}},br={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function Yp(){if(nu)return br;nu=1;var n=Ep(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(l,d,h){var m,p={},v=null,T=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(T=d.ref);for(m in d)s.call(d,m)&&!i.hasOwnProperty(m)&&(p[m]=d[m]);if(l&&l.defaultProps)for(m in d=l.defaultProps,d)p[m]===void 0&&(p[m]=d[m]);return{$$typeof:e,type:l,key:v,ref:T,props:p,_owner:r.current}}return br.Fragment=t,br.jsx=c,br.jsxs=c,br}var su;function Qp(){return su||(su=1,oa.exports=Yp()),oa.exports}var a=Qp(),Ti={},ru;function Xp(){if(ru)return Ti;ru=1;var n=Jp();return Ti.createRoot=n.createRoot,Ti.hydrateRoot=n.hydrateRoot,Ti}var Zp=Xp();const eg=Ip(Zp),tg="modulepreload",ng=function(n,e){return new URL(n,e).href},iu={},Ut=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));r=c(t.map(m=>{if(m=ng(m,s),m in iu)return;iu[m]=!0;const p=m.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(!!s)for(let j=l.length-1;j>=0;j--){const A=l[j];if(A.href===m&&(!p||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${v}`))return;const S=document.createElement("link");if(S.rel=p?"stylesheet":tg,p||(S.as="script"),S.crossOrigin="",S.href=m,h&&S.setAttribute("nonce",h),document.head.appendChild(S),p)return new Promise((j,A)=>{S.addEventListener("load",j),S.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const sg=n=>{const e=new Map;e.set("web",{name:"web"});const t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},s=(i,c)=>{t.platforms.set(i,c)},r=i=>{t.platforms.has(i)&&(t.currentPlatform=t.platforms.get(i))};return t.addPlatform=s,t.setPlatform=r,t},rg=n=>n.CapacitorPlatforms=sg(n),Zd=rg(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});Zd.addPlatform;Zd.setPlatform;var zs;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(zs||(zs={}));class aa extends Error{constructor(e,t,s){super(e),this.message=e,this.code=t,this.data=s}}const ig=n=>{var e,t;return n!=null&&n.androidBridge?"android":!((t=(e=n==null?void 0:n.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},og=n=>{var e,t,s,r,i;const c=n.CapacitorCustomPlatform||null,l=n.Capacitor||{},d=l.Plugins=l.Plugins||{},h=n.CapacitorPlatforms,m=()=>c!==null?c.name:ig(n),p=((e=h==null?void 0:h.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||m,v=()=>p()!=="web",T=((t=h==null?void 0:h.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||v,S=w=>{const _=D.get(w);return!!(_!=null&&_.platforms.has(p())||B(w))},j=((s=h==null?void 0:h.currentPlatform)===null||s===void 0?void 0:s.isPluginAvailable)||S,A=w=>{var _;return(_=l.PluginHeaders)===null||_===void 0?void 0:_.find(y=>y.name===w)},B=((r=h==null?void 0:h.currentPlatform)===null||r===void 0?void 0:r.getPluginHeader)||A,R=w=>n.console.error(w),L=(w,_,y)=>Promise.reject(`${y} does not have an implementation of "${_}".`),D=new Map,W=(w,_={})=>{const y=D.get(w);if(y)return console.warn(`Capacitor plugin "${w}" already registered. Cannot register plugins twice.`),y.proxy;const x=p(),k=B(w);let E;const b=async()=>(!E&&x in _?E=typeof _[x]=="function"?E=await _[x]():E=_[x]:c!==null&&!E&&"web"in _&&(E=typeof _.web=="function"?E=await _.web():E=_.web),E),se=(xe,we)=>{var Y,de;if(k){const et=k==null?void 0:k.methods.find(Ke=>we===Ke.name);if(et)return et.rtype==="promise"?Ke=>l.nativePromise(w,we.toString(),Ke):(Ke,Ve)=>l.nativeCallback(w,we.toString(),Ke,Ve);if(xe)return(Y=xe[we])===null||Y===void 0?void 0:Y.bind(xe)}else{if(xe)return(de=xe[we])===null||de===void 0?void 0:de.bind(xe);throw new aa(`"${w}" plugin is not implemented on ${x}`,zs.Unimplemented)}},_e=xe=>{let we;const Y=(...de)=>{const et=b().then(Ke=>{const Ve=se(Ke,xe);if(Ve){const mt=Ve(...de);return we=mt==null?void 0:mt.remove,mt}else throw new aa(`"${w}.${xe}()" is not implemented on ${x}`,zs.Unimplemented)});return xe==="addListener"&&(et.remove=async()=>we()),et};return Y.toString=()=>`${xe.toString()}() { [capacitor code] }`,Object.defineProperty(Y,"name",{value:xe,writable:!1,configurable:!1}),Y},ct=_e("addListener"),vt=_e("removeListener"),ie=(xe,we)=>{const Y=ct({eventName:xe},we),de=async()=>{const Ke=await Y;vt({eventName:xe,callbackId:Ke},we)},et=new Promise(Ke=>Y.then(()=>Ke({remove:de})));return et.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await de()},et},ve=new Proxy({},{get(xe,we){switch(we){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?ie:ct;case"removeListener":return vt;default:return _e(we)}}});return d[w]=ve,D.set(w,{name:w,proxy:ve,platforms:new Set([...Object.keys(_),...k?[x]:[]])}),ve},K=((i=h==null?void 0:h.currentPlatform)===null||i===void 0?void 0:i.registerPlugin)||W;return l.convertFileSrc||(l.convertFileSrc=w=>w),l.getPlatform=p,l.handleError=R,l.isNativePlatform=T,l.isPluginAvailable=j,l.pluginMethodNoop=L,l.registerPlugin=K,l.Exception=aa,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},ag=n=>n.Capacitor=og(n),Ur=ag(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),xo=Ur.registerPlugin;Ur.Plugins;class eh{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(t);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(e);const c=async()=>this.removeListener(e,t);return Promise.resolve({remove:c})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,s){const r=this.listeners[e];if(!r){if(s){let i=this.retainedEventArguments[e];i||(i=[]),i.push(t),this.retainedEventArguments[e]=i}return}r.forEach(i=>i(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:s=>{this.notifyListeners(t,s)}}}unimplemented(e="not implemented"){return new Ur.Exception(e,zs.Unimplemented)}unavailable(e="not available"){return new Ur.Exception(e,zs.Unavailable)}async removeListener(e,t){const s=this.listeners[e];if(!s)return;const r=s.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(s=>{this.notifyListeners(e,s)}))}}const ou=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),au=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class cg extends eh{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(s=>{if(s.length<=0)return;let[r,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=au(r).trim(),i=au(i).trim(),t[r]=i}),t}async setCookie(e){try{const t=ou(e.key),s=ou(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),c=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${s||""}${r}; path=${i}; ${c};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}xo("CapacitorCookies",{web:()=>new cg});const lg=async n=>new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{const r=s.result;e(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>t(r),s.readAsDataURL(n)}),ug=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(r=>r.toLocaleLowerCase()).reduce((r,i,c)=>(r[i]=n[e[c]],r),{})},dg=(n,e=!0)=>n?Object.entries(n).reduce((s,r)=>{const[i,c]=r;let l,d;return Array.isArray(c)?(d="",c.forEach(h=>{l=e?encodeURIComponent(h):h,d+=`${i}=${l}&`}),d.slice(0,-1)):(l=e?encodeURIComponent(c):c,d=`${i}=${l}`),`${s}&${d}`},"").substr(1):null,hg=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),r=ug(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(r.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[c,l]of Object.entries(n.data||{}))i.set(c,l);t.body=i.toString()}else if(r.includes("multipart/form-data")||n.data instanceof FormData){const i=new FormData;if(n.data instanceof FormData)n.data.forEach((l,d)=>{i.append(d,l)});else for(const l of Object.keys(n.data))i.append(l,n.data[l]);t.body=i;const c=new Headers(t.headers);c.delete("content-type"),t.headers=c}else(r.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class fg extends eh{async request(e){const t=hg(e,e.webFetchExtra),s=dg(e.params,e.shouldEncodeUrlParams),r=s?`${e.url}?${s}`:e.url,i=await fetch(r,t),c=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?e:{};c.includes("application/json")&&(l="json");let d,h;switch(l){case"arraybuffer":case"blob":h=await i.blob(),d=await lg(h);break;case"json":d=await i.json();break;case"document":case"text":default:d=await i.text()}const m={};return i.headers.forEach((p,v)=>{m[v]=p}),{data:d,headers:m,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}xo("CapacitorHttp",{web:()=>new fg});var Pa;(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE"})(Pa||(Pa={}));var cu;(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(cu||(cu={}));const mg=xo("Filesystem",{web:()=>Ut(()=>import("./web-DOgG8IyJ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>new n.FilesystemWeb)}),lu=xo("Share",{web:()=>Ut(()=>import("./web-DD6av5EV.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(n=>new n.ShareWeb)});function pg({tournament:n,totals:e,highlightPlayer:t,pendingPreview:s=0,target:r,displayMode:i="delta",onToggleMode:c,hideModeToolbar:l=!1,hideModeToggle:d=!1,compactObserver:h=!1}){if(!n||!Array.isArray(n.players))return null;const{players:m,rounds:p}=n,v=O.useRef(null);O.useEffect(()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)},[p.length]);const T=Math.max(p.length,(n.currentRound??0)+1),S=O.useMemo(()=>{const j=Array.from({length:T},()=>new Array(m.length).fill(null)),A=new Array(m.length).fill(0),B=new Array(m.length).fill(!1);for(let R=0;R<p.length;R++)for(let L=0;L<m.length;L++){const D=p[R][L];typeof D=="number"?(A[L]+=D,B[L]=!0,j[R][L]=A[L]):D==="dash"?j[R][L]=A[L]:j[R][L]=null}return j},[p,T,m.length]);return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[c&&!l&&a.jsxs("div",{className:`flex items-center justify-between border-b border-amber-900/30 bg-stone-950/60 ${h?"px-3 py-1":"px-3 py-1.5"}`,children:[a.jsx("div",{className:`ks-display ks-gold text-center flex-1 ${h?"text-xs":"text-sm"}`,children:"POZOROVATEĽ · ŽIVÝ PREHĽAD SKÓRE"}),!d&&a.jsxs("button",{onClick:c,className:"ks-press ks-mono ks-gold flex items-center gap-1 rounded-sm hover:bg-amber-900/20 text-[10px] px-2 py-0.5",children:[a.jsx(qd,{size:10}),i==="delta"?"Σ":"Δ"]})]}),a.jsx("div",{className:"overflow-x-auto ks-live-table-wrap",children:a.jsxs("table",{className:"border-collapse ks-live-table",children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:36}}),m.map((j,A)=>a.jsx("col",{style:{width:`${100/(m.length+.15)}%`,minWidth:`${Math.max(72,300/Math.max(m.length,1))}px`}},A))]}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-amber-900/40",children:[a.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-3 px-2 text-center sticky left-0 backdrop-blur",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),m.map((j,A)=>a.jsx("th",{className:`ks-display py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis ${A===t?"ks-gold":"ks-cream"}`,children:j},A))]})}),a.jsx("tbody",{ref:v,children:Array.from({length:T}).map((j,A)=>a.jsxs("tr",{className:"border-b border-amber-900/15 ks-live-row",children:[a.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:A+1}),m.map((B,R)=>{var w,_;const L=(w=p[A])==null?void 0:w[R],D=(_=S[A])==null?void 0:_[R],W=i==="cumulative"?D:L,K=R===t&&A===n.currentRound;return a.jsxs("td",{className:`text-center py-1.5 px-1 ks-display text-base align-middle ${K?"bg-amber-900/20":""}`,children:[L==="dash"&&i!=="cumulative"&&a.jsx("span",{className:"ks-muted",children:"—"}),typeof W=="number"&&a.jsx("span",{className:`font-medium ${W<0?"text-red-300":"ks-cream"}`,children:W.toLocaleString("sk-SK")}),W==null&&(K&&s>0?a.jsxs("span",{className:"ks-gold italic opacity-70",children:["+",s]}):null)]},R)})]},A))}),a.jsx("tfoot",{children:a.jsxs("tr",{className:"border-t-2 border-amber-700/50",children:[a.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"Σ"}),e.map((j,A)=>{const B=r&&j>=r;return a.jsx("td",{className:`text-center py-2 px-2 ks-display text-lg font-bold ${j<0?"text-red-300":B||A===t?"ks-gold":"ks-cream"}`,children:j.toLocaleString("sk-SK")},A)})]})})]})})]})}const ja=ds.memo(pg),Yt=["#d4b86a","#e07070","#7eb8e0","#7ede9a","#e0a870","#b07ee0","#e0d870","#70e0d4"];function gg({tournament:n,totals:e,target:t}){if(!n||!Array.isArray(n.players))return null;const{players:s,rounds:r}=n,[i,c]=O.useState(null),l=O.useMemo(()=>{const x=[],k=s.map(()=>0);return x.push({kolo:0,...s.reduce((E,b,se)=>({...E,[`p${se}`]:0}),{})}),r.forEach((E,b)=>{E.forEach((_e,ct)=>{typeof _e=="number"&&(k[ct]+=_e)});const se={kolo:b+1};s.forEach((_e,ct)=>{se[`p${ct}`]=k[ct]}),x.push(se)}),x},[s,r]),d=s.map((x,k)=>({name:x,total:e[k],i:k,color:Yt[k%Yt.length]})).sort((x,k)=>k.total-x.total),h=600,m=260,p=48,v=16,T=20,S=28,j=h-p-v,A=m-T-S,B=Math.max(t,...e)+200,R=Math.min(0,...e)-100,L=B-R,D=l.length-1||1,W=x=>p+x/D*j,K=x=>T+A-(x-R)/L*A,w=O.useMemo(()=>{const x=Math.pow(10,Math.floor(Math.log10(L/4))),k=[1,2,5,10].map(b=>b*x).find(b=>L/b<=8)||x,E=[];for(let b=Math.ceil(R/k)*k;b<=B;b+=k)E.push(b);return E},[R,B,L]),_=x=>x>=1e3?`${(x/1e3).toFixed(x%1e3===0?0:1)}k`:x<-999?`-${(Math.abs(x)/1e3).toFixed(1)}k`:String(x),y=O.useCallback(x=>{const k=x.currentTarget.getBoundingClientRect(),E=(x.clientX-k.left)*(h/k.width)-p,b=Math.round(E/j*D);b>=0&&b<l.length&&c({idx:b})},[l,D]);return a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:d.map((x,k)=>a.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-sm border border-amber-900/25 bg-stone-950/30",children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:x.color}}),a.jsxs("div",{className:"ks-display ks-cream text-sm font-semibold truncate flex-1",children:[k===0&&x.total>0&&a.jsx(ms,{size:11,className:"ks-gold inline mr-1 -mt-0.5"}),x.name]}),a.jsx("div",{className:`ks-display text-sm font-bold ${x.total<0?"ks-text-accent":"ks-gold"}`,children:x.total.toLocaleString("sk-SK")})]},x.i))}),a.jsxs("div",{className:"ks-card rounded-sm p-3",children:[a.jsxs("svg",{viewBox:`0 0 ${h} ${m}`,style:{width:"100%",height:280,overflow:"visible"},onMouseMove:y,onMouseLeave:()=>c(null),children:[w.map(x=>a.jsxs("g",{children:[a.jsx("line",{x1:p,x2:p+j,y1:K(x),y2:K(x),stroke:"rgba(201,168,92,0.12)",strokeDasharray:"2 4"}),a.jsx("text",{x:p-4,y:K(x)+4,textAnchor:"end",fontSize:9,fill:"#a89679",children:_(x)})]},x)),l.map((x,k)=>a.jsx("text",{x:W(k),y:T+A+14,textAnchor:"middle",fontSize:9,fill:"#a89679",children:x.kolo},k)),a.jsx("text",{x:p+j/2,y:m-2,textAnchor:"middle",fontSize:9,fill:"#a89679",children:"Kolo"}),R<0&&B>0&&a.jsx("line",{x1:p,x2:p+j,y1:K(0),y2:K(0),stroke:"rgba(201,168,92,0.2)"}),a.jsx("line",{x1:p,x2:p+j,y1:K(t),y2:K(t),stroke:"#d4b86a",strokeDasharray:"4 4",strokeWidth:1.5}),a.jsxs("text",{x:p+j-4,y:K(t)-5,textAnchor:"end",fontSize:9,fill:"#d4b86a",children:["Cieľ ",t.toLocaleString("sk-SK")]}),s.map((x,k)=>{const E=l.map((b,se)=>`${W(se)},${K(b[`p${k}`])}`).join(" ");return a.jsxs("g",{children:[a.jsx("polyline",{points:E,fill:"none",stroke:Yt[k%Yt.length],strokeWidth:2,strokeLinejoin:"round"}),l.map((b,se)=>a.jsx("circle",{cx:W(se),cy:K(b[`p${k}`]),r:2.5,fill:Yt[k%Yt.length]},se))]},k)}),i&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:W(i.idx),x2:W(i.idx),y1:T,y2:T+A,stroke:"rgba(212,184,106,0.3)",strokeWidth:1}),s.map((x,k)=>a.jsx("circle",{cx:W(i.idx),cy:K(l[i.idx][`p${k}`]),r:5,fill:Yt[k%Yt.length],stroke:"#0e0c0a",strokeWidth:2},k))]})]}),i&&l[i.idx]&&(()=>{const x=l[i.idx],k=s.map((E,b)=>({name:E,val:x[`p${b}`],color:Yt[b%Yt.length]})).sort((E,b)=>b.val-E.val);return a.jsxs("div",{className:"ks-card rounded-sm p-2.5 mt-2",style:{background:"rgba(20,16,12,0.97)",maxWidth:200},children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:["KOLO ",x.kolo]}),a.jsx("div",{className:"space-y-0.5",children:k.map((E,b)=>a.jsxs("div",{className:"flex items-center gap-2 text-xs ks-body",children:[a.jsx("span",{style:{width:10,height:2,background:E.color,display:"inline-block"}}),a.jsx("span",{className:"ks-cream flex-1",children:E.name}),a.jsx("span",{className:"ks-display ks-gold font-semibold",children:E.val.toLocaleString("sk-SK")})]},b))})]})})()]}),l.length<=1&&a.jsx("div",{className:"ks-muted text-xs italic text-center",children:"Graf sa naplní po prvom kole."})]})}function yg({children:n,onClick:e,disabled:t,className:s="",icon:r,variant:i="gold"}){const c="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return a.jsxs("button",{onClick:e,disabled:t,className:`${c} ${l[i]} ${s}`,children:[r&&a.jsx(r,{size:18,strokeWidth:2}),n]})}function Da(){return a.jsxs("div",{className:"flex items-center justify-center gap-3 my-3",children:[a.jsx("div",{className:"ks-divider flex-1"}),a.jsx("div",{className:"ks-gold text-xs",children:"✦"}),a.jsx("div",{className:"ks-divider flex-1"})]})}const uu=n=>{let e;const t=new Set,s=(h,m)=>{const p=typeof h=="function"?h(e):h;if(!Object.is(p,e)){const v=e;e=m??(typeof p!="object"||p===null)?p:Object.assign({},e,p),t.forEach(T=>T(e,v))}},r=()=>e,l={setState:s,getState:r,getInitialState:()=>d,subscribe:h=>(t.add(h),()=>t.delete(h))},d=e=n(s,r,l);return l},bg=(n=>n?uu(n):uu),_g=n=>n;function vg(n,e=_g){const t=ds.useSyncExternalStore(n.subscribe,ds.useCallback(()=>e(n.getState()),[n,e]),ds.useCallback(()=>e(n.getInitialState()),[n,e]));return ds.useDebugValue(t),t}const kg=n=>{const e=bg(n),t=s=>vg(e,s);return Object.assign(t,e),t},xg=(n=>kg);function wg(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var i;const c=d=>d===null?null:JSON.parse(d,void 0),l=(i=t.getItem(r))!=null?i:null;return l instanceof Promise?l.then(c):c(l)},setItem:(r,i)=>t.setItem(r,JSON.stringify(i,void 0)),removeItem:r=>t.removeItem(r)}}const Oa=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(s){return Oa(s)(t)},catch(s){return this}}}catch(t){return{then(s){return this},catch(s){return Oa(s)(t)}}}},Eg=(n,e)=>(t,s,r)=>{let i={storage:wg(()=>window.localStorage),partialize:A=>A,version:0,merge:(A,B)=>({...B,...A}),...e},c=!1,l=0;const d=new Set,h=new Set;let m=i.storage;if(!m)return n((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...A)},s,r);const p=()=>{const A=i.partialize({...s()});return m.setItem(i.name,{state:A,version:i.version})},v=r.setState;r.setState=(A,B)=>(v(A,B),p());const T=n((...A)=>(t(...A),p()),s,r);r.getInitialState=()=>T;let S;const j=()=>{var A,B;if(!m)return;const R=++l;c=!1,d.forEach(D=>{var W;return D((W=s())!=null?W:T)});const L=((B=i.onRehydrateStorage)==null?void 0:B.call(i,(A=s())!=null?A:T))||void 0;return Oa(m.getItem.bind(m))(i.name).then(D=>{if(D)if(typeof D.version=="number"&&D.version!==i.version){if(i.migrate){const W=i.migrate(D.state,D.version);return W instanceof Promise?W.then(K=>[!0,K]):[!0,W]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,D.state];return[!1,void 0]}).then(D=>{var W;if(R!==l)return;const[K,w]=D;if(S=i.merge(w,(W=s())!=null?W:T),t(S,!0),K)return p()}).then(()=>{R===l&&(L==null||L(s(),void 0),S=s(),c=!0,h.forEach(D=>D(S)))}).catch(D=>{R===l&&(L==null||L(void 0,D))})};return r.persist={setOptions:A=>{i={...i,...A},A.storage&&(m=A.storage)},clearStorage:()=>{m==null||m.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>j(),hasHydrated:()=>c,onHydrate:A=>(d.add(A),()=>{d.delete(A)}),onFinishHydration:A=>(h.add(A),()=>{h.delete(A)})},i.skipHydration||j(),S||T},Ig=Eg,Fr=xg()(Ig(n=>({roomId:null,uid:null,roomState:null,status:"offline",setRoomId:e=>n({roomId:e}),setUid:e=>n({uid:e}),setRoomState:e=>n({roomState:e,status:"connected"}),setStatus:e=>n({status:e}),reset:()=>n({roomId:null,uid:null,roomState:null,status:"offline"})}),{name:"ks-online",partialize:n=>({roomId:n.roomId,uid:n.uid})}));function Tg({onClick:n}){const e=Fr(c=>c.status),t={connected:{Icon:si,color:"text-green-400",label:"Online"},error:{Icon:_o,color:"text-red-400",label:"Chyba"}},{Icon:s,color:r,label:i}=t[e]||{Icon:Gd,color:"ks-muted",label:"Offline"};return a.jsxs("button",{onClick:n,className:"inline-flex items-center gap-1.5 border ks-border-sub rounded-sm px-2 py-1 mt-2 ks-press",children:[a.jsx(s,{size:12,className:r}),a.jsx("span",{className:`ks-mono text-xs ${r}`,children:i})]})}function Ag({onNew:n,onArchive:e,onrules:t,onSettings:s,onResume:r,onOnline:i,active:c,tournamentCount:l}){return a.jsxs("div",{className:"min-h-screen flex flex-col",children:[a.jsxs("div",{className:"px-6 pt-[max(14px,env(safe-area-inset-top))] pb-4 text-center ks-fade",children:[a.jsx("div",{className:"ks-gold text-xs ks-mono mb-2",children:"★ ZALOŽENÉ 2026 by Marcel ★"}),a.jsxs("h1",{className:"ks-display ks-gold text-5xl sm:text-6xl font-bold leading-none",children:["Kocky",a.jsx("br",{}),a.jsx("span",{className:"italic font-medium",children:"sveta"})]}),a.jsx(Da,{}),a.jsx(Tg,{onClick:i})]}),a.jsxs("div",{className:"flex-1 px-5 pb-8 max-w-md w-full mx-auto space-y-3 -mt-1",children:[r&&a.jsxs("button",{onClick:r,className:"ks-card ks-pulse w-full p-4 rounded-sm flex items-center gap-3 ks-press border-l-4",style:{borderLeftColor:"#d4b86a"},children:[a.jsx(Yi,{className:"ks-gold",size:24}),a.jsxs("div",{className:"text-left flex-1",children:[a.jsx("div",{className:"ks-mono ks-gold text-sm",children:"POKRAČOVAŤ V TURNAJI"}),a.jsxs("div",{className:"ks-body ks-cream text-sm opacity-80",children:[c.players.length," hráčov · do ",(c.targetScore||1e4).toLocaleString("sk-SK")," · kolo ",c.currentRound+1]})]}),a.jsx(Et,{className:"ks-gold",size:20})]}),a.jsx(Ai,{icon:Yi,title:"Nový turnaj",subtitle:c?"Najprv ukonči prebiehajúci turnaj":"Začať novú hru až pre šesť hráčov",onClick:n,primary:!0,disabled:!!c}),a.jsx(Ai,{icon:Kd,title:"Archív turnajov",subtitle:`${l||0} uložených turnajov`,onClick:e}),a.jsx(Ai,{icon:Na,title:"Pravidlá hry",subtitle:"Bodovanie a kombinácie kociek",onClick:t}),a.jsx(Ai,{icon:dc,title:"Nastavenia",subtitle:"Pravidlá, export, editácia archívu",onClick:s})]}),a.jsxs("div",{className:"text-center ks-muted text-xs pb-6 ks-mono",children:[a.jsx(Da,{}),"KOCKY · SVETA · KOCKY"]})]})}function Ai({icon:n,title:e,subtitle:t,onClick:s,primary:r,disabled:i}){return a.jsxs("button",{onClick:s,disabled:i,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${r?"border-amber-700/40":""} ${i?"opacity-40 cursor-not-allowed":""}`,children:[a.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center ${r?"ks-gold-bg":"border ks-border-sub"}`,children:a.jsx(n,{size:22,className:r?"":"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-sm",children:t})]}),a.jsx(Et,{className:"ks-muted",size:20})]})}function th({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(ys,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}const Sg=[{value:5e3,label:"Krátka hra",sub:"do 5 000 bodov"},{value:1e4,label:"Klasická hra",sub:"do 10 000 bodov"}];function Ng({onBack:n,onStart:e}){const[t,s]=O.useState(3),[r,i]=O.useState(1e4),[c,l]=O.useState(["","","","","",""]),d=(m,p)=>l(v=>v.map((T,S)=>S===m?p:T));function h(){const m=c.slice(0,t).map((p,v)=>p.trim()||`Hráč ${v+1}`);e(m,r)}return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(th,{title:"Nový turnaj",onBack:n}),a.jsxs("div",{className:"p-5 max-w-md mx-auto space-y-6",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 flex items-center gap-2",children:[a.jsx(hc,{size:12})," CIEĽ HRY"]}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:Sg.map(m=>a.jsxs("button",{onClick:()=>i(m.value),className:`ks-press py-3 px-3 rounded-sm text-left ${r===m.value?"ks-gold-bg":"ks-card ks-cream"}`,children:[a.jsx("div",{className:"ks-display text-2xl font-semibold leading-tight",children:m.value.toLocaleString("sk-SK")}),a.jsx("div",{className:`text-xs ${r===m.value?"opacity-80":"ks-muted"}`,children:m.label})]},m.value))})]}),a.jsx(Da,{}),a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"POČET HRÁČOV"}),a.jsx("div",{className:"grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(m=>a.jsx("button",{onClick:()=>s(m),className:`ks-press py-3 rounded-sm ks-display text-2xl font-semibold ${t===m?"ks-gold-bg":"ks-card ks-cream"}`,children:m},m))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3",children:"MENÁ HRÁČOV"}),a.jsx("div",{className:"space-y-2",children:Array.from({length:t}).map((m,p)=>a.jsxs("div",{className:"ks-card flex items-center gap-3 p-2 rounded-sm",children:[a.jsx("div",{className:"w-9 h-9 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-semibold",children:p+1}),a.jsx("input",{value:c[p],onChange:v=>d(p,v.target.value),placeholder:`Hráč ${p+1}`,maxLength:18,className:"flex-1 bg-transparent ks-cream ks-body text-lg outline-none placeholder:text-stone-600"})]},p))})]}),a.jsx(yg,{onClick:h,icon:Yi,className:"w-full text-lg",children:"Začať turnaj"})]})]})}const du=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cpath d='M80 20 L93 45 L120 38 L122 65 L148 74 L136 98 L152 118 L126 122 L122 148 L95 138 L80 158 L65 138 L38 148 L34 122 L8 118 L24 98 L12 74 L38 65 L40 38 L67 45 Z' fill='rgba(110%2C55%2C170%2C0.28)'/%3E%3Cpath d='M87 48 L65 87 L82 87 L72 113 L103 72 L86 72 Z' fill='rgba(185%2C135%2C255%2C0.48)'/%3E%3C/svg%3E") repeat`,hu=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Ccircle cx='80' cy='66' r='48' fill='rgba(205%2C232%2C255%2C0.30)'/%3E%3Ccircle cx='63' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Ccircle cx='97' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Cline x1='50' y1='48' x2='72' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cline x1='110' y1='48' x2='88' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M75 82 L80 74 L85 82Z' fill='rgba(10%2C52%2C130%2C0.45)'/%3E%3Crect x='52' y='102' width='56' height='20' rx='6' fill='rgba(205%2C232%2C255%2C0.22)'/%3E%3Crect x='59' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='75' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='91' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3C/svg%3E") repeat`,Rg=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg stroke='rgba(100%2C62%2C12%2C0.28)' fill='none' stroke-width='2.5'%3E%3Cpolygon points='100 18 145 95 55 95'/%3E%3Ccircle cx='100' cy='68' r='27'/%3E%3Cline x1='100' y1='18' x2='100' y2='95'/%3E%3C/g%3E%3Cpath d='M164 30 L153 54 L163 54 L150 80' stroke='rgba(100%2C62%2C12%2C0.22)' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M35 152 L38 141 L41 152 L52 155 L41 158 L38 169 L35 158 L24 155Z' fill='rgba(100%2C62%2C12%2C0.20)'/%3E%3Ccircle cx='172' cy='164' r='3.5' fill='rgba(100%2C62%2C12%2C0.16)'/%3E%3Ccircle cx='20' cy='128' r='2.5' fill='rgba(100%2C62%2C12%2C0.13)'/%3E%3C/svg%3E") repeat`,Cg={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},caveatbrush:{id:"caveatbrush",name:"Caveat Brush",stack:"'Caveat Brush', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}},Va={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}},brawlstars:{id:"brawlstars",name:"Brawl Stars",bg:`${du}, radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)`,vars:{"--ks-bg-main":`${du}, #1a0830`,"--ks-bg-soft":"rgba(52,18,80,0.92)","--ks-bg-soft-2":"rgba(28,10,45,0.96)","--ks-card-sub":"rgba(40,14,62,0.74)","--ks-border":"rgba(200,80,220,0.28)","--ks-border-strong":"rgba(230,120,255,0.62)","--ks-text":"#f8e8ff","--ks-text-muted":"#c0a0d8","--ks-accent":"#e070d0","--ks-accent-2":"#8030b0","--ks-button-text":"#280a3a","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(20,6,34,0.97)","--ks-sticky-bg2":"rgba(14,4,24,0.98)"}},brawlblue:{id:"brawlblue",name:"Brawl Blue",bg:`${hu}, radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)`,vars:{"--ks-bg-main":`${hu}, #061e54`,"--ks-bg-soft":"rgba(10,48,110,0.92)","--ks-bg-soft-2":"rgba(6,26,65,0.96)","--ks-card-sub":"rgba(8,36,88,0.74)","--ks-border":"rgba(40,180,240,0.28)","--ks-border-strong":"rgba(80,210,255,0.62)","--ks-text":"#e8f4ff","--ks-text-muted":"#90b8d8","--ks-accent":"#40d8f0","--ks-accent-2":"#2878c8","--ks-button-text":"#030e28","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(4,14,44,0.97)","--ks-sticky-bg2":"rgba(3,10,32,0.98)"}},harrypotter:{id:"harrypotter",name:"Harry Potter",bg:`${Rg}, radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg, #f8ecd4 0%, #efe0b8 40%, #e8d6a4 70%, #f2e8c8 100%)`,vars:{"--ks-bg-main":"#f0e2c0","--ks-bg-soft":"rgba(252,244,226,0.97)","--ks-bg-soft-2":"rgba(248,238,215,1.0)","--ks-card-sub":"rgba(244,232,206,0.98)","--ks-border":"rgba(140,88,18,0.30)","--ks-border-strong":"rgba(160,100,20,0.62)","--ks-text":"#271608","--ks-text-muted":"#7a5030","--ks-accent":"#8b5814","--ks-accent-2":"#740001","--ks-button-text":"#f8f0de","--ks-danger":"#aa2020","--ks-sticky-bg":"rgba(244,232,202,0.97)","--ks-sticky-bg2":"rgba(238,224,192,0.98)"}}};function nh({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(ys,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function Pg({selectedSkin:n,onSkinChange:e}){const t=Object.values(Va);return a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:t.map(s=>{const r=s.id===n,i=s.vars["--ks-accent"],c=s.vars["--ks-accent-2"],l=s.vars["--ks-bg-main"],d=s.vars["--ks-bg-soft"],h=s.vars["--ks-text"];return a.jsxs("button",{onClick:()=>e(s.id),className:"ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-1 hover:brightness-110 relative",style:{minHeight:"120px",background:l,borderColor:r?i:"rgba(255,255,255,0.12)"},children:[r&&a.jsx("div",{className:"absolute top-3 right-3 ks-mono font-bold text-[13px] tracking-wider",style:{color:i},children:"✦ AKTÍVNY"}),a.jsx("div",{className:"flex items-start w-full",children:a.jsx("div",{className:"ks-display text-base font-semibold leading-tight",style:{color:h},children:s.name})}),a.jsxs("div",{className:"mt-auto w-full grid items-end",style:{gridTemplateColumns:"1fr auto",columnGap:"12px",rowGap:"4px"},children:[a.jsx("div",{className:"rounded-[4px] shrink-0",style:{width:38,height:38,background:i,gridColumn:"2",gridRow:"1 / 3"}}),a.jsxs("div",{className:"flex items-center gap-1.5 w-full",children:[a.jsx("div",{className:"rounded-[3px] border border-white/10 flex-1",style:{height:15,background:d}}),a.jsx("div",{className:"rounded-[3px] flex-1",style:{height:15,background:c}})]})]})]},s.id)})})}function jg({selectedFont:n,onFontChange:e}){const t=Object.values(Cg);return a.jsx("div",{className:"grid grid-cols-2 gap-3",children:t.map(s=>{const r=s.id===n;return a.jsxs("button",{onClick:()=>e(s.id),className:`ks-press rounded-sm p-3 border-2 transition-all flex flex-col items-center text-center ks-card ${r?"ks-card-prom ks-border-accent":"ks-border-sub hover:shadow-md"}`,children:[r&&a.jsx("div",{className:"ks-mono ks-gold text-[9px] tracking-[0.18em] mb-1",children:"✦ AKTÍVNE"}),a.jsx("div",{className:"ks-cream text-base font-semibold leading-tight",style:{fontFamily:s.stack},children:s.name}),a.jsx("div",{className:"ks-muted text-xs mt-1.5",style:{fontFamily:s.stack},children:"Ukážka · Abc 123"})]},s.id)})})}function Dg({onBack:n,selectedMode:e,onChangeMode:t,selectedSkin:s}){const r=[{id:"basic",title:"Klasický",desc:"Tabuľka hore a zapisovanie bodov pod ňou."},{id:"observer",title:"Pozorovateľ",desc:"Veľký živý prehľad skóre pre obrazovku alebo TV."},{id:"recorder",title:"Zapisovateľ",desc:"Jednoduché veľké ovládanie pre rýchly zápis bodov."}],i=Va[s]||Va.classic;return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",style:{background:i.bg},children:[a.jsx(nh,{title:"Zobrazenie hry",onBack:n}),a.jsx("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:r.map(c=>a.jsx("button",{onClick:()=>t(c.id),className:`ks-card w-full p-4 rounded-sm text-left ks-press border ${e===c.id?"border-amber-500/70 bg-amber-900/10":"ks-border-sub"}`,children:a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:c.title}),a.jsx("div",{className:"ks-muted text-sm mt-1",children:c.desc})]}),a.jsxs("div",{className:"shrink-0 w-[62px]",children:[a.jsx("div",{className:"h-[92px] rounded-sm border border-amber-900/25 overflow-hidden",style:{background:i.bg},children:c.id==="basic"?a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"18px 28px 1fr",gap:"4px",padding:"5px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(212,184,106,0.24)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}):c.id==="observer"?a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 1fr",gap:"4px",padding:"5px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.2)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"8px 1fr 1fr 1fr",gap:"3px"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.08)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.14)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]})]})]}):a.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"14px 22px 1fr 12px",gap:"4px",padding:"5px"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 18px",gap:"3px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.05)"}})]}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.18)",border:"1px solid rgba(212,184,106,0.22)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateRows:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.04)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(212,184,106,0.78)"}})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"},children:[a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}}),a.jsx("div",{style:{borderRadius:"2px",background:"rgba(255,255,255,0.06)"}})]})]})}),e===c.id?a.jsx("div",{className:"ks-gold ks-mono text-[10px] text-right mt-1",children:"AKTÍVNE"}):a.jsx("div",{className:"h-[14px] mt-1"})]})]})},c.id))})]})}function fu({enabled:n,onToggle:e,labelOn:t,labelOff:s,iconOn:r,iconOff:i}){return a.jsxs("button",{onClick:e,className:`ks-press flex items-center gap-3 w-full px-4 py-3 rounded-sm border transition-colors ${n?"ks-border-accent border bg-amber-950/20":"ks-border-sub border"}`,children:[a.jsx("div",{className:`flex-shrink-0 ${n?"ks-gold":"ks-muted"}`,children:n?a.jsx(r,{size:20}):a.jsx(i,{size:20})}),a.jsx("div",{className:"flex-1 text-left",children:a.jsx("div",{className:`text-sm font-semibold ${n?"ks-cream":"ks-muted"}`,children:n?t:s})}),a.jsx("div",{className:`w-10 h-5 rounded-full transition-colors flex-shrink-0 ${n?"ks-gold-bg":"bg-stone-700"}`,children:a.jsx("div",{className:`w-5 h-5 rounded-full bg-white shadow transition-transform ${n?"translate-x-5":"translate-x-0"}`})})]})}function Og({onBack:n,selectedSkin:e,onSkinChange:t,selectedFont:s,onFontChange:r,tournamentViewMode:i,onTournamentViewModeChange:c,onViewModes:l,soundsEnabled:d,onSoundsToggle:h,animationsEnabled:m,onAnimationsToggle:p}){return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(nh,{title:"Vizuál, Zvuky a Skiny",onBack:n}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-5",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"ZVUKOVÉ EFEKTY"}),a.jsx(fu,{enabled:d,onToggle:h,labelOn:"Zvuky zapnuté",labelOff:"Zvuky vypnuté",iconOn:Ap,iconOff:Tp}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"ANIMÁCIE"}),a.jsx(fu,{enabled:m,onToggle:p,labelOn:"Animácie zapnuté",labelOff:"Animácie vypnuté",iconOn:Jd,iconOff:Sp}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"SKINY"}),a.jsx(Pg,{selectedSkin:e,onSkinChange:t}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"PÍSMO"}),a.jsx(jg,{selectedFont:s,onFontChange:r})]})]})}const Vg=()=>{};var mu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Lg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],c=n[t++],l=n[t++],d=((r&7)<<18|(i&63)<<12|(c&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const i=n[t++],c=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|c&63)}}return e.join("")},rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],c=r+1<n.length,l=c?n[r+1]:0,d=r+2<n.length,h=d?n[r+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,T=h&63;d||(T=64,c||(v=64)),s.push(t[m],t[p],t[v],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Lg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||h==null||p==null)throw new Mg;const v=i<<2|l>>4;if(s.push(v),h!==64){const T=l<<4&240|h>>2;if(s.push(T),p!==64){const S=h<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ug=function(n){const e=sh(n);return rh.encodeByteArray(e,!0)},Qi=function(n){return Ug(n).replace(/\./g,"")},ih=function(n){try{return rh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=()=>Fg().__FIREBASE_DEFAULTS__,$g=()=>{if(typeof process>"u"||typeof mu>"u")return;const n=mu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ih(n[1]);return e&&JSON.parse(e)},wo=()=>{try{return Vg()||zg()||$g()||Bg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oh=n=>{var e,t;return(t=(e=wo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Hg=n=>{const e=oh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ah=()=>{var n;return(n=wo())==null?void 0:n.config},ch=n=>{var e;return(e=wo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Qi(JSON.stringify(t)),Qi(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function Gg(){var e;const n=(e=wo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xg(){const n=_t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zg(){return!Gg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ey(){try{return typeof indexedDB=="object"}catch{return!1}}function ty(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="FirebaseError";class Tn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ny,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],c=i?sy(i,s):"Error",l=`${this.serviceName}: ${c} (${r}).`;return new Tn(r,l,s)}}function sy(n,e){return n.replace(ry,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ry=/\{\$([^}]+)}/g;function iy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],c=e[r];if(pu(i)&&pu(c)){if(!bs(i,c))return!1}else if(i!==c)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function pu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Er(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function oy(n,e){const t=new ay(n,e);return t.subscribe.bind(t)}class ay{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cy(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=ca),r.error===void 0&&(r.error=ca),r.complete===void 0&&(r.complete=ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ca(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lh(n){return(await fetch(n,{credentials:"include"})).ok}class _s{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Wg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dy(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&c.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uy(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uy(n){return n===us?void 0:n}function dy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ly(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const fy={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},my=le.INFO,py={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},gy=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=py[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=my,this._logHandler=gy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const yy=(n,e)=>e.some(t=>n instanceof t);let gu,yu;function by(){return gu||(gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _y(){return yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uh=new WeakMap,La=new WeakMap,dh=new WeakMap,la=new WeakMap,yc=new WeakMap;function vy(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",c)},i=()=>{t(On(n.result)),r()},c=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&uh.set(t,n)}).catch(()=>{}),yc.set(e,n),e}function ky(n){if(La.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",c),n.removeEventListener("abort",c)},i=()=>{t(),r()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",c),n.addEventListener("abort",c)});La.set(n,e)}let Ma={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return La.get(n);if(e==="objectStoreNames")return n.objectStoreNames||dh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return On(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xy(n){Ma=n(Ma)}function wy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ua(this),e,...t);return dh.set(s,e.sort?e.sort():[e]),On(s)}:_y().includes(n)?function(...e){return n.apply(ua(this),e),On(uh.get(this))}:function(...e){return On(n.apply(ua(this),e))}}function Ey(n){return typeof n=="function"?wy(n):(n instanceof IDBTransaction&&ky(n),yy(n,by())?new Proxy(n,Ma):n)}function On(n){if(n instanceof IDBRequest)return vy(n);if(la.has(n))return la.get(n);const e=Ey(n);return e!==n&&(la.set(n,e),yc.set(e,n)),e}const ua=n=>yc.get(n);function Iy(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const c=indexedDB.open(n,e),l=On(c);return s&&c.addEventListener("upgradeneeded",d=>{s(On(c.result),d.oldVersion,d.newVersion,On(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{i&&d.addEventListener("close",()=>i()),r&&d.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Ty=["get","getKey","getAll","getAllKeys","count"],Ay=["put","add","delete","clear"],da=new Map;function bu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Ay.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ty.includes(t)))return;const i=async function(c,...l){const d=this.transaction(c,r?"readwrite":"readonly");let h=d.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),r&&d.done]))[0]};return da.set(e,i),i}xy(n=>({...n,get:(e,t,s)=>bu(e,t)||n.get(e,t,s),has:(e,t)=>!!bu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ny(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ny(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ua="@firebase/app",_u="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new gc("@firebase/app"),Ry="@firebase/app-compat",Cy="@firebase/analytics-compat",Py="@firebase/analytics",jy="@firebase/app-check-compat",Dy="@firebase/app-check",Oy="@firebase/auth",Vy="@firebase/auth-compat",Ly="@firebase/database",My="@firebase/data-connect",Uy="@firebase/database-compat",Fy="@firebase/functions",zy="@firebase/functions-compat",$y="@firebase/installations",By="@firebase/installations-compat",Hy="@firebase/messaging",Wy="@firebase/messaging-compat",qy="@firebase/performance",Ky="@firebase/performance-compat",Gy="@firebase/remote-config",Jy="@firebase/remote-config-compat",Yy="@firebase/storage",Qy="@firebase/storage-compat",Xy="@firebase/firestore",Zy="@firebase/ai",eb="@firebase/firestore-compat",tb="firebase",nb="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="[DEFAULT]",sb={[Ua]:"fire-core",[Ry]:"fire-core-compat",[Py]:"fire-analytics",[Cy]:"fire-analytics-compat",[Dy]:"fire-app-check",[jy]:"fire-app-check-compat",[Oy]:"fire-auth",[Vy]:"fire-auth-compat",[Ly]:"fire-rtdb",[My]:"fire-data-connect",[Uy]:"fire-rtdb-compat",[Fy]:"fire-fn",[zy]:"fire-fn-compat",[$y]:"fire-iid",[By]:"fire-iid-compat",[Hy]:"fire-fcm",[Wy]:"fire-fcm-compat",[qy]:"fire-perf",[Ky]:"fire-perf-compat",[Gy]:"fire-rc",[Jy]:"fire-rc-compat",[Yy]:"fire-gcs",[Qy]:"fire-gcs-compat",[Xy]:"fire-fst",[eb]:"fire-fst-compat",[Zy]:"fire-vertex","fire-js":"fire-js",[tb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map,rb=new Map,za=new Map;function vu(n,e){try{n.container.addComponent(e)}catch(t){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $s(n){const e=n.name;if(za.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,n);for(const t of Xi.values())vu(t,n);for(const t of rb.values())vu(t,n);return!0}function bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new ri("app","Firebase",ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=nb;function hh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Fa,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Vn.create("bad-app-name",{appName:String(r)});if(t||(t=ah()),!t)throw Vn.create("no-options");const i=Xi.get(r);if(i){if(bs(t,i.options)&&bs(s,i.config))return i;throw Vn.create("duplicate-app",{appName:r})}const c=new hy(r);for(const d of za.values())c.addComponent(d);const l=new ob(t,s,c);return Xi.set(r,l),l}function fh(n=Fa){const e=Xi.get(n);if(!e&&n===Fa&&ah())return hh();if(!e)throw Vn.create("no-app",{appName:n});return e}function Ln(n,e,t){let s=sb[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(c.join(" "));return}$s(new _s(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebase-heartbeat-database",cb=1,zr="firebase-heartbeat-store";let ha=null;function mh(){return ha||(ha=Iy(ab,cb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vn.create("idb-open",{originalErrorMessage:n.message})})),ha}async function lb(n){try{const t=(await mh()).transaction(zr),s=await t.objectStore(zr).get(ph(n));return await t.done,s}catch(e){if(e instanceof Tn)kn.warn(e.message);else{const t=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(t.message)}}}async function ku(n,e){try{const s=(await mh()).transaction(zr,"readwrite");await s.objectStore(zr).put(e,ph(n)),await s.done}catch(t){if(t instanceof Tn)kn.warn(t.message);else{const s=Vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kn.warn(s.message)}}}function ph(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=1024,db=30;class hb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mb(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(c=>c.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>db){const c=pb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xu(),{heartbeatsToSend:s,unsentEntries:r}=fb(this._heartbeatsCache.heartbeats),i=Qi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kn.warn(t),""}}}function xu(){return new Date().toISOString().substring(0,10)}function fb(n,e=ub){const t=[];let s=n.slice();for(const r of n){const i=t.find(c=>c.agent===r.agent);if(i){if(i.dates.push(r.date),wu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),wu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ey()?ty().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wu(n){return Qi(JSON.stringify({version:2,heartbeats:n})).length}function pb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n){$s(new _s("platform-logger",e=>new Sy(e),"PRIVATE")),$s(new _s("heartbeat",e=>new hb(e),"PRIVATE")),Ln(Ua,_u,n),Ln(Ua,_u,"esm2020"),Ln("fire-js","")}gb("");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={PHONE:"phone",TOTP:"totp"},bb={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},_b={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},vb={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},kb={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function gh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wb=xb,yh=gh,bh=new ri("auth","Firebase",gh()),Eb={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new gc("@firebase/auth");function Ib(n,...e){Zi.logLevel<=le.WARN&&Zi.warn(`Auth (${Qs}): ${n}`,...e)}function Fi(n,...e){Zi.logLevel<=le.ERROR&&Zi.error(`Auth (${Qs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,...e){throw vc(n,...e)}function kt(n,...e){return vc(n,...e)}function _c(n,e,t){const s={...yh(),[e]:t};return new ri("auth","Firebase",s).create(e,{appName:n.name})}function at(n){return _c(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xs(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&At(n,"argument-error"),_c(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vc(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return bh.create(n,...e)}function U(n,e,...t){if(!n)throw vc(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fi(e),new Error(e)}function xn(n,e){n||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function kc(){return Eu()==="http:"||Eu()==="https:"}function Eu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kc()||Yg()||"connection"in navigator)?navigator.onLine:!0}function Ab(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,xn(t>e,"Short delay should be less than long delay!"),this.isMobile=Kg()||Qg()}get(){return Tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n,e){xn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rb=new oi(3e4,6e4);function Se(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ne(n,e,t,s,r={}){return vh(n,r,async()=>{let i={},c={};s&&(e==="GET"?c=s:i={body:JSON.stringify(s)});const l=Ys({key:n.config.apiKey,...c}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:d,...i};return Jg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ii(n.emulatorConfig.host)&&(h.credentials="include"),_h.fetch()(await kh(n,n.config.apiHost,t,l),h)})}async function vh(n,e,t){n._canInitEmulator=!1;const s={...Sb,...e};try{const r=new Pb(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const c=await i.json();if("needConfirmation"in c)throw Ir(n,"account-exists-with-different-credential",c);if(i.ok&&!("errorMessage"in c))return c;{const l=i.ok?c.errorMessage:c.error.message,[d,h]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ir(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw Ir(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw Ir(n,"user-disabled",c);const m=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _c(n,m,h);At(n,m)}}catch(r){if(r instanceof Tn)throw r;At(n,"network-request-failed",{message:String(r)})}}async function An(n,e,t,s,r={}){const i=await Ne(n,e,t,s,r);return"mfaPendingCredential"in i&&At(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function kh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,c=i.config.emulator?xc(n.config,r):`${n.config.apiScheme}://${r}`;return Nb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(c).toString():c}function Cb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),Rb.get())})}}function Ir(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=kt(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){return n!==void 0&&n.getResponse!==void 0}function Tu(n){return n!==void 0&&n.enterprise!==void 0}class xh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Cb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(n){return(await Ne(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function wh(n,e){return Ne(n,"GET","/v2/recaptchaConfig",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(n,e){return Ne(n,"POST","/v1/accounts:delete",e)}async function Ob(n,e){return Ne(n,"POST","/v1/accounts:update",e)}async function eo(n,e){return Ne(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n,e=!1){return X(n).getIdToken(e)}async function Eh(n,e=!1){const t=X(n),s=await t.getIdToken(e),r=Eo(s);U(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,c=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Cr(fa(r.auth_time)),issuedAtTime:Cr(fa(r.iat)),expirationTime:Cr(fa(r.exp)),signInProvider:c||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fa(n){return Number(n)*1e3}function Eo(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const r=ih(t);return r?JSON.parse(r):(Fi("Failed to decode base64 JWT payload"),null)}catch(r){return Fi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Au(n){const e=Eo(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Tn&&Lb(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Lb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(n){var p;const e=n.auth,t=await n.getIdToken(),s=await wn(n,eo(e,{idToken:t}));U(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?Th(r.providerUserInfo):[],c=Ub(n.providerData,i),l=n.isAnonymous,d=!(n.email&&r.passwordHash)&&!(c!=null&&c.length),h=l?d:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new $a(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function Ih(n){const e=X(n);await Br(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ub(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Th(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(n,e){const t=await vh(n,{},async()=>{const s=Ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,c=await kh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:s};return n.emulatorConfig&&ii(n.emulatorConfig.host)&&(d.credentials="include"),_h.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zb(n,e){return Ne(n,"POST","/v2/accounts:revokeToken",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=Au(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Fb(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,c=new Ds;return s&&(U(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),r&&(U(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:e}),c.expirationTime=i),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ft{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Mb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $a(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await wn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Eh(this,e)}reload(){return Ih(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Br(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await wn(this,Db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,c=t.photoURL??void 0,l=t.tenantId??void 0,d=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:T,providerData:S,stsTokenManager:j}=t;U(p&&j,e,"internal-error");const A=Ds.fromJSON(this.name,j);U(typeof p=="string",e,"internal-error"),Dn(s,e.name),Dn(r,e.name),U(typeof v=="boolean",e,"internal-error"),U(typeof T=="boolean",e,"internal-error"),Dn(i,e.name),Dn(c,e.name),Dn(l,e.name),Dn(d,e.name),Dn(h,e.name),Dn(m,e.name);const B=new Ft({uid:p,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:T,photoURL:c,phoneNumber:i,tenantId:l,stsTokenManager:A,createdAt:h,lastLoginAt:m});return S&&Array.isArray(S)&&(B.providerData=S.map(R=>({...R}))),d&&(B._redirectEventId=d),B}static async _fromIdTokenResponse(e,t,s=!1){const r=new Ds;r.updateFromServerResponse(t);const i=new Ft({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Br(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];U(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Th(r.providerUserInfo):[],c=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Ds;l.updateFromIdToken(s);const d=new Ft({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:c}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new $a(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(d,h),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function yn(n){xn(n instanceof Function,"Expected a class definition");let e=Su.get(n);return e?(xn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Su.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ah.type="NONE";const Ba=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class Os{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=zi(this.userKey,r.apiKey,i),this.fullPersistenceKey=zi("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await eo(this.auth,{idToken:e}).catch(()=>{});return t?Ft._fromGetAccountInfoResponse(this.auth,t,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Os(yn(Ba),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||yn(Ba);const c=zi(s,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(c);if(m){let p;if(typeof m=="string"){const v=await eo(e,{idToken:m}).catch(()=>{});if(!v)break;p=await Ft._fromGetAccountInfoResponse(e,v,m)}else p=Ft._fromJSON(e,m);h!==i&&(l=p),i=h;break}}catch{}const d=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new Os(i,e,s):(i=d[0],l&&await i._set(c,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(c)}catch{}})),new Os(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ch(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jh(e))return"Blackberry";if(Dh(e))return"Webos";if(Nh(e))return"Safari";if((e.includes("chrome/")||Rh(e))&&!e.includes("edge/"))return"Chrome";if(Ph(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sh(n=_t()){return/firefox\//i.test(n)}function Nh(n=_t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rh(n=_t()){return/crios\//i.test(n)}function Ch(n=_t()){return/iemobile/i.test(n)}function Ph(n=_t()){return/android/i.test(n)}function jh(n=_t()){return/blackberry/i.test(n)}function Dh(n=_t()){return/webos/i.test(n)}function wc(n=_t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $b(n=_t()){var e;return wc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Bb(){return Xg()&&document.documentMode===10}function Oh(n=_t()){return wc(n)||Ph(n)||Dh(n)||jh(n)||/windows phone/i.test(n)||Ch(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n,e=[]){let t;switch(n){case"Browser":t=Nu(_t());break;case"Worker":t=`${Nu(_t())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((c,l)=>{try{const d=e(i);c(d)}catch(d){l(d)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(n,e={}){return Ne(n,"GET","/v2/passwordPolicy",Se(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=6;class Kb{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??qb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ru(this),this.idTokenSubscription=new Ru(this),this.beforeStateQueue=new Hb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yn(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await eo(this,{idToken:e}),s=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Oe(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===l)&&(d!=null&&d.user)&&(s=d.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Br(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(at(this));const t=e?X(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wb(this),t=new Kb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await zb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yn(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[yn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{c||i(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,s,r);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ib(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fe(n){return X(n)}class Ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=oy(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jb(n){ai=n}function Ec(n){return ai.loadJS(n)}function Yb(){return ai.recaptchaV2Script}function Qb(){return ai.recaptchaEnterpriseScript}function Xb(){return ai.gapiScript}function Lh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=500,e_=6e4,Si=1e12;class t_{constructor(e){this.auth=e,this.counter=Si,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new r_(e,this.auth.name,t||{})),this.counter++,s}reset(e){var s;const t=e||Si;(s=this._widgets.get(t))==null||s.delete(),this._widgets.delete(t)}getResponse(e){var s;const t=e||Si;return((s=this._widgets.get(t))==null?void 0:s.getResponse())||""}async execute(e){var s;const t=e||Si;return(s=this._widgets.get(t))==null||s.execute(),""}}class n_{constructor(){this.enterprise=new s_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class s_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class r_{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;U(r,"argument-error",{appName:t}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=i_(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},e_)},Zb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function i_(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const o_="recaptcha-enterprise",Pr="NO_RECAPTCHA";class Mh{constructor(e){this.type=o_,this.auth=Fe(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(c,l)=>{wh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new xh(d);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,c(h.siteKey)}}).catch(d=>{l(d)})})}function r(i,c,l){const d=window.grecaptcha;Tu(d)?d.enterprise.ready(()=>{d.enterprise.execute(i,{action:e}).then(h=>{c(h)}).catch(()=>{c(Pr)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new n_().execute("siteKey",{action:"verify"}):new Promise((i,c)=>{s(this.auth).then(l=>{if(!t&&Tu(window.grecaptcha))r(l,i,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Qb();d.length!==0&&(d+=l),Ec(d).then(()=>{r(l,i,c)}).catch(h=>{c(h)})}}).catch(l=>{c(l)})})}}async function _r(n,e,t,s=!1,r=!1){const i=new Mh(n);let c;if(r)c=Pr;else try{c=await i.verify(t)}catch{c=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mn(n,e,t,s,r){var i,c;if(r==="EMAIL_PASSWORD_PROVIDER")if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await _r(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await _r(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(l)});else if(r==="PHONE_PROVIDER")if((c=n._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const l=await _r(n,e,t);return s(n,l).catch(async d=>{var h;if(((h=n._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(d.code==="auth/missing-recaptcha-token"||d.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const m=await _r(n,e,t,!1,!0);return s(n,m)}return Promise.reject(d)})}else{const l=await _r(n,e,t,!1,!0);return s(n,l)}else return Promise.reject(r+" provider is not supported.")}async function Uh(n){const e=Fe(n),t=await wh(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new xh(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new Mh(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n,e){const t=bc(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(bs(i,e??{}))return r;At(r,"already-initialized")}return t.initialize({options:e})}function a_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(yn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zh(n,e,t){const s=Fe(n);U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=$h(e),{host:c,port:l}=c_(e),d=l===null?"":`:${l}`,h={url:`${i}//${c}${d}/`},m=Object.freeze({host:c,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){U(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),U(bs(h,s.config.emulator)&&bs(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,ii(c)?lh(`${i}//${c}${d}`):r||l_()}function $h(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function c_(n){const e=$h(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Cu(s.substr(i.length+1))}}else{const[i,c]=s.split(":");return{host:i,port:Cu(c)}}}function Cu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function l_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(n,e){return Ne(n,"POST","/v1/accounts:resetPassword",Se(n,e))}async function u_(n,e){return Ne(n,"POST","/v1/accounts:update",e)}async function d_(n,e){return Ne(n,"POST","/v1/accounts:signUp",e)}async function h_(n,e){return Ne(n,"POST","/v1/accounts:update",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e){return An(n,"POST","/v1/accounts:signInWithPassword",Se(n,e))}async function Io(n,e){return Ne(n,"POST","/v1/accounts:sendOobCode",Se(n,e))}async function m_(n,e){return Io(n,e)}async function p_(n,e){return Io(n,e)}async function g_(n,e){return Io(n,e)}async function y_(n,e){return Io(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(n,e){return An(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))}async function __(n,e){return An(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Zs{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Bs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Bs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mn(e,t,"signInWithPassword",f_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return b_(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mn(e,s,"signUpPassword",d_,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return __(e,{idToken:t,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n,e){return An(n,"POST","/v1/accounts:signInWithIdp",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="http://localhost";class rn extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):At("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const c=new rn(s,r);return c.idToken=i.idToken||void 0,c.accessToken=i.accessToken||void 0,c.secret=i.secret,c.nonce=i.nonce,c.pendingToken=i.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}buildRequest(){const e={requestUri:v_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ys(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pu(n,e){return Ne(n,"POST","/v1/accounts:sendVerificationCode",Se(n,e))}async function k_(n,e){return An(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e))}async function x_(n,e){const t=await An(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e));if(t.temporaryProof)throw Ir(n,"account-exists-with-different-credential",t);return t}const w_={USER_NOT_FOUND:"user-not-found"};async function E_(n,e){const t={...e,operation:"REAUTH"};return An(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,t),w_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Zs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Un({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Un({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return k_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return x_(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return E_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!t&&!r&&!i?null:new Un({verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T_(n){const e=wr(Er(n)).link,t=e?wr(Er(e)).deep_link_id:null,s=wr(Er(n)).deep_link_id;return(s?wr(Er(s)).link:null)||s||t||e||n}class er{constructor(e){const t=wr(Er(e)),s=t.apiKey??null,r=t.oobCode??null,i=I_(t.mode??null);U(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=T_(e);try{return new er(t)}catch{return null}}}function A_(n){return er.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,t){return Bs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=er.parseLink(t);return U(s,"argument-error"),Bs._fromEmailAndCode(e,s.code,s.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Sn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class jr extends tr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),rn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),rn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return jr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return jr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:c,providerId:l}=e;if(!s&&!r&&!t&&!i||!l)return null;try{return new jr(l)._credential({idToken:t,accessToken:s,nonce:c,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends tr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return mn.credential(t,s)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends tr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="http://localhost";class Hr extends Zs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,pendingToken:i}=t;return!s||!r||!i||s!==r?null:new Hr(s,i)}static _create(e,t){return new Hr(e,t)}buildRequest(){return{requestUri:S_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="saml.";class to extends Sn{constructor(e){U(e.startsWith(N_),"argument-error"),super(e)}static credentialFromResult(e){return to.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return to.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Hr.fromJSON(e);return U(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return Hr._create(s,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends tr{constructor(){super("twitter.com")}static credential(e,t){return rn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gn.credential(t,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n,e){return An(n,"POST","/v1/accounts:signUp",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ft._fromIdTokenResponse(e,s,r),c=ju(s);return new Ot({user:i,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=ju(s);return new Ot({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function ju(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n){var r;if(Oe(n.app))return Promise.reject(at(n));const e=Fe(n);if(await e._initializationPromise,(r=e.currentUser)!=null&&r.isAnonymous)return new Ot({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Hh(e,{returnSecureToken:!0}),s=await Ot._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Tn{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new no(e,t,s,r)}}function qh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(n,i,e,s):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(n,e){const t=X(n);await To(!0,t,e);const{providerUserInfo:s}=await Ob(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),r=Kh(s||[]);return t.providerData=t.providerData.filter(i=>r.has(i.providerId)),r.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ic(n,e,t=!1){const s=await wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ot._forOperation(n,"link",s)}async function To(n,e,t){await Br(e);const s=Kh(e.providerData),r=n===!1?"provider-already-linked":"no-such-provider";U(s.has(t)===n,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(n,e,t=!1){const{auth:s}=n;if(Oe(s.app))return Promise.reject(at(s));const r="reauthenticate";try{const i=await wn(n,qh(s,r,e,n),t);U(i.idToken,s,"internal-error");const c=Eo(i.idToken);U(c,s,"internal-error");const{sub:l}=c;return U(n.uid===l,s,"user-mismatch"),Ot._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&At(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(n,e,t=!1){if(Oe(n.app))return Promise.reject(at(n));const s="signIn",r=await qh(n,s,e),i=await Ot._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function Ao(n,e){return Jh(Fe(n),e)}async function Yh(n,e){const t=X(n);return await To(!1,t,e.providerId),Ic(t,e)}async function Qh(n,e){return Gh(X(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(n,e){return An(n,"POST","/v1/accounts:signInWithCustomToken",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(n,e){if(Oe(n.app))return Promise.reject(at(n));const t=Fe(n),s=await C_(t,{token:e,returnSecureToken:!0}),r=await Ot._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Tc._fromServerResponse(e,t):"totpInfo"in t?Ac._fromServerResponse(e,t):At(e,"internal-error")}}class Tc extends ci{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Tc(t)}}class Ac extends ci{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ac(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n,e,t){var s;U(((s=t.url)==null?void 0:s.length)>0,n,"invalid-continue-uri"),U(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),U(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(U(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(U(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(n){const e=Fe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j_(n,e,t){const s=Fe(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&So(s,r,t),await Mn(s,r,"getOobCode",p_,"EMAIL_PASSWORD_PROVIDER")}async function D_(n,e,t){await Bh(X(n),{oobCode:e,newPassword:t}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Sc(n),s})}async function O_(n,e){await h_(X(n),{oobCode:e})}async function Xh(n,e){const t=X(n),s=await Bh(t,{oobCode:e}),r=s.requestType;switch(U(r,t,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(s.mfaInfo,t,"internal-error");default:U(s.email,t,"internal-error")}let i=null;return s.mfaInfo&&(i=ci._fromServerResponse(Fe(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:i},operation:r}}async function V_(n,e){const{data:t}=await Xh(X(n),e);return t.email}async function L_(n,e,t){if(Oe(n.app))return Promise.reject(at(n));const s=Fe(n),c=await Mn(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hh,"EMAIL_PASSWORD_PROVIDER").catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Sc(n),d}),l=await Ot._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(l.user),l}function M_(n,e,t){return Oe(n.app)?Promise.reject(at(n)):Ao(X(n),Qn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Sc(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n,e,t){const s=Fe(n),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(c,l){U(l.handleCodeInApp,s,"argument-error"),l&&So(s,c,l)}i(r,t),await Mn(s,r,"getOobCode",g_,"EMAIL_PASSWORD_PROVIDER")}function F_(n,e){const t=er.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function z_(n,e,t){if(Oe(n.app))return Promise.reject(at(n));const s=X(n),r=Qn.credentialWithLink(e,t||$r());return U(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Ao(s,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(n,e){return Ne(n,"POST","/v1/accounts:createAuthUri",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(n,e){const t=kc()?$r():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:r}=await $_(X(n),s);return r||[]}async function H_(n,e){const t=X(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&So(t.auth,r,e);const{email:i}=await m_(t.auth,r);i!==n.email&&await n.reload()}async function W_(n,e,t){const s=X(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&So(s.auth,i,t);const{email:c}=await y_(s.auth,i);c!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(n,e){return Ne(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=X(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await wn(s,q_(s.auth,i));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const l=s.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function G_(n,e){const t=X(n);return Oe(t.auth.app)?Promise.reject(at(t.auth)):Zh(t,e,null)}function J_(n,e){return Zh(X(n),null,e)}async function Zh(n,e,t){const{auth:s}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const c=await wn(n,u_(s,i));await n._updateTokensIfNecessary(c,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){var r,i;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const c=(i=(r=Eo(n.idToken))==null?void 0:r.firebase)==null?void 0:i.sign_in_provider;if(c){const l=c!=="anonymous"&&c!=="custom"?c:null;return new Vs(s,l)}}if(!e)return null;switch(e){case"facebook.com":return new Q_(s,t);case"github.com":return new X_(s,t);case"google.com":return new Z_(s,t);case"twitter.com":return new ev(s,t,n.screenName||null);case"custom":case"anonymous":return new Vs(s,null);default:return new Vs(s,e,t)}}class Vs{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class ef extends Vs{constructor(e,t,s,r){super(e,t,s),this.username=r}}class Q_ extends Vs{constructor(e,t){super(e,"facebook.com",t)}}class X_ extends ef{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Z_ extends Vs{constructor(e,t){super(e,"google.com",t)}}class ev extends ef{constructor(e,t,s){super(e,"twitter.com",t,s)}}function tv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Y_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n,e){return X(n).setPersistence(e)}function nv(n){return Uh(n)}async function sv(n,e){return Fe(n).validatePassword(e)}function nf(n,e,t,s){return X(n).onIdTokenChanged(e,t,s)}function sf(n,e,t){return X(n).beforeAuthStateChanged(e,t)}function rv(n,e,t,s){return X(n).onAuthStateChanged(e,t,s)}function iv(n){X(n).useDeviceLanguage()}function ov(n,e){return X(n).updateCurrentUser(e)}function av(n){return X(n).signOut()}function cv(n,e){return Fe(n).revokeAccessToken(e)}async function lv(n){return X(n).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new hs("enroll",e,t)}static _fromMfaPendingCredential(e){return new hs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return hs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((s=e.multiFactorSession)!=null&&s.idToken)return hs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=Fe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(l=>ci._fromServerResponse(s,l));U(r.mfaPendingCredential,s,"internal-error");const c=hs._fromMfaPendingCredential(r.mfaPendingCredential);return new Nc(c,i,async l=>{const d=await l._process(s,c);delete r.mfaInfo,delete r.mfaPendingCredential;const h={...r,idToken:d.idToken,refreshToken:d.refreshToken};switch(t.operationType){case"signIn":const m=await Ot._fromIdTokenResponse(s,t.operationType,h);return await s._updateCurrentUser(m.user),m;case"reauthenticate":return U(t.user,s,"internal-error"),Ot._forOperation(t.user,t.operationType,h);default:At(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function uv(n,e){var r;const t=X(n),s=e;return U(e.customData.operationType,t,"argument-error"),U((r=s.customData._serverResponse)==null?void 0:r.mfaPendingCredential,t,"argument-error"),Nc._fromError(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n,e){return Ne(n,"POST","/v2/accounts/mfaEnrollment:start",Se(n,e))}function dv(n,e){return Ne(n,"POST","/v2/accounts/mfaEnrollment:finalize",Se(n,e))}function hv(n,e){return Ne(n,"POST","/v2/accounts/mfaEnrollment:start",Se(n,e))}function fv(n,e){return Ne(n,"POST","/v2/accounts/mfaEnrollment:finalize",Se(n,e))}function mv(n,e){return Ne(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Se(n,e))}class Rc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>ci._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Rc(e)}async getSession(){return hs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const s=e,r=await this.getSession(),i=await wn(this.user,s._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const r=await wn(this.user,mv(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const ma=new WeakMap;function pv(n){const e=X(n);return ma.has(e)||ma.set(e,Rc._fromUser(e)),ma.get(e)}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=1e3,yv=10;class of extends rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,d)=>{this.notifyListeners(c,d)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},i=this.storage.getItem(s);Bb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yv):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},gv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}of.type="LOCAL";const Cc=of;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=1e3;function pa(n){var s;const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((s=document.cookie.match(t))==null?void 0:s[1])??null}function ga(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class af{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=ga(e);if(window.cookieStore){const s=await window.cookieStore.get(t);return s==null?void 0:s.value}return pa(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const s=ga(e);document.cookie=`${s}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const s=ga(e);if(window.cookieStore){const l=(h=>{const m=h.changed.find(v=>v.name===s);m&&t(m.value),h.deleted.find(v=>v.name===s)&&t(null)}),d=()=>window.cookieStore.removeEventListener("change",l);return this.listenerUnsubscribes.set(t,d),window.cookieStore.addEventListener("change",l)}let r=pa(s);const i=setInterval(()=>{const l=pa(s);l!==r&&(t(l),r=l)},bv),c=()=>clearInterval(i);this.listenerUnsubscribes.set(t,c)}_removeListener(e,t){const s=this.listenerUnsubscribes.get(t);s&&(s(),this.listenerUnsubscribes.delete(t))}}af.type="COOKIE";const _v=af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cf.type="SESSION";const Pc=cf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new No(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(c).map(async h=>h(t.origin,i)),d=await vv(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,c;return new Promise((l,d)=>{const h=Ro("",20);r.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},s);c={messageChannel:r,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function xv(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function wv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ev(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Iv(){return jc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="firebaseLocalStorageDb",Tv=1,ro="firebaseLocalStorage",uf="fbase_key";class li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Co(n,e){return n.transaction([ro],e?"readwrite":"readonly").objectStore(ro)}function Av(){const n=indexedDB.deleteDatabase(lf);return new li(n).toPromise()}function Ha(){const n=indexedDB.open(lf,Tv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ro,{keyPath:uf})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ro)?e(s):(s.close(),await Av(),e(await Ha()))})})}async function Ou(n,e,t){const s=Co(n,!0).put({[uf]:e,value:t});return new li(s).toPromise()}async function Sv(n,e){const t=Co(n,!1).get(e),s=await new li(t).toPromise();return s===void 0?null:s.value}function Vu(n,e){const t=Co(n,!0).delete(e);return new li(t).toPromise()}const Nv=800,Rv=3;class df{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Rv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(Iv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await wv(),!this.activeServiceWorker)return;this.sender=new kv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ev()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ha();return await Ou(e,so,"1"),await Vu(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ou(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Sv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Co(r,!1).getAll();return new li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}df.type="LOCAL";const hf=df;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,e){return Ne(n,"POST","/v2/accounts/mfaSignIn:start",Se(n,e))}function Cv(n,e){return Ne(n,"POST","/v2/accounts/mfaSignIn:finalize",Se(n,e))}function Pv(n,e){return Ne(n,"POST","/v2/accounts/mfaSignIn:finalize",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=Lh("rcb"),jv=new oi(3e4,6e4);class Dv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Qe().grecaptcha)!=null&&e.render)}load(e,t=""){return U(Ov(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Iu(Qe().grecaptcha)?Promise.resolve(Qe().grecaptcha):new Promise((s,r)=>{const i=Qe().setTimeout(()=>{r(kt(e,"network-request-failed"))},jv.get());Qe()[ya]=()=>{Qe().clearTimeout(i),delete Qe()[ya];const l=Qe().grecaptcha;if(!l||!Iu(l)){r(kt(e,"internal-error"));return}const d=l.render;l.render=(h,m)=>{const p=d(h,m);return this.counter++,p},this.hostLanguage=t,s(l)};const c=`${Yb()}?${Ys({onload:ya,render:"explicit",hl:t})}`;Ec(c).catch(()=>{clearTimeout(i),r(kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Qe().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ov(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Vv{async load(e){return new t_(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="recaptcha",Lv={theme:"light",type:"image"};class Mv{constructor(e,t,s={...Lv}){this.parameters=s,this.type=Dr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof t=="string"?document.getElementById(t):t;U(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vv:new Dv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(r=>{const i=c=>{c&&(this.tokenChangeListeners.delete(i),r(c))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Qe()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(kc()&&!jc(),this.auth,"internal-error"),await Uv(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await jb(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Uv(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Un._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Fv(n,e,t){if(Oe(n.app))return Promise.reject(at(n));const s=Fe(n),r=await Po(s,e,X(t));return new Dc(r,i=>Ao(s,i))}async function zv(n,e,t){const s=X(n);await To(!1,s,"phone");const r=await Po(s.auth,e,X(t));return new Dc(r,i=>Yh(s,i))}async function $v(n,e,t){const s=X(n);if(Oe(s.auth.app))return Promise.reject(at(s.auth));const r=await Po(s.auth,e,X(t));return new Dc(r,i=>Qh(s,i))}async function Po(n,e,t){var s;if(!n._getRecaptchaConfig())try{await Uh(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){U(i.type==="enroll",n,"internal-error");const c={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Mn(n,c,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===Pr){U((t==null?void 0:t.type)===Dr,m,"argument-error");const v=await ba(m,p,t);return Du(m,v)}return Du(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{U(i.type==="signin",n,"internal-error");const c=((s=r.multiFactorHint)==null?void 0:s.uid)||r.multiFactorUid;U(c,n,"missing-multi-factor-info");const l={mfaPendingCredential:i.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Mn(n,l,"mfaSmsSignIn",async(p,v)=>{if(v.phoneSignInInfo.captchaResponse===Pr){U((t==null?void 0:t.type)===Dr,p,"argument-error");const T=await ba(p,v,t);return Lu(p,T)}return Lu(p,v)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Mn(n,i,"sendVerificationCode",async(h,m)=>{if(m.captchaResponse===Pr){U((t==null?void 0:t.type)===Dr,h,"argument-error");const p=await ba(h,m,t);return Pu(h,p)}return Pu(h,m)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}}async function Bv(n,e){const t=X(n);if(Oe(t.auth.app))return Promise.reject(at(t.auth));await Ic(t,e)}async function ba(n,e,t){U(t.type===Dr,n,"argument-error");const s=await t.verify();U(typeof s=="string",n,"argument-error");const r={...e};if("phoneEnrollmentInfo"in r){const i=r.phoneEnrollmentInfo.phoneNumber,c=r.phoneEnrollmentInfo.captchaResponse,l=r.phoneEnrollmentInfo.clientType,d=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:s,captchaResponse:c,clientType:l,recaptchaVersion:d}}),r}else if("phoneSignInInfo"in r){const i=r.phoneSignInInfo.captchaResponse,c=r.phoneSignInInfo.clientType,l=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:i,clientType:c,recaptchaVersion:l}}),r}else return Object.assign(r,{recaptchaToken:s}),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.providerId=ps.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,t){return Po(this.auth,e,X(t))}static credential(e,t){return Un._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ps.credentialFromTaggedObject(t)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?Un._fromTokenResponse(t,s):null}}ps.PROVIDER_ID="phone";ps.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n,e){return e?yn(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hv(n){return Jh(n.auth,new Oc(n),n.bypassAuthState)}function Wv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Gh(t,new Oc(n),n.bypassAuthState)}async function qv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Ic(t,new Oc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:c,type:l}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hv;case"linkViaPopup":case"linkViaRedirect":return qv;case"reauthViaPopup":case"reauthViaRedirect":return Wv;default:At(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new oi(2e3,1e4);async function Gv(n,e,t){if(Oe(n.app))return Promise.reject(kt(n,"operation-not-supported-in-this-environment"));const s=Fe(n);Xs(n,e,Sn);const r=xs(s,t);return new bn(s,"signInViaPopup",e,r).executeNotNull()}async function Jv(n,e,t){const s=X(n);if(Oe(s.auth.app))return Promise.reject(kt(s.auth,"operation-not-supported-in-this-environment"));Xs(s.auth,e,Sn);const r=xs(s.auth,t);return new bn(s.auth,"reauthViaPopup",e,r,s).executeNotNull()}async function Yv(n,e,t){const s=X(n);Xs(s.auth,e,Sn);const r=xs(s.auth,t);return new bn(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class bn extends ff{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kv.get())};e()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="pendingRedirect",$i=new Map;class Xv extends ff{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const s=await Zv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zv(n,e){const t=pf(e),s=mf(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function Vc(n,e){return mf(n)._set(pf(e),"true")}function ek(n,e){$i.set(n._key(),e)}function mf(n){return yn(n._redirectPersistence)}function pf(n){return zi(Qv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(n,e,t){return nk(n,e,t)}async function nk(n,e,t){if(Oe(n.app))return Promise.reject(at(n));const s=Fe(n);Xs(n,e,Sn),await s._initializationPromise;const r=xs(s,t);return await Vc(r,s),r._openRedirect(s,e,"signInViaRedirect")}function sk(n,e,t){return rk(n,e,t)}async function rk(n,e,t){const s=X(n);if(Xs(s.auth,e,Sn),Oe(s.auth.app))return Promise.reject(at(s.auth));await s.auth._initializationPromise;const r=xs(s.auth,t);await Vc(r,s.auth);const i=await yf(s);return r._openRedirect(s.auth,e,"reauthViaRedirect",i)}function ik(n,e,t){return ok(n,e,t)}async function ok(n,e,t){const s=X(n);Xs(s.auth,e,Sn),await s.auth._initializationPromise;const r=xs(s.auth,t);await To(!1,s,e.providerId),await Vc(r,s.auth);const i=await yf(s);return r._openRedirect(s.auth,e,"linkViaRedirect",i)}async function ak(n,e){return await Fe(n)._initializationPromise,gf(n,e,!1)}async function gf(n,e,t=!1){if(Oe(n.app))return Promise.reject(at(n));const s=Fe(n),r=xs(s,e),c=await new Xv(s,r,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}async function yf(n){const e=Ro(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=600*1e3;class lk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!bf(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(kt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ck&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mu(e))}saveEventToCache(e){this.cachedEventUids.add(Mu(e)),this.lastProcessedEventTime=Date.now()}}function Mu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(n,e={}){return Ne(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fk=/^https?/;async function mk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dk(n);for(const t of e)try{if(pk(t))return}catch{}At(n,"unauthorized-domain")}function pk(n){const e=$r(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!fk.test(t))return!1;if(hk.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new oi(3e4,6e4);function Uu(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yk(n){return new Promise((e,t)=>{var r,i,c;function s(){Uu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uu(),t(kt(n,"network-request-failed"))},timeout:gk.get()})}if((i=(r=Qe().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((c=Qe().gapi)!=null&&c.load)s();else{const l=Lh("iframefcb");return Qe()[l]=()=>{gapi.load?s():t(kt(n,"network-request-failed"))},Ec(`${Xb()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw Bi=null,e})}let Bi=null;function bk(n){return Bi=Bi||yk(n),Bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new oi(5e3,15e3),vk="__/auth/iframe",kk="emulator/auth/iframe",xk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ek(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xc(e,kk):`https://${n.config.authDomain}/${vk}`,s={apiKey:e.apiKey,appName:n.name,v:Qs},r=wk.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ys(s).slice(1)}`}async function Ik(n){const e=await bk(n),t=Qe().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:Ek(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const c=kt(n,"network-request-failed"),l=Qe().setTimeout(()=>{i(c)},_k.get());function d(){Qe().clearTimeout(l),r(s)}s.ping(d).then(d,()=>{i(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ak=500,Sk=600,Nk="_blank",Rk="http://localhost";class Fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ck(n,e,t,s=Ak,r=Sk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const d={...Tk,width:s.toString(),height:r.toString(),top:i,left:c},h=_t().toLowerCase();t&&(l=Rh(h)?Nk:t),Sh(h)&&(e=e||Rk,d.scrollbars="yes");const m=Object.entries(d).reduce((v,[T,S])=>`${v}${T}=${S},`,"");if($b(h)&&l!=="_self")return Pk(e||"",l),new Fu(null);const p=window.open(e||"",l,m);U(p,n,"popup-blocked");try{p.focus()}catch{}return new Fu(p)}function Pk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="__/auth/handler",Dk="emulator/auth/handler",Ok=encodeURIComponent("fac");async function zu(n,e,t,s,r,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Qs,eventId:r};if(e instanceof Sn){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",iy(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))c[m]=p}if(e instanceof tr){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(c.scopes=m.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const d=await n._getAppCheckToken(),h=d?`#${Ok}=${encodeURIComponent(d)}`:"";return`${Vk(n)}?${Ys(l).slice(1)}${h}`}function Vk({config:n}){return n.emulator?xc(n,Dk):`https://${n.authDomain}/${jk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class Lk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pc,this._completeRedirectFn=gf,this._overrideRedirectResult=ek}async _openPopup(e,t,s,r){var c;xn((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const i=await zu(e,t,s,$r(),r);return Ck(e,i,Ro())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await zu(e,t,s,$r(),r);return xv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(xn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Ik(e),s=new lk(e);return t.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_a,{type:_a},r=>{var c;const i=(c=r==null?void 0:r[0])==null?void 0:c[_a];i!==void 0&&t(!!i),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oh()||Nh()||wc()}}const _f=Lk;class vf{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Xt("unexpected MultiFactorSessionType")}}}class Lc extends vf{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Lc(e)}_finalizeEnroll(e,t,s){return dv(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Cv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kf{constructor(){}static assertion(e){return Lc._fromCredential(e)}}kf.FACTOR_ID="phone";class xf{static assertionForEnrollment(e,t){return Wr._fromSecret(e,t)}static assertionForSignIn(e,t){return Wr._fromEnrollmentId(e,t)}static async generateSecret(e){var r;const t=e;U(typeof((r=t.user)==null?void 0:r.auth)<"u","internal-error");const s=await hv(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return jo._fromStartTotpMfaEnrollmentResponse(s,t.user.auth)}}xf.FACTOR_ID="totp";class Wr extends vf{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new Wr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Wr(t,e)}async _finalizeEnroll(e,t,s){return U(typeof this.secret<"u",e,"argument-error"),fv(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const s={verificationCode:this.otp};return Pv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}}class jo{constructor(e,t,s,r,i,c,l){this.sessionInfo=c,this.auth=l,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new jo(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let s=!1;return(Ni(e)||Ni(t))&&(s=!0),s&&(Ni(e)&&(e=((r=this.auth.currentUser)==null?void 0:r.email)||"unknownuser"),Ni(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ni(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var $u="@firebase/auth",Bu="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fk(n){$s(new _s("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=s.options;U(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vh(n)},h=new Gb(s,r,i,d);return a_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),$s(new _s("auth-internal",e=>{const t=Fe(e.getProvider("auth").getImmediate());return(s=>new Mk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln($u,Bu,Uk(n)),Ln($u,Bu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=300,$k=ch("authIdTokenMaxAge")||zk;let Hu=null;const Bk=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>$k)return;const r=t==null?void 0:t.token;Hu!==r&&(Hu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ui(n=fh()){const e=bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fh(n,{popupRedirectResolver:_f,persistence:[hf,Cc,Pc]}),s=ch("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const c=Bk(i.toString());sf(t,c,()=>c(t.currentUser)),nf(t,l=>c(l))}}const r=oh("auth");return r&&zh(t,`http://${r}`),t}function Hk(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Jb({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=kt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Hk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fk("Browser");const Wk=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:kb,ActionCodeURL:er,AuthCredential:Zs,AuthErrorCodes:Eb,EmailAuthCredential:Bs,EmailAuthProvider:Qn,FacebookAuthProvider:fn,FactorId:yb,GithubAuthProvider:pn,GoogleAuthProvider:mn,OAuthCredential:rn,OAuthProvider:jr,OperationType:vb,PhoneAuthCredential:Un,PhoneAuthProvider:ps,PhoneMultiFactorGenerator:kf,ProviderId:bb,RecaptchaVerifier:Mv,SAMLAuthProvider:to,SignInMethod:_b,TotpMultiFactorGenerator:xf,TotpSecret:jo,TwitterAuthProvider:gn,applyActionCode:O_,beforeAuthStateChanged:sf,browserCookiePersistence:_v,browserLocalPersistence:Cc,browserPopupRedirectResolver:_f,browserSessionPersistence:Pc,checkActionCode:Xh,confirmPasswordReset:D_,connectAuthEmulator:zh,createUserWithEmailAndPassword:L_,debugErrorMap:wb,deleteUser:lv,fetchSignInMethodsForEmail:B_,getAdditionalUserInfo:tv,getAuth:ui,getIdToken:Vb,getIdTokenResult:Eh,getMultiFactorResolver:uv,getRedirectResult:ak,inMemoryPersistence:Ba,indexedDBLocalPersistence:hf,initializeAuth:Fh,initializeRecaptchaConfig:nv,isSignInWithEmailLink:F_,linkWithCredential:Yh,linkWithPhoneNumber:zv,linkWithPopup:Yv,linkWithRedirect:ik,multiFactor:pv,onAuthStateChanged:rv,onIdTokenChanged:nf,parseActionCodeURL:A_,prodErrorMap:yh,reauthenticateWithCredential:Qh,reauthenticateWithPhoneNumber:$v,reauthenticateWithPopup:Jv,reauthenticateWithRedirect:sk,reload:Ih,revokeAccessToken:cv,sendEmailVerification:H_,sendPasswordResetEmail:j_,sendSignInLinkToEmail:U_,setPersistence:tf,signInAnonymously:Wh,signInWithCredential:Ao,signInWithCustomToken:P_,signInWithEmailAndPassword:M_,signInWithEmailLink:z_,signInWithPhoneNumber:Fv,signInWithPopup:Gv,signInWithRedirect:tk,signOut:av,unlink:R_,updateCurrentUser:ov,updateEmail:G_,updatePassword:J_,updatePhoneNumber:Bv,updateProfile:K_,useDeviceLanguage:iv,validatePassword:sv,verifyBeforeUpdateEmail:W_,verifyPasswordResetCode:V_},Symbol.toStringTag,{value:"Module"}));var qk="firebase",Kk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(qk,Kk,"app");var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fn,wf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function y(){}y.prototype=_.prototype,w.F=_.prototype,w.prototype=new y,w.prototype.constructor=w,w.D=function(x,k,E){for(var b=Array(arguments.length-2),se=2;se<arguments.length;se++)b[se-2]=arguments[se];return _.prototype[k].apply(x,b)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,_,y){y||(y=0);const x=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)x[k]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(k=0;k<16;++k)x[k]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=w.g[0],y=w.g[1],k=w.g[2];let E=w.g[3],b;b=_+(E^y&(k^E))+x[0]+3614090360&4294967295,_=y+(b<<7&4294967295|b>>>25),b=E+(k^_&(y^k))+x[1]+3905402710&4294967295,E=_+(b<<12&4294967295|b>>>20),b=k+(y^E&(_^y))+x[2]+606105819&4294967295,k=E+(b<<17&4294967295|b>>>15),b=y+(_^k&(E^_))+x[3]+3250441966&4294967295,y=k+(b<<22&4294967295|b>>>10),b=_+(E^y&(k^E))+x[4]+4118548399&4294967295,_=y+(b<<7&4294967295|b>>>25),b=E+(k^_&(y^k))+x[5]+1200080426&4294967295,E=_+(b<<12&4294967295|b>>>20),b=k+(y^E&(_^y))+x[6]+2821735955&4294967295,k=E+(b<<17&4294967295|b>>>15),b=y+(_^k&(E^_))+x[7]+4249261313&4294967295,y=k+(b<<22&4294967295|b>>>10),b=_+(E^y&(k^E))+x[8]+1770035416&4294967295,_=y+(b<<7&4294967295|b>>>25),b=E+(k^_&(y^k))+x[9]+2336552879&4294967295,E=_+(b<<12&4294967295|b>>>20),b=k+(y^E&(_^y))+x[10]+4294925233&4294967295,k=E+(b<<17&4294967295|b>>>15),b=y+(_^k&(E^_))+x[11]+2304563134&4294967295,y=k+(b<<22&4294967295|b>>>10),b=_+(E^y&(k^E))+x[12]+1804603682&4294967295,_=y+(b<<7&4294967295|b>>>25),b=E+(k^_&(y^k))+x[13]+4254626195&4294967295,E=_+(b<<12&4294967295|b>>>20),b=k+(y^E&(_^y))+x[14]+2792965006&4294967295,k=E+(b<<17&4294967295|b>>>15),b=y+(_^k&(E^_))+x[15]+1236535329&4294967295,y=k+(b<<22&4294967295|b>>>10),b=_+(k^E&(y^k))+x[1]+4129170786&4294967295,_=y+(b<<5&4294967295|b>>>27),b=E+(y^k&(_^y))+x[6]+3225465664&4294967295,E=_+(b<<9&4294967295|b>>>23),b=k+(_^y&(E^_))+x[11]+643717713&4294967295,k=E+(b<<14&4294967295|b>>>18),b=y+(E^_&(k^E))+x[0]+3921069994&4294967295,y=k+(b<<20&4294967295|b>>>12),b=_+(k^E&(y^k))+x[5]+3593408605&4294967295,_=y+(b<<5&4294967295|b>>>27),b=E+(y^k&(_^y))+x[10]+38016083&4294967295,E=_+(b<<9&4294967295|b>>>23),b=k+(_^y&(E^_))+x[15]+3634488961&4294967295,k=E+(b<<14&4294967295|b>>>18),b=y+(E^_&(k^E))+x[4]+3889429448&4294967295,y=k+(b<<20&4294967295|b>>>12),b=_+(k^E&(y^k))+x[9]+568446438&4294967295,_=y+(b<<5&4294967295|b>>>27),b=E+(y^k&(_^y))+x[14]+3275163606&4294967295,E=_+(b<<9&4294967295|b>>>23),b=k+(_^y&(E^_))+x[3]+4107603335&4294967295,k=E+(b<<14&4294967295|b>>>18),b=y+(E^_&(k^E))+x[8]+1163531501&4294967295,y=k+(b<<20&4294967295|b>>>12),b=_+(k^E&(y^k))+x[13]+2850285829&4294967295,_=y+(b<<5&4294967295|b>>>27),b=E+(y^k&(_^y))+x[2]+4243563512&4294967295,E=_+(b<<9&4294967295|b>>>23),b=k+(_^y&(E^_))+x[7]+1735328473&4294967295,k=E+(b<<14&4294967295|b>>>18),b=y+(E^_&(k^E))+x[12]+2368359562&4294967295,y=k+(b<<20&4294967295|b>>>12),b=_+(y^k^E)+x[5]+4294588738&4294967295,_=y+(b<<4&4294967295|b>>>28),b=E+(_^y^k)+x[8]+2272392833&4294967295,E=_+(b<<11&4294967295|b>>>21),b=k+(E^_^y)+x[11]+1839030562&4294967295,k=E+(b<<16&4294967295|b>>>16),b=y+(k^E^_)+x[14]+4259657740&4294967295,y=k+(b<<23&4294967295|b>>>9),b=_+(y^k^E)+x[1]+2763975236&4294967295,_=y+(b<<4&4294967295|b>>>28),b=E+(_^y^k)+x[4]+1272893353&4294967295,E=_+(b<<11&4294967295|b>>>21),b=k+(E^_^y)+x[7]+4139469664&4294967295,k=E+(b<<16&4294967295|b>>>16),b=y+(k^E^_)+x[10]+3200236656&4294967295,y=k+(b<<23&4294967295|b>>>9),b=_+(y^k^E)+x[13]+681279174&4294967295,_=y+(b<<4&4294967295|b>>>28),b=E+(_^y^k)+x[0]+3936430074&4294967295,E=_+(b<<11&4294967295|b>>>21),b=k+(E^_^y)+x[3]+3572445317&4294967295,k=E+(b<<16&4294967295|b>>>16),b=y+(k^E^_)+x[6]+76029189&4294967295,y=k+(b<<23&4294967295|b>>>9),b=_+(y^k^E)+x[9]+3654602809&4294967295,_=y+(b<<4&4294967295|b>>>28),b=E+(_^y^k)+x[12]+3873151461&4294967295,E=_+(b<<11&4294967295|b>>>21),b=k+(E^_^y)+x[15]+530742520&4294967295,k=E+(b<<16&4294967295|b>>>16),b=y+(k^E^_)+x[2]+3299628645&4294967295,y=k+(b<<23&4294967295|b>>>9),b=_+(k^(y|~E))+x[0]+4096336452&4294967295,_=y+(b<<6&4294967295|b>>>26),b=E+(y^(_|~k))+x[7]+1126891415&4294967295,E=_+(b<<10&4294967295|b>>>22),b=k+(_^(E|~y))+x[14]+2878612391&4294967295,k=E+(b<<15&4294967295|b>>>17),b=y+(E^(k|~_))+x[5]+4237533241&4294967295,y=k+(b<<21&4294967295|b>>>11),b=_+(k^(y|~E))+x[12]+1700485571&4294967295,_=y+(b<<6&4294967295|b>>>26),b=E+(y^(_|~k))+x[3]+2399980690&4294967295,E=_+(b<<10&4294967295|b>>>22),b=k+(_^(E|~y))+x[10]+4293915773&4294967295,k=E+(b<<15&4294967295|b>>>17),b=y+(E^(k|~_))+x[1]+2240044497&4294967295,y=k+(b<<21&4294967295|b>>>11),b=_+(k^(y|~E))+x[8]+1873313359&4294967295,_=y+(b<<6&4294967295|b>>>26),b=E+(y^(_|~k))+x[15]+4264355552&4294967295,E=_+(b<<10&4294967295|b>>>22),b=k+(_^(E|~y))+x[6]+2734768916&4294967295,k=E+(b<<15&4294967295|b>>>17),b=y+(E^(k|~_))+x[13]+1309151649&4294967295,y=k+(b<<21&4294967295|b>>>11),b=_+(k^(y|~E))+x[4]+4149444226&4294967295,_=y+(b<<6&4294967295|b>>>26),b=E+(y^(_|~k))+x[11]+3174756917&4294967295,E=_+(b<<10&4294967295|b>>>22),b=k+(_^(E|~y))+x[2]+718787259&4294967295,k=E+(b<<15&4294967295|b>>>17),b=y+(E^(k|~_))+x[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(k+(b<<21&4294967295|b>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+E&4294967295}s.prototype.v=function(w,_){_===void 0&&(_=w.length);const y=_-this.blockSize,x=this.C;let k=this.h,E=0;for(;E<_;){if(k==0)for(;E<=y;)r(this,w,E),E+=this.blockSize;if(typeof w=="string"){for(;E<_;)if(x[k++]=w.charCodeAt(E++),k==this.blockSize){r(this,x),k=0;break}}else for(;E<_;)if(x[k++]=w[E++],k==this.blockSize){r(this,x),k=0;break}}this.h=k,this.o+=_},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,y=0;y<4;++y)for(let x=0;x<32;x+=8)w[_++]=this.g[y]>>>x&255;return w};function i(w,_){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=_(w)}function c(w,_){this.h=_;const y=[];let x=!0;for(let k=w.length-1;k>=0;k--){const E=w[k]|0;x&&E==_||(y[k]=E,x=!1)}this.g=y}var l={};function d(w){return-128<=w&&w<128?i(w,function(_){return new c([_|0],_<0?-1:0)}):new c([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return A(h(-w));const _=[];let y=1;for(let x=0;w>=y;x++)_[x]=w/y|0,y*=4294967296;return new c(_,0)}function m(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return A(m(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(_,8));let x=p;for(let E=0;E<w.length;E+=8){var k=Math.min(8,w.length-E);const b=parseInt(w.substring(E,E+k),_);k<8?(k=h(Math.pow(_,k)),x=x.j(k).add(h(b))):(x=x.j(y),x=x.add(h(b)))}return x}var p=d(0),v=d(1),T=d(16777216);n=c.prototype,n.m=function(){if(j(this))return-A(this).m();let w=0,_=1;for(let y=0;y<this.g.length;y++){const x=this.i(y);w+=(x>=0?x:4294967296+x)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(j(this))return"-"+A(this).toString(w);const _=h(Math.pow(w,6));var y=this;let x="";for(;;){const k=D(y,_).g;y=B(y,k.j(_));let E=((y.g.length>0?y.g[0]:y.h)>>>0).toString(w);if(y=k,S(y))return E+x;for(;E.length<6;)E="0"+E;x=E+x}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function j(w){return w.h==-1}n.l=function(w){return w=B(this,w),j(w)?-1:S(w)?0:1};function A(w){const _=w.g.length,y=[];for(let x=0;x<_;x++)y[x]=~w.g[x];return new c(y,~w.h).add(v)}n.abs=function(){return j(this)?A(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),y=[];let x=0;for(let k=0;k<=_;k++){let E=x+(this.i(k)&65535)+(w.i(k)&65535),b=(E>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);x=b>>>16,E&=65535,b&=65535,y[k]=b<<16|E}return new c(y,y[y.length-1]&-2147483648?-1:0)};function B(w,_){return w.add(A(_))}n.j=function(w){if(S(this)||S(w))return p;if(j(this))return j(w)?A(this).j(A(w)):A(A(this).j(w));if(j(w))return A(this.j(A(w)));if(this.l(T)<0&&w.l(T)<0)return h(this.m()*w.m());const _=this.g.length+w.g.length,y=[];for(var x=0;x<2*_;x++)y[x]=0;for(x=0;x<this.g.length;x++)for(let k=0;k<w.g.length;k++){const E=this.i(x)>>>16,b=this.i(x)&65535,se=w.i(k)>>>16,_e=w.i(k)&65535;y[2*x+2*k]+=b*_e,R(y,2*x+2*k),y[2*x+2*k+1]+=E*_e,R(y,2*x+2*k+1),y[2*x+2*k+1]+=b*se,R(y,2*x+2*k+1),y[2*x+2*k+2]+=E*se,R(y,2*x+2*k+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new c(y,0)};function R(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function L(w,_){this.g=w,this.h=_}function D(w,_){if(S(_))throw Error("division by zero");if(S(w))return new L(p,p);if(j(w))return _=D(A(w),_),new L(A(_.g),A(_.h));if(j(_))return _=D(w,A(_)),new L(A(_.g),_.h);if(w.g.length>30){if(j(w)||j(_))throw Error("slowDivide_ only works with positive integers.");for(var y=v,x=_;x.l(w)<=0;)y=W(y),x=W(x);var k=K(y,1),E=K(x,1);for(x=K(x,2),y=K(y,2);!S(x);){var b=E.add(x);b.l(w)<=0&&(k=k.add(y),E=b),x=K(x,1),y=K(y,1)}return _=B(w,k.j(_)),new L(k,_)}for(k=p;w.l(_)>=0;){for(y=Math.max(1,Math.floor(w.m()/_.m())),x=Math.ceil(Math.log(y)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),E=h(y),b=E.j(_);j(b)||b.l(w)>0;)y-=x,E=h(y),b=E.j(_);S(E)&&(E=v),k=k.add(E),w=B(w,b)}return new L(k,w)}n.B=function(w){return D(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let x=0;x<_;x++)y[x]=this.i(x)&w.i(x);return new c(y,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let x=0;x<_;x++)y[x]=this.i(x)|w.i(x);return new c(y,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let x=0;x<_;x++)y[x]=this.i(x)^w.i(x);return new c(y,this.h^w.h)};function W(w){const _=w.g.length+1,y=[];for(let x=0;x<_;x++)y[x]=w.i(x)<<1|w.i(x-1)>>>31;return new c(y,w.h)}function K(w,_){const y=_>>5;_%=32;const x=w.g.length-y,k=[];for(let E=0;E<x;E++)k[E]=_>0?w.i(E+y)>>>_|w.i(E+y+1)<<32-_:w.i(E+y);return new c(k,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,wf=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=h,c.fromString=m,Fn=c}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});var Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ef,Tr,If,Hi,Wa,Tf,Af,Sf;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ri=="object"&&Ri];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var f=s;o=o.split(".");for(var g=0;g<o.length-1;g++){var N=o[g];if(!(N in f))break e;f=f[N]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},c=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=d,h.apply(null,arguments)}function m(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,N,C){for(var z=Array(arguments.length-2),re=2;re<arguments.length;re++)z[re-2]=arguments[re];return u.prototype[N].apply(g,z)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function S(o,u){for(let g=1;g<arguments.length;g++){const N=arguments[g];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=o.length||0;const C=N.length||0;o.length=f+C;for(let z=0;z<C;z++)o[f+z]=N[z]}else o.push(N)}}class j{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function A(o){c.setTimeout(()=>{throw o},0)}function B(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class R{constructor(){this.h=this.g=null}add(u,f){const g=L.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var L=new j(()=>new D,o=>o.reset());class D{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let W,K=!1,w=new R,_=()=>{const o=Promise.resolve(void 0);W=()=>{o.then(y)}};function y(){for(var o;o=B();){try{o.h.call(o.g)}catch(f){A(f)}var u=L;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}K=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function se(o,u){k.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(se,k),se.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _e="closure_listenable_"+(Math.random()*1e6|0),ct=0;function vt(o,u,f,g,N){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=N,this.key=++ct,this.da=this.fa=!1}function ie(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ve(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function xe(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function we(o){const u={};for(const f in o)u[f]=o[f];return u}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(o,u){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)o[f]=g[f];for(let C=0;C<Y.length;C++)f=Y[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function et(o){this.src=o,this.g={},this.h=0}et.prototype.add=function(o,u,f,g,N){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const z=Ve(o,u,g,N);return z>-1?(u=o[z],f||(u.fa=!1)):(u=new vt(u,this.src,C,!!g,N),u.fa=f,o.push(u)),u};function Ke(o,u){const f=u.type;if(f in o.g){var g=o.g[f],N=Array.prototype.indexOf.call(g,u,void 0),C;(C=N>=0)&&Array.prototype.splice.call(g,N,1),C&&(ie(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Ve(o,u,f,g){for(let N=0;N<o.length;++N){const C=o[N];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return N}return-1}var mt="closure_lm_"+(Math.random()*1e6|0),ze={};function Pt(o,u,f,g,N){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Pt(o,u[C],f,g,N);return null}return f=lt(f),o&&o[_e]?o.J(u,f,l(g)?!!g.capture:!1,N):$t(o,u,f,!1,g,N)}function $t(o,u,f,g,N,C){if(!u)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let re=he(o);if(re||(o[mt]=re=new et(o)),f=re.add(u,f,g,z,C),f.proxy)return f;if(g=ln(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)E||(N=z),N===void 0&&(N=!1),o.addEventListener(u.toString(),g,N);else if(o.attachEvent)o.attachEvent(Bt(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ln(){function o(f){return u.call(o.src,o.listener,f)}const u=Is;return o}function jt(o,u,f,g,N){if(Array.isArray(u))for(var C=0;C<u.length;C++)jt(o,u[C],f,g,N);else g=l(g)?!!g.capture:!!g,f=lt(f),o&&o[_e]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],f=Ve(u,f,g,N),f>-1&&(ie(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=he(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ve(u,f,g,N)),(f=o>-1?u[o]:null)&&Vt(f))}function Vt(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[_e])Ke(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(Bt(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=he(u))?(Ke(f,o),f.h==0&&(f.src=null,u[mt]=null)):ie(o)}}}function Bt(o){return o in ze?ze[o]:ze[o]="on"+o}function Is(o,u){if(o.da)o=!0;else{u=new se(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&Vt(o),o=f.call(g,u)}return o}function he(o){return o=o[mt],o instanceof et?o:null}var St="__closure_events_fn_"+(Math.random()*1e9>>>0);function lt(o){return typeof o=="function"?o:(o[St]||(o[St]=function(u){return o.handleEvent(u)}),o[St])}function $e(){x.call(this),this.i=new et(this),this.M=this,this.G=null}p($e,x),$e.prototype[_e]=!0,$e.prototype.removeEventListener=function(o,u,f,g){jt(this,o,u,f,g)};function Pe(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new k(u,o);else if(u instanceof k)u.target=u.target||o;else{var N=u;u=new k(g,o),de(u,N)}N=!0;let C,z;if(f)for(z=f.length-1;z>=0;z--)C=u.g=f[z],N=Lt(C,g,!0,u)&&N;if(C=u.g=o,N=Lt(C,g,!0,u)&&N,N=Lt(C,g,!1,u)&&N,f)for(z=0;z<f.length;z++)C=u.g=f[z],N=Lt(C,g,!1,u)&&N}$e.prototype.N=function(){if($e.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)ie(f[g]);delete o.g[u],o.h--}}this.G=null},$e.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},$e.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Lt(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let N=!0;for(let C=0;C<u.length;++C){const z=u[C];if(z&&!z.da&&z.capture==f){const re=z.listener,tt=z.ha||z.src;z.fa&&Ke(o.i,z),N=re.call(tt,g)!==!1&&N}}return N&&!g.defaultPrevented}function Ts(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:c.setTimeout(o,u||0)}function es(o){o.g=Ts(()=>{o.g=null,o.i&&(o.i=!1,es(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class As extends x{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:es(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(o){x.call(this),this.h=o,this.g={}}p(un,x);var ts=[];function ns(o){ve(o.g,function(u,f){this.g.hasOwnProperty(f)&&Vt(u)},o),o.g={}}un.prototype.N=function(){un.Z.N.call(this),ns(this)},un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=c.JSON.stringify,or=c.JSON.parse,ss=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ht(){}function dn(){}var F={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function I(){k.call(this,"d")}p(I,k);function P(){k.call(this,"c")}p(P,k);var q={},ne=null;function ye(){return ne=ne||new $e}q.Ia="serverreachability";function fe(o){k.call(this,q.Ia,o)}p(fe,k);function pe(o){const u=ye();Pe(u,new fe(u))}q.STAT_EVENT="statevent";function Le(o,u){k.call(this,q.STAT_EVENT,o),this.stat=u}p(Le,k);function $(o){const u=ye();Pe(u,new Le(u,o))}q.Ja="timingevent";function ke(o,u){k.call(this,q.Ja,o),this.size=u}p(ke,k);function Re(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ge(){this.g=!0}ge.prototype.ua=function(){this.g=!1};function Be(o,u,f,g,N,C){o.info(function(){if(o.g)if(C){var z="",re=C.split("&");for(let be=0;be<re.length;be++){var tt=re[be].split("=");if(tt.length>1){const it=tt[0];tt=tt[1];const Jt=it.split("_");z=Jt.length>=2&&Jt[1]=="type"?z+(it+"="+tt+"&"):z+(it+"=redacted&")}}}else z=null;else z=C;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+u+`
`+f+`
`+z})}function He(o,u,f,g,N,C,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+u+`
`+f+`
`+C+" "+z})}function rt(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nt(o,f)+(g?" "+g:"")})}function xt(o,u){o.info(function(){return"TIMEOUT: "+u})}ge.prototype.info=function(){};function Nt(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var f=C[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return Ge(C)}catch{return u}}var je={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},rs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mt;function hn(){}p(hn,Ht),hn.prototype.g=function(){return new XMLHttpRequest},Mt=new hn;function Je(o){return encodeURIComponent(String(o))}function Wt(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function Ee(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}var qt={},is={};function ar(o,u,f){o.M=1,o.A=bi(Gt(u)),o.u=f,o.R=!0,cr(o,null)}function cr(o,u){o.F=Date.now(),oe(o),o.B=Gt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Sl(f.i,"t",g),o.C=0,f=o.j.L,o.h=new wt,o.g=ql(o.j,f?u:null,!o.u),o.P>0&&(o.O=new As(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(ts[0]=N.toString()),N=ts);for(let C=0;C<N.length;C++){const z=Pt(f,N[C],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.J?we(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),pe(),Be(o.i,o.v,o.B,o.l,o.S,o.u)}Ee.prototype.ba=function(o){o=o.target;const u=this.O;u&&Cn(o)==3?u.j():this.Y(o)},Ee.prototype.Y=function(o){try{if(o==this.g)e:{const re=Cn(this.g),tt=this.g.ya(),be=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Ol(this.g)))){this.K||re!=4||tt==7||(tt==8||be<=0?pe(3):pe(2)),Ie(this);var u=this.g.ca();this.X=u;var f=Yo(this);if(this.o=u==200,He(this.i,this.v,this.B,this.l,this.S,re,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(g)){var C=g;break t}}C=null}if(o=C)rt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Kt(this,o);else{this.o=!1,this.m=3,$(12),Me(this),pt(this);break e}}if(this.R){o=!0;let it;for(;!this.K&&this.C<f.length;)if(it=Z(this,f),it==is){re==4&&(this.m=4,$(14),o=!1),rt(this.i,this.l,null,"[Incomplete Response]");break}else if(it==qt){this.m=4,$(15),rt(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else rt(this.i,this.l,it,null),Kt(this,it);if(yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||f.length!=0||this.h.h||(this.m=1,$(16),o=!1),this.o=this.o&&o,!o)rt(this.i,this.l,f,"[Invalid Chunked Response]"),Me(this),pt(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ra(z),z.P=!0,$(11))}}else rt(this.i,this.l,f,null),Kt(this,f);re==4&&Me(this),this.o&&!this.K&&(re==4?$l(this.j,this):(this.o=!1,oe(this)))}else xp(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,$(12)):(this.m=0,$(13)),Me(this),pt(this)}}}catch{}finally{}};function Yo(o){if(!yi(o))return o.g.la();const u=Ol(o.g);if(u==="")return"";let f="";const g=u.length,N=Cn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Me(o),pt(o),"";o.h.i=new c.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,f+=o.h.i.decode(u[C],{stream:!(N&&C==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function yi(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Z(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?is:(f=Number(u.substring(f,g)),isNaN(f)?qt:(g+=1,g+f>u.length?is:(u=u.slice(g,g+f),o.C=g+f,u)))}Ee.prototype.cancel=function(){this.K=!0,Me(this)};function oe(o){o.T=Date.now()+o.H,We(o,o.H)}function We(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Re(h(o.aa,o),u)}function Ie(o){o.D&&(c.clearTimeout(o.D),o.D=null)}Ee.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(xt(this.i,this.B),this.M!=2&&(pe(),$(17)),Me(this),this.m=2,pt(this)):We(this,this.T-o)};function pt(o){o.j.I==0||o.K||$l(o.j,o)}function Me(o){Ie(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,ns(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Kt(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Qo(f.h,o))){if(!o.L&&Qo(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)wi(f),ki(f);else break e;sa(f),$(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Re(h(f.Va,f),6e3));vl(f.h)<=1&&f.ta&&(f.ta=void 0)}else as(f,11)}else if((o.L||f.g==o)&&wi(f),!b(u))for(N=f.Ba.g.parse(u),u=0;u<N.length;u++){let be=N[u];const it=be[0];if(!(it<=f.K))if(f.K=it,be=be[1],f.I==2)if(be[0]=="c"){f.M=be[1],f.ba=be[2];const Jt=be[3];Jt!=null&&(f.ka=Jt,f.j.info("VER="+f.ka));const cs=be[4];cs!=null&&(f.za=cs,f.j.info("SVER="+f.za));const Pn=be[5];Pn!=null&&typeof Pn=="number"&&Pn>0&&(g=1.5*Pn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const jn=o.g;if(jn){const Ii=jn.g?jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var C=g.h;C.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Xo(C,C.h),C.h=null))}if(g.G){const ia=jn.g?jn.g.getResponseHeader("X-HTTP-Session-Id"):null;ia&&(g.wa=ia,Te(g.J,g.G,ia))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=o;if(g.na=Wl(g,g.L?g.ba:null,g.W),z.L){kl(g.h,z);var re=z,tt=g.O;tt&&(re.H=tt),re.D&&(Ie(re),oe(re)),g.g=z}else Fl(g);f.i.length>0&&xi(f)}else be[0]!="stop"&&be[0]!="close"||as(f,7);else f.I==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?as(f,7):na(f):be[0]!="noop"&&f.l&&f.l.qa(be),f.A=0)}}pe(4)}catch{}}var lp=class{constructor(o,u){this.g=o,this.map=u}};function bl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _l(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vl(o){return o.h?1:o.g?o.g.size:0}function Qo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Xo(o,u){o.g?o.g.add(u):o.h=u}function kl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}bl.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return T(o.i)}var wl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function up(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let N,C=null;g>=0?(N=o[f].substring(0,g),C=o[f].substring(g+1)):N=o[f],u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Nn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Nn?(this.l=o.l,lr(this,o.j),this.o=o.o,this.g=o.g,ur(this,o.u),this.h=o.h,Zo(this,Nl(o.i)),this.m=o.m):o&&(u=String(o).match(wl))?(this.l=!1,lr(this,u[1]||"",!0),this.o=dr(u[2]||""),this.g=dr(u[3]||"",!0),ur(this,u[4]),this.h=dr(u[5]||"",!0),Zo(this,u[6]||"",!0),this.m=dr(u[7]||"")):(this.l=!1,this.i=new fr(null,this.l))}Nn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(hr(u,El,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(hr(u,El,!0),"@"),o.push(Je(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(hr(f,f.charAt(0)=="/"?fp:hp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",hr(f,pp)),o.join("")},Nn.prototype.resolve=function(o){const u=Gt(this);let f=!!o.j;f?lr(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)ur(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=u.h.lastIndexOf("/");N!=-1&&(g=u.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const C=[];for(let z=0;z<N.length;){const re=N[z++];re=="."?g&&z==N.length&&C.push(""):re==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&z==N.length&&C.push("")):(C.push(re),g=!0)}g=C.join("/")}else g=N}return f?u.h=g:f=o.i.toString()!=="",f?Zo(u,Nl(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Gt(o){return new Nn(o)}function lr(o,u,f){o.j=f?dr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ur(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Zo(o,u,f){u instanceof fr?(o.i=u,gp(o.i,o.l)):(f||(u=hr(u,mp)),o.i=new fr(u,o.l))}function Te(o,u,f){o.i.set(u,f)}function bi(o){return Te(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function dr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,dp),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var El=/[#\/\?@]/g,hp=/[#\?:]/g,fp=/[#\?]/g,mp=/[#\?@]/g,pp=/#/g;function fr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function os(o){o.g||(o.g=new Map,o.h=0,o.i&&up(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=fr.prototype,n.add=function(o,u){os(this),this.i=null,o=Ss(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Il(o,u){os(o),u=Ss(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Tl(o,u){return os(o),u=Ss(o,u),o.g.has(u)}n.forEach=function(o,u){os(this),this.g.forEach(function(f,g){f.forEach(function(N){o.call(u,N,g,this)},this)},this)};function Al(o,u){os(o);let f=[];if(typeof u=="string")Tl(o,u)&&(f=f.concat(o.g.get(Ss(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return os(this),this.i=null,o=Ss(this,o),Tl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Al(this,o),o.length>0?String(o[0]):u):u};function Sl(o,u,f){Il(o,u),f.length>0&&(o.i=null,o.g.set(Ss(o,u),T(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const N=Je(f);f=Al(this,f);for(let C=0;C<f.length;C++){let z=N;f[C]!==""&&(z+="="+Je(f[C])),o.push(z)}}return this.i=o.join("&")};function Nl(o){const u=new fr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Ss(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function gp(o,u){u&&!o.j&&(os(o),o.i=null,o.g.forEach(function(f,g){const N=g.toLowerCase();g!=N&&(Il(this,g),Sl(this,N,f))},o)),o.j=u}function yp(o,u){const f=new ge;if(c.Image){const g=new Image;g.onload=m(Rn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=m(Rn,f,"TestLoadImage: error",!1,u,g),g.onabort=m(Rn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=m(Rn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function bp(o,u){const f=new ge,g=new AbortController,N=setTimeout(()=>{g.abort(),Rn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(N),C.ok?Rn(f,"TestPingServer: ok",!0,u):Rn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(N),Rn(f,"TestPingServer: error",!1,u)})}function Rn(o,u,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function _p(){this.g=new ss}function ea(o){this.i=o.Sb||null,this.h=o.ab||!1}p(ea,Ht),ea.prototype.g=function(){return new _i(this.i,this.h)};function _i(o,u){$e.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(_i,$e),n=_i.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,pr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||c).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?mr(this):pr(this),this.readyState==3&&Rl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,mr(this))},n.Na=function(o){this.g&&(this.response=o,mr(this))},n.ga=function(){this.g&&mr(this)};function mr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,pr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Cl(o){let u="";return ve(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ta(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Cl(f),typeof o=="string"?f!=null&&Je(f):Te(o,u,f))}function Ue(o){$e.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ue,$e);var vp=/^https?$/i,kp=["POST","PUT"];n=Ue.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mt.g(),this.g.onreadystatechange=v(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Pl(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),N=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(kp,u,void 0)>=0)||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,z]of f)this.g.setRequestHeader(C,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Pl(this,C)}};function Pl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,jl(o),vi(o)}function jl(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Pe(this,"complete"),Pe(this,"abort"),vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),Ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Dl(this):this.Xa())},n.Xa=function(){Dl(this)};function Dl(o){if(o.h&&typeof i<"u"){if(o.v&&Cn(o)==4)setTimeout(o.Ca.bind(o),0);else if(Pe(o,"readystatechange"),Cn(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=C===0){let z=String(o.D).match(wl)[1]||null;!z&&c.self&&c.self.location&&(z=c.self.location.protocol.slice(0,-1)),g=!vp.test(z?z.toLowerCase():"")}f=g}if(f)Pe(o,"complete"),Pe(o,"success");else{o.o=6;try{var N=Cn(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",jl(o)}}finally{vi(o)}}}}function vi(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||Pe(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Cn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Cn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),or(u)}};function Ol(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xp(o){const u={};o=(o.g&&Cn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(b(o[g]))continue;var f=Wt(o[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[N]||[];u[N]=C,C.push(f)}xe(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Vl(o){this.za=0,this.i=[],this.j=new ge,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gr("baseRetryDelayMs",5e3,o),this.Za=gr("retryDelaySeedMs",1e4,o),this.Ta=gr("forwardChannelMaxRetries",2,o),this.va=gr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new bl(o&&o.concurrentRequestLimit),this.Ba=new _p,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Vl.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,g){$(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Wl(this,null,this.W),xi(this)};function na(o){if(Ll(o),o.I==3){var u=o.V++,f=Gt(o.J);if(Te(f,"SID",o.M),Te(f,"RID",u),Te(f,"TYPE","terminate"),yr(o,f),u=new Ee(o,o.j,u),u.M=2,u.A=bi(Gt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.A,f=!0),f||(u.g=ql(u.j,null),u.g.ea(u.A)),u.F=Date.now(),oe(u)}Hl(o)}function ki(o){o.g&&(ra(o),o.g.cancel(),o.g=null)}function Ll(o){ki(o),o.v&&(c.clearTimeout(o.v),o.v=null),wi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function xi(o){if(!_l(o.h)&&!o.m){o.m=!0;var u=o.Ea;W||_(),K||(W(),K=!0),w.add(u,o),o.D=0}}function wp(o,u){return vl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Re(h(o.Ea,o,u),Bl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new Ee(this,this.j,o);let C=this.o;if(this.U&&(C?(C=we(C),de(C,this.U)):C=this.U),this.u!==null||this.R||(N.J=C,C=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ul(this,N,u),f=Gt(this.J),Te(f,"RID",o),Te(f,"CVER",22),this.G&&Te(f,"X-HTTP-Session-Id",this.G),yr(this,f),C&&(this.R?u="headers="+Je(Cl(C))+"&"+u:this.u&&ta(f,this.u,C)),Xo(this.h,N),this.Ra&&Te(f,"TYPE","init"),this.S?(Te(f,"$req",u),Te(f,"SID","null"),N.U=!0,ar(N,f,null)):ar(N,f,u),this.I=2}}else this.I==3&&(o?Ml(this,o):this.i.length==0||_l(this.h)||Ml(this))};function Ml(o,u){var f;u?f=u.l:f=o.V++;const g=Gt(o.J);Te(g,"SID",o.M),Te(g,"RID",f),Te(g,"AID",o.K),yr(o,g),o.u&&o.o&&ta(g,o.u,o.o),f=new Ee(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Ul(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Xo(o.h,f),ar(f,g,u)}function yr(o,u){o.H&&ve(o.H,function(f,g){Te(u,g,f)}),o.l&&ve({},function(f,g){Te(u,g,f)})}function Ul(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var N=o.i;let re=-1;for(;;){const tt=["count="+f];re==-1?f>0?(re=N[0].g,tt.push("ofs="+re)):re=0:tt.push("ofs="+re);let be=!0;for(let it=0;it<f;it++){var C=N[it].g;const Jt=N[it].map;if(C-=re,C<0)re=Math.max(0,N[it].g-100),be=!1;else try{C="req"+C+"_"||"";try{var z=Jt instanceof Map?Jt:Object.entries(Jt);for(const[cs,Pn]of z){let jn=Pn;l(Pn)&&(jn=Ge(Pn)),tt.push(C+cs+"="+encodeURIComponent(jn))}}catch(cs){throw tt.push(C+"type="+encodeURIComponent("_badmap")),cs}}catch{g&&g(Jt)}}if(be){z=tt.join("&");break e}}z=void 0}return o=o.i.splice(0,f),u.G=o,z}function Fl(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;W||_(),K||(W(),K=!0),w.add(u,o),o.A=0}}function sa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Re(h(o.Da,o),Bl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,zl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Re(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$(10),ki(this),zl(this))};function ra(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function zl(o){o.g=new Ee(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Gt(o.na);Te(u,"RID","rpc"),Te(u,"SID",o.M),Te(u,"AID",o.K),Te(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Te(u,"TO",o.ia),Te(u,"TYPE","xmlhttp"),yr(o,u),o.u&&o.o&&ta(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=bi(Gt(u)),f.u=null,f.R=!0,cr(f,o)}n.Va=function(){this.C!=null&&(this.C=null,ki(this),sa(this),$(19))};function wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function $l(o,u){var f=null;if(o.g==u){wi(o),ra(o),o.g=null;var g=2}else if(Qo(o.h,u))f=u.G,kl(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var N=o.D;g=ye(),Pe(g,new ke(g,f)),xi(o)}else Fl(o);else if(N=u.m,N==3||N==0&&u.X>0||!(g==1&&wp(o,u)||g==2&&sa(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),N){case 1:as(o,5);break;case 4:as(o,10);break;case 3:as(o,6);break;default:as(o,2)}}}function Bl(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function as(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const N=!g;g=new Nn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||lr(g,"https"),bi(g),N?yp(g.toString(),f):bp(g.toString(),f)}else $(2);o.I=0,o.l&&o.l.pa(u),Hl(o),Ll(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),$(2)):(this.j.info("Failed to ping google.com"),$(1))};function Hl(o){if(o.I=0,o.ja=[],o.l){const u=xl(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ja,u),S(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function Wl(o,u,f){var g=f instanceof Nn?Gt(f):new Nn(f);if(g.g!="")u&&(g.g=u+"."+g.g),ur(g,g.u);else{var N=c.location;g=N.protocol,u=u?u+"."+N.hostname:N.hostname,N=+N.port;const C=new Nn(null);g&&lr(C,g),u&&(C.g=u),N&&ur(C,N),f&&(C.h=f),g=C}return f=o.G,u=o.wa,f&&u&&Te(g,f,u),Te(g,"VER",o.ka),yr(o,g),g}function ql(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Ue(new ea({ab:f})):new Ue(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kl(){}n=Kl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ei(){}Ei.prototype.g=function(o,u){return new Rt(o,u)};function Rt(o,u){$e.call(this),this.g=new Vl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!b(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ns(this)}p(Rt,$e),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){na(this.g)},Rt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Ge(o),o=f);u.i.push(new lp(u.Ya++,o)),u.I==3&&xi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,Rt.Z.N.call(this)};function Gl(o){I.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Gl,I);function Jl(){P.call(this),this.status=1}p(Jl,P);function Ns(o){this.g=o}p(Ns,Kl),Ns.prototype.ra=function(){Pe(this.g,"a")},Ns.prototype.qa=function(o){Pe(this.g,new Gl(o))},Ns.prototype.pa=function(o){Pe(this.g,new Jl)},Ns.prototype.oa=function(){Pe(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Sf=function(){return new Ei},Af=function(){return ye()},Tf=q,Wa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},je.NO_ERROR=0,je.TIMEOUT=8,je.HTTP_ERROR=6,Hi=je,rs.COMPLETE="complete",If=rs,dn.EventType=F,F.OPEN="a",F.CLOSE="b",F.ERROR="c",F.MESSAGE="d",$e.prototype.listen=$e.prototype.J,Tr=dn,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Ef=Ue}).apply(typeof Ri<"u"?Ri:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr="12.13.0";function Gk(n){nr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new gc("@firebase/firestore");function Rs(){return vs.logLevel}function H(n,...e){if(vs.logLevel<=le.DEBUG){const t=e.map(Mc);vs.debug(`Firestore (${nr}): ${n}`,...t)}}function En(n,...e){if(vs.logLevel<=le.ERROR){const t=e.map(Mc);vs.error(`Firestore (${nr}): ${n}`,...t)}}function ks(n,...e){if(vs.logLevel<=le.WARN){const t=e.map(Mc);vs.warn(`Firestore (${nr}): ${n}`,...t)}}function Mc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Nf(n,s,t)}function Nf(n,e,t){let s=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw En(s),new Error(s)}function me(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Nf(e,r,s)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(yt.UNAUTHENTICATED)))}shutdown(){}}class Yk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qk{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let s=this.i;const r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable((()=>r(this.currentUser)))};const c=()=>{const d=i;e.enqueueRetryable((async()=>{await d.promise,await r(this.currentUser)}))},l=d=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string",31837,{l:s}),new Rf(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class Xk{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Zk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Xk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const s=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const c=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=t0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ae(n,e){return n<e?-1:n>e?1:0}function qa(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return va(r)===va(i)?ae(r,i):va(r)?1:-1}return ae(n.length,e.length)}const n0=55296,s0=57343;function va(n){const e=n.charCodeAt(0);return e>=n0&&e<=s0}function Hs(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="__name__";class Qt{constructor(e,t,s){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Qt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ae(e.length,t.length)}static compareSegments(e,t){const s=Qt.isNumericId(e),r=Qt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Qt.extractNumericId(e).compare(Qt.extractNumericId(t)):qa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fn.fromString(e.substring(4,e.length-2))}}class De extends Qt{construct(e,t,s){return new De(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new De(t)}static emptyPath(){return new De([])}}const r0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Qt{construct(e,t,s){return new ht(e,t,s)}static isValidIdentifier(e){return r0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ku}static keyField(){return new ht([Ku])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else l==="`"?(c=!c,r++):l!=="."||c?(s+=l,r++):(i(),r++)}if(i(),c)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(t)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(De.fromString(e))}static fromName(e){return new J(De.fromString(e).popFirst(5))}static empty(){return new J(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n,e,t){if(!t)throw new G(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function o0(n,e,t,s){if(e===!0&&s===!0)throw new G(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gu(n){if(!J.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Cf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function Zt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fc(n);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function di(n,e){if(!Cf(n))throw new G(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(r&&typeof c!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&c!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new G(M.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=-62135596800,Yu=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Yu);return new Ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ju)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yu}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(di(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ju;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Xe("string",Ae._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ae(0,0))}static max(){return new ee(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=-1;function a0(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Ae(t+1,0):new Ae(t,s));return new Hn(r,J.empty(),e)}function c0(n){return new Hn(n.readTime,n.key,qr)}class Hn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Hn(ee.min(),J.empty(),qr)}static max(){return new Hn(ee.max(),J.empty(),qr)}}function l0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==u0)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):V.reject(t)}static resolve(e){return new V(((t,s)=>{t(e)}))}static reject(e){return new V(((t,s)=>{s(e)}))}static waitFor(e){return new V(((t,s)=>{let r=0,i=0,c=!1;e.forEach((l=>{++r,l.next((()=>{++i,c&&i===r&&t()}),(d=>s(d)))})),c=!0,i===r&&t()}))}static or(e){let t=V.resolve(!1);for(const s of e)t=t.next((r=>r?V.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new V(((s,r)=>{const i=e.length,c=new Array(i);let l=0;for(let d=0;d<i;d++){const h=d;t(e[h]).next((m=>{c[h]=m,++l,l===i&&s(c)}),(m=>r(m)))}}))}static doWhile(e,t){return new V(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function h0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Do.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=-1;function Oo(n){return n==null}function io(n){return n===0&&1/n==-1/0}function f0(n){return typeof n=="number"&&Number.isInteger(n)&&!io(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="";function m0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qu(e)),e=p0(n.get(t),e);return Qu(e)}function p0(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Pf:t+="";break;default:t+=i}}return t}function Qu(n){return n+Pf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Xn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||ut.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ci(this.root,e,this.comparator,!0)}}class Ci{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ut.RED,this.left=r??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ut(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ut.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new ut(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zu(this.data.getIterator())}getIteratorFrom(e){return new Zu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new st(this.comparator);return t.data=e,t}}class Zu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Ct([])}unionWith(e){let t=new st(ht.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Df("Invalid base64 string: "+i):i}})(e);return new ft(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let c=0;c<r.length;++c)i+=String.fromCharCode(r[c]);return i})(e);return new ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const g0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(n){if(me(!!n,39018),typeof n=="string"){let e=0;const t=g0.exec(n);if(me(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qn(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="server_timestamp",Vf="__type__",Lf="__previous_value__",Mf="__local_write_time__";function $c(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Vf])==null?void 0:s.stringValue)===Of}function Vo(n){const e=n.mapValue.fields[Lf];return $c(e)?Vo(e):e}function Kr(n){const e=Wn(n.mapValue.fields[Mf].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t,s,r,i,c,l,d,h,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=p}}const oo="(default)";class Gr{constructor(e,t){this.projectId=e,this.database=t||oo}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database===oo}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}function b0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="__type__",_0="__max__",Pi={mapValue:{}},Ff="__vector__",ao="value";function Kn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$c(n)?4:k0(n)?9007199254740991:v0(n)?10:11:Q(28295,{value:n})}function on(n,e){if(n===e)return!0;const t=Kn(n);if(t!==Kn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kr(n).isEqual(Kr(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const c=Wn(r.timestampValue),l=Wn(i.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return qn(r.bytesValue).isEqual(qn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return qe(r.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(r.geoPointValue.longitude)===qe(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return qe(r.integerValue)===qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const c=qe(r.doubleValue),l=qe(i.doubleValue);return c===l?io(c)===io(l):isNaN(c)&&isNaN(l)}return!1})(n,e);case 9:return Hs(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return(function(r,i){const c=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Xu(c)!==Xu(l))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(l[d]===void 0||!on(c[d],l[d])))return!1;return!0})(n,e);default:return Q(52216,{left:n})}}function Jr(n,e){return(n.values||[]).find((t=>on(t,e)))!==void 0}function Ws(n,e){if(n===e)return 0;const t=Kn(n),s=Kn(e);if(t!==s)return ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ae(n.booleanValue,e.booleanValue);case 2:return(function(i,c){const l=qe(i.integerValue||i.doubleValue),d=qe(c.integerValue||c.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1})(n,e);case 3:return ed(n.timestampValue,e.timestampValue);case 4:return ed(Kr(n),Kr(e));case 5:return qa(n.stringValue,e.stringValue);case 6:return(function(i,c){const l=qn(i),d=qn(c);return l.compareTo(d)})(n.bytesValue,e.bytesValue);case 7:return(function(i,c){const l=i.split("/"),d=c.split("/");for(let h=0;h<l.length&&h<d.length;h++){const m=ae(l[h],d[h]);if(m!==0)return m}return ae(l.length,d.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,c){const l=ae(qe(i.latitude),qe(c.latitude));return l!==0?l:ae(qe(i.longitude),qe(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return td(n.arrayValue,e.arrayValue);case 10:return(function(i,c){var v,T,S,j;const l=i.fields||{},d=c.fields||{},h=(v=l[ao])==null?void 0:v.arrayValue,m=(T=d[ao])==null?void 0:T.arrayValue,p=ae(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((j=m==null?void 0:m.values)==null?void 0:j.length)||0);return p!==0?p:td(h,m)})(n.mapValue,e.mapValue);case 11:return(function(i,c){if(i===Pi.mapValue&&c===Pi.mapValue)return 0;if(i===Pi.mapValue)return 1;if(c===Pi.mapValue)return-1;const l=i.fields||{},d=Object.keys(l),h=c.fields||{},m=Object.keys(h);d.sort(),m.sort();for(let p=0;p<d.length&&p<m.length;++p){const v=qa(d[p],m[p]);if(v!==0)return v;const T=Ws(l[d[p]],h[m[p]]);if(T!==0)return T}return ae(d.length,m.length)})(n.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function ed(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ae(n,e);const t=Wn(n),s=Wn(e),r=ae(t.seconds,s.seconds);return r!==0?r:ae(t.nanos,s.nanos)}function td(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Ws(t[r],s[r]);if(i)return i}return ae(t.length,s.length)}function qs(n){return Ka(n)}function Ka(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Wn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return qn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return J.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Ka(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const c of s)i?i=!1:r+=",",r+=`${c}:${Ka(t.fields[c])}`;return r+"}"})(n.mapValue):Q(61005,{value:n})}function Wi(n){switch(Kn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vo(n);return e?16+Wi(e):16;case 5:return 2*n.stringValue.length;case 6:return qn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Wi(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Xn(s.fields,((i,c)=>{r+=i.length+Wi(c)})),r})(n.mapValue);default:throw Q(13486,{value:n})}}function Ga(n){return!!n&&"integerValue"in n}function Bc(n){return!!n&&"arrayValue"in n}function nd(n){return!!n&&"nullValue"in n}function sd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qi(n){return!!n&&"mapValue"in n}function v0(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Uf])==null?void 0:s.stringValue)===Ff}function Or(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Xn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Or(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Or(n.arrayValue.values[t]);return e}return{...n}}function k0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Or(t)}setAll(e){let t=ht.emptyPath(),s={},r=[];e.forEach(((c,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=l.popLast()}c?s[l.lastSegment()]=Or(c):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];qi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Xn(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Tt(Or(this.value))}}function zf(n){const e=[];return Xn(n.fields,((t,s)=>{const r=new ht([t]);if(qi(s)){const i=zf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const c of i)e.push(r.child(c))}else e.push(r)})),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,r,i,c,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=c,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,ee.min(),ee.min(),ee.min(),Tt.empty(),0)}static newFoundDocument(e,t,s,r){return new bt(e,1,t,ee.min(),s,r,0)}static newNoDocument(e,t){return new bt(e,2,t,ee.min(),ee.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,ee.min(),ee.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.position=e,this.inclusive=t}}function rd(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],c=n.position[r];if(i.field.isKeyField()?s=J.comparator(J.fromName(c.referenceValue),t.key):s=Ws(c,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function id(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t="asc"){this.field=e,this.dir=t}}function x0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{}class nt extends $f{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new E0(e,t,s):t==="array-contains"?new A0(e,s):t==="in"?new S0(e,s):t==="not-in"?new N0(e,s):t==="array-contains-any"?new R0(e,s):new nt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new I0(e,s):new T0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ws(t,this.value)):t!==null&&Kn(this.value)===Kn(t)&&this.matchesComparison(Ws(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends $f{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new an(e,t)}matches(e){return Bf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bf(n){return n.op==="and"}function Hf(n){return w0(n)&&Bf(n)}function w0(n){for(const e of n.filters)if(e instanceof an)return!1;return!0}function Ja(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+qs(n.value);if(Hf(n))return n.filters.map((e=>Ja(e))).join(",");{const e=n.filters.map((t=>Ja(t))).join(",");return`${n.op}(${e})`}}function Wf(n,e){return n instanceof nt?(function(s,r){return r instanceof nt&&s.op===r.op&&s.field.isEqual(r.field)&&on(s.value,r.value)})(n,e):n instanceof an?(function(s,r){return r instanceof an&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,c,l)=>i&&Wf(c,r.filters[l])),!0):!1})(n,e):void Q(19439)}function qf(n){return n instanceof nt?(function(t){return`${t.field.canonicalString()} ${t.op} ${qs(t.value)}`})(n):n instanceof an?(function(t){return t.op.toString()+" {"+t.getFilters().map(qf).join(" ,")+"}"})(n):"Filter"}class E0 extends nt{constructor(e,t,s){super(e,t,s),this.key=J.fromName(s.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class I0 extends nt{constructor(e,t){super(e,"in",t),this.keys=Kf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class T0 extends nt{constructor(e,t){super(e,"not-in",t),this.keys=Kf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Kf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>J.fromName(s.referenceValue)))}class A0 extends nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bc(t)&&Jr(t.arrayValue,this.value)}}class S0 extends nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Jr(this.value.arrayValue,t)}}class N0 extends nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Jr(this.value.arrayValue,t)}}class R0 extends nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Jr(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t=null,s=[],r=[],i=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=c,this.endAt=l,this.Te=null}}function od(n,e=null,t=[],s=[],r=null,i=null,c=null){return new C0(n,e,t,s,r,i,c)}function Hc(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Ja(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>qs(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>qs(s))).join(",")),e.Te=t}return e.Te}function Wc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!x0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!id(n.startAt,e.startAt)&&id(n.endAt,e.endAt)}function Ya(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t=null,s=[],r=[],i=null,c="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=c,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function P0(n,e,t,s,r,i,c,l){return new Lo(n,e,t,s,r,i,c,l)}function Mo(n){return new Lo(n)}function ad(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function j0(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function D0(n){return n.collectionGroup!==null}function Vr(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new st(ht.comparator);return c.filters.forEach((d=>{d.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new lo(i,s))})),t.has(ht.keyField().canonicalString())||e.Ie.push(new lo(ht.keyField(),s))}return e.Ie}function en(n){const e=te(n);return e.Ee||(e.Ee=O0(e,Vr(n))),e.Ee}function O0(n,e){if(n.limitType==="F")return od(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new lo(r.field,i)}));const t=n.endAt?new co(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new co(n.startAt.position,n.startAt.inclusive):null;return od(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Qa(n,e,t){return new Lo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Uo(n,e){return Wc(en(n),en(e))&&n.limitType===e.limitType}function Gf(n){return`${Hc(en(n))}|lt:${n.limitType}`}function Cs(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>qf(r))).join(", ")}]`),Oo(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>qs(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>qs(r))).join(",")),`Target(${s})`})(en(n))}; limitType=${n.limitType})`}function Fo(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):J.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Vr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(c,l,d){const h=rd(c,l,d);return c.inclusive?h<=0:h<0})(s.startAt,Vr(s),r)||s.endAt&&!(function(c,l,d){const h=rd(c,l,d);return c.inclusive?h>=0:h>0})(s.endAt,Vr(s),r))})(n,e)}function V0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jf(n){return(e,t)=>{let s=!1;for(const r of Vr(n)){const i=L0(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function L0(n,e,t){const s=n.field.isKeyField()?J.comparator(e.key,t.key):(function(i,c,l){const d=c.data.field(i),h=l.data.field(i);return d!==null&&h!==null?Ws(d,h):Q(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xn(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return jf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Ce(J.comparator);function In(){return M0}const Yf=new Ce(J.comparator);function Ar(...n){let e=Yf;for(const t of n)e=e.insert(t.key,t);return e}function Qf(n){let e=Yf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function fs(){return Lr()}function Xf(){return Lr()}function Lr(){return new ws((n=>n.toString()),((n,e)=>n.isEqual(e)))}const U0=new Ce(J.comparator),F0=new st(J.comparator);function ce(...n){let e=F0;for(const t of n)e=e.add(t);return e}const z0=new st(ae);function $0(){return z0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:io(e)?"-0":e}}function Zf(n){return{integerValue:""+n}}function B0(n,e){return f0(e)?Zf(e):qc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this._=void 0}}function H0(n,e,t){return n instanceof Yr?(function(r,i){const c={fields:{[Vf]:{stringValue:Of},[Mf]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&$c(i)&&(i=Vo(i)),i&&(c.fields[Lf]=i),{mapValue:c}})(t,e):n instanceof Qr?tm(n,e):n instanceof Xr?nm(n,e):(function(r,i){const c=em(r,i),l=cd(c)+cd(r.Ae);return Ga(c)&&Ga(r.Ae)?Zf(l):qc(r.serializer,l)})(n,e)}function W0(n,e,t){return n instanceof Qr?tm(n,e):n instanceof Xr?nm(n,e):t}function em(n,e){return n instanceof uo?(function(s){return Ga(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Yr extends zo{}class Qr extends zo{constructor(e){super(),this.elements=e}}function tm(n,e){const t=sm(e);for(const s of n.elements)t.some((r=>on(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Xr extends zo{constructor(e){super(),this.elements=e}}function nm(n,e){let t=sm(e);for(const s of n.elements)t=t.filter((r=>!on(r,s)));return{arrayValue:{values:t}}}class uo extends zo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function cd(n){return qe(n.integerValue||n.doubleValue)}function sm(n){return Bc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,t){this.field=e,this.transform=t}}function K0(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Qr&&r instanceof Qr||s instanceof Xr&&r instanceof Xr?Hs(s.elements,r.elements,on):s instanceof uo&&r instanceof uo?on(s.Ae,r.Ae):s instanceof Yr&&r instanceof Yr})(n.transform,e.transform)}class G0{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ki(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $o{}function rm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new om(n.key,tn.none()):new hi(n.key,n.data,tn.none());{const t=n.data,s=Tt.empty();let r=new st(ht.comparator);for(let i of e.fields)if(!r.has(i)){let c=t.field(i);c===null&&i.length>1&&(i=i.popLast(),c=t.field(i)),c===null?s.delete(i):s.set(i,c),r=r.add(i)}return new Zn(n.key,s,new Ct(r.toArray()),tn.none())}}function J0(n,e,t){n instanceof hi?(function(r,i,c){const l=r.value.clone(),d=ud(r.fieldTransforms,i,c.transformResults);l.setAll(d),i.convertToFoundDocument(c.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Zn?(function(r,i,c){if(!Ki(r.precondition,i))return void i.convertToUnknownDocument(c.version);const l=ud(r.fieldTransforms,i,c.transformResults),d=i.data;d.setAll(im(r)),d.setAll(l),i.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):(function(r,i,c){i.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Mr(n,e,t,s){return n instanceof hi?(function(i,c,l,d){if(!Ki(i.precondition,c))return l;const h=i.value.clone(),m=dd(i.fieldTransforms,d,c);return h.setAll(m),c.convertToFoundDocument(c.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof Zn?(function(i,c,l,d){if(!Ki(i.precondition,c))return l;const h=dd(i.fieldTransforms,d,c),m=c.data;return m.setAll(im(i)),m.setAll(h),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(i,c,l){return Ki(i.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l})(n,e,t)}function Y0(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=em(s.transform,r||null);i!=null&&(t===null&&(t=Tt.empty()),t.set(s.field,i))}return t||null}function ld(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Hs(s,r,((i,c)=>K0(i,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hi extends $o{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zn extends $o{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function im(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function ud(n,e,t){const s=new Map;me(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],c=i.transform,l=e.data.field(i.field);s.set(i.field,W0(c,l,t[r]))}return s}function dd(n,e,t){const s=new Map;for(const r of n){const i=r.transform,c=t.data.field(r.field);s.set(r.field,H0(i,c,e))}return s}class om extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q0 extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&J0(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Mr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Mr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Xf();return this.mutations.forEach((r=>{const i=e.get(r.key),c=i.overlayedDocument;let l=this.applyToLocalView(c,i.mutatedFields);l=t.has(r.key)?null:l;const d=rm(c,l);d!==null&&s.set(r.key,d),c.isValidDocument()||c.convertToNoDocument(ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ce())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,((t,s)=>ld(t,s)))&&Hs(this.baseMutations,e.baseMutations,((t,s)=>ld(t,s)))}}class Kc{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){me(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return U0})();const i=e.mutations;for(let c=0;c<i.length;c++)r=r.insert(i[c].key,s[c].version);return new Kc(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,ue;function tx(n){switch(n){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:n})}}function am(n){if(n===void 0)return En("GRPC error has no .code"),M.UNKNOWN;switch(n){case Ye.OK:return M.OK;case Ye.CANCELLED:return M.CANCELLED;case Ye.UNKNOWN:return M.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return M.INTERNAL;case Ye.UNAVAILABLE:return M.UNAVAILABLE;case Ye.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ye.NOT_FOUND:return M.NOT_FOUND;case Ye.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ye.ABORTED:return M.ABORTED;case Ye.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ye.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:n})}}(ue=Ye||(Ye={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new Fn([4294967295,4294967295],0);function hd(n){const e=nx().encode(n),t=new wf;return t.update(e),new Uint8Array(t.digest())}function fd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fn([t,s],0),new Fn([r,i],0)]}class Gc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Sr(`Invalid padding: ${t}`);if(s<0)throw new Sr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sr(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Sr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Fn.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Fn.fromNumber(s)));return r.compare(sx)===1&&(r=new Fn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=hd(e),[s,r]=fd(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);if(!this.we(c))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),c=new Gc(i,r,t);return s.forEach((l=>c.insert(l))),c}insert(e){if(this.ge===0)return;const t=hd(e),[s,r]=fd(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,mi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fi(ee.min(),r,new Ce(ae),In(),ce())}}class mi{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new mi(s,t,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class cm{constructor(e,t){this.targetId=e,this.Ce=t}}class lm{constructor(e,t,s=ft.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class md{constructor(){this.ve=0,this.Fe=pd(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),t=ce(),s=ce();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:Q(38017,{changeType:i})}})),new mi(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=pd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class rx{constructor(e){this.Ge=e,this.ze=new Map,this.je=In(),this.Je=ji(),this.He=ji(),this.Ze=new Ce(ae)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Ya(i))if(s===0){const c=new J(i.path);this.et(t,c,bt.newNoDocument(c,ee.min()))}else me(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const l=this.ut(e),d=l?this.ct(l,e,c):1;if(d!==0){this.it(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let c,l;try{c=qn(s).toUint8Array()}catch(d){if(d instanceof Df)return ks("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Gc(c,r,i)}catch(d){return ks(d instanceof Sr?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const c=this.Ge.ht(),l=`projects/${c.projectId}/databases/${c.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,c)=>{const l=this.ot(c);if(l){if(i.current&&Ya(l.target)){const d=new J(l.target.path);this.It(d).has(c)||this.Et(c,d)||this.et(c,d,bt.newNoDocument(d,e))}i.Be&&(t.set(c,i.ke()),i.Ke())}}));let s=ce();this.He.forEach(((i,c)=>{let l=!0;c.forEachWhile((d=>{const h=this.ot(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,c)=>c.setReadTime(e)));const r=new fi(e,t,this.Ze,this.je,s);return this.je=In(),this.Je=ji(),this.He=ji(),this.Ze=new Ce(ae),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new md,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new st(ae),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new st(ae),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new md),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ji(){return new Ce(J.comparator)}function pd(){return new Ce(J.comparator)}const ix={asc:"ASCENDING",desc:"DESCENDING"},ox={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ax={and:"AND",or:"OR"};class cx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xa(n,e){return n.useProto3Json||Oo(e)?e:{value:e}}function ho(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function um(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lx(n,e){return ho(n,e.toTimestamp())}function nn(n){return me(!!n,49232),ee.fromTimestamp((function(t){const s=Wn(t);return new Ae(s.seconds,s.nanos)})(n))}function Jc(n,e){return Za(n,e).canonicalString()}function Za(n,e){const t=(function(r){return new De(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function dm(n){const e=De.fromString(n);return me(gm(e),10190,{key:e.toString()}),e}function ec(n,e){return Jc(n.databaseId,e.path)}function ka(n,e){const t=dm(e);if(t.get(1)!==n.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(fm(t))}function hm(n,e){return Jc(n.databaseId,e)}function ux(n){const e=dm(n);return e.length===4?De.emptyPath():fm(e)}function tc(n){return new De(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fm(n){return me(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function gd(n,e,t){return{name:ec(n,e),fields:t.value.mapValue.fields}}function dx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,m){return h.useProto3Json?(me(m===void 0||typeof m=="string",58123),ft.fromBase64String(m||"")):(me(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ft.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&(function(h){const m=h.code===void 0?M.UNKNOWN:am(h.code);return new G(m,h.message||"")})(c);t=new lm(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ka(n,s.document.name),i=nn(s.document.updateTime),c=s.document.createTime?nn(s.document.createTime):ee.min(),l=new Tt({mapValue:{fields:s.document.fields}}),d=bt.newFoundDocument(r,i,c,l),h=s.targetIds||[],m=s.removedTargetIds||[];t=new Gi(h,m,d.key,d)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ka(n,s.document),i=s.readTime?nn(s.readTime):ee.min(),c=bt.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Gi([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ka(n,s.document),i=s.removedTargetIds||[];t=new Gi([],i,r,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,c=new ex(r,i),l=s.targetId;t=new cm(l,c)}}return t}function hx(n,e){let t;if(e instanceof hi)t={update:gd(n,e.key,e.value)};else if(e instanceof om)t={delete:ec(n,e.key)};else if(e instanceof Zn)t={update:gd(n,e.key,e.data),updateMask:kx(e.fieldMask)};else{if(!(e instanceof Q0))return Q(16599,{dt:e.type});t={verify:ec(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,c){const l=c.transform;if(l instanceof Yr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xr)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof uo)return{fieldPath:c.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:lx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)})(n,e.precondition)),t}function fx(n,e){return n&&n.length>0?(me(e!==void 0,14353),n.map((t=>(function(r,i){let c=r.updateTime?nn(r.updateTime):nn(i);return c.isEqual(ee.min())&&(c=nn(i)),new G0(c,r.transformResults||[])})(t,e)))):[]}function mx(n,e){return{documents:[hm(n,e.path)]}}function px(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=hm(n,r);const i=(function(h){if(h.length!==0)return pm(an.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const c=(function(h){if(h.length!==0)return h.map((m=>(function(v){return{field:Ps(v.field),direction:bx(v.dir)}})(m)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=Xa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function gx(n){let e=ux(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){me(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(p){const v=mm(p);return v instanceof an&&Hf(v)?v.getFilters():[v]})(t.where));let c=[];t.orderBy&&(c=(function(p){return p.map((v=>(function(S){return new lo(js(S.field),(function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(v)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let v;return v=typeof p=="object"?p.value:p,Oo(v)?null:v})(t.limit));let d=null;t.startAt&&(d=(function(p){const v=!!p.before,T=p.values||[];return new co(T,v)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const v=!p.before,T=p.values||[];return new co(T,v)})(t.endAt)),P0(e,r,c,i,l,"F",d,h)}function yx(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=js(t.unaryFilter.field);return nt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=js(t.unaryFilter.field);return nt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(t.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=js(t.unaryFilter.field);return nt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return nt.create(js(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return an.create(t.compositeFilter.filters.map((s=>mm(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Q(1026)}})(t.compositeFilter.op))})(n):Q(30097,{filter:n})}function bx(n){return ix[n]}function _x(n){return ox[n]}function vx(n){return ax[n]}function Ps(n){return{fieldPath:n.canonicalString()}}function js(n){return ht.fromServerFormat(n.fieldPath)}function pm(n){return n instanceof nt?(function(t){if(t.op==="=="){if(sd(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NAN"}};if(nd(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sd(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NAN"}};if(nd(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(t.field),op:_x(t.op),value:t.value}}})(n):n instanceof an?(function(t){const s=t.getFilters().map((r=>pm(r)));return s.length===1?s[0]:{compositeFilter:{op:vx(t.op),filters:s}}})(n):Q(54877,{filter:n})}function kx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ym(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,s,r,i=ee.min(),c=ee.min(),l=ft.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.yt=e}}function wx(n){const e=gx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.bn=new Ix}addToCollectionParentIndex(e,t){return this.bn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Hn.min())}updateCollectionGroup(e,t,s){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new st(De.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new st(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bm=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(bm,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Gn(0)}static ar(){return new Gn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="LruGarbageCollector",Tx=1048576;function _d([n,e],[t,s]){const r=ae(n,t);return r===0?ae(e,s):r}class Ax{constructor(e){this.Pr=e,this.buffer=new st(_d),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();_d(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(bd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?H(bd,"Ignoring IndexedDB error during garbage collection: ",t):await sr(t)}await this.Ar(3e5)}))}}class Nx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Do.ce);const s=new Ax(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(yd)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,c,l,d,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,c=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,t)))).next((p=>(i=p,d=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),Rs()<=le.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-m}ms
	Determined least recently used ${r} in `+(l-c)+`ms
	Removed ${i} targets in `+(d-l)+`ms
	Removed ${p} documents in `+(h-d)+`ms
Total Duration: ${h-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function Rx(n,e){return new Nx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.changes=new ws((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?V.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Mr(s.mutation,r,Ct.empty(),Ae.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ce()){const r=fs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let c=Ar();return i.forEach(((l,d)=>{c=c.insert(l,d.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=fs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ce())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((c,l)=>{t.set(c,l)}))}))}computeViews(e,t,s,r){let i=In();const c=Lr(),l=(function(){return Lr()})();return t.forEach(((d,h)=>{const m=s.get(h.key);r.has(h.key)&&(m===void 0||m.mutation instanceof Zn)?i=i.insert(h.key,h):m!==void 0?(c.set(h.key,m.mutation.getFieldMask()),Mr(m.mutation,h,m.mutation.getFieldMask(),Ae.now())):c.set(h.key,Ct.empty())})),this.recalculateAndSaveOverlays(e,i).next((d=>(d.forEach(((h,m)=>c.set(h,m))),t.forEach(((h,m)=>l.set(h,new Px(m,c.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=Lr();let r=new Ce(((c,l)=>c-l)),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const l of c)l.keys().forEach((d=>{const h=t.get(d);if(h===null)return;let m=s.get(d)||Ct.empty();m=l.applyToLocalView(h,m),s.set(d,m);const p=(r.get(l.batchId)||ce()).add(d);r=r.insert(l.batchId,p)}))})).next((()=>{const c=[],l=r.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,m=d.value,p=Xf();m.forEach((v=>{if(!i.has(v)){const T=rm(t.get(v),s.get(v));T!==null&&p.set(v,T),i=i.add(v)}})),c.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return j0(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):D0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const c=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):V.resolve(fs());let l=qr,d=i;return c.next((h=>V.forEach(h,((m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?V.resolve():this.remoteDocumentCache.getEntry(e,m).next((v=>{d=d.insert(m,v)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,d,h,ce()))).next((m=>({batchId:l,changes:Qf(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next((s=>{let r=Ar();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let c=Ar();return this.indexManager.getCollectionParents(e,i).next((l=>V.forEach(l,(d=>{const h=(function(p,v){return new Lo(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((m=>{m.forEach(((p,v)=>{c=c.insert(p,v)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(i=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((c=>{i.forEach(((d,h)=>{const m=h.getKey();c.get(m)===null&&(c=c.insert(m,bt.newInvalidDocument(m)))}));let l=Ar();return c.forEach(((d,h)=>{const m=i.get(d);m!==void 0&&Mr(m.mutation,h,Ct.empty(),Ae.now()),Fo(t,h)&&(l=l.insert(d,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return V.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:nn(r.createTime)}})(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:wx(r.bundledQuery),readTime:nn(r.readTime)}})(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.overlays=new Ce(J.comparator),this.Lr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fs();return V.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),V.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),V.resolve()}getOverlaysForCollection(e,t,s){const r=fs(),i=t.length+1,c=new J(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&d.largestBatchId>s&&r.set(d.getKey(),d)}return V.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Ce(((h,m)=>h-m));const c=this.overlays.getIterator();for(;c.hasNext();){const h=c.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let m=i.get(h.largestBatchId);m===null&&(m=fs(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=fs(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((h,m)=>l.set(h,m))),!(l.size()>=r)););return V.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const c=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new Z0(t,s));let i=this.Lr.get(t);i===void 0&&(i=ce(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.kr=new st(ot.Kr),this.qr=new st(ot.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ot(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ot(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new J(new De([])),s=new ot(t,e),r=new ot(t,e+1),i=[];return this.qr.forEachInRange([s,r],(c=>{this.Wr(c),i.push(c.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new J(new De([])),s=new ot(t,e),r=new ot(t,e+1);let i=ce();return this.qr.forEachInRange([s,r],(c=>{i=i.add(c.key)})),i}containsKey(e){const t=new ot(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ot{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return J.comparator(e.key,t.key)||ae(e.Jr,t.Jr)}static Ur(e,t){return ae(e.Jr,t.Jr)||J.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new st(ot.Kr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new X0(i,t,s,r);this.mutationQueue.push(c);for(const l of r)this.Hr=this.Hr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(c)}lookupMutationBatch(e,t){return V.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?zc:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ot(t,0),r=new ot(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],(c=>{const l=this.Zr(c.Jr);i.push(l)})),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new st(ae);return t.forEach((r=>{const i=new ot(r,0),c=new ot(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,c],(l=>{s=s.add(l.Jr)}))})),V.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;J.isDocumentKey(i)||(i=i.child(""));const c=new ot(new J(i),0);let l=new st(ae);return this.Hr.forEachWhile((d=>{const h=d.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(d.Jr)),!0)}),c),V.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){me(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return V.forEach(t.mutations,(r=>{const i=new ot(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new ot(t,0),r=this.Hr.firstAfterOrEqual(s);return V.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.ti=e,this.docs=(function(){return new Ce(J.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,c=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return V.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=In();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():bt.newInvalidDocument(r))})),V.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=In();const c=t.path,l=new J(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:m}}=d.getNext();if(!c.isPrefixOf(h.path))break;h.path.length>c.length+1||l0(c0(m),s)<=0||(r.has(m.key)||Fo(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,s,r){Q(9500)}ni(e,t){return V.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Ux(this)}getSize(e){return V.resolve(this.size)}}class Ux extends Cx{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),V.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.persistence=e,this.ri=new ws((t=>Hc(t)),Wc),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new Yc,this.targetCount=0,this.oi=Gn._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),V.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Gn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.lr(t),V.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach(((c,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(c),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),V.waitFor(i).next((()=>r))}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return V.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),V.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((c=>{i.push(r.markPotentiallyOrphaned(e,c))})),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return V.resolve(s)}containsKey(e,t){return V.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t){this._i={},this.overlays={},this.ai=new Do(0),this.ui=!1,this.ui=!0,this.ci=new Vx,this.referenceDelegate=e(this),this.li=new Fx(this),this.indexManager=new Ex,this.remoteDocumentCache=(function(r){return new Mx(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new xx(t),this.Pi=new Dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ox,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Lx(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){H("MemoryPersistence","Starting transaction:",e);const r=new zx(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ii(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,t){return V.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class zx extends d0{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.Ri=new Yc,this.Ai=null}static Vi(e){return new Qc(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),V.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,(s=>{const r=J.fromPath(s);return this.mi(e,r).next((i=>{i||t.removeEntry(r,ee.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class fo{constructor(e,t){this.persistence=e,this.fi=new ws((s=>m0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Rx(this,t)}static Vi(e,t){return new fo(e,t)}Ti(){}Ii(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return V.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?V.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(c=>this.wr(e,c,t).next((l=>{l||(s++,i.removeEntry(c,ee.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),V.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),V.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wi(e.data.value)),t}wr(e,t,s){return V.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return V.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=ce(),r=ce();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Xc(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Zg()?8:h0(_t())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next((c=>{i.result=c})).next((()=>{if(!i.result)return this.ps(e,t,r,s).next((c=>{i.result=c}))})).next((()=>{if(i.result)return;const c=new $x;return this.ys(e,t,c).next((l=>{if(i.result=l,this.As)return this.ws(e,t,c,l.size)}))})).next((()=>i.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Rs()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Cs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Rs()<=le.DEBUG&&H("QueryEngine","Query:",Cs(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Rs()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Cs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(t))):V.resolve())}gs(e,t){if(ad(t))return V.resolve(null);let s=en(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Qa(t,null,"F"),s=en(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const c=ce(...i);return this.fs.getDocuments(e,c).next((l=>this.indexManager.getMinOffset(e,s).next((d=>{const h=this.Ss(t,l);return this.bs(t,h,c,d.readTime)?this.gs(e,Qa(t,null,"F")):this.Ds(e,h,t,d)}))))})))))}ps(e,t,s,r){return ad(t)||r.isEqual(ee.min())?V.resolve(null):this.fs.getDocuments(e,s).next((i=>{const c=this.Ss(t,i);return this.bs(t,c,s,r)?V.resolve(null):(Rs()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cs(t)),this.Ds(e,c,t,a0(r,qr)).next((l=>l)))}))}Ss(e,t){let s=new st(Jf(e));return t.forEach(((r,i)=>{Fo(e,i)&&(s=s.add(i))})),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Rs()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Cs(t)),this.fs.getDocumentsMatchingQuery(e,t,Hn.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((c=>{i=i.insert(c.key,c)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="LocalStore",Hx=3e8;class Wx{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Ce(ae),this.Fs=new ws((i=>Hc(i)),Wc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jx(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function qx(n,e,t,s){return new Wx(n,e,t,s)}async function vm(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const c=[],l=[];let d=ce();for(const h of r){c.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)d=d.add(m.key)}return t.localDocuments.getDocuments(s,d).next((h=>({Ns:h,removedBatchIds:c,addedBatchIds:l})))}))}))}function Kx(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(l,d,h,m){const p=h.batch,v=p.keys();let T=V.resolve();return v.forEach((S=>{T=T.next((()=>m.getEntry(d,S))).next((j=>{const A=h.docVersions.get(S);me(A!==null,48541),j.version.compareTo(A)<0&&(p.applyToRemoteDocument(j,h),j.isValidDocument()&&(j.setReadTime(h.commitVersion),m.addEntry(j)))}))})),T.next((()=>l.mutationQueue.removeMutationBatch(d,p)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let d=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function km(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Gx(n,e){const t=te(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach(((m,p)=>{const v=r.get(p);if(!v)return;l.push(t.li.removeMatchingKeys(i,m.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,m.addedDocuments,p))));let T=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(ft.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,s)),r=r.insert(p,T),(function(j,A,B){return j.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=Hx?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(v,T,m)&&l.push(t.li.updateTargetData(i,T))}));let d=In(),h=ce();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(Jx(i,c,e.documentUpdates).next((m=>{d=m.Bs,h=m.Ls}))),!s.isEqual(ee.min())){const m=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(m)}return V.waitFor(l).next((()=>c.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,d,h))).next((()=>d))})).then((i=>(t.vs=r,i)))}function Jx(n,e,t){let s=ce(),r=ce();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let c=In();return t.forEach(((l,d)=>{const h=i.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),d.isNoDocument()&&d.version.isEqual(ee.min())?(e.removeEntry(l,d.readTime),c=c.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),c=c.insert(l,d)):H(Zc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)})),{Bs:c,Ls:r}}))}function Yx(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=zc),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Qx(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((i=>i?(r=i,V.resolve(r)):t.li.allocateTargetId(s).next((c=>(r=new _n(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function nc(n,e,t){const s=te(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(c=>s.persistence.referenceDelegate.removeTarget(c,r)))}catch(c){if(!rr(c))throw c;H(Zc,`Failed to update sequence numbers for target ${e}: ${c}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function vd(n,e,t){const s=te(n);let r=ee.min(),i=ce();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(d,h,m){const p=te(d),v=p.Fs.get(m);return v!==void 0?V.resolve(p.vs.get(v)):p.li.getTargetData(h,m)})(s,c,en(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(c,l.targetId).next((d=>{i=d}))})).next((()=>s.Cs.getDocumentsMatchingQuery(c,e,t?r:ee.min(),t?i:ce()))).next((l=>(Xx(s,V0(e),l),{documents:l,ks:i})))))}function Xx(n,e,t){let s=n.Ms.get(e)||ee.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Ms.set(e,s)}class kd{constructor(){this.activeTargetIds=$0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zx{constructor(){this.vo=new kd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new kd,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="ConnectivityMonitor";class wd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(xd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(xd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di=null;function sc(){return Di===null?Di=(function(){return 268435456+Math.round(2147483648*Math.random())})():Di++,"0x"+Di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="RestConnection",tw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class nw{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===oo?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const c=sc(),l=this.Qo(e,t.toUriEncodedString());H(xa,`Sending RPC '${e}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,r,i);const{host:h}=new URL(l),m=ii(h);return this.zo(e,l,d,s,m).then((p=>(H(xa,`Received RPC '${e}' ${c}: `,p),p)),(p=>{throw ks(xa,`RPC '${e}' ${c} failed with error: `,p,"url: ",l,"request:",s),p}))}jo(e,t,s,r,i,c){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+nr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const s=tw[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection",vr=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Ls extends nw{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ls.c_){const e=Af();vr(e,Tf.STAT_EVENT,(t=>{t.stat===Wa.PROXY?H(gt,"STAT_EVENT: detected buffering proxy"):t.stat===Wa.NOPROXY&&H(gt,"STAT_EVENT: detected no buffering proxy")})),Ls.c_=!0}}zo(e,t,s,r,i){const c=sc();return new Promise(((l,d)=>{const h=new Ef;h.setWithCredentials(!0),h.listenOnce(If.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Hi.NO_ERROR:const p=h.getResponseJson();H(gt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(p)),l(p);break;case Hi.TIMEOUT:H(gt,`RPC '${e}' ${c} timed out`),d(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const v=h.getStatus();if(H(gt,`RPC '${e}' ${c} failed with status:`,v,"response text:",h.getResponseText()),v>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const S=T==null?void 0:T.error;if(S&&S.status&&S.message){const j=(function(B){const R=B.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(R)>=0?R:M.UNKNOWN})(S.status);d(new G(j,S.message))}else d(new G(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new G(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:c,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(gt,`RPC '${e}' ${c} completed.`)}}));const m=JSON.stringify(r);H(gt,`RPC '${e}' ${c} sending request:`,r),h.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=sc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const h=i.join("");H(gt,`Creating RPC '${e}' stream ${r}: ${h}`,l);const m=c.createWebChannel(h,l);this.I_(m);let p=!1,v=!1;const T=new sw({Jo:S=>{v?H(gt,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(p||(H(gt,`Opening RPC '${e}' stream ${r} transport.`),m.open(),p=!0),H(gt,`RPC '${e}' stream ${r} sending:`,S),m.send(S))},Ho:()=>m.close()});return vr(m,Tr.EventType.OPEN,(()=>{v||(H(gt,`RPC '${e}' stream ${r} transport opened.`),T.i_())})),vr(m,Tr.EventType.CLOSE,(()=>{v||(v=!0,H(gt,`RPC '${e}' stream ${r} transport closed`),T.o_(),this.E_(m))})),vr(m,Tr.EventType.ERROR,(S=>{v||(v=!0,ks(gt,`RPC '${e}' stream ${r} transport errored. Name:`,S.name,"Message:",S.message),T.o_(new G(M.UNAVAILABLE,"The operation could not be completed")))})),vr(m,Tr.EventType.MESSAGE,(S=>{var j;if(!v){const A=S.data[0];me(!!A,16349);const B=A,R=(B==null?void 0:B.error)||((j=B[0])==null?void 0:j.error);if(R){H(gt,`RPC '${e}' stream ${r} received error:`,R);const L=R.status;let D=(function(w){const _=Ye[w];if(_!==void 0)return am(_)})(L),W=R.message;L==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&ks(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=M.INTERNAL,W="Unknown error status: "+L+" with message "+R.message),v=!0,T.o_(new G(D,W)),m.close()}else H(gt,`RPC '${e}' stream ${r} received:`,A),T.__(A)}})),Ls.u_(),setTimeout((()=>{T.s_()}),0),T}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Sf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n){return new Ls(n)}function wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n){return new cx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ls.c_=!1;class xm{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="PersistentStream";class wm{constructor(e,t,s,r,i,c,l,d){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(En(t.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new G(M.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(Ed,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(H(Ed,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iw extends wm{constructor(e,t,s,r,i,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=dx(this.serializer,e),s=(function(i){if(!("targetChange"in i))return ee.min();const c=i.targetChange;return c.targetIds&&c.targetIds.length?ee.min():c.readTime?nn(c.readTime):ee.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=tc(this.serializer),t.addTarget=(function(i,c){let l;const d=c.target;if(l=Ya(d)?{documents:mx(i,d)}:{query:px(i,d).ft},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=um(i,c.resumeToken);const h=Xa(i,c.expectedCount);h!==null&&(l.expectedCount=h)}else if(c.snapshotVersion.compareTo(ee.min())>0){l.readTime=ho(i,c.snapshotVersion.toTimestamp());const h=Xa(i,c.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const s=yx(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=tc(this.serializer),t.removeTarget=e,this.K_(t)}}class ow extends wm{constructor(e,t,s,r,i,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=fx(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=tc(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>hx(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{}class cw extends aw{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,c])=>this.connection.Wo(e,Za(t,s),r,i,c))).catch((i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(M.UNKNOWN,i.toString())}))}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,l])=>this.connection.jo(e,Za(t,s),r,c,l,i))).catch((c=>{throw c.name==="FirebaseError"?(c.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new G(M.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function lw(n,e,t,s){return new cw(n,e,t,s)}class uw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(En(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class dw{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Gn(1e3),this.Va=new Gn(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((c=>{s.enqueueAndForget((async()=>{Es(this)&&(H(cn,"Restarting streams for network reachability change."),await(async function(d){const h=te(d);h.da.add(4),await pi(h),h.ga.set("Unknown"),h.da.delete(4),await Ho(h)})(this))}))})),this.ga=new uw(s,r)}}async function Ho(n){if(Es(n))for(const e of n.ma)await e(!0)}async function pi(n){for(const e of n.ma)await e(!1)}function rc(n,e){return n.Ea.get(e)||void 0}function Em(n,e){const t=te(n),s=rc(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const r=(function(l,d){const h=rc(l,d);h!==void 0&&l.Ra.delete(h);const m=(function(v,T){return T%2!=0?v.Va.next():v.Aa.next()})(l,d);return l.Ea.set(d,m),l.Ra.set(m,d),m})(t,e.targetId);H(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new _n(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(r,i),sl(t)?nl(t):ir(t).O_()&&tl(t,i)}function el(n,e){const t=te(n),s=ir(t),r=rc(t,e);H(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ia.delete(r),t.Ea.delete(e),t.Ra.delete(r),s.O_()&&Im(t,r),t.Ia.size===0&&(s.O_()?s.L_():Es(t)&&t.ga.set("Unknown"))}function tl(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void H(cn,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}ir(n).Z_(e)}function Im(n,e){n.pa.$e(e),ir(n).X_(e)}function nl(n){n.pa=new rx({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ce()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.ga.ua()}function sl(n){return Es(n)&&!ir(n).x_()&&n.Ia.size>0}function Es(n){return te(n).da.size===0}function Tm(n){n.pa=void 0}async function hw(n){n.ga.set("Online")}async function fw(n){n.Ia.forEach(((e,t)=>{tl(n,e)}))}async function mw(n,e){Tm(n),sl(n)?(n.ga.ha(e),nl(n)):n.ga.set("Unknown")}async function pw(n,e,t){if(n.ga.set("Online"),e instanceof lm&&e.state===2&&e.cause)try{await(async function(r,i){const c=i.cause;for(const l of i.targetIds){if(r.Ia.has(l)){const d=r.Ra.get(l);d!==void 0&&(await r.remoteSyncer.rejectListen(d,c),r.Ea.delete(d),r.Ra.delete(l)),r.Ia.delete(l)}r.pa.removeTarget(l)}})(n,e)}catch(s){H(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mo(n,s)}else if(e instanceof Gi?n.pa.Xe(e):e instanceof cm?n.pa.st(e):n.pa.tt(e),!t.isEqual(ee.min()))try{const s=await km(n.localStore);t.compareTo(s)>=0&&await(function(i,c){const l=i.pa.Tt(c);l.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(m);p&&i.Ia.set(m,p.withResumeToken(h.resumeToken,c))}})),l.targetMismatches.forEach(((h,m)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(ft.EMPTY_BYTE_STRING,p.snapshotVersion)),Im(i,h);const v=new _n(p.target,h,m,p.sequenceNumber);tl(i,v)}));const d=(function(m,p){const v=new Map;p.targetChanges.forEach(((S,j)=>{const A=m.Ra.get(j);A!==void 0&&v.set(A,S)}));let T=new Ce(ae);return p.targetMismatches.forEach(((S,j)=>{const A=m.Ra.get(S);A!==void 0&&(T=T.insert(A,j))})),new fi(p.snapshotVersion,v,T,p.documentUpdates,p.resolvedLimboDocuments)})(i,l);return i.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){H(cn,"Failed to raise snapshot:",s),await mo(n,s)}}async function mo(n,e,t){if(!rr(e))throw e;n.da.add(1),await pi(n),n.ga.set("Offline"),t||(t=()=>km(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H(cn,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Ho(n)}))}function Am(n,e){return e().catch((t=>mo(n,t,e)))}async function Wo(n){const e=te(n),t=Jn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:zc;for(;gw(e);)try{const r=await Yx(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,yw(e,r)}catch(r){await mo(e,r)}Sm(e)&&Nm(e)}function gw(n){return Es(n)&&n.Ta.length<10}function yw(n,e){n.Ta.push(e);const t=Jn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Sm(n){return Es(n)&&!Jn(n).x_()&&n.Ta.length>0}function Nm(n){Jn(n).start()}async function bw(n){Jn(n).ra()}async function _w(n){const e=Jn(n);for(const t of n.Ta)e.ea(t.mutations)}async function vw(n,e,t){const s=n.Ta.shift(),r=Kc.from(s,e,t);await Am(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Wo(n)}async function kw(n,e){e&&Jn(n).Y_&&await(async function(s,r){if((function(c){return tx(c)&&c!==M.ABORTED})(r.code)){const i=s.Ta.shift();Jn(s).B_(),await Am(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Wo(s)}})(n,e),Sm(n)&&Nm(n)}async function Id(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),H(cn,"RemoteStore received new credentials");const s=Es(t);t.da.add(3),await pi(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Ho(t)}async function xw(n,e){const t=te(n);e?(t.da.delete(2),await Ho(t)):e||(t.da.add(2),await pi(t),t.ga.set("Unknown"))}function ir(n){return n.ya||(n.ya=(function(t,s,r){const i=te(t);return i.sa(),new iw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:hw.bind(null,n),Yo:fw.bind(null,n),t_:mw.bind(null,n),H_:pw.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),sl(n)?nl(n):n.ga.set("Unknown")):(await n.ya.stop(),Tm(n))}))),n.ya}function Jn(n){return n.wa||(n.wa=(function(t,s,r){const i=te(t);return i.sa(),new ow(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bw.bind(null,n),t_:kw.bind(null,n),ta:_w.bind(null,n),na:vw.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await Wo(n)):(await n.wa.stop(),n.Ta.length>0&&(H(cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const c=Date.now()+s,l=new rl(e,t,c,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function il(n,e){if(En("AsyncQueue",`${e}: ${n}`),rr(n))return new G(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{static emptySet(e){return new Ms(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||J.comparator(t.key,s.key):(t,s)=>J.comparator(t.key,s.key),this.keyedMap=Ar(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ms;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.Sa=new Ce(J.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):Q(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ks{constructor(e,t,s,r,i,c,l,d,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const c=[];return t.forEach((l=>{c.push({type:0,doc:l})})),new Ks(e,t,Ms.emptySet(t),c,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class Ew{constructor(){this.queries=Ad(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const r=te(t),i=r.queries;r.queries=Ad(),i.forEach(((c,l)=>{for(const d of l.va)d.onError(s)}))})(this,new G(M.ABORTED,"Firestore shutting down"))}}function Ad(){return new ws((n=>Gf(n)),Uo)}async function Rm(n,e){const t=te(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Fa()&&e.Ma()&&(s=2):(i=new ww,s=e.Ma()?0:1);try{switch(s){case 0:i.Ca=await t.onListen(r,!0);break;case 1:i.Ca=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(c){const l=il(c,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&ol(t)}async function Cm(n,e){const t=te(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const c=i.va.indexOf(e);c>=0&&(i.va.splice(c,1),i.va.length===0?r=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Iw(n,e){const t=te(n);let s=!1;for(const r of e){const i=r.query,c=t.queries.get(i);if(c){for(const l of c.va)l.Na(r)&&(s=!0);c.Ca=r}}s&&ol(t)}function Tw(n,e,t){const s=te(n),r=s.queries.get(e);if(r)for(const i of r.va)i.onError(t);s.queries.delete(e)}function ol(n){n.xa.forEach((e=>{e.next()}))}var ic,Sd;(Sd=ic||(ic={})).Ba="default",Sd.Cache="cache";class Pm{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ks(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==ic.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class Aw{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ce(),this.mutatedKeys=ce(),this.iu=Jf(e),this.su=new Ms(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new Td,r=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,c=r,l=!1;const d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,p)=>{const v=r.get(m),T=Fo(this.query,p)?p:null,S=!!v&&this.mutatedKeys.has(v.key),j=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let A=!1;v&&T?v.data.isEqual(T.data)?S!==j&&(s.track({type:3,doc:T}),A=!0):this.uu(v,T)||(s.track({type:2,doc:T}),A=!0,(d&&this.iu(T,d)>0||h&&this.iu(T,h)<0)&&(l=!0)):!v&&T?(s.track({type:0,doc:T}),A=!0):v&&!T&&(s.track({type:1,doc:v}),A=!0,(d||h)&&(l=!0)),A&&(T?(c=c.add(T),i=j?i.add(m):i.delete(m)):(c=c.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const m=this.query.limitType==="F"?c.last():c.first();c=c.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{su:c,au:s,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const c=e.au.Da();c.sort(((m,p)=>(function(T,S){const j=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:A})}};return j(T)-j(S)})(m.type,p.type)||this.iu(m.doc,p.doc))),this.cu(s),r=r??!1;const l=t&&!r?this.lu():[],d=this.ru.size===0&&this.current&&!r?1:0,h=d!==this.nu;return this.nu=d,c.length!==0||h?{snapshot:new Ks(this.query,e.su,i,c,e.mutatedKeys,d===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Td,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ce(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const t=[];return e.forEach((s=>{this.ru.has(s)||t.push(new Dm(s))})),this.ru.forEach((s=>{e.has(s)||t.push(new jm(s))})),t}Tu(e){this.tu=e.ks,this.ru=ce();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Ks.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const al="SyncEngine";class Sw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Nw{constructor(e){this.key=e,this.Eu=!1}}class Rw{constructor(e,t,s,r,i,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=c,this.Ru={},this.Au=new ws((l=>Gf(l)),Uo),this.Vu=new Map,this.du=new Set,this.mu=new Ce(J.comparator),this.fu=new Map,this.gu=new Yc,this.pu={},this.yu=new Map,this.wu=Gn.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Cw(n,e,t=!0){const s=Fm(n);let r;const i=s.Au.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Iu()):r=await Om(s,e,t,!0),r}async function Pw(n,e){const t=Fm(n);await Om(t,e,!0,!1)}async function Om(n,e,t,s){const r=await Qx(n.localStore,en(e)),i=r.targetId,c=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await jw(n,e,i,c==="current",r.resumeToken)),n.isPrimaryClient&&t&&Em(n.remoteStore,r),l}async function jw(n,e,t,s,r){n.bu=(p,v,T)=>(async function(j,A,B,R){let L=A.view._u(B);L.bs&&(L=await vd(j.localStore,A.query,!1).then((({documents:w})=>A.view._u(w,L))));const D=R&&R.targetChanges.get(A.targetId),W=R&&R.targetMismatches.get(A.targetId)!=null,K=A.view.applyChanges(L,j.isPrimaryClient,D,W);return Rd(j,A.targetId,K.hu),K.snapshot})(n,p,v,T);const i=await vd(n.localStore,e,!0),c=new Aw(e,i.ks),l=c._u(i.documents),d=mi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=c.applyChanges(l,n.isPrimaryClient,d);Rd(n,t,h.hu);const m=new Sw(e,t,c);return n.Au.set(e,m),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function Dw(n,e,t){const s=te(n),r=s.Au.get(e),i=s.Vu.get(r.targetId);if(i.length>1)return s.Vu.set(r.targetId,i.filter((c=>!Uo(c,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await nc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&el(s.remoteStore,r.targetId),oc(s,r.targetId)})).catch(sr)):(oc(s,r.targetId),await nc(s.localStore,r.targetId,!0))}async function Ow(n,e){const t=te(n),s=t.Au.get(e),r=t.Vu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),el(t.remoteStore,s.targetId))}async function Vw(n,e,t){const s=Bw(n);try{const r=await(function(c,l){const d=te(c),h=Ae.now(),m=l.reduce(((T,S)=>T.add(S.key)),ce());let p,v;return d.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let S=In(),j=ce();return d.xs.getEntries(T,m).next((A=>{S=A,S.forEach(((B,R)=>{R.isValidDocument()||(j=j.add(B))}))})).next((()=>d.localDocuments.getOverlayedDocuments(T,S))).next((A=>{p=A;const B=[];for(const R of l){const L=Y0(R,p.get(R.key).overlayedDocument);L!=null&&B.push(new Zn(R.key,L,zf(L.value.mapValue),tn.exists(!0)))}return d.mutationQueue.addMutationBatch(T,h,B,l)})).next((A=>{v=A;const B=A.applyToLocalDocumentSet(p,j);return d.documentOverlayCache.saveOverlays(T,A.batchId,B)}))})).then((()=>({batchId:v.batchId,changes:Qf(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(c,l,d){let h=c.pu[c.currentUser.toKey()];h||(h=new Ce(ae)),h=h.insert(l,d),c.pu[c.currentUser.toKey()]=h})(s,r.batchId,t),await gi(s,r.changes),await Wo(s.remoteStore)}catch(r){const i=il(r,"Failed to persist write");t.reject(i)}}async function Vm(n,e){const t=te(n);try{const s=await Gx(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const c=t.fu.get(i);c&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?c.Eu=!0:r.modifiedDocuments.size>0?me(c.Eu,14607):r.removedDocuments.size>0&&(me(c.Eu,42227),c.Eu=!1))})),await gi(t,s,e)}catch(s){await sr(s)}}function Nd(n,e,t){const s=te(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Au.forEach(((i,c)=>{const l=c.view.Oa(e);l.snapshot&&r.push(l.snapshot)})),(function(c,l){const d=te(c);d.onlineState=l;let h=!1;d.queries.forEach(((m,p)=>{for(const v of p.va)v.Oa(l)&&(h=!0)})),h&&ol(d)})(s.eventManager,e),r.length&&s.Ru.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Lw(n,e,t){const s=te(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.fu.get(e),i=r&&r.key;if(i){let c=new Ce(J.comparator);c=c.insert(i,bt.newNoDocument(i,ee.min()));const l=ce().add(i),d=new fi(ee.min(),new Map,new Ce(ae),c,l);await Vm(s,d),s.mu=s.mu.remove(i),s.fu.delete(e),cl(s)}else await nc(s.localStore,e,!1).then((()=>oc(s,e,t))).catch(sr)}async function Mw(n,e){const t=te(n),s=e.batch.batchId;try{const r=await Kx(t.localStore,e);Mm(t,s,null),Lm(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await gi(t,r)}catch(r){await sr(r)}}async function Uw(n,e,t){const s=te(n);try{const r=await(function(c,l){const d=te(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return d.mutationQueue.lookupMutationBatch(h,l).next((p=>(me(p!==null,37113),m=p.keys(),d.mutationQueue.removeMutationBatch(h,p)))).next((()=>d.mutationQueue.performConsistencyCheck(h))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(h,m,l))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>d.localDocuments.getDocuments(h,m)))}))})(s.localStore,e);Mm(s,e,t),Lm(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await gi(s,r)}catch(r){await sr(r)}}function Lm(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function Mm(n,e,t){const s=te(n);let r=s.pu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function oc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Vu.get(e))n.Au.delete(s),t&&n.Ru.Du(s,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((s=>{n.gu.containsKey(s)||Um(n,s)}))}function Um(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(el(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),cl(n))}function Rd(n,e,t){for(const s of t)s instanceof jm?(n.gu.addReference(s.key,e),Fw(n,s)):s instanceof Dm?(H(al,"Document no longer in limbo: "+s.key),n.gu.removeReference(s.key,e),n.gu.containsKey(s.key)||Um(n,s.key)):Q(19791,{Cu:s})}function Fw(n,e){const t=e.key,s=t.path.canonicalString();n.mu.get(t)||n.du.has(s)||(H(al,"New document in limbo: "+t),n.du.add(s),cl(n))}function cl(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new J(De.fromString(e)),s=n.wu.next();n.fu.set(s,new Nw(t)),n.mu=n.mu.insert(t,s),Em(n.remoteStore,new _n(en(Mo(t.path)),s,"TargetPurposeLimboResolution",Do.ce))}}async function gi(n,e,t){const s=te(n),r=[],i=[],c=[];s.Au.isEmpty()||(s.Au.forEach(((l,d)=>{c.push(s.bu(d,e,t).then((h=>{var m;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(d.targetId,p?"current":"not-current")}if(h){r.push(h);const p=Xc.Es(d.targetId,h);i.push(p)}})))})),await Promise.all(c),s.Ru.H_(r),await(async function(d,h){const m=te(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>V.forEach(h,(v=>V.forEach(v.Ts,(T=>m.persistence.referenceDelegate.addReference(p,v.targetId,T))).next((()=>V.forEach(v.Is,(T=>m.persistence.referenceDelegate.removeReference(p,v.targetId,T)))))))))}catch(p){if(!rr(p))throw p;H(Zc,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const T=m.vs.get(v),S=T.snapshotVersion,j=T.withLastLimboFreeSnapshotVersion(S);m.vs=m.vs.insert(v,j)}}})(s.localStore,i))}async function zw(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){H(al,"User change. New user:",e.toKey());const s=await vm(t.localStore,e);t.currentUser=e,(function(i,c){i.yu.forEach((l=>{l.forEach((d=>{d.reject(new G(M.CANCELLED,c))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gi(t,s.Ns)}}function $w(n,e){const t=te(n),s=t.fu.get(e);if(s&&s.Eu)return ce().add(s.key);{let r=ce();const i=t.Vu.get(e);if(!i)return r;for(const c of i){const l=t.Au.get(c);r=r.unionWith(l.view.ou)}return r}}function Fm(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lw.bind(null,e),e.Ru.H_=Iw.bind(null,e.eventManager),e.Ru.Du=Tw.bind(null,e.eventManager),e}function Bw(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uw.bind(null,e),e}class po{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bo(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return qx(this.persistence,new Bx,e.initialUser,this.serializer)}xu(e){return new _m(Qc.Vi,this.serializer)}Mu(e){return new Zx}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}po.provider={build:()=>new po};class Hw extends po{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){me(this.persistence.referenceDelegate instanceof fo,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Sx(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new _m((s=>fo.Vi(s,t)),this.serializer)}}class ac{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Nd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zw.bind(null,this.syncEngine),await xw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ew})()}createDatastore(e){const t=Bo(e.databaseInfo.databaseId),s=rw(e.databaseInfo);return lw(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,c,l){return new dw(s,r,i,c,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Nd(this.syncEngine,t,0)),(function(){return wd.v()?new wd:new ew})())}createSyncEngine(e,t){return(function(r,i,c,l,d,h,m){const p=new Rw(r,i,c,l,d,h);return m&&(p.Su=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=te(r);H(cn,"RemoteStore shutting down."),i.da.add(5),await pi(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ac.provider={build:()=>new ac};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="FirestoreClient";class Ww{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=yt.UNAUTHENTICATED,this.clientId=Uc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async c=>{H(Yn,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(H(Yn,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=il(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ea(n,e){n.asyncQueue.verifyOperationInProgress(),H(Yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await vm(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Cd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qw(n);H(Yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Id(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Id(e.remoteStore,r))),n._onlineComponents=e}async function qw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(Yn,"Using user provided OfflineComponentProvider");try{await Ea(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===M.FAILED_PRECONDITION||r.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;ks("Error using user provided cache. Falling back to memory cache: "+t),await Ea(n,new po)}}else H(Yn,"Using default OfflineComponentProvider"),await Ea(n,new Hw(void 0));return n._offlineComponents}async function $m(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(Yn,"Using user provided OnlineComponentProvider"),await Cd(n,n._uninitializedComponentsProvider._online)):(H(Yn,"Using default OnlineComponentProvider"),await Cd(n,new ac))),n._onlineComponents}function Kw(n){return $m(n).then((e=>e.syncEngine))}async function cc(n){const e=await $m(n),t=e.eventManager;return t.onListen=Cw.bind(null,e.syncEngine),t.onUnlisten=Dw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ow.bind(null,e.syncEngine),t}function Gw(n,e,t,s){const r=new zm(s),i=new Pm(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>Rm(await cc(n),i))),()=>{r.Ku(),n.asyncQueue.enqueueAndForget((async()=>Cm(await cc(n),i)))}}function Jw(n,e,t={}){const s=new zn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,c,l,d,h){const m=new zm({next:v=>{m.Ku(),c.enqueueAndForget((()=>Cm(i,p)));const T=v.docs.has(l);!T&&v.fromCache?h.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&d&&d.source==="server"?h.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new Pm(Mo(l.path),m,{includeMetadataChanges:!0,Wa:!0});return Rm(i,p)})(await cc(n),n.asyncQueue,e,t,s))),s.promise}function Yw(n,e){const t=new zn;return n.asyncQueue.enqueueAndForget((async()=>Vw(await Kw(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="ComponentProvider",Pd=new Map;function Xw(n,e,t,s,r){return new y0(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Bm(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="firestore.googleapis.com",jd=!0;class Dd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hm,this.ssl=jd}else this.host=e.host,this.ssl=e.ssl??jd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Tx)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bm(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ll{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Jk;switch(s.type){case"firstParty":return new Zk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Pd.get(t);s&&(H(Qw,"Removing Datastore"),Pd.delete(t),s.terminate())})(this),Promise.resolve()}}function Zw(n,e,t,s={}){var h;n=Zt(n,ll);const r=ii(e),i=n._getSettings(),c={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&lh(`https://${l}`),i.host!==Hm&&i.host!==l&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...i,host:l,ssl:r,emulatorOptions:s};if(!bs(d,c)&&(n._setSettings(d),s.mockUserToken)){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=yt.MOCK_USER;else{m=qg(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new yt(v)}n._authCredentials=new Yk(new Rf(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qo(this.firestore,e,this._query)}}class Ze{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(di(t,Ze._jsonSchema))return new Ze(e,s||null,new J(De.fromString(t.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Xe("string",Ze._jsonSchemaVersion),referencePath:Xe("string")};class Zr extends qo{constructor(e,t,s){super(e,t,Mo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new J(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function ul(n,e,...t){if(n=X(n),arguments.length===1&&(e=Uc.newId()),i0("doc","path",e),n instanceof ll){const s=De.fromString(e,...t);return Gu(s),new Ze(n,null,new J(s))}{if(!(n instanceof Ze||n instanceof Zr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(De.fromString(e,...t));return Gu(s),new Ze(n.firestore,n instanceof Zr?n.converter:null,new J(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="AsyncQueue";class Vd{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new xm(this,"async_queue_retry"),this.lc=()=>{const s=wa();s&&H(Od,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=wa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=wa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new zn;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!rr(e))throw e;H(Od,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,En("INTERNAL UNHANDLED ERROR: ",Ld(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const r=rl.createAndSchedule(this,e,t,s,(i=>this.Ec(i)));return this.oc.push(r),r}Pc(){this._c&&Q(47125,{Rc:Ld(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Ld(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Gs extends ll{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Vd,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vd(e),this._firestoreClient=void 0,await e}}}function eE(n,e){const t=typeof n=="object"?n:fh(),s=typeof n=="string"?n:oo,r=bc(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Hg("firestore");i&&Zw(r,...i)}return r}function dl(n){if(n._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tE(n),n._firestoreClient}function tE(n){var s,r,i,c;const e=n._freezeSettings(),t=Xw(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ww(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const h=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(ft.fromBase64String(e))}catch(t){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(di(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Xe("string",Dt._jsonSchemaVersion),bytes:Xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(di(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Xe("string",sn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(di(e,zt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new zt(e.vectorValues);throw new G(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zt._jsonSchemaVersion="firestore/vectorValue/1.0",zt._jsonSchema={type:Xe("string",zt._jsonSchemaVersion),vectorValues:Xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=/^__.*__$/;class sE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms):new hi(e,this.data,t,this.fieldTransforms)}}class Wm{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:n})}}class fl{constructor(e,t,s,r,i,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new fl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return go(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(qm(this.dataSource)&&nE.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class rE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Bo(e)}V(e,t,s,r=!1){return new fl({dataSource:e,methodName:t,targetDoc:s,path:ht.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Km(n){const e=n._freezeSettings(),t=Bo(n._databaseId);return new rE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iE(n,e,t,s,r,i={}){const c=n.V(i.merge||i.mergeFields?2:0,e,t,r);pl("Data must be an object, but it was:",c,s);const l=Gm(s,c);let d,h;if(i.merge)d=new Ct(c.fieldMask),h=c.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const v=ei(e,p,t);if(!c.contains(v))throw new G(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Qm(m,v)||m.push(v)}d=new Ct(m),h=c.fieldTransforms.filter((p=>d.covers(p.field)))}else d=null,h=c.fieldTransforms;return new sE(new Tt(l),d,h)}class Go extends Ko{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Go}}class ml extends Ko{_toFieldTransform(e){return new q0(e.path,new Yr)}isEqual(e){return e instanceof ml}}function oE(n,e,t,s){const r=n.V(1,e,t);pl("Data must be an object, but it was:",r,s);const i=[],c=Tt.empty();Xn(s,((d,h)=>{const m=Ym(e,d,t);h=X(h);const p=r.Sc(m);if(h instanceof Go)i.push(m);else{const v=Jo(h,p);v!=null&&(i.push(m),c.set(m,v))}}));const l=new Ct(i);return new Wm(c,l,r.fieldTransforms)}function aE(n,e,t,s,r,i){const c=n.V(1,e,t),l=[ei(e,s,t)],d=[r];if(i.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(ei(e,i[v])),d.push(i[v+1]);const h=[],m=Tt.empty();for(let v=l.length-1;v>=0;--v)if(!Qm(h,l[v])){const T=l[v];let S=d[v];S=X(S);const j=c.Sc(T);if(S instanceof Go)h.push(T);else{const A=Jo(S,j);A!=null&&(h.push(T),m.set(T,A))}}const p=new Ct(h);return new Wm(m,p,c.fieldTransforms)}function Jo(n,e){if(Jm(n=X(n)))return pl("Unsupported field value:",e,n),Gm(n,e);if(n instanceof Ko)return(function(s,r){if(!qm(r.dataSource))throw r.Dc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,r){const i=[];let c=0;for(const l of s){let d=Jo(l,r.bc(c));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),c++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=X(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return B0(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ae.fromDate(s);return{timestampValue:ho(r.serializer,i)}}if(s instanceof Ae){const i=new Ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ho(r.serializer,i)}}if(s instanceof sn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Dt)return{bytesValue:um(r.serializer,s._byteString)};if(s instanceof Ze){const i=r.databaseId,c=s.firestore._databaseId;if(!c.isEqual(i))throw r.Dc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jc(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof zt)return(function(c,l){const d=c instanceof zt?c.toArray():c;return{mapValue:{fields:{[Uf]:{stringValue:Ff},[ao]:{arrayValue:{values:d.map((m=>{if(typeof m!="number")throw l.Dc("VectorValues must only contain numeric values.");return qc(l.serializer,m)}))}}}}}})(s,r);if(ym(s))return s._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${Fc(s)}`)})(n,e)}function Gm(n,e){const t={};return jf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xn(n,((s,r)=>{const i=Jo(r,e.yc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Jm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof sn||n instanceof Dt||n instanceof Ze||n instanceof Ko||n instanceof zt||ym(n))}function pl(n,e,t){if(!Jm(t)||!Cf(t)){const s=Fc(t);throw s==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+s)}}function ei(n,e,t){if((e=X(e))instanceof hl)return e._internalPath;if(typeof e=="string")return Ym(n,e);throw go("Field path arguments must be of type string or ",n,!1,void 0,t)}const cE=new RegExp("[~\\*/\\[\\]]");function Ym(n,e,t){if(e.search(cE)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hl(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function go(n,e,t,s,r){const i=s&&!s.isEmpty(),c=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(i||c)&&(d+=" (found",i&&(d+=` in field ${s}`),c&&(d+=` in document ${r}`),d+=")"),new G(M.INVALID_ARGUMENT,l+n+d)}function Qm(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{convertValue(e,t="none"){switch(Kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Xn(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[ao].arrayValue)==null?void 0:r.values)==null?void 0:i.map((c=>qe(c.doubleValue)));return new zt(t)}convertGeoPoint(e){return new sn(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Vo(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=Wn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=De.fromString(e);me(gm(s),9688,{name:e});const r=new Gr(s.get(1),s.get(3)),i=new J(s.popFirst(5));return r.isEqual(t)||En(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends lE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,t)}}function uE(){return new ml("serverTimestamp")}const Md="@firebase/firestore",Ud="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ei("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dE extends Zm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function fE(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends Zm{constructor(e,t,s,r,i,c){super(e,t,s,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ei("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",gs._jsonSchema={type:Xe("string",gs._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Ji extends gs{data(e={}){return super.data(e)}}class Us{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Nr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ji(this._firestore,this._userDataWriter,s.key,s,new Nr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map((l=>{const d=new Ji(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Nr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}}))}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const d=new Ji(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Nr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,m=-1;return l.type!==0&&(h=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),m=c.indexOf(l.doc.key)),{type:mE(l.type),doc:d,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Us._jsonSchemaVersion="firestore/querySnapshot/1.0",Us._jsonSchema={type:Xe("string",Us._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){n=Zt(n,Ze);const e=Zt(n.firestore,Gs),t=dl(e);return Jw(t,n._key).then((s=>tp(e,n,s)))}function gE(n,e,t){n=Zt(n,Ze);const s=Zt(n.firestore,Gs),r=fE(n.converter,e),i=Km(s);return ep(s,[iE(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,tn.none())])}function yE(n,e,t,...s){n=Zt(n,Ze);const r=Zt(n.firestore,Gs),i=Km(r);let c;return c=typeof(e=X(e))=="string"||e instanceof hl?aE(i,"updateDoc",n._key,e,t,s):oE(i,"updateDoc",n._key,e),ep(r,[c.toMutation(n._key,tn.exists(!0))])}function bE(n,...e){var h,m,p;n=X(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Fd(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Fd(e[s])){const v=e[s];e[s]=(h=v.next)==null?void 0:h.bind(v),e[s+1]=(m=v.error)==null?void 0:m.bind(v),e[s+2]=(p=v.complete)==null?void 0:p.bind(v)}let i,c,l;if(n instanceof Ze)c=Zt(n.firestore,Gs),l=Mo(n._key.path),i={next:v=>{e[s]&&e[s](tp(c,n,v))},error:e[s+1],complete:e[s+2]};else{const v=Zt(n,qo);c=Zt(v.firestore,Gs),l=v._query;const T=new Xm(c);i={next:S=>{e[s]&&e[s](new Us(c,T,v,S))},error:e[s+1],complete:e[s+2]},hE(n._query)}const d=dl(c);return Gw(d,l,r,i)}function ep(n,e){const t=dl(n);return Yw(t,e)}function tp(n,e,t){const s=t.docs.get(e._key),r=new Xm(n);return new gs(n,r,e._key,s,new Nr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Gk(Qs),$s(new _s("firestore",((s,{instanceIdentifier:r,options:i})=>{const c=s.getProvider("app").getImmediate(),l=new Gs(new Qk(s.getProvider("auth-internal")),new e0(c,s.getProvider("app-check-internal")),b0(c,r),c);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ln(Md,Ud,e),Ln(Md,Ud,"esm2020")})();const _E={apiKey:"AIzaSyC1lWDUwmBOlDmJHiqn8PBdGXf63GFZM8g",authDomain:"kocky-sveta-2026.firebaseapp.com",projectId:"kocky-sveta-2026",storageBucket:"kocky-sveta-2026.firebasestorage.app",messagingSenderId:"390822285835",appId:"1:390822285835:web:31021a6bb7c67d7a58ad0e",measurementId:"G-VB20M681V5"},np=hh(_E),gl=eE(np),vE=ui(np);tf(vE,Cc).catch(()=>{});async function kE(n){const t=new TextEncoder().encode(n),s=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(s)).map(i=>i.toString(16).padStart(2,"0")).join("")}function xE(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>n[Math.floor(Math.random()*n.length)]).join("")}function wE(){return String(Math.floor(1e3+Math.random()*9e3))}async function sp(n){var c;const e=n.customRoomId?n.customRoomId.toUpperCase().trim():xE(),t=n.pin||wE(),s=await kE(t),r=(c=ui().currentUser)==null?void 0:c.uid;if(!r)throw new Error("Nie si prihlásený");const i={ownerPinHash:s,status:"waiting",updatedAt:uE(),selectedSkin:n.selectedSkin,rules:n.rules,players:{[r]:{name:n.hostName,score:0,isReady:!1,online:!0}},gameState:{currentTurn:r,lastRoll:[],history:[]}};return await gE(ul(gl,"rooms",e),i),window.__ksVerboseFirebase&&console.log("[createRoom] roomId:",e,"uid:",r,"pin:",t),{roomId:e,pin:t}}const EE=Object.freeze(Object.defineProperty({__proto__:null,createRoom:sp},Symbol.toStringTag,{value:"Module"}));async function IE(n){var r;const e=ul(gl,"rooms",n.roomId);if(!(await pE(e)).exists())throw window.__ksVerboseFirebase&&console.error("[joinRoom] Miestnosť neexistuje:",n.roomId),new Error("Miestnosť neexistuje");const s=(r=ui().currentUser)==null?void 0:r.uid;if(!s)throw new Error("Nie si prihlásený");return await yE(e,{[`players.${s}`]:{name:n.playerName,score:0,isReady:!1,online:!0}}),window.__ksVerboseFirebase&&console.log("[joinRoom] roomId:",n.roomId,"uid:",s),{uid:s}}function TE(){const n=Fr(e=>e.status);return n==="connected"?a.jsx(si,{size:18,className:"text-green-400"}):n==="error"?a.jsx(_o,{size:18,className:"text-red-400"}):a.jsx(Gd,{size:18,className:"ks-muted"})}function AE({roomState:n,myUid:e}){if(!(n!=null&&n.players))return null;const t=Object.entries(n.players);return t.length===0?null:a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono",children:[a.jsx(Qd,{size:13}),"HRÁČI V MIESTNOSTI (",t.length,")"]}),a.jsx("div",{className:"divide-y ks-border-sub",children:t.map(([s,r])=>a.jsxs("div",{className:"flex items-center gap-3 px-4 py-3",children:[a.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${r.online?"bg-green-400":"bg-zinc-600"}`}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"ks-cream text-sm font-medium truncate",children:[r.name||"hráč",s===e&&a.jsx("span",{className:"ks-muted text-xs ml-1.5",children:"(ty)"})]}),a.jsx("div",{className:"ks-muted text-xs",children:r.online?"online":"offline"})]})]},s))})]})}function SE({onBack:n,activeSkin:e,activeRules:t,defaultRoomName:s}){const{roomId:r,uid:i,roomState:c,status:l,setRoomId:d,setUid:h,setRoomState:m,setStatus:p,reset:v}=Fr(),[T,S]=O.useState(""),[j,A]=O.useState(""),[B,R]=O.useState(""),[L,D]=O.useState(!1),[W,K]=O.useState(!1),[w,_]=O.useState(!!s),[y,x]=O.useState(s||""),k=async()=>{const ie=ui();return await ie.authStateReady(),ie.currentUser||await Wh(ie),ie.currentUser.uid},E=w&&y.trim()?y.trim():"hráč",b=async()=>{D(!0),R("");try{const ie=await k(),{roomId:ve}=await sp({hostName:E,selectedSkin:e||"classic",rules:t||[]});d(ve),h(ie),p("connected")}catch(ie){const ve=(ie==null?void 0:ie.message)||String(ie);R(`Chyba: ${ve}`),console.error("[OnlineScreen] createRoom failed:",ie)}finally{D(!1)}},se=async()=>{const ie=T.toUpperCase().trim();if(!ie){A("Zadaj kód miestnosti");return}D(!0),A("");try{const ve=await k();await IE({roomId:ie,playerName:E}),d(ie),h(ve),p("connected")}catch(ve){A(ve.message||"Miestnosť neexistuje")}finally{D(!1)}},_e=()=>{n()},ct=()=>{window.confirm("Naozaj sa chceš odhlásiť? Máš zapísaný kód miestnosti?")&&(v(),n())},vt=()=>{navigator.clipboard.writeText(r||"").then(()=>{K(!0),setTimeout(()=>K(!1),2e3)})};return a.jsxs("div",{className:"min-h-screen ks-bg ks-cream ks-body flex flex-col",children:[a.jsxs("div",{className:"flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-4 border-b ks-border-sub",children:[a.jsx("button",{onClick:_e,className:"ks-press p-2 rounded-sm ks-border-sub border",children:a.jsx(ys,{size:20,className:"ks-gold"})}),a.jsx("h2",{className:"ks-display ks-gold text-2xl font-semibold flex-1",children:"Online miestnosť"}),a.jsx(TE,{})]}),a.jsxs("div",{className:"flex-1 px-4 py-5 max-w-md w-full mx-auto flex flex-col gap-4 overflow-y-auto",children:[!r&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:a.jsxs("div",{className:"px-4 py-4 space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"ks-muted text-xs ks-mono block mb-1",children:"KÓD MIESTNOSTI"}),a.jsx("input",{value:T,onChange:ie=>{S(ie.target.value.toUpperCase().slice(0,8)),A(""),R("")},onKeyDown:ie=>ie.key==="Enter"&&se(),placeholder:"Zadaj existujúci kód",className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none ks-mono tracking-widest"})]}),a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>_(ie=>!ie),className:"flex items-center gap-2 ks-press",children:[a.jsx("div",{className:`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${w?"ks-gold-bg border-transparent":"ks-border-sub border"}`,children:w&&a.jsx(Fs,{size:11,className:"text-black"})}),a.jsx(Yl,{size:13,className:"ks-muted"}),a.jsx("span",{className:"ks-muted text-xs",children:"Chcem zadať meno zariadenia"})]}),a.jsx("p",{className:"ks-muted text-xs mt-1 ml-6 leading-relaxed opacity-70",children:"Meno sa zobrazí druhému zariadeniu. Je to len voliteľné označenie."}),w&&a.jsx("div",{className:"mt-3 ml-6",children:a.jsx("input",{value:y,onChange:ie=>x(ie.target.value.slice(0,20)),placeholder:"napr. Obývačka, Telefón...",autoFocus:!0,className:"w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"})})]}),j&&a.jsx("p",{className:"text-red-400 text-xs",children:j}),a.jsx("button",{onClick:se,disabled:L||!T.trim(),className:"ks-gold-bg w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm",children:L?"Pripájam...":"PRIPOJIŤ SA"})]})}),a.jsx("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:a.jsxs("div",{className:"px-4 py-4 space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Ra,{size:16,className:"ks-muted"}),a.jsx("h3",{className:"ks-cream font-semibold",children:"Vytvoriť novú miestnosť"})]}),a.jsx("p",{className:"ks-muted text-xs leading-relaxed",children:"Toto vytvorí nový kód miestnosti pre synchronizáciu aktuálnej hry, archívu a skinu."}),B&&a.jsx("p",{className:"text-red-400 text-xs",children:B}),a.jsx("button",{onClick:b,disabled:L,className:"border ks-border-sub w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm ks-gold",children:L?"Vytváram...":"VYTVORIŤ MIESTNOSŤ"})]})})]}),r&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b ks-border-sub",children:[a.jsxs("div",{className:"flex items-center gap-2 ks-muted text-xs ks-mono",children:[a.jsx(si,{size:13}),"AKTÍVNA MIESTNOSŤ"]}),a.jsxs("div",{className:`flex items-center gap-1.5 text-xs ks-mono ${l==="error"?"text-red-400":"text-green-400"}`,children:[a.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${l==="error"?"bg-red-400":"bg-green-400"}`}),l==="error"?"CHYBA":"ONLINE"]})]}),a.jsxs("div",{className:"px-4 py-6 text-center",children:[a.jsx("div",{className:"ks-gold ks-mono text-5xl font-bold tracking-widest mb-2",children:r}),a.jsx("div",{className:"ks-muted text-xs",children:"Zdieľaj tento kód s druhým zariadením"}),w&&y.trim()&&a.jsxs("div",{className:"mt-3 flex items-center justify-center gap-1.5 ks-muted text-xs",children:[a.jsx(Yl,{size:12}),a.jsxs("span",{children:["Toto zariadenie: ",a.jsx("span",{className:"ks-cream font-semibold",children:y.trim()})]})]})]}),a.jsxs("div",{className:"border-t ks-border-sub",children:[a.jsxs("button",{onClick:vt,className:"w-full flex items-center justify-center gap-2 py-3 ks-press ks-muted text-sm border-b ks-border-sub",children:[W?a.jsx(Fs,{size:16,className:"text-green-400"}):a.jsx(Yd,{size:16}),W?"Skopírované!":"Kopírovať kód"]}),a.jsxs("button",{onClick:ct,className:"w-full flex items-center justify-center gap-2 py-2.5 ks-press ks-muted text-xs",children:[a.jsx(Np,{size:14}),"Odhlásiť sa"]})]})]}),a.jsx(AE,{roomState:c,myUid:i})]}),a.jsxs("div",{className:"mt-auto ks-card border ks-border-sub rounded-sm px-4 py-4 flex gap-3",children:[a.jsx(Ra,{size:18,className:"ks-muted flex-shrink-0 mt-0.5"}),a.jsx("p",{className:"ks-muted text-sm leading-relaxed",children:"Synchronizuje sa aktuálna hra, archív hier a aktívny skin v reálnom čase cez Firebase. Každé zariadenie hrá lokálne."})]})]})]})}function Oi({label:n}){return a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-4 pb-1",children:n})}function Ia({icon:n,title:e,subtitle:t,value:s,onChange:r}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs leading-relaxed",children:t})]}),a.jsx("button",{onClick:()=>r(!s),role:"switch","aria-checked":s,style:{flexShrink:0,position:"relative",cursor:"pointer",width:36,height:20,borderRadius:10,border:"none",padding:0,background:s?"var(--ks-accent, #d4b86a)":"rgba(82,82,91,0.8)",transition:"background 0.2s"},children:a.jsx("span",{style:{position:"absolute",top:2,left:s?18:2,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.18s",boxShadow:"0 1px 3px rgba(0,0,0,0.35)"}})})]})}function NE({icon:n,title:e,subtitle:t,value:s,onChange:r,placeholder:i,maxLength:c=30,actionLabel:l,onAction:d}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{value:s,onChange:h=>r(h.target.value.slice(0,c)),placeholder:i,className:"flex-1 ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"}),l&&a.jsx("button",{onClick:d,className:"ks-gold-bg ks-press px-2.5 py-1 rounded-sm ks-mono text-xs font-bold flex-shrink-0",children:l})]})]})}function RE({icon:n,title:e,subtitle:t,value:s,onChange:r,min:i,max:c,step:l=50}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0",children:a.jsx(n,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]}),a.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[a.jsx("button",{onClick:()=>r(Math.max(i,s-l)),className:"w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none",children:"−"}),a.jsx("span",{className:"ks-mono ks-cream text-sm w-12 text-center",children:s}),a.jsx("button",{onClick:()=>r(Math.min(c,s+l)),className:"w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none",children:"+"})]})]})}function Ta({icon:n,title:e,subtitle:t,label:s,onClick:r,danger:i}){return a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm flex items-center gap-4",children:[a.jsx("div",{className:`w-12 h-12 rounded-sm border flex items-center justify-center flex-shrink-0 ${i?"border-red-700/50":"ks-border-sub"}`,children:a.jsx(n,{size:22,className:i?"text-red-400":"ks-gold"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:`ks-display text-lg font-semibold ${i?"text-red-300":"ks-cream"}`,children:e}),a.jsx("div",{className:"ks-muted text-xs",children:t})]}),a.jsx("button",{onClick:r,className:`ks-press px-2.5 py-1 rounded-sm ks-mono text-xs flex-shrink-0 ${i?"border border-red-700/50 text-red-400":"ks-gold-bg"}`,children:s})]})}function CE({adminSettings:n,tournaments:e,active:t,appVersion:s}){const r=(()=>{try{let c=0;for(const l of Object.keys(localStorage))c+=(localStorage.getItem(l)||"").length;return(c/1024).toFixed(1)+" KB"}catch{return"—"}})(),i=[["Verzia app",s||"1.5.3"],["Turnaje v archíve",`${(e==null?void 0:e.length)??0}`],["Aktívna hra",t?`${t.players.length} hráčov, kolo ${t.currentRound+1}`:"žiadna"],["localStorage",r],["Debug mód",n.debugMode?"zapnutý":"vypnutý"],["Custom room name",n.roomName||"(predvolené)"],["Min. zápis override",n.minWriteOffOverride?`${n.minWriteOffOverride} b.`:"vypnutý"]];return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono",children:[a.jsx(jp,{size:13}),"DIAGNOSTIKA"]}),a.jsx("div",{className:"divide-y ks-border-sub",children:i.map(([c,l])=>a.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5",children:[a.jsx("span",{className:"ks-muted text-xs",children:c}),a.jsx("span",{className:"ks-cream ks-mono text-xs",children:l})]},c))})]})}function PE({onBack:n,adminSettings:e,onAdminChange:t,tournaments:s,active:r,appVersion:i,onSimulateTurn:c,onExportState:l,onCreateRoom:d}){const[h,m]=O.useState(!1),p=O.useCallback((T,S)=>{t({...e,[T]:S})},[e,t]),v=()=>{l&&l(),m(!0),setTimeout(()=>m(!1),2500)};return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx(th,{title:"Admin nastavenia",onBack:n}),a.jsxs("div",{className:"mx-4 mt-3 mb-1 flex items-center gap-2 px-3 py-2 rounded-sm border border-amber-700/40 bg-amber-950/20",children:[a.jsx(fc,{size:14,className:"ks-gold flex-shrink-0"}),a.jsx("span",{className:"ks-muted text-xs",children:"Interné nastavenia — zmeny ovplyvňujú správanie aplikácie"})]}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx(Oi,{label:"ONLINE MIESTNOSŤ"}),a.jsx(NE,{icon:si,title:"Vlastný kód miestnosti",subtitle:"Zadaj vlastný kód miestnosti (napr. RUBIKON) a stlač VYTVORIŤ — miestnosť sa vytvorí okamžite s týmto kódom, aktuálnym skinom a pravidlami.",value:e.roomName||"",onChange:T=>p("roomName",T),placeholder:"napr. Obývačka, Tablet Marcel...",maxLength:24,actionLabel:"VYTVORIŤ",onAction:d}),a.jsx(Oi,{label:"DEBUG A TESTOVANIE"}),a.jsx(Ia,{icon:Rp,title:"Debug mód",subtitle:"Zobrazí overlay s interným stavom hry (currentPlayer, currentRound, pendingDecision, winner).",value:!!e.debugMode,onChange:T=>p("debugMode",T)}),a.jsx(Ta,{icon:Jd,title:"Simulovať ťah",subtitle:"Automaticky zapíše náhodné skóre (násobok 50) pre aktuálneho hráča. Len pri aktívnej hre.",label:"Simuluj",onClick:c}),a.jsx(Ta,{icon:Yd,title:"Export stavu do schránky",subtitle:"Skopíruje celý stav aplikácie (tournaments, active, adminSettings) ako JSON.",label:h?"✓ Skopírované":"Kopírovať",onClick:v}),a.jsx(Oi,{label:"OVERRIDE HERNÝCH HODNÔT"}),a.jsx(Ia,{icon:Ql,title:"Override min. zápis",subtitle:"Ak zapnuté, prepisuje pravidlo minWriteOff pre všetky turnaje v tejto session.",value:!!e.minWriteOffOverride,onChange:T=>p("minWriteOffOverride",T?50:null)}),e.minWriteOffOverride!=null&&a.jsx(RE,{icon:Ql,title:"Hodnota min. zápisu",subtitle:"Aktuálna override hodnota (predvolená v pravidlách je 300 b.)",value:e.minWriteOffOverride||50,onChange:T=>p("minWriteOffOverride",T),min:50,max:1e3,step:50}),a.jsx(Ia,{icon:Cp,title:"Verbose Firebase logy",subtitle:"Zapne podrobné logy Firebase operácií do konzoly prehliadača.",value:!!e.verboseFirebase,onChange:T=>p("verboseFirebase",T)}),a.jsx(Oi,{label:"SYSTÉM"}),a.jsx(CE,{adminSettings:e,tournaments:s,active:r,appVersion:i}),a.jsx(Ta,{icon:Pp,title:"Resetovať admin nastavenia",subtitle:"Vráti všetky admin nastavenia na predvolené hodnoty. Dáta turnajov ostanú nedotknuté.",label:"Reset",onClick:()=>t(rp),danger:!0})]})]})}const jE="58290347";function DE({onSuccess:n,onCancel:e}){const[t,s]=O.useState(""),[r,i]=O.useState(!1),c=()=>{t===jE?n():(i(!0),s(""),setTimeout(()=>i(!1),1500))};return a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6",children:a.jsxs("div",{className:"ks-card border ks-border-sub rounded-sm w-full max-w-xs p-6 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[a.jsx(fc,{size:18,className:"ks-gold"}),a.jsx("h3",{className:"ks-display ks-gold text-xl font-semibold",children:"Admin prístup"})]}),a.jsx("p",{className:"ks-muted text-xs leading-relaxed",children:"Zadaj prístupový kód pre admin nastavenia."}),a.jsx("input",{type:"password",inputMode:"numeric",maxLength:8,value:t,onChange:l=>{s(l.target.value.replace(/\D/g,"").slice(0,8)),i(!1)},onKeyDown:l=>l.key==="Enter"&&c(),placeholder:"••••••••",autoFocus:!0,className:`w-full ks-card px-3 py-3 rounded-sm bg-transparent border outline-none ks-mono text-center text-xl tracking-[0.4em] transition-colors ${r?"border-red-500 text-red-400":"ks-border-sub ks-cream"}`}),r&&a.jsx("p",{className:"text-red-400 text-xs text-center",children:"Nesprávny kód"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:e,className:"flex-1 py-2.5 border ks-border-sub rounded-sm ks-muted text-sm ks-press",children:"Zrušiť"}),a.jsx("button",{onClick:c,className:"flex-1 py-2.5 ks-gold-bg rounded-sm ks-mono text-sm font-bold ks-press",children:"Potvrdiť"})]})]})})}const rp={roomName:"",debugMode:!1,minWriteOffOverride:null,verboseFirebase:!1};function OE(n,e,t){O.useEffect(()=>{if(!n)return;const s=ul(gl,"rooms",n),r=bE(s,i=>{i.exists()&&(console.log("[useRoomSubscription] update:",n),e(i.data()))},i=>{console.error("[useRoomSubscription] chyba:",i.code,i.message),t==null||t(i)});return()=>r()},[n])}function yl(n,e){return new Array(e).fill(0).map((t,s)=>{let r=0;for(const i of Array.isArray(n)?n:[]){const c=i==null?void 0:i[s];typeof c=="number"&&Number.isFinite(c)&&(r+=c)}return r})}function VE(n){var t;const e=n==null?void 0:n._suddenWin;return e&&typeof e.playerIdx=="number"&&e.playerIdx>=0&&e.playerIdx<(((t=n.players)==null?void 0:t.length)??0)?{isSuddenWin:!0,playerIdx:e.playerIdx,round:e.round??null}:{isSuddenWin:!1,playerIdx:null,round:null}}function yo(n){const e=(n==null?void 0:n.players)||[],t=(n==null?void 0:n.rounds)||[],s=(n==null?void 0:n.targetScore)||1e4,r=yl(t,e.length),i=VE(n);if(i.isSuddenWin){const S=i.playerIdx;return{winners:[S],totals:r,playerTotals:r,achievers:[S],pendingAchievers:[],isDraw:!1,valid:!0,errors:[],reason:`Náhla výhra — hráč ${e[S]} hodil 6 rovnakých s 6 kockami.`,isSuddenWin:!0}}if(n.pendingDecision&&n.pendingDecision.status==="pending")return{winners:[],totals:r,playerTotals:r,achievers:[],pendingAchievers:[],isDraw:!1,valid:!1,errors:["Hra čaká na rozhodnutie skupiny (pendingDecision)."],reason:"Otvorené pendingDecision — hra ešte nemá finálny výsledok.",isSuddenWin:!1};const c=r.map((S,j)=>({idx:j,total:S})).filter(S=>S.total>=s).map(S=>S.idx);if(c.length===0)return{winners:[],totals:r,playerTotals:r,achievers:[],pendingAchievers:[],isDraw:!1,valid:!0,errors:[],reason:"Žiadny hráč ešte nedosiahol cieľ.",isSuddenWin:!1};const l=(n.rules||[]).find(S=>S.id==="r18"),d=!l||l.selected!=="Áno";let h=[],m="",p=[];if(d){const S=c.map(A=>{var R;let B=0;for(let L=0;L<t.length;L++){const D=(R=t[L])==null?void 0:R[A];if(typeof D=="number"&&Number.isFinite(D)&&(B+=D),B>=s)return{idx:A,round:L}}return{idx:A,round:1/0}}),j=Math.min(...S.map(A=>A.round));h=S.filter(A=>A.round===j).map(A=>A.idx),m=h.length===1?`Hráč dosiahol cieľ ako prvý v kole ${j+1}.`:`${h.length} hráči dosiahli cieľ v rovnakom kole (${j+1}). Remíza.`}else{const j=(Array.isArray(n._confirmedDetailed)?n._confirmedDetailed:[]).filter(R=>c.includes(R.player));if(p=c.filter(R=>!j.some(L=>L.player===R)),j.length===0)return{winners:[],totals:r,playerTotals:r,achievers:c,pendingAchievers:p,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${c.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`],reason:`${c.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.`,isSuddenWin:!1};if(p.length>0)return{winners:[],totals:r,playerTotals:r,achievers:c,pendingAchievers:p,isDraw:!1,valid:!1,errors:[`Turnaj sa nedá uzatvoriť — ${p.length} hráč(ov) ešte nepotvrdil(i) výhru.`],reason:`${p.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.`,isSuddenWin:!1};const A=Math.min(...j.map(R=>R.round));h=j.filter(R=>R.round===A).map(R=>R.player),m=h.length===1?`Víťazstvo potvrdené najskôr v kole ${A+1}.`:`${h.length} hráči potvrdili víťazstvo v rovnakom kole (${A+1}). Remíza.`}const v=[];for(const S of h){if(typeof S!="number"||S<0||S>=e.length){v.push(`Neplatný index víťaza: ${S}.`);continue}r[S]<s&&v.push(`Víťaz "${e[S]}" má skóre ${r[S]}, čo je menej ako cieľ ${s}.`)}const T=v.length===0;return{winners:T?h:[],playerTotals:r,achievers:c,pendingAchievers:p,isDraw:T&&h.length>1,valid:T,errors:v,reason:m,isSuddenWin:!1}}let Aa=null,kr=!0;function Vi(){return Aa||(Aa=new(window.AudioContext||window.webkitAudioContext)),Aa}const Sa={setEnabled(n){kr=n},playClick(){if(kr)try{const n=Vi(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(n.destination),e.frequency.value=880,e.type="sine",t.gain.setValueAtTime(.12,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.06),e.start(),e.stop(n.currentTime+.06)}catch{}},playWin(){if(kr)try{const n=Vi();[523,659,784,1047].forEach((e,t)=>{const s=n.createOscillator(),r=n.createGain();s.connect(r),r.connect(n.destination),s.frequency.value=e,s.type="triangle";const i=n.currentTime+t*.14;r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.18,i+.04),r.gain.exponentialRampToValueAtTime(.001,i+.35),s.start(i),s.stop(i+.35)})}catch{}},playStart(){if(kr)try{const n=Vi();[330,392,494].forEach((e,t)=>{const s=n.createOscillator(),r=n.createGain();s.connect(r),r.connect(n.destination),s.frequency.value=e,s.type="square";const i=n.currentTime+t*.08;r.gain.setValueAtTime(.08,i),r.gain.exponentialRampToValueAtTime(.001,i+.15),s.start(i),s.stop(i+.15)})}catch{}},playPenalty(){if(kr)try{const n=Vi(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(n.destination),e.frequency.value=180,e.type="sawtooth",t.gain.setValueAtTime(.15,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.25),e.start(),e.stop(n.currentTime+.25)}catch{}}},LE=["🎲","🎲","🃏","🪙","🎰","⭐","💠","🎲"],ME=["💠","🌊","⚡","🔷","❄️","🌀","💎","⚡"],UE=["⚡","🦉","🪄","✨","🔮","🐍","⭐","🪄"],FE={brawlstars:"ks-brawl-float",brawlblue:"ks-brawl-float",harrypotter:"ks-hp-float"};function zE({skin:n}){const e=n==="brawlblue"?ME:n==="harrypotter"?UE:LE,t=FE[n]||"ks-brawl-float",s=O.useMemo(()=>e.map((r,i)=>({sym:r,left:`${8+i*12%84}%`,animationDelay:`${i*1.4}s`,animationDuration:`${10+i%4*2}s`,fontSize:`${1.5+i%3*.45}rem`})),[n]);return a.jsx(a.Fragment,{children:s.map((r,i)=>a.jsx("span",{className:t,style:{left:r.left,animationDelay:r.animationDelay,animationDuration:r.animationDuration,fontSize:r.fontSize},children:r.sym},i))})}const $E={1:Gp,2:Kp,3:qp,4:Wp,5:Hp,6:Bp},bo={classic:{id:"classic",name:"Klasik",bg:"radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)",vars:{"--ks-bg-main":"#0e0c0a","--ks-bg-soft":"rgba(28,22,16,0.85)","--ks-bg-soft-2":"rgba(18,14,10,0.92)","--ks-card-sub":"rgba(20,16,12,0.6)","--ks-border":"rgba(201,168,92,0.18)","--ks-border-strong":"rgba(212,184,106,0.55)","--ks-text":"#f3ead4","--ks-text-muted":"#a89679","--ks-accent":"#d4b86a","--ks-accent-2":"#b8954a","--ks-button-text":"#1a1410","--ks-danger":"#efb0b0"}},forest:{id:"forest",name:"Les",bg:"radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)",vars:{"--ks-bg-main":"#09110d","--ks-bg-soft":"rgba(17,34,24,0.84)","--ks-bg-soft-2":"rgba(10,21,14,0.94)","--ks-card-sub":"rgba(12,23,16,0.62)","--ks-border":"rgba(175,160,95,0.22)","--ks-border-strong":"rgba(200,188,116,0.52)","--ks-text":"#eef0d8","--ks-text-muted":"#aeb495","--ks-accent":"#d7c56d","--ks-accent-2":"#7e9e56","--ks-button-text":"#152013","--ks-danger":"#f0b3b3"}},royal:{id:"royal",name:"Royal",bg:"radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)",vars:{"--ks-bg-main":"#0d0918","--ks-bg-soft":"rgba(24,18,45,0.86)","--ks-bg-soft-2":"rgba(14,10,28,0.95)","--ks-card-sub":"rgba(22,16,40,0.62)","--ks-border":"rgba(196,167,255,0.24)","--ks-border-strong":"rgba(214,183,106,0.46)","--ks-text":"#f2eaff","--ks-text-muted":"#b6a6d8","--ks-accent":"#d4b86a","--ks-accent-2":"#8e66d9","--ks-button-text":"#170f25","--ks-danger":"#ffc0d9"}},parchment:{id:"parchment",name:"Pergamen",bg:"linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)",vars:{"--ks-bg-main":"#f7f0e0","--ks-bg-soft":"rgba(255,252,246,0.98)","--ks-bg-soft-2":"rgba(251,245,235,1.0)","--ks-card-sub":"rgba(244,236,223,0.98)","--ks-border":"rgba(174,140,88,0.34)","--ks-border-strong":"rgba(160,120,60,0.72)","--ks-text":"#6b5235","--ks-text-muted":"#8e7150","--ks-accent":"#7a4f1f","--ks-accent-2":"#d8b684","--ks-button-text":"#f9f2e6","--ks-danger":"#8f3a3a","--ks-sticky-bg":"rgba(247,240,224,0.97)","--ks-sticky-bg2":"rgba(241,233,216,0.98)"}},walnut:{id:"walnut",name:"Orech",bg:"linear-gradient(180deg,#24150c 0%,#140d09 100%)",vars:{"--ks-bg-main":"#1a100b","--ks-bg-soft":"rgba(45,25,14,0.85)","--ks-bg-soft-2":"rgba(26,15,9,0.95)","--ks-card-sub":"rgba(33,19,12,0.66)","--ks-border":"rgba(205,155,94,0.23)","--ks-border-strong":"rgba(224,184,123,0.55)","--ks-text":"#f4e2c8","--ks-text-muted":"#be9f78","--ks-accent":"#dfb06b","--ks-accent-2":"#8c4f21","--ks-button-text":"#24150c","--ks-danger":"#f0b9a2","--ks-sticky-bg":"rgba(14,12,10,0.97)","--ks-sticky-bg2":"rgba(10,8,6,0.98)"}},rosered:{id:"rosered",name:"Rose Red",bg:"radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)",vars:{"--ks-bg-main":"#1a0710","--ks-bg-soft":"rgba(46,12,24,0.86)","--ks-bg-soft-2":"rgba(28,10,18,0.95)","--ks-card-sub":"rgba(36,11,20,0.64)","--ks-border":"rgba(236,128,152,0.26)","--ks-border-strong":"rgba(255,170,191,0.56)","--ks-text":"#ffe7ec","--ks-text-muted":"#d2a2af","--ks-accent":"#f2a0b3","--ks-accent-2":"#c24569","--ks-button-text":"#2b0b15","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},ruby:{id:"ruby",name:"Rubín",bg:"radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)",vars:{"--ks-bg-main":"#15060b","--ks-bg-soft":"rgba(44,10,18,0.86)","--ks-bg-soft-2":"rgba(24,8,14,0.95)","--ks-card-sub":"rgba(34,10,17,0.66)","--ks-border":"rgba(234,115,132,0.26)","--ks-border-strong":"rgba(255,166,180,0.58)","--ks-text":"#ffe9ec","--ks-text-muted":"#d7aab2","--ks-accent":"#ff6f86","--ks-accent-2":"#b92e4a","--ks-button-text":"#2a0810","--ks-danger":"#ffb4c2","--ks-sticky-bg":"rgba(24,8,14,0.97)","--ks-sticky-bg2":"rgba(18,6,10,0.98)"}},blackwhite:{id:"blackwhite",name:"Čierno-biely",bg:"#000000",vars:{"--ks-bg-main":"#000000","--ks-bg-soft":"rgba(18,18,18,0.98)","--ks-bg-soft-2":"rgba(24,24,24,1.0)","--ks-card-sub":"rgba(28,28,28,0.98)","--ks-border":"rgba(255,255,255,0.22)","--ks-border-strong":"rgba(255,255,255,0.55)","--ks-text":"#ffffff","--ks-text-muted":"#aaaaaa","--ks-accent":"#ffffff","--ks-accent-2":"#444444","--ks-button-text":"#000000","--ks-danger":"#ff4444","--ks-sticky-bg":"rgba(6,6,6,0.99)","--ks-sticky-bg2":"rgba(0,0,0,1.0)"}},whiteblack:{id:"whiteblack",name:"Bielo-čierny",bg:"linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)",vars:{"--ks-bg-main":"#f5f5f5","--ks-bg-soft":"rgba(255,255,255,0.98)","--ks-bg-soft-2":"rgba(250,250,250,1.0)","--ks-card-sub":"rgba(245,245,245,0.98)","--ks-border":"rgba(0,0,0,0.15)","--ks-border-strong":"rgba(0,0,0,0.40)","--ks-text":"#111111","--ks-text-muted":"#555555","--ks-accent":"#111111","--ks-accent-2":"#cccccc","--ks-button-text":"#ffffff","--ks-danger":"#cc0000","--ks-sticky-bg":"rgba(240,240,240,0.99)","--ks-sticky-bg2":"rgba(230,230,230,1.0)"}},brawlstars:{id:"brawlstars",name:"Brawl Stars",bg:"radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)",vars:{"--ks-bg-main":"#1a0830","--ks-bg-soft":"rgba(52,18,80,0.92)","--ks-bg-soft-2":"rgba(28,10,45,0.96)","--ks-card-sub":"rgba(40,14,62,0.74)","--ks-border":"rgba(200,80,220,0.28)","--ks-border-strong":"rgba(230,120,255,0.62)","--ks-text":"#f8e8ff","--ks-text-muted":"#c0a0d8","--ks-accent":"#e070d0","--ks-accent-2":"#8030b0","--ks-button-text":"#280a3a","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(20,6,34,0.97)","--ks-sticky-bg2":"rgba(14,4,24,0.98)"}},brawlblue:{id:"brawlblue",name:"Brawl Blue",bg:"radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)",vars:{"--ks-bg-main":"#061e54","--ks-bg-soft":"rgba(10,48,110,0.92)","--ks-bg-soft-2":"rgba(6,26,65,0.96)","--ks-card-sub":"rgba(8,36,88,0.74)","--ks-border":"rgba(40,180,240,0.28)","--ks-border-strong":"rgba(80,210,255,0.62)","--ks-text":"#e8f4ff","--ks-text-muted":"#90b8d8","--ks-accent":"#40d8f0","--ks-accent-2":"#2878c8","--ks-button-text":"#030e28","--ks-danger":"#ff6090","--ks-sticky-bg":"rgba(4,14,44,0.97)","--ks-sticky-bg2":"rgba(3,10,32,0.98)"}},harrypotter:{id:"harrypotter",name:"Harry Potter",bg:"radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg,#f8ecd4 0%,#efe0b8 40%,#e8d6a4 70%,#f2e8c8 100%)",vars:{"--ks-bg-main":"#f0e2c0","--ks-bg-soft":"rgba(252,244,226,0.97)","--ks-bg-soft-2":"rgba(248,238,215,1.0)","--ks-card-sub":"rgba(244,232,206,0.98)","--ks-border":"rgba(140,88,18,0.30)","--ks-border-strong":"rgba(160,100,20,0.62)","--ks-text":"#271608","--ks-text-muted":"#7a5030","--ks-accent":"#8b5814","--ks-accent-2":"#740001","--ks-button-text":"#f8f0de","--ks-danger":"#aa2020","--ks-sticky-bg":"rgba(244,232,202,0.97)","--ks-sticky-bg2":"rgba(238,224,192,0.98)"}}},lc={default:{id:"default",name:"Default",stack:"'Cormorant Garamond', 'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},calibri:{id:"calibri",name:"Calibri",stack:"'Calibri', 'Segoe UI', sans-serif",monoStack:"'Bebas Neue', sans-serif"},arial:{id:"arial",name:"Arial",stack:"Arial, 'Helvetica Neue', sans-serif",monoStack:"'Bebas Neue', sans-serif"},crimson:{id:"crimson",name:"Crimson Pro",stack:"'Crimson Pro', Georgia, serif",monoStack:"'Bebas Neue', sans-serif"},comicsans:{id:"comicsans",name:"Comic Sans MS",stack:"'Comic Sans MS', 'Comic Sans', cursive",monoStack:"'Bebas Neue', sans-serif"},inkfree:{id:"inkfree",name:"Ink Free",stack:"'Ink Free', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"},caveatbrush:{id:"caveatbrush",name:"Caveat Brush",stack:"'Caveat Brush', 'Segoe Script', cursive",monoStack:"'Bebas Neue', sans-serif"}};function BE(n,e){const t=lc[e]||lc.default,r=(bo[n]||bo.classic).vars;let i=":root{"+Object.entries(r).map(([c,l])=>`${c}:${l}`).join(";")+`;--ks-font-display:${t.stack};--ks-font-body:${t.stack};--ks-font-mono:${t.monoStack}}`;return n==="blackwhite"&&(i+=`
.ks-gold{color:#fff!important}
.ks-cream{color:#fff!important}
.ks-muted{color:#aaa!important}
.ks-gold-bg{background:#fff!important;color:#000!important}
.ks-card{background:rgba(16,16,16,0.98)!important;border-color:rgba(255,255,255,0.20)!important}
.ks-card:hover{border-color:rgba(255,255,255,0.42)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(255,255,255,0.10)!important}
.ks-live-pos-1{color:#fff!important;border-color:rgba(255,255,255,0.6)!important}
.ks-live-pos-2{color:#ccc!important}
.ks-live-pos-3{color:#999!important}
`),n==="parchment"&&(i+=`
.ks-card{background:rgba(248,241,226,0.96)!important;border-color:rgba(195,165,112,0.36)!important}
.ks-card:hover{border-color:rgba(200,165,95,0.60)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(195,165,112,0.25)!important}
.ks-live-row:hover td{background:rgba(232,218,196,0.55)!important}
`),n==="whiteblack"&&(i+=`
.ks-gold{color:#111!important}
.ks-cream{color:#111!important}
.ks-muted{color:#555!important}
.ks-gold-bg{background:#111!important;color:#fff!important}
.ks-card{background:rgba(255,255,255,0.97)!important;border-color:rgba(0,0,0,0.13)!important}
.ks-card:hover{border-color:rgba(0,0,0,0.30)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(0,0,0,0.08)!important}
.ks-live-row:hover td{background:rgba(220,220,220,0.45)!important}
.ks-press{border-color:rgba(0,0,0,0.25)!important}
.ks-press:hover{background:rgba(0,0,0,0.07)!important}
.ks-live-pos-1{color:#111!important;border-color:rgba(0,0,0,0.55)!important}
.ks-live-pos-2{color:#333!important}
.ks-live-pos-3{color:#666!important}
`),n==="brawlstars"&&(i+=`
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(80,20,120,0.96),rgba(10,4,28,0.98));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(60,15,100,0.96),rgba(10,4,28,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(100,20,140,0.96),rgba(15,5,35,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(30,8,70,0.97),rgba(5,2,15,0.99));
--ks-modal-overlay:rgba(20,6,40,0.82);
--ks-modal-dark-overlay:rgba(10,4,28,0.94);
--ks-popup-accent:#e070d0;
--ks-glow-orb:rgba(180,80,220,0.50);
--ks-toast-info-bg:rgba(44,10,68,0.92);
--ks-toast-warn-bg:rgba(60,12,88,0.88);
--ks-toast-info-border:rgba(200,80,220,0.70);
--ks-toast-warn-border:rgba(230,120,255,0.60);
}
.ks-gold{color:#e070d0!important}
.ks-gold-bg{background:linear-gradient(135deg,#b030b0,#6010a0)!important;box-shadow:0 0 18px rgba(200,80,230,0.65)!important}
.ks-card{background:rgba(44,16,68,0.90)!important;border-color:rgba(200,80,220,0.32)!important;box-shadow:0 0 12px rgba(160,60,200,0.30)!important}
.ks-border-sub{border-color:rgba(200,80,220,0.20)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(200,80,220,0.18)!important}
.ks-live-row:hover td{background:rgba(80,20,110,0.35)!important}
`),n==="brawlblue"&&(i+=`
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(10,50,130,0.96),rgba(3,10,42,0.98));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(8,40,110,0.96),rgba(3,10,42,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(10,70,160,0.96),rgba(3,14,54,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(5,25,70,0.97),rgba(2,6,24,0.99));
--ks-modal-overlay:rgba(3,12,42,0.82);
--ks-modal-dark-overlay:rgba(3,10,42,0.94);
--ks-popup-accent:#40d8f0;
--ks-glow-orb:rgba(40,180,240,0.50);
--ks-toast-info-bg:rgba(6,28,80,0.92);
--ks-toast-warn-bg:rgba(8,36,100,0.88);
--ks-toast-info-border:rgba(40,180,240,0.70);
--ks-toast-warn-border:rgba(80,210,255,0.60);
}
.ks-gold{color:#40d8f0!important}
.ks-gold-bg{background:linear-gradient(135deg,#1a96d8,#0e5cac)!important;box-shadow:0 0 18px rgba(40,180,240,0.65)!important}
.ks-card{background:rgba(8,38,90,0.90)!important;border-color:rgba(40,180,240,0.30)!important;box-shadow:0 0 12px rgba(30,140,200,0.28)!important}
.ks-border-sub{border-color:rgba(40,180,240,0.18)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(40,180,240,0.14)!important}
.ks-live-row:hover td{background:rgba(10,60,130,0.40)!important}
`),n==="harrypotter"&&(i+=`
.ks-gold{color:#6b3e0c!important}
.ks-cream{color:#271608!important}
.ks-muted{color:#7a5030!important}
.ks-gold-bg{background:linear-gradient(135deg,#8b5814,#740001)!important;color:#f8f0de!important}
.ks-card{background:rgba(252,244,226,0.96)!important;border-color:rgba(150,95,22,0.30)!important}
.ks-card:hover{border-color:rgba(150,95,22,0.55)!important}
.ks-card-prom{background:rgba(248,238,210,0.97)!important;border-color:rgba(160,100,20,0.55)!important}
.ks-border-sub{border-color:rgba(150,95,22,0.22)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(150,95,22,0.20)!important}
.ks-live-row:hover td{background:rgba(238,220,188,0.55)!important}
.ks-live-pos-1{color:#6b3e0c!important;border-color:rgba(140,88,18,0.55)!important}
.ks-live-pos-2{color:#7a5030!important}
.ks-live-pos-3{color:#8a6040!important}
.ks-divider{background:linear-gradient(90deg,transparent,rgba(140,88,18,0.38),transparent)!important}
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(120,80,15,0.94),rgba(30,18,5,0.97));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(100,60,10,0.94),rgba(28,16,4,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(140,60,10,0.95),rgba(35,18,4,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(80,15,10,0.97),rgba(20,6,4,0.99));
--ks-modal-overlay:rgba(30,18,5,0.78);
--ks-modal-dark-overlay:rgba(25,15,4,0.94);
--ks-popup-accent:#c49a28;
--ks-glow-orb:rgba(196,154,40,0.45);
--ks-toast-info-bg:rgba(44,28,6,0.94);
--ks-toast-warn-bg:rgba(55,30,4,0.90);
--ks-toast-info-border:rgba(160,100,20,0.70);
--ks-toast-warn-border:rgba(200,140,30,0.60);
}
`),i}const zd=[50,100,300,400,500,600,1e3,1500,2e3],xr=-1e3,$d=[{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Čo ti to rieši?!",emoji:"🤨",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"doubt"},{msg:"Tak bojuj nééé?!?",emoji:"😄",variant:"fight"},{msg:"Také mrviny? Vážne?",emoji:"😀",variant:"doubt"},{msg:"Toto ťa nezachráni…",emoji:"💀",variant:"doom"},{msg:"Tak takto sa hra nevyhráva!",emoji:"🎭",variant:"fight"},{msg:"Hej majster… si si istý?",emoji:"😆",variant:"doubt"},{msg:"Riskni to konečne!",emoji:"🎲",variant:"fight"}],Rr=[{id:"cat-basic",title:"Bodové hodnoty kociek",subtitle:"Samostatné kocky",ruleIds:["r1","r2"]},{id:"cat-trio",title:"Trojice rovnakých",subtitle:"Tri rovnaké kocky",ruleIds:["r3","r4","r5","r6","r7","r8"]},{id:"cat-special",title:"Špeciálne kombinácie",subtitle:"Postupka a tri páry",ruleIds:["r9","r10"]},{id:"cat-multi",title:"Násobky kociek",subtitle:"Štyri, päť, šesť rovnakých",ruleIds:["r11","r12","r13"]}],Bd=["r14","r15","r16","r17","r18"];function ti(n){return n?new Date(n).toLocaleString("sk-SK",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function ip(n,e){if(!n||!e)return null;const t=new Date(e)-new Date(n);if(t<0)return null;const s=Math.floor(t/6e4);if(s<60)return`${s} min`;const r=Math.floor(s/60),i=s%60;return`${r} h ${i} min`}const ni={POPUP_DISPLAY_DURATION:2e3,QUEUE_SIZE:1,VERTICAL_OFFSET:"0px",OPACITY:.92},Li=[{id:"r1",name:"Jednotka",description:"Samostatná kocka s hodnotou 1",points:100,type:"numeric",dice:[1]},{id:"r2",name:"Päťka",description:"Samostatná kocka s hodnotou 5",points:50,type:"numeric",dice:[5]},{id:"r3",name:"Tri jednotky",description:"Trojica jednotiek",points:1e3,type:"numeric",dice:[1,1,1]},{id:"r4",name:"Tri dvojky",description:"Trojica dvojok",points:200,type:"numeric",dice:[2,2,2]},{id:"r5",name:"Tri trojky",description:"Trojica trojok",points:300,type:"numeric",dice:[3,3,3]},{id:"r6",name:"Tri štvorky",description:"Trojica štvoriek",points:400,type:"numeric",dice:[4,4,4]},{id:"r7",name:"Tri päťky",description:"Trojica päťok",points:500,type:"numeric",dice:[5,5,5]},{id:"r8",name:"Tri šestky",description:"Trojica šestiek",points:600,type:"numeric",dice:[6,6,6]},{id:"r9",name:"Postupka 1–6",description:"Šesť kociek za sebou: 1·2·3·4·5·6",points:2e3,type:"numeric",dice:[1,2,3,4,5,6]},{id:"r10",name:"Tri páry",description:"Tri rôzne páry kociek",points:1e3,type:"numeric",dice:[2,2,4,4,6,6]},{id:"r11",name:"Štyri rovnaké",description:"Štyri rovnaké kocky",points:0,type:"select",options:["Dvojnásobok trojice","Pevná hodnota"],selected:"Dvojnásobok trojice",dice:[3,3,3,3]},{id:"r12",name:"Päť rovnakých",description:"Päť rovnakých kociek",points:0,type:"select",options:["Štvornásobok trojice","Pevná hodnota"],selected:"Štvornásobok trojice",dice:[4,4,4,4,4]},{id:"r13",name:"Šesť rovnakých",description:"Všetkých šesť kociek rovnakých",points:0,type:"select",options:["Automatická výhra","Pevná hodnota 3000"],selected:"Automatická výhra",dice:[5,5,5,5,5,5]},{id:"r14",name:"Minimálny odpis (prvý zápis)",description:"Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (—) bez bodov.",points:300,type:"numeric",dice:[]},{id:"r15",name:"Cieľové skóre",description:"Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.",points:1e4,type:"numeric",dice:[]},{id:"r16",name:"Nič nehodené",description:"Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.",points:-1e3,type:"numeric",dice:[2,3,4,6]},{id:"r17",name:"Prekročenie cieľa",description:"Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (—).",points:0,type:"select",options:["Automatická čiarka","Hod sa neuznáva"],selected:"Automatická čiarka",dice:[]},{id:"r18",name:"Režim potvrdenia víťazstva",description:"Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.",points:0,type:"select",options:["Áno","Nie"],selected:"Áno",dice:[]}];function uc({value:n,size:e=28}){const t=$E[n];return t?a.jsx(t,{size:e,strokeWidth:1.5}):null}function op({dice:n,size:e=24}){return!n||n.length===0?a.jsx("span",{className:"ks-muted text-sm italic",children:"—"}):a.jsx("div",{className:"flex flex-wrap gap-1 items-center",children:n.map((t,s)=>a.jsx("div",{className:"ks-gold",style:{display:"inline-flex"},children:a.jsx(uc,{value:t,size:e})},s))})}function dt({children:n,onClick:e,disabled:t,className:s="",icon:r,variant:i="gold"}){const c="ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider",l={gold:"ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent",outline:"border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed",ghost:"ks-cream hover:bg-stone-800/50 disabled:opacity-30",danger:"border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30"};return a.jsxs("button",{onClick:e,disabled:t,className:`${c} ${l[i]} ${s}`,children:[r&&a.jsx(r,{size:18,strokeWidth:2}),n]})}function $n({title:n,onBack:e,right:t}){return a.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b ks-border-sub",children:[e?a.jsxs("button",{onClick:e,className:"ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1",children:[a.jsx(ys,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}):a.jsx("div",{className:"w-16"}),a.jsx("h2",{className:"ks-display ks-gold text-xl font-semibold text-center",children:n}),a.jsx("div",{className:"w-16 flex justify-end",children:t})]})}function HE({msg:n,kind:e,onClose:t}){const s={info:"ks-border-accent bg-amber-950/90 ks-cream",warn:"border-amber-600/70 bg-amber-900/80 ks-text-accent",overshoot:"border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50"},r=e==="overshoot"?vo:e==="warn"?_o:Fs;return a.jsx("div",{className:"fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor",style:{pointerEvents:"none"},children:a.jsxs("div",{className:`max-w-md mx-auto p-3 rounded-sm border ${s[e]||s.info} flex items-start gap-2 shadow-2xl`,style:{pointerEvents:"auto",opacity:"var(--ks-popup-opacity, 0.92)"},children:[a.jsx(r,{size:20,className:"shrink-0 mt-0.5"}),a.jsx("div",{className:"ks-body flex-1 text-sm font-medium",children:n}),a.jsx("button",{"aria-label":"Zatvoriť",onClick:t,className:"opacity-70 hover:opacity-100",children:a.jsx(Bn,{size:16})})]})})}function ap({size:n=96,color:e="#d4b86a",strikeColor:t="#c44848"}){return a.jsxs("svg",{width:n,height:n,viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"},children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"crownGold",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"1"}),a.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.7"})]})}),a.jsx("path",{d:"M 16 36 L 24 60 L 72 60 L 80 36 L 66 48 L 48 24 L 30 48 Z",fill:"url(#crownGold)",stroke:e,strokeWidth:"2",strokeLinejoin:"round"}),a.jsx("rect",{x:"22",y:"60",width:"52",height:"8",fill:e,stroke:e,strokeWidth:"1",rx:"1"}),a.jsx("circle",{cx:"48",cy:"32",r:"3.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("circle",{cx:"20",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("circle",{cx:"76",cy:"42",r:"2.5",fill:"#fff",stroke:e,strokeWidth:"1"}),a.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:"#000",strokeWidth:"7",strokeLinecap:"round",opacity:"0.5"}),a.jsx("line",{x1:"10",y1:"78",x2:"86",y2:"18",stroke:t,strokeWidth:"4",strokeLinecap:"round"})]})}function Mi({kind:n,title:e,subtitle:t,onClose:s,actionLabel:r}){const i={victory:{accent:"#d4b86a",label:"VÍŤAZ"},draw:{accent:"#d4b86a",label:"REMÍZA"},"temporary-king":{accent:"#c44848",label:"DOČASNÝ KRÁĽ"},"win-pending":{accent:"#d4b86a",label:"POTVRD VÝHRU"}}[n]||{accent:"#d4b86a",label:""},c=({size:l=56})=>n==="temporary-king"?a.jsx(ap,{size:l}):a.jsx(ms,{size:l,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px rgba(212,184,106,0.5))"}});return a.jsx("div",{className:"fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center",onClick:s,children:a.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:i.accent,opacity:"var(--ks-popup-opacity, 0.92)",cursor:"pointer"},children:[a.jsx("div",{className:"flex justify-center mb-3",children:a.jsx(c,{})}),a.jsx("div",{className:"ks-mono text-xs tracking-widest mb-2",style:{color:i.accent},children:i.label}),e&&a.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:e}),t&&a.jsx("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug",children:t}),r&&a.jsx("div",{className:"ks-mono text-[10px] ks-muted mt-3 tracking-widest",children:r})]})})}function Hd({data:n,onClose:e}){const t=typeof n=="string"?n:n==null?void 0:n.msg,s=typeof n=="string"?"🤨":(n==null?void 0:n.emoji)||"🤨",r=typeof n=="string"?"doubt":(n==null?void 0:n.variant)||"doubt",i={doubt:{bg:"radial-gradient(circle at center, rgba(80,30,30,0.95), rgba(0,0,0,0.95))",label:"DOTAZ Z PUBLIKA",glow:"rgba(212,184,106,0.4)",labelColor:"#d4b86a"},fight:{bg:"radial-gradient(circle at center, rgba(120,40,30,0.95), rgba(20,10,5,0.97))",label:"POVZBUDENIE",glow:"rgba(231,128,82,0.5)",labelColor:"#e08854"},doom:{bg:"radial-gradient(circle at center, rgba(60,20,20,0.97), rgba(0,0,0,0.98))",label:"PROROCTVO",glow:"rgba(196,72,72,0.5)",labelColor:"#c44848"}},c=i[r]||i.doubt;return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:c.bg},onClick:e,children:[a.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[a.jsx("div",{className:"absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`}}),a.jsx("div",{className:"absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`,animationDelay:"1s"}}),a.jsx("div",{className:"absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb",style:{background:`radial-gradient(circle, ${c.glow}, transparent 70%)`,animationDelay:"0.5s"}})]}),a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",onClick:l=>l.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${c.labelColor})`}}),a.jsx("span",{style:{color:c.labelColor},className:"text-xs",children:"✦"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${c.labelColor}, transparent)`}})]}),a.jsx("div",{className:"mb-3 ks-funny-emoji flex justify-center",style:{filter:`drop-shadow(0 4px 16px ${c.glow})`},children:s==="strikethrough-crown"?a.jsx(ap,{size:112,color:"#d4b86a",strikeColor:"#c44848"}):a.jsx("span",{className:"text-7xl",children:s})}),a.jsx("div",{className:"ks-mono text-xs mb-3 tracking-widest",style:{color:c.labelColor},children:c.label}),a.jsx("div",{className:"ks-display text-5xl font-bold ks-cream leading-tight px-4",style:{textShadow:`0 4px 24px ${c.glow}, 0 0 40px ${c.glow}`},children:t}),a.jsxs("div",{className:"flex items-center justify-center gap-2 mt-4",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, transparent, ${c.labelColor})`}}),a.jsx("span",{style:{color:c.labelColor},className:"text-xs",children:"✦"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:`linear-gradient(90deg, ${c.labelColor}, transparent)`}})]}),a.jsx("button",{onClick:e,className:"ks-press mt-5 ks-mono ks-muted text-xs tracking-widest",children:"ZATVORIŤ"})]})]})}function WE({kind:n,icon:e,children:t}){const s={info:"border-amber-800/30 bg-amber-950/30 ks-text-accent/90",warn:"border-red-800/40 bg-red-950/30 ks-text-accent",gold:"border-amber-600/60 bg-amber-900/30 ks-text-accent"};return a.jsxs("div",{className:`flex items-start gap-2 text-sm border rounded-sm p-2 ${s[n]}`,children:[a.jsx(e,{size:16,className:"mt-0.5 shrink-0 ks-gold"}),a.jsx("div",{className:"ks-body",children:t})]})}function qE(){const[n,e]=O.useState("menu"),[t,s]=O.useState([]),[r,i]=O.useState(null),[c,l]=O.useState(Li),[d,h]=O.useState(null),[m,p]=O.useState("menu"),[v,T]=O.useState(!1),[S,j]=O.useState("classic"),[A,B]=O.useState("default"),[R,L]=O.useState(!0),[D,W]=O.useState(!0),[K,w]=O.useState("delta"),[_,y]=O.useState("basic"),[x,k]=O.useState("standard"),[E,b]=O.useState(rp),[se,_e]=O.useState(!1),[ct,vt]=O.useState(!1),{setRoomId:ie,setUid:ve,setStatus:xe,setRoomState:we,roomId:Y,roomState:de}=Fr();OE(Y,we,()=>xe("error")),O.useEffect(()=>{(async()=>{try{const I=await window.storage.get("rules");I!=null&&I.value&&l(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("scoreDisplayMode");I!=null&&I.value&&w(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("tournamentViewMode");I!=null&&I.value&&y(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("funnyWindowsDisplayMode");I!=null&&I.value&&k(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("selectedFont");if(I!=null&&I.value){const P=JSON.parse(I.value);B(lc[P]?P:"default")}}catch{}try{const I=await window.storage.get("selectedSkin");if(I!=null&&I.value){const P=JSON.parse(I.value);j(bo[P]?P:"classic")}}catch{try{const I=localStorage.getItem("ks-skin");I&&j(I)}catch{}}try{const I=await window.storage.get("soundsEnabled");I!=null&&I.value&&L(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("animationsEnabled");I!=null&&I.value&&W(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("tournaments");I!=null&&I.value&&s(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("active");I!=null&&I.value&&i(JSON.parse(I.value))}catch{}try{const I=await window.storage.get("adminSettings");I!=null&&I.value&&b(JSON.parse(I.value))}catch{}T(!0)})()},[]),O.useEffect(()=>{v&&window.storage.set("scoreDisplayMode",JSON.stringify(K)).catch(()=>{})},[K,v]),O.useEffect(()=>{v&&window.storage.set("tournamentViewMode",JSON.stringify(_)).catch(()=>{})},[_,v]),O.useEffect(()=>{v&&window.storage.set("funnyWindowsDisplayMode",JSON.stringify(x)).catch(()=>{})},[x,v]),O.useEffect(()=>{v&&window.storage.set("selectedFont",JSON.stringify(A)).catch(()=>{})},[A,v]),O.useEffect(()=>{if(v){window.storage.set("selectedSkin",JSON.stringify(S)).catch(()=>{});try{localStorage.setItem("ks-skin",S)}catch{}}},[S,v]),O.useEffect(()=>{v&&window.storage.set("soundsEnabled",JSON.stringify(R)).catch(()=>{})},[R,v]),O.useEffect(()=>{v&&window.storage.set("animationsEnabled",JSON.stringify(D)).catch(()=>{})},[D,v]),O.useEffect(()=>{Sa.setEnabled(R)},[R]),O.useEffect(()=>{v&&window.storage.set("rules",JSON.stringify(c)).catch(()=>{})},[c,v]),O.useEffect(()=>{v&&window.storage.set("tournaments",JSON.stringify(t)).catch(()=>{})},[t,v]),O.useEffect(()=>{v&&(r?window.storage.set("active",JSON.stringify(r)).catch(()=>{}):window.storage.delete("active").catch(()=>{}))},[r,v]),O.useEffect(()=>{v&&window.storage.set("adminSettings",JSON.stringify(E)).catch(()=>{})},[E,v]);const et=720*60*1e3,Ke=120*1e3,[Ve,mt]=O.useState(!1),ze=O.useRef(Date.now());O.useEffect(()=>{const I=()=>{ze.current=Date.now(),mt(!1)};return window.addEventListener("mousemove",I,{passive:!0}),window.addEventListener("keydown",I,{passive:!0}),window.addEventListener("click",I,{passive:!0}),window.addEventListener("touchstart",I,{passive:!0}),()=>{window.removeEventListener("mousemove",I),window.removeEventListener("keydown",I),window.removeEventListener("click",I),window.removeEventListener("touchstart",I)}},[]),O.useEffect(()=>{if(!Y){mt(!1);return}const I=setInterval(()=>{const P=Date.now()-ze.current;P>=et?(mt(!1),Fr.getState().reset()):P>=et-Ke&&mt(!0)},3e4);return()=>clearInterval(I)},[Y]);const Pt=O.useRef(null),$t=O.useRef(null),ln=O.useRef(null);O.useEffect(()=>{if(!Y)return;const I=de==null?void 0:de.activeTournament;if(I===void 0)return;const P=JSON.stringify(I??null);P!==Pt.current&&(Pt.current=P,i(I??null))},[Y,JSON.stringify(de==null?void 0:de.activeTournament)]),O.useEffect(()=>{if(!v||!Y)return;const I=JSON.stringify(r??null);if(I===Pt.current)return;Pt.current=I;const P=setTimeout(()=>{Ut(async()=>{const{updateGameState:q}=await import("./updateGameState-BMqH1Xqm.js");return{updateGameState:q}},__vite__mapDeps([4,1,2]),import.meta.url).then(({updateGameState:q})=>{q(Y,{activeTournament:r??null}).catch(ne=>{console.error("[sync] activeTournament write failed:",ne),xe("error")})})},300);return()=>clearTimeout(P)},[r,Y,v]),O.useEffect(()=>{if(!Y)return;const I=de==null?void 0:de.syncedTournaments;if(I===void 0)return;const P=JSON.stringify(I??[]);P!==$t.current&&($t.current=P,s(I??[]))},[Y,JSON.stringify(de==null?void 0:de.syncedTournaments)]),O.useEffect(()=>{if(!v||!Y)return;const I=JSON.stringify(t??[]);if(I===$t.current)return;$t.current=I;const P=setTimeout(()=>{Ut(async()=>{const{updateGameState:q}=await import("./updateGameState-BMqH1Xqm.js");return{updateGameState:q}},__vite__mapDeps([4,1,2]),import.meta.url).then(({updateGameState:q})=>{q(Y,{syncedTournaments:t??[]}).catch(ne=>{console.error("[sync] tournaments write failed:",ne)})})},500);return()=>clearTimeout(P)},[t,Y,v]),O.useEffect(()=>{if(!Y)return;const I=de==null?void 0:de.selectedSkin;!I||I===ln.current||(ln.current=I,bo[I]&&j(I))},[Y,de==null?void 0:de.selectedSkin]),O.useEffect(()=>{if(!v||!Y||S===ln.current)return;ln.current=S;const I=setTimeout(()=>{Ut(async()=>{const{updateGameState:P}=await import("./updateGameState-BMqH1Xqm.js");return{updateGameState:P}},__vite__mapDeps([4,1,2]),import.meta.url).then(({updateGameState:P})=>{P(Y,{selectedSkin:S}).catch(console.error)})},500);return()=>clearTimeout(I)},[S,Y,v]);const jt=O.useMemo(()=>{const I=c.find(P=>P.id==="r14");return I&&Number(I.points)||300},[c]);E.minWriteOffOverride,O.useEffect(()=>{window.__ksVerboseFirebase=!!E.verboseFirebase},[E.verboseFirebase]);const Vt=O.useCallback(()=>e("menu"),[]),Bt=O.useCallback(()=>{w(I=>I==="delta"?"cumulative":"delta")},[]),[Is,he]=O.useState([]),St=O.useRef(null);O.useEffect(()=>{St.current=r},[r]);const lt=O.useCallback(I=>{const P=St.current;P&&he(q=>[...q.slice(-4),P]),i(q=>typeof I=="function"?I(q):I)},[]),$e=O.useCallback(()=>{he(I=>I.length?(i(I[I.length-1]),I.slice(0,-1)):I)},[]),Pe=O.useRef(null),Lt=O.useRef(null);Pe.current=Ge,Lt.current=or;const Ts=O.useCallback(I=>{Pe.current(I)},[]),es=O.useCallback(()=>{Lt.current()},[]),As=O.useCallback(()=>{if(!r){window.alert("Žiadna aktívna hra.");return}const I=(Math.floor(Math.random()*20)+1)*50;lt(P=>{if(!P)return P;const q=P.rounds.slice();for(;q.length<=P.currentRound;)q.push(new Array(P.players.length).fill(null));q[P.currentRound]=[...q[P.currentRound]||new Array(P.players.length).fill(null)],q[P.currentRound][P.currentPlayer]=I;const ne=(P.currentPlayer+1)%P.players.length,ye=ne===0;return{...P,rounds:q,currentPlayer:ne,currentRound:P.currentRound+(ye?1:0)}})},[r,lt]),un=O.useCallback(()=>{const I={tournaments:t,active:r,adminSettings:E};navigator.clipboard.writeText(JSON.stringify(I,null,2)).catch(()=>{})},[t,r,E]),ts=O.useCallback(async()=>{var P;const I=(P=E.roomName)==null?void 0:P.toUpperCase().trim();if(!I){window.alert("Zadaj názov miestnosti.");return}try{const{getAuth:q,signInAnonymously:ne}=await Ut(async()=>{const{getAuth:$,signInAnonymously:ke}=await Promise.resolve().then(()=>Wk);return{getAuth:$,signInAnonymously:ke}},void 0,import.meta.url),{createRoom:ye}=await Ut(async()=>{const{createRoom:$}=await Promise.resolve().then(()=>EE);return{createRoom:$}},void 0,import.meta.url),fe=q();await fe.authStateReady(),fe.currentUser||await ne(fe);const pe=fe.currentUser.uid,{roomId:Le}=await ye({hostName:"hráč",selectedSkin:S||"classic",rules:c||[],customRoomId:I});ie(Le),ve(pe),xe("connected"),e("online")}catch(q){window.alert(`Chyba: ${(q==null?void 0:q.message)||q}`)}},[E.roomName,c,S,ie,ve,xe]);function ns(I,P){Sa.playStart(),he([]),i({id:Date.now(),date:new Date().toISOString(),players:I,rounds:[],currentPlayer:0,currentRound:0,status:"active",winner:null,confirmationPendingPlayer:null,confirmationQueue:[],confirmationRoundComplete:!1,pendingDecision:null,targetScore:P,minWriteOff:jt}),e("tournament")}function Ge(I){if(!r)return;const P=yo({...r});if(!P.valid){const pe=`Turnaj nemôže byť uzatvorený — nájdené nezhody:

`+P.errors.join(`
`)+`

Reason: `+P.reason;window.alert(pe),console.error("[finishTournament] Validation failed:",P);return}const q=Array.isArray(I)?[...I]:[I],ne=[...P.winners];if(q.sort(),ne.sort(),!(q.length===ne.length&&q.every((pe,Le)=>pe===ne[Le]))){const pe=`Diskrepancia v určení víťaza:

Hra deklaruje víťazov: ${q.map(Le=>r.players[Le]).join(", ")}
Validácia podľa súčtov: ${ne.map(Le=>r.players[Le]).join(", ")}

Turnaj sa neuzatvorí — kontaktuj vývojára (alebo skús presný stav v archíve).`;window.alert(pe),console.error("[finishTournament] Winner mismatch:",{declaredWinners:q,computedWinners:ne,totals:P.totals});return}const fe={...r,status:"finished",winner:ne.length===1?ne[0]:ne,finishedAt:new Date().toISOString(),_validatedTotals:P.totals};Sa.playWin(),s(pe=>[fe,...pe]),i(null),h(fe),e("archiveDetail")}function or(){r&&window.confirm("Naozaj chceš zrušiť rozohraný turnaj? Bude uložený do archívu ako nedokončený.")&&(s(I=>[{...r,status:"aborted",finishedAt:new Date().toISOString()},...I]),i(null),e("menu"))}function ss(I,P){s(q=>q.map(ne=>ne.id===I?{...ne,...P}:ne)),(d==null?void 0:d.id)===I&&h(q=>({...q,...P}))}async function Ht(){if(t.length===0){window.alert("Archív je prázdny — nie je čo exportovať.");return}const I=(await Ut(async()=>{const{default:$}=await import("./vendor-xlsx-CkFp8p6R.js");return{default:$}},[],import.meta.url)).default||await Ut(()=>import("./vendor-xlsx-CkFp8p6R.js"),[],import.meta.url);function P($){return $.winner===null||$.winner===void 0?[]:(Array.isArray($.winner)?$.winner:[$.winner]).map(Re=>$.players[Re])}function q($){const ke=P($);return ke.length===0?"—":ke.length===1?ke[0]:`Remíza: ${ke.join(", ")}`}const ne=I.utils.book_new(),ye=t.map(($,ke)=>({"#":ke+1,Začiatok:ti($.date),Koniec:$.finishedAt?ti($.finishedAt):"—",Cieľ:$.targetScore||1e4,"Počet hráčov":$.players.length,Hráči:$.players.join(", "),Víťaz:q($),Stav:$.status==="finished"?"Dokončený":$.status==="aborted"?"Nedokončený":"Aktívny"})),fe=I.utils.json_to_sheet(ye);fe["!cols"]=[{wch:5},{wch:20},{wch:20},{wch:8},{wch:12},{wch:30},{wch:20},{wch:14}],I.utils.book_append_sheet(ne,fe,"Prehľad"),t.forEach(($,ke)=>{const Re=[],ge=new Date($.date),Be=$.finishedAt?new Date($.finishedAt):null,He=ge.toLocaleDateString("sk-SK",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\s/g,""),rt=ge.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}),xt=Be?Be.toLocaleTimeString("sk-SK",{hour:"2-digit",minute:"2-digit"}):"",Nt=xt?`${rt}-${xt}`:rt;Re.push([`Hra ${He} ${Nt} — ${$.players.join(", ")}`]),Re.push([]),Re.push(["Kolo",...$.players]);const je=new Array($.players.length).fill(0);($.rounds||[]).forEach((Je,Wt)=>{const Ee=[Wt+1];for(let wt=0;wt<$.players.length;wt++){const qt=Je[wt];typeof qt=="number"?(je[wt]+=qt,Ee.push(je[wt])):qt==="dash"?Ee.push("—"):Ee.push(null)}Re.push(Ee)}),Re.push(["MAX",...je]);let rs="— Nedokončený turnaj";const Mt=P($);if(Mt.length===1){const Je=Array.isArray($.winner)?$.winner[0]:$.winner;rs=`🏆 Víťaz: ${Mt[0]} (${je[Je]})`}else Mt.length>1&&(rs=`🏆 Remíza: ${(Array.isArray($.winner)?$.winner:[$.winner]).map(Ee=>`${$.players[Ee]} (${je[Ee]})`).join(", ")}`);Re.push([rs]);const hn=I.utils.aoa_to_sheet(Re);hn["!cols"]=[{wch:6},...$.players.map(()=>({wch:14}))],I.utils.book_append_sheet(ne,hn,`Hra ${ke+1}`.substring(0,31))});const pe=`kocky-sveta-${new Date().toISOString().slice(0,10)}.xlsx`,Le=I.write(ne,{bookType:"xlsx",type:"base64"});try{if(Ur.isNativePlatform()){const $=await mg.writeFile({path:pe,data:Le,directory:Pa.Documents,recursive:!0}),ke=await lu.canShare();ke!=null&&ke.value?await lu.share({title:"Export Kocky sveta",text:"Exportované dáta z aplikácie Kocky sveta",url:$.uri,dialogTitle:"Uložiť alebo zdieľať export"}):window.alert("Export uložený do Documents: "+pe);return}}catch($){console.error("Native Android export failed:",$),window.alert("Natívny export zlyhal: "+(($==null?void 0:$.message)||"neznáma chyba")+`

Skontroluj, či si po npm install spustil aj npx cap sync android.`)}try{I.writeFile(ne,pe)}catch{const ke=new Blob([I.write(ne,{bookType:"xlsx",type:"array"})],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),Re=URL.createObjectURL(ke),ge=document.createElement("a");ge.href=Re,ge.download=pe,document.body.appendChild(ge),ge.click(),ge.remove(),URL.revokeObjectURL(Re),setTimeout(()=>URL.revokeObjectURL(Re),4e3)}}async function dn(I){try{const P=(await Ut(async()=>{const{default:$}=await import("./vendor-xlsx-CkFp8p6R.js");return{default:$}},[],import.meta.url)).default||await Ut(()=>import("./vendor-xlsx-CkFp8p6R.js"),[],import.meta.url),q=await I.arrayBuffer(),ne=P.read(q,{type:"array"}),ye=[],fe=[];for(const $ of ne.SheetNames){let ke=function(Z){if(Z==null)return!1;const oe=String(Z).trim();return oe==="—"||oe==="-"||oe==="–"||oe==="−"},Re=function(Z){return Z==null?!0:String(Z).trim()===""},ge=function(Z){if(typeof Z=="number")return Z;if(typeof Z=="string"){const oe=Z.replace(/\s/g,"").replace(",","."),We=parseFloat(oe);return Number.isFinite(We)?We:null}return null};if(/prehľad|prehlad|summary/i.test($))continue;const Be=ne.Sheets[$],He=P.utils.sheet_to_json(Be,{header:1,defval:null,raw:!0});if(!He||He.length<4){fe.push(`${$}: príliš krátky list`);continue}const rt=He[0],xt=(rt&&rt[0]?String(rt[0]):"").trim(),Nt=xt.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/),je=xt.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/),rs=xt.match(/[—–-]\s*(.+)$/);let Mt=-1;for(let Z=0;Z<Math.min(He.length,6);Z++){const oe=He[Z]||[];if(oe[0]&&/^kolo$/i.test(String(oe[0]).trim())){Mt=Z;break}}if(Mt<0){fe.push(`${$}: nenájdený riadok "Kolo"`);continue}const hn=He[Mt],Je=[];for(let Z=1;Z<hn.length;Z++){const oe=hn[Z];if(oe&&String(oe).trim())Je.push(String(oe).trim());else break}if(Je.length<2){fe.push(`${$}: nenájdené mená hráčov`);continue}const Wt=[];for(let Z=Mt+1;Z<He.length;Z++){const oe=He[Z]||[];if(!oe[0])break;const We=String(oe[0]).trim();if(/^max$/i.test(We)||/^¤â$/i.test(We)||/^suma$/i.test(We)||/víťaz|vitaz|🏆/i.test(We))break;const Ie=parseInt(We,10);if(!Number.isFinite(Ie))break;Wt.push(oe.slice(1,1+Je.length))}if(Wt.length===0){fe.push(`${$}: žiadne dátové riadky`);continue}const Ee=Wt.map(()=>new Array(Je.length).fill(null));for(let Z=0;Z<Je.length;Z++){let oe=0,We=!1;for(let Ie=0;Ie<Wt.length;Ie++){const pt=Wt[Ie][Z];if(ke(pt))Ee[Ie][Z]="dash";else if(Re(pt))Ee[Ie][Z]=null;else{const Me=ge(pt);if(Me===null)Ee[Ie][Z]=null;else{const Kt=We?Me-oe:Me;Ee[Ie][Z]=Kt,oe=Me,We=!0}}}}let wt=null;for(let Z=0;Z<He.length;Z++){const oe=He[Z]||[],Ie=(oe[0]?String(oe[0]):"").match(/(?:🏆|víťaz|vitaz)[^:]*:\s*([^\s(]+)/i);if(Ie){const pt=Ie[1].trim(),Me=Je.findIndex(Kt=>Kt.toLowerCase()===pt.toLowerCase());Me>=0&&(wt=Me);break}}if(wt===null){const Z=Je.map((We,Ie)=>Ee.reduce((pt,Me)=>pt+(typeof Me[Ie]=="number"?Me[Ie]:0),0)),oe=Z.indexOf(Math.max(...Z));Z[oe]>=5e3&&(wt=oe)}let qt=new Date,is=null;if(Nt){const Z=parseInt(Nt[1],10),oe=parseInt(Nt[2],10)-1,We=parseInt(Nt[3],10);let Ie=12,pt=0,Me=null,Kt=null;je&&(Ie=parseInt(je[1],10),pt=parseInt(je[2],10),je[3]&&(Me=parseInt(je[3],10),Kt=parseInt(je[4],10))),qt=new Date(We,oe,Z,Ie,pt),Me!==null&&(is=new Date(We,oe,Z,Me,Kt))}const ar=Je.map((Z,oe)=>Ee.reduce((We,Ie)=>We+(typeof Ie[oe]=="number"?Ie[oe]:0),0)),cr=Math.max(...ar),Yo=cr>=7500?1e4:cr>=3500?5e3:1e4,yi={id:Date.now()+Math.floor(Math.random()*1e3)+ye.length,date:qt.toISOString(),finishedAt:is?is.toISOString():qt.toISOString(),players:Je,rounds:Ee,currentPlayer:0,currentRound:Ee.length,status:wt!==null?"finished":"aborted",winner:wt,confirmationPendingPlayer:null,targetScore:Yo,minWriteOff:300,imported:!0,importedFrom:$};ye.push(yi)}if(ye.length===0){window.alert(`Žiadne turnaje neboli importované.${fe.length?`

Preskočené listy:
`+fe.join(`
`):""}`);return}const pe=[...ye,...t];s(pe);let Le=`Úspešne importované: ${ye.length} ${ye.length===1?"turnaj":ye.length<5?"turnaje":"turnajov"}.`;fe.length&&(Le+=`

Preskočené:
${fe.join(`
`)}`),window.alert(Le)}catch(P){console.error(P),window.alert("Chyba pri importe: "+(P.message||"neznáma chyba"))}}async function F(){if(!window.confirm(`⚠️ POZOR: Toto vymaže VŠETKY turnaje z archívu, rozohranú hru aj uložené pravidlá z tohto zariadenia.

Odporúčame najprv vytvoriť zálohu cez Export do Excelu.

Chceš pokračovať?`))return;if(window.prompt("Pre potvrdenie napíš slovo VYMAZAŤ (veľkými písmenami).")!=="VYMAZAŤ"){window.alert("Vymazanie zrušené.");return}s([]),i(null),h(null),l(Li),j("classic"),B("default"),await window.storage.delete("tournaments").catch(()=>{}),await window.storage.delete("selectedFont").catch(()=>{}),await window.storage.delete("active").catch(()=>{}),await window.storage.set("rules",JSON.stringify(Li)).catch(()=>{}),await window.storage.set("selectedSkin",JSON.stringify("classic")).catch(()=>{}),window.alert("Všetky dáta boli vymazané.")}return a.jsxs("div",{className:"ks-bg min-h-screen ks-cream ks-body","data-skin":S,"data-animations":D?"on":"off",style:{overflowY:"auto",WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:[a.jsx("style",{children:BE(S,A)}),a.jsx("style",{children:`:root { --ks-popup-offset: ${ni.VERTICAL_OFFSET}; --ks-popup-opacity: ${ni.OPACITY}; }`}),(S==="brawlstars"||S==="brawlblue"||S==="harrypotter")&&D&&a.jsx(zE,{skin:S}),n==="menu"&&a.jsx(Ag,{onNew:()=>e("newTournament"),onArchive:()=>{p("menu"),e("archive")},onrules:()=>e("rules"),onSettings:()=>e("settings"),onOnline:()=>e("online"),onResume:r?()=>e("tournament"):null,active:r,tournamentCount:t.length}),n==="settings"&&a.jsx(KE,{onBack:()=>e("menu"),onOnline:()=>e("online"),onRulesEditor:()=>e("rulesEditor"),onExport:Ht,onImport:dn,onClearAll:F,onArchive:()=>{p("settings"),e("archive")},tournamentCount:t.length,selectedSkin:S,onSkinChange:j,selectedFont:A,onFontChange:B,tournamentViewMode:_,onTournamentViewModeChange:y,onViewModes:()=>e("viewModes"),onVisualAndSkins:()=>e("visual"),funnyWindowsDisplayMode:x,onFunnyWindowsDisplayModeChange:k,onAdmin:()=>_e(!0),onShowEgg:()=>vt(!0)}),n==="admin"&&a.jsx(PE,{onBack:()=>e("settings"),adminSettings:E,onAdminChange:b,tournaments:t,active:r,appVersion:"1.5.4",onSimulateTurn:As,onExportState:un,onCreateRoom:ts}),n==="viewModes"&&a.jsx(Dg,{onBack:()=>e("settings"),selectedMode:_,onChangeMode:y,selectedSkin:S}),n==="visual"&&a.jsx(Og,{onBack:()=>e("settings"),selectedSkin:S,onSkinChange:j,selectedFont:A,onFontChange:B,tournamentViewMode:_,onTournamentViewModeChange:y,onViewModes:()=>e("viewModes"),soundsEnabled:R,onSoundsToggle:()=>L(I=>!I),animationsEnabled:D,onAnimationsToggle:()=>W(I=>!I)}),n==="newTournament"&&a.jsx(Ng,{onBack:()=>e("menu"),onStart:ns}),n==="tournament"&&(r?a.jsx(YE,{tournament:r,rules:c,onUpdate:lt,onFinish:Ts,onAbort:es,onMenu:Vt,scoreDisplayMode:K,onToggleScoreMode:Bt,selectedSkin:S,onSkinChange:j,tournamentViewMode:_,funnyWindowsDisplayMode:x,debugMode:E.debugMode,minWriteOffOverride:E.minWriteOffOverride,canUndo:Is.length>0,onUndo:$e}):a.jsx(Js,{title:"Turnaj sa nepodarilo načítať"})),n==="archive"&&a.jsx(rI,{tournaments:Array.isArray(t)?t:[],onBack:()=>e(m),onView:I=>{h(I),e("archiveDetail")},onDelete:I=>{window.confirm("Vymazať tento turnaj z archívu?")&&s(P=>P.filter(q=>q.id!==I))},readOnly:m==="menu"}),n==="archiveDetail"&&(d?a.jsx(oI,{tournament:d,onBack:()=>e("archive"),onUpdate:I=>ss(d.id,I),readOnly:m==="menu",scoreDisplayMode:K,onToggleScoreMode:Bt,selectedSkin:S}):a.jsx(Js,{title:"Dáta turnaja sa nepodarilo načítať"})),n==="rules"&&a.jsx(ZE,{rules:c,onBack:()=>e("menu")}),n==="online"&&a.jsx(SE,{onBack:()=>e("menu"),activeSkin:S,activeRules:c,defaultRoomName:E.roomName}),n==="rulesEditor"&&a.jsx(eI,{rules:c,onSave:l,onBack:()=>e("settings"),onReset:()=>{window.confirm("Obnoviť všetky pravidlá na pôvodné nastavenia?")&&l(Li)},selectedSkin:S}),se&&a.jsx(DE,{onSuccess:()=>{_e(!1),e("admin")},onCancel:()=>_e(!1)}),Ve&&Y&&a.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-[9990] px-4 pb-[max(16px,env(safe-area-inset-bottom))]",children:a.jsxs("div",{className:"max-w-md mx-auto ks-card border-2 border-amber-700/60 rounded-sm px-4 py-3 flex items-center gap-3 shadow-2xl",children:[a.jsx(vo,{size:18,className:"ks-gold shrink-0"}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-cream text-sm font-semibold ks-display",children:"Neaktivita — čoskoro sa odpojíš"}),a.jsx("div",{className:"ks-muted text-xs",children:"Miestnosť sa odpojí za menej ako 2 minúty."})]}),a.jsx("button",{onClick:()=>{ze.current=Date.now(),mt(!1)},className:"ks-gold-bg ks-press px-3 py-1.5 rounded-sm ks-mono text-xs font-bold shrink-0",children:"ZOSTAŤ"})]})}),ct&&a.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/95",onClick:()=>vt(!1),children:a.jsx("img",{src:"/Easteregg.jpg",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",display:"block"},alt:"",draggable:!1})})]})}function Js({title:n="Dáta sa nepodarilo načítať"}){return a.jsx("div",{className:"min-h-screen flex items-center justify-center p-6 ks-cream",children:a.jsxs("div",{className:"ks-card rounded-sm p-5 text-center max-w-md",children:[a.jsx("div",{className:"ks-display text-2xl ks-gold mb-2",children:n}),a.jsx("div",{className:"ks-muted text-sm",children:"Skús sa vrátiť späť alebo otvoriť turnaj znova."})]})})}function KE({onBack:n,onOnline:e,onRulesEditor:t,onExport:s,onImport:r,onClearAll:i,onArchive:c,tournamentCount:l,selectedSkin:d,onSkinChange:h,selectedFont:m,onFontChange:p,tournamentViewMode:v,onTournamentViewModeChange:T,onViewModes:S,onVisualAndSkins:j,funnyWindowsDisplayMode:A,onFunnyWindowsDisplayModeChange:B,onAdmin:R,onShowEgg:L}){const D=O.useRef(null),[W,K]=O.useState(0);function w(){const y=W+1;K(y),y>=5&&(L==null||L(),K(0))}function _(y){var k;const x=(k=y.target.files)==null?void 0:k[0];x&&r&&r(x),D.current&&(D.current.value="")}return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx($n,{title:"Nastavenia",onBack:n}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"ONLINE"}),a.jsxs("button",{onClick:e,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(si,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Online miestnosť"}),a.jsx("div",{className:"ks-muted text-sm",children:"Synchronizácia hry, archívu a skinu cez Firebase"})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"PRAVIDLÁ A HODNOTY HRY"}),a.jsxs("button",{onClick:t,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(dc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Úprava pravidiel"}),a.jsx("div",{className:"ks-muted text-sm",children:"Bodové kombinácie · cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"VIZUÁL, ZVUKY A SKINY"}),a.jsxs("button",{onClick:S,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Dp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Režim zobrazenia hry"}),a.jsx("div",{className:"ks-muted text-sm",children:v==="observer"?"Pozorovateľ":v==="recorder"?"Zapisovateľ":"Klasický"})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm",children:[a.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Op,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Štýl oznámení"}),a.jsx("div",{className:"ks-muted text-sm",children:"Fullscreen funny okná, malé popupy alebo potlačený režim"})]})]}),a.jsx("div",{className:"grid grid-cols-3 gap-2",children:[["standard","Štandardný"],["simplified","Zjednodušený"],["suppressed","Potlačený"]].map(([y,x])=>a.jsx("button",{onClick:()=>B(y),className:`ks-press px-3 py-2 rounded-sm text-sm ${A===y?"ks-gold-bg":"border ks-border-sub ks-card ks-cream"}`,children:x},y))})]}),a.jsxs("button",{onClick:j,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(mc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Vizuál, Zvuky a Skiny"}),a.jsx("div",{className:"ks-muted text-sm",children:"Farby, písmo a vzhľad aplikácie"})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"SPRÁVA TURNAJOV"}),a.jsxs("button",{onClick:s,disabled:!l,className:`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${l?"":"opacity-40 cursor-not-allowed"}`,children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Vp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Export do Excelu"}),a.jsx("div",{className:"ks-muted text-sm",children:l>0?`${l} turnajov · súbor .xlsx s listami`:"Žiadne turnaje na export"})]}),a.jsx(Lp,{className:"ks-muted",size:20})]}),a.jsxs("button",{onClick:()=>{var y;return(y=D.current)==null?void 0:y.click()},className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(Mp,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Import z Excelu"}),a.jsx("div",{className:"ks-muted text-sm",children:"Pridá turnaje z .xlsx súboru do archívu"})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsx("input",{ref:D,type:"file",accept:".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:_,className:"hidden"}),a.jsxs("button",{onClick:c,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(pc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Editácia archívu"}),a.jsx("div",{className:"ks-muted text-sm",children:'Otvor turnaj a klepni „Upraviť" — body, víťaza, kolá'})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsxs("button",{onClick:R,className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center",children:a.jsx(fc,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Admin nastavenia"}),a.jsx("div",{className:"ks-muted text-sm",children:"Interné nastavenia · debug · override · diagnostika"})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"ks-mono ks-text-accent text-xs px-1 pt-4 flex items-center gap-1.5",children:[a.jsx(vo,{size:11})," NEBEZPEČNÁ ZÓNA"]}),a.jsxs("button",{onClick:i,className:"ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125",children:[a.jsx("div",{className:"w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center",children:a.jsx(ko,{size:22,className:"ks-text-accent"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-text-accent text-xl font-semibold",children:"Vymazať všetky dáta"}),a.jsx("div",{className:"ks-text-accent/70 text-sm",children:"Archív, rozohraná hra, pravidlá — nenávratná akcia"})]}),a.jsx(Et,{className:"ks-text-accent",size:20})]}),a.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2",children:[a.jsx(_o,{size:14,className:"ks-gold shrink-0 mt-0.5"}),a.jsxs("div",{children:["Pred vymazaním dát si ",a.jsx("strong",{className:"ks-gold",children:"vytvor zálohu"})," cez Export do Excelu. Súbor neskôr môžeš obnoviť cez Import. Každý dohraný turnaj si pamätá dátum a čas začiatku aj konca."]})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-4",children:"O APLIKÁCII"}),a.jsxs("div",{className:"ks-card w-full p-4 rounded-sm space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("button",{onClick:w,className:"w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center ks-press select-none",children:a.jsx(Ra,{size:22,className:"ks-gold"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-xl font-semibold",children:"Kocky sveta"}),a.jsx("div",{className:"ks-muted text-sm",children:"React + Vite + Firebase + Capacitor"})]})]}),a.jsxs("div",{className:"space-y-2 text-xs ks-muted leading-relaxed border-t ks-border-sub pt-3",children:[a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Technológie:"})," React 18, Vite, Tailwind CSS, Firebase Firestore, Capacitor (Android/iOS)"]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Dáta:"})," Ukladané lokálne. Online sync cez Firebase Firestore v reálnom čase."]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Exporty:"})," XLSX (SheetJS) — každý turnaj ako list + súhrnný prehľad."]}),a.jsxs("p",{children:[a.jsx("span",{className:"ks-cream font-semibold",children:"Vývoj:"})," Marcel, 2026. Herná logika a pravidlá sú autorské."]})]})]})]})]})}function GE(n){const e=(n||[]).find(t=>t.id==="r18");return!e||e.selected!=="Áno"}function JE(){const[n,e]=O.useState(null),t=O.useRef([]),s=O.useRef(0),r=O.useRef(null),i=ni.POPUP_DISPLAY_DURATION,c=ni.QUEUE_SIZE;function l(){r.current&&(clearTimeout(r.current),r.current=null)}function d(){if(l(),t.current.length===0){e(null);return}const v=t.current.shift();s.current=Date.now()+i,e(v),r.current=setTimeout(d,v.duration??i)}function h(v){if(v){if(!n){s.current=Date.now()+i,e(v),l(),r.current=setTimeout(d,v.duration??i);return}t.current.length>=c?t.current[t.current.length-1]=v:t.current.push(v)}}function m(){l();const v=Date.now(),T=Math.max(0,s.current-v);e(null),t.current.length>0&&(r.current=setTimeout(d,T))}function p(){t.current=[],l(),e(null),s.current=0}return O.useEffect(()=>l,[]),{active:n,enqueue:h,dismiss:m,clear:p}}function YE({tournament:n,rules:e,onUpdate:t,onFinish:s,onAbort:r,onMenu:i,scoreDisplayMode:c,onToggleScoreMode:l,selectedSkin:d,onSkinChange:h,tournamentViewMode:m,funnyWindowsDisplayMode:p,debugMode:v,minWriteOffOverride:T}){if(!n)return a.jsx(Js,{});const S=n.targetScore||1e4,j=T??n.minWriteOff??300,A=Array.isArray(n.players)?n.players:[],B=Array.isArray(n.rounds)?n.rounds:[],{currentPlayer:R=0,currentRound:L=0}=n,[D,W]=O.useState([]),[K,w]=O.useState(""),[_,y]=O.useState(!1),[x,k]=O.useState(!1),[E,b]=O.useState(null),se=JE(),_e=se.active,[ct,vt]=O.useState(!1),[ie,ve]=O.useState(null),[xe,we]=O.useState(!1),[Y,de]=O.useState(null),et=O.useRef(A.map(()=>0)),Ke=O.useRef(new Set),Ve=O.useMemo(()=>yl(B,A.length),[B,A.length]),mt=O.useMemo(()=>A.map((F,I)=>B.some(P=>typeof P[I]=="number"&&P[I]>=0)),[A,B]),ze=Ve[R];mt[R];const Pt=ze>=S-j&&ze<S,$t=GE(e),ln=$t?null:n.confirmationPendingPlayer,jt=ln===R&&ln!==null,Vt=S-ze,Bt=R===A.length-1,Is=!!n.pendingDecision||jt,he=D.reduce((F,I)=>F+(typeof I=="number"?I:0),0),St=ze+he;function lt(F,I="info"){b({msg:F,kind:I}),setTimeout(()=>b(null),3500)}function $e(F,I={}){const P=F?typeof F=="string"?{msg:F,emoji:"🎭",variant:"fight"}:F:$d[Math.floor(Math.random()*$d.length)];if(!(p==="suppressed"&&!I.forceFullscreen)){if(p==="simplified"&&!I.forceFullscreen){const q=I.duration??Math.max(ni.POPUP_DISPLAY_DURATION,2600);b({msg:P.msg,kind:"info"}),setTimeout(()=>b(null),q);return}se.enqueue({...P,duration:I.duration??3500})}}function Pe(){if(he<=0||he>=500||et.current[R]>=3)return;const F=Math.max(...Ve),I=Math.min(...Ve),P=ze<F-1500,q=ze===I&&Ve.some(ne=>ne>ze+800);(P||q)&&Math.random()<.55&&(et.current[R]++,$e())}function Lt(F){if(!(!Number.isFinite(F)||F===0)){if(jt){lt("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(D.some(I=>I==="dash"||I===xr)){W([F]);return}W(I=>[...I,F])}}function Ts(){D.length===1&&D[0]==="dash"||W(["dash"])}function es(){if(jt){lt("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}D.length===1&&D[0]===xr||W([xr])}function As(F){W(I=>I.filter((P,q)=>q!==F))}function un(){W([])}function ts(){if(D.length!==0){if(D[0]==="dash"){if(jt){Ge("dash",{confirmWin:!0,confirmedRound:L,confirmedPlayer:R});return}Ge("dash");return}if(jt){lt("Musíš potvrdiť ničnehodením (čiarka)!","warn");return}if(D.some(F=>F<0)){if(D.length>1||D[0]!==xr){lt("Penalizácia −1 000 sa nedá kombinovať s inými bodmi.","warn");return}Ge(xr);return}if(Pt){if(he===Vt){if($t){Pe(),Bt||lt(`${A[R]} dosiahol cieľ ${S.toLocaleString("sk-SK")}! Kolo sa dohrá a hra skončí.`,"info"),Ge(he,{addCandidate:R,autoConfirm:!0,confirmedRound:L,confirmedPlayer:R});return}const F=Ve[R];t(I=>({...I,pendingDecision:{id:`${I.currentPlayer}-${I.currentRound}-${he}`,type:"exact-hit-verification",player:I.currentPlayer,round:I.currentRound,score:he,baseTotal:F,target:I.targetScore,status:"pending"}})),Bt||(ve(`${R}-${L}-${he}-endgame`),we(!0));return}lt(`Koncovka — treba presne ${Vt} bodov. Automatická čiarka!`,"overshoot"),Ge("dash");return}if(he>0&&he<j){lt(`Každý zápis musí byť aspoň ${j} bodov, alebo daj čiarku.`,"warn");return}if(St>S){lt(`Prekročenie ${S.toLocaleString("sk-SK")} – automatická čiarka!`,"overshoot"),Ge("dash");return}if(St===S){if(Pe(),$t){Bt||lt(`${A[R]} dosiahol cieľ ... Kolo sa dohrá a hra skončí.`),Ge(he,{addCandidate:R,autoConfirm:!0,confirmedRound:L,confirmedPlayer:R});return}if(Bt){Pe(),Ge(he,{addCandidate:R,autoConfirm:!0,confirmedRound:L,confirmedPlayer:R});return}ve(`${R}-${L}-${he}`),vt(!0),Ge(he,{addCandidate:R});return}Pe(),Ge(he)}}function ns(F,I){const P=n.pendingDecision;!P||P.id!==F||(I==="confirm"?Ge(P.score,{confirmWin:!0,confirmedRound:P.round,confirmedPlayer:P.player}):Ge("dash"))}function Ge(F,I={}){t(P=>{const q=P.rounds.slice();for(q[P.currentRound]=[...P.rounds[P.currentRound]||[]];q.length<=P.currentRound;)q.push(new Array(P.players.length).fill(null));q[P.currentRound][P.currentPlayer]=F;let ne=P.winner,ye=P.confirmationPendingPlayer,fe=[...P.confirmationQueue||[]],pe=P.confirmationRoundComplete;I.addCandidate!==void 0&&(fe.includes(I.addCandidate)||fe.push(I.addCandidate));let Le=P._confirmedDetailed;if(I.autoConfirm){const ge={player:I.confirmedPlayer??P.currentPlayer,round:I.confirmedRound??P.currentRound,confirmedAt:Date.now()};Le=Array.isArray(P._confirmedDetailed)?[...P._confirmedDetailed.filter(Be=>!(Be.player===ge.player&&Be.round===ge.round)),ge]:[ge]}if(I.confirmWin){const ge={player:I.confirmedPlayer??P.currentPlayer,round:I.confirmedRound??P.currentRound,confirmedAt:Date.now()},Be=Array.isArray(P._confirmedDetailed)?[...P._confirmedDetailed.filter(Nt=>!(Nt.player===ge.player&&Nt.round===ge.round)),ge]:[ge],He=(P.currentPlayer+1)%P.players.length,rt=He===0,xt=P.currentRound+(rt?1:0);if(ye=null,rt){const Nt={...P,rounds:q,_confirmedDetailed:Be,rules:P.rules,pendingDecision:null},je=yo(Nt);return ne=je.valid&&je.winners.length>0?je.winners.length===1?je.winners[0]:je.winners:null,{...P,rounds:q,currentPlayer:He,currentRound:xt,winner:ne,confirmationPendingPlayer:ye,confirmationQueue:fe,confirmationRoundComplete:ne!==null,_confirmedDetailed:Be,pendingDecision:null}}return{...P,rounds:q,currentPlayer:He,currentRound:xt,winner:ne,confirmationPendingPlayer:ye,confirmationQueue:fe,confirmationRoundComplete:pe,_confirmedDetailed:Be,pendingDecision:null}}const $=(P.currentPlayer+1)%P.players.length,ke=$===0,Re=P.currentRound+(ke?1:0);if(ke){const ge={...P,rounds:q,_confirmedDetailed:Le,rules:P.rules,pendingDecision:null},Be=yo(ge);if(!Be.valid&&Be.achievers.length>0){const He=Be.achievers.filter(rt=>!(Le||[]).some(xt=>xt.player===rt&&xt.round===P.currentRound));if(He.length>0)return ye=He[0],pe=!0,{...P,rounds:q,currentPlayer:ye,currentRound:Re,winner:null,confirmationPendingPlayer:ye,confirmationQueue:fe,confirmationRoundComplete:pe,_confirmedDetailed:Le,pendingDecision:null}}if(Be.winners.length>0)return ne=Be.winners.length===1?Be.winners[0]:Be.winners,pe=!0,{...P,rounds:q,currentPlayer:$,currentRound:P.currentRound,winner:ne,confirmationPendingPlayer:null,confirmationQueue:fe,confirmationRoundComplete:pe,_confirmedDetailed:Le,pendingDecision:null}}return{...P,rounds:q,currentPlayer:$,currentRound:Re,winner:ne,confirmationPendingPlayer:ke?null:ye,confirmationQueue:fe,confirmationRoundComplete:pe,_confirmedDetailed:Le,pendingDecision:null}}),W([]),w("")}O.useEffect(()=>{if(n.winner!==null&&n.winner!==void 0){se.clear(),b(null);const F=Array.isArray(n.winner)?n.winner:[n.winner];de({winnerArr:F,isDraw:F.length>1});const I=setTimeout(()=>{de(null),s(n.winner)},2200);return()=>clearTimeout(I)}},[n.winner]),O.useEffect(()=>{if(!Pt)return;const F=`${R}_${L}`;if(Ke.current.has(F))return;Ke.current.add(F);const I=setTimeout(()=>{$e({msg:`Hoď presne ${Vt}! V koncovke potom treba potvrdenie. 😤`,emoji:"🤙",variant:"fight"},{duration:4500})},400);return()=>clearTimeout(I)},[R,L,Pt,jt,Vt]);const or=m==="observer",ss=m==="recorder",Ht=ct&&ie!==null;function dn(){const F=parseInt(K,10);if(!(!Number.isFinite(F)||F===0)){if(F%50!==0){lt("Hodnota musí byť násobok 50 (50, 100, 150…)","warn");return}Lt(F),w("")}}return!n||!Array.isArray(n.players)||!Array.isArray(n.rounds)?a.jsx(Js,{}):a.jsxs("div",{className:`min-h-screen ks-fade ks-bg ${ss?"pb-6":"pb-32"}`,children:[!ss&&a.jsx($n,{title:`Turnaj · do ${S.toLocaleString("sk-SK")}`,onBack:i,right:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:l,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:c==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:c==="delta"?a.jsx(Xd,{size:16}):a.jsx(mc,{size:16})}),a.jsx("button",{onClick:r,className:"ks-press ks-text-accent px-2 py-1 text-xs ks-mono",children:"ZRUŠIŤ"})]})}),or?a.jsx("div",{className:"px-2 pt-1 pb-3 h-[100dvh] flex flex-col",children:a.jsx("div",{className:"flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden",children:a.jsx("div",{className:"h-full overflow-auto [font-size:clamp(18px,2.3vw,34px)]",children:a.jsx(ja,{tournament:n,totals:Ve,highlightPlayer:R,pendingPreview:he>0?he:0,target:S,displayMode:c,onToggleMode:l,hideModeToolbar:!1,hideModeToggle:!0,compactObserver:!0})})})}):ss?a.jsxs("div",{className:"min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]",children:[a.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[a.jsxs("button",{onClick:i,className:"ks-press ks-cream flex items-center gap-1 px-2 py-1",children:[a.jsx(ys,{size:20}),a.jsx("span",{className:"ks-body",children:"Späť"})]}),a.jsx("div",{className:"ks-display ks-gold text-lg text-center",children:A[R]}),a.jsx("button",{onClick:r,className:"ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent",children:"ZRUŠIŤ"})]}),a.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[a.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",L+1]}),a.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",S.toLocaleString("sk-SK")]})]}),a.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),a.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:A[R]})]}),a.jsxs("div",{className:"text-right shrink-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),a.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${ze<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:ze>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:ze.toLocaleString("sk-SK")})]})]})]}),a.jsxs("div",{className:"ks-card-prom rounded-sm p-4 mb-2",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),a.jsxs("div",{className:"flex items-baseline gap-2",children:[D.length>0&&D[0]!=="dash"&&Number.isFinite(St)&&a.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",St.toLocaleString("sk-SK")]}),D[0]==="dash"?a.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):a.jsxs("div",{className:`ks-display text-6xl font-bold ${he<0?"ks-text-accent":"ks-gold"}`,children:[he>0?"+":"",he.toLocaleString("sk-SK")]})]})]}),D.length>0?a.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:D.map((F,I)=>a.jsxs("button",{onClick:()=>As(I),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${F==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":F<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[a.jsx("span",{className:"ks-display font-semibold",children:F==="dash"?"— čiarka":F>0?`+${F}`:F}),a.jsx(Bn,{size:14,className:"opacity-60 group-hover:opacity-100"})]},I))}):a.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),a.jsx(dt,{onClick:ts,disabled:D.length===0,icon:Fs,className:"w-full text-lg",children:"Zapísať"})]}),a.jsxs("div",{className:"ks-card-sub rounded-sm p-4 flex-1",children:[a.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),a.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:zd.map(F=>a.jsxs("button",{onClick:()=>Lt(F),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",F]},F))}),a.jsxs("div",{className:"flex gap-2 mb-3",children:[a.jsx("input",{type:"number",value:K,onChange:F=>w(F.target.value),onKeyDown:F=>F.key==="Enter"&&dn(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),a.jsx(dt,{onClick:dn,icon:Ca,variant:"outline",children:"Pridaj"})]}),a.jsx("div",{className:"ks-divider my-3"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("button",{onClick:Ts,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(Xl,{size:20,className:"ks-muted"}),a.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),a.jsxs("button",{onClick:es,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(Zl,{size:20,className:"ks-text-accent"}),a.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-4",children:[a.jsx(dt,{onClick:()=>k(!0),icon:eu,variant:"ghost",children:"Priebeh hry"}),a.jsx(dt,{onClick:()=>y(!0),icon:Na,variant:"ghost",children:"Pravidlá"})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-3 pt-3",children:a.jsx(ja,{tournament:n,totals:Ve,highlightPlayer:R,pendingPreview:he>0?he:0,target:S,displayMode:c,onToggleMode:l,hideModeToolbar:!0})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[a.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[a.jsxs("div",{className:"ks-mono ks-gold text-xs",children:["NA ŤAHU · KOLO ",L+1]}),a.jsxs("div",{className:"ks-mono ks-muted text-xs",children:["CIEĽ ",S.toLocaleString("sk-SK")]})]}),a.jsxs("div",{className:"flex items-end justify-between gap-3 mb-1",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"HRÁČ"}),a.jsx("div",{className:"ks-display text-4xl ks-cream font-bold leading-tight truncate",children:A[R]})]}),a.jsxs("div",{className:"text-right shrink-0",children:[a.jsx("div",{className:"ks-mono ks-muted text-[10px] mb-0.5",children:"AKTUÁLNE SKÓRE"}),a.jsx("div",{className:`ks-display text-5xl font-bold leading-none ${ze<0?"ks-text-accent":"ks-gold"}`,style:{textShadow:ze>=0?"0 2px 12px rgba(212,184,106,0.3)":"none"},children:ze.toLocaleString("sk-SK")})]})]}),a.jsx("div",{className:"mt-3 space-y-1.5",children:Pt&&a.jsxs(WE,{kind:"warn",icon:hc,children:[a.jsx("strong",{children:"Koncovka!"})," Treba presne ",a.jsx("strong",{children:Vt})," bodov."]})})]})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-prom rounded-sm p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:"PRÁVE PRIPISUJEŠ"}),a.jsxs("div",{className:"flex items-baseline gap-2",children:[D.length>0&&D[0]!=="dash"&&Number.isFinite(St)&&a.jsxs("span",{className:"ks-muted text-xl ks-mono leading-none",children:["→ ",St.toLocaleString("sk-SK")]}),D[0]==="dash"?a.jsx("div",{className:"ks-display text-6xl font-bold ks-muted",children:"—"}):a.jsxs("div",{className:`ks-display text-6xl font-bold ${he<0?"ks-text-accent":"ks-gold"}`,children:[he>0?"+":"",he.toLocaleString("sk-SK")]})]})]}),D.length>0?a.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[D.map((F,I)=>a.jsxs("button",{onClick:()=>As(I),className:`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border
                        ${F==="dash"?"border-stone-600/60 bg-stone-800/40 ks-muted":F<0?"border-red-800/60 bg-red-950/40 ks-text-accent":"ks-border-accent bg-stone-900/70 ks-cream"}`,children:[a.jsx("span",{className:"ks-display font-semibold",children:F==="dash"?"— čiarka":F>0?`+${F}`:F}),a.jsx(Bn,{size:14,className:"opacity-60 group-hover:opacity-100"})]},I)),D.length>1&&a.jsx("button",{onClick:un,className:"ks-press px-3 py-1.5 rounded-sm ks-text-accent text-xs ks-mono",children:"VYMAZAŤ VŠETKO"})]}):a.jsx("div",{className:"ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm",children:"Pridaj body alebo čiarku z hodu nižšie…"}),a.jsx(dt,{onClick:ts,disabled:D.length===0,icon:Fs,className:"w-full text-lg",children:"Zapísať"})]})}),a.jsx("div",{className:"px-4 mt-4",children:a.jsxs("div",{className:"ks-card-sub rounded-sm p-4",children:[a.jsx("div",{className:"ks-mono ks-muted text-xs mb-3",children:"PRIDAJ BODY Z HODU"}),a.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:zd.map(F=>a.jsxs("button",{onClick:()=>Lt(F),className:"ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold",children:["+",F]},F))}),a.jsxs("div",{className:"flex gap-2 mb-3",children:[a.jsx("input",{type:"number",value:K,onChange:F=>w(F.target.value),onKeyDown:F=>F.key==="Enter"&&dn(),placeholder:"Vlastná hodnota",className:"flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"}),a.jsx(dt,{onClick:dn,icon:Ca,variant:"outline",children:"Pridaj"})]}),a.jsx("div",{className:"ks-divider my-3"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("button",{onClick:Ts,className:"ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(Xl,{size:20,className:"ks-muted"}),a.jsx("span",{className:"ks-mono ks-cream font-semibold",children:"ČIARKA"})]}),a.jsxs("button",{onClick:es,className:"ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2",children:[a.jsx(Zl,{size:20,className:"ks-text-accent"}),a.jsx("span",{className:"ks-mono ks-text-accent font-semibold",children:"−1 000"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1",children:[a.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Hod bez zápisu (— pomlčka)"}),a.jsx("div",{className:"ks-muted text-[10px] italic text-center",children:"Nič nehodené (penalizácia)"})]})]})}),a.jsxs("div",{className:"px-4 mt-4 grid grid-cols-2 gap-2",children:[a.jsx(dt,{onClick:()=>k(!0),icon:eu,variant:"ghost",children:"Priebeh hry"}),a.jsx(dt,{onClick:()=>y(!0),icon:Na,variant:"ghost",children:"Pravidlá"})]})]}),E&&a.jsx(HE,{...E,onClose:()=>b(null)}),!Ht&&_e&&!Is&&p==="standard"&&a.jsx(Hd,{data:_e,onClose:se.dismiss}),x&&a.jsx(Wd,{onClose:()=>k(!1),title:"Priebeh hry",children:a.jsx(gg,{tournament:n,totals:Ve,target:S})}),_&&a.jsx(Wd,{onClose:()=>y(!1),title:"Pravidlá hry",children:a.jsx(cp,{rules:e,compact:!0})}),Ht&&p==="standard"&&a.jsx(Hd,{data:{msg:"Dočasný kráľ! Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",emoji:"strikethrough-crown",variant:"fight"},onClose:()=>{vt(!1),ve(null),we(!1)}}),Ht&&p==="simplified"&&a.jsx(Mi,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{vt(!1),ve(null),we(!1)}}),Ht&&p==="suppressed"&&a.jsx(Mi,{kind:"temporary-king",title:"Dočasný kráľ",subtitle:"Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.",actionLabel:"KLIKNI PRE ZATVORENIE",onClose:()=>{vt(!1),ve(null),we(!1)}}),Y&&p==="standard"&&a.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg",style:{background:"var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))"},children:a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-md",children:[a.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",children:Y.isDraw?"👑👑":"👑"}),a.jsx("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:Y.isDraw?`REMÍZA — ${Y.winnerArr.length} VÍŤAZI`:"VÍŤAZ"}),a.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",children:Y.isDraw?"Víťazi":"Víťaz"}),a.jsx("div",{className:"ks-body ks-cream text-base mb-1 leading-snug",children:Y.winnerArr.map(F=>`${A[F]} (${(Ve[F]||0).toLocaleString("sk-SK")})`).join(", ")})]})}),Y&&p==="simplified"&&a.jsx(Mi,{kind:Y.isDraw?"draw":"victory",title:Y.isDraw?`Víťazi (${Y.winnerArr.length})`:"Víťaz",subtitle:Y.winnerArr.map(F=>`${A[F]} (${(Ve[F]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),Y&&p==="suppressed"&&a.jsx(Mi,{kind:Y.isDraw?"draw":"victory",title:Y.isDraw?`Víťazi (${Y.winnerArr.length})`:"Víťaz",subtitle:Y.winnerArr.map(F=>`${A[F]} (${(Ve[F]||0).toLocaleString("sk-SK")})`).join(", "),onClose:()=>{}}),!Ht&&Is&&a.jsx(QE,{playerName:A[R],target:S,displayMode:p,onConfirm:()=>{xe&&ie!==null&&vt(!0),n.pendingDecision?ns(n.pendingDecision.id,"confirm"):Ge("dash",{confirmWin:!0,confirmedRound:L,confirmedPlayer:R})},onReject:()=>{we(!1),ve(null),n.pendingDecision?ns(n.pendingDecision.id,"reject"):Ge("dash")}}),v&&a.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-[9999] bg-black/85 text-green-400 font-mono text-[10px] px-3 py-2 space-y-0.5 pointer-events-none",children:[a.jsxs("div",{children:["🐛 DEBUG · currentPlayer: ",R," (",A[R],") · round: ",L]}),a.jsxs("div",{children:["minWO: ",j,T!=null?" (override)":""," · winner: ",JSON.stringify(n.winner)," · pendingDecision: ",n.pendingDecision?n.pendingDecision.type:"null"]}),a.jsxs("div",{children:["confirmQueue: [",(n.confirmationQueue||[]).join(", "),"] · pending: [",D.join(", "),"]"]})]})]})}function QE({playerName:n,target:e,displayMode:t,onConfirm:s,onReject:r}){return t==="standard"?a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg",style:{background:"var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))"},children:[a.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[a.jsx("div",{className:"absolute -top-20 -left-20 w-72 h-72 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)"}}),a.jsx("div",{className:"absolute -bottom-20 -right-20 w-80 h-80 rounded-full ks-funny-orb",style:{background:"radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)",animationDelay:"1s"}})]}),a.jsxs("div",{className:"ks-funny relative z-10 text-center max-w-sm",children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, transparent, var(--ks-popup-accent, #d4b86a))"}}),a.jsx(ms,{size:16,className:"ks-gold"}),a.jsx("div",{className:"h-px flex-1 max-w-[60px]",style:{background:"linear-gradient(90deg, var(--ks-popup-accent, #d4b86a), transparent)"}})]}),a.jsx("div",{className:"text-7xl mb-3 ks-funny-emoji",style:{filter:"drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.6)))"},children:"😤"}),a.jsxs("div",{className:"ks-mono ks-gold text-xs mb-3 tracking-widest",children:["🏁 DOSIAHOL ",e.toLocaleString("sk-SK")," — POTVRD VÝHRU"]}),a.jsx("div",{className:"ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2",style:{textShadow:"0 4px 24px var(--ks-glow-orb, rgba(212,184,106,0.4)), 0 0 40px var(--ks-glow-orb, rgba(212,184,106,0.4))"},children:n}),a.jsxs("div",{className:"ks-body ks-cream text-base mb-5 leading-snug",children:["Hráč ",a.jsx("em",{className:"ks-gold",children:n})," dosiahol cieľ!",a.jsx("br",{}),"Skupina potvrdzuje výhru — bola hra čistá?"]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("button",{onClick:s,className:"ks-press py-4 px-3 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125",children:[a.jsx(ms,{size:20,className:"ks-gold mx-auto mb-1"}),a.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"}),a.jsx("div",{className:"ks-muted text-[10px] ks-mono mt-0.5",children:"VÝHRA POTVRDENÁ"})]}),a.jsxs("button",{onClick:r,className:"ks-press py-4 px-3 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125",children:[a.jsx(Bn,{size:20,className:"ks-text-accent mx-auto mb-1"}),a.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"Nepotvrdil"}),a.jsx("div",{className:"ks-text-accent/60 text-[10px] ks-mono mt-0.5",children:"VÝHRA NEPOTVRDENÁ"})]})]})]})]}):a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4",style:{background:"var(--ks-modal-dark-overlay, rgba(10,8,6,0.92))"},children:a.jsxs("div",{className:"ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl",style:{borderColor:"var(--ks-popup-accent, #d4b86a)"},children:[a.jsx("div",{className:"flex justify-center mb-3",children:a.jsx(ms,{size:48,className:"ks-gold",style:{filter:"drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.5)))"}})}),a.jsx("div",{className:"ks-mono ks-gold text-xs tracking-widest mb-2",children:"POTVRD VÝHRU"}),a.jsx("div",{className:"ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1",children:n}),a.jsxs("div",{className:"ks-body ks-cream text-sm opacity-90 leading-snug mb-5",children:["Hráč ",a.jsx("em",{className:"ks-gold",children:n})," dosiahol ",a.jsx("strong",{children:e.toLocaleString("sk-SK")}),".",a.jsx("br",{}),"Potvrďte, že v overovom hode nič nepadlo."]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx("button",{onClick:s,className:"ks-press py-3 px-2 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125",children:a.jsx("div",{className:"ks-display ks-gold text-base font-bold",children:"✓ Potvrdil"})}),a.jsx("button",{onClick:r,className:"ks-press py-3 px-2 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125",children:a.jsx("div",{className:"ks-display ks-text-accent text-base font-bold",children:"✗ Nepotvrdil"})})]})]})})}function Wd({children:n,onClose:e,title:t}){return a.jsx("div",{className:"fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4",style:{background:"rgba(0,0,0,0.7)"},onClick:e,children:a.jsxs("div",{className:"ks-card w-full max-w-lg max-h-[85vh] flex flex-col rounded-t-lg sm:rounded-sm ks-fade",onClick:s=>s.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between p-4 border-b ks-border-sub",children:[a.jsx("h3",{className:"ks-display ks-gold text-xl font-semibold",children:t}),a.jsx("button",{"aria-label":"Zatvoriť",onClick:e,className:"ks-press ks-cream p-1",children:a.jsx(Bn,{size:22})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto p-4",style:{WebkitOverflowScrolling:"touch",touchAction:"pan-y"},children:n})]})})}function XE({players:n,totals:e,target:t}){const s=n.map((r,i)=>({name:r,total:e[i],i})).sort((r,i)=>i.total-r.total);return a.jsx("div",{className:"space-y-2",children:s.map((r,i)=>{const c=t?Math.min(100,Math.max(0,r.total/t*100)):0;return a.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-sm border ks-border-sub",children:[a.jsx("div",{className:`w-10 h-10 rounded-sm flex items-center justify-center ks-display text-xl font-bold
              ${i===0?"ks-gold-bg":"border ks-border-sub ks-gold"}`,children:i+1}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:r.name}),t&&a.jsx("div",{className:"h-1 bg-stone-900 rounded-full overflow-hidden mt-1",children:a.jsx("div",{className:"h-full ks-gold-bg",style:{width:`${c}%`}})})]}),a.jsx("div",{className:`ks-display text-2xl font-bold ${r.total<0?"ks-text-accent":"ks-gold"}`,children:r.total.toLocaleString("sk-SK")})]},r.i)})})}function ZE({rules:n,onBack:e}){var c,l,d;const t=Number((c=n.find(h=>h.id==="r14"))==null?void 0:c.points)||300,s=Number((l=n.find(h=>h.id==="r15"))==null?void 0:l.points)||1e4,r=Number((d=n.find(h=>h.id==="r16"))==null?void 0:d.points)||-1e3,i=Rr.flatMap(h=>h.ruleIds).map(h=>n.find(m=>m.id===h)).filter(Boolean);return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx($n,{title:"Pravidlá hry",onBack:e}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsxs("div",{className:"ks-card rounded-sm p-5",children:[a.jsxs("p",{className:"ks-body ks-cream leading-relaxed",children:["Cieľom hry ",a.jsx("em",{className:"ks-gold",children:"Kocky"})," je byť prvým hráčom, ktorý dosiahne cieľové skóre —",a.jsxs("strong",{className:"ks-gold",children:[" ",s.toLocaleString("sk-SK")]})," v klasickej hre alebo",a.jsx("strong",{className:"ks-gold",children:" 5 000"})," v skrátenej. Hráči sa striedajú v hodoch šesťkociek."]}),a.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Každý zápis musí byť aspoň ",a.jsxs("strong",{className:"ks-gold",children:[t," bodov"]})," (minimálny odpis) — alebo daj ",a.jsx("em",{children:"čiarku"}),". Hru sa dá začať aj čiarkou bez bodov. Ak v hode nepadla žiadna bodujúca kocka, z aktuálneho skóre sa odpočíta ",a.jsxs("strong",{className:"ks-text-accent",children:["−",Math.abs(r).toLocaleString("sk-SK")," bodov"]}),"."]}),a.jsxs("p",{className:"ks-body ks-cream leading-relaxed mt-2",children:["Ak hod prekročí cieľ, body sa nezapočítajú a podľa nastavenia sa zapíše spravidla ",a.jsx("em",{children:"čiarka"}),". V závere hry treba dohrať na ",a.jsx("em",{className:"ks-gold",children:"presný cieľ"}),"; ak sa zapne potvrdenie víťazstva, po presnom zásahu nasleduje ešte overovací ťah, v ktorom musí padnúť ",a.jsx("em",{children:"niečohodnenie"}),"."]}),a.jsxs("p",{className:"ks-muted ks-body text-xs italic mt-3",children:["Hodnoty cieľa, minimálneho odpisu a penalizácie sa dajú upraviť v ",a.jsx("em",{children:"Nastavenia → Úprava pravidiel"}),"."]})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),a.jsx(cp,{rules:i})]})]})}function cp({rules:n,compact:e=!1}){return a.jsx("div",{className:"space-y-2",children:n.map(t=>a.jsx("div",{className:`ks-card rounded-sm ${e?"p-3":"p-4"} flex items-start gap-3`,children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-baseline justify-between gap-2 mb-1",children:[a.jsx("h4",{className:"ks-display ks-cream text-lg font-semibold",children:t.name}),a.jsx("div",{className:`ks-display text-xl font-bold whitespace-nowrap ${Number(t.points)<0?"ks-text-accent":"ks-gold"}`,children:t.type==="select"?a.jsx("span",{className:"text-sm italic",children:t.selected}):`${Number(t.points).toLocaleString("sk-SK")} b.`})]}),a.jsx("p",{className:"ks-muted text-sm leading-snug mb-2",children:t.description}),a.jsx(op,{dice:t.dice,size:e?20:24})]})},t.id))})}function eI({rules:n,onSave:e,onBack:t,onReset:s,selectedSkin:r}){const[i,c]=O.useState(n),[l,d]=O.useState(null),[h,m]=O.useState(null);function p(R,L){c(D=>D.map(W=>W.id===R?{...W,...L}:W))}function v(R){window.confirm("Vymazať toto pravidlo?")&&c(L=>L.filter(D=>D.id!==R))}function T(){const R="r"+Date.now(),L={id:R,name:"Nové pravidlo",description:"Popis pravidla",points:100,type:"numeric",dice:[]};c(D=>[...D,L]),m(R)}function S(){e(i),t()}function j(R){const L=Rr.find(D=>D.id===R);return L?L.ruleIds.map(D=>i.find(W=>W.id===D)).filter(Boolean):[]}const A=O.useMemo(()=>Bd.map(R=>i.find(L=>L.id===R)).filter(Boolean),[i]),B=O.useMemo(()=>{const R=new Set([...Rr.flatMap(L=>L.ruleIds),...Bd]);return i.filter(L=>!R.has(L.id))},[i]);if(l==="cat-settings")return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx($n,{title:"Hodnoty hry",onBack:()=>d(null)}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsx("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:"Hodnoty cieľa, prvého zápisu, penalizácie za ničnehodenie, správania pri prekročení cieľa a potvrdenia výhry. Tieto sa premietnu aj do popisu v Pravidlách hry."}),A.map(R=>a.jsx(tI,{rule:R,onUpdate:L=>p(R.id,L)},R.id))]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(dt,{onClick:()=>d(null),variant:"outline",icon:ys,children:"Späť"}),a.jsx(dt,{onClick:S,icon:Ui,children:"Uložiť všetko"})]})})]});if(l){const R=l==="cat-custom"?{title:"Vlastné pravidlá",subtitle:"Tebou pridané pravidlá"}:Rr.find(D=>D.id===l),L=l==="cat-custom"?B:j(l);return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx($n,{title:R.title,onBack:()=>{d(null),m(null)}}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-3",children:[a.jsxs("div",{className:"ks-card rounded-sm p-3 ks-body text-sm ks-muted",children:[R.subtitle,". Klepni na pravidlo pre úpravu hodnôt."]}),L.length===0&&a.jsx("div",{className:"ks-card rounded-sm p-6 text-center ks-muted italic ks-body",children:"Žiadne pravidlá v tejto kategórii."}),L.map(D=>a.jsx(nI,{rule:D,isEditing:h===D.id,onEdit:()=>m(h===D.id?null:D.id),onUpdate:W=>p(D.id,W),onRemove:()=>v(D.id)},D.id)),l==="cat-custom"&&a.jsxs("button",{onClick:T,className:"ks-press ks-card w-full p-3 rounded-sm flex items-center justify-center gap-2 border-dashed",children:[a.jsx(tu,{size:18,className:"ks-gold"}),a.jsx("span",{className:"ks-display ks-gold",children:"Pridať vlastné pravidlo"})]})]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(dt,{onClick:()=>{d(null),m(null)},variant:"outline",icon:ys,children:"Späť"}),a.jsx(dt,{onClick:S,icon:Ui,children:"Uložiť všetko"})]})})]})}return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx($n,{title:"Úprava pravidiel",onBack:t}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-2",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-2",children:"BODOVÉ KOMBINÁCIE"}),Rr.map(R=>{const L=j(R.id);return a.jsxs("button",{onClick:()=>d(R.id),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left",children:[a.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-bold",children:L.length}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:R.title}),a.jsx("div",{className:"ks-muted text-sm",children:R.subtitle})]}),a.jsx(Et,{className:"ks-muted",size:20})]},R.id)}),a.jsxs("button",{onClick:()=>d("cat-custom"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-dashed",children:[a.jsx("div",{className:"w-10 h-10 rounded-sm border ks-border-accent ks-gold flex items-center justify-center",children:a.jsx(tu,{size:18})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Vlastné pravidlá"}),a.jsxs("div",{className:"ks-muted text-sm",children:[B.length," pridaných pravidiel"]})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsx("div",{className:"ks-mono ks-gold text-xs px-1 pt-3",children:"NASTAVENIA HRY"}),a.jsxs("button",{onClick:()=>d("cat-settings"),className:"ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-l-4",style:{borderLeftColor:"#d4b86a"},children:[a.jsx("div",{className:"w-10 h-10 rounded-sm ks-gold-bg flex items-center justify-center",children:a.jsx(dc,{size:18})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:"Hodnoty hry"}),a.jsx("div",{className:"ks-muted text-sm",children:"Cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia"})]}),a.jsx(Et,{className:"ks-muted",size:20})]})]}),a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-3 gap-2",children:[a.jsx(dt,{onClick:s,variant:"danger",icon:qd,children:"Reset"}),a.jsx(dt,{onClick:t,variant:"outline",icon:Bn,children:"Zrušiť"}),a.jsx(dt,{onClick:S,icon:Ui,children:"Uložiť"})]})})]})}function tI({rule:n,onUpdate:e}){const t=n.type==="numeric",s=Number(n.points)<0;return a.jsxs("div",{className:"ks-card rounded-sm p-4",children:[a.jsx("div",{className:"flex items-baseline justify-between gap-3 mb-2",children:a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:n.name})}),a.jsx("p",{className:"ks-muted text-sm leading-snug mb-3",children:n.description}),t?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"number",value:n.points,onChange:r=>e({points:parseInt(r.target.value,10)||0}),className:`flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${s?"ks-text-accent":"ks-gold"}`}),a.jsx("div",{className:"ks-mono ks-muted text-xs",children:"BODOV"})]}):a.jsx("select",{value:n.selected,onChange:r=>e({selected:r.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700",children:(n.options||[]).map(r=>a.jsx("option",{value:r,children:r},r))})]})}function nI({rule:n,isEditing:e,onEdit:t,onUpdate:s,onRemove:r}){var c;const i=Number(n.points)<0;return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-3 p-3",onClick:t,children:[a.jsxs("div",{className:"flex-1 cursor-pointer",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold",children:n.name}),a.jsx("div",{className:`text-xs italic ${i?"ks-text-accent":"ks-muted"}`,children:n.type==="select"?n.selected:`${n.points} bodov`})]}),a.jsx(op,{dice:(c=n.dice)==null?void 0:c.slice(0,6),size:18}),a.jsx("button",{"aria-label":"Upraviť",onClick:l=>{l.stopPropagation(),t()},className:"ks-press ks-gold p-1",children:a.jsx($p,{size:16})})]}),e&&a.jsxs("div",{className:"border-t ks-border-sub p-3 space-y-3 ks-fade",children:[a.jsx(ls,{label:"Názov",children:a.jsx("input",{value:n.name,onChange:l=>s({name:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})}),a.jsx(ls,{label:"Popis",children:a.jsx("textarea",{value:n.description,onChange:l=>s({description:l.target.value}),rows:2,className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none"})}),a.jsx(ls,{label:"Typ pravidla",children:a.jsxs("select",{value:n.type,onChange:l=>{var h;const d=l.target.value;s(d==="select"?{type:"select",options:n.options||["Možnosť 1","Možnosť 2"],selected:n.selected||((h=n.options)==null?void 0:h[0])||"Možnosť 1"}:{type:"numeric"})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:[a.jsx("option",{value:"numeric",children:"Číselné (pevný počet bodov)"}),a.jsx("option",{value:"select",children:"Výber zo zoznamu"})]})}),n.type==="numeric"?a.jsx(ls,{label:"Body (môže byť aj záporné)",children:a.jsx("input",{type:"number",value:n.points,onChange:l=>s({points:parseInt(l.target.value,10)||0}),className:`w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${i?"ks-text-accent":"ks-gold"}`})}):a.jsxs(a.Fragment,{children:[a.jsx(ls,{label:"Aktívna možnosť",children:a.jsx("select",{value:n.selected,onChange:l=>s({selected:l.target.value}),className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700",children:(n.options||[]).map(l=>a.jsx("option",{value:l,children:l},l))})}),a.jsx(ls,{label:"Možnosti (oddelené čiarkou)",children:a.jsx("input",{value:(n.options||[]).join(", "),onChange:l=>{const d=l.target.value.split(",").map(m=>m.trim()).filter(Boolean),h=d.includes(n.selected)?n.selected:d[0]||"";s({options:d,selected:h})},className:"w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"})})]}),a.jsx(ls,{label:"Kocky (piktogramy)",children:a.jsx(sI,{dice:n.dice||[],onChange:l=>s({dice:l})})}),a.jsxs("button",{onClick:r,className:"ks-press ks-text-accent ks-mono text-xs flex items-center gap-1",children:[a.jsx(ko,{size:14})," Vymazať pravidlo"]})]})]})}function ls({label:n,children:e}){return a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-1.5",children:n.toUpperCase()}),e]})}function sI({dice:n,onChange:e}){return a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border ks-border-sub bg-stone-950/40",children:[n.length===0&&a.jsx("span",{className:"ks-muted text-sm italic",children:"Žiadne kocky"}),n.map((t,s)=>a.jsx("button",{onClick:()=>e(n.filter((r,i)=>i!==s)),className:"ks-press ks-gold relative",children:a.jsx(uc,{value:t,size:26})},s))]}),a.jsxs("div",{className:"flex gap-1.5",children:[[1,2,3,4,5,6].map(t=>a.jsx("button",{onClick:()=>n.length<6&&e([...n,t]),className:"ks-press ks-cream hover:text-amber-300 p-1.5 border ks-border-sub rounded-sm",children:a.jsx(uc,{value:t,size:22})},t)),n.length>0&&a.jsx("button",{onClick:()=>e([]),className:"ks-press ml-auto ks-text-accent ks-mono text-xs px-2",children:"VYMAZAŤ"})]})]})}function rI({tournaments:n,onBack:e,onView:t,onDelete:s,readOnly:r}){return a.jsxs("div",{className:"min-h-screen ks-fade pb-8",children:[a.jsx($n,{title:r?"Archív turnajov":"Editácia archívu",onBack:e}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto",children:[!r&&a.jsxs("div",{className:"ks-card rounded-sm p-3 mb-3 ks-body text-xs ks-muted italic flex items-start gap-2",children:[a.jsx(pc,{size:14,className:"ks-gold shrink-0 mt-0.5"}),a.jsx("div",{children:"Klepni na turnaj pre úpravu skóre, víťaza alebo kôl. Mazanie cez tlačidlo dolu."})]}),n.length===0?a.jsxs("div",{className:"ks-card rounded-sm p-8 text-center",children:[a.jsx(Kd,{className:"ks-gold mx-auto opacity-40",size:48}),a.jsx("p",{className:"ks-muted ks-body mt-3 italic",children:"Zatiaľ žiadne turnaje v archíve."})]}):a.jsx("div",{className:"space-y-2",children:n.map(i=>a.jsx(iI,{t:i,onView:()=>t(i),onDelete:()=>s(i.id),readOnly:r},i.id))})]})]})}function iI({t:n,onView:e,onDelete:t,readOnly:s}){const r=n.players.map((h,m)=>(n.rounds||[]).reduce((p,v)=>p+(typeof v[m]=="number"?v[m]:0),0));if(!n||!Array.isArray(n.players)||!Array.isArray(n.rounds))return a.jsx(Js,{title:"Poškodený turnaj v archíve"});const i=n.winner===null||n.winner===void 0?[]:Array.isArray(n.winner)?n.winner:[n.winner],c=i.length===0?null:i.length===1?n.players[i[0]]:`Remíza: ${i.map(h=>n.players[h]).join(", ")}`,l=n.targetScore||1e4,d=ip(n.date,n.finishedAt);return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsxs("button",{onClick:e,className:"ks-press w-full p-4 text-left flex items-center gap-3",children:[a.jsx("div",{className:`w-12 h-12 rounded-sm flex items-center justify-center
          ${n.status==="finished"?"ks-gold-bg":"border ks-border-sub ks-muted"}`,children:n.status==="finished"?a.jsx(Fp,{size:22}):a.jsx(Bn,{size:22})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"ks-display ks-cream text-lg font-semibold truncate",children:c?a.jsxs(a.Fragment,{children:[i.length>1?"":"Víťaz: ",a.jsx("span",{className:"ks-gold",children:c})]}):a.jsx("span",{className:"italic ks-muted",children:"Nedokončený turnaj"})}),a.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[a.jsx(zp,{size:11,className:"ks-muted"}),a.jsxs("div",{className:"ks-mono ks-muted text-xs truncate",children:[ti(n.date),d?` · ${d}`:""]})]}),a.jsxs("div",{className:"ks-muted text-xs truncate mt-0.5",children:[n.players.length," hráčov · do ",l.toLocaleString("sk-SK")," · ",n.players.join(" · ")]})]}),a.jsx(Et,{className:"ks-muted",size:20})]}),a.jsxs("div",{className:"border-t border-amber-900/20 px-4 py-2 flex items-center justify-between",children:[a.jsxs("div",{className:"ks-mono ks-gold text-sm",children:[Math.max(...r).toLocaleString("sk-SK")," bodov"]}),!s&&a.jsxs("button",{onClick:t,className:"ks-press ks-text-accent text-xs ks-mono flex items-center gap-1",children:[a.jsx(ko,{size:12})," VYMAZAŤ"]})]})]})}function oI({tournament:n,onBack:e,onUpdate:t,readOnly:s,scoreDisplayMode:r,onToggleScoreMode:i,selectedSkin:c}){if(!n||!Array.isArray(n.players)||!Array.isArray(n.rounds))return a.jsx(Js,{title:"Poškodený turnaj v archíve"});const[l,d]=O.useState(!1),[h,m]=O.useState(null);function p(){m({players:[...n.players],rounds:(n.rounds||[]).map(y=>[...y]),winner:n.winner,targetScore:n.targetScore||1e4}),d(!0)}function v(){m(null),d(!1)}function T(){h.players.map((x,k)=>h.rounds.reduce((E,b)=>E+(typeof b[k]=="number"?b[k]:0),0));let y=h.winner;t({players:h.players,rounds:h.rounds,winner:y}),d(!1),m(null)}function S(y,x,k){m(E=>{const b=E.rounds.map(se=>[...se]);for(;b.length<=y;)b.push(new Array(E.players.length).fill(null));return b[y][x]=k,{...E,rounds:b}})}function j(){m(y=>({...y,rounds:[...y.rounds,new Array(y.players.length).fill(null)]}))}function A(y){window.confirm(`Vymazať kolo ${y+1}?`)&&m(x=>({...x,rounds:x.rounds.filter((k,E)=>E!==y)}))}function B(y){m(x=>{const k=x.winner,E=k==null?[]:Array.isArray(k)?[...k]:[k],b=E.indexOf(y);b>=0?E.splice(b,1):E.push(y);const se=E.length===0?null:E.length===1?E[0]:E.sort((_e,ct)=>_e-ct);return{...x,winner:se}})}const R=l&&h?h:n,L=yl(R.rounds,R.players.length),D=R.targetScore||1e4,W=ip(n.date,n.finishedAt),K=O.useMemo(()=>n.status!=="finished"?null:yo({...R,_confirmedDetailed:n._confirmedDetailed,rules:n.rules}),[R,n]),w=R.winner===null||R.winner===void 0?[]:Array.isArray(R.winner)?[...R.winner]:[R.winner],_=K&&(()=>{if(K.winners.length!==w.length)return!0;const y=[...K.winners].sort(),x=[...w].sort();return!y.every((k,E)=>k===x[E])})();return a.jsxs("div",{className:"min-h-screen ks-fade ks-bg pb-32",children:[a.jsx($n,{title:"Detail turnaja",onBack:l?v:e,right:a.jsxs("div",{className:"flex items-center gap-2",children:[!l&&a.jsx("button",{onClick:i,className:"ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20",title:r==="delta"?"Prepnúť na kumulatívne":"Prepnúť na prípisy",children:r==="delta"?a.jsx(Xd,{size:16}):a.jsx(mc,{size:16})}),l||s?null:a.jsxs("button",{onClick:p,className:"ks-press ks-gold flex items-center gap-1 text-xs ks-mono",children:[a.jsx(pc,{size:14})," UPRAVIŤ"]})]})}),a.jsxs("div",{className:"p-4 max-w-2xl mx-auto space-y-4",children:[a.jsxs("div",{className:"ks-card rounded-sm p-5 text-center",children:[n.status==="finished"&&R.winner!==null&&R.winner!==void 0?(()=>{const y=Array.isArray(R.winner)?R.winner:[R.winner],x=y.length>1;return a.jsxs(a.Fragment,{children:[a.jsx(ms,{className:"ks-gold mx-auto",size:40}),a.jsx("div",{className:"ks-mono ks-gold text-xs mt-2",children:x?`REMÍZA · ${y.length} VÍŤAZI`:"VÍŤAZ"}),a.jsx("div",{className:"space-y-1.5 mt-1",children:y.map(k=>a.jsxs("div",{children:[a.jsx("div",{className:"ks-display ks-cream text-2xl font-bold",children:R.players[k]}),a.jsx("div",{className:"ks-display ks-gold text-xl",children:L[k].toLocaleString("sk-SK")})]},k))})]})})():a.jsx("div",{className:"ks-muted italic",children:n.status==="aborted"?"Zrušený turnaj":"Nedokončený turnaj"}),a.jsxs("div",{className:"mt-4 pt-4 border-t ks-border-sub grid grid-cols-2 gap-3 text-left",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Yi,{size:10})," ZAČIATOK"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:ti(n.date)})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Fs,{size:10})," KONIEC"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:n.finishedAt?ti(n.finishedAt):"—"})]}),W&&a.jsxs("div",{className:"col-span-2",children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Up,{size:10})," TRVANIE"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:W})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(hc,{size:10})," CIEĽ"]}),a.jsxs("div",{className:"ks-body ks-cream text-sm mt-0.5",children:[D.toLocaleString("sk-SK")," b."]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"ks-mono ks-muted text-xs flex items-center gap-1",children:[a.jsx(Qd,{size:10})," HRÁČI"]}),a.jsx("div",{className:"ks-body ks-cream text-sm mt-0.5",children:R.players.length})]})]})]}),_&&K&&a.jsx("div",{className:"ks-card rounded-sm p-3 border-2 border-red-700/60 bg-red-950/30",children:a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(vo,{size:20,className:"ks-text-accent shrink-0 mt-0.5"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"ks-mono ks-text-accent text-xs tracking-widest mb-1",children:"⚠ NEZHODA V URČENÍ VÍŤAZA"}),a.jsxs("div",{className:"ks-body ks-cream text-sm leading-snug",children:["Hlavička uvádza:"," ",a.jsx("strong",{className:"ks-gold",children:w.length===0?"—":w.map(y=>R.players[y]).join(", ")}),a.jsx("br",{}),"Súčty kôl však dávajú:"," ",a.jsx("strong",{className:"ks-gold",children:K.winners.length===0?"— (nikto nedosiahol cieľ)":K.winners.map(y=>`${R.players[y]} (${(L[y]||0).toLocaleString("sk-SK")})`).join(", ")})]}),K.errors.length>0&&a.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2",children:K.errors.join(" · ")}),!s&&a.jsx("div",{className:"ks-body ks-text-accent text-xs mt-2 italic",children:"Použi tlačidlo UPRAVIŤ na opravu zoznamu víťazov."})]})]})}),!l&&a.jsxs("div",{children:[a.jsx("div",{className:"ks-mono ks-gold text-xs mb-2",children:"FINÁLNA TABUĽKA"}),a.jsx(XE,{players:R.players,totals:L,target:D})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"ks-mono ks-gold text-xs",children:l?"ÚPRAVA TABUĽKY":"HISTÓRIA KÔL"}),l&&a.jsxs("button",{onClick:j,className:"ks-press ks-gold ks-mono text-xs flex items-center gap-1",children:[a.jsx(Ca,{size:12})," PRIDAŤ KOLO"]})]}),l?a.jsx(aI,{players:h.players,rounds:h.rounds,totals:L,target:D,winner:h.winner,onChangeCell:S,onRemoveRound:A,onSetWinner:B}):a.jsx(ja,{tournament:{...R,currentRound:-1},totals:L,highlightPlayer:R.winner??-1,target:D,displayMode:r,onToggleMode:i,hideModeToolbar:!0})]})]}),l&&a.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur",style:{background:"rgba(14,12,10,0.95)"},children:a.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-2 gap-2",children:[a.jsx(dt,{onClick:v,variant:"outline",icon:Bn,children:"Zrušiť"}),a.jsx(dt,{onClick:T,icon:Ui,children:"Uložiť zmeny"})]})})]})}function aI({players:n,rounds:e,totals:t,target:s,winner:r,onChangeCell:i,onRemoveRound:c,onSetWinner:l}){function d(h){const m=(h||"").trim();if(m===""||m==="·")return null;if(m==="—"||m==="-"||m.toLowerCase()==="dash")return"dash";const p=parseInt(m,10);return Number.isFinite(p)?p:null}return a.jsxs("div",{className:"ks-card rounded-sm overflow-hidden",children:[a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full border-collapse",style:{tableLayout:"fixed",minWidth:`${36+Math.max(n.length,1)*Math.max(80,300/Math.max(n.length,1))}px`},children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:36}}),n.map((h,m)=>a.jsx("col",{style:{width:`${100/(n.length+.25)}%`,minWidth:`${Math.max(80,300/Math.max(n.length,1))}px`}},m)),a.jsx("col",{style:{width:36}})]}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b ks-border-sub",children:[a.jsx("th",{className:"ks-mono ks-muted text-xs font-normal py-2 px-2 text-center sticky left-0",style:{width:36,background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:"K"}),n.map((h,m)=>a.jsx("th",{className:"ks-display ks-cream py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis",children:h},m)),a.jsx("th",{style:{width:36}})]})}),a.jsx("tbody",{children:e.map((h,m)=>a.jsxs("tr",{className:"border-b border-amber-900/15",children:[a.jsx("td",{className:"ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg, rgba(14,12,10,0.97))"},children:m+1}),n.map((p,v)=>{const T=h[v],S=T==="dash"?"—":typeof T=="number"?String(T):"";return a.jsx("td",{className:"p-0.5",children:a.jsx("input",{value:S,onChange:j=>i(m,v,d(j.target.value)),placeholder:"·",className:`w-full bg-stone-950/40 border ks-border-sub rounded-sm px-2 py-1 ks-display text-center text-sm outline-none focus:border-amber-700 ${T==="dash"?"ks-muted":typeof T=="number"&&T<0?"ks-text-accent":"ks-cream"}`})},v)}),a.jsx("td",{className:"text-center",children:a.jsx("button",{onClick:()=>c(m),className:"ks-press ks-text-accent hover:ks-text-accent p-1",children:a.jsx(ko,{size:12})})})]},m))}),a.jsx("tfoot",{children:a.jsxs("tr",{className:"border-t-2 ks-border-accent",children:[a.jsx("td",{className:"ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0",style:{background:"var(--ks-sticky-bg2, rgba(10,8,6,0.98))"},children:"∑"}),t.map((h,m)=>{const p=h>=s,T=(r==null?new Set:Array.isArray(r)?new Set(r):new Set([r])).has(m);return a.jsx("td",{className:"text-center py-2 px-2",children:a.jsxs("button",{onClick:()=>l(m),className:`ks-press w-full ks-display text-base font-bold rounded-sm py-1 px-2 ${T?"ks-gold-bg":p?"ks-gold border border-amber-700/40":h<0?"ks-text-accent":"ks-cream"}`,children:[T&&a.jsx(ms,{size:12,className:"inline mr-1"}),h.toLocaleString("sk-SK")]})},m)}),a.jsx("td",{})]})})]})}),a.jsx("div",{className:"p-2 border-t border-amber-900/20 ks-muted text-xs italic text-center ks-body",children:'Klepni na bunku pre úpravu · Klepni na súčet pre nastavenie víťaza · Číslo, „—" alebo prázdne pre vymazanie'})]})}class cI extends ds.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("[ErrorBoundary]",e,t.componentStack)}render(){var e;return this.state.error?a.jsxs("div",{style:{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px",background:"#0e0c0a",color:"#f3ead4",fontFamily:"sans-serif",textAlign:"center"},children:[a.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🎲"}),a.jsx("div",{style:{fontSize:22,fontWeight:700,marginBottom:8,color:"#d4b86a"},children:"Nastala neočakávaná chyba"}),a.jsx("div",{style:{fontSize:13,color:"#a89679",marginBottom:24,maxWidth:320},children:((e=this.state.error)==null?void 0:e.message)||"Neznáma chyba"}),a.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 28px",borderRadius:4,border:"none",cursor:"pointer",background:"#d4b86a",color:"#1a1410",fontWeight:700,fontSize:14},children:"Znova načítať"})]}):this.props.children}}typeof window<"u"&&!window.storage&&(window.storage={async get(n){try{const e=localStorage.getItem(n);return e===null?null:{key:n,value:e,shared:!1}}catch{return null}},async set(n,e){try{return localStorage.setItem(n,e),{key:n,value:e,shared:!1}}catch{return null}},async delete(n){try{return localStorage.removeItem(n),{key:n,deleted:!0,shared:!1}}catch{return null}},async list(n=""){const e=[];for(let t=0;t<localStorage.length;t++){const s=localStorage.key(t);s&&s.startsWith(n)&&e.push(s)}return{keys:e,prefix:n,shared:!1}}});const lI=typeof window<"u"&&(window.location.protocol==="https:"||window.location.protocol==="http:");"serviceWorker"in navigator&&lI&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("SW registered:",e.scope)}).catch(e=>{console.warn("SW registration failed:",e)})});document.addEventListener("contextmenu",n=>{!(n.target instanceof HTMLInputElement)&&!(n.target instanceof HTMLTextAreaElement)&&n.preventDefault()},{capture:!0});eg.createRoot(document.getElementById("root")).render(a.jsx(ds.StrictMode,{children:a.jsx(cI,{children:a.jsx(qE,{})})}));export{cu as E,eh as W,gl as a,hg as b,ul as d,uE as s,yE as u};
