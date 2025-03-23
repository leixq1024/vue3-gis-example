// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./ShaderOutput","./attributes/VertexPosition.glsl","../shaderModules/Float2PassUniform","../shaderModules/interfaces"],function(c,b,l,m,e){function g(a){a.varyings.add("linearDepth","float")}function h(a){a.vertex.uniforms.add(new m.Float2PassUniform("nearFar",(f,d)=>d.camera.nearFar))}function k(a){a.vertex.code.add(e.glsl`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}c.ForwardLinearDepth=function(a,f){const {vertex:d}=a;switch(f.output){case b.ShaderOutput.Color:case b.ShaderOutput.ColorEmission:if(f.receiveShadows){g(a);d.code.add(e.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);return}break;case b.ShaderOutput.Shadow:case b.ShaderOutput.ShadowHighlight:case b.ShaderOutput.ShadowExcludeHighlight:case b.ShaderOutput.ViewshedShadow:a.include(l.VertexPosition,f);g(a);h(a);k(a);d.code.add(e.glsl`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);return}d.code.add(e.glsl`void forwardLinearDepth() {}`)};c.addCalculateLinearDepth=k;c.addLinearDepth=g;c.addNearFar=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});