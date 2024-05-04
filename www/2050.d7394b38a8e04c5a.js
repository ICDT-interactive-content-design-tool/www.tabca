"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2050],{8662:(E,O,r)=>{r.d(O,{A:()=>P});const P=(0,r(2726).fo)("Device",{web:()=>r.e(7116).then(r.bind(r,7116)).then(C=>new C.DeviceWeb)})},9034:(E,O,r)=>{r.d(O,{Hc:()=>e});const e=(0,r(2726).fo)("NativeBiometric",{web:()=>r.e(5303).then(r.bind(r,5303)).then(t=>new t.NativeBiometricWeb)})},5328:(E,O,r)=>{r.d(O,{Es:()=>t,e8:()=>b,f9:()=>C,no:()=>P,s2:()=>g,u7:()=>e,xK:()=>v});var m=r(4459);function P(n){n.params=n.params||{},(0,m.cd)({url:"api/User/Detail",params:{userid:n.params.userid||null},success:o=>{"function"==typeof n.callback&&n.callback(o.data||null)},error:o=>{"function"==typeof n.callback&&n.callback(null),console.error(o)},loading:n.loading})}function C(n){n.params=n.params||{},(0,m.T1)({url:"api/User/SignIn",params:{emailaddr:n.params.emailaddr||null,pwd:n.params.pwd||null},success:o=>{"function"==typeof n.callback&&n.callback(o.data||null)},error:o=>{"function"==typeof n.callback&&n.callback(null),console.error(n,o)},loading:n.loading})}function e(n){n.params=n.params||{},(0,m.T1)({url:"api/User/SignUp",params:{firstname:n.params.firstname||null,lastname:n.params.lastname||null,emailaddr:n.params.emailaddr||null,pwd:n.params.pwd||null},success:o=>{"function"==typeof n.callback&&n.callback(o.data||null)},error:o=>{"function"==typeof n.callback&&n.callback(null),console.error(n,o)},loading:n.loading})}function t(n){n.params=n.params||{},(0,m.T1)({url:"api/User/Active",params:{emailaddr:n.params.emailaddr||null,activationcode:n.params.activationcode||null},success:o=>{"function"==typeof n.callback&&n.callback(o.data||null)},error:o=>{"function"==typeof n.callback&&n.callback(null),console.error(n,o)},loading:n.loading})}function v(n){n.params=n.params||{},(0,m.T1)({url:"api/User/ChangePassword",params:{emailaddr:n.params.emailaddr||null,pwd:n.params.pwd||null,forgotpwdcode:n.params.forgotpwdcode||null,newpwd:n.params.newpwd||null},success:o=>{"function"==typeof n.callback&&n.callback(o.data||null)},error:o=>{"function"==typeof n.callback&&n.callback(null),console.error(n,o)},loading:n.loading})}function g(n){n.params=n.params||{},(0,m.T1)({url:"api/User/UpdateInfo",params:{userid:n.params.userid||null,firstname:n.params.firstname||null,lastname:n.params.lastname||null,emailaddr:n.params.emailaddr||null,mobilecountrycode:n.params.mobilecountrycode||null,mobile:n.params.mobile||null,introduce:n.params.introduce||null},success:o=>{"function"==typeof n.callback&&n.callback(o.data||null)},error:o=>{"function"==typeof n.callback&&n.callback(null),console.error(n,o)},loading:n.loading})}function b(n){n.params=n.params||{},(0,m.T1)({url:"api/users/forgotpassword",params:{emailaddr:n.params.emailaddr||null},success:o=>{if("function"==typeof n.callback){var _=o.data||{};_.returncode=null!=_.returncode?_.returncode:_.ReturnCode,_.returnmsg=null!=_.returnmsg?_.returnmsg:_.ReturnMsg,_.id=null!=_.id?_.id:_.AccountID,n.callback(_)}},error:o=>{"function"==typeof n.callback&&n.callback(null),console.error(n,o)},loading:n.loading})}},2050:(E,O,r)=>{r.d(O,{N:()=>s});var m=r(5861),P=r(4459),C=r(3377),e=r(2695),t=r(9416),v=r(3300),g=r(203),b=r(9034),T=r(1062),A=r(8662),n=r(5879),o=r(3536),_=r(6814),M=r(3999);function i(f,h){if(1&f){const U=n.EpF();n.TgZ(0,"ion-item",8)(1,"ion-label"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"ion-toggle",11),n.NdJ("click",function(l){n.CHM(U);const u=n.oxw();return n.KtG(u.clickBiometric(l))}),n.qZA()()}if(2&f){const U=n.oxw();n.xp6(2),n.Oqu(n.lcZ(3,2,"Biometrics")),n.xp6(2),n.Q6J("checked",U.dataSetting.Biometric)}}let a=(()=>{var f;class h{constructor(d,l){this.platform=d,this.modalController=l,this.isfullscreen=!1,this.dataSetting={};var u=this.platform.platforms();u.includes("mobile")&&!u.includes("mobileweb")&&b.Hc.isAvailable({useFallback:!0}).then(p=>{console.log("NativeBiometric.isAvailable",p),this.biometricAvailable=!!p.isAvailable})}ngOnInit(){this.isfullscreen=window.document.body.classList.contains("modal-fullscreen"),(0,T.yz)({callback:d=>{d&&(this.dataSetting=d)}})}toggleFullScreen(){this.isfullscreen?window.document.body.classList.remove("modal-fullscreen"):window.document.body.classList.add("modal-fullscreen"),this.isfullscreen=window.document.body.classList.contains("modal-fullscreen")}close(){return this.modalController.dismiss(null,"cancel")}changeNotify(d){return(0,m.Z)(function*(){(0,T.ag)({params:{Notify:d.detail.checked}})})()}clickBiometric(d){var l=this;return(0,m.Z)(function*(){l.dataSetting.Biometric?b.Hc.verifyIdentity({subtitle:"T\u1eaft b\u1ea3o v\u1ec7 \u1ee9ng d\u1ee5ng v\u1edbi sinh tr\u1eafc h\u1ecdc",useFallback:!0,maxAttempts:5}).then(function(){var p=(0,m.Z)(function*(Z){console.info("NativeBiometric.verifyIdentity",Z),b.Hc.deleteCredentials({server:"www.tabca.vn"}).then(()=>{(0,T.ag)({params:{Biometric:!1}}),l.dataSetting.Biometric=!1}).catch(w=>{throw w})});return function(Z){return p.apply(this,arguments)}}()).catch(p=>{l.dataSetting.Biometric=!0,console.log("NativeBiometric.verifyIdentity",p)}):b.Hc.verifyIdentity({subtitle:"K\xedch ho\u1ea1t b\u1ea3o v\u1ec7 \u1ee9ng d\u1ee5ng v\u1edbi sinh tr\u1eafc h\u1ecdc",useFallback:!0,maxAttempts:5}).then(function(){var p=(0,m.Z)(function*(Z){var w;console.info("NativeBiometric.verifyIdentity",Z),b.Hc.setCredentials({server:"www.tabca.vn",username:"tabca",password:null===(w=yield A.A.getId())||void 0===w?void 0:w.identifier}).then(()=>{(0,T.ag)({params:{Biometric:!0}}),l.dataSetting.Biometric=!0}).catch(I=>{throw I})});return function(Z){return p.apply(this,arguments)}}()).catch(p=>{l.dataSetting.Biometric=!1,console.log("NativeBiometric.verifyIdentity",p)})})()}}return(f=h).\u0275fac=function(d){return new(d||f)(n.Y36(o.t4),n.Y36(o.IN))},f.\u0275cmp=n.Xpm({type:f,selectors:[["app-modal-setting"]],decls:19,vars:9,consts:[["slot","end"],["color","dark",1,"d-none","d-md-block",3,"click"],[3,"src"],["color","dark",3,"click"],["src","../../../../assets/icon/16x16/close.svg"],[1,"ion-no-padding"],[1,"py-3"],["mode","ios","lines","none"],["color","light","mode","md"],[3,"checked","ionChange"],["color","light","mode","md",4,"ngIf"],[3,"checked","click"]],template:function(d,l){1&d&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.NdJ("click",function(){return l.toggleFullScreen()}),n._UZ(4,"ion-icon",2),n.qZA(),n.TgZ(5,"ion-button",3),n.NdJ("click",function(){return l.close()}),n._UZ(6,"ion-icon",4),n.qZA()(),n.TgZ(7,"ion-title"),n._uU(8),n.ALo(9,"translate"),n.qZA()()(),n.TgZ(10,"ion-content",5)(11,"div",6)(12,"ion-list",7)(13,"ion-item",8)(14,"ion-label"),n._uU(15),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"ion-toggle",9),n.NdJ("ionChange",function(p){return l.changeNotify(p)}),n.qZA()(),n.YNc(18,i,5,4,"ion-item",10),n.qZA()()()),2&d&&(n.xp6(4),n.Q6J("src",l.isfullscreen?"assets/icon/16x16/fullscreen-exit.svg":"assets/icon/16x16/fullscreen.svg"),n.xp6(4),n.Oqu(n.lcZ(9,5,"Setting")),n.xp6(7),n.Oqu(n.lcZ(16,7,"Notify")),n.xp6(2),n.Q6J("checked",l.dataSetting.Notify),n.xp6(1),n.Q6J("ngIf",l.biometricAvailable))},dependencies:[_.O5,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.wd,o.ho,o.sr,o.w,M.X$]}),h})();var c=r(8328);let s=(()=>{var f;class h{constructor(d){this.modalController=d,this.APP_ROUTE=e.z,this.response={}}ngOnInit(){var d=this;(0,m.Z)(function*(){var l;d.user=yield(0,C.iA)(),(0,g.nC)({loading:u=>{d.response.loading=u},params:{userid:null===(l=d.user)||void 0===l?void 0:l.userid},callback:u=>{d.response.productpackageapplied=u}})})()}close(){this.modalController.dismiss()}presentModalUserChangeInfo(d){var l=this;return(0,m.Z)(function*(){const u=yield l.modalController.create({component:t.w,componentProps:{user:l.user},mode:"md",cssClass:"ion-modal ion-modal-change-info",backdropDismiss:!0,keyboardClose:!0});u.onDidDismiss().then(function(){var p=(0,m.Z)(function*(Z){"confirm"==Z.role&&(0,C.LE)({params:Z.data,callback:w=>{l.user=w}})});return function(Z){return p.apply(this,arguments)}}()),u.present()})()}presentModalUserChangePwd(d){var l=this;return(0,m.Z)(function*(){(yield l.modalController.create({component:v.B,componentProps:{user:l.user},mode:"md",cssClass:"ion-modal ion-modal-change-pwd",backdropDismiss:!0,keyboardClose:!0})).present()})()}signOut(){return(0,m.Z)(function*(){yield(0,P.rt)(),yield(0,T.h5)(),(0,C.Kr)({callback:()=>{window.location.replace(e.z.LANDING_PAGE)}})})()}presentModalSetting(d){var l=this;return(0,m.Z)(function*(){(yield l.modalController.create({component:a,mode:"md",cssClass:"ion-modal",backdropDismiss:!0,keyboardClose:!0})).present()})()}}return(f=h).\u0275fac=function(d){return new(d||f)(n.Y36(o.IN))},f.\u0275cmp=n.Xpm({type:f,selectors:[["app-modal-menu-user"]],decls:120,vars:77,consts:[["slot","end"],["color","dark",3,"click"],["src","../../../../assets/icon/16x16/close.svg"],[1,"ion-no-padding"],[1,"h-100","d-flex","flex-column"],[1,"flex-grow-1"],["onerror","errorAvatar(this)",3,"src"],[1,"user-name","text-ellipsis","my-3"],[1,"text-center","mt-0","mb-1"],[1,"text-center","text-muted"],["mode","ios"],["button","","detail","true","detail-icon","chevron-forward-outline",3,"href"],["button","","detail","true","detail-icon","chevron-forward-outline",3,"click"],["button","","detail","true","detail-icon","log-out-outline",3,"click"],["color","danger"],["button","","detail","false","detail-icon","chevron-forward-outline",3,"href"],["button","","detail","true","detail-icon","arrow-up-circle-outline",3,"href"],["button","","detail","false"],["button","","detail","true","detail-icon","download-outline",3,"href"],[1,"copyright"],["href","https://lacviet.vn","target","_blank"]],template:function(d,l){if(1&d&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.NdJ("click",function(){return l.close()}),n._UZ(4,"ion-icon",2),n.qZA()()()(),n.TgZ(5,"ion-content",3)(6,"div",4)(7,"div",5)(8,"ion-thumbnail"),n._UZ(9,"img",6),n.qZA(),n.TgZ(10,"div",7)(11,"h5",8)(12,"b"),n._uU(13),n.qZA()(),n.TgZ(14,"div",9),n._uU(15),n.qZA()(),n.TgZ(16,"ion-list",10)(17,"ion-list-header")(18,"ion-label")(19,"b"),n._uU(20),n.ALo(21,"translate"),n.qZA()()(),n.TgZ(22,"ion-item",11)(23,"ion-label"),n._uU(24),n.ALo(25,"translate"),n.qZA()(),n.TgZ(26,"ion-item",12),n.NdJ("click",function(p){return l.presentModalUserChangeInfo(p)}),n.TgZ(27,"ion-label"),n._uU(28),n.ALo(29,"translate"),n.qZA()(),n.TgZ(30,"ion-item",12),n.NdJ("click",function(p){return l.presentModalUserChangePwd(p)}),n.TgZ(31,"ion-label"),n._uU(32),n.ALo(33,"translate"),n.qZA()(),n.TgZ(34,"ion-item",13),n.NdJ("click",function(){return l.signOut()}),n.TgZ(35,"ion-label",14),n._uU(36),n.ALo(37,"translate"),n.qZA()()(),n.TgZ(38,"ion-list",10)(39,"ion-list-header")(40,"ion-label")(41,"b"),n._uU(42),n.ALo(43,"translate"),n.qZA()()(),n.TgZ(44,"ion-item",11)(45,"ion-label"),n._uU(46),n.ALo(47,"translate"),n.qZA()()(),n.TgZ(48,"ion-list",10)(49,"ion-list-header")(50,"ion-label")(51,"b"),n._uU(52),n.ALo(53,"translate"),n.qZA()()(),n.TgZ(54,"ion-item",15)(55,"ion-label"),n._uU(56),n.ALo(57,"translate"),n.qZA(),n.TgZ(58,"ion-badge"),n._uU(59),n.qZA()(),n.TgZ(60,"ion-item",16)(61,"ion-label"),n._uU(62),n.ALo(63,"translate"),n.qZA()()(),n.TgZ(64,"ion-list",10)(65,"ion-list-header")(66,"ion-label")(67,"b"),n._uU(68),n.ALo(69,"translate"),n.qZA()()(),n.TgZ(70,"ion-item",12),n.NdJ("click",function(p){return l.presentModalSetting(p)}),n.TgZ(71,"ion-label"),n._uU(72),n.ALo(73,"translate"),n.qZA()(),n.TgZ(74,"ion-item",17)(75,"ion-label"),n._uU(76),n.ALo(77,"translate"),n.qZA(),n._UZ(78,"app-select-language"),n.qZA()(),n.TgZ(79,"ion-list",10)(80,"ion-list-header")(81,"ion-label")(82,"b"),n._uU(83),n.ALo(84,"translate"),n.qZA()()(),n.TgZ(85,"ion-item",11)(86,"ion-label"),n._uU(87),n.ALo(88,"translate"),n.qZA()(),n.TgZ(89,"ion-item",18)(90,"ion-label"),n._uU(91),n.ALo(92,"translate"),n.qZA()()(),n.TgZ(93,"ion-list",10)(94,"ion-list-header")(95,"ion-label")(96,"b"),n._uU(97),n.ALo(98,"translate"),n.qZA()()(),n.TgZ(99,"ion-item",11)(100,"ion-label"),n._uU(101),n.ALo(102,"translate"),n.qZA()(),n.TgZ(103,"ion-item",11)(104,"ion-label"),n._uU(105),n.ALo(106,"translate"),n.qZA()(),n.TgZ(107,"ion-item",11)(108,"ion-label"),n._uU(109),n.ALo(110,"translate"),n.qZA()(),n.TgZ(111,"ion-item",11)(112,"ion-label"),n._uU(113),n.ALo(114,"translate"),n.qZA()()()(),n.TgZ(115,"div")(116,"div",19),n._uU(117,"\xa9 Copyright 2024 by "),n.TgZ(118,"a",20),n._uU(119,"L\u1ea1c Vi\u1ec7t"),n.qZA()()()()()),2&d){let u;n.xp6(9),n.Q6J("src",null!==(u=null==l.user?null:l.user.url_profilephoto)&&void 0!==u?u:"../../../assets/image/user-avatar-default.png",n.LSH),n.xp6(4),n.Oqu(null==l.user?null:l.user.fullname),n.xp6(2),n.Oqu(null==l.user?null:l.user.emailaddr),n.xp6(5),n.Oqu(n.lcZ(21,35,"Account")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.USER),n.xp6(2),n.Oqu(n.lcZ(25,37,"AccountInfo")),n.xp6(4),n.Oqu(n.lcZ(29,39,"ChangeInfo")),n.xp6(4),n.Oqu(n.lcZ(33,41,"ChangePassword")),n.xp6(4),n.Oqu(n.lcZ(37,43,"SignOut")),n.xp6(6),n.Oqu(n.lcZ(43,45,"MyData")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.DASHBOARD),n.xp6(2),n.Oqu(n.lcZ(47,47,"Lecture")),n.xp6(6),n.Oqu(n.lcZ(53,49,"Membership")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.USER_MEMBERSHIP),n.xp6(2),n.Oqu(n.lcZ(57,51,"MemberInfo")),n.xp6(3),n.Oqu(null==l.response.productpackageapplied?null:l.response.productpackageapplied.productpackage_key),n.xp6(1),n.Q6J("href",l.APP_ROUTE.PRICING),n.xp6(2),n.Oqu(n.lcZ(63,53,"AccountUpgrade")),n.xp6(6),n.Oqu(n.lcZ(69,55,"General")),n.xp6(4),n.Oqu(n.lcZ(73,57,"Setting")),n.xp6(4),n.Oqu(n.lcZ(77,59,"Language")),n.xp6(7),n.Oqu(n.lcZ(84,61,"ForUser")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.HELP),n.xp6(2),n.Oqu(n.lcZ(88,63,"UseGuide")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.HOME_DOWNLOAD_APP),n.xp6(2),n.Oqu(n.lcZ(92,65,"DownloadAppTabca")),n.xp6(6),n.Oqu(n.lcZ(98,67,"ForTabca")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.ABOUT_US),n.xp6(2),n.Oqu(n.lcZ(102,69,"AboutUs")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.POLICIES_AND_REGULATIONS),n.xp6(2),n.Oqu(n.lcZ(106,71,"PoliciesAndRegulations")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.SALES_AND_PAYMENT_POLICIES),n.xp6(2),n.Oqu(n.lcZ(110,73,"SalesAndPaymentPolicies")),n.xp6(2),n.Q6J("href",l.APP_ROUTE.TERMS_OF_USE),n.xp6(2),n.Oqu(n.lcZ(114,75,"TermsOfUse"))}},dependencies:[o.yp,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.yh,o.Bs,o.sr,c.j,M.X$],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:40px;margin:1rem 0 1rem 1rem}ion-thumbnail[_ngcontent-%COMP%]{--size: 140px;--border-radius: 50%;margin:auto}.user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-child{visibility:hidden}.user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{fill:#4d4f60;font-size:16px}.copyright[_ngcontent-%COMP%]{padding:1rem 0 .5rem;color:#666;text-align:center;font-size:.75rem;font-weight:400;line-height:1.5rem}.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration-line:underline}"]}),h})()},9416:(E,O,r)=>{r.d(O,{w:()=>n});var m=r(5861),P=r(5328),C=r(7308),e=r(5879),t=r(3536),v=r(6814),g=r(6223),b=r(3999);function T(o,_){if(1&o&&(e.TgZ(0,"div",8)(1,"div",14),e._uU(2),e.qZA()()),2&o){const M=e.oxw();e.xp6(2),e.Oqu(M.response.returnmsg)}}const A=function(){return{standalone:!0}};let n=(()=>{var o;class _{constructor(i,a,c){this.modalController=i,this.toastController=a,this.loadingController=c,this.isfullscreen=!1,this.dataForm={},this.configs=[]}ngOnInit(){var i,a,c;this.isfullscreen=window.document.body.classList.contains("modal-fullscreen"),this.dataForm.userid=null===(i=this.user)||void 0===i?void 0:i.userid,this.dataForm.fullname=null===(a=this.user)||void 0===a?void 0:a.fullname,this.dataForm.emailaddr=null===(c=this.user)||void 0===c?void 0:c.emailaddr}toggleFullScreen(){this.isfullscreen?window.document.body.classList.remove("modal-fullscreen"):window.document.body.classList.add("modal-fullscreen"),this.isfullscreen=window.document.body.classList.contains("modal-fullscreen")}close(){return this.modalController.dismiss(null,"cancel")}switchModal(i){return this.modalController.dismiss({modalName:i,dataForm:this.dataForm},"switch")}changeFullName(i){this.dataForm.fullname=i}keypressFullName(i){(i.keyCode||i.which||i.charCode||0)==C.s.Enter&&this.formSubmit(i)}formSubmit(i){var a=this;return(0,m.Z)(function*(){var c;if(i.preventDefault(),!a.dataForm.fullname)return;let s=null===(c=a.dataForm.fullname)||void 0===c?void 0:c.split(" ");a.dataForm.firstname=null==s?void 0:s.pop(),a.dataForm.lastname=null==s?void 0:s.join(" ");let f=yield a.loadingController.create({message:"\u0110ang t\u1ea3i..."});(0,P.s2)({loading:h=>{h?f.present():f.dismiss()},params:a.dataForm,callback:h=>{a.response=h,0==(null==h?void 0:h.returncode)&&a.modalController.dismiss(a.dataForm,"confirm")}})})()}}return(o=_).\u0275fac=function(i){return new(i||o)(e.Y36(t.IN),e.Y36(t.yF),e.Y36(t.HT))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-modal-user-change-info"]],inputs:{user:"user"},decls:35,vars:24,consts:[["slot","end"],["color","dark",1,"d-none","d-md-block",3,"click"],[3,"src"],["color","dark",3,"click"],["src","../../../../assets/icon/16x16/close.svg"],[1,"container-form"],["src","../../../../../assets/image/logo.svg","alt","Tabca"],[3,"submit"],[1,"form-group"],["type","text","name","fullname","minlength","{6}","maxlength","{32}","required","","autofocus","",1,"form-control",3,"placeholder","ngModel","ngModelOptions","keypress","ngModelChange"],[1,"form-group","mb-5"],["type","email","name","emailaddr","minlength","{6}","maxlength","{32}","required","","autofocus","","readonly","",1,"form-control",3,"placeholder","ngModel"],["class","form-group",4,"ngIf"],["type","submit",1,"btn"],[1,"text-danger","text-center"]],template:function(i,a){1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.NdJ("click",function(){return a.toggleFullScreen()}),e._UZ(4,"ion-icon",2),e.qZA(),e.TgZ(5,"ion-button",3),e.NdJ("click",function(){return a.close()}),e._UZ(6,"ion-icon",4),e.qZA()()()(),e.TgZ(7,"ion-content")(8,"div",5),e._UZ(9,"img",6),e.TgZ(10,"h1"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"form",7),e.NdJ("submit",function(s){return a.formSubmit(s)}),e.TgZ(14,"div",8)(15,"label"),e._uU(16),e.ALo(17,"translate"),e.TgZ(18,"span"),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"input",9),e.NdJ("keypress",function(s){return a.keypressFullName(s)})("ngModelChange",function(s){return a.changeFullName(s)}),e.ALo(21,"translate"),e.qZA()(),e.TgZ(22,"div",10)(23,"label"),e._uU(24),e.ALo(25,"translate"),e.TgZ(26,"span"),e._uU(27,"*"),e.qZA()(),e._UZ(28,"input",11),e.ALo(29,"translate"),e.qZA(),e.YNc(30,T,3,1,"div",12),e.TgZ(31,"div",8)(32,"button",13),e._uU(33),e.ALo(34,"translate"),e.qZA()()()()()),2&i&&(e.xp6(4),e.Q6J("src",a.isfullscreen?"assets/icon/16x16/fullscreen-exit.svg":"assets/icon/16x16/fullscreen.svg"),e.xp6(7),e.Oqu(e.lcZ(12,11,"ChangeInfo")),e.xp6(5),e.hij("",e.lcZ(17,13,"YourName")," "),e.xp6(4),e.s9C("placeholder",e.lcZ(21,15,"EnterYourName")),e.Q6J("ngModel",a.dataForm.fullname)("ngModelOptions",e.DdM(23,A)),e.xp6(4),e.hij("",e.lcZ(25,17,"Email")," "),e.xp6(4),e.s9C("placeholder",e.lcZ(29,19,"EnterEmail")),e.Q6J("ngModel",a.dataForm.emailaddr),e.xp6(2),e.Q6J("ngIf",a.response),e.xp6(3),e.Oqu(e.lcZ(34,21,"Confirm")))},dependencies:[v.O5,g._Y,g.Fj,g.JJ,g.JL,g.Q7,g.wO,g.nD,g.On,g.F,t.YG,t.Sm,t.W2,t.Gu,t.gu,t.sr,b.X$],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{box-shadow:none}.container-form[_ngcontent-%COMP%]{max-width:420px;padding:0 1rem;margin:auto}.container-form[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:60px}.container-form[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:1rem 0 2rem;font-size:32px;font-weight:700;line-height:40px}.container-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{color:#1f1f39;font-size:14px}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#858597}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{margin-bottom:5px;color:#333}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff3131}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;border:.5px solid #B8B8D2;background:#E8F0FE;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .for-got-pwd[_ngcontent-%COMP%]{margin-top:-.5rem;text-align:right}"]}),_})()},3300:(E,O,r)=>{r.d(O,{B:()=>n});var m=r(5861),P=r(5328),C=r(7308),e=r(5879),t=r(3536),v=r(6814),g=r(6223),b=r(3999);function T(o,_){if(1&o&&(e.TgZ(0,"div",8)(1,"div",16),e._uU(2),e.qZA()()),2&o){const M=e.oxw();e.xp6(2),e.Oqu(M.response.returnmsg)}}const A=function(){return{standalone:!0}};let n=(()=>{var o;class _{constructor(i,a,c){this.modalController=i,this.toastController=a,this.loadingController=c,this.isfullscreen=!1,this.dataForm={}}ngOnInit(){var i;this.isfullscreen=window.document.body.classList.contains("modal-fullscreen"),this.dataForm.emailaddr=null===(i=this.user)||void 0===i?void 0:i.emailaddr}toggleFullScreen(){this.isfullscreen?window.document.body.classList.remove("modal-fullscreen"):window.document.body.classList.add("modal-fullscreen"),this.isfullscreen=window.document.body.classList.contains("modal-fullscreen")}close(){return this.modalController.dismiss(null,"cancel")}switchModal(i){return this.modalController.dismiss({modalName:i,dataForm:this.dataForm},"switch")}changePwd(i){this.dataForm.pwd=i}changeNewPwd(i){this.dataForm.newpwd=i}changeNewPwd2(i){this.dataForm.newpwd2=i}keypressPwd(i){(i.keyCode||i.which||i.charCode||0)==C.s.Enter&&this.formSubmit(i)}formSubmit(i){var a=this;return(0,m.Z)(function*(){if(i.preventDefault(),!a.dataForm.emailaddr||!a.dataForm.pwd||!a.dataForm.newpwd||a.dataForm.newpwd!=a.dataForm.newpwd2)return;let c=yield a.loadingController.create({message:"\u0110ang t\u1ea3i..."});(0,P.xK)({loading:s=>{s?c.present():c.dismiss()},params:a.dataForm,callback:s=>{a.response=s,s&&0==s.returncode&&a.close()}})})()}}return(o=_).\u0275fac=function(i){return new(i||o)(e.Y36(t.IN),e.Y36(t.yF),e.Y36(t.HT))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-modal-user-change-pwd"]],inputs:{user:"user"},decls:48,vars:35,consts:[["slot","end"],["color","dark",1,"d-none","d-md-block",3,"click"],[3,"src"],["color","dark",3,"click"],["src","../../../../assets/icon/16x16/close.svg"],[1,"container-form"],["src","../../../../../assets/image/logo.svg","alt","Tabca"],[3,"submit"],[1,"form-group"],["type","email","name","emailaddr","minlength","{6}","maxlength","{32}","required","","autofocus","","readonly","",1,"form-control",3,"placeholder","ngModel"],["type","password","name","pwd","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["type","password","name","newpwd","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"form-group","mb-5"],["type","password","name","newpwd2","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"ngModel","ngModelOptions","keypress","ngModelChange"],["class","form-group",4,"ngIf"],["type","submit",1,"btn"],[1,"text-danger","text-center"]],template:function(i,a){1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.NdJ("click",function(){return a.toggleFullScreen()}),e._UZ(4,"ion-icon",2),e.qZA(),e.TgZ(5,"ion-button",3),e.NdJ("click",function(){return a.close()}),e._UZ(6,"ion-icon",4),e.qZA()()()(),e.TgZ(7,"ion-content")(8,"div",5),e._UZ(9,"img",6),e.TgZ(10,"h1"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"form",7),e.NdJ("submit",function(s){return a.formSubmit(s)}),e.TgZ(14,"div",8)(15,"label"),e._uU(16),e.ALo(17,"translate"),e.TgZ(18,"span"),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",9),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"div",8)(23,"label"),e._uU(24),e.ALo(25,"translate"),e.TgZ(26,"span"),e._uU(27,"*"),e.qZA()(),e.TgZ(28,"input",10),e.NdJ("ngModelChange",function(s){return a.changePwd(s)}),e.qZA()(),e.TgZ(29,"div",8)(30,"label"),e._uU(31),e.ALo(32,"translate"),e.TgZ(33,"span"),e._uU(34,"*"),e.qZA()(),e.TgZ(35,"input",11),e.NdJ("ngModelChange",function(s){return a.changeNewPwd(s)}),e.qZA()(),e.TgZ(36,"div",12)(37,"label"),e._uU(38),e.ALo(39,"translate"),e.TgZ(40,"span"),e._uU(41,"*"),e.qZA()(),e.TgZ(42,"input",13),e.NdJ("keypress",function(s){return a.keypressPwd(s)})("ngModelChange",function(s){return a.changeNewPwd2(s)}),e.qZA()(),e.YNc(43,T,3,1,"div",14),e.TgZ(44,"div",8)(45,"button",15),e._uU(46),e.ALo(47,"translate"),e.qZA()()()()()),2&i&&(e.xp6(4),e.Q6J("src",a.isfullscreen?"assets/icon/16x16/fullscreen-exit.svg":"assets/icon/16x16/fullscreen.svg"),e.xp6(7),e.Oqu(e.lcZ(12,18,"UpdatePassword")),e.xp6(5),e.hij("",e.lcZ(17,20,"Email")," "),e.xp6(4),e.s9C("placeholder",e.lcZ(21,22,"EnterEmail")),e.Q6J("ngModel",a.dataForm.emailaddr),e.xp6(4),e.hij("",e.lcZ(25,24,"OldPassword")," "),e.xp6(4),e.Q6J("ngModel",a.dataForm.pwd)("ngModelOptions",e.DdM(32,A)),e.xp6(3),e.hij("",e.lcZ(32,26,"NewPassword")," "),e.xp6(4),e.Q6J("ngModel",a.dataForm.newpwd)("ngModelOptions",e.DdM(33,A)),e.xp6(3),e.hij("",e.lcZ(39,28,"ConfirmPassword")," "),e.xp6(4),e.Tol(a.dataForm.newpwd&&a.dataForm.newpwd2?a.dataForm.newpwd==a.dataForm.newpwd2?"is-valid":"is-invalid":""),e.Q6J("ngModel",a.dataForm.newpwd2)("ngModelOptions",e.DdM(34,A)),e.xp6(1),e.Q6J("ngIf",a.response),e.xp6(3),e.Oqu(e.lcZ(47,30,"SetNewPassword")))},dependencies:[v.O5,g._Y,g.Fj,g.JJ,g.JL,g.Q7,g.wO,g.nD,g.On,g.F,t.YG,t.Sm,t.W2,t.Gu,t.gu,t.sr,b.X$],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{box-shadow:none}.container-form[_ngcontent-%COMP%]{max-width:420px;padding:0 1rem;margin:auto}.container-form[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:60px}.container-form[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:1rem 0 2rem;font-size:32px;font-weight:700;line-height:40px}.container-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{color:#1f1f39;font-size:14px}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#858597}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{margin-bottom:5px;color:#333}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff3131}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .for-got-pwd[_ngcontent-%COMP%]{margin-top:-.5rem;text-align:right}"]}),_})()}}]);