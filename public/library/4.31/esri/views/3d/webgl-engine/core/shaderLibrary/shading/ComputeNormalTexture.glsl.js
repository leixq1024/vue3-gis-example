// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../../../core/libs/gl-matrix-2/factories/vec2f64 ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexTextureCoordinates.glsl ./Normals.glsl ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3PassUniform ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/VertexAttribute".split(" "),function(f,
g,h,k,l,m,n,d,p,q,r,t,u){f.ComputeNormalTexture=function(e,b){const a=e.fragment;b.hasVertexTangents?(e.attributes.add(u.VertexAttribute.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),b.doubleSidedMode===m.NormalsDoubleSidedMode.WindingOrder?a.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`);b.textureCoordinateType!==k.TextureCoordinateType.None&&(e.include(l.VertexTextureCoordinates,b),a.uniforms.add(b.bindType===t.BindType.Pass?new r.Texture2DPassUniform("normalTexture",c=>c.textureNormal):new q.Texture2DDrawUniform("normalTexture",c=>c.textureNormal)),b.hasNormalTextureTransform&&(a.uniforms.add(new n.Float2PassUniform("scale",c=>c.scale??h.ONES)),a.uniforms.add(new p.Matrix3PassUniform("normalTextureTransformMatrix",c=>c.normalTextureTransformMatrix??g.IDENTITY))),a.code.add(d.glsl`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),b.hasNormalTextureTransform&&a.code.add(d.glsl`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(d.glsl`return tangentSpace * rawNormal;
}`))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});