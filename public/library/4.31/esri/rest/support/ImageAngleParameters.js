// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Point ../../geometry/SpatialReference".split(" "),function(b,a,e,f,c,g,h,k,l){var d;a=d=class extends e.JSONSupport{constructor(m){super(m);this.rasterId=this.spatialReference=this.point=this.angleNames=null}clone(){return new d(f.clone({angleNames:this.angleNames,point:this.point,
spatialReference:this.spatialReference,rasterId:this.rasterId}))}};b.__decorate([c.property({type:[String],json:{name:"angleName",write:!0}})],a.prototype,"angleNames",void 0);b.__decorate([c.property({type:k,json:{write:!0}})],a.prototype,"point",void 0);b.__decorate([c.property({type:l,json:{write:!0}})],a.prototype,"spatialReference",void 0);b.__decorate([c.property({type:g.Integer,json:{write:!0}})],a.prototype,"rasterId",void 0);return a=d=b.__decorate([h.subclass("esri.rest.support.ImageAngleParameters")],
a)});