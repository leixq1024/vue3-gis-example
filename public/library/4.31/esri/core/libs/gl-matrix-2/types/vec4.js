// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a){return a instanceof Float32Array&&4<=a.length}function d(a){return Array.isArray(a)&&4<=a.length}b.isVec4=function(a){return c(a)||d(a)};b.isVec4f32=c;b.isVec4f64=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});