// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/environment/ChapmanRaymarching.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/shaders/ScreenSpacePassAtmosphere.glsl ../views/3d/webgl-engine/shaders/SphereIntersect.glsl ../views/3d/webgl-engine/shaders/ToneMapping.glsl".split(" "),
function(e,h,k,l,m,n,d,p,q,r,t,u){function f(b){const c=new p.ShaderBuilder;c.include(r.ScreenSpacePassAtmosphere);({reduced:b}=b);const {fragment:a}=c;a.uniforms.add(new q.Texture2DPassUniform("depthTexture",(g,v)=>v.mainDepth),new n.FloatPassUniform("hazeStrength",g=>g.hazeStrength));m.addMainLightDirection(a);c.include(l.Gamma);a.include(k.ReadDepth);a.include(t.SphereIntersect);a.include(u.ToneMapping);a.include(h.ChapmanRaymarching,!0);b&&a.code.add(d.glsl`float getDepth(vec2 uv){
return linearDepthFromTexture(depthTexture, uv);
}
float textureBilinear(vec2 uv) {
vec2 depthTextureSize = vec2(textureSize(depthTexture, 0));
vec2 texelSize = 1.0 / depthTextureSize;
vec2 depthUV = (uv * depthTextureSize) - vec2(0.5);
vec2 f = fract(depthUV);
vec2 snapUV = (floor(depthUV) + vec2(0.5)) / depthTextureSize;
float d0 = getDepth(snapUV);
float d1 = getDepth(snapUV + vec2(texelSize.x, 0.0));
float d2 = getDepth(snapUV + vec2(0.0, texelSize.y));
float d3 = getDepth(snapUV + texelSize);
return mix(mix(d0, d1, f.x), mix(d2, d3, f.x), f.y);
}`);a.main.add(d.glsl`
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;

      float depthSample = texture(depthTexture, uv).r;
      if (depthSample != 1.0) {
        vec3 cameraSpaceRay = normalize(eyeDir);
        cameraSpaceRay /= cameraSpaceRay.z;

        cameraSpaceRay *= ${d.If(b,"-textureBilinear(uv)","-linearDepthFromTexture(depthTexture, uv)")};
        terrainDepth = max(0.0, length(cameraSpaceRay));
      } else {
        discard;
      }

      // Alpha is ignored for haze blending
      vec3 col = vec3(0);
      float fadeOut = smoothstep(-10000.0, -15000.0, heightParameters[0] - radii[0]);
      if(depthSample != 1.0){
        col = (1.0 - fadeOut) * hazeStrength * raymarchAtmosphere(cameraPosition, rayDir, mainLightDirection, terrainDepth);
      }
      float alpha = 1.0;

      col = tonemapACES(col);
      fragColor = delinearizeGamma(vec4(col, alpha));
  `);return c}const w=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));e.Haze=w;e.build=f});