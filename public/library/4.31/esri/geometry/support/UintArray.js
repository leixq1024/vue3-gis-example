// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/typedArrayUtil"],function(c,e){c.newUintArray=function(a,b=!1){return a<=e.nativeArrayMaxSize?b?Array(a).fill(0):Array(a):new Uint32Array(a)};c.uintSubArray=function(a,b,d){return Array.isArray(a)?a.slice(b,b+d):a.subarray(b,b+d)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});