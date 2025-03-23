// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ./CameraSpace.glsl ../../shaderModules/interfaces ../../shaderModules/Matrix4PassUniform".split(" "),function(b,c,f,g,h,d,k){class l extends d.NoParameters{constructor(){super(...arguments);this.localOrigin=g.zeros()}}b.LocalFromScreenSpacePassParameters=l;b.localFromScreenSpace=function(e){e.include(h.CameraSpace);e.fragment.uniforms.add(new k.Matrix4PassUniform("inverseViewMatrix",
(a,m)=>{a=c.translate(f.create(),m.camera.viewMatrix,a.localOrigin);return c.invertOrIdentity(a,a)})).code.add(d.glsl`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});