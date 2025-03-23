// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/quantityUtils","../../geometry/geometryEngine","../../geometry/support/geodesicUtils","./geodesicMeasurementUtils"],function(b,c,e,f,g){function h(a){return c.createArea(Math.abs(f.geodesicAreas([a],"square-meters")[0]),"square-meters")}function k(a){try{return c.createArea(Math.abs(e.geodesicArea(a,"square-meters")),"square-meters")}catch(d){return null}}b.geodesicArea=function(a){const {spatialReference:d}=a;return g.geodesicMeasure(d,h,k,a)};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});