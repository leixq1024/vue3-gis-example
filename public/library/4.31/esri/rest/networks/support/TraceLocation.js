// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/jsonMap ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,c,a,d,g,h,k,e){c=new c.JSONMap({startingPoint:"starting-point",barrier:"barrier"});a=class extends a.JSONSupport{constructor(f){super(f);this.globalId=null;this.isFilterBarrier=!1;this.type=this.terminalId=this.percentAlong=null}};b.__decorate([d.property({type:String,
json:{write:!0}})],a.prototype,"globalId",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"isFilterBarrier",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"percentAlong",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"terminalId",void 0);b.__decorate([d.property({type:c.apiValues,json:{type:c.jsonValues,read:{reader:c.read,source:"traceLocationType"},write:{writer:c.write,target:"traceLocationType"}}})],a.prototype,
"type",void 0);return a=b.__decorate([e.subclass("esri.rest.networks.support.TraceLocation")],a)});