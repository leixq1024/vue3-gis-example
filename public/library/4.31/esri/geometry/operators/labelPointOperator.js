// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./gx/operatorLabelPoint","./support/converterAPI"],function(c,d,a){c.execute=function(b){return a.toPoint(d.execute(a.fromGeometry(b)),a.getSpatialReference(b))};c.executeMany=function(b){const e=b.map(a.fromGeometry),f=a.getSpatialReference(b);return d.executeMany(e).map(g=>a.toPoint(g,f))};c.supportsCurves=function(){return d.supportsCurves()};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});