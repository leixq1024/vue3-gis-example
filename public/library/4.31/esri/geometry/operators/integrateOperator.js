// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/arrayUtils","./gx/operatorIntegrate","./support/converterAPI"],function(b,f,c,a){b.executeMany=function(d){const g=d.map(a.fromGeometry),e=a.getSpatialReference(d);return c.executeMany(g,a.fromSpatialReference(e)).map(h=>a.toGeometry(h,e)).filter(f.isSome)};b.supportsCurves=function(){return c.supportsCurves()};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});