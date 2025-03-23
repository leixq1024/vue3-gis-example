// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/ellipsoidUtils","../../geometry/spatialReferenceEllipsoidUtils","../../geometry/support/spatialReferenceUtils"],function(c,e,d,b){c.computeEuclideanMeasurementSR=function(a){return b.isEarth(a)?b.isWGS84(a)||b.isWebMercator(a)||b.isCGCS2000(a)||e.isSphericalECEF(a)?d.WGS84ECEFSpatialReference:a:d.getSphericalPCPF(a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});