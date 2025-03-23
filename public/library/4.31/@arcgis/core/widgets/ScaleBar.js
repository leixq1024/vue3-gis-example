/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{watch as t}from"../core/reactiveUtils.js";import{c as r}from"../chunks/screenUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{f as i}from"../chunks/number.js";import{d as l}from"../chunks/defaultUnit.js";import n from"./Widget.js";import a from"./ScaleBar/ScaleBarViewModel.js";import{g as p}from"../chunks/globalCss.js";import"../chunks/widgetUtils.js";import{m as c}from"../chunks/messageBundle.js";import{t as m}from"../chunks/jsxFactory.js";import"../chunks/asyncUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/locale.js";import"../chunks/getDefaultUnitForView.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../intl.js";import"../chunks/date.js";import"../chunks/datetime.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../chunks/domUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/componentsUtils.js";import"../chunks/jsxWidgetSupport.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/support/geodesicUtils.js";import"../chunks/geodesicConstants.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils9.js";import"../chunks/utils10.js";import"../chunks/utils21.js";const u="esri-scale-bar",d={base:u,labelContainer:`${u}__label-container`,rulerLabelContainer:`${u}__label-container--ruler`,lineLabelContainer:`${u}__label-container--line`,topLabelContainer:`${u}__label-container--top`,bottomLabelContainer:`${u}__label-container--bottom`,label:`${u}__label`,line:`${u}__line`,topLine:`${u}__line--top`,bottomLine:`${u}__line--bottom`,ruler:`${u}__ruler`,rulerBlock:`${u}__ruler-block`,barContainer:`${u}__bar-container`,rulerBarContainer:`${u}__bar-container--ruler`,lineBarContainer:`${u}__bar-container--line`};function h(e,t){return i(e,{style:"unit",unit:t,unitDisplay:"short"})}let j=class extends n{constructor(e,t){super(e,t),this.messages=null,this.style="line",this.viewModel=new a}initialize(){this.addHandles(t((()=>{const{view:e}=this;return[e?.stationary,e?.center,e?.scale,e?.zoom]}),(([e])=>{e&&this.scheduleRender()})))}get icon(){return"actual-size"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get unit(){return this._defaultUnit}set unit(e){this._overrideIfSome("unit",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){const e="disabled"===this.viewModel.state,t={[p.disabled]:e};let r,s;if(!e){const{unit:e,style:t}=this,o="metric"===e||"dual"===e,i=100,l="dual"===e?"line":t;if("imperial"===e||"dual"===e){const e=this.viewModel.getScaleBarProperties(i,"imperial");e&&(s="ruler"===l?this._renderRuler(e):this._renderLine(e,"bottom"))}if(o){const e=this.viewModel.getScaleBarProperties(i,"metric");e&&(r="ruler"===l?this._renderRuler(e):this._renderLine(e,"top"))}}return m("div",{afterCreate:this._handleRootCreateOrUpdate,afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes(d.base,p.widget,t)},r,s)}_renderRuler(e){const{length:t,unit:r,value:s}=e,o=Math.round(t),i=h(s,r);return m("div",{class:this.classes(d.barContainer,d.rulerBarContainer),key:d.rulerBarContainer},m("div",{class:d.ruler,styles:{width:`${o}px`}},m("div",{class:d.rulerBlock}),m("div",{class:d.rulerBlock}),m("div",{class:d.rulerBlock}),m("div",{class:d.rulerBlock})),m("div",{class:this.classes(d.labelContainer,d.rulerLabelContainer)},m("div",{class:d.label},"0"),m("div",{class:d.label},i)))}_renderLine(e,t){const{length:r,unit:s,value:o}=e,i=Math.round(r),l=h(o,s),n={[d.topLabelContainer]:"top"===t,[d.bottomLabelContainer]:"bottom"===t},a=m("div",{class:this.classes(d.labelContainer,d.lineLabelContainer,n),key:d.labelContainer},m("div",{class:d.label},l)),p={[d.topLine]:"top"===t,[d.bottomLine]:"bottom"===t},c=m("div",{class:this.classes(d.line,p),key:d.line,styles:{width:`${i}px`}});return m("div",{class:this.classes(d.barContainer,d.lineBarContainer),key:d.lineBarContainer},[c,a])}_handleRootCreateOrUpdate(e){if(!this.viewModel)return;const{scaleComputedFrom:t}=this.viewModel,s=e.getBoundingClientRect(),o=s.left+window.pageXOffset,i=s.top+window.pageYOffset,l=r(o,i);(l.x!==t.x||l.y!==t.y)&&(this.viewModel.scaleComputedFrom=l)}};e([s(l)],j.prototype,"_defaultUnit",void 0),e([s()],j.prototype,"icon",null),e([s()],j.prototype,"label",null),e([s(),c("esri/widgets/ScaleBar/t9n/ScaleBar")],j.prototype,"messages",void 0),e([s({type:["ruler","line"]})],j.prototype,"style",void 0),e([s({type:["metric","imperial","dual"]})],j.prototype,"unit",null),e([s()],j.prototype,"view",null),e([s()],j.prototype,"viewModel",void 0),j=e([o("esri.widgets.ScaleBar")],j);const b=j;export{b as default};
