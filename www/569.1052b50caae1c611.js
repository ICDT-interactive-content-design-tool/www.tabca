"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[569],{569:(k,v,o)=>{o.r(v),o.d(v,{PricingPageModule:()=>V});var s=o(6814),x=o(6223),g=o(3536),A=o(1310),T=o(5861),E=o(6676),P=o.n(E),_=o(4459),h=o(203),m=o(2654),C=o(5511),O=o(2695),b=o(1862),n=o(5879),U=o(9565),y=o(2820),D=o(3999);function M(e,a){1&e&&n.GkF(0)}function I(e,a){1&e&&n.GkF(0)}function B(e,a){1&e&&(n.TgZ(0,"div",9),n._UZ(1,"ion-spinner",10),n.qZA())}function N(e,a){1&e&&(n.TgZ(0,"small",12),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&e&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"DataNotFound")))}function Q(e,a){if(1&e&&n.YNc(0,N,3,3,"small",11),2&e){const i=n.oxw();n.Q6J("ngIf",!1===i.response.loading)}}function R(e,a){if(1&e&&(n.ynx(0),n.TgZ(1,"ion-badge",26),n._uU(2),n.qZA(),n.BQk()),2&e){const i=n.oxw().$implicit;n.xp6(2),n.Oqu(i.datavalue)}}function Y(e,a){1&e&&(n.ynx(0),n._UZ(1,"ion-icon",27),n.BQk())}function $(e,a){1&e&&(n.ynx(0),n._UZ(1,"ion-icon",28),n.BQk())}function J(e,a){if(1&e&&(n.ynx(0)(1,24),n.YNc(2,Y,2,0,"ng-container",25),n.YNc(3,$,2,0,"ng-container",25),n.BQk()()),2&e){const i=n.oxw().$implicit;n.xp6(1),n.Q6J("ngSwitch",i.datavalue),n.xp6(1),n.Q6J("ngSwitchCase","1"),n.xp6(1),n.Q6J("ngSwitchCase","0")}}function F(e,a){if(1&e&&(n.ynx(0),n.TgZ(1,"ion-badge",26),n._uU(2),n.qZA(),n.BQk()),2&e){const i=n.oxw().$implicit,t=n.oxw(3);n.xp6(2),n.Oqu(t.renderTemplate(i.datavalue,i.template))}}function w(e,a){if(1&e&&(n.ynx(0),n.TgZ(1,"ion-badge",26),n._uU(2),n.qZA(),n.BQk()),2&e){const i=n.oxw().$implicit,t=n.oxw(3);n.xp6(2),n.Oqu(t.renderDate(i.datavalue))}}function q(e,a){if(1&e&&(n.ynx(0),n.TgZ(1,"ion-item")(2,"ion-label"),n._uU(3),n.qZA(),n.ynx(4,24),n.YNc(5,R,3,1,"ng-container",25),n.YNc(6,J,4,3,"ng-container",25),n.YNc(7,F,3,1,"ng-container",25),n.YNc(8,w,3,1,"ng-container",25),n.BQk(),n.qZA(),n.BQk()),2&e){const i=a.$implicit;n.xp6(3),n.Oqu(i.productpackagecontent_title),n.xp6(1),n.Q6J("ngSwitch",i.v_datatype),n.xp6(1),n.Q6J("ngSwitchCase",800),n.xp6(1),n.Q6J("ngSwitchCase",801),n.xp6(1),n.Q6J("ngSwitchCase",802),n.xp6(1),n.Q6J("ngSwitchCase",803)}}function L(e,a){if(1&e&&(n.TgZ(0,"a",29),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&e){const i=n.oxw(3);n.Q6J("href",i.APP_ROUTE.DASHBOARD,n.LSH),n.xp6(1),n.Oqu(n.lcZ(2,2,"StartNow"))}}function S(e,a){if(1&e&&(n.TgZ(0,"a",30),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&e){const i=n.oxw().$implicit,t=n.oxw(2);n.Tol(i.isrecommend?"btn-recommend":"btn-outline-primary"),n.Q6J("href",t.APP_ROUTE.HOME_ORDER+"?ppk="+i.productpackage_key,n.LSH),n.xp6(1),n.Oqu(n.lcZ(2,4,"BuyNow"))}}function G(e,a){if(1&e&&(n.ynx(0),n.TgZ(1,"div",15)(2,"div",16)(3,"div",17)(4,"h3",18),n._uU(5),n.qZA()(),n.TgZ(6,"div",19)(7,"small",12),n._uU(8),n.qZA(),n.TgZ(9,"h2",20)(10,"span"),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.TgZ(13,"small")(14,"small")(15,"small",12),n._uU(16),n.ALo(17,"translate"),n.ALo(18,"translate"),n.qZA()()()(),n.TgZ(19,"ion-list",21),n.YNc(20,q,9,6,"ng-container",14),n.qZA()(),n.TgZ(21,"div"),n.YNc(22,L,3,4,"a",22),n.YNc(23,S,3,6,"a",23),n.qZA()()(),n.BQk()),2&e){const i=a.$implicit,t=n.oxw(2);let r;n.xp6(2),n.Tol(i.isrecommend?"recommend":""),n.xp6(3),n.Oqu(i.productpackage_title),n.xp6(3),n.Oqu(null!==(r=i.productpackage_description)&&void 0!==r?r:"- - -"),n.xp6(3),n.Oqu(i.price?t.renderMoney(i.price)+" VN\u0110":n.lcZ(12,9,"Free")),n.xp6(5),n.hij(" /",-1==i.usedtime?n.lcZ(17,11,"Unlimit"):i.usedtime+" "+n.lcZ(18,13,t.renderTimeUnit(i.usedtime_unit)),""),n.xp6(4),n.Q6J("ngForOf",t.filterData(i.productpackagecontents)),n.xp6(2),n.Q6J("ngIf",!i.price),n.xp6(1),n.Q6J("ngIf",i.price)}}const H=function(){return[]};function W(e,a){if(1&e&&(n.TgZ(0,"div",13),n.YNc(1,G,24,15,"ng-container",14),n.qZA()),2&e){const i=n.oxw();let t;n.xp6(1),n.Q6J("ngForOf",null!==(t=i.response.productpackages)&&void 0!==t?t:n.DdM(1,H))}}const j=[{path:"",component:(()=>{var e;class a{constructor(){this.appsettings={},this.APP_ROUTE=O.z,this.paging={page:1,limit:2,active:!0},this.response={}}ngOnInit(){var t=this;(0,T.Z)(function*(){t.appsettings=yield(0,_.H0)(),t.appsettings.madonvi&&(t.user=yield(0,C.v)(),t.refreshData())})()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){this.paging.page=1,this.paging.active=!0,this.loadData_Paging(t,!0)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}loadData_Paging(t,r){var l;(0,h.AY)({loading:c=>{this.response.loading=c},params:{userid:null===(l=this.user)||void 0===l?void 0:l.userid,page:this.paging.page,limit:this.paging.limit},callback:c=>{var u,d,p,f,Z;this.response.productpackages=r?null!==(u=null==c?void 0:c.productpackages)&&void 0!==u?u:[]:(null!==(d=this.response.productpackages)&&void 0!==d?d:[]).concat(null!==(p=null==c?void 0:c.productpackages)&&void 0!==p?p:[]),this.recursiveProductPackageContent(),(!(null!=c&&null!==(f=c.productpackages)&&void 0!==f&&f.length)||(null==c||null===(Z=c.productpackages)||void 0===Z?void 0:Z.length)<this.paging.limit)&&(this.paging.active=!1),t&&t()}})}recursiveProductPackageContent(t){var r,l,c,u;t=null!==(r=t)&&void 0!==r?r:0;let d=(null!==(l=this.response.productpackages)&&void 0!==l?l:[])[t];if(d){if(t+=1,null!==(c=d.productpackagecontents)&&void 0!==c&&c.length)return void this.recursiveProductPackageContent(t);(0,m.A)({loading:p=>{this.response.loading=p},params:{userid:null===(u=this.user)||void 0===u?void 0:u.userid,productpackage_id:d.productpackage_id},callback:p=>{var f;d.productpackagecontents=null!==(f=null==p?void 0:p.productpackagecontents)&&void 0!==f?f:[],this.recursiveProductPackageContent(t)}})}}filterData(t){var r;return null!==(r=null==t?void 0:t.filter(l=>l.iseffect))&&void 0!==r?r:[]}renderMoney(t){return(0,b.lb)(t,".")}renderTimeUnit(t){return(0,b.qc)(t)}renderTemplate(t,r){return r?r.replace(/\{0\}/gm,null!=t?t:""):t}renderDate(t,r){return P()(t).format(null!=r?r:"DD/MM/YYYY HH:mm")}}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-pricing"]],decls:30,vars:5,consts:[["slot","fixed",3,"ionRefresh"],[1,"mb-5"],[1,"block-heading","d-flex","flex-wrap","align-items-center","justify-content-center","text-center","w-100"],[1,"container","mb-4","mb-lg-5"],[4,"ngIf","ngIfThen","ngIfElse"],[4,"ngIf","ngIfThen"],["templateLoading",""],["templateNoData",""],["templateYesData",""],[1,"text-center"],["name","dots","slot","center"],["class","text-muted",4,"ngIf"],[1,"text-muted"],[1,"row","align-items-stretch","justify-content-md-center"],[4,"ngFor","ngForOf"],[1,"col-12","col-md-6","mb-4"],[1,"pricing-item","d-flex","flex-column","flex-grow-1"],[1,"heading","mb-1"],[1,"my-0"],[1,"content","mb-3","flex-grow-1"],[1,"mt-4","mb-3"],["mode","ios"],["class","btn btn-lg btn-block btn-secondary border-0",3,"href",4,"ngIf"],["class","btn btn-lg btn-block",3,"class","href",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["slot","end"],["slot","end","color","primary","name","checkmark-outline"],["slot","end","color","danger","name","close-outline"],[1,"btn","btn-lg","btn-block","btn-secondary","border-0",3,"href"],[1,"btn","btn-lg","btn-block",3,"href"]],template:function(t,r){if(1&t&&(n._UZ(0,"app-header"),n.TgZ(1,"ion-content")(2,"ion-refresher",0),n.NdJ("ionRefresh",function(c){return r.onIonRefresher(c)}),n._UZ(3,"ion-refresher-content"),n.qZA(),n.TgZ(4,"div",1)(5,"div",2)(6,"div")(7,"h2"),n._uU(8,"B\u1ea3n Pro bao g\u1ed3m nh\u1eefng g\xec?"),n.qZA(),n.TgZ(9,"p")(10,"span"),n._uU(11,"B\u1ea1n kh\xf3 kh\u0103n khi l\xe0m vi\u1ec7c m\u1ed9t m\xecnh?"),n.qZA(),n.TgZ(12,"span"),n._uU(13,"B\u1ea1n ch\u01b0a bi\u1ebft b\u1eaft \u0111\u1ea7u t\u1eeb \u0111\xe2u?"),n.qZA(),n._UZ(14,"br"),n.TgZ(15,"span"),n._uU(16,"Tabca Pro v\u1edbi AI kh\xf4ng gi\u1edbi h\u1ea1n s\u1ebd gi\xfap b\u1ea1n s\xe1ng t\u1ea1o n\u1ed9i dung h\u1ea5p d\u1eabn, phong ph\xfa, mang \u0111\u1eadm d\u1ea5u \u1ea5n c\xe1 nh\xe2n."),n.qZA(),n._UZ(17,"br"),n.TgZ(18,"span"),n._uU(19,"D\xf9ng th\u1eed mi\u1ec5n ph\xed ngay!"),n.qZA()()()()(),n.TgZ(20,"div",3),n.YNc(21,M,1,0,"ng-container",4),n.YNc(22,I,1,0,"ng-container",5),n.qZA(),n._UZ(23,"app-footer"),n.qZA(),n.YNc(24,B,2,0,"ng-template",null,6,n.W1O),n.YNc(26,Q,1,1,"ng-template",null,7,n.W1O),n.YNc(28,W,2,2,"ng-template",null,8,n.W1O)),2&t){const l=n.MAs(25),c=n.MAs(27),u=n.MAs(29);n.xp6(21),n.Q6J("ngIf",null==r.response.productpackages?null:r.response.productpackages.length)("ngIfThen",u)("ngIfElse",c),n.xp6(1),n.Q6J("ngIf",!1!==r.response.loading)("ngIfThen",l)}},dependencies:[s.sg,s.O5,s.RF,s.n9,g.yp,g.W2,g.gu,g.Ie,g.Q$,g.q_,g.nJ,g.Wo,g.PQ,U.G,y.c,D.X$],styles:['.block-heading[_ngcontent-%COMP%]{min-height:160px;background-image:url(banner-2.e56e40b14eadb432.png);background-repeat:no-repeat;background-position:center center;background-size:cover}.block-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:only-child{margin:0}.block-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-right:.5rem}.pricing[_ngcontent-%COMP%]{max-width:1000px}.pricing-item[_ngcontent-%COMP%]{min-height:100%;padding:1.5rem;border-radius:1rem;background-color:var(--ion-background-color);border:1.5px solid var(--ion-color-secondary)}.pricing-item.recommend[_ngcontent-%COMP%]{position:relative;background-image:var(--ion-color-linear);background-clip:padding-box,border-box;border-color:transparent}.pricing-item.recommend[_ngcontent-%COMP%]:before{content:"";position:absolute;top:1.5px;left:1.5px;right:1.5px;bottom:1.5px;border-radius:.75rem;background-color:var(--ion-color-linear-contrast)}.pricing-item.recommend[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative}.pricing-item[_ngcontent-%COMP%]   .btn-recommend[_ngcontent-%COMP%]{background-image:var(--ion-color-linear);color:var(--ion-color-linear-contrast);border:0}']}),a})()}];let z=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[A.Bz.forChild(j),A.Bz]}),a})();var K=o(9074);let V=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.ez,x.u5,g.Pc,z,K.V]}),a})()},5511:(k,v,o)=>{o.d(v,{R:()=>E,v:()=>T});var s=o(5861),x=o(3377),g=o(2695),A=o(4459);const T=function(){var P=(0,s.Z)(function*(){return yield(0,x.iA)()});return function(){return P.apply(this,arguments)}}(),E=function(){var P=(0,s.Z)(function*(_){let h=null!=_?_:yield(0,A.H0)(),m=yield(0,x.iA)();return(!h.madonvi||!m.userid||h.madonvi!=(null==m?void 0:m.madonvi))&&window.location.replace(g.z.LANDING_PAGE+`?require=signin&returnurl=${encodeURIComponent(window.location.href)}`),m});return function(h){return P.apply(this,arguments)}}()}}]);