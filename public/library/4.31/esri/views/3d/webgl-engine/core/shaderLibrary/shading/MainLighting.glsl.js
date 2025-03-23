// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces"],function(b,d,g){function e(a){a.uniforms.add(new d.Float3PassUniform("mainLightDirection",(h,c)=>c.lighting.mainLight.direction))}function f(a){a.uniforms.add(new d.Float3PassUniform("mainLightIntensity",(h,c)=>c.lighting.mainLight.intensity))}b.addMainLightDirection=e;b.addMainLightIntensity=f;b.applyShading=function(a){e(a.fragment);f(a.fragment);a.fragment.code.add(g.glsl`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});