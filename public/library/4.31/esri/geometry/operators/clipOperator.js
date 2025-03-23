// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./gx/operatorClip","./support/converterAPI"],function(d,f,a){d.execute=function(b,c){const e=a.getSpatialReference(b);c=a.fromExtent(c).asEnvelope2D();return a.toGeometry(f.execute(a.fromGeometry(b),c,a.fromSpatialReference(e)),e)};d.executeMany=function(b,c){const e=b.map(a.fromGeometry),g=a.getSpatialReference(b);b=a.fromExtent(c).asEnvelope2D();return f.executeMany(e,b,a.fromSpatialReference(g)).map(h=>a.toGeometry(h,g))};d.supportsCurves=function(){return f.supportsCurves()};
Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});