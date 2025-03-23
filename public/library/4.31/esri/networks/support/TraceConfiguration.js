// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,g,h,d){a=class extends a.JSONSupport{constructor(e){super(e);this.conditionBarriers=[];this.outputConditions=[];this.functions=[];this.functionBarriers=[];this.ignoreBarriersAtStartingPoints=this.validateConsistency=this.includeBarriers=this.shortestPathNetworkAttributeName=
this.traversabilityScope=null}};b.__decorate([c.property({type:[Object],json:{write:!0}})],a.prototype,"conditionBarriers",void 0);b.__decorate([c.property({type:[Object],json:{write:!0}})],a.prototype,"outputConditions",void 0);b.__decorate([c.property({type:[Object],json:{write:!0}})],a.prototype,"functions",void 0);b.__decorate([c.property({type:[Object],json:{write:!0}})],a.prototype,"functionBarriers",void 0);b.__decorate([c.property({type:["junctions","edges","junctionsAndEdges"],json:{write:!0}})],
a.prototype,"traversabilityScope",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"shortestPathNetworkAttributeName",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"includeBarriers",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"validateConsistency",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"ignoreBarriersAtStartingPoints",void 0);return a=b.__decorate([d.subclass("esri.networks.support.TraceConfiguration")],
a)});