// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","./support/converterAPI"],function(e,d,g){e.execute=function(b,c={}){({unit:c}=c);let a=g.fromGeometry(b).calculateArea2D();if(a&&c){b=g.getSpatialReference(b);if(b.isGeographic)throw Error("Unable to convert from an angular area unit to a linear area unit.");const f=d.areaUnitFromSpatialReference(b);f!==c&&(f?a=d.convertUnit(a,f,c):(a=Math.sqrt(a),a*=d.getMetersPerUnitForSR(b),a=d.convertUnit(a**2,"square-meters",c)))}return a};e.supportsCurves=function(){return!0};
Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});