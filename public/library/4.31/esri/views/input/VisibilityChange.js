// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/handleUtils"],function(a,c){a.onVisibilityChange=function(d){const b=()=>d("visible"===document.visibilityState);document.addEventListener("visibilitychange",b);return c.makeHandle(()=>document.removeEventListener("visibilitychange",b))};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});