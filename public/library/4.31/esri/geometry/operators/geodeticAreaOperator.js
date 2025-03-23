// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","./gx/operatorGeodeticArea","./support/converterAPI","./support/geodeticCurveType"],function(b,g,c,d,h){b.execute=function(a,e={}){const {curveType:k="geodesic",unit:f}=e;e=d.getSpatialReference(a);(a=c.execute(d.fromGeometry(a),d.fromSpatialReference(e),h.geodeticCurveType[k]))&&f&&(a=g.convertUnit(a,"square-meters",f));return a};b.isLoaded=function(){return c.isLoaded()};b.load=function(){return c.load()};b.supportsCurves=function(){return c.supportsCurves()};
Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});