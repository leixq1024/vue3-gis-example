// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ./componentsUtils ./label ./interactive ./locale ./t9n ./loadable ./form ./chip ./combobox ./combobox-item ./combobox-item-group ./icon ./input-message".split(" "),function(q,z,g,F,G,A,w,B,x,L,M,N,O,P,Q){function C(a){return a.replace(":15",".25").replace(":30",".5").replace(":45",".75").replace("\u2212","-")}function R(a,b){a=D(a,"en-US",b).replace("GMT","");return""===a?0:60*Number(C(a))}async function S(a){if("offset"===a)return b=>b;({normalize:a}=await new Promise((b,
d)=>q(["./time-zones"],b,d)));return a}async function T(a,b,d,m,n){if("name"===d)return{groupByName:a}=await new Promise((c,h)=>q(["./index2"],c,h)),(await a()).map(({label:c})=>({label:c.replace(/_/g," "),value:c,metadata:{filterValue:c}})).filter(c=>!!c).sort();const r="user"===n?a:"utc"===n?"fr":"en-GB",t=m.getTime();if("region"===d){const [{groupByRegion:c},{getCountry:h,global:l}]=await Promise.all([new Promise((e,f)=>q(["./index3"],e,f)),new Promise((e,f)=>q(["./region"],e,f))]);return(await c()).map(({label:e,
tzs:f})=>{f.sort((k,p)=>{const y=b[k]||u(k),E=b[p]||u(p);return k.startsWith("Etc/GMT")&&p.startsWith("Etc/GMT")?(k=k.substring(7),p=p.substring(7),k=""===k?0:parseInt(k),(""===p?0:parseInt(p))-k):y.localeCompare(E)});return{label:b[e]||e,items:f.map(k=>{const p=C(D(k,r,t)),y=b[k]||u(k),E=e===l?`${b[l]||u(l)} Etc`:k.replace(/_/g," ");var v=h(k);v=b[v]||v;return{label:y,value:k,metadata:{country:v===y?void 0:v,filterValue:E,offset:p}}})}}).sort((e,f)=>e.label===l?-1:f.label===l?1:e.label.localeCompare(f.label))}const [{groupByOffset:U},
{DateEngine:V}]=await Promise.all([new Promise((c,h)=>q(["./index4"],c,h)),new Promise((c,h)=>q(["./index5"],c,h))]);d=await U({dateEngine:new V,groupDateRange:1,startDate:(new Date(t)).toISOString()});const W=new Intl.ListFormat(a,{style:"long",type:"conjunction"}),H=["Factory","Etc/UTC"];d.forEach(c=>{const h=[];let l=0;c.tzs.forEach((e,f)=>{H.includes(e)&&l++;h[f]=l});c.tzs=c.tzs.filter(e=>!H.includes(e));c.labelTzIdx=c.labelTzIdx.map(e=>e-h[e]).filter(e=>0<=e&&e<c.tzs.length)});return d.map(({labelTzIdx:c,
tzs:h})=>{var l=h[0];const e=C(D(l,r,t));l=R(l,t);c=c.map(f=>{f=h[f];return b[f]||u(f)});return{label:X(b,e,W.format(c)),value:l,metadata:{filterValue:h.map(f=>f.replace(/_/g," "))}}}).filter(c=>!!c).sort((c,h)=>c.value-h.value)}function u(a){return a.split("/").pop()}function X(a,b,d){return a.timeZoneLabel.replace("{offset}",b).replace("{cities}",d)}function D(a,b,d=Date.now()){return A.getDateTimeFormat(b,{timeZone:a,timeZoneName:"shortOffset"}).formatToParts(d).find(({type:m})=>"timeZoneName"===
m).value}function Y(a){return void 0!==a[0].items?a.flatMap(b=>b.items):a}function I(a,b,d){return null==d?null:Y(a).find(m=>m[b]==d)}function J(){"undefined"!==typeof customElements&&"calcite-input-time-zone calcite-chip calcite-combobox calcite-combobox-item calcite-combobox-item-group calcite-icon calcite-input-message".split(" ").forEach(a=>{switch(a){case "calcite-input-time-zone":customElements.get(a)||customElements.define(a,K);break;case "calcite-chip":customElements.get(a)||L.defineCustomElement();
break;case "calcite-combobox":customElements.get(a)||M.defineCustomElement();break;case "calcite-combobox-item":customElements.get(a)||N.defineCustomElement();break;case "calcite-combobox-item-group":customElements.get(a)||O.defineCustomElement();break;case "calcite-icon":customElements.get(a)||P.defineCustomElement();break;case "calcite-input-message":customElements.get(a)||Q.defineCustomElement()}})}const K=g.proxyCustomElement(class extends g.H{constructor(){super();this.__registerHost();this.__attachShadow();
this.calciteInputTimeZoneBeforeClose=g.createEvent(this,"calciteInputTimeZoneBeforeClose",6);this.calciteInputTimeZoneBeforeOpen=g.createEvent(this,"calciteInputTimeZoneBeforeOpen",6);this.calciteInputTimeZoneChange=g.createEvent(this,"calciteInputTimeZoneChange",6);this.calciteInputTimeZoneClose=g.createEvent(this,"calciteInputTimeZoneClose",6);this.calciteInputTimeZoneOpen=g.createEvent(this,"calciteInputTimeZoneOpen",6);this.setComboboxRef=a=>{this.comboboxEl=a};this.onComboboxBeforeClose=a=>{a.stopPropagation();
this.overrideSelectedLabelForRegion(!1);this.calciteInputTimeZoneBeforeClose.emit()};this.onComboboxBeforeOpen=a=>{a.stopPropagation();this.overrideSelectedLabelForRegion(!0);this.calciteInputTimeZoneBeforeOpen.emit()};this.onComboboxChange=a=>{a.stopPropagation();if(a=a.target.selectedItems[0]){a=this.findTimeZoneItemByLabel(a.getAttribute("data-label"));var b=`${a.value}`;if(this.value!==b||a.label!==this.selectedTimeZoneItem.label)this.value=b,this.selectedTimeZoneItem=a,this.calciteInputTimeZoneChange.emit()}else this.selectedTimeZoneItem=
this.value=null,this.calciteInputTimeZoneChange.emit()};this.onComboboxClose=a=>{a.stopPropagation();this.open=!1;this.calciteInputTimeZoneClose.emit()};this.onComboboxOpen=a=>{this.open=!0;a.stopPropagation();this.calciteInputTimeZoneOpen.emit()};this.disabled=this.clearable=!1;this.form=void 0;this.maxItems=0;this.messageOverrides=this.messages=void 0;this.mode="offset";this.offsetStyle="user";this.validationIcon=this.validationMessage=void 0;this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,
rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1};this.name=void 0;this.open=!1;this.overlayPositioning="absolute";this.referenceDate=void 0;this.required=!1;this.scale="m";this.status="idle";this.value=void 0;this.readOnly=!1;this.defaultMessages=void 0;this.effectiveLocale=""}onMessagesChange(){}handleTimeZoneItemPropsChange(){this.timeZoneItems&&(this.updateTimeZoneItems(),this.updateTimeZoneSelection())}openChanged(){this.comboboxEl.open=
this.open}handleValueChange(a,b){(a=this.normalizeValue(a))?(a=this.findTimeZoneItem(a))?this.selectedTimeZoneItem=a:this.value=b:this.clearable?(this.value=a,this.selectedTimeZoneItem=null):(this.value=b,this.selectedTimeZoneItem=this.findTimeZoneItem(b))}async setFocus(){await B.componentFocusable(this);await this.comboboxEl.setFocus()}effectiveLocaleWatcher(){w.updateMessages(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}overrideSelectedLabelForRegion(a){if("region"===this.mode&&this.selectedTimeZoneItem){var {label:b,
metadata:d}=this.selectedTimeZoneItem,m=this.comboboxEl.selectedItems[0];if(!d.country||a)a=b;else{a=d.country;var n=this.messages;a=n.timeZoneRegionLabel.replace("{city}",b).replace("{country}",n[a]||a)}m.textLabel=a}}findTimeZoneItem(a){return I(this.timeZoneItems,"value",a)}findTimeZoneItemByLabel(a){return I(this.timeZoneItems,"label",a)}async updateTimeZoneItems(){this.timeZoneItems=await this.createTimeZoneItems()}async updateTimeZoneSelection(){if(""===this.value&&this.clearable)this.selectedTimeZoneItem=
null;else{var a="offset"===this.mode?-1*(new Date).getTimezoneOffset():(new Intl.DateTimeFormat).resolvedOptions().timeZone;this.selectedTimeZoneItem=this.findTimeZoneItem(this.value??a)||this.findTimeZoneItem(a)}}async createTimeZoneItems(){return this.effectiveLocale&&this.messages?T(this.effectiveLocale,this.messages,this.mode,this.referenceDate instanceof Date?this.referenceDate:new Date(this.referenceDate??Date.now()),this.offsetStyle):[]}connectedCallback(){x.connectForm(this);F.connectLabel(this);
A.connectLocalized(this);w.connectMessages(this)}disconnectedCallback(){x.disconnectForm(this);F.disconnectLabel(this);A.disconnectLocalized(this);w.disconnectMessages(this)}normalizeValue(a){return(a=null===a?"":a)?this.normalizer(a):a}async componentWillLoad(){B.setUpLoadableComponent(this);var [,a]=await Promise.all([w.setUpMessages(this),S(this.mode)]);this.normalizer=a;await this.updateTimeZoneItems();this.value=this.normalizeValue(this.value);await this.updateTimeZoneSelection();a=this.selectedTimeZoneItem?
`${this.selectedTimeZoneItem.value}`:null;x.afterConnectDefaultValueSet(this,a);this.value=a}componentDidLoad(){B.setComponentLoaded(this);this.openChanged()}componentDidRender(){G.updateHostInteraction(this);this.overrideSelectedLabelForRegion(this.open)}render(){return g.h(g.Host,{key:"b94fb2d93cdcaf0c44bbd2a0c7deaf59701078bf"},g.h(G.InteractiveContainer,{key:"45246bbab441e9daf0e372832e74d7660039c770",disabled:this.disabled},g.h("calcite-combobox",{key:"294e44d8ab01079651c417f7808348e584f135b7",
clearDisabled:!this.clearable,disabled:this.disabled,label:this.messages.chooseTimeZone,lang:this.effectiveLocale,maxItems:this.maxItems,onCalciteComboboxBeforeClose:this.onComboboxBeforeClose,onCalciteComboboxBeforeOpen:this.onComboboxBeforeOpen,onCalciteComboboxChange:this.onComboboxChange,onCalciteComboboxClose:this.onComboboxClose,onCalciteComboboxOpen:this.onComboboxOpen,overlayPositioning:this.overlayPositioning,placeholder:"name"===this.mode?this.messages.namePlaceholder:"offset"===this.mode?
this.messages.offsetPlaceholder:this.messages.regionPlaceholder,placeholderIcon:"search",readOnly:this.readOnly,ref:this.setComboboxRef,scale:this.scale,selectionMode:this.clearable?"single":"single-persist",status:this.status,"validation-icon":this.validationIcon,"validation-message":this.validationMessage},this.renderItems()),g.h(x.HiddenFormInputSlot,{key:"0b7a0694166f1d5b36b780d3436dad15d466bc3c",component:this})))}renderItems(){return"region"===this.mode?this.renderRegionItems():this.timeZoneItems.map(a=>
{const b=this.selectedTimeZoneItem===a,{label:d,metadata:m,value:n}=a;return g.h("calcite-combobox-item",{"data-label":d,key:d,metadata:m,selected:b,textLabel:d,value:n})})}renderRegionItems(){return this.timeZoneItems.flatMap(({label:a,items:b})=>g.h("calcite-combobox-item-group",{key:a,label:a},b.map(d=>{const m=this.selectedTimeZoneItem===d,{label:n,metadata:r,value:t}=d;return g.h("calcite-combobox-item",{"data-label":n,description:r.country,key:n,metadata:r,selected:m,textLabel:n,value:t},g.h("span",
{class:"offset",slot:"content-end"},r.offset))})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],open:["openChanged"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.offset{white-space:nowrap}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},
[17,"calcite-input-time-zone",{clearable:[516],disabled:[516],form:[513],maxItems:[514,"max-items"],messages:[1040],messageOverrides:[1040],mode:[513],offsetStyle:[513,"offset-style"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],open:[1540],overlayPositioning:[513,"overlay-positioning"],referenceDate:[1,"reference-date"],required:[516],scale:[513],status:[513],value:[1025],readOnly:[516,"read-only"],defaultMessages:[32],effectiveLocale:[32],
setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],open:["openChanged"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}]);J();z.CalciteInputTimeZone=K;z.defineCustomElement=J;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});