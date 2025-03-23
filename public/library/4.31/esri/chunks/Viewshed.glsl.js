// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/NormalFromDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/LocalFromScreenSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl ../views/3d/webgl-engine/core/shaderModules/BooleanPassUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(e,t,f,u,v,w,x,m,y,z,A,g,h,B,C,D,k,n,p,E,l){function q(){const b=new E.ShaderBuilder,c=b.fragment;b.include(v.ScreenSpacePass);b.include(m.localFromScreenSpace);b.include(z.TextureAtlasLookup);b.include(u.NormalFromDepth);c.include(w.ReadDepth);c.include(y.Rgba4FloatEncoding);b.include(x.PiUtils);c.uniforms.add(new l.Texture2DPassUniform("depthTexture",(a,d)=>d.depth?.attachment),new n.Matrix4PassUniform("inverseProjectionMatrix",(a,d)=>d.camera.inverseProjectionMatrix),new n.Matrix4PassUniform("inverseViewNormalMatrix",
(a,d)=>t.invertOrIdentity(F,d.camera.viewInverseTransposeMatrix)),new h.Float3PassUniform("viewshedObserverOffset",a=>a.observerOffset),new h.Float3PassUniform("viewshedTargetVector",a=>a.targetVector),new h.Float3PassUniform("viewshedUpVector",a=>a.upVector),new g.Float2PassUniform("viewshedFOVs",a=>a.fovs),new g.Float2PassUniform("viewshedHeadingAndTilt",a=>a.headingAndTilt),new g.Float2PassUniform("viewshedNearFar",a=>a.shadowMap.nearFar??[1,100]),new B.FloatPassUniform("viewshedVolumeOffset",
a=>a.volumeOffset),new l.Texture2DPassUniform("viewshedShadowMap",a=>a.shadowMap.depthTexture),new p.Matrix4sPassUniform("viewshedProjectionMatrices",a=>a.projectionMatrices,6),new p.Matrix4sPassUniform("viewshedViewMatrices",a=>a.viewMatrices,6),new D.IntegerPassUniform("viewshedNumFaces",a=>a.shadowMap.numActiveFaces),new C.FloatsPassUniform("viewshedAtlasRegions",a=>a.shadowMap.atlasRegions.flat(),24),new l.Texture2DPassUniform("normalMap",(a,d)=>a.normals),new A.BooleanPassUniform("useNormalMap",
(a,d)=>null!=a.normals));c.constants.add("visibleColor","vec4",[0,1,0,.5]);c.constants.add("occludedColor","vec4",[1,0,0,.5]);c.code.add(k.glsl`vec3 normalFromTexture() {
vec4 norm4 = texture(normalMap, uv);
vec3 nNormal = vec3(-1.0) + 2.0 * norm4.xyz;
return normalize((inverseViewNormalMatrix * vec4(nNormal, 1.0)).xyz);
}`).code.add(k.glsl`vec2 getViewshedUv(vec4 worldPosition, int face) {
mat4 viewshedMatrix = viewshedProjectionMatrices[face];
vec4 viewshedUv4 = viewshedMatrix * worldPosition;
vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
return viewshedUv.xy;
}
float viewshedDepthToFloat(float depth) {
return (depth - viewshedNearFar[0]) / (viewshedNearFar[1] - viewshedNearFar[0]);
}
float getOrthographicDepthToViewshed(vec4 worldPosition, int face) {
mat4 viewshedViewMatrix = viewshedViewMatrices[face];
vec4 viewshedUv4 = viewshedViewMatrix * worldPosition;
vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
float depth = -viewshedUv.z;
return viewshedDepthToFloat(depth);
}
float getDepthFromShadowMap(vec2 uv, int face) {
int index = 4 * face;
float umin = viewshedAtlasRegions[index];
float umax = viewshedAtlasRegions[index + 1];
float vmin = viewshedAtlasRegions[index + 2];
float vmax = viewshedAtlasRegions[index + 3];
vec4 atlasRegion = vec4(umin, vmin, umax, vmax);
return rgba4ToFloat(textureAtlasLookup(viewshedShadowMap, uv, atlasRegion));
}
struct ViewshedPoint {
int face;
vec2 uv;
bool isWithin;
float orthographicDepth;
};
mat3 rotationMatrix(vec3 axis, float angle)
{
float s = sin(angle);
float c = cos(angle);
float oc = 1.0 - c;
return mat3(
oc * axis.xxz * axis.xyx + vec3(c, axis.zy) * vec3(1., -s, s),
oc * axis.xyy * axis.yyz + vec3(axis.z, c, axis.x) * vec3(s, 1., -s),
oc * axis.zyz * axis.xzz + vec3(axis.yx, c) * vec3(-s, s, 1.)
);
}
float distanceToPlane(vec3 position, vec3 normal) {
return dot(position, normal);
}
bool outsideViewshed(float distance) {
return distance > -viewshedVolumeOffset;
}
bool isWithinViewshed(vec3 position) {
float positionLength = length(position - viewshedObserverOffset);
float farSphereDistance = positionLength - viewshedNearFar[1];
if (outsideViewshed(farSphereDistance)) { return false; }
float nearSphereDistance = viewshedNearFar[0] - positionLength;
if (outsideViewshed(nearSphereDistance)) { return false; }
vec3 westVector = normalize(cross(viewshedUpVector, viewshedTargetVector));
bool leftOfTarget = distanceToPlane(position, westVector) > 0.0;
if (viewshedFOVs[0] < TWO_PI) {
float horAngle = viewshedFOVs[0] / 2.0;
horAngle = leftOfTarget ? horAngle : -horAngle;
vec3 sideVector = viewshedTargetVector * rotationMatrix(viewshedUpVector, horAngle);
bool inFront = distanceToPlane(position, sideVector) > 0.0;
if (inFront) {
vec3 sideNormal = cross(viewshedUpVector, sideVector) * (leftOfTarget ? 1. : -1.);
float sideDistance = distanceToPlane(position, normalize(sideNormal));
if (outsideViewshed(sideDistance)) { return false; }
} else if (viewshedFOVs[0] < PI) { return false; }
}
if (viewshedFOVs[1] < PI) {
float t = dot(viewshedUpVector, position);
vec3 nProjVector = normalize(position - t * viewshedUpVector);
float heading = acos(clamp(dot(normalize(viewshedTargetVector), nProjVector), -1.0, 1.0));
heading = leftOfTarget ? heading : -heading;
bool aboveTarget = distanceToPlane(position, viewshedUpVector) > 0.0;
float verFOV = viewshedFOVs[1] / 2.0;
verFOV = aboveTarget ? -verFOV : verFOV;
mat3 rotateByHeading = rotationMatrix(viewshedUpVector, heading);
vec3 sideVector = viewshedTargetVector * rotationMatrix(westVector, verFOV) * rotateByHeading;
vec3 leftVector = westVector * rotateByHeading;
vec3 sideNormal = cross(sideVector, leftVector) * (aboveTarget ? 1. : -1.);
float sideDistance = distanceToPlane(position, normalize(sideNormal));
if (outsideViewshed(sideDistance)) { return false; }
}
return true;
}
bool getViewshedPoint(vec4 localPosition, out ViewshedPoint point) {
for(int i=0; i < viewshedNumFaces; i++) {
vec2 viewshedUv = getViewshedUv(localPosition, i);
if (viewshedUv.x > 0. && viewshedUv.x < 1. && viewshedUv.y > 0. && viewshedUv.y < 1.) {
float orthoDepth = getOrthographicDepthToViewshed(localPosition, i);
if (orthoDepth >= 0.) {
bool isWithin = isWithinViewshed(localPosition.xyz);
point = ViewshedPoint(i, viewshedUv, isWithin, orthoDepth);
return true;
}
}
}
return false;
}
float normalCosAngle(float linearDepth, vec3 localPosition) {
vec3 viewingDir = normalize(localPosition);
if(useNormalMap) {
vec3 normal = normalFromTexture();
return dot(normal, viewingDir);
}
vec3 cameraSpacePosition = reconstructPosition(gl_FragCoord.xy, linearDepth);
vec3 normal = normalFromDepth(depthTexture, cameraSpacePosition, gl_FragCoord.xy, uv);
normal = (inverseViewNormalMatrix * vec4(normal, 1.0)).xyz;
return dot(normal, viewingDir);
}`);c.main.add(k.glsl`float depth = depthFromTexture(depthTexture, uv);
if (depth >= 1.0 || depth <= 0.0) {
return;
}
float linearDepth = linearizeDepth(depth);
vec4 localPosition = reconstructLocalPosition(gl_FragCoord.xy, linearDepth);
ViewshedPoint point;
bool foundFace = getViewshedPoint(localPosition, point);
if (!foundFace || !point.isWithin) {
return;
}
float viewshedDepth = getDepthFromShadowMap(point.uv, point.face);
float distance = point.orthographicDepth;
bool visible = distance < viewshedDepth;
fragColor = visible ? visibleColor : occludedColor;
float cosAngle = normalCosAngle(linearDepth, localPosition.xyz);
float threshold = useNormalMap ? -0.01 : -0.04;
if (cosAngle > threshold) {
fragColor = occludedColor;
}`);return b}class r extends m.LocalFromScreenSpacePassParameters{constructor(){super(...arguments);this.shadowMap={depthTexture:null,nearFar:[1,100],numActiveFaces:1,atlasRegions:[[0,0,1,1]]};this.targetVector=[1,0,0];this.upVector=[0,0,1];this.fovs=[45,45];this.headingAndTilt=[0,0];this.observerOffset=[0,0,0];this.projectionMatrices=f.IDENTITY.flat();this.viewMatrices=f.IDENTITY.flat();this.volumeOffset=0}}const F=f.create(),G=Object.freeze(Object.defineProperty({__proto__:null,ViewshedPassParameters:r,
build:q},Symbol.toStringTag,{value:"Module"}));e.Viewshed=G;e.ViewshedPassParameters=r;e.build=q});