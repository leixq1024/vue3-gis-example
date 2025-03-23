// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./gx/operatorSimplify","./support/converterAPI"],function(c,d,a){c.execute=function(b){const e=a.getSpatialReference(b);return a.toGeometry(d.execute(a.fromGeometry(b),a.fromSpatialReference(e),!1),e)};c.executeMany=function(b){const e=b.map(a.fromGeometry),f=a.getSpatialReference(b);return d.executeMany(e,a.fromSpatialReference(f),!1).map(g=>a.toGeometry(g,f))};c.isSimple=function(b){return d.isSimpleAsFeature(a.fromGeometry(b),a.fromSpatialReference(a.getSpatialReference(b)),
!1)};c.supportsCurves=function(){return d.supportsCurves()};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});