// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/support/spatialReferenceUtils"],function(c,b){function d(a){return b.isWGS84(a)||b.isCGCS2000(a)}c.isSupportedEarthGCS=d;c.isSupportedGCSOnGlobe=function(a){return d(a)||b.isMars(a)||b.isMoon(a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});