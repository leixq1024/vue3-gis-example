// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../core/shaderModules/interfaces"],function(a,b){a.ToneMapping=function(c){c.code.add(b.glsl`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});