// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","../../geometry/support/MeshTransform"],function(b,c,d){b.getMeshTransformForMetersToSpatialReference=function(a){a=1/c.getMetersPerUnitForSR(a,1);return 1!==a?new d({scale:[a,a,a]}):void 0};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});