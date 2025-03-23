// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/arrayUtils","./gx/operatorSymmetricDifference","./support/converterAPI"],function(c,h,e,a){c.execute=function(b,f){const d=a.getSpatialReference(b);return a.toGeometry(e.execute(a.fromGeometry(b),a.fromGeometry(f),a.fromSpatialReference(d)),d)};c.executeMany=function(b,f){const d=b.map(a.fromGeometry),g=a.getSpatialReference(b);return e.executeMany(d,a.fromGeometry(f),a.fromSpatialReference(g)).map(k=>a.toGeometry(k,g)).filter(h.isSome)};c.supportsCurves=function(){return e.supportsCurves()};
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});