// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/environment/ChapmanRaymarching.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/shaders/ScreenSpacePassAtmosphere.glsl ../views/3d/webgl-engine/shaders/SphereIntersect.glsl ../views/3d/webgl-engine/shaders/ToneMapping.glsl".split(" "),
function(f,k,l,m,n,g,c,p,q,r,t,u){function h(e){const d=new p.ShaderBuilder;d.include(r.ScreenSpacePassAtmosphere);({reduced:e}=e);const {fragment:a}=d;a.uniforms.add(new n.Float3PassUniform("backgroundColor",b=>b.backgroundColor),new g.FloatPassUniform("innerFadeDistance",b=>b.innerFadeDistance),new g.FloatPassUniform("altitudeFade",b=>b.altitudeFade),new q.Texture2DPassUniform("depthTexture",(b,v)=>v.mainDepth));m.addMainLightDirection(a);d.include(l.Gamma);a.include(t.SphereIntersect);a.include(u.ToneMapping);
a.include(k.ChapmanRaymarching,!1);a.code.add(c.glsl`vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
float rayPlanetDistance = heightParameters[1] - radii[0] * radii[0];
vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, rayPlanetDistance);
if (!((rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.y > 0.0)) {
return fragColor;
}
float lightAngle = dot(lightDirection, normalize(cameraPosition + rayDir * max(0.0, rayPlanetIntersect.x)));
vec4 surfaceColor = vec4(vec3(max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)))), 1.0 - altitudeFade);
float relDist = (rayPlanetIntersect.y - max(0.0, rayPlanetIntersect.x)) / innerFadeDistance;
if (relDist > 1.0) {
return surfaceColor;
}
return mix(fragColor, surfaceColor, smoothstep(0.0, 1.0, relDist * relDist));
}
float getGlow(float dist, float radius, float intensity) {
return pow(radius / max(dist, 1e-6), intensity);
}
vec3 getSun(vec3 cameraPos, vec3 rayDir, vec3 lightDir){
float scaleFract = (length(cameraPos) - radii[0]) / scaleHeight;
float sunOpticalDepth = getOpticalDepth(cameraPos, rayDir, max(scaleFract, 0.0));
vec3 sunTransmittance = exp(-(mix(betaCombined, betaRayleigh, 0.5)) * max(0.0, sunOpticalDepth));
float mu = clamp(dot(rayDir, lightDir), 0.0, 1.0);
float sunDisc = 256.0 * smoothstep(0.0, 128.0, clamp(getGlow(1.0 - mu, 3e-5, 3.0), 0.0, 128.0));
return normalize(sunTransmittance) * sunDisc;
}`);a.main.add(c.glsl`
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;
      ${c.If(!e,c.glsl`float depthSample = texture(depthTexture, uv).r;
             if (depthSample != 1.0) {
                fragColor = vec4(0);
                return;
             }`)}

      vec3 col = linearizeGamma(backgroundColor);
      col += raymarchAtmosphere(cameraPosition, rayDir, mainLightDirection, terrainDepth);
      col += getSun(cameraPosition, rayDir, mainLightDirection);
      float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[3]), length(col));

      col = tonemapACES(col);
      fragColor = delinearizeGamma(vec4(col, alpha));
      fragColor = applyUndergroundAtmosphere(rayDir, mainLightDirection, fragColor);
  `);return d}const w=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));f.ChapmanAtmosphere=w;f.build=h});