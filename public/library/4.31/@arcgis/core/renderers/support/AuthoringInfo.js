/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{J as t}from"../../chunks/jsonMap.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as i}from"../../core/lang.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{I as o}from"../../chunks/ensureType.js";import{r as a}from"../../chunks/reader.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Logger.js";import n from"./AuthoringInfoVisualVariable.js";import{f as u,t as p}from"../../chunks/colorRamps.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/cast.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/enumeration.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";var c;let d=c=class extends s{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new c({minValue:this.minValue,maxValue:this.maxValue})}};var h;e([r({type:Number,json:{write:!0}})],d.prototype,"minValue",void 0),e([r({type:Number,json:{write:!0}})],d.prototype,"maxValue",void 0),d=c=e([l("esri.renderers.support.AuthoringInfoClassBreakInfo")],d);let m=h=class extends s{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=new Array}clone(){return new h({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:i(this.classBreakInfos)})}};var y;e([r({type:String,json:{write:!0}})],m.prototype,"field",void 0),e([r({type:String,json:{write:!0}})],m.prototype,"normalizationField",void 0),e([r({type:String,json:{write:!0}})],m.prototype,"label",void 0),e([r({type:[d],json:{write:!0}})],m.prototype,"classBreakInfos",void 0),m=h=e([l("esri.renderers.support.AuthoringInfoFieldInfo")],m);const f=new t({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),v=new t({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),w=new t({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),j=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers"];let b=y=class extends s{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?u(e):void 0}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new y({classificationMethod:this.classificationMethod,colorRamp:i(this.colorRamp),fadeRatio:i(this.fadeRatio),fields:this.fields?.slice(),field1:i(this.field1),field2:i(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map((e=>e.clone())),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};e([r({type:f.apiValues,value:null,json:{type:f.jsonValues,read:f.read,write:f.write,origins:{"web-document":{default:"manual",type:f.jsonValues,read:f.read,write:f.write}}}})],b.prototype,"classificationMethod",null),e([r({types:p,json:{write:!0}})],b.prototype,"colorRamp",void 0),e([a("colorRamp")],b.prototype,"readColorRamp",null),e([r({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"fadeRatio",void 0),e([r({type:[String],value:null,json:{write:!0}})],b.prototype,"fields",null),e([r({type:m,value:null,json:{write:!0}})],b.prototype,"field1",null),e([r({type:m,value:null,json:{write:!0}})],b.prototype,"field2",null),e([r({type:["flow-line","wave-front"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"flowTheme",null),e([r({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],b.prototype,"focus",null),e([r({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],b.prototype,"isAutoGenerated",void 0),e([r({type:Number,value:null,json:{type:o,write:!0}})],b.prototype,"numClasses",null),e([r({type:j,json:{type:j,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],b.prototype,"lengthUnit",void 0),e([r({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"maxSliderValue",void 0),e([r({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"minSliderValue",void 0),e([r({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"statistics",null),e([r({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],b.prototype,"standardDeviationInterval",null),e([r({type:v.apiValues,value:null,json:{type:v.jsonValues,read:v.read,write:v.write,origins:{"web-scene":{type:w.jsonValues,write:{writer:w.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],b.prototype,"type",null),e([r({type:[n],json:{write:!0}})],b.prototype,"visualVariables",void 0),e([r({type:["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"univariateSymbolStyle",null),e([r({type:["high-to-low","above-and-below","above","below"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"univariateTheme",null),b=y=e([l("esri.renderers.support.AuthoringInfo")],b);const g=b;export{m as A,d as a,g as default};
