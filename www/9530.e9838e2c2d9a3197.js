"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9530],{6081:(L,M,t)=>{t.d(M,{GR:()=>n,dq:()=>x,hL:()=>v,qU:()=>b});var _=t(5972);function x(e){var i;e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,_.hm)({url:"api/Board/Search",params:{getby:e.params.userid||null,gettype:e.params.gettype||null,getfrom:e.params.getfrom||null,board_id:e.params.board_id||null,board_ids:e.params.board_ids||null,board_title:e.params.board_title||null,size_width:e.params.size_width||null,size_height:e.params.size_height||null,topic_id:e.params.topic_id||null,category_id:e.params.category_id||null,template_id:e.params.template_id||null,tags:null!==(i=e.params.tags)&&void 0!==i?i:null,createdby:e.params.createdby||null,sortfield:e.params.sortfield||null,sorttype:e.params.sorttype||null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit},success:m=>{"function"==typeof e.callback&&e.callback(m.data||null)},error:m=>{"function"==typeof e.callback&&e.callback(),console.error(m)},loading:e.loading,loadingController:e.loadingController})}function v(e){e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,_.hm)({url:"api/Board/SearchTemplate",params:{getby:e.params.userid||null,board_id:e.params.board_id||null,board_title:e.params.board_title||null,size_width:e.params.size_width||null,size_height:e.params.size_height||null,topic_id:e.params.topic_id||null,category_id:e.params.category_id||null,template_id:e.params.template_id||null,createdby:e.params.createdby||null,sortfield:e.params.sortfield||null,sorttype:e.params.sorttype||null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit},success:i=>{"function"==typeof e.callback&&e.callback(i.data||null)},error:i=>{"function"==typeof e.callback&&e.callback(),console.error(i)},loading:e.loading,loadingController:e.loadingController})}function b(e){e.params=e.params||{},(0,_.hm)({url:"api/Board/Detail",params:{getby:e.params.userid||null,board_id:e.params.board_id||null,isfrom:e.params.isfrom||null},success:i=>{"function"==typeof e.callback&&e.callback(i.data||null)},error:i=>{"function"==typeof e.callback&&e.callback(),console.error(i)},loading:e.loading,loadingController:e.loadingController})}function n(e){e.params=e.params||{},(0,_.Ll)({url:"api/Board/UpdateFromBoardIds",params:{board_id:e.params.board_id||null,from_board_ids:e.params.from_board_ids||null,createdby:e.params.userid||null,modifiedby:e.params.userid||null},success:i=>{"function"==typeof e.callback&&e.callback(i.data||null)},error:i=>{"function"==typeof e.callback&&e.callback(),console.error(i)},loading:e.loading,loadingController:e.loadingController})}},2635:(L,M,t)=>{t.d(M,{N$:()=>m,Nk:()=>n,kD:()=>i,xy:()=>e});var _=t(467),x=t(369),v=t(5972);const b=new x.w({name:"_userDB",driverOrder:[x.C.IndexedDB,x.C.LocalStorage]}),n=function(){var u=(0,_.A)(function*(r){yield b.create();try{var c=(yield b.get("user-local"))||{};return"function"==typeof(null==r?void 0:r.callback)&&r.callback(Object.assign({},c||{})),c}catch(a){"function"==typeof(null==r?void 0:r.callback)&&r.callback(),console.error(a)}return{}});return function(c){return u.apply(this,arguments)}}(),e=function(){var u=(0,_.A)(function*(r){yield b.create(),r.params=r.params||{};try{var c=Object.assign({},r.params);yield b.set("user-local",c),"function"==typeof r.callback&&r.callback(Object.assign({},c||{}))}catch(a){"function"==typeof r.callback&&r.callback(),console.error(a)}});return function(c){return u.apply(this,arguments)}}(),i=function(){var u=(0,_.A)(function*(r){return r&&(r.params={}),e(null!=r?r:{})});return function(c){return u.apply(this,arguments)}}(),m=function(){var u=(0,_.A)(function*(r,c){let a=yield(0,v.AC)();if(c){let o=[];r.params.profilephoto&&o.push(new Promise((h,C)=>{let l=new Image;l.onload=()=>{r.params.url_profilephoto=l.src,h(1)},l.onerror=()=>{r.params.url_profilephoto="assets/image/user-avatar-default.png",h(0)},l.src=a.readfileuploadurl+r.params.profilephoto})),r.params.banner&&o.push(new Promise((h,C)=>{let l=new Image;l.onload=()=>{r.params.url_banner=l.src,h(1)},l.onerror=()=>{r.params.url_banner="assets/image/user-banner-default.png",h(0)},l.src=a.readfileuploadurl+r.params.banner})),o.length>0?Promise.all(o).then(()=>{e(r)}):e(r)}else n({callback:o=>{if(o){let h=[];r.params.profilephoto&&h.push(new Promise((C,l)=>{let d=new Image;d.onload=()=>{r.params.url_profilephoto=d.src,C(1)},d.onerror=()=>{r.params.url_profilephoto="assets/image/user-avatar-default.png",C(0)},d.src=a.readfileuploadurl+r.params.profilephoto})),r.params.banner&&h.push(new Promise((C,l)=>{let d=new Image;d.onload=()=>{r.params.url_banner=d.src,C(1)},d.onerror=()=>{r.params.url_banner="assets/image/user-banner-default.png",C(0)},d.src=a.readfileuploadurl+r.params.banner})),h.length>0?Promise.all(h).then(()=>{e({params:Object.assign({},o,r.params),callback:r.callback})}):e({params:Object.assign({},o,r.params),callback:r.callback})}else"function"==typeof r.callback&&r.callback()}})});return function(c,a){return u.apply(this,arguments)}}()},9530:(L,M,t)=>{t.r(M),t.d(M,{EmbedPageModule:()=>T});var _=t(177),x=t(9417),v=t(6637),b=t(3658),n=t(467),e=t(5862),i=t(5972),m=t(6081),f=t(4975),y=t(2635),u=t(8963),r=t(1171),c=t(5414),a=t(4438),o=t(345);function h(s,O){if(1&s){const p=a.RV6();a.qex(0),a.j41(1,"div",15)(2,"ion-button",16),a.bIt("click",function(){a.eBV(p);const P=a.XpG();return a.Njj(P.pageBack())}),a.nrm(3,"ion-img",17),a.k0s(),a.j41(4,"span"),a.EFF(5),a.k0s(),a.j41(6,"ion-button",16),a.bIt("click",function(){a.eBV(p);const P=a.XpG();return a.Njj(P.pageNext())}),a.nrm(7,"ion-img",18),a.k0s()(),a.bVm()}if(2&s){const p=a.XpG();a.R7$(2),a.Y8G("disabled",p.slideIdx<1),a.R7$(3),a.Lme("",p.slideIdx+1,"/",p.slideTotal,""),a.R7$(),a.Y8G("disabled",p.slideIdx>=p.slideTotal-1)}}const l=[{path:"",component:(()=>{var s;class O{constructor(g,P,I,j,k){this.router=g,this.activatedRoute=P,this.titleService=I,this.loadingController=j,this.toastController=k,this.b=0,this.slides=[],this.slideIdx=0,this.slideTotal=0,this.settings={},this.pageBack=()=>{this.slideIdx>0&&(this.slideIdx--,this.renderSlide())},this.pageNext=()=>{this.slideIdx<this.slideTotal-1&&(this.slideIdx++,this.renderSlide())},this.slideIdx=parseInt(P.snapshot.queryParamMap.get("n")||"1")-1,this.pathfile=this.activatedRoute.snapshot.queryParamMap.get("pathfile")||void 0;let w=this.activatedRoute.snapshot.queryParamMap.get("b")||"";w?this.b=parseInt(w):window.location.replace("/")}ngOnInit(){var g=this;e.LVk.container="#mainContainer",e.LVk.svg="#mainSvg",(0,n.A)(function*(){e.LVk.config=yield(0,i.AC)(),g.user=yield(0,y.Nk)(),g.refreshData()})(),(0,u.jI)()}refreshData(){var g,P;(0,m.qU)({loadingController:this.loadingController,params:{userid:null===(g=this.user)||void 0===g?void 0:g.userid,board_id:this.b},callback:I=>{var j;null!=I&&I.board_id?(this.titleService.setTitle(`${I.board_title}`),(0,f.U5)({loadingController:this.loadingController,params:{userid:null===(j=this.user)||void 0===j?void 0:j.userid,board_id:this.b,pathfile:this.pathfile},callback:k=>{var w;let E;if(k&&!k.modules?E=(0,e.vmR)(k):"icdtV2"==(null==k?void 0:k.modules)&&(E=k),E)return e.JRt.data=E,e.JRt.changeSlide=(U,R,S,D,B)=>{this.slideIdx=S,this.slideTotal=D,this.slide=B,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{n:this.slideIdx+1},queryParamsHandling:"merge",replaceUrl:!0})},this.slideTotal=e.JRt.slideTotal,this.renderSlide(),void(0,r.U2)(E.fonts||[]);(0,f.rH)({loadingController:this.loadingController,params:{userid:null===(w=this.user)||void 0===w?void 0:w.userid,board_id:this.b},callback:U=>{if(U){let R=(0,e.vmR)(U);e.JRt.data=R,e.JRt.changeSlide=(S,D,B,A,G)=>{this.slideIdx=B,this.slideTotal=A,this.slide=G,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{n:this.slideIdx+1},queryParamsHandling:"merge",replaceUrl:!0})},this.slideTotal=e.JRt.slideTotal,this.renderSlide(),(0,r.U2)(R.fonts||[])}}})}})):(0,c.c)(this.toastController,{color:"danger",message:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u!"}).then(k=>k.present())}}),(0,f.BS)({params:{board_id:this.b,userid:null===(P=this.user)||void 0===P?void 0:P.userid},callback:I=>{this.settings=I||{buttons:{paging:!0}}}}),window.addEventListener("resize",()=>{console.log("preview window resize"),this.slide&&(0,e.I1Q)(e.LVk.container,e.LVk.svg,this.slide)})}renderSlide(){e.JRt.runSlide(this.slideIdx)}}return(s=O).\u0275fac=function(g){return new(g||s)(a.rXU(b.Ix),a.rXU(b.nX),a.rXU(o.hE),a.rXU(v.Xi),a.rXU(v.K_))},s.\u0275cmp=a.VBU({type:s,selectors:[["app-embed"]],decls:16,vars:2,consts:[["scroll-x","false","scroll-y","false",3,"fullscreen"],[1,"container-grid","grid-column"],[1,"container-head","container-top"],[1,"container-body","grid-grow"],[1,"container-grid","grid-row"],[1,"container-left"],[1,"container-center"],[1,"grid-grow"],[1,"main-container","overflow-auto"],["scroll-x","false","scroll-y","false"],["id","mainContainer",1,"svg-box"],["id","mainSvg","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"viewer"],[1,"container-bottom"],[4,"ngIf"],[1,"container-right"],[1,"group-action-paging"],["fill","clear",1,"ion-no-margin","ion-no-padding",3,"click","disabled"],["src","../../../assets/icon-png/Back.png"],["src","../../../assets/icon-png/Next.png"]],template:function(g,P){1&g&&(a.j41(0,"ion-content",0)(1,"div",1),a.nrm(2,"div",2),a.j41(3,"div",3)(4,"div",4),a.nrm(5,"div",5),a.j41(6,"div",6)(7,"div",1)(8,"div",7)(9,"div",8)(10,"ion-content",9)(11,"div",10),a.qSk(),a.nrm(12,"svg",11),a.k0s()()()(),a.joV(),a.j41(13,"div",12),a.DNE(14,h,8,4,"ng-container",13),a.k0s()()(),a.nrm(15,"div",14),a.k0s()()()()),2&g&&(a.Y8G("fullscreen",!0),a.R7$(14),a.Y8G("ngIf",null==P.settings.buttons?null:P.settings.buttons.paging))},dependencies:[_.bT,v.Jm,v.W9,v.KW],styles:[".container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-head[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 2px #0000001a}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:-2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto;width:calc(100% - 480px)}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .container-bottom[_ngcontent-%COMP%]{position:relative;z-index:2}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1;-webkit-user-select:none;user-select:none;background-color:#fafafa}.group-action-paging[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;right:1rem;line-height:0;-webkit-user-select:none;user-select:none}.group-action-paging[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:0 1rem;vertical-align:middle;font-size:18px;color:#fab11d}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{vertical-align:middle}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:34px;width:34px}.svg-box[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));display:flex;align-items:center;justify-content:center}.svg-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:100%;margin:auto;background:#fff}"]}),O})()}];let d=(()=>{var s;class O{}return(s=O).\u0275fac=function(g){return new(g||s)},s.\u0275mod=a.$C({type:s}),s.\u0275inj=a.G2t({imports:[b.iI.forChild(l),b.iI]}),O})(),T=(()=>{var s;class O{}return(s=O).\u0275fac=function(g){return new(g||s)},s.\u0275mod=a.$C({type:s}),s.\u0275inj=a.G2t({imports:[_.MD,x.YN,v.bv,d]}),O})()},8963:(L,M,t)=>{t.d(M,{L8:()=>b,jI:()=>v,rx:()=>n});var _=t(467),x=t(4393);const v=()=>{e([["assets/iframe/lib/kendoui.2022.1.301/js/kendo.all.min.js"],["assets/iframe/lib/kendoui.2022.1.301/js/jszip.min.js","assets/iframe/lib/kendoui.2022.1.301/js/cultures/kendo.culture.vi-VN.min.js","assets/iframe/lib/kendoui.2022.1.301/js/messages/kendo.messages.vi-VN.min.js"]])},b=()=>{i([["assets/iframe/lib/font-awesome-4.7.0/css/font-awesome.min.css"]])},n=function(){var m=(0,_.A)(function*(f,y){if(null==y||!y.length)return;let u="intro_"+f;if((yield(0,x.pJ)())[u])return;let c={};c[u]=!0;let o=[];y.forEach(l=>{let d={title:l.title,intro:""};if(l.etag){let T=document.querySelector(l.etag);T&&(d.element=T)}l.content&&l.image?d.intro=`<p>${l.content}</p><img src="${l.image}" />`:l.content?d.intro=`<div>${l.content}<div/>`:l.image&&(d.intro=`<img src="${l.image}" />`),o.push(d)});let h=2;e([["assets/lib/intro/intro.min.js"]],()=>{h-=1,h<=0&&C()}),i([["assets/lib/intro/intro.css"]],()=>{h-=1,h<=0&&C()});let C=()=>{let l=window.introJs;if(!l)return;const d=l();d.setOptions({steps:o,exitOnOverlayClick:!1,prevLabel:"\u2190",nextLabel:"\u2192",skipLabel:"\xd7",doneLabel:"\u2192"}),d.oncomplete(()=>{setTimeout(()=>{d.start()},300)}),d.onexit(()=>{(0,x.LK)({params:c})}),d.start()}});return function(y,u){return m.apply(this,arguments)}}(),e=(m,f)=>{let y=u=>{u?Promise.all(u.map(r=>new Promise((c,a)=>{let o=document.createElement("script");o.type="text/javascript",o.src=r,o.onload=()=>{c(o)},o.onerror=()=>{a(o)},window.document.body.append(o)}))).then(()=>{y(m.shift())}):f&&f()};y(m.shift())},i=(m,f)=>{let y=u=>{u?Promise.all(u.map(r=>new Promise((c,a)=>{let o=document.createElement("link");o.rel="stylesheet",o.href=r,o.onload=()=>{c(r)},o.onerror=()=>{a(r)},window.document.head.append(o)}))).then(()=>{y(m.shift())}):f&&f()};y(m.shift())}},5414:(L,M,t)=>{t.d(M,{c:()=>x});var _=t(467);const x=function(){var v=(0,_.A)(function*(b,n,e){var i,m,f;e&&(n.message||(n.message=null!==(f=null==e?void 0:e.returnmsg)&&void 0!==f?f:0==(null==e?void 0:e.returncode)?"Th\xe0nh c\xf4ng!":null!=e&&e.returncode?`L\u1ed7i: #${null==e?void 0:e.returncode}`:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!"),n.icon||(n.icon=0==(null==e?void 0:e.returncode)?"checkmark-circle-sharp":null!=e&&e.returncode?"alert-circle-outline":"close-circle-sharp"),n.color||(n.color=0==(null==e?void 0:e.returncode)?"success":null!=e&&e.returncode?"warning":"danger"));return n.position||(n.position="bottom"),n.icon||(n.icon="bulb-outline"),n.color||(n.color="secondary"),n.duration=null!==(i=n.duration)&&void 0!==i?i:3e3,n.animated=null===(m=n.animated)||void 0===m||m,n.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield b.create(n)});return function(n,e,i){return v.apply(this,arguments)}}()}}]);