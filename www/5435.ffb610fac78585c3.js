"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5435],{5781:(R,A,l)=>{l.d(A,{Cr:()=>O,Rq:()=>b,br:()=>C,e6:()=>M});var _=l(5972);function C(a){var o,d,t,r,e,u,v,P,f,h,$,y;a.params=a.params||{},a.params.page=a.params.page||1,a.params.limit=a.params.limit||1,(0,_.hm)({url:"api/Media/Search",params:{getby:null!==(o=a.params.userid)&&void 0!==o?o:null,gettype:a.params.gettype||null,getfrom:a.params.getfrom||null,media_id:null!==(d=a.params.media_id)&&void 0!==d?d:null,media_title:null!==(t=a.params.media_title)&&void 0!==t?t:null,topic_id:null!==(r=a.params.topic_id)&&void 0!==r?r:null,category_id:null!==(e=a.params.category_id)&&void 0!==e?e:null,directory_id:null!==(u=a.params.directory_id)&&void 0!==u?u:null,v_mediatype:null!==(v=a.params.v_mediatype)&&void 0!==v?v:null,v_mediatypes:null!==(P=a.params.v_mediatypes)&&void 0!==P?P:null,v_osstype:null!==(f=a.params.v_osstype)&&void 0!==f?f:null,tags:null!==(h=a.params.tags)&&void 0!==h?h:null,sortfield:null!==($=a.params.sortfield)&&void 0!==$?$:null,sorttype:null!==(y=a.params.sorttype)&&void 0!==y?y:null,posstart:(a.params.page-1)*a.params.limit,numofrow:a.params.limit},success:i=>{var s;"function"==typeof a.callback&&a.callback(null!==(s=i.data)&&void 0!==s?s:null)},error:i=>{"function"==typeof a.callback&&a.callback(),console.error(i)},loading:a.loading,loadingController:a.loadingController})}function M(a){var o,d;a.params=a.params||{},(0,_.hm)({url:"api/Media/Detail",params:{getby:null!==(o=a.params.userid)&&void 0!==o?o:null,media_id:null!==(d=a.params.media_id)&&void 0!==d?d:null},success:t=>{var r;"function"==typeof a.callback&&a.callback(null!==(r=t.data)&&void 0!==r?r:null)},error:t=>{"function"==typeof a.callback&&a.callback(),console.error(t)},loading:a.loading,loadingController:a.loadingController})}function b(a){var o,d,t,r,e,u,v,P,f,h,$,y,i,s,m,n,c,p;a.params=a.params||{},(0,_.Ll)({url:"api/Media/AddUpdate",params:{media_id:null!==(o=a.params.media_id)&&void 0!==o?o:null,media_title:null!==(d=a.params.media_title)&&void 0!==d?d:null,media_description:null!==(t=a.params.media_description)&&void 0!==t?t:null,media_content:null!==(r=a.params.media_content)&&void 0!==r?r:null,filepath:null!==(e=a.params.filepath)&&void 0!==e?e:null,filepath_extract:null!==(u=a.params.filepath_extract)&&void 0!==u?u:null,link_file:null!==(v=a.params.link_file)&&void 0!==v?v:null,link_share:null!==(P=a.params.link_share)&&void 0!==P?P:null,cover:null!==(f=a.params.cover)&&void 0!==f?f:null,v_mediatype:null!==(h=a.params.v_mediatype)&&void 0!==h?h:null,v_osstype:null!==($=a.params.v_osstype)&&void 0!==$?$:null,v_sharingmode:null!==(y=a.params.v_sharingmode)&&void 0!==y?y:null,topic_id:null!==(i=a.params.topic_id)&&void 0!==i?i:null,category_id:null!==(s=a.params.category_id)&&void 0!==s?s:null,directory_id:null!==(m=a.params.directory_id)&&void 0!==m?m:null,tags:null!==(n=a.params.tags)&&void 0!==n?n:null,createdby:null!==(c=a.params.userid)&&void 0!==c?c:null,modifiedby:null!==(p=a.params.userid)&&void 0!==p?p:null},success:g=>{var E;"function"==typeof a.callback&&a.callback(null!==(E=g.data)&&void 0!==E?E:null)},error:g=>{"function"==typeof a.callback&&a.callback(),console.error(g)},loading:a.loading,loadingController:a.loadingController})}function O(a){var o,d,t;a.params=a.params||{},(0,_.sj)({url:"api/Media/Delete",params:{deletedby:null!==(o=a.params.userid)&&void 0!==o?o:null,media_id:null!==(d=a.params.media_id)&&void 0!==d?d:null,createdby:null!==(t=a.params.userid)&&void 0!==t?t:null},success:r=>{var e;"function"==typeof a.callback&&a.callback(null!==(e=r.data)&&void 0!==e?e:null)},error:r=>{"function"==typeof a.callback&&a.callback(),console.error(r)},loading:a.loading,loadingController:a.loadingController})}},5435:(R,A,l)=>{l.r(A),l.d(A,{MediaEmbedPageModule:()=>y});var _=l(177),C=l(9417),M=l(6637),b=l(3658),O=l(467),a=l(5862),o=l(5972),d=l(5781),t=l(6539),r=l(5414),e=l(4438),u=l(2706);function v(i,s){if(1&i){const m=e.RV6();e.j41(0,"iframe",13),e.nI1(1,"safe"),e.bIt("load",function(c){e.eBV(m);const p=e.XpG();return e.Njj(p.loadIframe(c))}),e.k0s()}if(2&i){const m=e.XpG();e.Y8G("src",e.i5U(1,1,m.iframeSrc,"resourceUrl"),e.f$h)}}const f=[{path:"",component:(()=>{var i;class s{constructor(n,c,p){this.activatedRoute=n,this.toastController=c,this.loadingController=p,this.appsettings={},this.readfileuploadurl="",this.iframeSrc=""}ngOnInit(){var n=this;(0,O.A)(function*(){var c,p;if(n.appsettings=yield(0,o.AC)(),!n.appsettings.madonvi)return;n.user=yield(0,t.sx)(),n.readfileuploadurl=null!==(c=n.appsettings.readfileuploadurl)&&void 0!==c?c:"";let g=null!==(p=n.activatedRoute.snapshot.params.id)&&void 0!==p?p:"";g&&(n.media_id=parseInt(g)),n.refreshData()})()}ngAfterViewInit(){}ngOnDestroy(){var n;null===(n=this.iframe)||void 0===n||n.removeAttribute("src")}refreshData(){var n=this;return(0,O.A)(function*(){var c;(0,d.e6)({loadingController:n.loadingController,params:{userid:null===(c=n.user)||void 0===c?void 0:c.userid,media_id:n.media_id},callback:p=>{var g,E,T,x,I,U,k,w;n.media=p||{},n.media.media_id?n.iframeSrc=(0,a._KM)({readfileuploadurl:n.appsettings.readfileuploadurl,type:null===(g=n.media)||void 0===g?void 0:g.v_mediatype,oss:null===(E=n.media)||void 0===E?void 0:E.v_osstype,path:null!==(T=null===(x=n.media)||void 0===x?void 0:x.filepath_extract)&&void 0!==T?T:null===(I=n.media)||void 0===I?void 0:I.filepath,url:null!==(U=null===(k=n.media)||void 0===k?void 0:k.link_file)&&void 0!==U?U:null===(w=n.media)||void 0===w?void 0:w.link_share}):(0,r.c)(n.toastController,{color:"danger",message:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u!"}).then(D=>D.present())}})})()}loadIframe(n){this.iframe=n.target}}return(i=s).\u0275fac=function(n){return new(n||i)(e.rXU(b.nX),e.rXU(M.K_),e.rXU(M.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-media-embed"]],decls:14,vars:2,consts:[["scroll-x","false","scroll-y","false",3,"fullscreen"],[1,"container-grid","grid-column"],[1,"container-head","container-top"],[1,"container-body","grid-grow"],[1,"container-grid","grid-row"],[1,"container-left"],[1,"container-center"],[1,"grid-grow"],[1,"main-container","overflow-auto"],["scroll-x","false","scroll-y","false"],["frameborder","0","allowfullscreen","","webkitallowfullscreen","","allowtransparency","true","allow","fullscreen",3,"src","load",4,"ngIf"],[1,"container-bottom"],[1,"container-right"],["frameborder","0","allowfullscreen","","webkitallowfullscreen","","allowtransparency","true","allow","fullscreen",3,"load","src"]],template:function(n,c){1&n&&(e.j41(0,"ion-content",0)(1,"div",1),e.nrm(2,"div",2),e.j41(3,"div",3)(4,"div",4),e.nrm(5,"div",5),e.j41(6,"div",6)(7,"div",1)(8,"div",7)(9,"div",8)(10,"ion-content",9),e.DNE(11,v,2,4,"iframe",10),e.k0s()()(),e.nrm(12,"div",11),e.k0s()(),e.nrm(13,"div",12),e.k0s()()()()),2&n&&(e.Y8G("fullscreen",!0),e.R7$(11),e.Y8G("ngIf",c.iframeSrc))},dependencies:[_.bT,M.W9,u.m],styles:[".container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-head[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 2px #0000001a}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:-2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto;width:calc(100% - 480px)}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .container-bottom[_ngcontent-%COMP%]{position:relative;z-index:2}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1;-webkit-user-select:none;user-select:none;background-color:#fafafa}.group-action-paging[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;right:1rem;line-height:0;-webkit-user-select:none;user-select:none}.group-action-paging[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:0 1rem;vertical-align:middle;font-size:18px;color:#fab11d}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{vertical-align:middle}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:34px;width:34px}iframe[_ngcontent-%COMP%]{display:block;width:100%;height:100%;padding:0;margin:0;border:0;outline:none;background-color:#fff}"]}),s})()}];let h=(()=>{var i;class s{}return(i=s).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[b.iI.forChild(f),b.iI]}),s})();var $=l(3890);let y=(()=>{var i;class s{}return(i=s).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[_.MD,C.YN,M.bv,h,$.x]}),s})()},6539:(R,A,l)=>{l.d(A,{JD:()=>a,lJ:()=>o,sx:()=>O});var _=l(467),C=l(2635),M=l(8833),b=l(5972);const O=function(){var t=(0,_.A)(function*(){return yield(0,C.Nk)()});return function(){return t.apply(this,arguments)}}(),a=function(){var t=(0,_.A)(function*(r){let e=null!=r?r:yield(0,b.AC)(),u=yield(0,C.Nk)();return(!e.madonvi||!u.userid||e.madonvi!=(null==u?void 0:u.madonvi))&&window.location.replace(M._.LANDING_PAGE+`?require=signin&returnurl=${encodeURIComponent(window.location.href)}`),u});return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,_.A)(function*(){return!!(yield(0,C.Nk)()).userid});return function(){return t.apply(this,arguments)}}()}}]);