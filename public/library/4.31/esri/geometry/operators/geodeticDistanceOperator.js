// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","./gx/operatorGeodeticDistance","./support/converterAPI","./support/geodeticCurveType"],function(b,g,c,d,h){b.execute=function(a,k,e={}){const {curveType:l="geodesic",unit:f}=e;e=d.getSpatialReference(a);(a=c.execute(d.fromGeometry(a),d.fromGeometry(k),d.fromSpatialReference(e),h.geodeticCurveType[l]))&&f&&(a=g.convertUnit(a,"meters",f));return a};b.isLoaded=function(){return c.isLoaded()};b.load=function(){return c.load()};b.supportsCurves=function(){return c.supportsCurves()};
Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});