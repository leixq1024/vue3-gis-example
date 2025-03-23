// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../../geometry/support/Ellipsoid ../../../../environment/Clouds ../../../../environment/CloudsParameters ../../../../environment/weather ../shading/MainLighting.glsl ../../shaderModules/BooleanPassUniform ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix4PassUniform ../../shaderModules/TextureCubePassUniform".split(" "),function(f,
m,n,p,q,r,g,h,k,e,b,l,t){const u=(n.earth.radius+r.cloudsHeight)**2;f.CloudsParallaxShading=function(c){c=c.fragment;c.constants.add("radiusCloudsSquared","float",u).code.add(b.glsl`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`);c.uniforms.add(new e.FloatPassUniform("radiusCurvatureCorrection",(d,a)=>a.clouds.parallax.radiusCurvatureCorrection)).code.add(b.glsl`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`);c.code.add(b.glsl`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`);g.addMainLightDirection(c);g.addMainLightIntensity(c);const v=m.fromValues(.28,.175,.035);c.constants.add("RIM_COLOR","vec3",v);c.code.add(b.glsl`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${b.glsl.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${b.glsl.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${b.glsl.float(.2)} * pow(dirDotLight, ${b.glsl.float(10)}) * (1. - pow(sunsetTransition, ${b.glsl.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `);c.uniforms.add(new h.BooleanPassUniform("readChannelsRG",(d,a)=>a.clouds.readChannels===p.CloudsTextureChannels.RG),new t.TextureCubePassUniform("cubeMap",(d,a)=>a.clouds.data?.cubeMap?.colorTexture??null)).code.add(b.glsl`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`);c.uniforms.add(new k.Float3PassUniform("anchorPoint",(d,a)=>a.clouds.parallax.anchorPoint),new k.Float3PassUniform("anchorPointNew",(d,a)=>a.clouds.parallaxNew.anchorPoint),new l.Matrix4PassUniform("rotationClouds",(d,a)=>a.clouds.parallax.transform),new l.Matrix4PassUniform("rotationCloudsNew",(d,a)=>a.clouds.parallaxNew.transform),new e.FloatPassUniform("cloudsOpacity",(d,a)=>a.clouds.opacity),new e.FloatPassUniform("fadeFactor",(d,a)=>a.clouds.fadeFactor),new h.BooleanPassUniform("crossFade",
(d,a)=>a.clouds.fadeState===q.FadeState.CROSS_FADE)).code.add(b.glsl`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});