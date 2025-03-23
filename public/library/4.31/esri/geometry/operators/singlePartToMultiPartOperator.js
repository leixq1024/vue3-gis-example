// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/arrayUtils","./gx/operatorSinglePartToMultiPart","./support/converterAPI"],function(a,e,c,b){a.executeMany=function(d){const f=d.map(b.fromGeometry),g=b.getSpatialReference(d);return c.executeMany(f).map(h=>b.toGeometry(h,g)).filter(e.isSome)};a.supportsCurves=function(){return c.supportsCurves()};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});