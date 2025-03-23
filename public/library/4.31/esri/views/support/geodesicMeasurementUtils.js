// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/support/geodesicUtils","../../geometry/support/spatialReferenceUtils"],function(b,c,d){b.geodesicDistanceThreshold=1E5;b.geodesicMeasure=function(a,f,g,...e){return c.isSupported(a)?f.apply(void 0,e):d.isWebMercator(a)?g.apply(void 0,e):null};b.supportsGeodesicMeasurement=function(a){return c.isSupported(a)||d.isWebMercator(a)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});