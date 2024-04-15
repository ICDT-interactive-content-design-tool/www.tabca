"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6117:(C,h,c)=>{c.d(h,{c:()=>s});var l=c(4190),p=c(7408),e=c(8077);const s=(r,a)=>{let t,n;const i=(u,v,f)=>{if(typeof document>"u")return;const w=document.elementFromPoint(u,v);w&&a(w)?w!==t&&(d(),m(w,f)):d()},m=(u,v)=>{t=u,n||(n=t);const f=t;(0,l.c)(()=>f.classList.add("ion-activated")),v()},d=(u=!1)=>{if(!t)return;const v=t;(0,l.c)(()=>v.classList.remove("ion-activated")),u&&n!==t&&t.click(),t=void 0};return(0,e.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>i(u.currentX,u.currentY,p.a),onMove:u=>i(u.currentX,u.currentY,p.b),onEnd:()=>{d(!0),(0,p.h)(),n=void 0}})}},1776:(C,h,c)=>{c.d(h,{i:()=>l});const l=p=>p&&""!==p.dir?"rtl"===p.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},9222:(C,h,c)=>{c.r(h),c.d(h,{startFocusVisible:()=>s});const l="ion-focused",e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=r=>{let a=[],t=!0;const n=r?r.shadowRoot:document,i=r||document.body,m=E=>{a.forEach(_=>_.classList.remove(l)),E.forEach(_=>_.classList.add(l)),a=E},d=()=>{t=!1,m([])},u=E=>{t=e.includes(E.key),t||m([])},v=E=>{if(t&&void 0!==E.composedPath){const _=E.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));m(_)}},f=()=>{n.activeElement===i&&m([])};return n.addEventListener("keydown",u),n.addEventListener("focusin",v),n.addEventListener("focusout",f),n.addEventListener("touchstart",d),n.addEventListener("mousedown",d),{destroy:()=>{n.removeEventListener("keydown",u),n.removeEventListener("focusin",v),n.removeEventListener("focusout",f),n.removeEventListener("touchstart",d),n.removeEventListener("mousedown",d)},setFocus:m}}},2861:(C,h,c)=>{c.d(h,{C:()=>r,a:()=>e,d:()=>s});var l=c(5861),p=c(690);const e=function(){var a=(0,l.Z)(function*(t,n,i,m,d,u){var v;if(t)return t.attachViewToDom(n,i,d,m);if(!(u||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof i?null===(v=n.ownerDocument)||void 0===v?void 0:v.createElement(i):i;return m&&m.forEach(w=>f.classList.add(w)),d&&Object.assign(f,d),n.appendChild(f),yield new Promise(w=>(0,p.c)(f,w)),f});return function(n,i,m,d,u,v){return a.apply(this,arguments)}}(),s=(a,t)=>{if(t){if(a)return a.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},r=()=>{let a,t;return{attachViewToDom:function(){var m=(0,l.Z)(function*(d,u,v={},f=[]){var w,E;if(a=d,u){const g="string"==typeof u?null===(w=a.ownerDocument)||void 0===w?void 0:w.createElement(u):u;f.forEach(o=>g.classList.add(o)),Object.assign(g,v),a.appendChild(g),yield new Promise(o=>(0,p.c)(g,o))}else if(a.children.length>0&&!a.children[0].classList.contains("ion-delegate-host")){const o=null===(E=a.ownerDocument)||void 0===E?void 0:E.createElement("div");o.classList.add("ion-delegate-host"),f.forEach(y=>o.classList.add(y)),o.append(...a.children),a.appendChild(o)}const _=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),a.parentNode.insertBefore(t,a),_.appendChild(a),a});return function(u,v){return m.apply(this,arguments)}}(),removeViewFromDom:()=>(a&&t&&(t.parentNode.insertBefore(a,t),t.remove()),Promise.resolve())}}},7408:(C,h,c)=>{c.d(h,{a:()=>s,b:()=>r,c:()=>e,d:()=>t,h:()=>a});const l={getEngine(){var n;const i=window;return i.TapticEngine||(null===(n=i.Capacitor)||void 0===n?void 0:n.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var n;const i=window;return!!this.getEngine()&&("web"!==(null===(n=i.Capacitor)||void 0===n?void 0:n.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(n){const i=this.getEngine();if(!i)return;const m=this.isCapacitor()?n.style.toUpperCase():n.style;i.impact({style:m})},notification(n){const i=this.getEngine();if(!i)return;const m=this.isCapacitor()?n.style.toUpperCase():n.style;i.notification({style:m})},selection(){this.impact({style:"light"})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},p=()=>l.available(),e=()=>{p()&&l.selection()},s=()=>{p()&&l.selectionStart()},r=()=>{p()&&l.selectionChanged()},a=()=>{p()&&l.selectionEnd()},t=n=>{p()&&l.impact(n)}},8014:(C,h,c)=>{c.d(h,{a:()=>l,b:()=>u,c:()=>t,d:()=>v,e:()=>P,f:()=>a,g:()=>f,h:()=>e,i:()=>p,j:()=>o,k:()=>y,l:()=>n,m:()=>m,n:()=>w,o:()=>i,p:()=>r,q:()=>s,r:()=>g,s:()=>O,t:()=>d,u:()=>E,v:()=>_});const l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4964:(C,h,c)=>{c.d(h,{I:()=>r,a:()=>m,b:()=>a,c:()=>v,d:()=>w,f:()=>d,g:()=>i,i:()=>n,p:()=>f,r:()=>E,s:()=>u});var l=c(5861),p=c(690),e=c(3140);const r="ion-content",a=".ion-content-scroll-host",t=`${r}, ${a}`,n=_=>"ION-CONTENT"===_.tagName,i=function(){var _=(0,l.Z)(function*(g){return n(g)?(yield new Promise(o=>(0,p.c)(g,o)),g.getScrollElement()):g});return function(o){return _.apply(this,arguments)}}(),m=_=>_.querySelector(a)||_.querySelector(t),d=_=>_.closest(t),u=(_,g)=>n(_)?_.scrollToTop(g):Promise.resolve(_.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),v=(_,g,o,y)=>n(_)?_.scrollByPoint(g,o,y):Promise.resolve(_.scrollBy({top:o,left:g,behavior:y>0?"smooth":"auto"})),f=_=>(0,e.a)(_,r),w=_=>{if(n(_)){const o=_.scrollY;return _.scrollY=!1,o}return _.style.setProperty("overflow","hidden"),!0},E=(_,g)=>{n(_)?_.scrollY=g:_.style.removeProperty("overflow")}},5034:(C,h,c)=>{c.r(h),c.d(h,{KEYBOARD_DID_CLOSE:()=>p,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>g,keyboardDidClose:()=>f,keyboardDidOpen:()=>u,keyboardDidResize:()=>v,resetKeyboardAssist:()=>t,setKeyboardClose:()=>d,setKeyboardOpen:()=>m,startKeyboardAssist:()=>n,trackViewportChanges:()=>_});const l="ionKeyboardDidShow",p="ionKeyboardDidHide";let s={},r={},a=!1;const t=()=>{s={},r={},a=!1},n=o=>{i(o),o.visualViewport&&(r=g(o.visualViewport),o.visualViewport.onresize=()=>{_(o),u()||v(o)?m(o):f(o)&&d(o)})},i=o=>{o.addEventListener("keyboardDidShow",y=>m(o,y)),o.addEventListener("keyboardDidHide",()=>d(o))},m=(o,y)=>{w(o,y),a=!0},d=o=>{E(o),a=!1},u=()=>!a&&s.width===r.width&&(s.height-r.height)*r.scale>150,v=o=>a&&!f(o),f=o=>a&&r.height===o.innerHeight,w=(o,y)=>{const P=new CustomEvent(l,{detail:{keyboardHeight:y?y.keyboardHeight:o.innerHeight-r.height}});o.dispatchEvent(P)},E=o=>{const y=new CustomEvent(p);o.dispatchEvent(y)},_=o=>{s=Object.assign({},r),r=g(o.visualViewport)},g=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},7585:(C,h,c)=>{c.d(h,{c:()=>p});var l=c(2470);const p=e=>{let s,r,a;const t=()=>{s=()=>{a=!0,e&&e(!0)},r=()=>{a=!1,e&&e(!1)},null==l.w||l.w.addEventListener("keyboardWillShow",s),null==l.w||l.w.addEventListener("keyboardWillHide",r)};return t(),{init:t,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",s),null==l.w||l.w.removeEventListener("keyboardWillHide",r),s=r=void 0},isKeyboardVisible:()=>a}}},6490:(C,h,c)=>{c.d(h,{S:()=>p});const p={bubbles:{dur:1e3,circles:9,fn:(e,s,r)=>{const a=e*s/r-e+"ms",t=2*Math.PI*s/r;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(e,s,r)=>{const a=s/r,t=e*a-e+"ms",n=2*Math.PI*a;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,s)=>({r:6,style:{left:9-9*s+"px","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(e,s,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*s+(s<r/2?180:-180)}deg)`,"animation-delay":e*s/r-e+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(e,s,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*s+(s<r/2?180:-180)}deg)`,"animation-delay":e*s/r-e+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(e,s,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":e*s/r-e+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(e,s,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":e*s/r-e+"ms"}})}}},1460:(C,h,c)=>{c.r(h),c.d(h,{createSwipeBackGesture:()=>r});var l=c(690),p=c(1776),e=c(8077);c(4587);const r=(a,t,n,i,m)=>{const d=a.ownerDocument.defaultView;let u=(0,p.i)(a);const f=o=>u?-o.deltaX:o.deltaX;return(0,e.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(u=(0,p.i)(a),(o=>{const{startX:O}=o;return u?O>=d.innerWidth-50:O<=50})(o)&&t()),onStart:n,onMove:o=>{const O=f(o)/d.innerWidth;i(O)},onEnd:o=>{const y=f(o),O=d.innerWidth,P=y/O,M=(o=>u?-o.velocityX:o.velocityX)(o),D=M>=0&&(M>.2||y>O/2),T=(D?1-P:P)*O;let L=0;if(T>5){const A=T/Math.abs(M);L=Math.min(A,540)}m(D,P<=0?.01:(0,l.l)(0,P,.9999),L)}})}},5844:(C,h,c)=>{c.d(h,{Sz:()=>r,d9:()=>e,rP:()=>s});var l=c(5861),p=c(4459);const e=function(){var a=(0,l.Z)(function*(t){var n,i,m,d,u,v;t.params=t.params||{},(0,p.T1)({path:"api/Payment2/Pay",params:{userid:null!==(n=t.params.userid)&&void 0!==n?n:null,pay_orderid:null!==(i=t.params.pay_orderid)&&void 0!==i?i:null,discount_code:null!==(m=t.params.discount_code)&&void 0!==m?m:null,recharge_method:null!==(d=t.params.recharge_method)&&void 0!==d?d:null,v_doctypes:null!==(u=t.params.v_doctypes)&&void 0!==u?u:null,docid:null!==(v=t.params.docid)&&void 0!==v?v:null},success:f=>{"function"==typeof t.callback&&t.callback(f.data||null)},error:f=>{"function"==typeof t.callback&&t.callback(null),console.error(f)},loading:t.loading})});return function(n){return a.apply(this,arguments)}}(),s=function(){var a=(0,l.Z)(function*(t){var n,i,m,d,u;t.params=t.params||{},t.params.page=t.params.page||1,t.params.limit=t.params.limit||1,(0,p.cd)({path:"api/payment/search_pay_order_detail",params:{getby:null!==(n=t.params.userid)&&void 0!==n?n:null,order_code:null!==(i=t.params.order_code)&&void 0!==i?i:null,pay_orderid:null!==(m=t.params.pay_orderid)&&void 0!==m?m:null,posstart:(t.params.page-1)*t.params.limit,numofrow:t.params.limit,sortfield:null!==(d=t.params.sortfield)&&void 0!==d?d:null,sorttype:null!==(u=t.params.sorttype)&&void 0!==u?u:null},success:v=>{"function"==typeof t.callback&&t.callback(v.data||null)},error:v=>{"function"==typeof t.callback&&t.callback(null),console.error(v)},loading:t.loading})});return function(n){return a.apply(this,arguments)}}(),r=function(){var a=(0,l.Z)(function*(t){var n,i,m,d,u,v,f,w,E,_,g,o,y,O;t.params=t.params||{},t.params.page=t.params.page||1,t.params.limit=t.params.limit||1,(0,p.cd)({path:"api/payment/search_pay_order_info",params:{getby:null!==(n=t.params.userid)&&void 0!==n?n:null,userid:null!==(i=t.params.userid)&&void 0!==i?i:null,pay_orderid:null!==(m=t.params.pay_orderid)&&void 0!==m?m:null,orderid:null!==(d=t.params.orderid)&&void 0!==d?d:null,order_code:null!==(u=t.params.order_code)&&void 0!==u?u:null,amount_from:null!==(v=t.params.amount_from)&&void 0!==v?v:null,amount_to:null!==(f=t.params.amount_to)&&void 0!==f?f:null,order_date_from:null!==(w=t.params.order_date_from)&&void 0!==w?w:null,order_date_to:null!==(E=t.params.order_date_to)&&void 0!==E?E:null,v_feesstatus:null!==(_=t.params.v_feesstatus)&&void 0!==_?_:null,cardtype:null!==(g=t.params.cardtype)&&void 0!==g?g:null,pay_full_name:null!==(o=t.params.pay_full_name)&&void 0!==o?o:null,posstart:(t.params.page-1)*t.params.limit,numofrow:t.params.limit,sortfield:null!==(y=t.params.sortfield)&&void 0!==y?y:null,sorttype:null!==(O=t.params.sorttype)&&void 0!==O?O:null},success:P=>{"function"==typeof t.callback&&t.callback(P.data||null)},error:P=>{"function"==typeof t.callback&&t.callback(null),console.error(P)},loading:t.loading})});return function(n){return a.apply(this,arguments)}}()},2654:(C,h,c)=>{c.d(h,{A:()=>p});var l=c(4459);const p=e=>{var s,r,a,t;e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||-1,(0,l.cd)({url:"api/ProductPackageContent/SearchJoinLookup",params:{getby:null!==(s=e.params.userid)&&void 0!==s?s:null,userid:null!==(r=e.params.userid)&&void 0!==r?r:null,productpackage_id:null!==(a=e.params.productpackage_id)&&void 0!==a?a:null,productpackage_key:null!==(t=e.params.productpackage_key)&&void 0!==t?t:null,sortfield:"ordinal",sorttype:"asc",posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit},success:n=>{var i;"function"==typeof e.callback&&e.callback(null!==(i=n.data)&&void 0!==i?i:null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(n)},loading:e.loading})}},2820:(C,h,c)=>{c.d(h,{c:()=>a});var l=c(2695),p=c(553),e=c(5879),s=c(3536),r=c(3999);let a=(()=>{var t;class n{constructor(){this.APP_ROUTE=l.z,this.envVersion=p.N.version}ngOnInit(){}}return(t=n).\u0275fac=function(m){return new(m||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],decls:84,vars:46,consts:[[1,"footer"],[1,"container","pt-5"],[1,"row"],[1,"col-12","col-md-6","col-lg-3","mb-5"],[1,"title","mb-3"],[1,"content"],["name","arrow-forward-outline"],[3,"href"],[1,"title","mb-3","mt-5"],[1,"connect"],["href","https://www.facebook.com/LacvietCorporation","target","_blank"],["src","../../../assets/image/landing-page/icon-facebook.svg"],[1,"col-12","col-md-6","col-lg-4","mb-5"],[1,"col-12","col-md-12","col-lg-5","mb-5"],[1,"title","mb-3",3,"innerHTML"],["href","https://maps.app.goo.gl/Hd7d53DR9GicP4JE6","target","_blank",3,"innerHTML"],[1,"contact"],["href","mailto:lacviet@lacviet.com.vn"],["href","tel:+842838423333"],[1,"copyright"],["href","https://lacviet.vn","target","_blank",3,"innerHTML"],[1,"d-flex","align-items-center","justify-content-start","p-1","line-height-0"],["src","../../../assets/favicon/favicon-16x16.png","alt","Tabca-16x16"],[1,"text-muted","ml-1"]],template:function(m,d){1&m&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",5)(8,"div"),e._UZ(9,"ion-icon",6),e.TgZ(10,"a",7),e._uU(11),e.ALo(12,"translate"),e.qZA()(),e.TgZ(13,"div"),e._UZ(14,"ion-icon",6),e.TgZ(15,"a",7),e._uU(16),e.ALo(17,"translate"),e.qZA()()(),e.TgZ(18,"div",8),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"div",5)(22,"div"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"div",9)(26,"a",10),e._UZ(27,"ion-icon",11),e.qZA()()()(),e.TgZ(28,"div",12)(29,"div",4),e._uU(30),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"div",5)(33,"div"),e._UZ(34,"ion-icon",6),e.TgZ(35,"a",7),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"div"),e._UZ(39,"ion-icon",6),e.TgZ(40,"a",7),e._uU(41),e.ALo(42,"translate"),e.qZA()(),e.TgZ(43,"div"),e._UZ(44,"ion-icon",6),e.TgZ(45,"a",7),e._uU(46),e.ALo(47,"translate"),e.qZA()(),e.TgZ(48,"div"),e._UZ(49,"ion-icon",6),e.TgZ(50,"a",7),e._uU(51),e.ALo(52,"translate"),e.qZA()()()(),e.TgZ(53,"div",13)(54,"div",14),e.ALo(55,"translate"),e._uU(56,"C\xf4ng ty c\u1ed5 ph\u1ea7n tin h\u1ecdc L\u1ea1c Vi\u1ec7t"),e.qZA(),e.TgZ(57,"div",5)(58,"a",15),e.ALo(59,"translate"),e.TgZ(60,"span"),e._uU(61,"23 Nguy\u1ec5n Th\u1ecb Hu\u1ef3nh,"),e.qZA(),e.TgZ(62,"span"),e._uU(63,"ph\u01b0\u1eddng 8,"),e.qZA(),e.TgZ(64,"span"),e._uU(65,"qu\u1eadn Ph\xfa Nhu\u1eadn,"),e.qZA(),e.TgZ(66,"span"),e._uU(67,"th\xe0nh ph\u1ed1 H\u1ed3 Ch\xed Minh"),e.qZA()()(),e.TgZ(68,"div",16)(69,"div")(70,"a",17),e._uU(71,"lacviet@lacviet.com.vn"),e.qZA()(),e.TgZ(72,"div")(73,"a",18),e._uU(74,"(+84.28) 3842 3333"),e.qZA()()()()(),e.TgZ(75,"div",19),e._uU(76,"\xa9 Copyright 2024 by "),e.TgZ(77,"a",20),e.ALo(78,"translate"),e._uU(79,"L\u1ea1c Vi\u1ec7t"),e.qZA()()(),e.TgZ(80,"div",21),e._UZ(81,"img",22),e.TgZ(82,"small",23),e._uU(83),e.qZA()()()),2&m&&(e.xp6(5),e.Oqu(e.lcZ(6,20,"ForUser")),e.xp6(5),e.Q6J("href",d.APP_ROUTE.HELP,e.LSH),e.xp6(1),e.Oqu(e.lcZ(12,22,"UseGuide")),e.xp6(4),e.Q6J("href",d.APP_ROUTE.HOME_DOWNLOAD_APP,e.LSH),e.xp6(1),e.Oqu(e.lcZ(17,24,"DownloadAppTabca")),e.xp6(3),e.Oqu(e.lcZ(20,26,"CustomerCare")),e.xp6(4),e.Oqu(e.lcZ(24,28,"ConnectWithUs")),e.xp6(7),e.Oqu(e.lcZ(31,30,"ForTabca")),e.xp6(5),e.Q6J("href",d.APP_ROUTE.ABOUT_US,e.LSH),e.xp6(1),e.Oqu(e.lcZ(37,32,"AboutUs")),e.xp6(4),e.Q6J("href",d.APP_ROUTE.POLICIES_AND_REGULATIONS,e.LSH),e.xp6(1),e.Oqu(e.lcZ(42,34,"PoliciesAndRegulations")),e.xp6(4),e.Q6J("href",d.APP_ROUTE.SALES_AND_PAYMENT_POLICIES,e.LSH),e.xp6(1),e.Oqu(e.lcZ(47,36,"SalesAndPaymentPolicies")),e.xp6(4),e.Q6J("href",d.APP_ROUTE.TERMS_OF_USE,e.LSH),e.xp6(1),e.Oqu(e.lcZ(52,38,"TermsOfUse")),e.xp6(3),e.Q6J("innerHTML",e.lcZ(55,40,"LacVietCompany"),e.oJD),e.xp6(4),e.Q6J("innerHTML",e.lcZ(59,42,"LacVietAddress"),e.oJD),e.xp6(19),e.Q6J("innerHTML",e.lcZ(78,44,"LacVietCompany"),e.oJD),e.xp6(6),e.hij("v",d.envVersion,""))},dependencies:[s.gu,r.X$],styles:[".footer[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);background:#FFF}.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:28px;letter-spacing:1.8px}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:1rem}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-right:.5rem}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{vertical-align:middle;color:inherit}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.75rem;vertical-align:middle;font-size:18px}.footer[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:40px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{font-size:25px;font-weight:400;line-height:22px;letter-spacing:3px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:20px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#333;text-align:center;font-size:18px;font-weight:400;line-height:26px}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration-line:underline}"]}),n})()}}]);