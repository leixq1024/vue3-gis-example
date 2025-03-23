// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/arrayUtils","./gx/operatorCut","./support/converterAPI"],function(b,f,c,a){b.execute=function(d,g){const e=a.getSpatialReference(d);return c.execute(a.fromGeometry(d),a.fromPolyline(g),a.fromSpatialReference(e)).map(h=>a.toGeometry(h,e)).filter(f.isSome)};b.supportsCurves=function(){return c.supportsCurves()};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});