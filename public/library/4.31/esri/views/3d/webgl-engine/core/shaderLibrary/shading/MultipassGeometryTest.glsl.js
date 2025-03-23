// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadDepth.glsl","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(b,c,d,e){b.multipassGeometryTest=function(a){a.include(c.ReadDepth);a.uniforms.add(new e.Texture2DPassUniform("geometryDepthTexture",(g,f)=>f.geometryDepth?.attachment));a.code.add(d.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
}`)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});