"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4622],{4622:(Le,I,c)=>{c.r(I),c.d(I,{UserPageModule:()=>Be});var d=c(177),U=c(9417),p=c(6637),R=c(3658),h=c(467),P=c(5972),y=c(4393),x=c(7868),b=c(2635),j=c(6191),D=c(6571),M=c(6539),k=c(8833),e=c(4438),E=c(345),v=c(31),G=c(7704),Y=c(6171),S=c(1038),N=c(9946),V=c(6757),$=c(5414);let X=(()=>{var n;class r{constructor(t,a,i){this.modalController=t,this.toastController=a,this.loadingController=i,this.APP_ROUTE=k._}ngOnInit(){}changeAvatar(t){var a=this;return(0,h.A)(function*(){(0,V.$)({modalController:a.modalController,toastController:a.toastController},function(){var i=(0,h.A)(function*(l){if(l.length){let s=yield a.modalController.create({component:Y.A,componentProps:{file:l[0]},backdropDismiss:!0,keyboardClose:!0});s.onDidDismiss().then(g=>{"submit"==g.role&&g.data&&(0,S.v)({loadingController:a.loadingController,params:{file:g.data,subFolder:"avatar",fileType:"image"},callback:m=>{var f;0==(null==m?void 0:m.ReturnCode)?(0,N.LZ)({loadingController:a.loadingController,params:{userid:null===(f=a.user)||void 0===f?void 0:f.userid,avatar:`${m.path}/${m.file.name}`},callback:u=>{0==(null==u?void 0:u.returncode)?a.user&&(a.user.profilephoto=`${m.path}/${m.file.name}`,(0,b.N$)({params:a.user,callback:T=>{a.user=T}})):(0,$.c)(a.toastController,{},u).then(T=>T.present())}}):(0,$.c)(a.toastController,{},{returncode:null==m?void 0:m.ReturnCode,returnmsg:null==m?void 0:m.ReturnName}).then(u=>{u.present()})}})}),s.present()}});return function(l){return i.apply(this,arguments)}}())})()}}return(n=r).\u0275fac=function(t){return new(t||n)(e.rXU(p.W3),e.rXU(p.K_),e.rXU(p.Xi))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-user-info"]],inputs:{user:"user"},decls:9,vars:3,consts:[[1,"container","py-4"],[1,"cursor-pointer",3,"click"],["onerror","errorAvatar(this)",3,"src"],[1,"user-name","text-ellipsis","my-3"],[1,"text-center","mt-0","mb-1"],[1,"text-center","text-muted"]],template:function(t,a){if(1&t&&(e.j41(0,"div",0)(1,"ion-thumbnail",1),e.bIt("click",function(l){return a.changeAvatar(l)}),e.nrm(2,"img",2),e.k0s(),e.j41(3,"div",3)(4,"h5",4)(5,"b"),e.EFF(6),e.k0s()(),e.j41(7,"div",5),e.EFF(8),e.k0s()()()),2&t){let i;e.R7$(2),e.Y8G("src",null!==(i=null==a.user?null:a.user.url_profilephoto)&&void 0!==i?i:"../../../assets/image/user-avatar-default.png",e.B4B),e.R7$(4),e.JRh(null==a.user?null:a.user.fullname),e.R7$(2),e.JRh(null==a.user?null:a.user.emailaddr)}},dependencies:[p.Zx],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 140px;--border-radius: 50%;margin:auto}"]}),r})();var J=c(7586),C=c.n(J),A=c(2395);function w(n,r){1&n&&e.eu8(0)}function O(n,r){1&n&&e.eu8(0)}function H(n,r){1&n&&(e.j41(0,"div",6),e.nrm(1,"ion-spinner",7),e.k0s())}function B(n,r){1&n&&(e.j41(0,"small",9),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(),e.JRh(e.bMT(2,1,"DataNotFound")))}function L(n,r){if(1&n&&e.DNE(0,B,3,3,"small",8),2&n){const o=e.XpG();e.Y8G("ngIf",!1===o.response.loading)}}function W(n,r){if(1&n&&(e.j41(0,"p"),e.EFF(1),e.nI1(2,"translate"),e.j41(3,"b"),e.EFF(4),e.k0s()()),2&n){const o=e.XpG(2);e.R7$(),e.SpI("",e.bMT(2,2,"AppliedTo")," "),e.R7$(3),e.JRh(o.renderDate(null==o.productpackageapplied?null:o.productpackageapplied.expirateddate,"DD/MM/YYYY"))}}function K(n,r){if(1&n&&(e.qex(0),e.j41(1,"ion-badge",16),e.EFF(2),e.k0s(),e.bVm()),2&n){const o=e.XpG().$implicit;e.R7$(2),e.JRh(o.datavalue)}}function q(n,r){1&n&&(e.qex(0),e.nrm(1,"ion-icon",17),e.bVm())}function z(n,r){1&n&&(e.qex(0),e.nrm(1,"ion-icon",18),e.bVm())}function Z(n,r){if(1&n&&(e.qex(0)(1,14),e.DNE(2,q,2,0,"ng-container",15)(3,z,2,0,"ng-container",15),e.bVm()()),2&n){const o=e.XpG().$implicit;e.R7$(),e.Y8G("ngSwitch",o.datavalue),e.R7$(),e.Y8G("ngSwitchCase","1"),e.R7$(),e.Y8G("ngSwitchCase","0")}}function Q(n,r){if(1&n&&(e.qex(0),e.j41(1,"ion-badge",16),e.EFF(2),e.k0s(),e.bVm()),2&n){const o=e.XpG().$implicit,t=e.XpG(2);e.R7$(2),e.JRh(t.renderTemplate(o.datavalue,o.template))}}function ee(n,r){if(1&n&&(e.qex(0),e.j41(1,"ion-badge",16),e.EFF(2),e.k0s(),e.bVm()),2&n){const o=e.XpG().$implicit,t=e.XpG(2);e.R7$(2),e.JRh(t.renderDate(o.datavalue))}}function ne(n,r){if(1&n&&(e.qex(0),e.j41(1,"ion-item")(2,"ion-label"),e.EFF(3),e.k0s(),e.qex(4,14),e.DNE(5,K,3,1,"ng-container",15)(6,Z,4,3,"ng-container",15)(7,Q,3,1,"ng-container",15)(8,ee,3,1,"ng-container",15),e.bVm(),e.k0s(),e.bVm()),2&n){const o=r.$implicit;e.R7$(3),e.JRh(o.productpackagecontent_title),e.R7$(),e.Y8G("ngSwitch",o.v_datatype),e.R7$(),e.Y8G("ngSwitchCase",800),e.R7$(),e.Y8G("ngSwitchCase",801),e.R7$(),e.Y8G("ngSwitchCase",802),e.R7$(),e.Y8G("ngSwitchCase",803)}}function te(n,r){if(1&n&&(e.j41(0,"h3",10),e.EFF(1),e.k0s(),e.DNE(2,W,5,4,"p",11),e.j41(3,"ion-list",12),e.DNE(4,ne,9,6,"ng-container",13),e.k0s()),2&n){const o=e.XpG();e.R7$(),e.Lme("",null==o.productpackageapplied?null:o.productpackageapplied.productpackage_key," - ",null==o.productpackageapplied?null:o.productpackageapplied.productpackage_title,""),e.R7$(),e.Y8G("ngIf",null==o.productpackageapplied?null:o.productpackageapplied.expirateddate),e.R7$(2),e.Y8G("ngForOf",o.filterData(o.response.productpackagecontents))}}let ae=(()=>{var n;class r{constructor(t){this.loadingController=t,this.response={}}ngOnInit(){this.loadData()}onIonRefresher(t){this.loadData(()=>{t.target.complete()})}loadData(t){var a,i;(0,A.P)({loadingController:this.loadingController,loading:l=>this.response.loading=l,params:{userid:null===(a=this.user)||void 0===a?void 0:a.userid,productpackage_id:null===(i=this.productpackageapplied)||void 0===i?void 0:i.productpackage_id},callback:l=>{var s;this.response.productpackagecontents=null!==(s=null==l?void 0:l.productpackagecontents)&&void 0!==s?s:[],t&&t()}})}filterData(t){var a;return null!==(a=null==t?void 0:t.filter(i=>i.iseffect))&&void 0!==a?a:[]}renderTemplate(t,a){return a?a.replace(/\{0\}/gm,null!=t?t:""):t}renderDate(t,a){return C()(t).format(null!=a?a:"DD/MM/YYYY HH:mm")}}return(n=r).\u0275fac=function(t){return new(t||n)(e.rXU(p.Xi))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-user-membership"]],inputs:{user:"user",productpackageapplied:"productpackageapplied"},decls:13,vars:8,consts:[["templateLoading",""],["templateNoData",""],["templateYesData",""],["slot","fixed",3,"ionRefresh"],[4,"ngIf","ngIfThen","ngIfElse"],[4,"ngIf","ngIfThen"],[1,"text-center"],["name","dots"],["class","text-muted",4,"ngIf"],[1,"text-muted"],[1,"text-primary"],[4,"ngIf"],["mode","ios"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["slot","end"],["slot","end","color","primary","name","checkmark-outline"],["slot","end","color","danger","name","close-outline"]],template:function(t,a){if(1&t){const i=e.RV6();e.j41(0,"ion-refresher",3),e.bIt("ionRefresh",function(s){return e.eBV(i),e.Njj(a.onIonRefresher(s))}),e.nrm(1,"ion-refresher-content"),e.k0s(),e.j41(2,"h5"),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.DNE(5,w,1,0,"ng-container",4)(6,O,1,0,"ng-container",5)(7,H,2,0,"ng-template",null,0,e.C5r)(9,L,1,1,"ng-template",null,1,e.C5r)(11,te,5,4,"ng-template",null,2,e.C5r)}if(2&t){const i=e.sdS(8),l=e.sdS(10),s=e.sdS(12);e.R7$(3),e.JRh(e.bMT(4,6,"ProductPackageApplied")),e.R7$(2),e.Y8G("ngIf",a.productpackageapplied)("ngIfThen",s)("ngIfElse",l),e.R7$(),e.Y8G("ngIf",!1!==a.response.loading)("ngIfThen",i)}},dependencies:[d.Sq,d.bT,d.ux,d.e1,p.In,p.iq,p.uz,p.he,p.nf,p.To,p.Ki,p.w2,v.D9]}),r})();var F=c(4552);const re=()=>[];function ie(n,r){1&n&&e.eu8(0)}function se(n,r){1&n&&e.eu8(0)}function le(n,r){if(1&n){const o=e.RV6();e.j41(0,"ion-infinite-scroll",9),e.bIt("ionInfinite",function(a){e.eBV(o);const i=e.XpG();return e.Njj(i.onIonInfiniteScroll(a))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function pe(n,r){1&n&&(e.j41(0,"div",10),e.nrm(1,"ion-spinner",11),e.k0s())}function ce(n,r){1&n&&(e.j41(0,"small",13),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(),e.JRh(e.bMT(2,1,"DataNotFound")))}function me(n,r){if(1&n&&e.DNE(0,ce,3,3,"small",12),2&n){const o=e.XpG();e.Y8G("ngIf",!1===o.response.loading)}}function ue(n,r){1&n&&(e.qex(0),e.j41(1,"span",13),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.bVm()),2&n&&(e.R7$(2),e.JRh(e.bMT(3,1,"NotYetApplied")))}function de(n,r){1&n&&(e.qex(0),e.j41(1,"span",17),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.bVm()),2&n&&(e.R7$(2),e.JRh(e.bMT(3,1,"Applying")))}function ge(n,r){1&n&&(e.qex(0),e.j41(1,"span",18),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.bVm()),2&n&&(e.R7$(2),e.JRh(e.bMT(3,1,"Expired")))}function _e(n,r){if(1&n&&(e.qex(0),e.j41(1,"tr")(2,"td"),e.EFF(3),e.k0s(),e.j41(4,"td"),e.EFF(5),e.k0s(),e.j41(6,"td"),e.EFF(7),e.k0s(),e.j41(8,"td"),e.qex(9,15),e.DNE(10,ue,4,3,"ng-container",16)(11,de,4,3,"ng-container",16)(12,ge,4,3,"ng-container",16),e.bVm(),e.k0s()(),e.bVm()),2&n){const o=r.$implicit,t=e.XpG(2);e.R7$(3),e.Lme("",o.productpackage_key," - ",o.productpackage_title,""),e.R7$(2),e.JRh(t.renderDate(o.applieddate,"DD/M/YYYY HH:mm")),e.R7$(2),e.JRh(t.renderDate(o.expirateddate,"DD/M/YYYY HH:mm")),e.R7$(2),e.Y8G("ngSwitch",o.statusapply),e.R7$(),e.Y8G("ngSwitchCase",-1),e.R7$(),e.Y8G("ngSwitchCase",0),e.R7$(),e.Y8G("ngSwitchCase",1)}}function fe(n,r){if(1&n&&e.DNE(0,_e,13,8,"ng-container",14),2&n){let o;const t=e.XpG();e.Y8G("ngForOf",null!==(o=t.response.productpackagepaids)&&void 0!==o?o:e.lJ4(1,re))}}let he=(()=>{var n;class r{constructor(t){this.loadingController=t,this.APP_ROUTE=k._,this.paging={page:1,limit:20,active:!0},this.response={}}ngOnInit(){this.refreshData()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}onIonInfiniteScroll(t){this.loadMore(()=>{t.target.complete()})}refreshData(t){this.paging.page=1,this.paging.active=!0,this.loadData_Paging(t,!0)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}loadData_Paging(t,a){var i,l;(n=>{var r,o,t,a,i,l,s;n.params=n.params||{},n.params.page=n.params.page||1,n.params.limit=n.params.limit||1,(0,P.hm)({url:"api/ProductPackagePaid/Search",params:{getby:null!==(r=n.params.userid)&&void 0!==r?r:null,userid:null!==(o=n.params.userid)&&void 0!==o?o:null,productpackage_id:null!==(t=n.params.productpackage_id)&&void 0!==t?t:null,productpackage_key:null!==(a=n.params.productpackage_key)&&void 0!==a?a:null,name:null!==(i=n.params.name)&&void 0!==i?i:null,sortfield:null!==(l=n.params.sortfield)&&void 0!==l?l:null,sorttype:null!==(s=n.params.sorttype)&&void 0!==s?s:null,posstart:(n.params.page-1)*n.params.limit,numofrow:n.params.limit},success:g=>{var _;"function"==typeof n.callback&&n.callback(null!==(_=g.data)&&void 0!==_?_:null)},error:g=>{"function"==typeof n.callback&&n.callback(),console.error(g)},loading:n.loading,loadingController:n.loadingController})})({loadingController:this.loadingController,loading:s=>this.response.loading=s,params:{userid:null===(i=this.user)||void 0===i?void 0:i.userid,name:null===(l=this.user)||void 0===l?void 0:l.emailaddr,page:this.paging.page,limit:this.paging.limit},callback:s=>{var g,_,m,f,u;this.response.productpackagepaids=a?null!==(g=null==s?void 0:s.productpackagepaids)&&void 0!==g?g:[]:(null!==(_=this.response.productpackagepaids)&&void 0!==_?_:[]).concat(null!==(m=null==s?void 0:s.productpackagepaids)&&void 0!==m?m:[]),(!(null!=s&&null!==(f=s.productpackagepaids)&&void 0!==f&&f.length)||(null==s||null===(u=s.productpackagepaids)||void 0===u?void 0:u.length)<this.paging.limit)&&(this.paging.active=!1),t&&t()}})}renderMoney(t){return(0,F.up)(t,".")}renderDate(t,a){return C()(t).format(null!=a?a:"DD/MM/YYYY HH:mm")}}return(n=r).\u0275fac=function(t){return new(t||n)(e.rXU(p.Xi))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-user-product-package-paid"]],inputs:{user:"user"},decls:35,vars:21,consts:[["templateLoading",""],["templateNoData",""],["templateYesData",""],["slot","fixed",3,"ionRefresh"],[1,"table","table-hover"],["width","25%"],[4,"ngIf","ngIfThen","ngIfElse"],[4,"ngIf","ngIfThen"],[3,"ionInfinite",4,"ngIf"],[3,"ionInfinite"],[1,"text-center"],["name","dots","slot","center"],["class","text-muted",4,"ngIf"],[1,"text-muted"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"text-success"],[1,"text-danger"]],template:function(t,a){if(1&t){const i=e.RV6();e.j41(0,"ion-refresher",3),e.bIt("ionRefresh",function(s){return e.eBV(i),e.Njj(a.onIonRefresher(s))}),e.nrm(1,"ion-refresher-content"),e.k0s(),e.j41(2,"h5"),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.j41(5,"table",4)(6,"colgroup"),e.nrm(7,"col")(8,"col",5)(9,"col",5)(10,"col",5),e.k0s(),e.j41(11,"thead")(12,"tr")(13,"th"),e.EFF(14),e.nI1(15,"translate"),e.k0s(),e.j41(16,"th"),e.EFF(17),e.nI1(18,"translate"),e.k0s(),e.j41(19,"th"),e.EFF(20),e.nI1(21,"translate"),e.k0s(),e.j41(22,"th"),e.EFF(23),e.nI1(24,"translate"),e.k0s()()(),e.j41(25,"tbody"),e.DNE(26,ie,1,0,"ng-container",6),e.k0s()(),e.DNE(27,se,1,0,"ng-container",7)(28,le,2,0,"ion-infinite-scroll",8)(29,pe,2,0,"ng-template",null,0,e.C5r)(31,me,1,1,"ng-template",null,1,e.C5r)(33,fe,1,2,"ng-template",null,2,e.C5r)}if(2&t){const i=e.sdS(30),l=e.sdS(32),s=e.sdS(34);e.R7$(3),e.JRh(e.bMT(4,11,"PurchaseHistory")),e.R7$(11),e.JRh(e.bMT(15,13,"Package")),e.R7$(3),e.JRh(e.bMT(18,15,"AppliedFrom")),e.R7$(3),e.JRh(e.bMT(21,17,"ExpiredTime")),e.R7$(3),e.JRh(e.bMT(24,19,"Status")),e.R7$(3),e.Y8G("ngIf",null==a.response.productpackagepaids?null:a.response.productpackagepaids.length)("ngIfThen",s)("ngIfElse",l),e.R7$(),e.Y8G("ngIf",!1!==a.response.loading)("ngIfThen",i),e.R7$(),e.Y8G("ngIf",a.paging.active)}},dependencies:[d.Sq,d.bT,d.ux,d.e1,p.Ax,p.Hp,p.To,p.Ki,p.w2,v.D9],styles:[".table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-top:0}"]}),r})();var ke=c(6055);const ve=()=>[];function Re(n,r){1&n&&e.eu8(0)}function Pe(n,r){1&n&&e.eu8(0)}function be(n,r){if(1&n){const o=e.RV6();e.j41(0,"ion-infinite-scroll",9),e.bIt("ionInfinite",function(a){e.eBV(o);const i=e.XpG();return e.Njj(i.onIonInfiniteScroll(a))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function Ce(n,r){1&n&&(e.j41(0,"div",10),e.nrm(1,"ion-spinner",11),e.k0s())}function Te(n,r){1&n&&(e.j41(0,"small",13),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n&&(e.R7$(),e.JRh(e.bMT(2,1,"DataNotFound")))}function Ie(n,r){if(1&n&&e.DNE(0,Te,3,3,"small",12),2&n){const o=e.XpG();e.Y8G("ngIf",!1===o.response.loading)}}function $e(n,r){if(1&n&&(e.qex(0),e.j41(1,"a",19),e.EFF(2),e.k0s(),e.bVm()),2&n){const o=e.XpG().$implicit,t=e.XpG(2);e.R7$(),e.Y8G("href",t.APP_ROUTE.HOME_STATUS_PAYMENT+"?poi="+o.pay_orderid,e.B4B),e.R7$(),e.JRh(o.order_code)}}function Fe(n,r){if(1&n&&(e.qex(0),e.j41(1,"span",20),e.EFF(2),e.k0s(),e.bVm()),2&n){const o=e.XpG().$implicit;e.R7$(2),e.JRh(o.v_feesstatus_name)}}function Ue(n,r){if(1&n&&(e.qex(0),e.j41(1,"span",21),e.EFF(2),e.k0s(),e.bVm()),2&n){const o=e.XpG().$implicit;e.R7$(2),e.JRh(o.v_feesstatus_name)}}function ye(n,r){if(1&n&&(e.qex(0),e.j41(1,"span",13),e.EFF(2),e.k0s(),e.bVm()),2&n){const o=e.XpG().$implicit;e.R7$(2),e.JRh(o.v_feesstatus_name)}}function xe(n,r){if(1&n&&(e.qex(0),e.j41(1,"tr")(2,"td"),e.DNE(3,$e,3,2,"ng-container",15),e.k0s(),e.j41(4,"td"),e.EFF(5),e.k0s(),e.j41(6,"td"),e.EFF(7),e.k0s(),e.j41(8,"td"),e.qex(9,16),e.DNE(10,Fe,3,1,"ng-container",17)(11,Ue,3,1,"ng-container",17)(12,ye,3,1,"ng-container",18),e.bVm(),e.k0s()(),e.bVm()),2&n){const o=r.$implicit,t=e.XpG(2);e.R7$(3),e.Y8G("ngIf",o.order_code),e.R7$(2),e.SpI("",t.renderMoney(o.amount)," VN\u0110"),e.R7$(2),e.JRh(t.renderDate(o.order_date)),e.R7$(2),e.Y8G("ngSwitch",o.v_feesstatus),e.R7$(),e.Y8G("ngSwitchCase",10201),e.R7$(),e.Y8G("ngSwitchCase",10203)}}function je(n,r){if(1&n&&e.DNE(0,xe,13,6,"ng-container",14),2&n){let o;const t=e.XpG();e.Y8G("ngForOf",null!==(o=t.response.payorderinfos)&&void 0!==o?o:e.lJ4(1,ve))}}let De=(()=>{var n;class r{constructor(t){this.loadingController=t,this.APP_ROUTE=k._,this.paging={page:1,limit:20,active:!0},this.response={}}ngOnInit(){this.refreshData()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}onIonInfiniteScroll(t){this.loadMore(()=>{t.target.complete()})}refreshData(t){this.paging.page=1,this.paging.active=!0,this.loadData_Paging(t,!0)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}loadData_Paging(t,a){var i;(0,ke.tw)({loadingController:this.loadingController,loading:l=>this.response.loading=l,params:{userid:null===(i=this.user)||void 0===i?void 0:i.userid,page:this.paging.page,limit:this.paging.limit},callback:l=>{var s;this.response.payorderinfos=a?null!=l?l:[]:(null!==(s=this.response.payorderinfos)&&void 0!==s?s:[]).concat(null!=l?l:[]),(!(null!=l&&l.length)||(null==l?void 0:l.length)<this.paging.limit)&&(this.paging.active=!1),t&&t()}})}renderMoney(t){return(0,F.up)(t,".")}renderDate(t,a){return C()(t).format(null!=a?a:"DD/MM/YYYY HH:mm")}}return(n=r).\u0275fac=function(t){return new(t||n)(e.rXU(p.Xi))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-user-payment"]],inputs:{user:"user"},decls:35,vars:21,consts:[["templateLoading",""],["templateNoData",""],["templateYesData",""],["slot","fixed",3,"ionRefresh"],[1,"table","table-hover"],["width","25%"],[4,"ngIf","ngIfThen","ngIfElse"],[4,"ngIf","ngIfThen"],[3,"ionInfinite",4,"ngIf"],[3,"ionInfinite"],[1,"text-center"],["name","dots","slot","center"],["class","text-muted",4,"ngIf"],[1,"text-muted"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"href"],[1,"text-success"],[1,"text-danger"]],template:function(t,a){if(1&t){const i=e.RV6();e.j41(0,"ion-refresher",3),e.bIt("ionRefresh",function(s){return e.eBV(i),e.Njj(a.onIonRefresher(s))}),e.nrm(1,"ion-refresher-content"),e.k0s(),e.j41(2,"h5"),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.j41(5,"table",4)(6,"colgroup"),e.nrm(7,"col")(8,"col",5)(9,"col",5)(10,"col",5),e.k0s(),e.j41(11,"thead")(12,"tr")(13,"th"),e.EFF(14),e.nI1(15,"translate"),e.k0s(),e.j41(16,"th"),e.EFF(17),e.nI1(18,"translate"),e.k0s(),e.j41(19,"th"),e.EFF(20),e.nI1(21,"translate"),e.k0s(),e.j41(22,"th"),e.EFF(23),e.nI1(24,"translate"),e.k0s()()(),e.j41(25,"tbody"),e.DNE(26,Re,1,0,"ng-container",6),e.k0s()(),e.DNE(27,Pe,1,0,"ng-container",7)(28,be,2,0,"ion-infinite-scroll",8)(29,Ce,2,0,"ng-template",null,0,e.C5r)(31,Ie,1,1,"ng-template",null,1,e.C5r)(33,je,1,2,"ng-template",null,2,e.C5r)}if(2&t){const i=e.sdS(30),l=e.sdS(32),s=e.sdS(34);e.R7$(3),e.JRh(e.bMT(4,11,"PaymentHistory")),e.R7$(11),e.JRh(e.bMT(15,13,"OrderCode")),e.R7$(3),e.JRh(e.bMT(18,15,"TransactionAmount")),e.R7$(3),e.JRh(e.bMT(21,17,"Time")),e.R7$(3),e.JRh(e.bMT(24,19,"Status")),e.R7$(3),e.Y8G("ngIf",null==a.response.payorderinfos?null:a.response.payorderinfos.length)("ngIfThen",s)("ngIfElse",l),e.R7$(),e.Y8G("ngIf",!1!==a.response.loading)("ngIfThen",i),e.R7$(),e.Y8G("ngIf",a.paging.active)}},dependencies:[d.Sq,d.bT,d.ux,d.e1,d.fG,p.Ax,p.Hp,p.To,p.Ki,p.w2,v.D9],styles:[".table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-top:0}"]}),r})();function Me(n,r){1&n&&e.eu8(0)}function Ee(n,r){1&n&&e.nrm(0,"ion-spinner",18)}function Ge(n,r){1&n&&e.eu8(0)}function Ye(n,r){if(1&n&&e.DNE(0,Ge,1,0,"ng-container",17),2&n){const o=e.XpG(),t=e.sdS(55),a=e.sdS(57);e.Y8G("ngIf",o.params.component)("ngIfThen",a)("ngIfElse",t)}}function Se(n,r){if(1&n&&(e.j41(0,"div"),e.nrm(1,"app-user-info",19),e.k0s(),e.j41(2,"div",20),e.nrm(3,"app-user-membership",21),e.k0s(),e.j41(4,"div",20),e.nrm(5,"app-user-product-package-paid",19),e.k0s(),e.j41(6,"div",20),e.nrm(7,"app-user-payment",19),e.k0s()),2&n){const o=e.XpG();e.R7$(),e.Y8G("user",o.user),e.R7$(2),e.Y8G("user",o.user)("productpackageapplied",o.response.productpackageapplied),e.R7$(2),e.Y8G("user",o.user),e.R7$(2),e.Y8G("user",o.user)}}function Ne(n,r){if(1&n&&(e.qex(0),e.nrm(1,"app-user-info",19),e.bVm()),2&n){const o=e.XpG(2);e.R7$(),e.Y8G("user",o.user)}}function Ve(n,r){if(1&n&&(e.qex(0),e.nrm(1,"app-user-membership",21),e.bVm()),2&n){const o=e.XpG(2);e.R7$(),e.Y8G("user",o.user)("productpackageapplied",o.response.productpackageapplied)}}function Xe(n,r){if(1&n&&(e.qex(0),e.nrm(1,"app-user-product-package-paid",19),e.bVm()),2&n){const o=e.XpG(2);e.R7$(),e.Y8G("user",o.user)}}function Je(n,r){if(1&n&&(e.qex(0),e.nrm(1,"app-user-payment",19),e.bVm()),2&n){const o=e.XpG(2);e.R7$(),e.Y8G("user",o.user)}}function Ae(n,r){if(1&n&&(e.qex(0,22),e.DNE(1,Ne,2,1,"ng-container",23)(2,Ve,2,2,"ng-container",23)(3,Xe,2,1,"ng-container",23)(4,Je,2,1,"ng-container",23),e.bVm()),2&n){const o=e.XpG();e.Y8G("ngSwitch",o.params.component),e.R7$(),e.Y8G("ngSwitchCase","info"),e.R7$(),e.Y8G("ngSwitchCase","membership"),e.R7$(),e.Y8G("ngSwitchCase","product-package-paid"),e.R7$(),e.Y8G("ngSwitchCase","payment")}}const we=[{path:"",component:(()=>{var n;class r{constructor(t,a,i,l,s){var g,_;if(this.router=t,this.activatedRoute=a,this.titleService=i,this.modalController=l,this.translateService=s,this.appsettings={},this.APP_ROUTE=k._,this.params={},this.response={},this.params.component=null!==(g=a.snapshot.params.component)&&void 0!==g?g:"",this.params.to=null!==(_=a.snapshot.queryParamMap.get("to"))&&void 0!==_?_:"",this.params.to)t.navigate([k._.USER_COMPONENT.replace(":component",this.params.to)],{replaceUrl:!0});else switch(this.params.component){case"info":s.stream("AccountInfo").subscribe(u=>{i.setTitle(u)});break;case"membership":s.stream("MemberInfo").subscribe(u=>{i.setTitle(u)});break;case"product-package-paid":s.stream("PurchaseHistory").subscribe(u=>{i.setTitle(u)});break;case"payment":s.stream("PaymentHistory").subscribe(u=>{i.setTitle(u)});break;default:var m,f;null!==(m=this.user)&&void 0!==m&&m.fullname?i.setTitle(null===(f=this.user)||void 0===f?void 0:f.fullname):s.stream("Account").subscribe(u=>{i.setTitle(u)})}}ngOnInit(){var t=this;(0,h.A)(function*(){t.appsettings=yield(0,P.AC)(),t.appsettings.madonvi&&(t.user=yield(0,M.JD)(t.appsettings),t.refreshData())})()}reloadTitle(){switch(this.params.component){case"info":this.translateService.stream("AccountInfo").subscribe(i=>{this.titleService.setTitle(i)});break;case"membership":this.translateService.stream("MemberInfo").subscribe(i=>{this.titleService.setTitle(i)});break;case"product-package-paid":this.translateService.stream("PurchaseHistory").subscribe(i=>{this.titleService.setTitle(i)});break;case"payment":this.translateService.stream("PaymentHistory").subscribe(i=>{this.titleService.setTitle(i)});break;default:var t,a;null!==(t=this.user)&&void 0!==t&&t.fullname?this.titleService.setTitle(null===(a=this.user)||void 0===a?void 0:a.fullname):this.translateService.stream("Account").subscribe(i=>{this.titleService.setTitle(i)})}}refreshData(){var t;(0,x.N4)({loading:a=>this.response.loading=a,params:{userid:null===(t=this.user)||void 0===t?void 0:t.userid},callback:a=>{this.response.productpackageapplied=a}})}swichComponent(t,a){this.params.component=a,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{to:a},queryParamsHandling:"merge",replaceUrl:!0}),this.reloadTitle()}presentModalUserChangeInfo(t){var a=this;return(0,h.A)(function*(){const i=yield a.modalController.create({component:j.q,componentProps:{user:a.user},mode:"md",cssClass:"ion-modal ion-modal-change-info",backdropDismiss:!0,keyboardClose:!0});i.onDidDismiss().then(function(){var l=(0,h.A)(function*(s){"confirm"==s.role&&(0,b.N$)({params:s.data,callback:g=>{a.user=g}})});return function(s){return l.apply(this,arguments)}}()),i.present()})()}presentModalUserChangePwd(t){var a=this;return(0,h.A)(function*(){(yield a.modalController.create({component:D.x,componentProps:{user:a.user},mode:"md",cssClass:"ion-modal ion-modal-change-pwd",backdropDismiss:!0,keyboardClose:!0})).present()})()}signOut(){return(0,h.A)(function*(){yield(0,P.jQ)(),yield(0,y.SD)(),(0,b.xy)({callback:()=>{window.location.replace(k._.LANDING_PAGE)}})})()}}return(n=r).\u0275fac=function(t){return new(t||n)(e.rXU(R.Ix),e.rXU(R.nX),e.rXU(E.hE),e.rXU(p.W3),e.rXU(v.c$))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-user"]],decls:58,vars:38,consts:[["templateLoading",""],["templateData",""],["templateDataAll",""],["templateDataSwitch",""],[3,"isFullWidth"],["when","md","contentId","main"],[1,"ion-no-padding"],["mode","ios"],[1,"font-weight-normal","text-muted"],[1,"text-dark"],["button","","detail","true","detail-icon","chevron-forward-outline",3,"href"],[3,"color"],["button","","detail","true","detail-icon","chevron-forward-outline",3,"click"],["button","","detail","true","detail-icon","log-out-outline",3,"click"],["color","danger"],["id","main",1,"ion-page"],[1,"ion-padding"],[4,"ngIf","ngIfThen","ngIfElse"],["name","dots"],[3,"user"],[1,"mb-5"],[3,"user","productpackageapplied"],[3,"ngSwitch"],[4,"ngSwitchCase"]],template:function(t,a){if(1&t){const i=e.RV6();e.nrm(0,"app-header",4),e.j41(1,"ion-content")(2,"ion-split-pane",5)(3,"ion-content",6)(4,"ion-list",7)(5,"ion-list-header")(6,"ion-label")(7,"span",8),e.EFF(8),e.nI1(9,"translate"),e.j41(10,"b",9),e.EFF(11),e.k0s(),e.EFF(12,"."),e.k0s()()(),e.j41(13,"ion-item",10)(14,"ion-label",11),e.EFF(15),e.nI1(16,"translate"),e.k0s()(),e.j41(17,"ion-item",12),e.bIt("click",function(s){return e.eBV(i),e.Njj(a.presentModalUserChangeInfo(s))}),e.j41(18,"ion-label"),e.EFF(19),e.nI1(20,"translate"),e.k0s()(),e.j41(21,"ion-item",12),e.bIt("click",function(s){return e.eBV(i),e.Njj(a.presentModalUserChangePwd(s))}),e.j41(22,"ion-label"),e.EFF(23),e.nI1(24,"translate"),e.k0s()(),e.j41(25,"ion-item",13),e.bIt("click",function(){return e.eBV(i),e.Njj(a.signOut())}),e.j41(26,"ion-label",14),e.EFF(27),e.nI1(28,"translate"),e.k0s()(),e.j41(29,"ion-list-header")(30,"ion-label"),e.EFF(31),e.nI1(32,"translate"),e.k0s()(),e.j41(33,"ion-item",12),e.bIt("click",function(s){return e.eBV(i),e.Njj(a.swichComponent(s,"membership"))}),e.j41(34,"ion-label",11),e.EFF(35),e.nI1(36,"translate"),e.k0s(),e.j41(37,"ion-badge"),e.EFF(38),e.k0s()(),e.j41(39,"ion-item",12),e.bIt("click",function(s){return e.eBV(i),e.Njj(a.swichComponent(s,"product-package-paid"))}),e.j41(40,"ion-label",11),e.EFF(41),e.nI1(42,"translate"),e.k0s()(),e.j41(43,"ion-item",12),e.bIt("click",function(s){return e.eBV(i),e.Njj(a.swichComponent(s,"payment"))}),e.j41(44,"ion-label",11),e.EFF(45),e.nI1(46,"translate"),e.k0s()()()(),e.j41(47,"div",15)(48,"ion-content",16),e.DNE(49,Me,1,0,"ng-container",17),e.k0s()()()(),e.DNE(50,Ee,1,0,"ng-template",null,0,e.C5r)(52,Ye,1,3,"ng-template",null,1,e.C5r)(54,Se,8,5,"ng-template",null,2,e.C5r)(56,Ae,5,5,"ng-template",null,3,e.C5r)}if(2&t){const i=e.sdS(51),l=e.sdS(53);e.Y8G("isFullWidth",!0),e.R7$(8),e.SpI("",e.bMT(9,20,"Welcome")," "),e.R7$(3),e.JRh(null==a.user?null:a.user.fullname),e.R7$(2),e.Y8G("href",a.APP_ROUTE.USER),e.R7$(),e.Y8G("color",a.params.component&&"info"!=a.params.component?"":"primary"),e.R7$(),e.JRh(e.bMT(16,22,"AccountInfo")),e.R7$(4),e.JRh(e.bMT(20,24,"ChangeInfo")),e.R7$(4),e.JRh(e.bMT(24,26,"ChangePassword")),e.R7$(4),e.JRh(e.bMT(28,28,"SignOut")),e.R7$(4),e.JRh(e.bMT(32,30,"Membership")),e.R7$(3),e.Y8G("color","membership"==a.params.component?"primary":""),e.R7$(),e.JRh(e.bMT(36,32,"MemberInfo")),e.R7$(3),e.JRh(null==a.response.productpackageapplied?null:a.response.productpackageapplied.productpackage_key),e.R7$(2),e.Y8G("color","product-package-paid"==a.params.component?"primary":""),e.R7$(),e.JRh(e.bMT(42,34,"PurchaseHistory")),e.R7$(3),e.Y8G("color","payment"==a.params.component?"primary":""),e.R7$(),e.JRh(e.bMT(46,36,"PaymentHistory")),e.R7$(4),e.Y8G("ngIf",!1!==a.response.loading)("ngIfThen",i)("ngIfElse",l)}},dependencies:[d.bT,d.ux,d.e1,p.In,p.W9,p.uz,p.he,p.nf,p.AF,p.w2,p.HP,G.l,X,ae,he,De,v.D9],styles:["ion-split-pane[_ngcontent-%COMP%]{--side-max-width: 360px}"]}),r})()}];let Oe=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[R.iI.forChild(we),R.iI]}),r})();var He=c(3890);let Be=(()=>{var n;class r{}return(n=r).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[d.MD,U.YN,p.bv,Oe,He.x]}),r})()}}]);