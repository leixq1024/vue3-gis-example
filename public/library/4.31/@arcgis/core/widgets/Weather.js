/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{m as s}from"../chunks/memoize.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{a as r}from"../chunks/weather.js";import i from"./Widget.js";import{l as n}from"../chunks/componentsUtils.js";import{g as a}from"../chunks/globalCss.js";import{H as l}from"../chunks/Heading.js";import{c}from"../chunks/widgetUtils.js";import{m as p}from"../chunks/messageBundle.js";import{t as d,a as u}from"../chunks/jsxFactory.js";import h,{W as m,a as g}from"./Weather/WeatherViewModel.js";import v from"../core/Accessor.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/tracking.js";import"../views/3d/environment/CloudyWeather.js";import"../core/JSONSupport.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/mathUtils.js";const y="esri-weather",b={base:y,content:`${y}__content`,hasError:`${y}__content--has-error`,selector:`${y}__selector`,options:`${y}__options`,optionsHidden:`${y}__options--hidden`,error:`${y}__error`,warning:`${y}__warning`},j={base:`${y}__labeled-slider`};let w=class extends i{constructor(e){super(e),this._onChange=e=>{this.onChange(e.target.value)}}render(){const{label:e}=this;return d("div",{class:j.base},d("calcite-label",{scale:"s"},e,d("calcite-slider",{"aria-label":e,disabled:this.disabled,max:1,min:0,step:.01,value:this.value,onCalciteSliderChange:this._onChange,onCalciteSliderInput:this._onChange})))}loadDependencies(){return n({label:()=>import("../chunks/calcite-label.js"),slider:()=>import("../chunks/calcite-slider.js")})}};e([o()],w.prototype,"value",void 0),e([o()],w.prototype,"onChange",void 0),e([o()],w.prototype,"disabled",void 0),w=e([t("esri.widgets.Weather.LabeledSlider")],w);let k=class extends v{constructor(e){super(e),this.header=!0}};e([o({type:Boolean,nonNullable:!0})],k.prototype,"header",void 0),k=e([t("esri.widgets.Weather.VisibleElements")],k);const C=k,_={sunny:"brightness",cloudy:"partly-cloudy",rainy:"rain",snowy:"snow",foggy:"fog"};let f=class extends i{constructor(e){super(e),this.viewModel=new h,this.headingLevel=4,this.visibleElements=new C,this._renderWeatherTypeButton=e=>{const s=this.viewModel,o=this.messages[e].label,t=s.state===m.Disabled,r=!t&&s.current.type===e;return d("calcite-button",{appearance:r?"solid":"outline","aria-checked":r?"true":"false",disabled:t,iconStart:_[e],key:`${e}-type-button`,kind:r?"brand":"neutral",label:o,onclick:()=>{r||s.setWeatherByType(e)},scale:"l",title:o})},this._memoizedCallbacks=s((e=>({onCloudCoverChange:s=>{"cloudCover"in e&&(e.cloudCover=s)},onPrecipitationChange:s=>{"precipitation"in e&&(e.precipitation=s)},onFogStrengthChange:s=>{"fogStrength"in e&&(e.fogStrength=s)},onSnowCoverChange:e=>{this.viewModel.setSnowCoverEnabled(e.target.checked)}})))}render(){const e=this.viewModel.state===m.Disabled;return d("div",{"aria-label":this.messages.widgetLabelAccessible,class:this.classes(b.base,a.widget,e&&a.widgetDisabled),role:"region"},this._renderContent())}loadDependencies(){return n({button:()=>import("../chunks/calcite-button.js"),checkbox:()=>import("../chunks/calcite-checkbox.js"),icon:()=>import("../chunks/calcite-icon.js"),label:()=>import("../chunks/calcite-label.js")})}get view(){return this.viewModel?.view}set view(e){this.viewModel&&(this.viewModel.view=e)}get icon(){return"partly-cloudy"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get _errorMessage(){const e=this.messages.error;switch(this.viewModel.error){case g.LocalScene:return e.localScene;case g.NoAtmosphere:return e.noAtmosphere;case g.UnsupportedView:return e.unsupported;default:return null}}get _warningMessage(){return this.viewModel.error===g.NotVisible&&null!=this.view&&"3d"===this.view?.type&&this.view.environment.atmosphereEnabled?this.messages.error.notVisible:null}_renderContent(){const{headingLevel:e,messages:s,viewModel:o,visibleElements:t}=this,i=this._warningMessage,n=o.current,a=o.state===m.Error;return d(u,null,t.header?d(l,{level:e},s.widgetLabel):null,a?d("div",{class:b.error,key:"error"},this._errorMessage):null,d("div",{class:c({[b.content]:!0,[b.hasError]:a}),key:"content"},d("div",{"aria-label":s.weatherType,class:b.selector,key:"type-selector",role:"radiogroup"},r.map(this._renderWeatherTypeButton)),Object.values(o.weatherByType).map((e=>d("div",{class:c({[b.options]:!0,[b.optionsHidden]:e.type!==n?.type}),key:"options-container"},this._renderOptions(e)))),null!=i?this._renderWarning(i):null))}_renderOptions(e){const{viewModel:s,messages:o}=this,t=s.state===m.Disabled,r=this._memoizedCallbacks(e);switch(e.type){case"sunny":return d(w,{disabled:t,key:"sunny-cover",label:o.sunny.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange});case"cloudy":return d(w,{disabled:t,key:"cloudy-cover",label:o.cloudy.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange});case"rainy":return d(u,null,d(w,{disabled:t,key:"rainy-cover",label:o.rainy.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange}),d(w,{disabled:t,key:"rainy-precipitation",label:o.rainy.precipitation,value:e.precipitation,onChange:r.onPrecipitationChange}));case"snowy":return d(u,null,d(w,{disabled:t,key:"snowy-cloud-cover",label:o.snowy.cloudCover,value:e.cloudCover,onChange:r.onCloudCoverChange}),d(w,{disabled:t,key:"snowy-precipitation",label:o.snowy.precipitation,value:e.precipitation,onChange:r.onPrecipitationChange}),d("calcite-label",{key:"snow-cover",layout:"inline",scale:"s",title:o.snowy.snowCoverTooltip},d("calcite-checkbox",{checked:"enabled"===e.snowCover,disabled:t,onCalciteCheckboxChange:r.onSnowCoverChange}),o.snowy.snowCover));case"foggy":return d(w,{disabled:t,key:"foggy-cover",label:o.foggy.fogStrength,value:e.fogStrength,onChange:r.onFogStrengthChange})}}_renderWarning(e){return d("div",{class:b.warning,key:"warning"},d("calcite-icon",{icon:"exclamation-mark-triangle",scale:"s"}),e)}};e([o()],f.prototype,"viewModel",void 0),e([o()],f.prototype,"view",null),e([o()],f.prototype,"headingLevel",void 0),e([o({type:C,nonNullable:!0})],f.prototype,"visibleElements",void 0),e([o()],f.prototype,"icon",null),e([o()],f.prototype,"label",null),e([o(),p("esri/widgets/Weather/t9n/Weather")],f.prototype,"messages",void 0),e([o()],f.prototype,"_errorMessage",null),e([o()],f.prototype,"_warningMessage",null),f=e([t("esri.widgets.Weather")],f);const S=f;export{S as default};
