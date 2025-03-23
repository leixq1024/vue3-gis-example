// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.getInterpolationDefines=function(a,b,e){e=!e.capabilities.textureFloatLinear;const c=[];"cubic"===a?c.push("bicubic"):"bilinear"===a&&(b?(c.push("bilinear"),c.push("nnedge")):e&&c.push("bilinear"));return c};d.getProjectionDefines=function(a){const b=[];a&&(b.push("applyProjection"),1===a.spacing[0]&&b.push("lookupProjection"));return b};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});