// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,g,h,d){a=class extends a.JSONSupport{constructor(e){super(e);this.title=this.subLayerIds=this.layerId=null}};b.__decorate([c.property({json:{write:!0}})],a.prototype,"layerId",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"subLayerIds",void 0);b.__decorate([c.property({json:{write:!0}})],
a.prototype,"title",void 0);return a=b.__decorate([d.subclass("esri.rest.support.LegendLayer")],a)});