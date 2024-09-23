"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9530],{6081:(U,O,t)=>{t.d(O,{GR:()=>l,dq:()=>C,hL:()=>h,qU:()=>u});var s=t(5972);function C(a){var n;a.params=a.params||{},a.params.page=a.params.page||1,a.params.limit=a.params.limit||1,(0,s.hm)({url:"api/Board/Search",params:{getby:a.params.userid||null,gettype:a.params.gettype||null,board_id:a.params.board_id||null,board_ids:a.params.board_ids||null,board_title:a.params.board_title||null,size_width:a.params.size_width||null,size_height:a.params.size_height||null,topic_id:a.params.topic_id||null,category_id:a.params.category_id||null,template_id:a.params.template_id||null,tags:null!==(n=a.params.tags)&&void 0!==n?n:null,createdby:a.params.createdby||null,sortfield:a.params.sortfield||null,sorttype:a.params.sorttype||null,posstart:(a.params.page-1)*a.params.limit,numofrow:a.params.limit},success:b=>{"function"==typeof a.callback&&a.callback(b.data||null)},error:b=>{"function"==typeof a.callback&&a.callback(),console.error(b)},loading:a.loading,loadingController:a.loadingController})}function h(a){a.params=a.params||{},a.params.page=a.params.page||1,a.params.limit=a.params.limit||1,(0,s.hm)({url:"api/Board/SearchTemplate",params:{getby:a.params.userid||null,board_id:a.params.board_id||null,board_title:a.params.board_title||null,size_width:a.params.size_width||null,size_height:a.params.size_height||null,topic_id:a.params.topic_id||null,category_id:a.params.category_id||null,template_id:a.params.template_id||null,createdby:a.params.createdby||null,sortfield:a.params.sortfield||null,sorttype:a.params.sorttype||null,posstart:(a.params.page-1)*a.params.limit,numofrow:a.params.limit},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{"function"==typeof a.callback&&a.callback(),console.error(n)},loading:a.loading,loadingController:a.loadingController})}function u(a){a.params=a.params||{},(0,s.hm)({url:"api/Board/Detail",params:{getby:a.params.userid||null,board_id:a.params.board_id||null,isfrom:a.params.isfrom||null},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{"function"==typeof a.callback&&a.callback(),console.error(n)},loading:a.loading,loadingController:a.loadingController})}function l(a){a.params=a.params||{},(0,s.Ll)({url:"api/Board/UpdateFromBoardIds",params:{board_id:a.params.board_id||null,from_board_ids:a.params.from_board_ids||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{"function"==typeof a.callback&&a.callback(),console.error(n)},loading:a.loading,loadingController:a.loadingController})}},2635:(U,O,t)=>{t.d(O,{N$:()=>b,Nk:()=>l,kD:()=>n,xy:()=>a});var s=t(467),C=t(369),h=t(5972);const u=new C.w({name:"_userDB",driverOrder:[C.C.IndexedDB,C.C.LocalStorage]}),l=function(){var p=(0,s.A)(function*(r){yield u.create();try{var o=(yield u.get("user-local"))||{};return"function"==typeof(null==r?void 0:r.callback)&&r.callback(Object.assign({},o||{})),o}catch(g){"function"==typeof(null==r?void 0:r.callback)&&r.callback(),console.error(g)}return{}});return function(o){return p.apply(this,arguments)}}(),a=function(){var p=(0,s.A)(function*(r){yield u.create(),r.params=r.params||{};try{var o=Object.assign({},r.params);yield u.set("user-local",o),"function"==typeof r.callback&&r.callback(Object.assign({},o||{}))}catch(g){"function"==typeof r.callback&&r.callback(),console.error(g)}});return function(o){return p.apply(this,arguments)}}(),n=function(){var p=(0,s.A)(function*(r){return r&&(r.params={}),a(null!=r?r:{})});return function(o){return p.apply(this,arguments)}}(),b=function(){var p=(0,s.A)(function*(r,o){let g=yield(0,h.AC)();if(o){let v=[];r.params.profilephoto&&v.push(new Promise((e,P)=>{let m=new Image;m.onload=()=>{r.params.url_profilephoto=m.src,e(1)},m.onerror=()=>{r.params.url_profilephoto="assets/image/user-avatar-default.png",e(0)},m.src=g.readfileuploadurl+r.params.profilephoto})),r.params.banner&&v.push(new Promise((e,P)=>{let m=new Image;m.onload=()=>{r.params.url_banner=m.src,e(1)},m.onerror=()=>{r.params.url_banner="assets/image/user-banner-default.png",e(0)},m.src=g.readfileuploadurl+r.params.banner})),v.length>0?Promise.all(v).then(()=>{a(r)}):a(r)}else l({callback:v=>{if(v){let e=[];r.params.profilephoto&&e.push(new Promise((P,m)=>{let y=new Image;y.onload=()=>{r.params.url_profilephoto=y.src,P(1)},y.onerror=()=>{r.params.url_profilephoto="assets/image/user-avatar-default.png",P(0)},y.src=g.readfileuploadurl+r.params.profilephoto})),r.params.banner&&e.push(new Promise((P,m)=>{let y=new Image;y.onload=()=>{r.params.url_banner=y.src,P(1)},y.onerror=()=>{r.params.url_banner="assets/image/user-banner-default.png",P(0)},y.src=g.readfileuploadurl+r.params.banner})),e.length>0?Promise.all(e).then(()=>{a({params:Object.assign({},v,r.params),callback:r.callback})}):a({params:Object.assign({},v,r.params),callback:r.callback})}else"function"==typeof r.callback&&r.callback()}})});return function(o,g){return p.apply(this,arguments)}}()},9530:(U,O,t)=>{t.r(O),t.d(O,{EmbedPageModule:()=>z});var s=t(177),C=t(9417),h=t(6637),u=t(3658),l=t(467),a=t(6611),n=t(5972),b=t(6081),I=t(4975),x=t(5619),p=t(2635),r=t(2837),o=t(8963),g=t(1171),v=t(5414),e=t(4438),P=t(345);function m(i,k){if(1&i){const d=e.RV6();e.qex(0),e.j41(1,"div",15)(2,"ion-button",16),e.bIt("click",function(){e.eBV(d);const f=e.XpG();return e.Njj(f.pageBack())}),e.nrm(3,"ion-img",17),e.k0s(),e.j41(4,"span"),e.EFF(5),e.k0s(),e.j41(6,"ion-button",16),e.bIt("click",function(){e.eBV(d);const f=e.XpG();return e.Njj(f.pageNext())}),e.nrm(7,"ion-img",18),e.k0s()(),e.bVm()}if(2&i){const d=e.XpG();e.R7$(2),e.Y8G("disabled",d.slideIdx<1),e.R7$(3),e.Lme("",d.slideIdx+1,"/",d.slideTotal,""),e.R7$(),e.Y8G("disabled",d.slideIdx>=d.slideTotal-1)}}const R=[{path:"",component:(()=>{var i;class k{constructor(c,f,M,T,_){this.router=c,this.activatedRoute=f,this.titleService=M,this.loadingController=T,this.toastController=_,this.b=0,this.slides=[],this.slideIdx=0,this.slideTotal=0,this.settings={},this.pageBack=()=>{this.slideIdx>0&&(this.slideIdx--,this.renderSlide())},this.pageNext=()=>{this.slideIdx<this.slideTotal-1&&(this.slideIdx++,this.renderSlide())},this.slideIdx=parseInt(f.snapshot.queryParamMap.get("n")||"1")-1,this.pathfile=this.activatedRoute.snapshot.queryParamMap.get("pathfile")||void 0;let w=this.activatedRoute.snapshot.queryParamMap.get("b")||"";w?this.b=parseInt(w):window.location.replace("/")}ngOnInit(){var c=this;a.L.container="#mainContainer",a.L.svg="#mainSvg",(0,l.A)(function*(){a.L.config=yield(0,n.AC)(),c.user=yield(0,p.Nk)(),c.refreshData()})(),(0,o.j)()}refreshData(){var c,f;(0,b.qU)({loadingController:this.loadingController,params:{userid:null===(c=this.user)||void 0===c?void 0:c.userid,board_id:this.b},callback:M=>{var T;null!=M&&M.board_id?(this.titleService.setTitle(`${M.board_title}`),(0,I.U5)({loadingController:this.loadingController,params:{userid:null===(T=this.user)||void 0===T?void 0:T.userid,board_id:this.b,pathfile:this.pathfile},callback:_=>{var w;let E;if(_&&!_.modules?E=(0,r.v)(_):"icdtV2"==(null==_?void 0:_.modules)&&(E=_),E)return x.J.data=E,x.J.changeSlide=(j,L,S,D,B)=>{this.slideIdx=S,this.slideTotal=D,this.slide=B,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{n:this.slideIdx+1},queryParamsHandling:"merge",replaceUrl:!0})},this.slideTotal=x.J.slideTotal,this.renderSlide(),void(0,g.U2)(E.fonts||[]);(0,I.rH)({loadingController:this.loadingController,params:{userid:null===(w=this.user)||void 0===w?void 0:w.userid,board_id:this.b},callback:j=>{if(j){let L=(0,r.v)(j);x.J.data=L,x.J.changeSlide=(S,D,B,A,$)=>{this.slideIdx=B,this.slideTotal=A,this.slide=$,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{n:this.slideIdx+1},queryParamsHandling:"merge",replaceUrl:!0})},this.slideTotal=x.J.slideTotal,this.renderSlide(),(0,g.U2)(L.fonts||[])}}})}})):(0,v.c)(this.toastController,{color:"danger",message:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u!"}).then(_=>_.present())}}),(0,I.BS)({params:{board_id:this.b,userid:null===(f=this.user)||void 0===f?void 0:f.userid},callback:M=>{this.settings=M||{buttons:{paging:!0}}}}),window.addEventListener("resize",()=>{console.log("preview window resize"),this.slide&&(0,x.I)(a.L.container,a.L.svg,this.slide)})}renderSlide(){x.J.runSlide(this.slideIdx)}}return(i=k).\u0275fac=function(c){return new(c||i)(e.rXU(u.Ix),e.rXU(u.nX),e.rXU(P.hE),e.rXU(h.Xi),e.rXU(h.K_))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-embed"]],decls:16,vars:2,consts:[["scroll-x","false","scroll-y","false",3,"fullscreen"],[1,"container-grid","grid-column"],[1,"container-head","container-top"],[1,"container-body","grid-grow"],[1,"container-grid","grid-row"],[1,"container-left"],[1,"container-center"],[1,"grid-grow"],[1,"main-container","overflow-auto"],["scroll-x","false","scroll-y","false"],["id","mainContainer",1,"svg-box"],["id","mainSvg","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"viewer"],[1,"container-bottom"],[4,"ngIf"],[1,"container-right"],[1,"group-action-paging"],["fill","clear",1,"ion-no-margin","ion-no-padding",3,"click","disabled"],["src","../../../assets/icon-png/Back.png"],["src","../../../assets/icon-png/Next.png"]],template:function(c,f){1&c&&(e.j41(0,"ion-content",0)(1,"div",1),e.nrm(2,"div",2),e.j41(3,"div",3)(4,"div",4),e.nrm(5,"div",5),e.j41(6,"div",6)(7,"div",1)(8,"div",7)(9,"div",8)(10,"ion-content",9)(11,"div",10),e.qSk(),e.nrm(12,"svg",11),e.k0s()()()(),e.joV(),e.j41(13,"div",12),e.DNE(14,m,8,4,"ng-container",13),e.k0s()()(),e.nrm(15,"div",14),e.k0s()()()()),2&c&&(e.Y8G("fullscreen",!0),e.R7$(14),e.Y8G("ngIf",null==f.settings.buttons?null:f.settings.buttons.paging))},dependencies:[s.bT,h.Jm,h.W9,h.KW],styles:[".container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-head[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 2px #0000001a}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:-2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto;width:calc(100% - 480px)}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .container-bottom[_ngcontent-%COMP%]{position:relative;z-index:2}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1;-webkit-user-select:none;user-select:none;background-color:#fafafa}.group-action-paging[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;right:1rem;line-height:0;-webkit-user-select:none;user-select:none}.group-action-paging[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:0 1rem;vertical-align:middle;font-size:18px;color:#fab11d}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{vertical-align:middle}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:34px;width:34px}.svg-box[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));display:flex;align-items:center;justify-content:center}.svg-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:100%;margin:auto;background:#fff}"]}),k})()}];let G=(()=>{var i;class k{}return(i=k).\u0275fac=function(c){return new(c||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[u.iI.forChild(R),u.iI]}),k})(),z=(()=>{var i;class k{}return(i=k).\u0275fac=function(c){return new(c||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[s.MD,C.YN,h.bv,G]}),k})()},5414:(U,O,t)=>{t.d(O,{c:()=>C});var s=t(467);const C=function(){var h=(0,s.A)(function*(u,l,a){var n,b,I;a&&(l.message||(l.message=null!==(I=null==a?void 0:a.returnmsg)&&void 0!==I?I:0==(null==a?void 0:a.returncode)?"Th\xe0nh c\xf4ng!":null!=a&&a.returncode?`L\u1ed7i: #${null==a?void 0:a.returncode}`:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!"),l.icon||(l.icon=0==(null==a?void 0:a.returncode)?"checkmark-circle-sharp":null!=a&&a.returncode?"alert-circle-outline":"close-circle-sharp"),l.color||(l.color=0==(null==a?void 0:a.returncode)?"success":null!=a&&a.returncode?"warning":"danger"));return l.position||(l.position="bottom"),l.icon||(l.icon="bulb-outline"),l.color||(l.color="secondary"),l.duration=null!==(n=l.duration)&&void 0!==n?n:3e3,l.animated=null===(b=l.animated)||void 0===b||b,l.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield u.create(l)});return function(l,a,n){return h.apply(this,arguments)}}()}}]);