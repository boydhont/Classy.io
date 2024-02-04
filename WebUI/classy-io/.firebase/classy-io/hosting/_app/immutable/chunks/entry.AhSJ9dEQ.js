import{p as ut}from"./scheduler.uY8I1iGY.js";import{w as he}from"./index.SoIEjqXw.js";new URL("sveltekit-internal://");function dt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function pt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function se({href:e}){return e.split("#")[0]}const gt=["href","pathname","search","toString","toJSON"];function _t(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of gt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return wt(r),r}function wt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const mt="/__data.json",yt=".html__data.json";function vt(e){return e.endsWith(".html")?e.replace(/\.html$/,yt):e.replace(/\/$/,"")+mt}function bt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function kt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}let pe=0;const Fe=window.fetch;function Et(){pe+=1}function St(){pe-=1}{let e=!1;(async()=>{e=new Error().stack.includes("check_stack_trace")})(),window.fetch=(t,r)=>{const a=t instanceof Request?t.url:t.toString(),o=new Error().stack.split(`
`),i=o.findIndex(h=>h.includes("load@")||h.includes("at load")),s=o.slice(0,i+2).join(`
`),c=e?s.includes("src/runtime/client/client.js"):pe,f=r==null?void 0:r.__sveltekit_fetch__;return c&&!f&&console.warn(`Loading ${a} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(t instanceof Request?t.method:(r==null?void 0:r.method)||"GET")!=="GET"&&F.delete(ge(t)),Fe(t,r)}}const F=new Map;function At(e,n){const t=ge(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&F.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=kt(a)),Promise.resolve(new Response(a,o))}return Ve(e,n)}function Rt(e,n,t){if(F.size>0){const r=ge(e,t),a=F.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);F.delete(r)}}return Ve(n,t)}function Ve(e,n){const t={...n};return Object.defineProperty(t,"__sveltekit_fetch__",{value:!0,writable:!0,configurable:!0}),window.fetch(e,t)}function ge(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${bt(...a)}"]`}return r}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${xt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ie(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ie(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=It.exec(c),[,h,g,u,_]=d;return n.push({name:u,matcher:_,optional:!!h,rest:!!g,chained:g?f===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ie(c)}).join("")}).join("")}/?$`),params:n}}function $t(e){return!/^\([^)]+\)$/.test(e)}function xt(e){return e.slice(1).split("/").filter($t)}function Lt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:g}=Pt(s),u={id:s,exec:_=>{const l=h.exec(_);if(l)return Lt(l,g,r)},errors:[1,...d||[]].map(_=>e[_]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var Ce;const I=((Ce=globalThis.__sveltekit_19470ky)==null?void 0:Ce.base)??"";var De;(De=globalThis.__sveltekit_19470ky)==null||De.assets;const He="sveltekit:snapshot",Ge="sveltekit:scroll",Me="sveltekit:states",Ot="sveltekit:pageurl",U="sveltekit:history",V="sveltekit:navigation",B={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},M=location.origin;function Ke(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function _e(){return{x:pageXOffset,y:pageYOffset}}const $e=new WeakSet,xe={"preload-code":["","off","false","tap","hover","viewport","eager"],"preload-data":["","off","false","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function O(e,n){const t=e.getAttribute(`data-sveltekit-${n}`);return jt(e,n,t),t}function jt(e,n,t){t!==null&&!$e.has(e)&&!xe[n].includes(t)&&(console.error(`Unexpected value for ${n} — should be one of ${xe[n].map(r=>JSON.stringify(r)).join(", ")}`,e),$e.add(e))}const Le={...B,"":B.hover};function Be(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Je(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Be(e)}}function fe(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||ee(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===M&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function J(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),t===null&&(t=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Be(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Te(e){const n=he(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ut(){const{set:e,subscribe:n}=he(!1);return{subscribe:n,check:async()=>!1}}function ee(e,n){return e.origin!==M||!e.pathname.startsWith(n)}const Nt=-1,Ct=-2,Dt=-3,Ft=-4,Vt=-5,qt=-6;function Ht(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Nt)return;if(o===Dt)return NaN;if(o===Ft)return 1/0;if(o===Vt)return-1/0;if(o===qt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let u=1;u<s.length;u+=2)g[s[u]]=a(s[u+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Ct&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}function Gt(e){function n(t,r){if(t)for(const a in t){if(a[0]==="_"||e.has(a))continue;const o=[...e.values()],i=Mt(a,r==null?void 0:r.slice(r.lastIndexOf(".")))??`valid exports are ${o.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${a}'${r?` in ${r}`:""} (${i})`)}}return n}function Mt(e,n=".js"){const t=[];if(we.has(e)&&t.push(`+layout${n}`),We.has(e)&&t.push(`+page${n}`),Ye.has(e)&&t.push(`+layout.server${n}`),Kt.has(e)&&t.push(`+page.server${n}`),Bt.has(e)&&t.push(`+server${n}`),t.length>0)return`'${e}' is a valid export in ${t.slice(0,-1).join(", ")}${t.length>1?" or ":""}${t.at(-1)}`}const we=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),We=new Set([...we,"entries"]),Ye=new Set([...we]),Kt=new Set([...Ye,"actions","entries"]),Bt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),Jt=Gt(We);function Wt(e){return e.filter(n=>n!=null)}class te{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(n,t){this.status=n,this.location=t}}class me extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}function Yt(e,n){const t=/^(moz-icon|view-source|jar):/.exec(n);t&&console.warn(`${e}: Calling \`depends('${n}')\` will throw an error in Firefox because \`${t[1]}\` is a special URI scheme`)}const ce="x-sveltekit-invalidated",zt="x-sveltekit-trailing-slash";function W(e){return e instanceof te||e instanceof me?e.status:500}function Xt(e){return e instanceof me?e.text:"Internal Error"}const T=qe(Ge)??{},q=qe(He)??{};{let e=!1;const n=()=>{var o;if(e)return;let a=(o=new Error().stack)==null?void 0:o.split(`
`);a&&(!a[0].includes("https:")&&!a[0].includes("http:")&&(a=a.slice(1)),a=a.slice(2),!a[0].includes(import.meta.url)&&(e=!0,console.warn("Avoid using `history.pushState(...)` and `history.replaceState(...)` as these will conflict with SvelteKit's router. Use the `pushState` and `replaceState` imports from `$app/navigation` instead.")))},t=history.pushState;history.pushState=(...a)=>(n(),t.apply(history,a));const r=history.replaceState;history.replaceState=(...a)=>(n(),r.apply(history,a))}const x={url:Te({}),page:Te({}),navigating:he(null),updated:Ut()};function ye(e){T[e]=_e()}function Zt(e,n){let t=e+1;for(;T[t];)delete T[t],t+=1;for(t=n+1;q[t];)delete q[t],t+=1}function N(e){return location.href=e.href,new Promise(()=>{})}function Oe(){}let ne,ue,Y,P,de,C;const Xe=[],z=[];let $=null;const Ze=[],Qt=[];let j=[],y={branch:[],error:null,url:null},ve=!1,X=!1,je=!0,H=!1,D=!1,Qe=!1,be=!1,ke,E,A,R,Z;async function un(e,n,t){var a,o;n===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`),document.URL!==location.href&&(location.href=location.href),C=e,ne=Tt(e),P=document.documentElement,de=n,ue=e.nodes[0],Y=e.nodes[1],ue(),Y(),E=(a=history.state)==null?void 0:a[U],A=(o=history.state)==null?void 0:o[V],E||(E=A=Date.now(),history.replaceState({...history.state,[U]:E,[V]:A},""));const r=T[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await sn(de,t):rn(location.href,{replaceState:!0}),on()}function et(e){z.some(n=>n==null?void 0:n.snapshot)&&(q[e]=z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function tt(e){var n;(n=q[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=z[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ue(){ye(E),Pe(Ge,T),et(A),Pe(He,q)}async function nt(e,n,t,r){return K({type:"goto",url:Ke(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(be=!0)}})}async function en(e){return $={id:e.id,promise:rt(e).then(n=>(n.type==="loaded"&&n.state.error&&($=null),n))},$.promise}async function le(e){const n=ne.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function at(e,n){var a;if(e.state.error&&document.querySelector("vite-error-overlay"))return;y=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),R=e.props.page,ke=new C.root({target:n,props:{...e.props,stores:x,components:z},hydrate:!0}),tt(A);const r={from:null,to:{params:y.params,route:{id:((a=y.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(r)),X=!0}async function Q({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(I&&(e.pathname===I||e.pathname===I+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=dt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Wt(t).map(u=>u.node.component),page:R}};i!==void 0&&(c.props.form=i);let f={},d=!R,h=0;for(let u=0;u<Math.max(t.length,y.branch.length);u+=1){const _=t[u],l=y.branch[u];(_==null?void 0:_.data)!==(l==null?void 0:l.data)&&(d=!0),_&&(f={...f,..._.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==R.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:R.data}),c}async function Ee({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(Jt(f.universal),(d=f.universal)!=null&&d.load){let u=function(...l){for(const w of l){Yt(a.id,w);const{href:v}=new URL(w,t);c.dependencies.add(v)}};const _={route:new Proxy(a,{get:(l,w)=>(s&&(c.route=!0),l[w])}),params:new Proxy(r,{get:(l,w)=>(s&&c.params.add(w),l[w])}),data:(o==null?void 0:o.data)??null,url:_t(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,w){let v;l instanceof Request?(v=l.url,w={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...w}):v=l;const S=new URL(v,t);return s&&u(S.href),S.origin===t.origin&&(v=S.href.slice(t.origin.length)),X?Rt(v,S.href,w):At(v,w)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};try{if(Et(),i=await f.universal.load.call(null,_)??null,i!=null&&Object.getPrototypeOf(i)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof i!="object"?`a ${typeof i}`:i instanceof Response?"a Response object":Array.isArray(i)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{St()}}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,r,a,o){if(be)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Xe.some(s=>s(new URL(i))))return!0;return!1}function Se(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function tn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}async function rt({id:e,invalidating:n,url:t,params:r,route:a}){if(($==null?void 0:$.id)===e)return $.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let f=null;const d=y.url?e!==y.url.pathname+y.url.search:!1,h=y.route?a.id!==y.route.id:!1,g=tn(y.url,t);let u=!1;const _=c.map((p,m)=>{var L;const b=y.branch[m],k=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Ne(u,h,d,g,(L=b.server)==null?void 0:L.uses,r));return k&&(u=!0),k});if(_.some(Boolean)){try{f=await ct(t,_)}catch(p){return ae({status:W(p),error:await G(p,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(f.type==="redirect")return f}const l=f==null?void 0:f.nodes;let w=!1;const v=c.map(async(p,m)=>{var re;if(!p)return;const b=y.branch[m],k=l==null?void 0:l[m];if((!k||k.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Ne(w,h,d,g,(re=b.universal)==null?void 0:re.uses,r))return b;if(w=!0,(k==null?void 0:k.type)==="error")throw k;return Ee({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Ie;const Re={};for(let oe=0;oe<m;oe+=1)Object.assign(Re,(Ie=await v[oe])==null?void 0:Ie.data);return Re},server_data_node:Se(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(m){if(m instanceof ze)return{type:"redirect",location:m.location};let b=W(m),k;if(l!=null&&l.includes(m))b=m.status??b,k=m.error;else if(m instanceof te)k=m.body;else{if(await x.updated.check())return await N(t);k=await G(m,{params:r,url:t,route:{id:a.id}})}const L=await nn(p,S,o);return L?await Q({url:t,params:r,branch:S.slice(0,L.idx).concat(L.node),status:b,error:k,route:a}):await it(t,{id:a.id},k,b)}else S.push(void 0);return await Q({url:t,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function nn(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ae({status:e,error:n,url:t,route:r}){const a={};let o=null;if(C.server_loads[0]===0)try{const f=await ct(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==M||t.pathname!==location.pathname||ve)&&await N(t)}const s=await Ee({loader:ue,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Se(o)}),c={node:await Y(),loader:Y,universal:null,server:null,data:null};return await Q({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Ae(e,n){if(!e||ee(e,I))return;let t;try{t=C.hooks.reroute({url:new URL(e)})??e.pathname}catch(a){{console.error(a);debugger}return}const r=ot(t);for(const a of ne){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:pt(o),url:e}}}function ot(e){return ht(e.slice(I.length)||"/")}function st({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ft(y,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return H||Ze.forEach(s=>s(i)),a?null:o}async function K({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Oe,block:d=Oe}){const h=Ae(n,!1),g=st({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){d();return}const u=E,_=A;f(),H=!0,X&&x.navigating.set(g.navigation),Z=c;let l=h&&await rt(h);if(!l){if(ee(n,I))return await N(n);l=await it(n,{id:null},await G(new me(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,Z!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await ae({status:500,error:await G(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return nt(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await x.updated.check()&&await N(n);if(Xe.length=0,be=!1,ye(u),et(_),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const p=o?0:1,m={[U]:E+=p,[V]:A+=p,[Me]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||Zt(E,A)}if($=null,l.props.page.state=i,X){y=l.state,l.props.page&&(l.props.page.url=n);const p=(await Promise.all(Qt.map(m=>m(g.navigation)))).filter(m=>typeof m=="function");if(p.length>0){let m=function(){j=j.filter(b=>!p.includes(b))};p.push(m),j.push(...p)}ke.$set(l.props),Qe=!0}else at(l,de);const{activeElement:w}=document;await ut();const v=t?t.scroll:a?_e():null;if(je){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==w&&document.activeElement!==document.body;!r&&!S&&cn(),je=!0,l.props.page&&(R=l.props.page),H=!1,e==="popstate"&&tt(A),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),x.navigating.set(null)}async function it(e,n,t,r){if(e.origin===M&&e.pathname===location.pathname&&!ve)return await ae({status:r,error:t,url:e,route:n});if(r!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await N(e)}function an(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(le(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Je(o,P);if(!s)return;const{url:c,external:f,download:d}=fe(s,I);if(f||d)return;const h=J(s);if(!h.reload)if(i<=h.preload_data){const g=Ae(c,!1);g&&en(g).then(u=>{u.type==="loaded"&&u.state.error&&console.warn(`Preloading data for ${g.url.pathname} failed with the following error: ${u.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else i<=h.preload_code&&le(c.pathname)}function a(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=fe(o,I);if(s||c)continue;const f=J(o);f.reload||(f.preload_code===B.viewport&&t.observe(o),f.preload_code===B.eager&&le(i.pathname))}}j.push(a),a()}function G(e,n){if(e instanceof te)return e.body;console.warn("The next HMR update will cause the page to reload");const t=W(e),r=Xt(e);return C.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function rn(e,n={}){return e=Ke(e),e.origin!==M?Promise.reject(new Error(`Cannot use \`goto\` with an external URL. Use \`window.location = "${e}"\` instead`)):nt(e,n,0)}function on(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ue(),!H){const a=ft(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ze.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ue()}),(n=navigator.connection)!=null&&n.saveData||an(),P.addEventListener("click",t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Je(t.composedPath()[0],P);if(!r)return;const{url:a,external:o,target:i,download:s}=fe(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=J(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){st({url:a,type:"link"})?H=!0:t.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===se(location)){const[,u]=y.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(D=!0,ye(E),e(a),!c.replace_state)return;D=!1}t.preventDefault(),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ee(i,I))return;const s=t.target,c=J(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(s),d=a==null?void 0:a.getAttribute("name");d&&f.append(d,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(f).toString(),K({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[U]){const a=t.state[U];if(Z={},a===E)return;const o=T[a],i=t.state[Me]??{},s=new URL(t.state[Ot]??location.href),c=t.state[V],f=se(location)===se(y.url);if(c===A&&(Qe||f)){e(s),T[E]=_e(),o&&scrollTo(o.x,o.y),i!==R.state&&(R={...R,state:i},ke.$set({page:R})),E=a;return}const h=a-E;await K({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,A=c},block:()=>{history.go(-h)},nav_token:Z})}else if(!D){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[U]:++E,[V]:A},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){y.url=t,x.page.set({...R,url:t}),x.page.notify()}}async function sn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){ve=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ae(c,!1)||{});let f;try{const d=r.map(async(u,_)=>{const l=i[_];return l!=null&&l.uses&&(l.uses=lt(l.uses)),Ee({loader:C.nodes[u],url:c,params:a,route:o,parent:async()=>{const w={};for(let v=0;v<_;v+=1)Object.assign(w,(await d[v]).data);return w},server_data_node:Se(l)})}),h=await Promise.all(d),g=ne.find(({id:u})=>u===o.id);if(g){const u=g.layouts;for(let _=0;_<u.length;_++)u[_]||h.splice(_,0,void 0)}f=await Q({url:c,params:a,branch:h,status:n,error:t,form:s,route:g??null})}catch(d){if(d instanceof ze){await N(new URL(d.location,location.href));return}f=await ae({status:W(d),error:await G(d,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),at(f,e)}async function ct(e,n){var a;const t=new URL(e);if(t.pathname=vt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(zt,"1"),e.searchParams.has(ce))throw new Error(`Cannot used reserved query parameter "${ce}"`);t.searchParams.append(ce,n.map(o=>o?"1":"0").join(""));const r=await Fe(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new te(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(g){return Ht(g,{Promise:u=>new Promise((_,l)=>{i.set(u,{fulfil:_,reject:l})})})}let d="";for(;;){const{done:g,value:u}=await s.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const _=d.indexOf(`
`);if(_===-1)break;const l=JSON.parse(d.slice(0,_));if(d=d.slice(_+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=lt(w.uses),w.data=f(w.data))}),o(l);else if(l.type==="chunk"){const{id:w,data:v,error:S}=l,p=i.get(w);i.delete(w),S?p.reject(f(S)):p.fulfil(f(v))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function cn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ft(e,n,t,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}{const e=console.warn;console.warn=function(...t){t.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(t[0])||e(...t)}}export{un as a,x as s};
