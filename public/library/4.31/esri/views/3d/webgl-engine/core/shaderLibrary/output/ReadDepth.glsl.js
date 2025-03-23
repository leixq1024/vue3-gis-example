// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/libs/gl-matrix-2/math/vec2","../../../../../../core/libs/gl-matrix-2/factories/vec2f64","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces"],function(d,e,f,g,b){const h=f.create();d.ReadDepth=function(a){a.uniforms.add(new g.Float2PassUniform("zProjectionMap",(c,k)=>{c=k.camera.projectionMatrix;return e.set(h,c[14],c[10])}));a.code.add(b.glsl`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`);a.code.add(b.glsl`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`);a.code.add(b.glsl`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});