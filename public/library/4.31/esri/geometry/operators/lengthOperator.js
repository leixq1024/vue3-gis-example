// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","./support/converterAPI"],function(d,f,e){d.execute=function(a,b={}){({unit:b}=b);let c=e.fromGeometry(a).calculateLength2D();c&&b&&(a=e.getSpatialReference(a),c=f.convertFromSpatialReferenceUnit(c,a,b));return c};d.supportsCurves=function(){return!0};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});