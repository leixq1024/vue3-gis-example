// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass ./AuthoringInfoSizeStop".split(" "),function(c,e,b,p,d,h,q,r){var g;const f=new e.JSONMap({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"});e=new e.JSONMap({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"});const k={key(a){return"number"===
typeof a?"number":"string"},typeMap:{number:Number,string:String},base:null},l=["high-to-low","above-and-below","centered-on","extremes"],m=[...(new Set("high-to-low above-and-below centered-on extremes above below high-to-low above-and-below above below reference-size".split(" ")))],n="seconds minutes hours days months years".split(" ");b=g=class extends b.JSONSupport{constructor(a){super(a);this.units=this.type=this.startTime=this.minSliderValue=this.maxSliderValue=this.field=this.endTime=null}castEndTime(a){return"string"===
typeof a||"number"===typeof a?a:null}get normalizationField(){return"reference-size"===this.theme?this._get("normalizationField"):null}set normalizationField(a){this._set("normalizationField",a)}get referenceSizeScale(){return"reference-size"===this.theme?this._get("referenceSizeScale"):null}set referenceSizeScale(a){this._set("referenceSizeScale",a)}get referenceSizeSymbolStyle(){return"reference-size"===this.theme?this._get("referenceSizeSymbolStyle"):null}set referenceSizeSymbolStyle(a){this._set("referenceSizeSymbolStyle",
a)}castStartTime(a){return"string"===typeof a||"number"===typeof a?a:null}get sizeStops(){return"reference-size"===this.theme?this._get("sizeStops"):null}set sizeStops(a){this._set("sizeStops",a)}get style(){return"color"===this.type?this._get("style"):null}set style(a){this._set("style",a)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(a){this._set("theme",a)}clone(){return new g({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,
minSliderValue:this.minSliderValue,normalizationField:this.normalizationField,referenceSizeScale:this.referenceSizeScale,referenceSizeSymbolStyle:this.referenceSizeSymbolStyle,sizeStops:p.clone(this.sizeStops),startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};c.__decorate([d.property({types:k,json:{write:!0}})],b.prototype,"endTime",void 0);c.__decorate([h.cast("endTime")],b.prototype,"castEndTime",null);c.__decorate([d.property({type:String,json:{write:!0}})],
b.prototype,"field",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"maxSliderValue",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"minSliderValue",void 0);c.__decorate([d.property({type:String,json:{origins:{"web-scene":{write:!1}},write:!0}})],b.prototype,"normalizationField",null);c.__decorate([d.property({type:Number,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],b.prototype,"referenceSizeScale",null);c.__decorate([d.property({type:["circle",
"diamond","hexagon-flat","hexagon-pointy","square"],value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],b.prototype,"referenceSizeSymbolStyle",null);c.__decorate([d.property({types:k,json:{write:!0}})],b.prototype,"startTime",void 0);c.__decorate([h.cast("startTime")],b.prototype,"castStartTime",null);c.__decorate([d.property({type:[r],json:{origins:{"web-scene":{write:!1}},write:!0}})],b.prototype,"sizeStops",null);c.__decorate([d.property({type:f.apiValues,value:null,json:{type:f.jsonValues,
read:f.read,write:f.write}})],b.prototype,"style",null);c.__decorate([d.property({type:m,value:null,json:{type:m,origins:{"web-scene":{type:l,write:{writer:(a,t)=>{l.includes(a)&&(t.theme=a)}}}},write:!0}})],b.prototype,"theme",null);c.__decorate([d.property({type:e.apiValues,json:{type:e.jsonValues,read:e.read,write:e.write}})],b.prototype,"type",void 0);c.__decorate([d.property({type:n,json:{type:n,write:!0}})],b.prototype,"units",void 0);return b=g=c.__decorate([q.subclass("esri.renderers.support.AuthoringInfoVisualVariable")],
b)});