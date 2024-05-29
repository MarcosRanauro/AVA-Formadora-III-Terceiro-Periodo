"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1263:(y,_,i)=>{i.d(_,{c:()=>r});var g=i(9672),l=i(1086),c=i(8607);const r=(n,o)=>{let e,t;const u=(a,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,w);E&&o(E)&&!E.disabled?E!==e&&(s(),d(E,p)):s()},d=(a,w)=>{e=a,t||(t=e);const p=e;(0,g.w)(()=>p.classList.add("ion-activated")),w()},s=(a=!1)=>{if(!e)return;const w=e;(0,g.w)(()=>w.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,l.a),onMove:a=>u(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),t=void 0}})}},8438:(y,_,i)=>{i.d(_,{g:()=>l});var g=i(8476);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},5572:(y,_,i)=>{i.d(_,{c:()=>g,i:()=>l});const g=(c,r,n)=>"function"==typeof n?n(c,r):"string"==typeof n?c[n]===r[n]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,n)=>void 0!==c&&(Array.isArray(c)?c.some(o=>g(o,r,n)):g(c,r,n))},3351:(y,_,i)=>{i.d(_,{g:()=>g});const g=(o,e,t,u,d)=>c(o[1],e[1],t[1],u[1],d).map(s=>l(o[0],e[0],t[0],u[0],s)),l=(o,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-o*Math.pow(d-1,3),c=(o,e,t,u,d)=>n((u-=d)-3*(t-=d)+3*(e-=d)-(o-=d),3*t-6*e+3*o,3*e-3*o,o).filter(a=>a>=0&&a<=1),n=(o,e,t,u)=>{if(0===o)return((o,e,t)=>{const u=e*e-4*o*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*o),(-e-Math.sqrt(u))/(2*o)]})(e,t,u);const d=(3*(t/=o)-(e/=o)*e)/3,s=(2*e*e*e-9*e*t+27*(u/=o))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(s/2,.5)-e/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-e/3];const w=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5083:(y,_,i)=>{i.d(_,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,_,i)=>{i.r(_),i.d(_,{startFocusVisible:()=>r});const g="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let o=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,d=M=>{o.forEach(f=>f.classList.remove(g)),M.forEach(f=>f.classList.add(g)),o=M},s=()=>{e=!1,d([])},a=M=>{e=c.includes(M.key),e||d([])},w=M=>{if(e&&void 0!==M.composedPath){const f=M.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));d(f)}},p=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:d}}},1086:(y,_,i)=>{i.d(_,{I:()=>l,a:()=>e,b:()=>t,c:()=>o,d:()=>d,h:()=>u});var g=i(8438),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=(0,g.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const a=(0,g.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const a=this.getEngine();a&&a.impact({style:s.style})},notification(s){const a=this.getEngine();a&&a.notification({type:s.type})},selection(){this.impact({style:l.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},n=()=>r.available(),o=()=>{n()&&r.selection()},e=()=>{n()&&r.selectionStart()},t=()=>{n()&&r.selectionChanged()},u=()=>{n()&&r.selectionEnd()},d=s=>{n()&&r.impact(s)}},909:(y,_,i)=>{i.d(_,{I:()=>o,a:()=>d,b:()=>n,c:()=>w,d:()=>E,f:()=>s,g:()=>u,i:()=>t,p:()=>p,r:()=>M,s:()=>a});var g=i(467),l=i(4920),c=i(4929);const n="ion-content",o=".ion-content-scroll-host",e=`${n}, ${o}`,t=f=>"ION-CONTENT"===f.tagName,u=function(){var f=(0,g.A)(function*(h){return t(h)?(yield new Promise(m=>(0,l.c)(h,m)),h.getScrollElement()):h});return function(m){return f.apply(this,arguments)}}(),d=f=>f.querySelector(o)||f.querySelector(e),s=f=>f.closest(e),a=(f,h)=>t(f)?f.scrollToTop(h):Promise.resolve(f.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),w=(f,h,m,O)=>t(f)?f.scrollByPoint(h,m,O):Promise.resolve(f.scrollBy({top:m,left:h,behavior:O>0?"smooth":"auto"})),p=f=>(0,c.b)(f,n),E=f=>{if(t(f)){const m=f.scrollY;return f.scrollY=!1,m}return f.style.setProperty("overflow","hidden"),!0},M=(f,h)=>{t(f)?f.scrollY=h:f.style.removeProperty("overflow")}},3992:(y,_,i)=>{i.d(_,{a:()=>g,b:()=>w,c:()=>e,d:()=>p,e:()=>L,f:()=>o,g:()=>E,h:()=>c,i:()=>l,j:()=>v,k:()=>D,l:()=>t,m:()=>s,n:()=>M,o:()=>d,p:()=>n,q:()=>r,r:()=>C,s:()=>P,t:()=>a,u:()=>m,v:()=>O,w:()=>u,x:()=>f,y:()=>h});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,_,i)=>{i.d(_,{c:()=>r,g:()=>n});var g=i(8476),l=i(4920),c=i(4929);const r=(e,t,u)=>{let d,s;if(void 0!==g.w&&"MutationObserver"in g.w){const E=Array.isArray(t)?t:[t];d=new MutationObserver(M=>{for(const f of M)for(const h of f.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&E.includes(h.slot))return u(),void(0,l.r)(()=>a(h))}),d.observe(e,{childList:!0,subtree:!0})}const a=E=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(f=>{u();for(const h of f)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&p()}),s.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),p()}}},n=(e,t,u)=>{const d=null==e?0:e.toString().length,s=o(d,t);if(void 0===u)return s;try{return u(d,t)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),s}},o=(e,t)=>`${e} / ${t}`},1622:(y,_,i)=>{i.r(_),i.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>f,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var g=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},s=v=>{if(g.K.getEngine())a(v);else{if(!v.visualViewport)return;t=C(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||M(v)?w(v):f(v)&&p(v)}}},a=v=>{v.addEventListener("keyboardDidShow",D=>w(v,D)),v.addEventListener("keyboardDidHide",()=>p(v))},w=(v,D)=>{h(v,D),u=!0},p=v=>{m(v),u=!1},E=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=v=>u&&!f(v),f=v=>u&&t.height===v.innerHeight,h=(v,D)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:v.innerHeight-t.height}});v.dispatchEvent(L)},m=v=>{const D=new CustomEvent(n);v.dispatchEvent(D)},O=v=>{e=Object.assign({},t),t=C(v.visualViewport)},C=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(y,_,i)=>{i.d(_,{K:()=>r,a:()=>c});var g=i(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const r={getEngine(){const n=(0,g.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,_,i)=>{i.d(_,{c:()=>o});var g=i(467),l=i(8476),c=i(4379);const r=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},n=e=>{const t=r(e);return null===t?0:t.clientHeight},o=function(){var e=(0,g.A)(function*(t){let u,d,s,a;const w=function(){var h=(0,g.A)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===a&&(a=n(O)),s=!0,p(s,O)},d=()=>{s=!1,p(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return h.apply(this,arguments)}}(),p=(h,m)=>{t&&t(h,E(m))},E=h=>{if(0===a||a===n(h))return;const m=r(h);return null!==m?new Promise(O=>{const v=new ResizeObserver(()=>{m.clientHeight===a&&(v.disconnect(),O())});v.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>s}});return function(u){return e.apply(this,arguments)}}()},7838:(y,_,i)=>{i.d(_,{c:()=>l});var g=i(467);const l=()=>{let c;return{lock:function(){var n=(0,g.A)(function*(){const o=c;let e;return c=new Promise(t=>e=t),void 0!==o&&(yield o),e});return function(){return n.apply(this,arguments)}}()}}},9001:(y,_,i)=>{i.d(_,{c:()=>c});var g=i(8476),l=i(4920);const c=(r,n,o)=>{let e;const t=()=>!(void 0===n()||void 0!==r.label||null===o()),d=()=>{const a=n();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const w=o().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const p=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),p.disconnect(),e=void 0)},{threshold:.01,root:r});p.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(y,_,i)=>{i.d(_,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,n)=>{const o=c*r/n-c+"ms",e=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,r,n)=>{const o=r/n,e=c*o-c+"ms",t=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})}}},7166:(y,_,i)=>{i.r(_),i.d(_,{createSwipeBackGesture:()=>n});var g=i(4920),l=i(5083),c=i(8607);i(1970);const n=(o,e,t,u,d)=>{const s=o.ownerDocument.defaultView;let a=(0,l.i)(o);const p=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(o),(m=>{const{startX:C}=m;return a?C>=s.innerWidth-50:C<=50})(m)&&e()),onStart:t,onMove:m=>{const C=p(m)/s.innerWidth;u(C)},onEnd:m=>{const O=p(m),C=s.innerWidth,v=O/C,D=(m=>a?-m.velocityX:m.velocityX)(m),L=D>=0&&(D>.2||O>C/2),x=(L?1-v:v)*C;let A=0;if(x>5){const b=x/Math.abs(D);A=Math.min(b,540)}d(L,v<=0?.01:(0,g.j)(0,v,.9999),A)}})}},2935:(y,_,i)=>{i.d(_,{w:()=>g});const g=(r,n,o)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{o(l(t,n))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,n)=>{let o;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)o=c(e.addedNodes[t],n)||o}),o},c=(r,n)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(t=>t.value===o.value)}},1307:(y,_,i)=>{i.d(_,{S:()=>n});var g=i(177),l=i(4341),c=i(7863),r=i(4438);let n=(()=>{var o;class e{}return(o=e).\u0275fac=function(u){return new(u||o)},o.\u0275mod=r.$C({type:o}),o.\u0275inj=r.G2t({imports:[g.MD,l.YN,c.bv]}),e})()}}]);