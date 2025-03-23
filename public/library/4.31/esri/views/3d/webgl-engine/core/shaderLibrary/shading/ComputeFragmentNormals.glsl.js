// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/compilerUtils ../attributes/NormalAttribute.glsl ../attributes/VertexNormal.glsl ../attributes/VertexPosition.glsl ./Normals.glsl ../../shaderModules/interfaces".split(" "),function(h,k,f,l,g,e,b){h.computeFragmentNormals=function(d,a){const c=d.fragment;switch(a.doubleSidedMode){case e.NormalsDoubleSidedMode.None:c.code.add(b.glsl`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case e.NormalsDoubleSidedMode.View:d.include(g.VertexPosition,a);c.code.add(b.glsl`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case e.NormalsDoubleSidedMode.WindingOrder:c.code.add(b.glsl`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:k.neverReached(a.doubleSidedMode);case e.NormalsDoubleSidedMode.COUNT:}switch(a.normalType){case f.NormalType.Attribute:case f.NormalType.Compressed:d.include(l.VertexNormal,a);c.main.add(b.glsl`vec3 fragmentFaceNormal = _adjustDoublesided(normalize(vNormalWorld));
vec3 fragmentFaceNormalView = gl_FrontFacing ? normalize(vNormalView) : -normalize(vNormalView);`);break;case f.NormalType.ScreenDerivative:d.include(g.VertexPosition,a),c.main.add(b.glsl`vec3 fragmentFaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
vec3 fragmentFaceNormalView = normalize(cross(dFdx(vPosition_view), dFdy(vPosition_view)));`)}a.shadeNormals?c.main.add(b.glsl`vec3 fragmentShadingNormal = fragmentFaceNormal;`):a.spherical?(d.include(g.VertexPosition,a),c.main.add(b.glsl`vec3 fragmentShadingNormal = normalize(positionWorld());`)):c.main.add(b.glsl`vec3 fragmentShadingNormal = vec3(0.0, 0.0, 1.0);`)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});