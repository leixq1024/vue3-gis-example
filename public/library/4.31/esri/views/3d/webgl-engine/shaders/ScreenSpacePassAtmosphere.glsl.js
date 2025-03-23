// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../core/shaderModules/interfaces ../core/shaderModules/Matrix4PassUniform ../lib/VertexAttribute".split(" "),function(d,h,k,b,e,l){const m=k.create();d.ScreenSpacePassAtmosphere=function(a,n={needUVs:!0,needEyeDirection:!0}){a.attributes.add(l.VertexAttribute.POSITION,"vec2");a.varyings.add("worldRay","vec3");const {needUVs:f,needEyeDirection:g}=n;f&&a.varyings.add("uv","vec2");g&&a.varyings.add("eyeDir",
"vec3");a.vertex.uniforms.add(new e.Matrix4PassUniform("inverseProjectionMatrix",(p,c)=>c.camera.inverseProjectionMatrix),new e.Matrix4PassUniform("inverseViewMatrix",(p,c)=>h.invertOrIdentity(m,c.camera.viewMatrix)));a.vertex.main.add(b.glsl`
    vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
    ${b.If(g,"eyeDir \x3d posViewNear;")}
    worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
    ${b.If(f,"uv \x3d position * 0.5 + vec2(0.5);")}
    gl_Position = vec4(position, 1, 1);
  `)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});