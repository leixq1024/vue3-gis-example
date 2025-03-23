// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./gx/operatorConvexHull","./support/converterAPI"],function(c,e,a){c.execute=function(b){const d=a.getSpatialReference(b);return a.toGeometry(e.execute(a.fromGeometry(b)),d)};c.executeMany=function(b,d={}){({merge:d=!1}=d);const f=b.map(a.fromGeometry),g=a.getSpatialReference(b);return e.executeMany(f,d).map(h=>a.toGeometry(h,g))};c.isConvex=function(b){return e.isConvex(a.fromGeometry(b))};c.supportsCurves=function(){return e.supportsCurves()};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});