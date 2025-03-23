// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Color ../../../core/JSONSupport ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,e,a,f,c,g,h){var d;a=d=class extends a.JSONSupport{constructor(){super(...arguments);this.label=this.description=null;this.maxValue=this.minValue=0;this.color=null}clone(){return new d({description:this.description,label:this.label,minValue:this.minValue,
maxValue:this.maxValue,color:f.clone(this.color)})}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,"maxValue",
void 0);b.__decorate([c.property({type:e,json:{type:[g.Integer],write:!0}})],a.prototype,"color",void 0);return a=d=b.__decorate([h.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a)});