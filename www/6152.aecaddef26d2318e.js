"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6152],{8671:(Y,j,r)=>{r.d(j,{$:()=>A});var R=r(5972);function A(c){c.params=c.params||{},(0,R.hm)({url:"api/Lookup/get",params:{lookup_key:c.params.lookup_key||null},success:o=>{"function"==typeof c.callback&&c.callback(null==o?void 0:o.data)},error:o=>{"function"==typeof c.callback&&c.callback(),console.error(c,o)},loading:c.loading,loadingController:c.loadingController})}},8885:(Y,j,r)=>{r.r(j),r.d(j,{MediaViewerPageModule:()=>zi});var R=r(177),A=r(9417),c=r(6637),o=r(3658),f=r(467),N=r(4569),S=r(1632),H=r(7331),E=r(5312),J=r(8408),W=r(5178),K=r(2527),L=r.n(K),z=r(5972),Q=r(5781),m=r(7868),v=r(4835),p=r(6539),_=r(1312),u=r(8833),P=r(4552),ri=r(1951),si=r(5414),X=r(1400),b=r(1607),i=r(4438),di=r(345),_i=r(7704),pi=r(2706),ui=r(31);const gi=["canvas"];function fi(e,s){if(1&e){const t=i.RV6();i.j41(0,"ion-button",15),i.nI1(1,"translate"),i.bIt("click",function(a){i.eBV(t);const l=i.XpG(2);return i.Njj(l.presentModalAiImage(a))}),i.nrm(2,"ion-icon",16),i.k0s()}2&e&&i.Y8G("title",i.bMT(1,1,"CreatedWithAI"))}function vi(e,s){if(1&e){const t=i.RV6();i.j41(0,"ion-button",15),i.nI1(1,"translate"),i.bIt("click",function(){i.eBV(t);const a=i.XpG(2);return i.Njj(a.AI_recommend(a.v_functionlimit.GenAITaoHinhAnh))}),i.nrm(2,"ion-icon",16),i.k0s()}2&e&&i.Y8G("title",i.bMT(1,1,"UpgradeTabcaProNow"))}function hi(e,s){if(1&e&&i.DNE(0,fi,3,3,"ion-button",14)(1,vi,3,3),2&e){const t=i.XpG();i.vxM(0,t.membership.GenAITaoHinhAnh?0:1)}}function bi(e,s){if(1&e){const t=i.RV6();i.j41(0,"div",18)(1,"ion-item",5),i.bIt("click",function(){const a=i.eBV(t).$implicit,l=i.XpG(2);return i.Njj(l.switchMedia(a.media_id))}),i.j41(2,"ion-thumbnail"),i.nrm(3,"img",19),i.k0s()()()}if(2&e){const t=s.$implicit,n=i.XpG(2);i.R7$(3),i.Y8G("src",t.cover?n.readfileuploadurl+t.cover:"assets/image/media/image.svg",i.B4B)("alt",t.media_title)}}function Ci(e,s){if(1&e&&(i.j41(0,"div",12)(1,"div",17),i.Z7z(2,bi,4,2,"div",18,i.fX1),i.k0s()()),2&e){const t=i.XpG();i.R7$(2),i.Dyx(t.medias_related)}}function Mi(e,s){if(1&e&&i.nrm(0,"img",19),2&e){const t=i.XpG(3);i.Y8G("src",t.viewOptions.url,i.B4B)("alt",t.media.media_title)}}function xi(e,s){if(1&e&&(i.j41(0,"div",40),i.DNE(1,Mi,1,2,"img",41),i.k0s()),2&e){const t=i.XpG(2);i.BMQ("style",t.media.bigcover?"--bg-img:url("+t.readfileuploadurl+t.media.bigcover+")":"",i.$dS),i.R7$(),i.Y8G("ngIf",t.viewOptions.url)}}function Pi(e,s){if(1&e&&(i.j41(0,"div",40),i.nrm(1,"canvas",null,0),i.k0s()),2&e){const t=i.XpG(2);i.BMQ("style",t.media.bigcover?"--bg-img:url("+t.readfileuploadurl+t.media.bigcover+")":"",i.$dS)}}function wi(e,s){if(1&e){const t=i.RV6();i.j41(0,"iframe",44),i.nI1(1,"safe"),i.bIt("load",function(a){i.eBV(t);const l=i.XpG(3);return i.Njj(l.loadIframe(a))}),i.k0s()}if(2&e){const t=i.XpG(3);i.Y8G("src",i.i5U(1,1,t.viewOptions.url,"resourceUrl"),i.f$h)}}function ki(e,s){if(1&e&&(i.j41(0,"div",42),i.DNE(1,wi,2,4,"iframe",43),i.k0s()),2&e){const t=i.XpG(2);i.BMQ("style",t.media.bigcover?"--bg-img:url("+t.readfileuploadurl+t.media.bigcover+")":"",i.$dS),i.R7$(),i.Y8G("ngIf",t.viewOptions.url)}}function Ti(e,s){if(1&e){const t=i.RV6();i.j41(0,"ion-button",48),i.nI1(1,"translate"),i.bIt("click",function(){i.eBV(t);const a=i.XpG(3);return i.Njj(a.downloadMedia())}),i.nrm(2,"ion-icon",49),i.j41(3,"ion-label"),i.EFF(4),i.nI1(5,"translate"),i.k0s()()}2&e&&(i.Y8G("title",i.bMT(1,2,"Download")),i.R7$(4),i.JRh(i.bMT(5,4,"Download")))}function yi(e,s){1&e&&(i.j41(0,"ion-button",50),i.nrm(1,"ion-icon",51),i.j41(2,"ion-label"),i.EFF(3),i.nI1(4,"translate"),i.k0s()()),2&e&&(i.Y8G("disabled",!0),i.R7$(3),i.JRh(i.bMT(4,2,"Download")))}function Ii(e,s){if(1&e){const t=i.RV6();i.DNE(0,Ti,6,6,"ion-button",45)(1,yi,5,4),i.j41(2,"ion-button",46),i.nI1(3,"translate"),i.bIt("click",function(a){i.eBV(t);const l=i.XpG(2);return i.Njj(l.presentModalMediaShare(a))}),i.nrm(4,"ion-icon",47),i.k0s()}if(2&e){const t=i.XpG(2);i.vxM(0,t.media.isdownload?0:1),i.R7$(2),i.Y8G("title",i.bMT(3,2,"Share"))}}function ji(e,s){if(1&e){const t=i.RV6();i.j41(0,"ion-button",48),i.nI1(1,"translate"),i.bIt("click",function(){i.eBV(t);const a=i.XpG(3);return i.Njj(a.downloadMedia())}),i.nrm(2,"ion-icon",49),i.j41(3,"ion-label"),i.EFF(4),i.nI1(5,"translate"),i.k0s()()}2&e&&(i.Y8G("title",i.bMT(1,2,"Download")),i.R7$(4),i.JRh(i.bMT(5,4,"Download")))}function Ri(e,s){if(1&e){const t=i.RV6();i.j41(0,"div",53)(1,"div",54),i.nrm(2,"ion-icon",55),i.j41(3,"b",56),i.EFF(4,"Tabca Pro"),i.k0s()(),i.j41(5,"div",57),i.EFF(6,"N\xe2ng c\u1ea5p t\xe0i kho\u1ea3n Pro \u0111\u1ec3 t\u1ea3i v\u1ec1 v\xe0 t\u1ea1o h\xecnh \u1ea3nh b\u1eb1ng AI."),i.k0s(),i.j41(7,"ion-button",58),i.nI1(8,"translate"),i.bIt("click",function(){i.eBV(t);const a=i.XpG(3);return i.Njj(a.AI_recommend(a.v_functionlimit.TaiVeCacHocLieuHeThongCungCap))}),i.j41(9,"ion-label"),i.EFF(10),i.nI1(11,"translate"),i.k0s()()()}2&e&&(i.R7$(7),i.Y8G("title",i.bMT(8,2,"UpgradeTabcaProNow")),i.R7$(3),i.JRh(i.bMT(11,4,"Upgrade")))}function Ei(e,s){1&e&&(i.j41(0,"ion-button",50),i.nrm(1,"ion-icon",51),i.j41(2,"ion-label"),i.EFF(3),i.nI1(4,"translate"),i.k0s()()),2&e&&(i.Y8G("disabled",!0),i.R7$(3),i.JRh(i.bMT(4,2,"Download")))}function Oi(e,s){if(1&e&&(i.DNE(0,ji,6,6,"ion-button",45)(1,Ri,12,6)(2,Ei,5,4),i.j41(3,"ion-button",52),i.nI1(4,"translate"),i.nrm(5,"ion-icon",47),i.k0s()),2&e){const t=i.XpG(2);i.vxM(0,t.media.isdownload&&t.media.ispublic&&t.membership.TaiVeCacHocLieuHeThongCungCap?0:t.media.isdownload&&t.media.ispublic&&!t.membership.TaiVeCacHocLieuHeThongCungCap?1:2),i.R7$(3),i.Y8G("title",i.bMT(4,3,"Share"))("disabled",!0)}}function Vi(e,s){if(1&e&&(i.j41(0,"p"),i.EFF(1),i.nI1(2,"translate"),i.k0s()),2&e){const t=i.XpG(2);i.R7$(),i.E5c("",i.bMT(2,3,"Size"),": ",t.media.width," x ",t.media.height," px")}}function Gi(e,s){if(1&e&&(i.j41(0,"p"),i.EFF(1),i.nI1(2,"translate"),i.k0s()),2&e){const t=i.XpG(2);i.R7$(),i.Lme("",i.bMT(2,2,"MediaType"),": ",t.media.ext,"")}}function $i(e,s){if(1&e&&(i.j41(0,"div",37),i.nrm(1,"ion-icon",59),i.j41(2,"span",60),i.EFF(3),i.k0s()()),2&e){const t=i.XpG(2);i.Y8G("title",t.media.topic_titles),i.R7$(3),i.JRh(t.media.topic_titles.split(";").reverse().join(" / "))}}function Fi(e,s){if(1&e&&(i.j41(0,"div",37),i.nrm(1,"ion-icon",61),i.j41(2,"span",60),i.EFF(3),i.k0s()()),2&e){const t=i.XpG(2);i.Y8G("title",t.media.category_titles),i.R7$(3),i.JRh(t.media.category_titles.split(";").reverse().join(" / "))}}function Di(e,s){if(1&e&&(i.j41(0,"div",37),i.nrm(1,"ion-icon",62),i.j41(2,"span",60),i.EFF(3),i.k0s()()),2&e){const t=i.XpG(2);i.Y8G("title",t.media.directory_titles),i.R7$(3),i.JRh(t.media.directory_titles.split(";").reverse().join(" / "))}}function Ai(e,s){if(1&e&&(i.j41(0,"ion-button",64),i.nrm(1,"ion-icon",65),i.j41(2,"ion-label",6),i.EFF(3),i.k0s()()),2&e){const t=s.$implicit;i.Y8G("title",t),i.R7$(3),i.JRh(t)}}function Xi(e,s){if(1&e&&(i.j41(0,"ion-button",64),i.nrm(1,"ion-icon",66),i.j41(2,"ion-label",6),i.EFF(3),i.k0s()()),2&e){const t=s.$implicit;i.Y8G("title",t),i.R7$(3),i.JRh(t)}}function Bi(e,s){if(1&e&&(i.j41(0,"ion-button",64),i.nrm(1,"ion-icon",67),i.j41(2,"ion-label",6),i.EFF(3),i.k0s()()),2&e){const t=s.$implicit;i.Y8G("title",t),i.R7$(3),i.JRh(t)}}function Ni(e,s){if(1&e&&(i.j41(0,"ion-button",64),i.nrm(1,"ion-icon",68),i.j41(2,"ion-label",6),i.EFF(3),i.k0s()()),2&e){const t=s.$implicit;i.Y8G("title",t),i.R7$(3),i.JRh(t)}}function Li(e,s){if(1&e&&(i.j41(0,"div",39)(1,"h5",63),i.EFF(2),i.nI1(3,"translate"),i.k0s(),i.j41(4,"div",30)(5,"div",31)(6,"div",17),i.Z7z(7,Ai,4,2,"ion-button",64,i.fX1),i.Z7z(9,Xi,4,2,"ion-button",64,i.fX1),i.Z7z(11,Bi,4,2,"ion-button",64,i.fX1),i.Z7z(13,Ni,4,2,"ion-button",64,i.fX1),i.k0s()()()()),2&e){let t,n,a;const l=i.XpG(2);i.R7$(2),i.JRh(i.bMT(3,1,"Tag")),i.R7$(5),i.Dyx(null==l.media.tags?null:l.media.tags.split(";")),i.R7$(2),i.Dyx(null==l.media.topic_titles||null==(t=l.media.topic_titles.split(";"))?null:t.reverse()),i.R7$(2),i.Dyx(null==l.media.category_titles||null==(n=l.media.category_titles.split(";"))?null:n.reverse()),i.R7$(2),i.Dyx(null==l.media.directory_titles||null==(a=l.media.directory_titles.split(";"))?null:a.reverse())}}function Ui(e,s){if(1&e){const t=i.RV6();i.j41(0,"div",18)(1,"ion-item",5),i.bIt("click",function(){const a=i.eBV(t).$implicit,l=i.XpG(3);return i.Njj(l.switchMedia(a.media_id))}),i.j41(2,"ion-thumbnail"),i.nrm(3,"img",19),i.k0s()(),i.nrm(4,"a",69),i.k0s()}if(2&e){const t=s.$implicit,n=i.XpG(3);i.R7$(3),i.Y8G("src",t.cover?n.readfileuploadurl+t.cover:"assets/image/media/image.svg",i.B4B)("alt",t.media_title),i.R7$(),i.Y8G("href",n.siteurl+t.urlviewer_id,i.B4B)("title",t.media_title)}}function Yi(e,s){if(1&e&&(i.j41(0,"div",12)(1,"h5",63),i.EFF(2),i.nI1(3,"translate"),i.k0s(),i.j41(4,"div",17),i.Z7z(5,Ui,5,4,"div",18,i.fX1),i.k0s()()),2&e){const t=i.XpG(2);i.R7$(2),i.JRh(i.bMT(3,1,"MediaRelated")),i.R7$(3),i.Dyx(t.medias_related)}}function Si(e,s){if(1&e&&(i.j41(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23)(4,"div",24),i.DNE(5,xi,2,2)(6,Pi,3,1)(7,ki,2,2),i.k0s()()(),i.j41(8,"div",25)(9,"div",26),i.DNE(10,Ii,5,4,"ion-button",27)(11,Oi,6,5),i.k0s(),i.j41(12,"div",28),i.DNE(13,Vi,3,5,"p")(14,Gi,3,4,"p"),i.j41(15,"p"),i.EFF(16),i.nI1(17,"translate"),i.nI1(18,"translate"),i.k0s()()()()(),i.j41(19,"div",29)(20,"div",30)(21,"div",31)(22,"div",32)(23,"div",33)(24,"ion-chip")(25,"ion-avatar",34),i.nrm(26,"img",35),i.k0s(),i.j41(27,"ion-label"),i.EFF(28),i.k0s()()(),i.j41(29,"div",36),i.DNE(30,$i,4,2,"div",37)(31,Fi,4,2)(32,Di,4,2),i.k0s()(),i.j41(33,"h2",38),i.EFF(34),i.k0s()()()(),i.DNE(35,Li,15,3,"div",39)(36,Yi,7,3,"div",12)),2&e){let t;const n=i.XpG();i.R7$(3),i.BMQ("style","padding-bottom:"+n.viewOptions.ratio+"%",i.$dS),i.R7$(2),i.vxM(5,"img"===(t=n.viewOptions.type)?5:"canvas"===t?6:"iframe"===t?7:-1),i.R7$(5),i.vxM(10,n.media.isowner?10:11),i.R7$(3),i.vxM(13,n.media.width&&n.media.height?13:-1),i.R7$(),i.vxM(14,n.media.ext?14:-1),i.R7$(2),i.Lme("",i.bMT(17,13,"Use"),": ",n.media.ispublic?"Tabca Pro":i.bMT(18,15,"Private"),""),i.R7$(10),i.Y8G("src",n.media.createdby_avatar?n.readfileuploadurl+n.media.createdby_avatar:"assets/image/user-avatar-default.png",i.B4B),i.R7$(2),i.JRh(n.media.createdby_name),i.R7$(2),i.vxM(30,n.media.topic_titles?30:n.media.category_titles?31:n.media.directory_titles?32:-1),i.R7$(4),i.JRh(n.media.media_title),i.R7$(),i.vxM(35,n.media.tags||n.media.topic_titles||n.media.category_titles||n.media.directory_titles?35:-1),i.R7$(),i.vxM(36,n.medias_related.length?36:-1)}}function Hi(e,s){if(1&e){const t=i.RV6();i.j41(0,"ion-infinite-scroll",70),i.bIt("ionInfinite",function(a){i.eBV(t);const l=i.XpG();return i.Njj(l.onIonInfinite(a))}),i.nrm(1,"ion-infinite-scroll-content"),i.k0s()}}const Ji=[{path:"",component:(()=>{var e;class s{constructor(n,a,l,d,h,C,w,k){var M,x,g=this;this.activatedRoute=n,this.titleService=a,this.metaService=l,this.router=d,this.toastController=h,this.modalController=C,this.popoverController=w,this.loadingController=k,this.APP_ROUTE=u._,this.APP_FUNC_FormatDate=_.Rv,this.v_functionlimit=X.r,this.envUI_Config=E.c.ui_config,this.appsettings=null!==(M=E.c.donvis.find(I=>I.madonvi==E.c.default_donvi))&&void 0!==M?M:{},this.siteurl=E.c.url,this.readfileuploadurl=null!==(x=this.appsettings.readfileuploadurl)&&void 0!==x?x:"",this.membership={},this.user={userid:3},this.medias_related=[],this.filter={},this.paging={page:1,limit:45,active:!0},this.medias=[],this.viewOptions={ratio:66.67};let T=n.snapshot.params.id;if(!T)return void this.router.navigateByUrl(u._.LANDING_PAGE);let y=n.snapshot.queryParamMap.get("auth");"1"==y||"true"==y?(0,f.A)(function*(){var I;g.appsettings=yield(0,z.AC)(),g.appsettings.madonvi&&(g.user=yield(0,p.sx)(),g.readfileuploadurl=null!==(I=g.appsettings.readfileuploadurl)&&void 0!==I?I:"",g.media_id=T,g.loadMedia(T,!1))})():(this.media_id=T,this.loadMedia(T,!1))}ngOnInit(){var n,a;(0,m.EW)({params:{userid:null===(n=this.user)||void 0===n?void 0:n.userid,v_functionlimit:X.r.GenAITaoHinhAnh},callback:l=>{var d;this.membership.GenAITaoHinhAnh=(0,ri.j)(null==l||null===(d=l.contents)||void 0===d?void 0:d.find(h=>h.v_functionlimit==X.r.GenAITaoHinhAnh))}}),(0,m.EW)({params:{userid:null===(a=this.user)||void 0===a?void 0:a.userid,v_functionlimit:X.r.TaiVeCacHocLieuHeThongCungCap},callback:l=>{var d;this.membership.TaiVeCacHocLieuHeThongCungCap=(0,ri.j)(null==l||null===(d=l.contents)||void 0===d?void 0:d.find(h=>h.v_functionlimit==X.r.TaiVeCacHocLieuHeThongCungCap))}})}onIonRefresher(n){this.closeSearch(),this.loadMedia(void 0,!0,()=>{n.target.complete()})}onIonInfinite(n){this.loadMore(()=>{n.target.complete()})}searchChange(n){var a;this.filter.search=null===(a=n.target.value)||void 0===a?void 0:a.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.refreshData()}filterChange(){this.refreshData()}refreshData(n){this.filter.search?(this.paging.page=1,this.paging.active=!0,this.loadData_Paging(n)):this.closeSearch()}loadMore(n){this.paging.page+=1,this.loadData_Paging(n)}pushData(n){return 1==this.paging.page&&(this.medias.length=0),this.medias=this.medias.concat(n),this.medias}loadData_Paging(n){var a;(0,Q.br)({loadingController:1==this.paging.page?this.loadingController:void 0,params:{userid:null===(a=this.user)||void 0===a?void 0:a.userid,getfrom:1,media_title:this.filter.search,v_mediatypes:[b.S.IMAGE,b.S.IMAGE_ANIMATION,b.S.PHET,b.S.HTML,b.S.SCORM].join(","),topic_id:this.filter.topic_id,sortfield:this.paging.sortfield,sorttype:this.paging.sorttype,page:this.paging.page,limit:this.paging.limit},callback:l=>{this.pushData(l||[]).length<this.paging.limit*this.paging.page&&(this.paging.active=!1),n&&n()}})}loadMedia(n,a,l){var d,h;$.ajax({async:a,cache:!0,url:`${this.appsettings.apiurl}api/Media/Detail`,method:"GET",contentType:"application/json",data:{getby:null===(d=this.user)||void 0===d?void 0:d.userid,media_id:null!=n?n:this.media_id},dataType:"json",success:C=>{var w,k,M,x,g,T,y,I,Z,q,ii,ei,ti,ni,oi,ai;C&&C.media_id?(this.media=C||{},(0,_.Kd)(this.titleService,this.metaService,{title:this.media.media_title,description:(0,P.YW)(this.media.media_description),keywords:null===(w=this.media.tags)||void 0===w?void 0:w.replace(/\;/g,", "),image:{url:`${this.appsettings.readfileuploadurl}${this.media.bigcover}`,type:"image/jpge",width:800,height:800,alt:this.media.media_title},url:E.c.url+u._.MEDIA_VIEWER_ID.replace(":id",null!==(k=null===(M=this.media.media_id)||void 0===M?void 0:M.toString())&&void 0!==k?k:""),author:{name:this.media.createdby_name,email:E.c.author.email},updated:null!==(x=this.media.modifieddate)&&void 0!==x?x:this.media.createddate}),this.media.isdownload=!(this.media.v_mediatype==b.S.LINK||!this.media.filepath),this.media.urlviewer_id=u._.VIEWER_ID.replace(":id",null!==(g=null===(T=this.media.media_id)||void 0===T?void 0:T.toString())&&void 0!==g?g:""),null!==(y=this.media)&&void 0!==y&&null!==(y=y.filepath)&&void 0!==y&&y.match(/.lvm$/)?(0,W.Q)(`${this.appsettings.readfileuploadurl}${null===(I=this.media)||void 0===I?void 0:I.filepath}`).then(Qi=>{let{ext:ci,file:U}=Qi;switch(ci){case"gif":case"apng":this.viewOptions.type="img",this.viewOptions.file=U,this.viewOptions.url=URL.createObjectURL(U);break;case"avif":case"jpg":case"jpe":case"jpeg":case"jif":case"jfif":case"pjp":case"pjpeg":case"png":case"ico":case"cur":case"tif":case"tiff":case"bmp":case"webp":case"svg":{this.viewOptions.type="canvas",this.viewOptions.file=U;let li=new FileReader;li.onload=mi=>{let O=new Image;O.onload=()=>{var B;let V=O.width||1,G=O.height||1;if("svg"==ci){let D=V/G;D>=1?(V=Math.max(V,800),G=V/D):(G=Math.max(G,800),V=G*D)}let F=null===(B=this.canvas)||void 0===B?void 0:B.nativeElement;if(F){F.width=V,F.height=G,F.style.maxWidth="100%",F.style.maxHeight="100%";let D=F.getContext("2d");D&&D.drawImage(O,0,0,V,G)}},O.onerror=()=>{(0,si.c)(this.toastController,{color:"danger",message:"Kh\xf4ng t\u1ea3i \u0111\u01b0\u1ee3c th\xf4ng tin \u1ea3nh!"}).then(B=>B.present())},O.src=mi.target.result},li.onerror=mi=>{(0,si.c)(this.toastController,{color:"danger",message:"Kh\xf4ng t\u1ea3i \u0111\u01b0\u1ee3c t\u1eadp tin!"}).then(O=>O.present())},li.readAsDataURL(U);break}}}):(this.viewOptions.type="iframe",this.viewOptions.url=(0,J._KM)({readfileuploadurl:this.appsettings.readfileuploadurl,type:null===(Z=this.media)||void 0===Z?void 0:Z.v_mediatype,oss:null===(q=this.media)||void 0===q?void 0:q.v_osstype,path:null!==(ii=null===(ei=this.media)||void 0===ei?void 0:ei.filepath_extract)&&void 0!==ii?ii:null===(ti=this.media)||void 0===ti?void 0:ti.filepath,url:null!==(ni=null===(oi=this.media)||void 0===oi?void 0:oi.link_file)&&void 0!==ni?ni:null===(ai=this.media)||void 0===ai?void 0:ai.link_share})),l&&l()):this.router.navigateByUrl(u._.LANDING_PAGE)},statusCode:{206:function(){alert("page no content")},404:function(){alert("page not found")},500:function(){alert("page error")}}}),this.media&&$.ajax({async:a,cache:!0,url:`${this.appsettings.apiurl}api/Media/Search`,method:"GET",contentType:"application/json",data:Object.assign({getby:null===(h=this.user)||void 0===h?void 0:h.userid,getfrom:1,v_mediatypes:[b.S.IMAGE,b.S.IMAGE_ANIMATION,b.S.PHET,b.S.HTML,b.S.SCORM].join(","),sortfield:this.paging.sortfield,sorttype:this.paging.sorttype,page:1,limit:100},this.media.tags?{tags:this.media.tags}:this.media.directory_id?{directory_id:this.media.directory_id}:this.media.topic_id?{topic_id:this.media.topic_id}:this.media.category_id?{category_id:this.media.category_id}:{}),dataType:"json",success:C=>{this.medias_related=C||[]}})}closeSearch(){this.filter={},this.medias.length=0}navigateByUrl(n){n&&this.router.navigateByUrl(n)}switchMedia(n){var a=this;return(0,f.A)(function*(){n&&a.router.navigate(["/",u._.MEDIA_VIEWER,n],{relativeTo:a.activatedRoute,queryParams:{auth:1},queryParamsHandling:"merge",replaceUrl:!0})})()}downloadMedia(){var n=this;return(0,f.A)(function*(){var a,l,d;null!==(a=n.media)&&void 0!==a&&a.isdownload&&(["img","canvas"].includes(null!==(l=n.viewOptions.type)&&void 0!==l?l:"")&&n.viewOptions.file?L()(n.viewOptions.file,n.media.media_title+"."+n.viewOptions.file.name.split(".").pop(),n.viewOptions.file.type):null!==(d=n.media)&&void 0!==d&&d.filepath&&L()(`${n.appsettings.readfileuploadurl}${n.media.filepath}`))})()}AI_recommend(n){var a=this;return(0,f.A)(function*(){(0,v.QB)(a.modalController,n)})()}loadIframe(n){this.iframe=n.target}presentModalAiImage(n){var a=this;return(0,f.A)(function*(){const l=yield a.modalController.create({component:N.K,mode:"md",cssClass:"ion-modal-lg modal-vip",backdropDismiss:!1,keyboardClose:!1});l.onDidDismiss().then(d=>{"confirm"==d.role&&a.switchMedia(d.data)}),l.present()})()}presentModalMediaShare(n){var a=this;return(0,f.A)(function*(){var l;(yield a.modalController.create({component:S.U,componentProps:{m:null===(l=a.media)||void 0===l?void 0:l.media_id},mode:"md",cssClass:"ion-modal",backdropDismiss:!0,keyboardClose:!0})).present()})()}presentPopoverTopic(n){var a=this;return(0,f.A)(function*(){const l=yield a.popoverController.create({component:H.E,componentProps:{selectedId:a.filter.topic_id,filter:{for:"media"}},event:n,dismissOnSelect:!1,animated:!1,side:"right"});l.onDidDismiss().then(d=>{var h,C,w,k,M,x,g;"confirm"==d.role&&(Object.assign(a.filter,{topic_id:null===(h=d.data)||void 0===h?void 0:h.topic_id,topic_title:null===(C=d.data)||void 0===C?void 0:C.topic_title,topic_titles:null===(w=d.data)||void 0===w?void 0:w.topic_titles}),null!==(k=d.data)&&void 0!==k&&k.category_id&&Object.assign(a.filter,{category_id:null===(M=d.data)||void 0===M?void 0:M.category_id,category_title:null===(x=d.data)||void 0===x?void 0:x.category_title,category_titles:null===(g=d.data)||void 0===g?void 0:g.category_titles}))}),l.present()})()}}return(e=s).\u0275fac=function(n){return new(n||e)(i.rXU(o.nX),i.rXU(di.hE),i.rXU(di.W8),i.rXU(o.Ix),i.rXU(c.K_),i.rXU(c.W3),i.rXU(c.IE),i.rXU(c.Xi))},e.\u0275cmp=i.VBU({type:e,selectors:[["app-media-viewer"]],viewQuery:function(n,a){if(1&n&&i.GBs(gi,5),2&n){let l;i.mGM(l=i.lsd())&&(a.canvas=l.first)}},decls:26,vars:14,consts:[["canvas",""],["slot","fixed",3,"ionRefresh"],[1,"container","pt-2","mt-4","mb-5","max-w-800"],[1,"mt-0","mb-3","fw-500","text-center"],[1,"d-flex","align-items-center","searchbox"],["lines","none","detail","false","button","true",3,"click"],[1,"fs-14"],["slot","end","name","chevron-down",1,"fs-16"],[1,"flex-grow-1","border-left"],["mode","ios","search-icon"," ",2,"padding","0",3,"ionChange","placeholder","debounce","value"],["mode","ios","color","primary",1,"m-1","btn-search",3,"click"],["slot","start","src","../../../assets/icon-svg/search.svg",1,"fs-18"],[1,"container","mb-4","media-related"],[3,"ionInfinite",4,"ngIf"],["mode","ios","color","tabca-pro",1,"m-1","btn-ai-image",3,"title"],["mode","ios","color","tabca-pro",1,"m-1","btn-ai-image",3,"click","title"],["src","../../../assets/icon-svg/magic-ai-2.svg",1,"fs-24"],[1,"d-flex","flex-wrap"],[1,"mr-2","mb-2"],[3,"src","alt"],[1,"container"],[1,"row","align-items-stretch"],[1,"col-12","col-lg-8","mb-4","media-view"],[1,"position-relative","w-0","h-0"],[1,"position-absolute","top-0","left-0","right-0","bottom-0"],[1,"col-12","col-lg-4","mb-4","media-info"],[1,"d-flex"],["mode","ios","color","dark","fill","outline",1,"btn-share","ml-3",3,"title"],[1,"mt-4"],[1,"container","mb-4","media-introduce"],[1,"row"],[1,"col-12","col-lg-8"],[1,"d-flex","align-items-center","justify-content-between"],[1,"flex-grow-1","text-nowrap"],[1,"min-w-24"],["onerror","errorAvatar(this)",3,"src"],[1,"d-block","d-md-flex","flex-nowrap","align-items-center","text-ellipsis"],[1,"text-ellipsis","d-flex","align-items-center","ml-3",3,"title"],[1,"mt-2","mb-0","fw-400"],[1,"container","mb-4","media-tag"],["oncontextmenu","return false",1,"view-box","img-box"],[3,"src","alt",4,"ngIf"],["oncontextmenu","return false",1,"view-box","iframe-box"],["frameborder","0","allowfullscreen","","webkitallowfullscreen","","allowtransparency","true","allow","autoplay; fullscreen","oncontextmenu","return false",3,"src","load",4,"ngIf"],["frameborder","0","allowfullscreen","","webkitallowfullscreen","","allowtransparency","true","allow","autoplay; fullscreen","oncontextmenu","return false",3,"load","src"],["mode","ios","color","linear","expand","block",1,"flex-grow-1","btn-download",3,"title"],["mode","ios","color","dark","fill","outline",1,"btn-share","ml-3",3,"click","title"],["name","share-social-outline"],["mode","ios","color","linear","expand","block",1,"flex-grow-1","btn-download",3,"click","title"],["slot","start","src","../../../assets/icon/viewer/download.svg"],["mode","ios","expand","block",1,"flex-grow-1","btn-download",3,"disabled"],["slot","start","name","download-outline"],["mode","ios","color","dark","fill","outline",1,"btn-share","ml-3",3,"title","disabled"],[1,"rounded","border","p-4"],[1,"d-flex","align-items-center"],["src","../../../assets/image/tabca-pro-2.svg",1,"fs-22","icon-tabca-pro"],[1,"fw-700","fs-16","ml-3"],[1,"my-3"],["mode","ios","color","linear","expand","block",3,"click","title"],["src","../../../assets/icon-svg/dashboard/topic.svg",1,"fs-20"],[1,"fs-12","text-ellipsis"],["src","../../../assets/icon-svg/dashboard/category.svg",1,"fs-20"],["src","../../../assets/icon-svg/dashboard/template.svg",1,"fs-20"],[1,"mt-0","mb-2"],["mode","ios","size","small","color","dark","fill","outline",1,"mt-0","ml-0","mr-2","mb-2",3,"title"],["slot","start","src","../../../assets/icon/viewer/tag.svg",1,"fs-20"],["slot","start","src","../../../assets/icon/viewer/topic.svg",1,"fs-20"],["slot","start","src","../../../assets/icon/viewer/category.svg",1,"fs-20"],["slot","start","src","../../../assets/icon/viewer/directory.svg",1,"fs-20"],[3,"href","title"],[3,"ionInfinite"]],template:function(n,a){if(1&n&&(i.nrm(0,"app-header"),i.j41(1,"ion-content")(2,"ion-refresher",1),i.bIt("ionRefresh",function(d){return a.onIonRefresher(d)}),i.nrm(3,"ion-refresher-content"),i.k0s(),i.j41(4,"div",2)(5,"h4",3),i.EFF(6,"Tabca - N\u1ec1n t\u1ea3ng thi\u1ebft k\u1ebf \u0111\u01a1n gi\u1ea3n, h\u1eefu d\u1ee5ng"),i.k0s(),i.j41(7,"div",4)(8,"ion-item",5),i.bIt("click",function(d){return a.presentPopoverTopic(d)}),i.j41(9,"ion-label")(10,"span",6),i.EFF(11),i.nI1(12,"translate"),i.k0s()(),i.nrm(13,"ion-icon",7),i.k0s(),i.j41(14,"div",8)(15,"ion-searchbar",9),i.nI1(16,"translate"),i.bIt("ionChange",function(d){return a.searchChange(d)}),i.k0s()(),i.DNE(17,hi,2,1),i.j41(18,"ion-button",10),i.bIt("click",function(){return a.refreshData()}),i.nrm(19,"ion-icon",11),i.j41(20,"ion-label",6),i.EFF(21),i.nI1(22,"translate"),i.k0s()()()(),i.DNE(23,Ci,4,0,"div",12)(24,Si,37,17)(25,Hi,2,0,"ion-infinite-scroll",13),i.k0s()),2&n){let l;i.R7$(11),i.JRh(i.bMT(12,8,(null==(null!==(l=a.filter.topic_titles)&&void 0!==l?l:a.filter.topic_title)||null==(l=(null!=l?l:a.filter.topic_title).split(";"))||null==(l=l.reverse())?null:l.join(" / "))||"All")),i.R7$(4),i.Y8G("placeholder",i.bMT(16,10,"Search"))("debounce",1e3)("value",a.filter.search),i.R7$(2),i.vxM(17,a.envUI_Config.is_ai_image?17:-1),i.R7$(4),i.JRh(i.bMT(22,12,"Search")),i.R7$(2),i.vxM(23,a.medias.length?23:a.media?24:-1),i.R7$(2),i.Y8G("ngIf",a.paging.active&&a.medias.length)}},dependencies:[R.bT,c.mC,c.Jm,c.ZB,c.W9,c.iq,c.Ax,c.Hp,c.uz,c.he,c.To,c.Ki,c.S1,c.Zx,c.Gw,_i.l,pi.m,ui.D9],styles:['.searchbox[_ngcontent-%COMP%]{overflow:hidden;border-radius:.75rem;border:1px solid #8F9BB3;background:#fff}.searchbox[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{width:100%;height:40px;--background: transparent;--box-shadow: none}.searchbox[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:2.5rem}.searchbox[_ngcontent-%COMP%]   ion-button.btn-ai-image[_ngcontent-%COMP%]{width:2.5rem;--padding-top: 0;--padding-bottom: 0;--padding-start: 0;--padding-end: 0}.searchbox[_ngcontent-%COMP%]   ion-button.btn-search[_ngcontent-%COMP%]{--padding-start: 1.5rem;--padding-end: 1.5rem}.media-view[_ngcontent-%COMP%]   .view-box[style][_ngcontent-%COMP%]:not([style=""]){border-radius:.75rem;background:var(--ion-background-color);box-shadow:4px 4px 12px #0101011a}.media-view[_ngcontent-%COMP%]   .view-box[style][_ngcontent-%COMP%]:not([style=""]):before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;opacity:.16;background-image:var(--bg-img);background-repeat:no-repeat;background-position:center center;background-size:cover}.media-view[_ngcontent-%COMP%]   .view-box[style][_ngcontent-%COMP%]:not([style=""]) > *[_ngcontent-%COMP%]{position:relative;z-index:2}.media-view[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;line-height:0;overflow:hidden;border-radius:.75rem;box-shadow:0 0 0 1px #fff;display:flex;align-items:center;justify-content:center}.media-view[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-view[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border-radius:.25rem;overflow:hidden;box-shadow:0 0 12px #0101011a}.media-view[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:2147483647;background:transparent;-webkit-user-select:none;user-select:none}.media-view[_ngcontent-%COMP%]   .iframe-box[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;line-height:0;overflow:hidden;border-radius:.75rem;background:var(--ion-background-color);box-shadow:4px 4px 12px #01010133}.media-view[_ngcontent-%COMP%]   .iframe-box[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{display:block;width:100%;height:100%;padding:0;margin:0;border:0;outline:none;background-color:#fff}.media-info[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0}.media-info[_ngcontent-%COMP%]   ion-button[color=dark][_ngcontent-%COMP%]::part(native){border-color:var(--ion-color-medium-tint)}.media-info[_ngcontent-%COMP%]   .btn-download[_ngcontent-%COMP%]{min-width:3rem;height:3rem;--padding-top: 0;--padding-bottom: 0;--padding-start: 0;--padding-end: 0}.media-info[_ngcontent-%COMP%]   .btn-share[_ngcontent-%COMP%]{width:3rem;height:3rem;--padding-top: 0;--padding-bottom: 0;--padding-start: 0;--padding-end: 0}.media-introduce[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin:0;--background: transparent}.media-introduce[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0}.media-tag[_ngcontent-%COMP%]   ion-button[color=dark][_ngcontent-%COMP%]::part(native){border-color:var(--ion-color-medium-tint)}.media-related[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-top: 0;--padding-bottom: 0;--padding-start: 0;--padding-end: 0;--inner-padding-top: 0;--inner-padding-bottom: 0;--inner-padding-start: 0;--inner-padding-end: 0;--border-width: 1px;--border-color: var(--ion-color-medium-tint);--border-radius: .5rem}.media-related[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 9rem;--border-radius: .375rem;margin:0}']}),s})()}];let Wi=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.$C({type:e}),e.\u0275inj=i.G2t({imports:[o.iI.forChild(Ji),o.iI]}),s})();var Ki=r(3890);let zi=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.$C({type:e}),e.\u0275inj=i.G2t({imports:[R.MD,A.YN,c.bv,Wi,Ki.x]}),s})()},3753:(Y,j,r)=>{r.d(j,{t:()=>Q});var R=r(467),A=r(8671),c=r(2635),o=r(4438),f=r(6637),N=r(177),S=r(31);function H(m,v){1&m&&(o.qex(0),o.j41(1,"ion-content")(2,"div",2)(3,"div",3),o.nrm(4,"ion-spinner",4),o.k0s()()(),o.bVm())}function E(m,v){if(1&m){const p=o.RV6();o.qex(0),o.j41(1,"ion-item",9),o.bIt("click",function(){const u=o.eBV(p).$implicit,P=o.XpG(3);return o.Njj(P.filterChange(u.lookup_value))}),o.j41(2,"ion-label"),o.EFF(3),o.k0s()(),o.bVm()}if(2&m){const p=v.$implicit,_=o.XpG(3);o.R7$(),o.BMQ("color",p.lookup_value==_.selectedId?"primary":""),o.R7$(2),o.JRh(p.lookup_title)}}function J(m,v){if(1&m&&(o.j41(0,"ion-list",7),o.DNE(1,E,4,2,"ng-container",8),o.k0s()),2&m){const p=o.XpG(2);o.R7$(),o.Y8G("ngForOf",p.lookups)}}function W(m,v){1&m&&(o.j41(0,"div",3)(1,"i"),o.EFF(2),o.nI1(3,"translate"),o.k0s()()),2&m&&(o.R7$(2),o.JRh(o.bMT(3,1,"DataNotFound")))}function K(m,v){if(1&m){const p=o.RV6();o.qex(0),o.j41(1,"ion-item",9),o.bIt("click",function(){const u=o.eBV(p).$implicit,P=o.XpG(3);return o.Njj(P.filterChange(u.lookup_value))}),o.j41(2,"ion-label",10),o.EFF(3),o.k0s()(),o.bVm()}if(2&m){const p=v.$implicit,_=o.XpG(3);o.R7$(),o.BMQ("color",p.lookup_value==_.selectedId?"primary":""),o.R7$(),o.Y8G("color",p.color),o.R7$(),o.JRh(p.lookup_title)}}function L(m,v){if(1&m&&(o.qex(0),o.nrm(1,"hr"),o.j41(2,"ion-list",7),o.DNE(3,K,4,3,"ng-container",8),o.k0s(),o.bVm()),2&m){const p=o.XpG(2);o.R7$(3),o.Y8G("ngForOf",p.lookups_d2)}}function z(m,v){if(1&m&&(o.qex(0),o.DNE(1,J,2,1,"ion-list",5)(2,W,4,3,"div",6)(3,L,4,1,"ng-container",1),o.bVm()),2&m){const p=o.XpG();o.R7$(),o.Y8G("ngIf",p.lookups.length),o.R7$(),o.Y8G("ngIf",!p.lookups.length),o.R7$(),o.Y8G("ngIf",p.lookups_d2.length)}}let Q=(()=>{var m;class v{constructor(_){this.popoverController=_,this.selectedId=0,this.lookup_key="",this.lookups_d2=[],this.dataInit={loading:!0},this.lookups=[]}ngOnInit(){var _=this;(0,R.A)(function*(){_.user=yield(0,c.Nk)(),_.loadLookup()})()}loadLookup(){var _;(0,A.$)({loading:u=>{this.dataInit.loading=u},params:{userid:null===(_=this.user)||void 0===_?void 0:_.userid,lookup_key:this.lookup_key},callback:u=>{this.lookups=u||[]}})}filterChange(_){var u;this.popoverController.dismiss(null!==(u=this.lookups.find(P=>P.lookup_value==_))&&void 0!==u?u:this.lookups_d2.find(P=>P.lookup_value==_),"confirm")}}return(m=v).\u0275fac=function(_){return new(_||m)(o.rXU(f.IE))},m.\u0275cmp=o.VBU({type:m,selectors:[["app-popover-lookup"]],inputs:{selectedId:"selectedId",lookup_key:"lookup_key",lookups_d2:"lookups_d2"},decls:3,vars:2,consts:[[1,"menu-lookup","overflow-auto"],[4,"ngIf"],[1,"d-flex","w-100","h-100","align-items-center","justify-content-center"],[1,"px-3","py-1"],["name","dots","color","dark",1,"align-middle"],["lines","full",4,"ngIf"],["class","px-3 py-1",4,"ngIf"],["lines","full"],[4,"ngFor","ngForOf"],["button","","detail","false",3,"click"],[3,"color"]],template:function(_,u){1&_&&(o.j41(0,"div",0),o.DNE(1,H,5,0,"ng-container",1)(2,z,4,3,"ng-container",1),o.k0s()),2&_&&(o.R7$(),o.Y8G("ngIf",u.dataInit.loading),o.R7$(),o.Y8G("ngIf",!u.dataInit.loading))},dependencies:[N.Sq,N.bT,f.W9,f.uz,f.he,f.nf,f.w2,S.D9],styles:[".menu-lookup[_ngcontent-%COMP%]{width:240px;max-height:480px;border-top:3px solid #5F6CE1}hr[_ngcontent-%COMP%]{margin:0}"]}),v})()},4668:(Y,j,r)=>{r.d(j,{z:()=>R});const R={ONLY_ME:10400,ONLY_MEMBER:10401,EVERYONE_HAS_LINK:10402}}}]);