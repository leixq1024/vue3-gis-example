/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{S as e}from"./Matrix4PassUniform.js";import{V as r}from"./VertexPosition.glsl.js";import{b as o}from"./StencilUtils.js";import{g as a}from"./interfaces3.js";import{V as t}from"./VertexAttribute.js";function i(e){e.varyings.add("linearDepth","float")}function d(e){e.vertex.uniforms.add(new o("nearFar",((e,r)=>r.camera.nearFar)))}function n(e){e.vertex.code.add(a`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function s(o,t){const{vertex:s}=o;switch(t.output){case e.Color:case e.ColorEmission:if(t.receiveShadows)return i(o),void s.code.add(a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case e.Shadow:case e.ShadowHighlight:case e.ShadowExcludeHighlight:case e.ViewshedShadow:return o.include(r,t),i(o),d(o),n(o),void s.code.add(a`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add(a`void forwardLinearDepth() {}`)}function c(e){n(e),e.vertex.code.add(a`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(a`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function v(e,r){r.hasVertexColors?(e.attributes.add(t.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(a`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(a`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(a`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{s as F,c as T,v as V,d as a,i as b};
