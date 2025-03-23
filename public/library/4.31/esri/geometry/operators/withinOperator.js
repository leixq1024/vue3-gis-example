// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/QuadraticBezier","./support/converterAPI"],function(d,f,b){class g extends f.OperatorSimpleRelation{getOperatorType(){return 7}execute(a,c,h,k){return f.relate(a,c,h,2,k)}}const e=new g;d.accelerateGeometry=function(a){const c=b.getSpatialReference(a);return e.accelerateGeometry(b.fromGeometry(a),b.fromSpatialReference(c),1)};d.execute=function(a,c){return e.execute(b.fromGeometry(a),b.fromGeometry(c),b.fromSpatialReference(a.spatialReference),null)};d.supportsCurves=
function(){return e.supportsCurves()};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});