"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4850],{8671:(N,j,p)=>{p.d(j,{$:()=>y});var C=p(5972);function y(d){d.params=d.params||{},(0,C.hm)({url:"api/Lookup/get",params:{lookup_key:d.params.lookup_key||null},success:r=>{"function"==typeof d.callback&&d.callback(null==r?void 0:r.data)},error:r=>{"function"==typeof d.callback&&d.callback(),console.error(d,r)},loading:d.loading,loadingController:d.loadingController})}},4850:(N,j,p)=>{p.r(j),p.d(j,{KnowledgeMgmtPageModule:()=>Et});var C=p(177),y=p(9417),d=p(6637),r=p(3658),v=p(467),F=p(5972),G=p(2635),A=p(8405),$=p(7331),I=p(3753),B=p(1312),K=p(1038),w=p(5414),R=p(523),t=p(4438),_=p(31);function h(n,s){if(1&n){const i=t.RV6();t.j41(0,"button",18),t.bIt("click",function(e){t.eBV(i);const l=t.XpG();return t.Njj(l.clearTopic(e))}),t.nrm(1,"ion-icon",19),t.k0s()}}function m(n,s){if(1&n){const i=t.RV6();t.j41(0,"button",18),t.bIt("click",function(e){t.eBV(i);const l=t.XpG();return t.Njj(l.clearCategory(e))}),t.nrm(1,"ion-icon",19),t.k0s()}}function g(n,s){if(1&n){const i=t.RV6();t.j41(0,"button",18),t.bIt("click",function(e){t.eBV(i);const l=t.XpG();return t.Njj(l.clearTextbookCatg(e))}),t.nrm(1,"ion-icon",19),t.k0s()}}function b(n,s){if(1&n){const i=t.RV6();t.j41(0,"button",18),t.bIt("click",function(e){t.eBV(i);const l=t.XpG();return t.Njj(l.clearPublisher(e))}),t.nrm(1,"ion-icon",19),t.k0s()}}let M=(()=>{var n;class s{constructor(o,e,l,a){this.modalController=o,this.toastController=e,this.loadingController=l,this.popoverController=a,this.textbook={},this.isfullscreen=!1,this.appsettings={}}ngOnInit(){var o=this;this.isfullscreen=window.document.body.classList.contains("modal-fullscreen"),(0,v.A)(function*(){o.appsettings=yield(0,F.AC)(),o.appsettings.madonvi&&(o.user=yield(0,G.Nk)(),o.refreshData())})()}toggleFullScreen(){this.isfullscreen?window.document.body.classList.remove("modal-fullscreen"):window.document.body.classList.add("modal-fullscreen"),this.isfullscreen=window.document.body.classList.contains("modal-fullscreen")}close(){return this.modalController.dismiss(null,"cancel")}refreshData(){}presentPopoverTopic(o){var e=this;return(0,v.A)(function*(){const l=yield e.popoverController.create({component:$.E,componentProps:{selectedId:e.textbook.topic_id,filter:{for:"textbook"}},event:o,dismissOnSelect:!1,animated:!1,side:"right"});l.onDidDismiss().then(a=>{var c,u,f,k,x,E,O;"confirm"==a.role&&(Object.assign(e.textbook,{topic_id:null===(c=a.data)||void 0===c?void 0:c.topic_id,topic_title:null===(u=a.data)||void 0===u?void 0:u.topic_title,topic_titles:null===(f=a.data)||void 0===f?void 0:f.topic_titles}),null!==(k=a.data)&&void 0!==k&&k.category_id&&Object.assign(e.textbook,{category_id:null===(x=a.data)||void 0===x?void 0:x.category_id,category_title:null===(E=a.data)||void 0===E?void 0:E.category_title,category_titles:null===(O=a.data)||void 0===O?void 0:O.category_titles}))}),l.present()})()}clearTopic(o){Object.assign(this.textbook,{topic_id:null,topic_title:null,topic_titles:null})}changeTopic(o){var e;this.textbook.topic_id=null!==(e=parseInt(o))&&void 0!==e?e:0}presentPopoverCategory(o){var e=this;return(0,v.A)(function*(){const l=yield e.popoverController.create({component:A.P,componentProps:{selectedId:e.textbook.category_id,filter:{for:"textbook"}},event:o,dismissOnSelect:!1,animated:!1,side:"right"});l.onDidDismiss().then(a=>{var c,u;"confirm"==a.role&&Object.assign(e.textbook,{category_id:null===(c=a.data)||void 0===c?void 0:c.category_id,category_title:null===(u=a.data)||void 0===u?void 0:u.category_title})}),l.present()})()}clearCategory(o){Object.assign(this.textbook,{category_id:null,category_title:null})}changeCategory(o){var e;this.textbook.category_id=null!==(e=parseInt(o))&&void 0!==e?e:0}presentPopoverLookupTextbookCatg(o){var e=this;return(0,v.A)(function*(){const l=yield e.popoverController.create({component:I.t,componentProps:{selectedId:e.textbook.v_textbook_catg,lookup_key:"v_textbook_catg"},event:o,dismissOnSelect:!1,animated:!1});l.onDidDismiss().then(a=>{var c,u;"confirm"==a.role&&Object.assign(e.textbook,{v_textbook_catg:null===(c=a.data)||void 0===c?void 0:c.lookup_value,v_textbook_catg_title:null===(u=a.data)||void 0===u?void 0:u.lookup_title})}),l.present()})()}clearTextbookCatg(o){Object.assign(this.textbook,{v_textbook_catg:null,v_textbook_catg_title:null})}changeTextbookCatg(o){var e;this.textbook.v_textbook_catg=null!==(e=parseInt(o))&&void 0!==e?e:0}presentPopoverLookupPublisher(o){var e=this;return(0,v.A)(function*(){const l=yield e.popoverController.create({component:I.t,componentProps:{selectedId:e.textbook.v_publisher,lookup_key:"v_publisher"},event:o,dismissOnSelect:!1,animated:!1});l.onDidDismiss().then(a=>{var c,u;"confirm"==a.role&&Object.assign(e.textbook,{v_publisher:null===(c=a.data)||void 0===c?void 0:c.lookup_value,v_publisher_title:null===(u=a.data)||void 0===u?void 0:u.lookup_title})}),l.present()})()}clearPublisher(o){Object.assign(this.textbook,{v_publisher:null,v_publisher_title:null})}changePublisher(o){var e;this.textbook.v_publisher=null!==(e=parseInt(o))&&void 0!==e?e:0}selectFile(){(0,B.oG)({accept:".pdf,.doc,.docx",multiple:!1},o=>{var e,l;null!=o&&o.length&&(this.textbookFile=o[0],this.textbook.filename=o[0].name,this.textbook.textbook_title=null!==(e=this.textbook.textbook_title)&&void 0!==e?e:null===(l=o[0].name)||void 0===l?void 0:l.split(".").shift())})}changeTextBookTitle(o){var e;this.textbook.textbook_title=null==o||null===(e=o.target)||void 0===e?void 0:e.value}save(){var o=[];this.textbookFile&&o.push(new Promise((l,a)=>{(0,K.v)({loadingController:this.loadingController,params:{file:this.textbookFile,subFolder:"textbook",fileType:"pdf,office"},callback:c=>{0==(null==c?void 0:c.ReturnCode)?(this.textbook.filepath=c.path+"/"+c.file.name,this.textbookFile=void 0):(0,w.c)(this.toastController,{},{returncode:null==c?void 0:c.ReturnCode,returnmsg:null==c?void 0:c.ReturnName}).then(u=>{u.present()}),l(c)}})}));var e=()=>{var l;this.textbook.filepath?(0,R.b)({loadingController:this.loadingController,params:{userid:null===(l=this.user)||void 0===l?void 0:l.userid,textbook_title:this.textbook.textbook_title,filepath:this.textbook.filepath,topic_id:this.textbook.topic_id,category_id:this.textbook.category_id,v_textbook_catg:this.textbook.v_textbook_catg,v_publisher:this.textbook.v_publisher},callback:a=>{0==(null==a?void 0:a.returncode)?this.modalController.dismiss(a.id,"success"):(0,w.c)(this.toastController,{},a).then(c=>{c.present()})}}):(0,w.c)(this.toastController,{color:"danger",message:"Kh\xf4ng t\xecm th\u1ea5y \u0111\u01b0\u1eddng d\u1eabn t\u1eadp tin!"}).then(a=>{a.present()})};o.length?Promise.all(o).then(()=>{e()}):e()}}return(n=s).\u0275fac=function(o){return new(o||n)(t.rXU(d.W3),t.rXU(d.K_),t.rXU(d.Xi),t.rXU(d.IE))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-modal-textbook-add"]],inputs:{textbook:"textbook"},decls:77,vars:35,consts:[["slot","end","mode","ios","color","tertiary",3,"click"],["slot","end"],["color","dark",1,"d-none","d-md-block",3,"click"],[3,"src"],["color","dark",3,"click"],["src","../../../assets/icon/16x16/close.svg"],[1,"container-fluid","py-3"],[1,"form-group"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],["type","text","readonly","",1,"form-control",3,"value"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary","btn-popover",3,"click"],["name","folder-open-outline"],["type","text",1,"form-control",3,"change","ngModel"],["type","button","class","btn btn-outline-secondary",3,"click",4,"ngIf"],["name","chevron-down-outline"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["name","close-outline"]],template:function(o,e){if(1&o&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"ion-button",0),t.bIt("click",function(){return e.save()}),t.j41(6,"ion-label"),t.EFF(7),t.nI1(8,"translate"),t.k0s()(),t.j41(9,"ion-buttons",1)(10,"ion-button",2),t.bIt("click",function(){return e.toggleFullScreen()}),t.nrm(11,"ion-icon",3),t.k0s(),t.j41(12,"ion-button",4),t.bIt("click",function(){return e.close()}),t.nrm(13,"ion-icon",5),t.k0s()()()(),t.j41(14,"ion-content")(15,"div",6)(16,"div",7)(17,"div",8)(18,"div",9)(19,"label",10),t.EFF(20),t.nI1(21,"translate"),t.k0s()(),t.nrm(22,"input",11),t.j41(23,"div",12)(24,"button",13),t.bIt("click",function(){return e.selectFile()}),t.nrm(25,"ion-icon",14),t.k0s()()()(),t.j41(26,"div",7)(27,"div",8)(28,"div",9)(29,"label",10),t.EFF(30),t.nI1(31,"translate"),t.k0s()(),t.j41(32,"input",15),t.bIt("change",function(a){return e.changeTextBookTitle(a)}),t.k0s()()(),t.j41(33,"div",7)(34,"div",8)(35,"div",9)(36,"label",10),t.EFF(37),t.nI1(38,"translate"),t.k0s()(),t.nrm(39,"input",11),t.j41(40,"div",12),t.DNE(41,h,2,0,"button",16),t.j41(42,"button",13),t.bIt("click",function(a){return e.presentPopoverTopic(a)}),t.nrm(43,"ion-icon",17),t.k0s()()()(),t.j41(44,"div",7)(45,"div",8)(46,"div",9)(47,"label",10),t.EFF(48),t.nI1(49,"translate"),t.k0s()(),t.nrm(50,"input",11),t.j41(51,"div",12),t.DNE(52,m,2,0,"button",16),t.j41(53,"button",13),t.bIt("click",function(a){return e.presentPopoverCategory(a)}),t.nrm(54,"ion-icon",17),t.k0s()()()(),t.j41(55,"div",7)(56,"div",8)(57,"div",9)(58,"label",10),t.EFF(59),t.nI1(60,"translate"),t.k0s()(),t.nrm(61,"input",11),t.j41(62,"div",12),t.DNE(63,g,2,0,"button",16),t.j41(64,"button",13),t.bIt("click",function(a){return e.presentPopoverLookupTextbookCatg(a)}),t.nrm(65,"ion-icon",17),t.k0s()()()(),t.j41(66,"div",7)(67,"div",8)(68,"div",9)(69,"label",10),t.EFF(70),t.nI1(71,"translate"),t.k0s()(),t.nrm(72,"input",11),t.j41(73,"div",12),t.DNE(74,b,2,0,"button",16),t.j41(75,"button",13),t.bIt("click",function(a){return e.presentPopoverLookupPublisher(a)}),t.nrm(76,"ion-icon",17),t.k0s()()()()()()),2&o){let l,a,c,u,f;t.R7$(3),t.JRh(t.bMT(4,19,"AddTextBook")),t.R7$(4),t.JRh(t.bMT(8,21,"Add")),t.R7$(4),t.Y8G("src",e.isfullscreen?"assets/icon/16x16/fullscreen-exit.svg":"assets/icon/16x16/fullscreen.svg"),t.R7$(9),t.JRh(t.bMT(21,23,"File")),t.R7$(2),t.Y8G("value",null!==(l=e.textbook.filename)&&void 0!==l?l:""),t.R7$(8),t.JRh(t.bMT(31,25,"TextBookName")),t.R7$(2),t.Y8G("ngModel",e.textbook.textbook_title),t.R7$(5),t.JRh(t.bMT(38,27,"GradeLevel")),t.R7$(2),t.Y8G("value",null==(null!==(a=e.textbook.topic_titles)&&void 0!==a?a:e.textbook.topic_title)||null==(a=(null!=a?a:e.textbook.topic_title).split(";"))||null==(a=a.reverse())?null:a.join(" / ")),t.R7$(2),t.Y8G("ngIf",e.textbook.topic_id),t.R7$(7),t.JRh(t.bMT(49,29,"Subject")),t.R7$(2),t.Y8G("value",null==(null!==(c=e.textbook.category_titles)&&void 0!==c?c:e.textbook.category_title)||null==(c=(null!=c?c:e.textbook.category_title).split(";"))||null==(c=c.reverse())?null:c.join(" / ")),t.R7$(2),t.Y8G("ngIf",e.textbook.category_id),t.R7$(7),t.JRh(t.bMT(60,31,"Catalogue")),t.R7$(2),t.Y8G("value",null!==(u=e.textbook.v_textbook_catg_title)&&void 0!==u?u:""),t.R7$(2),t.Y8G("ngIf",e.textbook.v_textbook_catg),t.R7$(7),t.JRh(t.bMT(71,33,"Publisher")),t.R7$(2),t.Y8G("value",null!==(f=e.textbook.v_publisher_title)&&void 0!==f?f:""),t.R7$(2),t.Y8G("ngIf",e.textbook.v_publisher)}},dependencies:[C.bT,y.me,y.BC,y.vS,d.Jm,d.QW,d.W9,d.eU,d.iq,d.he,d.BC,d.ai,_.D9],styles:[".input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important;box-shadow:none!important}.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{min-width:120px}.input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{line-height:0}.input-group[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px}.input-group[_ngcontent-%COMP%]   .form-control-plaintext[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem;border:1px solid #ddd;border-radius:4px}.input-group[_ngcontent-%COMP%]   .form-control-plaintext[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group[_ngcontent-%COMP%]   .form-control-plaintext[_ngcontent-%COMP%]:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background-color:#fff}"]}),s})();var L=p(5312),S=p(8295),Y=p(5446),W=p(6539),V=p(2313),z=p(7375),U=p(4393),H=p(7704),Q=p(2706);const Z=(n,s)=>({item:s,$index:n}),D=n=>({$implicit:n});function q(n,s){if(1&n&&(t.j41(0,"div",34),t.eu8(1,35),t.k0s()),2&n){const i=s.$implicit;t.XpG(3);const o=t.sdS(46);t.R7$(),t.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",t.eq3(2,D,i))}}function tt(n,s){if(1&n&&(t.j41(0,"ion-content",32)(1,"div",33),t.Z7z(2,q,2,4,"div",34,t.fX1),t.k0s()()),2&n){const i=t.XpG(2);t.R7$(2),t.Dyx(i.textBooks)}}function ot(n,s){if(1&n&&(t.j41(0,"div",28)(1,"span",29),t.EFF(2),t.k0s(),t.nrm(3,"ion-icon",30),t.k0s(),t.j41(4,"ion-popover",31),t.DNE(5,tt,4,0,"ng-template"),t.k0s()),2&n){const i=t.XpG();t.R7$(2),t.JRh(i.textBook.textbook_title)}}function et(n,s){if(1&n&&(t.nrm(0,"iframe",21),t.nI1(1,"safe")),2&n){const i=t.XpG();t.Y8G("src",t.i5U(1,1,i.iframeUrl,"resourceUrl"),t.f$h)}}function nt(n,s){if(1&n&&(t.j41(0,"div",37)(1,"b"),t.EFF(2,"Ch\u01b0a hu\u1ea5n luy\u1ec7n AI"),t.k0s(),t.j41(3,"div")(4,"a",38),t.EFF(5),t.k0s()()()),2&n){const i=t.XpG(2);t.R7$(4),t.Y8G("href",i.readfileuploadurl+i.textBook.filepath,t.B4B),t.R7$(),t.JRh(i.readfileuploadurl+i.textBook.filepath)}}function it(n,s){if(1&n&&(t.j41(0,"div",36),t.DNE(1,nt,6,2,"div",37),t.k0s()),2&n){const i=t.XpG();t.R7$(),t.vxM(1,i.textBook.isaitrained?-1:1)}}function lt(n,s){if(1&n&&(t.j41(0,"div",43),t.eu8(1,35),t.k0s()),2&n){const i=s.$implicit;t.XpG(2);const o=t.sdS(46);t.R7$(),t.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",t.eq3(2,D,i))}}function rt(n,s){if(1&n&&(t.j41(0,"div",39)(1,"div",40),t.EFF(2,"Ch\u1ecdn ch\u01b0\u01a1ng tr\xecnh h\u1ecdc"),t.k0s(),t.j41(3,"div",20)(4,"ion-content")(5,"div",41)(6,"div",42),t.Z7z(7,lt,2,4,"div",43,t.fX1),t.k0s()()()()()),2&n){const i=t.XpG();t.R7$(7),t.Dyx(i.textBooks)}}function at(n,s){if(1&n&&t.eu8(0,19),2&n){t.XpG();const i=t.sdS(44);t.Y8G("ngTemplateOutlet",i)}}function ct(n,s){if(1&n&&(t.j41(0,"ion-accordion",49)(1,"ion-item",50)(2,"ion-label")(3,"div",51),t.EFF(4),t.k0s()()(),t.nrm(5,"div",52),t.k0s()),2&n){const i=s.$implicit;t.Mz_("value","accordion-ai-faq-",s.$index,""),t.R7$(4),t.JRh(i.title),t.R7$(),t.Y8G("innerHTML",i.content,t.npT)}}function st(n,s){if(1&n){const i=t.RV6();t.j41(0,"div",22)(1,"div",44)(2,"b"),t.EFF(3,"C\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"),t.k0s(),t.j41(4,"ion-button",45),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.setTabDocument())}),t.nrm(5,"ion-icon",46),t.k0s()(),t.j41(6,"div",20)(7,"ion-content")(8,"div",47)(9,"ion-accordion-group",48),t.Z7z(10,ct,6,4,"ion-accordion",49,Z),t.k0s()()()()()}if(2&n){const i=t.XpG();t.R7$(10),t.Dyx(i.aiFaqs)}}function dt(n,s){if(1&n){const i=t.RV6();t.j41(0,"ion-button",59),t.bIt("click",function(){t.eBV(i);const e=t.XpG(2);return t.Njj(e.trainningAI())}),t.j41(1,"ion-label"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.nrm(4,"ion-icon",60),t.k0s()}2&n&&(t.R7$(2),t.JRh(t.bMT(3,1,"TrainningAI")))}function pt(n,s){if(1&n&&(t.nrm(0,"iframe",61),t.nI1(1,"safe")),2&n){const i=t.XpG(2);t.Y8G("src",t.i5U(1,1,"assets/iframe/lib/PDFReader/web/viewer.html?file="+(i.readfileuploadurl+(null==i.textBook?null:i.textBook.filepath)),"resourceUrl"),t.f$h)}}function ut(n,s){if(1&n&&(t.nrm(0,"iframe",61),t.nI1(1,"safe")),2&n){const i=t.XpG(2);t.Y8G("src",t.i5U(1,1,"https://view.officeapps.live.com/op/view.aspx?src="+(i.readfileuploadurl+(null==i.textBook?null:i.textBook.filepath)),"resourceUrl"),t.f$h)}}function _t(n,s){if(1&n&&(t.nrm(0,"iframe",61),t.nI1(1,"safe")),2&n){const i=t.XpG(2);t.Y8G("src",t.i5U(1,1,"https://view.officeapps.live.com/op/view.aspx?src="+(i.readfileuploadurl+(null==i.textBook?null:i.textBook.filepath)),"resourceUrl"),t.f$h)}}function gt(n,s){if(1&n){const i=t.RV6();t.j41(0,"div",53)(1,"div",54),t.DNE(2,dt,5,3,"ion-button",55),t.j41(3,"ion-button",56),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.presentModalTextbookAdd())}),t.j41(4,"ion-label"),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.nrm(7,"ion-icon",57),t.k0s(),t.j41(8,"ion-button",45),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.setTabDocument())}),t.nrm(9,"ion-icon",46),t.k0s()(),t.j41(10,"div",20)(11,"ion-content",58),t.DNE(12,pt,2,4)(13,ut,2,4)(14,_t,2,4),t.k0s()()()}if(2&n){let i;const o=t.XpG();t.R7$(2),t.vxM(2,o.textBook&&!o.textBook.isaitrained?2:-1),t.R7$(3),t.JRh(t.bMT(6,3,"Upload")),t.R7$(7),t.vxM(12,"pdf"===(i=null==o.textBook||null==o.textBook.filepath||null==(i=o.textBook.filepath.split("."))||null==(i=i.pop())?null:i.toLowerCase())?12:"doc"===i?13:"docx"===i?14:-1)}}function mt(n,s){if(1&n){const i=t.RV6();t.j41(0,"div",62)(1,"div",63),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.setTabDocument("faq"))}),t.nrm(2,"ion-icon",64),t.k0s(),t.j41(3,"div",63),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.setTabDocument("setting"))}),t.nrm(4,"ion-icon",65),t.k0s()()}if(2&n){const i=t.XpG();t.R7$(),t.HbH(i.isTabActive("faq")?"bg-primary":""),t.R7$(2),t.HbH(i.isTabActive("setting")?"bg-primary":"")}}function ft(n,s){if(1&n&&t.eu8(0,35),2&n){const i=s.$implicit;t.XpG(2);const o=t.sdS(42);t.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",t.eq3(2,D,i))}}function vt(n,s){if(1&n&&(t.j41(0,"ion-list",66)(1,"ul"),t.DNE(2,ft,1,4,"ng-container",67),t.k0s()()),2&n){const i=t.XpG();t.R7$(2),t.Y8G("ngForOf",i.filterTopic(i.topics))}}function bt(n,s){1&n&&t.nrm(0,"ion-icon",70)}function kt(n,s){1&n&&t.nrm(0,"ion-spinner",73)}function ht(n,s){1&n&&t.nrm(0,"ion-icon",74)}function xt(n,s){if(1&n&&(t.j41(0,"ion-badge",75),t.EFF(1),t.k0s()),2&n){const i=t.XpG(2).$implicit,o=t.XpG();t.R7$(),t.JRh(o.APP_FUNC_FormatNumber(i.total_textbook))}}function Ct(n,s){if(1&n&&t.eu8(0,35),2&n){const i=s.$implicit;t.XpG(4);const o=t.sdS(42);t.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",t.eq3(2,D,i))}}function Mt(n,s){if(1&n&&(t.j41(0,"ul"),t.DNE(1,Ct,1,4,"ng-container",67),t.k0s()),2&n){const i=t.XpG(2).$implicit,o=t.XpG();t.R7$(),t.Y8G("ngForOf",o.filterTopic(o.topics,i.topic_id))}}function Pt(n,s){if(1&n){const i=t.RV6();t.j41(0,"li")(1,"ion-item",68),t.bIt("click",function(){t.eBV(i);const e=t.XpG().$implicit,l=t.XpG();return t.Njj(e.disabled?null:l.applyFilterTopic({topic_id:e.topic_id}))}),t.j41(2,"ion-button",69),t.bIt("click",function(e){t.eBV(i);const l=t.XpG().$implicit,a=t.XpG();return t.Njj(a.expandTopic(e,l.topic_id,l.isexpanded))}),t.DNE(3,bt,1,0,"ion-icon",70)(4,kt,1,0)(5,ht,1,0),t.k0s(),t.j41(6,"ion-label",71),t.EFF(7),t.k0s(),t.DNE(8,xt,2,1,"ion-badge",72),t.k0s(),t.DNE(9,Mt,2,1,"ul"),t.k0s()}if(2&n){const i=t.XpG().$implicit,o=t.XpG();t.R7$(),t.HbH(i.topic_id==o.filter.topic_id?"actived":""),t.R7$(),t.BMQ("style",i.ishaschild?"visibility:unset":"visibility:hidden",t.$dS),t.R7$(),t.vxM(3,i.isexpanded?i.loading?4:5:3),t.R7$(3),t.Y8G("title",i.topic_title),t.R7$(),t.JRh(i.topic_title),t.R7$(),t.Y8G("ngIf",i.total_textbook),t.R7$(),t.vxM(9,i.isexpanded?9:-1)}}function Tt(n,s){if(1&n&&t.DNE(0,Pt,10,8,"li"),2&n){const i=s.$implicit,o=t.XpG();t.vxM(0,1300==(null==o.user?null:o.user.v_role)||i.total_textbook?0:-1)}}function yt(n,s){1&n&&(t.j41(0,"div",76)(1,"div",77),t.EFF(2,"Ch\u1ecdn ch\u01b0\u01a1ng tr\xecnh h\u1ecdc "),t.j41(3,"span",78),t.EFF(4,"b\u1ea1n c\u1ea7n gi\u1ea3i \u0111\xe1p!"),t.k0s()(),t.j41(5,"div",79),t.nrm(6,"ion-img",80)(7,"ion-img",81),t.k0s()())}function Ot(n,s){if(1&n){const i=t.RV6();t.j41(0,"div",82),t.bIt("click",function(){const e=t.eBV(i).$implicit,l=t.XpG();return t.Njj(l.detailTextBook(e.textbook_id))}),t.j41(1,"div",83)(2,"div",84),t.nrm(3,"ion-icon",85),t.k0s(),t.j41(4,"div",86)(5,"div",87),t.EFF(6),t.k0s(),t.j41(7,"div",88),t.EFF(8),t.k0s()()()()}if(2&n){let i,o;const e=s.$implicit;t.HbH(e.isaitrained?"bg-light bg-active-hover":"bg-secondary"),t.R7$(3),t.Mz_("src","../../../assets/icon/subject/",null!==(i=e.category_icon)&&void 0!==i?i:"none.svg",""),t.R7$(2),t.Y8G("title",e.textbook_title),t.R7$(),t.JRh(e.textbook_title),t.R7$(2),t.JRh(null!==(o=e.v_publisher_title)&&void 0!==o?o:e.v_textbook_catg_title)}}const jt=[{path:"",component:(()=>{var n;class s{constructor(o,e,l,a,c){this.router=o,this.activatedRoute=e,this.modalController=l,this.toastController=a,this.loadingController=c,this.APP_FUNC_FormatNumber=B.gs,this.envVersion=L.c.version,this.aiFaqs=z,this.appsettings={},this.readfileuploadurl="",this.filter={},this.topics=[],this.textBooks=[]}ngOnInit(){var o=this;(0,v.A)(function*(){var e;o.appsettings=yield(0,F.AC)(),o.appsettings.madonvi&&(o.user=yield(0,W.sx)(),o.readfileuploadurl=null!==(e=o.appsettings.readfileuploadurl)&&void 0!==e?e:"",o.refreshDataAll())})(),window.innerWidth>=1200&&(0,U.pJ)({callback:e=>{var l;this.tabDocument=null!==(l=e.tabDocument)&&void 0!==l?l:"faq"}})}refreshDataAll(o){let e=parseInt(this.activatedRoute.snapshot.queryParamMap.get("topic")||"0");this.refreshDataTopic({topic_id:e},()=>{e&&this.applyFilterTopic({topic_id:e}),o&&o()})}filterChange(o){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{topic:this.filter.topic_id||null},queryParamsHandling:"merge",replaceUrl:!0}),this.refreshDataTextBook(o)}refreshDataTopic(o,e){this.loadTopic(void 0,()=>{if(null!=o&&o.topic_id){var l;let{topic_id:c}=null!==(l=this.topics.find(O=>O.topic_id==o.topic_id))&&void 0!==l?l:{};var a;c?e&&e():(0,Y.Y5)({params:{userid:null===(a=this.user)||void 0===a?void 0:a.userid,topic_id:o.topic_id,statistic:V.C.textbook,page:1,limit:-1},callback:O=>{let J=O||[];J.forEach(P=>{let T=this.topics.find(X=>X.topic_id==P.topic_id);T?Object.assign(T,P):this.topics.push(P)}),J.map(P=>P.topic_pid).filter((P,T,X)=>X.indexOf(P)==T).forEach(P=>{this.topics.filter(T=>T.topic_id==P).forEach(T=>{T.isexpanded=!0,T.isloadedchild=!0})}),e&&e()}})}else e&&e()},!0)}loadTopic(o,e,l){var a;(0,Y.At)({loading:c=>{o&&(o.loading=c)},params:{userid:null===(a=this.user)||void 0===a?void 0:a.userid,topic_pid:null==o?void 0:o.topic_id,statistic:V.C.textbook,page:1,limit:-1},callback:c=>{if(this.topics=l?c||[]:this.topics.concat(c||[]),l){let u=[];this.topics.forEach(f=>{f.isexpanded=!0,f.isloadedchild=!0,u.push(new Promise(k=>{this.loadTopic(f,k)}))}),Promise.all(u).then(()=>{e&&e()})}else e&&e()}})}filterTopic(o,e){return o.filter(e?l=>l.topic_pid==e:l=>null==l.topic_pid||0==l.topic_pid)}expandTopic(o,e,l,a){null==o||o.preventDefault(),null==o||o.stopPropagation(),this.topics.filter(c=>c.topic_id==e).forEach(c=>{c.isexpanded=!l,c.isloadedchild||(c.isloadedchild=!0,this.loadTopic(c,a))})}applyFilterTopic(o){if(this.filter.topic_id!=o.topic_id){let e=this.topics.find(l=>l.topic_id==o.topic_id);if(e){let{topic_id:l,topic_title:a,topic_titles:c,category_id:u,category_title:f,category_titles:k}=e;Object.assign(this.filter,{topic_id:l,topic_title:a,topic_titles:c,category_id:u,category_title:f,category_titles:k}),this.filterChange()}}}refreshDataTextBook(o){this.textBook=void 0,this.iframeUrl=void 0,this.loadTextBook(e=>{o&&o()},!0)}loadTextBook(o,e){var l;(0,R.tZ)({loadingController:this.loadingController,params:{userid:null===(l=this.user)||void 0===l?void 0:l.userid,topic_id:this.filter.topic_id,category_id:this.filter.category_id,v_textbook_catg:this.filter.v_textbook_catg,v_publisher:this.filter.v_publisher,page:1,limit:-1},callback:a=>{this.textBooks=e?a||[]:this.textBooks.concat(a||[]),o&&o(this.textBooks)}})}detailTextBook(o,e){var l;o?(0,R._v)({loadingController:this.loadingController,params:{userid:null===(l=this.user)||void 0===l?void 0:l.userid,textbook_id:o,page:1,limit:-1},callback:a=>{var c;this.textBook=null!=a?a:{},this.iframeUrl=this.textBook.textbook_id&&this.textBook.isaitrained?`https://ai.codx.vn/ChatBox/DocumentIFrame?k=${L.c.ai_key}&docIds=${this.textBook.textbook_id}&email=${null===(c=this.user)||void 0===c?void 0:c.emailaddr}`:void 0,e&&e()}}):e&&e()}isTabActive(o){return this.tabDocument==o}setTabDocument(o){var e=this;return(0,v.A)(function*(){e.tabDocument=null!=o?o:"",(0,U.LK)({params:{tabDocument:e.tabDocument}})})()}navigateByUrl(o){var e=this;return(0,v.A)(function*(){e.router.navigateByUrl(o)})()}trainningAI(){var o=this;return(0,v.A)(function*(){var e,l,a,c;null===(e=o.textBook)||void 0===e||!e.textbook_id||null===(l=o.textBook)||void 0===l||!l.filepath||(0,S.fA)({loadingController:o.loadingController,params:{DocumentExternalId:null===(a=o.textBook)||void 0===a?void 0:a.textbook_id,FileUrl:o.readfileuploadurl+(null===(c=o.textBook)||void 0===c?void 0:c.filepath)},callback:u=>{var f,k;null!=u&&u.Succeeded&&(0,R.$1)({params:{userid:null===(f=o.user)||void 0===f?void 0:f.userid,textbook_id:null===(k=o.textBook)||void 0===k?void 0:k.textbook_id,ai_code:"lamgicoaicode"},callback:x=>{0==(null==x?void 0:x.returncode)?o.refreshDataAll():(0,w.c)(o.toastController,{},x).then(E=>{E.present()})}})}})})()}presentModalTextbookAdd(){var o=this;return(0,v.A)(function*(){let{topic_id:e,topic_title:l,topic_titles:a,category_id:c,category_title:u,category_titles:f}=o.filter;const k=yield o.modalController.create({component:M,componentProps:{textbook:Object.assign({},{topic_id:e,topic_title:l,topic_titles:a,category_id:c,category_title:u,category_titles:f,v_textbook_catg:10801,v_publisher:10901})}});k.onDidDismiss().then(x=>{"success"==x.role&&x.data&&o.refreshDataAll()}),k.present()})()}}return(n=s).\u0275fac=function(o){return new(o||n)(t.rXU(r.Ix),t.rXU(r.nX),t.rXU(d.W3),t.rXU(d.K_),t.rXU(d.Xi))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-Knowledge-mgmt"]],decls:47,vars:13,consts:[["treeTopic",""],["treeTopicNode",""],["templateBegin",""],["templateTextBook",""],[3,"isFullWidth"],["scroll-x","false","scroll-y","false"],[1,"w-100","h-100","d-flex"],[1,"flex-grow-1","d-flex","flex-column"],[1,"min-h-50","d-flex","align-items-center","bg-linear"],[1,"w-240","min-w-240","d-flex","align-items-center","justify-content-center"],[1,"fs-18"],[1,"flex-grow-1","d-flex","align-items-center","justify-content-between","px-3"],[1,"flex-grow-1","d-flex","align-items-center","justify-content-between"],[1,"flex-grow-1","d-flex"],[1,"w-240","min-w-240","h-100","tree-topic"],[1,"component-container"],["lines","none","detail","false"],["slot","start","src","../../../assets/icon-svg/dashboard/topic.svg",1,"mr-3"],[1,"fw-700"],[3,"ngTemplateOutlet"],[1,"flex-grow-1"],["frameborder","0","allowfullscreen","","webkitallowfullscreen","","allowtransparency","true","allow","autoplay; fullscreen",1,"w-100","h-100","min-w-480",3,"src"],[1,"w-480","min-w-280","max-w-480","d-flex","flex-column","faq-bar"],[1,"px-3","py-1"],[1,"fs-14"],[1,"d-flex","align-items-center","line-height-0","mt-1"],["src","../../../assets/favicon/favicon-16x16.png","alt","Tabca-16x16"],[1,"text-muted","ml-1","fs-12"],["id","present-popover-select-textbook",1,"d-flex","align-items-center","justify-content-between","min-w-200","max-w-240","h-32","px-2","text-ellipsis","cursor-pointer","select-textbook"],[1,"fs-14","mr-2","text-ellipsis"],["name","chevron-down-outline",1,"fs-16"],["mode","ios","trigger","present-popover-select-textbook","trigger-action","click","dismiss-on-select","true"],[1,"ion-padding"],[1,"w-320","max-h-240","row","align-items-start"],[1,"col-12","pb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"w-100","h-100","d-flex","align-items-center","justify-content-center"],[1,"mw-100","p-3","text-center","text-wrap"],["target","_blank",3,"href"],[1,"w-100","h-100","min-w-480","d-flex","flex-column"],[1,"fs-30","fw-700","text-center","mt-4","mb-5"],[1,"px-4"],[1,"row","align-items-start"],[1,"col-12","col-lg-6","mb-3"],[1,"d-flex","align-items-center","justify-content-between","bg-f5","min-h-50","pl-3"],["color","medium","fill","clear",1,"btn-close",3,"click"],["name","close-outline",1,"fs-24"],[1,"p-3"],["value","accordion-ai-faq-0"],[3,"value"],["slot","header","lines","none"],[1,"fs-16","text-wrap"],["slot","content",1,"ion-padding","fs-14",3,"innerHTML"],[1,"w-800","min-w-280","max-w-800","d-flex","flex-column","setting-bar"],[1,"d-flex","align-items-center","justify-content-end","bg-warning","min-h-50","pl-3"],["mode","ios","size","small","color","linear"],["mode","ios","size","small","color","primary",3,"click"],["name","cloud-upload-outline",1,"ml-2"],[1,"line-height-0"],["mode","ios","size","small","color","linear",3,"click"],["name","sparkles-outline",1,"ml-2"],["frameborder","0","allowfullscreen","","webkitallowfullscreen","","allowtransparency","true","allow","autoplay; fullscreen",1,"w-100","h-100",3,"src"],[1,"min-w-50px","w-50px","d-flex","flex-column","tool-bar","overflow-auto"],[1,"min-h-50px","d-flex","align-items-center","justify-content-center","border-bottom","cursor-pointer",3,"click"],["name","chatbubbles-outline",1,"fs-24"],["name","settings-outline",1,"fs-24"],["lines","none"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],["button","","detail","false",1,"ion-no-padding",3,"click"],["slot","start","color","medium","fill","clear",3,"click"],["name","caret-forward-outline"],[3,"title"],["class","fs-12","color","medium",4,"ngIf"],["color","dark"],["name","caret-down-outline"],["color","medium",1,"fs-12"],[1,"w-100","h-100","min-w-480","d-flex","flex-column","align-items-center","justify-content-center","p-3"],[1,"fs-28","fw-500","mb-3","text-center",2,"color","#311A8C"],[1,"d-inline-block"],[1,"d-flex","align-items-center","justify-content-center"],["src","../../../assets/image/ai/knowledge-qna.svg",1,"max-h-100px","mr-3"],["src","../../../assets/image/ai/tabca-bot.gif",1,"w-280","min-w-280"],[1,"mw-100","textbook-item","d-inline-block","cursor-pointer",3,"click"],[1,"min-w-200","mw-100","min-h-60","d-flex","align-items-center"],[1,"min-w-60","d-flex","align-items-center","justify-content-center"],[1,"fs-30",3,"src"],[1,"py-2","pr-3","text-ellipsis"],[1,"line-height-24","fs-18","fw-500","text-ellipsis",3,"title"],[1,"line-height-20","fs-14","text-muted"]],template:function(o,e){if(1&o&&(t.nrm(0,"app-header",4),t.j41(1,"ion-content",5)(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"span",10),t.EFF(7),t.nI1(8,"translate"),t.k0s()(),t.j41(9,"div",11)(10,"div",12)(11,"span",10),t.EFF(12),t.k0s(),t.DNE(13,ot,6,1),t.k0s()()(),t.j41(14,"div",13)(15,"div",14)(16,"ion-content",15)(17,"ion-item",16),t.nrm(18,"ion-icon",17),t.j41(19,"ion-label",18),t.EFF(20),t.nI1(21,"translate"),t.k0s()(),t.eu8(22,19),t.k0s()(),t.j41(23,"div",20),t.DNE(24,et,2,4,"iframe",21)(25,it,2,1)(26,rt,9,0)(27,at,1,1),t.k0s()()(),t.DNE(28,st,12,0,"div",22)(29,gt,15,5)(30,mt,5,4),t.k0s()(),t.j41(31,"ion-footer")(32,"div",23)(33,"div",24),t.EFF(34,"\xa9 Copyright 2024 by L\u1ea1c Vi\u1ec7t"),t.k0s(),t.j41(35,"div",25),t.nrm(36,"img",26),t.j41(37,"span",27),t.EFF(38),t.k0s()()()(),t.DNE(39,vt,3,1,"ng-template",null,0,t.C5r)(41,Tt,1,1,"ng-template",null,1,t.C5r)(43,yt,8,0,"ng-template",null,2,t.C5r)(45,Ot,9,7,"ng-template",null,3,t.C5r)),2&o){let l;const a=t.sdS(40);t.Y8G("isFullWidth",!0),t.R7$(7),t.SpI("AI - ",t.bMT(8,9,"KnowledgeQnA"),""),t.R7$(5),t.JRh(null==(null!==(l=e.filter.topic_titles)&&void 0!==l?l:e.filter.topic_title)||null==(l=(null!=l?l:e.filter.topic_title).split(";"))||null==(l=l.reverse())?null:l.join(" / ")),t.R7$(),t.vxM(13,e.textBook&&e.textBooks.length>1?13:-1),t.R7$(7),t.JRh(t.bMT(21,11,"GradeLevel")),t.R7$(2),t.Y8G("ngTemplateOutlet",a),t.R7$(2),t.vxM(24,e.iframeUrl?24:e.textBook?25:e.textBooks.length?26:27),t.R7$(4),t.vxM(28,"faq"==e.tabDocument?28:"setting"==e.tabDocument&&1300==(null==e.user?null:e.user.v_role)?29:30),t.R7$(10),t.SpI("v",e.envVersion,"")}},dependencies:[C.Sq,C.bT,C.T3,d.xk,d.YH,d.In,d.Jm,d.W9,d.M0,d.iq,d.KW,d.uz,d.he,d.nf,d.w2,d.CF,H.l,Q.m,_.D9],styles:["[_nghost-%COMP%]{--color-active: #333333;--background-active: #FFDB59}.container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%], .container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto}.faq-bar[_ngcontent-%COMP%], .setting-bar[_ngcontent-%COMP%], .tool-bar[_ngcontent-%COMP%]{position:relative;border-left:1px solid #ECECEC}.tree-topic[_ngcontent-%COMP%]{position:relative;border-right:1px solid #ECECEC}.tree-topic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:block;padding:0;margin:0}.tree-topic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block}.tree-topic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:block;padding-left:1rem}.tree-topic[_ngcontent-%COMP%]   ion-button[slot=start][_ngcontent-%COMP%]{margin-right:2px}.tree-topic[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end: .5rem;font-size:14px}.tree-topic[_ngcontent-%COMP%]   ion-item.actived[_ngcontent-%COMP%]{--color: var(--color-active, #333);--background: var(--background-active, #E5F4FF)}.tree-topic[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:14px}.tree-topic[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{width:14px;height:14px}.tree-topic[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{background:transparent;color:#999}.select-textbook[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #444;background-color:#ffffff59;color:#000}.textbook-item[_ngcontent-%COMP%]{border:1px solid var(--ion-color-dark);border-radius:6px}.box-chat[_ngcontent-%COMP%]{position:relative;width:100%;max-width:1080px;height:100%;border-right:1px solid #ECECEC}.box-chat[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{font-weight:500;font-size:18px}.box-chat[_ngcontent-%COMP%]   .component-header[_ngcontent-%COMP%]{height:3rem}.box-chat[_ngcontent-%COMP%]   .component-header[_ngcontent-%COMP%] + .component-content[_ngcontent-%COMP%]{padding-top:3.5rem}.box-chat[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{display:block;width:100%;height:100%;padding:0;margin:0;border:0;outline:none;background-color:#fff}.main-content[_ngcontent-%COMP%]{position:relative;min-width:240px}.main-content[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: #f5f5f5}.main-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{display:block;width:100%;height:100%;padding:0;margin:0;border:0;outline:none;background-color:#fff}ion-accordion[_ngcontent-%COMP%]{border:0;margin-bottom:1rem;border-radius:.5rem;--ion-background-color: #f5f5f5}ion-accordion[_ngcontent-%COMP%]   [slot=header][_ngcontent-%COMP%]{font-weight:400;white-space:wrap}ion-accordion.accordion-expanded[_ngcontent-%COMP%]{background:var(--ion-color-secondary);--ion-background-color: var(--ion-color-secondary)}ion-accordion.accordion-expanded[_ngcontent-%COMP%]   [slot=header][_ngcontent-%COMP%]{--background: var(--ion-color-secondary);color:#5f6ce1;font-weight:500}ion-button.btn-close[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:0}"]}),s})()}];let wt=(()=>{var n;class s{}return(n=s).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[r.iI.forChild(jt),r.iI]}),s})();var Rt=p(3890);let Et=(()=>{var n;class s{}return(n=s).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[C.MD,y.YN,d.bv,wt,Rt.x]}),s})()},3753:(N,j,p)=>{p.d(j,{t:()=>t});var C=p(467),y=p(8671),d=p(2635),r=p(4438),v=p(6637),F=p(177),G=p(31);function A(_,h){1&_&&(r.qex(0),r.j41(1,"ion-content")(2,"div",2)(3,"div",3),r.nrm(4,"ion-spinner",4),r.k0s()()(),r.bVm())}function $(_,h){if(1&_){const m=r.RV6();r.qex(0),r.j41(1,"ion-item",9),r.bIt("click",function(){const b=r.eBV(m).$implicit,M=r.XpG(3);return r.Njj(M.filterChange(b.lookup_value))}),r.j41(2,"ion-label"),r.EFF(3),r.k0s()(),r.bVm()}if(2&_){const m=h.$implicit,g=r.XpG(3);r.R7$(),r.BMQ("color",m.lookup_value==g.selectedId?"primary":""),r.R7$(2),r.JRh(m.lookup_title)}}function I(_,h){if(1&_&&(r.j41(0,"ion-list",7),r.DNE(1,$,4,2,"ng-container",8),r.k0s()),2&_){const m=r.XpG(2);r.R7$(),r.Y8G("ngForOf",m.lookups)}}function B(_,h){1&_&&(r.j41(0,"div",3)(1,"i"),r.EFF(2),r.nI1(3,"translate"),r.k0s()()),2&_&&(r.R7$(2),r.JRh(r.bMT(3,1,"DataNotFound")))}function K(_,h){if(1&_){const m=r.RV6();r.qex(0),r.j41(1,"ion-item",9),r.bIt("click",function(){const b=r.eBV(m).$implicit,M=r.XpG(3);return r.Njj(M.filterChange(b.lookup_value))}),r.j41(2,"ion-label",10),r.EFF(3),r.k0s()(),r.bVm()}if(2&_){const m=h.$implicit,g=r.XpG(3);r.R7$(),r.BMQ("color",m.lookup_value==g.selectedId?"primary":""),r.R7$(),r.Y8G("color",m.color),r.R7$(),r.JRh(m.lookup_title)}}function w(_,h){if(1&_&&(r.qex(0),r.nrm(1,"hr"),r.j41(2,"ion-list",7),r.DNE(3,K,4,3,"ng-container",8),r.k0s(),r.bVm()),2&_){const m=r.XpG(2);r.R7$(3),r.Y8G("ngForOf",m.lookups_d2)}}function R(_,h){if(1&_&&(r.qex(0),r.DNE(1,I,2,1,"ion-list",5)(2,B,4,3,"div",6)(3,w,4,1,"ng-container",1),r.bVm()),2&_){const m=r.XpG();r.R7$(),r.Y8G("ngIf",m.lookups.length),r.R7$(),r.Y8G("ngIf",!m.lookups.length),r.R7$(),r.Y8G("ngIf",m.lookups_d2.length)}}let t=(()=>{var _;class h{constructor(g){this.popoverController=g,this.selectedId=0,this.lookup_key="",this.lookups_d2=[],this.dataInit={loading:!0},this.lookups=[]}ngOnInit(){var g=this;(0,C.A)(function*(){g.user=yield(0,d.Nk)(),g.loadLookup()})()}loadLookup(){var g;(0,y.$)({loading:b=>{this.dataInit.loading=b},params:{userid:null===(g=this.user)||void 0===g?void 0:g.userid,lookup_key:this.lookup_key},callback:b=>{this.lookups=b||[]}})}filterChange(g){var b;this.popoverController.dismiss(null!==(b=this.lookups.find(M=>M.lookup_value==g))&&void 0!==b?b:this.lookups_d2.find(M=>M.lookup_value==g),"confirm")}}return(_=h).\u0275fac=function(g){return new(g||_)(r.rXU(v.IE))},_.\u0275cmp=r.VBU({type:_,selectors:[["app-popover-lookup"]],inputs:{selectedId:"selectedId",lookup_key:"lookup_key",lookups_d2:"lookups_d2"},decls:3,vars:2,consts:[[1,"menu-lookup","overflow-auto"],[4,"ngIf"],[1,"d-flex","w-100","h-100","align-items-center","justify-content-center"],[1,"px-3","py-1"],["name","dots","color","dark",1,"align-middle"],["lines","full",4,"ngIf"],["class","px-3 py-1",4,"ngIf"],["lines","full"],[4,"ngFor","ngForOf"],["button","","detail","false",3,"click"],[3,"color"]],template:function(g,b){1&g&&(r.j41(0,"div",0),r.DNE(1,A,5,0,"ng-container",1)(2,R,4,3,"ng-container",1),r.k0s()),2&g&&(r.R7$(),r.Y8G("ngIf",b.dataInit.loading),r.R7$(),r.Y8G("ngIf",!b.dataInit.loading))},dependencies:[F.Sq,F.bT,v.W9,v.uz,v.he,v.nf,v.w2,G.D9],styles:[".menu-lookup[_ngcontent-%COMP%]{width:240px;max-height:480px;border-top:3px solid #5F6CE1}hr[_ngcontent-%COMP%]{margin:0}"]}),h})()}}]);