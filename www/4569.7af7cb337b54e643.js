"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4569],{5781:(U,D,r)=>{r.d(D,{Cr:()=>Y,Rq:()=>B,br:()=>w,e6:()=>G});var h=r(5972);function w(e){var p,c,g,u,s,b,n,d,M,f,O,P;e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,h.hm)({url:"api/Media/Search",params:{getby:null!==(p=e.params.userid)&&void 0!==p?p:null,global:null!==(c=e.params.global)&&void 0!==c?c:null,media_id:null!==(g=e.params.media_id)&&void 0!==g?g:null,media_title:null!==(u=e.params.media_title)&&void 0!==u?u:null,v_mediatype:null!==(s=e.params.v_mediatype)&&void 0!==s?s:null,v_mediatypes:null!==(b=e.params.v_mediatypes)&&void 0!==b?b:null,topic_id:null!==(n=e.params.topic_id)&&void 0!==n?n:null,category_id:null!==(d=e.params.category_id)&&void 0!==d?d:null,directory_id:null!==(M=e.params.directory_id)&&void 0!==M?M:null,tags:null!==(f=e.params.tags)&&void 0!==f?f:null,createdby:e.params.createdby||null,sortfield:null!==(O=e.params.sortfield)&&void 0!==O?O:null,sorttype:null!==(P=e.params.sorttype)&&void 0!==P?P:null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit},success:I=>{var k;"function"==typeof e.callback&&e.callback(null!==(k=I.data)&&void 0!==k?k:null)},error:I=>{"function"==typeof e.callback&&e.callback(),console.error(I)},loading:e.loading,loadingController:e.loadingController})}function G(e){var p,c;e.params=e.params||{},(0,h.hm)({url:"api/Media/Detail",params:{getby:null!==(p=e.params.userid)&&void 0!==p?p:null,media_id:null!==(c=e.params.media_id)&&void 0!==c?c:null},success:g=>{var u;"function"==typeof e.callback&&e.callback(null!==(u=g.data)&&void 0!==u?u:null)},error:g=>{"function"==typeof e.callback&&e.callback(),console.error(g)},loading:e.loading,loadingController:e.loadingController})}function B(e){var p,c,g,u,s,b,n,d,M,f,O,P,I,k,$,E,j,T;e.params=e.params||{},(0,h.Ll)({url:"api/Media/AddUpdate",params:{media_id:null!==(p=e.params.media_id)&&void 0!==p?p:null,media_title:null!==(c=e.params.media_title)&&void 0!==c?c:null,media_description:null!==(g=e.params.media_description)&&void 0!==g?g:null,media_content:null!==(u=e.params.media_content)&&void 0!==u?u:null,filepath:null!==(s=e.params.filepath)&&void 0!==s?s:null,filepath_extract:null!==(b=e.params.filepath_extract)&&void 0!==b?b:null,link_file:null!==(n=e.params.link_file)&&void 0!==n?n:null,link_share:null!==(d=e.params.link_share)&&void 0!==d?d:null,cover:null!==(M=e.params.cover)&&void 0!==M?M:null,v_mediatype:null!==(f=e.params.v_mediatype)&&void 0!==f?f:null,v_osstype:null!==(O=e.params.v_osstype)&&void 0!==O?O:null,v_sharingmode:null!==(P=e.params.v_sharingmode)&&void 0!==P?P:null,topic_id:null!==(I=e.params.topic_id)&&void 0!==I?I:null,category_id:null!==(k=e.params.category_id)&&void 0!==k?k:null,directory_id:null!==($=e.params.directory_id)&&void 0!==$?$:null,tags:null!==(E=e.params.tags)&&void 0!==E?E:null,createdby:null!==(j=e.params.userid)&&void 0!==j?j:null,modifiedby:null!==(T=e.params.userid)&&void 0!==T?T:null},success:y=>{var A;"function"==typeof e.callback&&e.callback(null!==(A=y.data)&&void 0!==A?A:null)},error:y=>{"function"==typeof e.callback&&e.callback(),console.error(y)},loading:e.loading,loadingController:e.loadingController})}function Y(e){var p,c,g;e.params=e.params||{},(0,h.sj)({url:"api/Media/Delete",params:{deletedby:null!==(p=e.params.userid)&&void 0!==p?p:null,media_id:null!==(c=e.params.media_id)&&void 0!==c?c:null,createdby:null!==(g=e.params.userid)&&void 0!==g?g:null},success:u=>{var s;"function"==typeof e.callback&&e.callback(null!==(s=u.data)&&void 0!==s?s:null)},error:u=>{"function"==typeof e.callback&&e.callback(),console.error(u)},loading:e.loading,loadingController:e.loadingController})}},4569:(U,D,r)=>{r.d(D,{K:()=>z});var h=r(467),w=r(2527),G=r.n(w),B=r(7586),Y=r.n(B),e=r(5972),p=r(5781),c=r(8295),g=r(2635),u=r(4552),s=r(5414),b=r(1607),n=r(4438),d=r(6637),M=r(177),f=r(9417),O=r(31);function P(a,m){if(1&a&&n.eu8(0,19),2&a){n.XpG();const l=n.sdS(36);n.Y8G("ngTemplateOutlet",l)}}function I(a,m){if(1&a&&n.eu8(0,19),2&a){n.XpG();const l=n.sdS(38);n.Y8G("ngTemplateOutlet",l)}}function k(a,m){1&a&&(n.j41(0,"div",20),n.nrm(1,"ion-img",21),n.k0s())}function $(a,m){if(1&a){const l=n.RV6();n.j41(0,"div",24)(1,"button",25),n.bIt("click",function(){n.eBV(l);const o=n.XpG(2);return n.Njj(o.download())}),n.nrm(2,"ion-icon",26),n.k0s()()}}function E(a,m){if(1&a&&(n.j41(0,"div",20),n.nrm(1,"ion-img",22),n.DNE(2,$,3,0,"div",23),n.k0s()),2&a){let l;const t=n.XpG();n.R7$(),n.HbH(null!=t.response&&t.response.Data?"img-response":"img-default"),n.Y8G("src",null!==(l=null==t.response?null:t.response.Data)&&void 0!==l?l:"assets/image/no-image.svg"),n.R7$(),n.Y8G("ngIf",null==t.response?null:t.response.Data)}}function j(a,m){if(1&a&&(n.j41(0,"option",42),n.EFF(1),n.k0s()),2&a){const l=m.$implicit;n.Y8G("value",l),n.R7$(),n.JRh(l)}}function T(a,m){if(1&a){const l=n.RV6();n.j41(0,"div",29)(1,"div",37)(2,"div",38)(3,"label",39),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"select",40),n.bIt("ngModelChange",function(o){n.eBV(l);const i=n.XpG(2);return n.Njj(i.changeSize(o))}),n.DNE(7,j,2,2,"option",41),n.k0s()()()}if(2&a){const l=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,3,"ImageSize")),n.R7$(2),n.Y8G("ngModel",l.dataForm.size),n.R7$(),n.Y8G("ngForOf",l.sizes)}}function y(a,m){if(1&a){const l=n.RV6();n.j41(0,"div")(1,"button",43),n.bIt("click",function(){n.eBV(l);const o=n.XpG(2);return n.Njj(o.submitText2Image())}),n.nrm(2,"ion-icon",44),n.j41(3,"span"),n.EFF(4),n.nI1(5,"translate"),n.k0s()()()}2&a&&(n.R7$(4),n.JRh(n.bMT(5,1,"DrawPictures")))}function A(a,m){1&a&&(n.j41(0,"div"),n.nrm(1,"ion-spinner",45),n.k0s())}function W(a,m){if(1&a){const l=n.RV6();n.j41(0,"div",27)(1,"div",28)(2,"div",29)(3,"label"),n.EFF(4),n.nI1(5,"translate"),n.j41(6,"span",30),n.EFF(7,"*"),n.k0s()(),n.j41(8,"div",31)(9,"div",32)(10,"div",33)(11,"textarea",34),n.nI1(12,"translate"),n.bIt("change",function(o){n.eBV(l);const i=n.XpG();return n.Njj(i.changePrompt(o))}),n.k0s()()()()(),n.DNE(13,T,8,5,"div",29),n.k0s(),n.j41(14,"div")(15,"div",35),n.DNE(16,y,6,3,"div",36)(17,A,2,0,"div",36),n.k0s()()()}if(2&a){let l;const t=n.XpG();n.R7$(4),n.SpI("",n.bMT(5,6,"Suggest")," "),n.R7$(7),n.FS9("placeholder",n.bMT(12,8,"WriteYourDescriptionAITechnologyWillHelpYouPerfectYourIdeas")),n.Y8G("ngModel",null!==(l=t.dataForm.prompt)&&void 0!==l?l:""),n.R7$(2),n.vxM(13,t.sizes.length?13:-1),n.R7$(3),n.Y8G("ngIf",!t.dataForm.isloading),n.R7$(),n.Y8G("ngIf",t.dataForm.isloading)}}function L(a,m){if(1&a&&(n.j41(0,"option",42),n.EFF(1),n.k0s()),2&a){const l=m.$implicit;n.Y8G("value",l),n.R7$(),n.JRh(l)}}function S(a,m){if(1&a){const l=n.RV6();n.j41(0,"div",29)(1,"div",37)(2,"div",38)(3,"label",39),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"select",40),n.bIt("ngModelChange",function(o){n.eBV(l);const i=n.XpG(2);return n.Njj(i.changeSize(o))}),n.DNE(7,L,2,2,"option",41),n.k0s()()()}if(2&a){const l=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,3,"ImageSize")),n.R7$(2),n.Y8G("ngModel",l.dataForm.size),n.R7$(),n.Y8G("ngForOf",l.sizes)}}function K(a,m){if(1&a){const l=n.RV6();n.j41(0,"div")(1,"button",43),n.bIt("click",function(){n.eBV(l);const o=n.XpG(2);return n.Njj(o.submitImage2Image())}),n.nrm(2,"ion-icon",44),n.j41(3,"span"),n.EFF(4),n.nI1(5,"translate"),n.k0s()()()}2&a&&(n.R7$(4),n.JRh(n.bMT(5,1,"DrawPictures")))}function N(a,m){1&a&&(n.j41(0,"div"),n.nrm(1,"ion-spinner",45),n.k0s())}function V(a,m){if(1&a){const l=n.RV6();n.j41(0,"div",27)(1,"div",28)(2,"div",29)(3,"label"),n.EFF(4),n.nI1(5,"translate"),n.j41(6,"span",30),n.EFF(7,"*"),n.k0s()(),n.j41(8,"div",46)(9,"div",47)(10,"div",32)(11,"div",33),n.nrm(12,"img",5),n.j41(13,"div",48)(14,"div",49)(15,"div")(16,"div",50),n.nrm(17,"ion-icon",51),n.k0s(),n.j41(18,"div",52)(19,"i"),n.EFF(20),n.nI1(21,"translate"),n.k0s()()()()()()()()()(),n.j41(22,"div",53)(23,"div",37)(24,"div",38)(25,"label",39),n.EFF(26),n.nI1(27,"translate"),n.j41(28,"span",30),n.EFF(29,"*"),n.k0s()()(),n.j41(30,"div",54)(31,"input",55),n.bIt("change",function(o){n.eBV(l);const i=n.XpG();return n.Njj(i.changeFile(o))}),n.k0s(),n.j41(32,"label",56),n.EFF(33),n.k0s()()()(),n.j41(34,"div",29)(35,"label"),n.EFF(36),n.nI1(37,"translate"),n.k0s(),n.j41(38,"div",31)(39,"textarea",57),n.nI1(40,"translate"),n.bIt("change",function(o){n.eBV(l);const i=n.XpG();return n.Njj(i.changePrompt(o))}),n.k0s()()(),n.DNE(41,S,8,5,"div",29),n.k0s(),n.j41(42,"div")(43,"div",35),n.DNE(44,K,6,3,"div",36)(45,N,2,0,"div",36),n.k0s()()()}if(2&a){let l,t;const o=n.XpG();n.R7$(4),n.SpI("",n.bMT(5,11,"SendUsPhotos")," "),n.R7$(8),n.Y8G("src",null!==(l=o.dataForm.fileUrlViewer)&&void 0!==l?l:"",n.B4B),n.R7$(8),n.JRh(n.bMT(21,13,"AITechnologyWillHelpYouPerfectYourIdeas")),n.R7$(6),n.SpI("",n.bMT(27,15,"OriginalImage")," "),n.R7$(7),n.JRh(null==o.dataForm.file?null:o.dataForm.file.name),n.R7$(3),n.JRh(n.bMT(37,17,"Suggest")),n.R7$(3),n.FS9("placeholder",n.bMT(40,19,"WriteYourDescriptionAITechnologyWillHelpYouPerfectYourIdeas")),n.Y8G("ngModel",null!==(t=o.dataForm.prompt)&&void 0!==t?t:""),n.R7$(2),n.vxM(41,o.sizes.length?41:-1),n.R7$(3),n.Y8G("ngIf",!o.dataForm.isloading),n.R7$(),n.Y8G("ngIf",o.dataForm.isloading)}}let z=(()=>{var a;class m{constructor(t,o,i){this.modalController=t,this.toastController=o,this.loadingController=i,this.sizes=[],this.dataForm={size:"512x512"},this.response={},this.appsettings={}}ngOnInit(){var t=this;this.isfullscreen=window.document.body.classList.contains("modal-fullscreen"),(0,h.A)(function*(){t.appsettings=yield(0,e.AC)(),t.appsettings.madonvi&&(t.user=yield(0,g.Nk)())})()}toggleFullScreen(){this.isfullscreen?window.document.body.classList.remove("modal-fullscreen"):window.document.body.classList.add("modal-fullscreen"),this.isfullscreen=window.document.body.classList.contains("modal-fullscreen")}close(){return this.modalController.dismiss(null,"cancel")}changeIsFile(t){this.dataForm.isloading||(this.isFile=t)}download(){var t=this;return(0,h.A)(function*(){var o,i;null!==(o=t.response)&&void 0!==o&&o.Data&&(0,c.Sm)({params:{url:null===(i=t.response)||void 0===i?void 0:i.Data},callback:v=>{if(v){var _;let x=(null===(_=t.response)||void 0===_||null===(_=_.Data)||void 0===_||null===(_=_.replace(/(\?|\#)(\w|\_|\-|\*|.)+$/gm,""))||void 0===_||null===(_=_.split("/"))||void 0===_||null===(_=_.pop())||void 0===_?void 0:_.toLocaleLowerCase())||"image.png";(0,u.xx)(v,x,"image/x-png",R=>{R?G()(R,x,"image/x-png"):(0,s.c)(t.toastController,{message:"Kh\xf4ng th\u1ec3 t\u1ea3i xu\u1ed1ng t\u1eadp tin!"}).then(C=>{C.present()})})}else(0,s.c)(t.toastController,{message:"Kh\xf4ng th\u1ec3 t\u1ea3i xu\u1ed1ng t\u1eadp tin!"}).then(x=>{x.present()})}})})()}save(){var t=this;return(0,h.A)(function*(){var o,i;return t.dataForm.isloading?(0,s.c)(t.toastController,{message:"H\xe3y \u0111\u1ee3i h\u1ec7 th\u1ed1ng ho\xe0n t\u1ea5t qu\xe1 tr\xecnh t\u1ea1o d\u1eef li\u1ec7u!"}).then(v=>{v.present()}):null!==(o=t.response)&&void 0!==o&&o.Data?void(0,c.dL)({loadingController:t.loadingController,params:{url:null===(i=t.response)||void 0===i?void 0:i.Data},callback:v=>{if(v){var _,x,R;let C={};return C.filepath=v.path+"/"+(null===(_=v.file)||void 0===_?void 0:_.name),C.link_file=t.appsettings.readfileuploadurl+v.path+"/"+(null===(x=v.file)||void 0===x?void 0:x.name),C.media_title=`AI-${Y()(new Date).format("YYYYMMDDHHmm(SSS)")}`,C.media_description=t.dataForm.size,C.media_content=t.isFile?void 0:t.dataForm.prompt,C.v_mediatype=b.S.IMAGE,void(0,p.Rq)({loadingController:t.loadingController,params:Object.assign(C,{userid:null===(R=t.user)||void 0===R?void 0:R.userid}),callback:F=>{(0,s.c)(t.toastController,{},F).then(X=>{X.present()}),0==(null==F?void 0:F.returncode)&&t.modalController.dismiss(null==F?void 0:F.id,"confirm")}})}(0,s.c)(t.toastController,{message:"Kh\xf4ng th\u1ec3 t\u1ea3i l\xean t\u1eadp tin!"}).then(C=>{C.present()})}}):(0,s.c)(t.toastController,{message:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u kh\u1edfi t\u1ea1o!"}).then(v=>{v.present()})})()}changeSize(t){this.dataForm.size=t}changePrompt(t){var o;this.dataForm.prompt=null==t||null===(o=t.target)||void 0===o||null===(o=o.value)||void 0===o?void 0:o.trim().replace(/\s+/g," ")}changeFile(t){this.dataForm.file=void 0,t.target.files.length&&(this.dataForm.file=t.target.files[0]),this.dataForm.fileUrlViewer=this.dataForm.file?URL.createObjectURL(this.dataForm.file):void 0}submitText2Image(){var t=this;return(0,h.A)(function*(){if(!t.dataForm.prompt)return(0,s.c)(t.toastController,{message:"H\xe3y vi\u1ebft m\xf4 t\u1ea3 c\u1ee7a b\u1ea1n, c\xf4ng ngh\u1ec7 AI s\u1ebd gi\xfap b\u1ea1n ho\xe0n thi\u1ec7n \xfd t\u01b0\u1edfng!"}).then(o=>{o.present()});(0,c.i8)({loading:o=>{t.dataForm.isloading=o},params:t.dataForm,callback:o=>{t.response=o}})})()}submitImage2Image(){var t=this;return(0,h.A)(function*(){if(!t.dataForm.file)return(0,s.c)(t.toastController,{message:"G\u1eedi \u1ea3nh cho ch\xfang t\xf4i, c\xf4ng ngh\u1ec7 AI s\u1ebd gi\xfap b\u1ea1n ho\xe0n thi\u1ec7n \xfd t\u01b0\u1edfng!"}).then(o=>{o.present()});(0,c.ev)({loading:o=>{t.dataForm.isloading=o},params:t.dataForm,callback:o=>{t.response=o}})})()}}return(a=m).\u0275fac=function(t){return new(t||a)(n.rXU(d.W3),n.rXU(d.K_),n.rXU(d.Xi))},a.\u0275cmp=n.VBU({type:a,selectors:[["app-modal-ai-image"]],decls:39,vars:21,consts:[["typelink",""],["typefile",""],["slot","end","mode","ios","color","light","fill","outline",3,"click"],["slot","end"],["color","dark",1,"d-none","d-md-block",3,"click"],[3,"src"],["color","dark",3,"click"],["src","../../../assets/icon/16x16/close.svg"],[1,"h-100","d-flex","flex-wrap","align-stretch","user-select-none"],[1,"col-12","col-lg-5","p-3","pr-lg-0"],[1,"prompt"],[1,"d-flex","h-100","flex-column"],[1,"nav","nav-tabs","nav-fill"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"flex-grow-1","overflow-auto"],[3,"ngTemplateOutlet",4,"ngIf"],[1,"col-12","col-lg-7","p-3"],["class","response",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"response"],["src","../../../assets/image/gif/ai-loading.gif",1,"w-100","h-100","no-fit"],[1,"w-100","h-100",3,"src"],["class","download-box",4,"ngIf"],[1,"download-box"],["type","button",3,"click"],["src","../../../assets/icon/16x16/download.svg"],[1,"d-flex","h-100","flex-column","justify-content-between"],[1,"px-3","mt-2"],[1,"form-group"],[1,"ml-1","text-danger"],[1,"prompt-box"],[1,"embed-responsive","embed-responsive-21by9"],[1,"embed-responsive-item"],[1,"form-control","h-100","overflow-auto",3,"change","placeholder","ngModel"],[1,"form-group","text-center"],[4,"ngIf"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"custom-select",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"btn",3,"click"],["src","../../../assets/icon/16x16/magic.svg"],["name","dots","color","dark",1,"align-middle"],[1,"ondrop-image"],["onclick","document.getElementById('inputFileAiImage').click()",1,"media-box"],[1,"placeholder"],[1,"d-flex","flex-wrap","w-100","h-100","align-items-center","justify-content-center","text-center"],[1,"placeholder-icon"],["src","../../../assets/image-svg/uploadImage2.svg"],[1,"placeholder-text"],[1,"form-group","hide"],[1,"custom-file"],["type","file","id","inputFileAiImage","multiple","",1,"custom-file-input",3,"change"],["for","inputFileAiImage",1,"custom-file-label"],["rows","3",1,"form-control","h-100","overflow-auto",3,"change","placeholder","ngModel"]],template:function(t,o){if(1&t){const i=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"ion-button",2),n.bIt("click",function(){return n.eBV(i),n.Njj(o.save())}),n.j41(6,"ion-label"),n.EFF(7),n.nI1(8,"translate"),n.k0s()(),n.j41(9,"ion-buttons",3)(10,"ion-button",4),n.bIt("click",function(){return n.eBV(i),n.Njj(o.toggleFullScreen())}),n.nrm(11,"ion-icon",5),n.k0s(),n.j41(12,"ion-button",6),n.bIt("click",function(){return n.eBV(i),n.Njj(o.close())}),n.nrm(13,"ion-icon",7),n.k0s()()()(),n.j41(14,"ion-content")(15,"div",8)(16,"div",9)(17,"div",10)(18,"div",11)(19,"div")(20,"ul",12)(21,"li",13)(22,"a",14),n.bIt("click",function(){return n.eBV(i),n.Njj(o.changeIsFile(!1))}),n.EFF(23),n.nI1(24,"translate"),n.k0s()(),n.j41(25,"li",13)(26,"a",14),n.bIt("click",function(){return n.eBV(i),n.Njj(o.changeIsFile(!0))}),n.EFF(27),n.nI1(28,"translate"),n.k0s()()()(),n.j41(29,"div",15),n.DNE(30,P,1,1,"ng-container",16)(31,I,1,1,"ng-container",16),n.k0s()()()(),n.j41(32,"div",17),n.DNE(33,k,2,0,"div",18)(34,E,3,4,"div",18),n.k0s()()(),n.DNE(35,W,18,10,"ng-template",null,0,n.C5r)(37,V,46,21,"ng-template",null,1,n.C5r)}2&t&&(n.R7$(3),n.JRh(n.bMT(4,13,"CreateImageWithAI")),n.R7$(4),n.JRh(n.bMT(8,15,"AddToMaterialRepository")),n.R7$(4),n.Y8G("src",o.isfullscreen?"assets/icon/16x16/fullscreen-exit.svg":"assets/icon/16x16/fullscreen.svg"),n.R7$(11),n.HbH(o.isFile?"":"active"),n.R7$(),n.JRh(n.bMT(24,17,"DrawPhotosWithAI")),n.R7$(3),n.HbH(o.isFile?"active":""),n.R7$(),n.JRh(n.bMT(28,19,"CreateSimilarImagesWithAI")),n.R7$(3),n.Y8G("ngIf",!o.isFile),n.R7$(),n.Y8G("ngIf",o.isFile),n.R7$(2),n.Y8G("ngIf",o.dataForm.isloading),n.R7$(),n.Y8G("ngIf",!o.dataForm.isloading))},dependencies:[M.Sq,M.bT,M.T3,f.xH,f.y7,f.me,f.wz,f.BC,f.vS,d.Jm,d.QW,d.W9,d.eU,d.iq,d.KW,d.he,d.w2,d.BC,d.ai,O.D9],styles:['button[_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{outline:none!important;box-shadow:none!important}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{color:#999;font-style:italic}.hide[_ngcontent-%COMP%]{display:none!important}.ondrop-image[_ngcontent-%COMP%]{--color: #eee}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]{border-radius:4px;border:1px dashed rgba(51,53,74,.2);background:#fff}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]{display:none;width:100%;height:100%}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   .placeholder-icon[_ngcontent-%COMP%]{line-height:0;font-size:60px}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   .placeholder-text[_ngcontent-%COMP%]{color:#33333380}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   .placeholder-icon[_ngcontent-%COMP%] + .placeholder-text[_ngcontent-%COMP%]{margin-top:.25rem}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not([src]), .ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   img[src=""][_ngcontent-%COMP%]{display:none}.ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not([src]) + .placeholder[_ngcontent-%COMP%], .ondrop-image[_ngcontent-%COMP%]   .media-box[_ngcontent-%COMP%]   img[src=""][_ngcontent-%COMP%] + .placeholder[_ngcontent-%COMP%]{display:block}.prompt[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;border-radius:15px;background:#fff;color:#333;box-shadow:0 0 12px #0000001a}.prompt[_ngcontent-%COMP%]   .prompt-box[_ngcontent-%COMP%]{border:1px solid transparent}.prompt[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]{min-width:33%}.prompt[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border:0;background:transparent;padding-left:0}.prompt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .prompt[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]{border-radius:.25rem;border-color:#eee}.prompt[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]{color:var(--ion-color-primary-shade, #000)}.prompt[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#000}.prompt[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:160px;height:3rem;padding:0;border-radius:1.5rem;vertical-align:middle;text-align:center;font-size:14px;font-weight:400;text-transform:initial;background:#ff6a61;color:#fff}.prompt[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;vertical-align:middle;display:inline-block}.prompt[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:.5rem}.prompt[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;vertical-align:middle;display:inline-block}.prompt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{cursor:pointer}.prompt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:0;color:inherit}.prompt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:not(.active){background-color:#e9e8e9}.response[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:100%;border-radius:15px;background:#fff;box-shadow:0 0 12px #0000001a;line-height:0}.response[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;height:100%}.response[_ngcontent-%COMP%]   ion-img.no-fit[_ngcontent-%COMP%]{object-fit:none}.response[_ngcontent-%COMP%]   ion-img.img-default[_ngcontent-%COMP%]{object-fit:cover}.response[_ngcontent-%COMP%]   ion-img.img-response[_ngcontent-%COMP%]{object-fit:contain}.response[_ngcontent-%COMP%]   .download-box[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:1rem;width:3rem;height:3rem;margin-left:-1.5rem;line-height:0;border-radius:50%;box-shadow:0 4px 4px #00000026}.response[_ngcontent-%COMP%]   .download-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#fff;border-radius:inherit}.response[_ngcontent-%COMP%]   .download-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000;font-size:26px}']}),m})()}}]);