/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{J as t}from"../../chunks/jsonMap.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{clone as i}from"../../core/lang.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import{cast as o}from"../../core/accessorSupport/decorators/cast.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/ensureType.js";var l;let p=l=class extends r{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new l({label:this.label,value:this.value,size:this.size})}};e([s({type:String,json:{write:!0}})],p.prototype,"label",void 0),e([s({type:Number,json:{write:!0}})],p.prototype,"size",void 0),e([s({type:Number,json:{write:!0}})],p.prototype,"value",void 0),p=l=e([n("esri.renderers.support.AuthoringInfoSizeStop")],p);const a=p;var u;const c=new t({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),m=new t({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),h={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},y=["high-to-low","above-and-below","centered-on","extremes"],S=[...new Set(["high-to-low","above-and-below","centered-on","extremes","above","below","high-to-low","above-and-below","above","below","reference-size"])],d=["seconds","minutes","hours","days","months","years"];let f=u=class extends r{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}get normalizationField(){return"reference-size"===this.theme?this._get("normalizationField"):null}set normalizationField(e){this._set("normalizationField",e)}get referenceSizeScale(){return"reference-size"===this.theme?this._get("referenceSizeScale"):null}set referenceSizeScale(e){this._set("referenceSizeScale",e)}get referenceSizeSymbolStyle(){return"reference-size"===this.theme?this._get("referenceSizeSymbolStyle"):null}set referenceSizeSymbolStyle(e){this._set("referenceSizeSymbolStyle",e)}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get sizeStops(){return"reference-size"===this.theme?this._get("sizeStops"):null}set sizeStops(e){this._set("sizeStops",e)}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new u({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,normalizationField:this.normalizationField,referenceSizeScale:this.referenceSizeScale,referenceSizeSymbolStyle:this.referenceSizeSymbolStyle,sizeStops:i(this.sizeStops),startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};e([s({types:h,json:{write:!0}})],f.prototype,"endTime",void 0),e([o("endTime")],f.prototype,"castEndTime",null),e([s({type:String,json:{write:!0}})],f.prototype,"field",void 0),e([s({type:Number,json:{write:!0}})],f.prototype,"maxSliderValue",void 0),e([s({type:Number,json:{write:!0}})],f.prototype,"minSliderValue",void 0),e([s({type:String,json:{origins:{"web-scene":{write:!1}},write:!0}})],f.prototype,"normalizationField",null),e([s({type:Number,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],f.prototype,"referenceSizeScale",null),e([s({type:["circle","diamond","hexagon-flat","hexagon-pointy","square"],value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],f.prototype,"referenceSizeSymbolStyle",null),e([s({types:h,json:{write:!0}})],f.prototype,"startTime",void 0),e([o("startTime")],f.prototype,"castStartTime",null),e([s({type:[a],json:{origins:{"web-scene":{write:!1}},write:!0}})],f.prototype,"sizeStops",null),e([s({type:c.apiValues,value:null,json:{type:c.jsonValues,read:c.read,write:c.write}})],f.prototype,"style",null),e([s({type:S,value:null,json:{type:S,origins:{"web-scene":{type:y,write:{writer:(e,t)=>{y.includes(e)&&(t.theme=e)}}}},write:!0}})],f.prototype,"theme",null),e([s({type:m.apiValues,json:{type:m.jsonValues,read:m.read,write:m.write}})],f.prototype,"type",void 0),e([s({type:d,json:{type:d,write:!0}})],f.prototype,"units",void 0),f=u=e([n("esri.renderers.support.AuthoringInfoVisualVariable")],f);const b=f;export{a as A,b as default};
