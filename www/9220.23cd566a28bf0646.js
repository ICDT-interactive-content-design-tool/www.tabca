"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9220],{9316:(k,p,t)=>{t.d(p,{p:()=>d});const d=(0,t(5083).F3)("Device",{web:()=>t.e(8622).then(t.bind(t,8622)).then(f=>new f.DeviceWeb)})},9946:(k,p,t)=>{t.d(p,{LZ:()=>M,NS:()=>d,Wm:()=>C,_5:()=>f,bI:()=>b,il:()=>h,qi:()=>P,wQ:()=>w});var i=t(5972);function d(e){e.params=e.params||{},(0,i.hm)({url:"api/User/Detail",params:{userid:e.params.userid||null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(n)},loading:e.loading,loadingController:e.loadingController})}function f(e){e.params=e.params||{},(0,i.Ll)({url:"api/User/SignIn",params:{emailaddr:e.params.emailaddr||null,pwd:e.params.pwd||null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(e,n)},loading:e.loading,loadingController:e.loadingController})}function P(e){e.params=e.params||{},(0,i.Ll)({url:"api/User/SignUp",params:{firstname:e.params.firstname||null,lastname:e.params.lastname||null,emailaddr:e.params.emailaddr||null,pwd:e.params.pwd||null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(e,n)},loading:e.loading,loadingController:e.loadingController})}function w(e){e.params=e.params||{},(0,i.Ll)({url:"api/User/Active",params:{emailaddr:e.params.emailaddr||null,activationcode:e.params.activationcode||null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(e,n)},loading:e.loading,loadingController:e.loadingController})}function b(e){e.params=e.params||{},(0,i.Ll)({url:"api/User/ChangePassword",params:{emailaddr:e.params.emailaddr||null,pwd:e.params.pwd||null,forgotpwdcode:e.params.forgotpwdcode||null,newpwd:e.params.newpwd||null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(e,n)},loading:e.loading,loadingController:e.loadingController})}function C(e){e.params=e.params||{},(0,i.Ll)({url:"api/User/UpdateInfo",params:{userid:e.params.userid||null,firstname:e.params.firstname||null,lastname:e.params.lastname||null,emailaddr:e.params.emailaddr||null,mobilecountrycode:e.params.mobilecountrycode||null,mobile:e.params.mobile||null,introduce:e.params.introduce||null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(e,n)},loading:e.loading,loadingController:e.loadingController})}function h(e){e.params=e.params||{},(0,i.Ll)({url:"api/users/forgotpassword",params:{emailaddr:e.params.emailaddr||null},success:n=>{if("function"==typeof e.callback){var c=n.data||{};c.returncode=null!=c.returncode?c.returncode:c.ReturnCode,c.returnmsg=null!=c.returnmsg?c.returnmsg:c.ReturnMsg,c.id=null!=c.id?c.id:c.AccountID,e.callback(c)}},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(e,n)},loading:e.loading,loadingController:e.loadingController})}function M(e){e.params=e.params||{},(0,i.Ll)({url:"api/User/UpdatePhoto",params:{userid:e.params.userid||null,profilephoto:e.params.avatar||null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{"function"==typeof e.callback&&e.callback(),console.error(e,n)},loading:e.loading,loadingController:e.loadingController})}},9220:(k,p,t)=>{t.r(p),t.d(p,{UserSetPwdPageModule:()=>T});var i=t(177),d=t(9417),f=t(6637),P=t(3658),w=t(467),b=t(9316),C=t(8408),h=t(5972),M=t(9946),F=t(2635),e=t(8833),n=t(5414),c=t(5312),a=t(4438),U=t(345),y=t(31);const v=()=>({standalone:!0});function O(o,g){if(1&o&&(a.j41(0,"option",17),a.EFF(1),a.k0s()),2&o){const s=g.$implicit;a.Y8G("value",s.madonvi),a.R7$(),a.JRh(s.tendv)}}function S(o,g){if(1&o){const s=a.RV6();a.j41(0,"div",9)(1,"label"),a.EFF(2),a.nI1(3,"translate"),a.j41(4,"span"),a.EFF(5,"*"),a.k0s()(),a.j41(6,"select",15),a.bIt("ngModelChange",function(l){a.eBV(s);const m=a.XpG();return a.Njj(m.changeDonVi(l))}),a.DNE(7,O,2,2,"option",16),a.k0s()()}if(2&o){const s=a.XpG();a.R7$(2),a.SpI("",a.bMT(3,4,"Unit")," "),a.R7$(4),a.Y8G("ngModel",s.dataForm.madonvi)("ngModelOptions",a.lJ4(6,v)),a.R7$(),a.Y8G("ngForOf",s.configs)}}const R=[{path:"",component:(()=>{var o;class g{constructor(r,l,m,u){this.router=r,this.activatedRoute=l,this.titleService=m,this.toastController=u,this.appsettings={},this.configs=[],this.dataForm={},this.inputPwdType="password",m.setTitle("\u0110\u1eb7t m\u1eadt kh\u1ea9u m\u1edbi")}ngOnInit(){var r=this;if(this.dataForm.emailaddr=this.activatedRoute.snapshot.queryParamMap.get("email")||"",this.dataForm.forgotpwdcode=this.activatedRoute.snapshot.queryParamMap.get("code")||"",!this.dataForm.emailaddr||!this.dataForm.forgotpwdcode)return this.backToHome();(0,w.A)(function*(){(0,F.kD)({}),yield(0,h.jQ)(),r.appsettings=yield(0,h.AC)(),r.dataForm.madonvi=r.appsettings.madonvi;let l=yield b.p.getId();r.dataForm.devicekey=null==l?void 0:l.identifier,r.configs=(yield(0,h.zu)())||[],r.configs&&r.configs.length?1==r.configs.length&&(r.dataForm.madonvi=r.configs[0].madonvi):r.dataForm.madonvi=c.c.default_donvi})()}backToHome(){window.location.replace(e._.LANDING_PAGE)}changeDonVi(r){var l=this;return(0,w.A)(function*(){l.dataForm.madonvi=r})()}changeNewPwd(r){this.dataForm.newpwd=r}changeNewPwd2(r){this.dataForm.newpwd2=r}keypressPwd(r){(r.keyCode||r.which||r.charCode||0)==C.r_I.Enter&&this.formSubmit(r)}formSubmit(r){var l=this;return(0,w.A)(function*(){r.preventDefault(),l.dataForm.emailaddr&&l.dataForm.forgotpwdcode&&l.dataForm.newpwd&&l.dataForm.newpwd==l.dataForm.newpwd2&&(yield(0,h.MS)(l.dataForm.madonvi),(0,M.bI)({params:l.dataForm,callback:m=>{(0,n.c)(l.toastController,{},m).then(u=>u.present()),0==(null==m?void 0:m.returncode)&&setTimeout(()=>{window.location.replace(e._.LANDING_PAGE+"?require=signin")},3e3)}}))})()}}return(o=g).\u0275fac=function(r){return new(r||o)(a.rXU(P.Ix),a.rXU(P.nX),a.rXU(U.hE),a.rXU(f.K_))},o.\u0275cmp=a.VBU({type:o,selectors:[["app-user-set-pwd"]],decls:37,vars:25,consts:[["scroll-x","false","scroll-y","false"],["slot","fixed","vertical","top","horizontal","start"],["size","small",3,"click"],["name","arrow-back-outline"],[1,"container-main","overflow-auto","d-flex","w-100","h-100","align-items-center","justify-content-center"],[1,"container-form"],["src","../../../assets/image/logo.svg","alt","Tabca"],[3,"submit"],["class","form-group",4,"ngIf"],[1,"form-group"],["type","email","name","emailaddr","minlength","{6}","maxlength","{32}","required","","autofocus","","placeholder","your-email@email.com","readonly","",1,"form-control",3,"ngModel"],["type","password","name","newpwd","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"ngModelChange","ngModel","ngModelOptions"],["type","password","name","newpwd2","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"keypress","ngModelChange","ngModel","ngModelOptions"],[1,"form-group","mt-5"],["type","submit",1,"btn"],["interface","popover","justify","end",1,"custom-select",3,"ngModelChange","ngModel","ngModelOptions"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(r,l){1&r&&(a.j41(0,"ion-content",0)(1,"ion-fab",1)(2,"ion-fab-button",2),a.bIt("click",function(){return l.backToHome()}),a.nrm(3,"ion-icon",3),a.k0s()(),a.j41(4,"div",4)(5,"div",5),a.nrm(6,"img",6),a.j41(7,"h1"),a.EFF(8),a.nI1(9,"translate"),a.k0s(),a.j41(10,"form",7),a.bIt("submit",function(u){return l.formSubmit(u)}),a.DNE(11,S,8,7,"div",8),a.j41(12,"div",9)(13,"label"),a.EFF(14),a.nI1(15,"translate"),a.j41(16,"span"),a.EFF(17,"*"),a.k0s()(),a.nrm(18,"input",10),a.k0s(),a.j41(19,"div",9)(20,"label"),a.EFF(21),a.nI1(22,"translate"),a.j41(23,"span"),a.EFF(24,"*"),a.k0s()(),a.j41(25,"input",11),a.bIt("ngModelChange",function(u){return l.changeNewPwd(u)}),a.k0s()(),a.j41(26,"div",9)(27,"label"),a.EFF(28),a.nI1(29,"translate"),a.j41(30,"span"),a.EFF(31,"*"),a.k0s()(),a.j41(32,"input",12),a.bIt("keypress",function(u){return l.keypressPwd(u)})("ngModelChange",function(u){return l.changeNewPwd2(u)}),a.k0s()(),a.j41(33,"div",13)(34,"button",14),a.EFF(35),a.nI1(36,"translate"),a.k0s()()()()()()),2&r&&(a.R7$(8),a.JRh(a.bMT(9,13,"UpdatePassword")),a.R7$(3),a.Y8G("ngIf",l.configs.length>1),a.R7$(3),a.SpI("",a.bMT(15,15,"Email")," "),a.R7$(4),a.Y8G("ngModel",l.dataForm.emailaddr),a.R7$(3),a.SpI("",a.bMT(22,17,"NewPassword")," "),a.R7$(4),a.Y8G("ngModel",l.dataForm.newpwd)("ngModelOptions",a.lJ4(23,v)),a.R7$(3),a.SpI("",a.bMT(29,19,"ConfirmPassword")," "),a.R7$(4),a.HbH(l.dataForm.newpwd&&l.dataForm.newpwd2?l.dataForm.newpwd==l.dataForm.newpwd2?"is-valid":"is-invalid":""),a.Y8G("ngModel",l.dataForm.newpwd2)("ngModelOptions",a.lJ4(24,v)),a.R7$(3),a.JRh(a.bMT(36,21,"SetNewPassword")))},dependencies:[i.Sq,i.bT,d.qT,d.xH,d.y7,d.me,d.wz,d.BC,d.cb,d.YS,d.xh,d.tU,d.vS,d.cV,f.W9,f.Q8,f.YW,f.iq,y.D9],styles:[".container-main[_ngcontent-%COMP%]{padding:.5rem;background-image:url(bg-join-and-share.d53a3207da518edb.png);background-repeat:no-repeat;background-size:cover;background-position:center center}.container-form[_ngcontent-%COMP%]{width:420px;padding:2rem 2rem 1rem;margin:auto;border-radius:10px;background:#fff;box-shadow:0 0 20px #00000026}.container-form[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:3rem}.container-form[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:1rem 0 2rem;font-size:32px;font-weight:700;line-height:40px}.container-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{color:#1f1f39;font-size:14px}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#858597}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{margin-bottom:5px;color:#333}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff3131}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;border:.5px solid #B8B8D2;background-color:#e8f0fe;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243c7;background:linear-gradient(90deg,#6d42e7 4.11%,#ea5fc1);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .for-got-pwd[_ngcontent-%COMP%]{margin-top:-.5rem;text-align:right}"]}),g})()}];let I=(()=>{var o;class g{}return(o=g).\u0275fac=function(r){return new(r||o)},o.\u0275mod=a.$C({type:o}),o.\u0275inj=a.G2t({imports:[P.iI.forChild(R),P.iI]}),g})();var _=t(3890);let T=(()=>{var o;class g{}return(o=g).\u0275fac=function(r){return new(r||o)},o.\u0275mod=a.$C({type:o}),o.\u0275inj=a.G2t({imports:[i.MD,d.YN,f.bv,I,_.x]}),g})()}}]);