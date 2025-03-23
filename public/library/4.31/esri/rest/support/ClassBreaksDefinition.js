// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass".split(" "),function(b,d,a,c,f,k,l,g,h){f=new d.JSONMap({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",
esriClassifyDefinedInterval:"defined-interval"});d=new d.JSONMap({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});a=class extends a.JSONSupport{constructor(e){super(e);this.type="class-breaks-definition";this.normalizationType=this.normalizationField=this.classificationMethod=this.classificationField=this.breakCount=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",
e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};b.__decorate([g.enumeration({classBreaksDef:"class-breaks-definition"})],a.prototype,"type",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"breakCount",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"classificationField",void 0);b.__decorate([c.property({type:String,json:{read:f.read,write:f.write}})],a.prototype,"classificationMethod",void 0);b.__decorate([c.property({json:{write:!0}})],
a.prototype,"normalizationField",void 0);b.__decorate([c.property({json:{read:d.read,write:d.write}})],a.prototype,"normalizationType",void 0);b.__decorate([c.property({value:null,json:{write:!0}})],a.prototype,"standardDeviationInterval",null);b.__decorate([c.property({value:null,json:{write:!0}})],a.prototype,"definedInterval",null);return a=b.__decorate([h.subclass("esri.rest.support.ClassBreaksDefinition")],a)});