"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[433],{433:(B,f,l)=>{l.r(f),l.d(f,{ion_datetime_button:()=>x});var h=l(5861),o=l(4190),y=l(4595),g=l(690),b=l(3140),D=l(4237),d=l(6038);const x=class{constructor(s){var r=this;(0,o.r)(this,s),this.datetimeEl=null,this.overlayEl=null,this.datetimePresentation="date-time",this.datetimeActive=!1,this.color="primary",this.disabled=!1,this.getParsedDateValues=t=>""===t||null==t?[]:Array.isArray(t)?t:[t],this.setDateTimeText=()=>{const{datetimeEl:t,datetimePresentation:n}=this;if(!t)return;const{value:i,locale:e,hourCycle:a,preferWheel:c,multiple:w,titleSelectedDatesFormatter:_}=t,p=this.getParsedDateValues(i),v=(0,d.q)(p.length>0?p:[(0,d.t)()]),m=v[0],T=(0,d.J)(e,a);switch(v.forEach(u=>{u.tzOffset=void 0}),this.dateText=this.timeText=void 0,n){case"date-time":case"time-date":const u=(0,d.T)(e,m),E=(0,d.K)(e,m,T);c?this.dateText=`${u} ${E}`:(this.dateText=u,this.timeText=E);break;case"date":if(w&&1!==p.length){let k=`${p.length} days`;if(void 0!==_)try{k=_(p)}catch(O){(0,b.b)("Exception in provided `titleSelectedDatesFormatter`: ",O)}this.dateText=k}else this.dateText=(0,d.T)(e,m);break;case"time":this.timeText=(0,d.K)(e,m,T);break;case"month-year":this.dateText=(0,d.G)(e,m);break;case"month":this.dateText=(0,d.S)(e,m,{month:"long"});break;case"year":this.dateText=(0,d.S)(e,m,{year:"numeric"})}},this.waitForDatetimeChanges=(0,h.Z)(function*(){const{datetimeEl:t}=r;return t?new Promise(n=>{(0,g.a)(t,"ionRender",n,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(){var t=(0,h.Z)(function*(n){const{datetimeEl:i,datetimePresentation:e}=r;if(!i)return;let a=!1;switch(e){case"date-time":case"time-date":!i.preferWheel&&"date"!==i.presentation&&(i.presentation="date",a=!0)}r.selectedButton="date",r.presentOverlay(n,a,r.dateTargetEl)});return function(n){return t.apply(this,arguments)}}(),this.handleTimeClick=t=>{const{datetimeEl:n,datetimePresentation:i}=this;if(!n)return;let e=!1;switch(i){case"date-time":case"time-date":"time"!==n.presentation&&(n.presentation="time",e=!0)}this.selectedButton="time",this.presentOverlay(t,e,this.timeTargetEl)},this.presentOverlay=function(){var t=(0,h.Z)(function*(n,i,e){const{overlayEl:a}=r;a&&("ION-POPOVER"===a.tagName?(i&&(yield r.waitForDatetimeChanges()),a.present(Object.assign(Object.assign({},n),{detail:{ionShadowTarget:e}}))):a.present())});return function(n,i,e){return t.apply(this,arguments)}}()}componentWillLoad(){var s=this;return(0,h.Z)(function*(){const{datetime:r}=s;if(!r)return void(0,b.b)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",s.el);const t=s.datetimeEl=document.getElementById(r);if(!t)return void(0,b.b)(`No ion-datetime instance found for ID '${r}'.`,s.el);new IntersectionObserver(e=>{s.datetimeActive=e[0].isIntersecting},{threshold:.01}).observe(t);const i=s.overlayEl=t.closest("ion-modal, ion-popover");i&&i.classList.add("ion-datetime-button-overlay"),(0,g.c)(t,()=>{const e=s.datetimePresentation=t.presentation||"date-time";switch(s.setDateTimeText(),(0,g.a)(t,"ionChange",s.setDateTimeText),e){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})})()}render(){const{color:s,dateText:r,timeText:t,selectedButton:n,datetimeActive:i,disabled:e}=this,a=(0,y.b)(this);return(0,o.h)(o.H,{class:(0,D.c)(s,{[a]:!0,[`${n}-active`]:i,"datetime-button-disabled":e})},r&&(0,o.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":i?"true":"false",onClick:this.handleDateClick,disabled:e,part:"native",ref:c=>this.dateTargetEl=c},(0,o.h)("slot",{name:"date-target"},r),"md"===a&&(0,o.h)("ion-ripple-effect",null)),t&&(0,o.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":i?"true":"false",onClick:this.handleTimeClick,disabled:e,part:"native",ref:c=>this.timeTargetEl=c},(0,o.h)("slot",{name:"time-target"},t),"md"===a&&(0,o.h)("ion-ripple-effect",null)))}get el(){return(0,o.i)(this)}};x.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);