// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/shaders/ScreenSpacePassAtmosphere.glsl ../views/3d/webgl-engine/shaders/SphereIntersect.glsl ../views/3d/webgl-engine/shaders/ToneMapping.glsl".split(" "),
function(e,m,n,p,h,f,g,q,r,t,u,v){function k(){const d=new q.ShaderBuilder;d.include(t.ScreenSpacePassAtmosphere,{needUVs:!0,needEyeDirection:!0});const b=d.fragment;b.uniforms.add(new f.FloatPassUniform("atmosphereC",a=>a.atmosphereC),new h.Float3PassUniform("cameraPosition",(a,c)=>c.camera.eye),new p.Float2PassUniform("nearFar",(a,c)=>c.camera.nearFar),new r.Texture2DPassUniform("depthTexture",(a,c)=>c.mainDepth),new f.FloatPassUniform("fogStrength",a=>a.strength),new f.FloatPassUniform("fogAmount",
a=>a.amount),new h.Float3PassUniform("fogColor",a=>a.color));d.include(n.Gamma);b.include(u.SphereIntersect);b.include(v.ToneMapping);b.code.add(g.glsl`float getFogAmount(float dist, vec3 rayDir) {
if(dist == -1.0){
dist = 0.055 * sphereIntersect(cameraPosition, rayDir, atmosphereC).y;
}
return fogAmount * (1.0 - exp(-dist * fogStrength));
}`);b.main.add(g.glsl`vec3 rayDir = normalize(worldRay);
float terrainDepth = -1.0;
float depthSample = texture(depthTexture, uv).r;
float zNorm = 2.0 * depthSample - 1.0;
float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
if(depthSample < 1.0 && depthSample > 0.0){
vec3 cameraSpaceRay = normalize(eyeDir);
cameraSpaceRay /= cameraSpaceRay.z;
cameraSpaceRay *= linDepth;
terrainDepth = max(0.0, length(cameraSpaceRay));
}
float fogAmount = getFogAmount(terrainDepth, rayDir);
vec4 fog = vec4(fogColor, 1.0) * fogAmount;
fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));`);return d}class l extends g.NoParameters{constructor(){super(...arguments);this.color=m.create();this.strength=4E-6;this.atmosphereC=1;this.amount=0}}const w=Object.freeze(Object.defineProperty({__proto__:null,FogPassParameters:l,build:k},Symbol.toStringTag,{value:"Module"}));e.Fog=w;e.FogPassParameters=l;e.build=k});