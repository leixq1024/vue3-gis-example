// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/JSONSupport ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/accessorSupport/decorators/writer ../../../../geometry/SpatialReference".split(" "),function(b,a,d,q,r,t,e,f,g){a=class extends a.JSONSupport{constructor(c){super(c);this.sessionId=void 0;this.outSpatialReference=null}writeOutSR(c,h,k){if(null!=
c){const {wkid:l,latestWkid:m,wkt:n,wkt2:p}=c;h[k]=JSON.stringify({wkid:l??void 0,latestWkid:m??void 0,wkt:n??void 0,wkt2:p??void 0})}}};b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"sessionId",void 0);b.__decorate([d.property({type:g,json:{write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);b.__decorate([f.writer("outSpatialReference")],a.prototype,"writeOutSR",null);return a=b.__decorate([e.subclass("esri.rest.versionManagement.gdbVersion.support.ConflictsParameters")],
a)});