"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[715],{8662:(M,m,c)=>{c.d(m,{A:()=>i});const i=(0,c(2726).fo)("Device",{web:()=>c.e(7116).then(c.bind(c,7116)).then(g=>new g.DeviceWeb)})},5328:(M,m,c)=>{c.d(m,{$y:()=>A,Es:()=>v,e8:()=>_,f9:()=>g,no:()=>i,s2:()=>p,u7:()=>f,xK:()=>P});var u=c(4459);function i(e){e.params=e.params||{},(0,u.cd)({url:"api/User/Detail",params:{userid:e.params.userid||null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(a)},loading:e.loading})}function g(e){e.params=e.params||{},(0,u.T1)({url:"api/User/SignIn",params:{emailaddr:e.params.emailaddr||null,pwd:e.params.pwd||null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(e,a)},loading:e.loading})}function f(e){e.params=e.params||{},(0,u.T1)({url:"api/User/SignUp",params:{firstname:e.params.firstname||null,lastname:e.params.lastname||null,emailaddr:e.params.emailaddr||null,pwd:e.params.pwd||null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(e,a)},loading:e.loading})}function v(e){e.params=e.params||{},(0,u.T1)({url:"api/User/Active",params:{emailaddr:e.params.emailaddr||null,activationcode:e.params.activationcode||null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(e,a)},loading:e.loading})}function P(e){e.params=e.params||{},(0,u.T1)({url:"api/User/ChangePassword",params:{emailaddr:e.params.emailaddr||null,pwd:e.params.pwd||null,forgotpwdcode:e.params.forgotpwdcode||null,newpwd:e.params.newpwd||null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(e,a)},loading:e.loading})}function p(e){e.params=e.params||{},(0,u.T1)({url:"api/User/UpdateInfo",params:{userid:e.params.userid||null,firstname:e.params.firstname||null,lastname:e.params.lastname||null,emailaddr:e.params.emailaddr||null,mobilecountrycode:e.params.mobilecountrycode||null,mobile:e.params.mobile||null,introduce:e.params.introduce||null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(e,a)},loading:e.loading})}function _(e){e.params=e.params||{},(0,u.T1)({url:"api/users/forgotpassword",params:{emailaddr:e.params.emailaddr||null},success:a=>{if("function"==typeof e.callback){var n=a.data||{};n.returncode=null!=n.returncode?n.returncode:n.ReturnCode,n.returnmsg=null!=n.returnmsg?n.returnmsg:n.ReturnMsg,n.id=null!=n.id?n.id:n.AccountID,e.callback(n)}},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(e,a)},loading:e.loading})}function A(e){e.params=e.params||{},(0,u.T1)({url:"api/User/UpdatePhoto",params:{userid:e.params.userid||null,profilephoto:e.params.avatar||null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{"function"==typeof e.callback&&e.callback(null),console.error(e,a)},loading:e.loading})}},715:(M,m,c)=>{c.r(m),c.d(m,{UserActivePageModule:()=>D});var u=c(6814),i=c(6223),g=c(1773),f=c(8935),v=c(5861),P=c(8662),p=c(4459),_=c(5328),A=c(3377),b=c(2695),e=c(8186),a=c(553),n=c(2948),C=c(6593),U=c(2088);function x(r,d){if(1&r){const o=n.EpF();n.ynx(0),n.TgZ(1,"h4"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"p",8)(5,"span"),n._uU(6),n.ALo(7,"translate"),n.qZA(),n._UZ(8,"br"),n.TgZ(9,"span"),n._uU(10),n.ALo(11,"translate"),n.TgZ(12,"a")(13,"b"),n._uU(14),n.qZA()(),n.TgZ(15,"span",9),n._uU(16),n.ALo(17,"translate"),n.qZA()(),n._UZ(18,"br"),n.TgZ(19,"span"),n._uU(20),n.ALo(21,"translate"),n.qZA()(),n.TgZ(22,"p",10)(23,"button",11),n.NdJ("click",function(){n.CHM(o);const l=n.oxw();return n.KtG(l.goToSignIn())}),n._uU(24),n.ALo(25,"translate"),n.qZA()(),n.BQk()}if(2&r){const o=n.oxw();n.xp6(2),n.Oqu(n.lcZ(3,7,"AccountActivationSuccessful")),n.xp6(4),n.hij("",n.lcZ(7,9,"WelcomeTo")," Tabca,"),n.xp6(4),n.hij("",n.lcZ(11,11,"Account")," "),n.xp6(4),n.Oqu(o.dataForm.emailaddr),n.xp6(2),n.Oqu(n.lcZ(17,13,"AlreadyActivated")),n.xp6(4),n.Oqu(n.lcZ(21,15,"LogInNowToExperienceTheProduct")),n.xp6(4),n.Oqu(n.lcZ(25,17,"LogIn"))}}function O(r,d){if(1&r&&(n.TgZ(0,"option",21),n._uU(1),n.qZA()),2&r){const o=d.$implicit;n.Q6J("value",o.madonvi),n.xp6(1),n.Oqu(o.tendv)}}const T=function(){return{standalone:!0}};function Z(r,d){if(1&r){const o=n.EpF();n.TgZ(0,"div",14)(1,"label"),n._uU(2),n.ALo(3,"translate"),n.TgZ(4,"span"),n._uU(5,"*"),n.qZA()(),n.TgZ(6,"select",19),n.NdJ("ngModelChange",function(l){n.CHM(o);const s=n.oxw(2);return n.KtG(s.changeDonVi(l))}),n.YNc(7,O,2,2,"option",20),n.qZA()()}if(2&r){const o=n.oxw(2);n.xp6(2),n.hij("",n.lcZ(3,4,"Unit")," "),n.xp6(4),n.Q6J("ngModel",o.dataForm.madonvi)("ngModelOptions",n.DdM(6,T)),n.xp6(1),n.Q6J("ngForOf",o.configs)}}function y(r,d){if(1&r&&(n.TgZ(0,"p",22)(1,"span"),n._uU(2),n.qZA()()),2&r){const o=n.oxw(2);n.xp6(2),n.Oqu(o.dataRes.returnmsg)}}function k(r,d){if(1&r){const o=n.EpF();n.ynx(0),n.TgZ(1,"h1"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"form",12),n.NdJ("submit",function(l){n.CHM(o);const s=n.oxw();return n.KtG(s.formSubmit(l))}),n.YNc(5,Z,8,7,"div",13),n.TgZ(6,"div",14)(7,"label"),n._uU(8),n.ALo(9,"translate"),n.TgZ(10,"span"),n._uU(11,"*"),n.qZA()(),n._UZ(12,"input",15),n.qZA(),n.TgZ(13,"div",16)(14,"button",17),n._uU(15),n.ALo(16,"translate"),n.qZA()()(),n.YNc(17,y,3,1,"p",18),n.BQk()}if(2&r){const o=n.oxw();n.xp6(2),n.Oqu(n.lcZ(3,6,"ActiveAccount")),n.xp6(3),n.Q6J("ngIf",o.configs.length>1),n.xp6(3),n.hij("",n.lcZ(9,8,"Email")," "),n.xp6(4),n.Q6J("ngModel",o.dataForm.emailaddr),n.xp6(3),n.Oqu(n.lcZ(16,10,"Confirm")),n.xp6(2),n.Q6J("ngIf",o.dataRes)}}const w=[{path:"",component:(()=>{var r;class d{constructor(t,l,s,h){this.router=t,this.activatedRoute=l,this.titleService=s,this.toastController=h,this.appsettings={},this.configs=[],this.dataForm={},s.setTitle("K\xedch ho\u1ea1t t\xe0i kho\u1ea3n")}ngOnInit(){var t=this;if(this.dataForm.emailaddr=this.activatedRoute.snapshot.queryParamMap.get("email")||"",this.dataForm.activationcode=this.activatedRoute.snapshot.queryParamMap.get("code")||"",!this.dataForm.emailaddr||!this.dataForm.activationcode)return this.backToHome();(0,v.Z)(function*(){(0,A.lL)({}),yield(0,p.rt)(),t.appsettings=yield(0,p.H0)(),t.dataForm.madonvi=t.appsettings.madonvi;let l=yield P.A.getId();t.dataForm.devicekey=null==l?void 0:l.identifier,t.configs=(yield(0,p.dV)())||[],t.configs&&t.configs.length?1==t.configs.length&&(t.dataForm.madonvi=t.configs[0].madonvi):t.dataForm.madonvi=a.N.default_donvi,t.dataForm.madonvi&&t.formSubmit()})()}backToHome(){window.location.replace(b.z.LANDING_PAGE)}goToSignIn(){window.location.replace(b.z.LANDING_PAGE+"?require=signin")}changeDonVi(t){var l=this;return(0,v.Z)(function*(){l.dataForm.madonvi=t})()}formSubmit(t){var l=this;return(0,v.Z)(function*(){null==t||t.preventDefault(),l.dataForm.emailaddr&&l.dataForm.activationcode&&(yield(0,p.TT)(l.dataForm.madonvi),(0,_.Es)({params:l.dataForm,callback:s=>{(0,e.B)(l.toastController,{},s).then(h=>{h.onDidDismiss().then(E=>{0==(null==s?void 0:s.returncode)&&window.location.replace(b.z.LANDING_PAGE+"?require=signin")}),h.present()})}}))})()}}return(r=d).\u0275fac=function(t){return new(t||r)(n.Y36(f.F0),n.Y36(f.gz),n.Y36(C.Dx),n.Y36(g.yF))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-user-active"]],decls:9,vars:2,consts:[["scroll-x","false","scroll-y","false"],["slot","fixed","vertical","top","horizontal","start"],["size","small",3,"click"],["name","arrow-back-outline"],[1,"container-main","overflow-auto","d-flex","w-100","h-100","align-items-center","justify-content-center"],[1,"container-form"],["src","../../../assets/image/logo.svg","alt","Tabca"],[4,"ngIf"],[1,"text-left"],[1,"text-lowercase"],[1,"mt-4","mb-3"],["type","button",1,"btn","btn-sign-in",3,"click"],[3,"submit"],["class","form-group",4,"ngIf"],[1,"form-group"],["type","email","name","emailaddr","minlength","{6}","maxlength","{32}","required","","autofocus","","placeholder","your-email@email.com","readonly","",1,"form-control",3,"ngModel"],[1,"form-group","mt-5"],["type","submit",1,"btn"],["class","text-danger",4,"ngIf"],["interface","popover","justify","end",1,"custom-select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"text-danger"]],template:function(t,l){1&t&&(n.TgZ(0,"ion-content",0)(1,"ion-fab",1)(2,"ion-fab-button",2),n.NdJ("click",function(){return l.backToHome()}),n._UZ(3,"ion-icon",3),n.qZA()(),n.TgZ(4,"div",4)(5,"div",5),n._UZ(6,"img",6),n.YNc(7,x,26,19,"ng-container",7),n.YNc(8,k,18,12,"ng-container",7),n.qZA()()()),2&t&&(n.xp6(7),n.Q6J("ngIf",0==(null==l.dataRes?null:l.dataRes.returncode)),n.xp6(1),n.Q6J("ngIf",0!=(null==l.dataRes?null:l.dataRes.returncode)))},dependencies:[u.sg,u.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.On,i.F,g.W2,g.IJ,g.W4,g.gu,U.X$],styles:[".container-main[_ngcontent-%COMP%]{padding:.5rem;background-image:url(bg-join-and-share.d53a3207da518edb.png);background-repeat:no-repeat;background-size:cover;background-position:center center}.container-form[_ngcontent-%COMP%]{width:420px;padding:2rem 2rem 1rem;margin:auto;border-radius:10px;background:#fff;box-shadow:0 0 20px #00000026}.container-form[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:60px}.container-form[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:1rem 0 2rem;font-size:32px;font-weight:700;line-height:40px}.container-form[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{margin:1rem 0 .5rem;font-size:20px;font-weight:500;line-height:26px}.container-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{color:#1f1f39;font-size:14px}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#858597}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   button.btn-sign-in[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{margin-bottom:5px;color:#333}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff3131}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;border:.5px solid #B8B8D2;background-color:#e8f0fe;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .for-got-pwd[_ngcontent-%COMP%]{margin-top:-.5rem;text-align:right}"]}),d})()}];let F=(()=>{var r;class d{}return(r=d).\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[f.Bz.forChild(w),f.Bz]}),d})();var R=c(9074);let D=(()=>{var r;class d{}return(r=d).\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[u.ez,i.u5,g.Pc,F,R.V]}),d})()}}]);