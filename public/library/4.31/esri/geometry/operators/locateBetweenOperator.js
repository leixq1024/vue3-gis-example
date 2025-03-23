// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/Transformation2D","./gx/operatorLocateBetween","./support/converterAPI"],function(a,e,c,b){a.executeMany=function(d,f,g){const h=d.map(b.fromGeometry),k=b.getSpatialReference(d);return c.executeMany(h,new e.Envelope1D(f,g)).map(l=>b.toGeometry(l,k))};a.supportsCurves=function(){return c.supportsCurves()};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});