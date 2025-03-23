// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/arrayUtils","../../renderers/support/lengthUtils"],function(b,d,c){const e=function(){const a=Object.keys(c.meterIn);d.remove(a,"decimal-degrees");a.sort();return a}();b.getMetersPerUnit=function(a){return 1/(c.meterIn[a]||1)};b.supportedUnits=e;b.supportsUnit=function(a){return!!a&&null!=c.meterIn[a]};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});