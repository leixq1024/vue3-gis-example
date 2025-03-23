// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/has ../core/mathUtils ../core/libs/gl-matrix-2/factories/mat3f64 ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ../views/3d/environment/CloudsTechniqueConfiguration ../views/3d/environment/NoiseTextureAtlasDimensions ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/shaders/SphereIntersect.glsl".split(" "),
function(g,h,f,r,t,u,m,e,v,w,d,b,x,y,z,A){function n(p){const k=new y.ShaderBuilder;k.include(v.ScreenSpacePass,!1);const c=k.fragment;c.include(A.SphereIntersect);c.uniforms.add(new d.FloatPassUniform("cloudRadius",a=>a.cloudRadius),new d.FloatPassUniform("power",a=>f.lerp(35,120,a.absorption)),new d.FloatPassUniform("sigmaE",a=>1+a.absorption),new d.FloatPassUniform("density",a=>f.lerp(0,.3,a.density)),new d.FloatPassUniform("cloudSize",a=>f.lerp(0,.02,Math.max(.01,1-a.cloudSize))),new d.FloatPassUniform("detailSize",
a=>f.lerp(0,.2,Math.max(.01,1-a.detailSize))),new d.FloatPassUniform("smoothness",a=>f.lerp(0,.5,1-a.smoothness)),new d.FloatPassUniform("cloudHeight",a=>f.lerp(0,1500,a.cloudHeight)),new d.FloatPassUniform("coverage",a=>a.coverage),new x.Matrix3PassUniform("view",a=>a.viewMatrix),new z.Texture2DPassUniform("cloudShapeTexture",a=>null!=a.noiseTexture?a.noiseTexture.textureAtlas:null),new w.Float2PassUniform("cloudVariables",a=>t.set(B,a.coverage,a.absorption)));c.constants.add("halfCubeMapSize","float",
.5*l);c.code.add(b.glsl`
    const int STEPS = ${p.steps===m.RayMarchingSteps.SIXTEEN?b.glsl`16`:p.steps===m.RayMarchingSteps.HUNDRED?b.glsl`100`:b.glsl`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);
    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord - halfCubeMapSize;
      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`);c.code.add(b.glsl`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${b.glsl.float(e.atlasSize)};
      const float dataWidth = ${b.glsl.float(e.atlasSize)};
      const float tileRows = ${b.glsl.float(e.tileRows)};
      const vec3 atlasDimensions = vec3(${b.glsl.float(e.tileSize)}, ${b.glsl.float(e.tileSize)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${b.glsl.float(e.textureScale)}) * pos.xzy;

      //Pixel coordinates of point in the 3D data
      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));
      float f = fract(coord.z);
      float level = floor(coord.z);
      float tileY = floor(level / tileRows);
      float tileX = level - tileY * tileRows;

      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column
      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;
      vec2 pixel = coord.xy + offset;
      vec2 data = texture(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;

      return 1.0 - mix(data.x, data.y, f);
    }

    float getCloudMap(vec2 p){
      // Shift the texture center to origin to avoid seam artifacts
      vec2 uv = (${b.glsl.float(e.weatherMapScale)} * p) / ${b.glsl.float(e.atlasSize)} + 0.5;

      return texture(cloudShapeTexture, uv).a;
    }
    `);c.code.add(b.glsl`float clouds(vec3 p) {
float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));
if (cloud <= 0.0) {
return 0.0;
}
float cloudMap = getCloudMap(cloudSize * p.xy);
cloud = mix(cloud, min(2.0 * (coverage), 1.0) * cloudMap, min(2.0 * (1.0 - coverage), 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float shape = getCloudShape(8.0 * cloudSize * p, 0.0);
cloud = saturate(remap(cloud, smoothness * shape, 1.0, 0.0, 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);
cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * smoothstep(1.0, 0.25, heightFraction);
if (cloud <= 0.0) {
return 0.0;
}
return density * saturate(remap(cloud, 0.35 * smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));
}`);c.code.add(b.glsl`float HenyeyGreenstein(float g, float costh) {
return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));
}
float multipleOctaves(float extinction, float mu, float stepL) {
float attenuation = 1.0;
float contribution = 1.0;
float phaseAttenuation = 1.0;
float luminance = 0.0;
for (int i = 0; i < 4; i++) {
float phase = mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);
luminance += contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);
attenuation *= 0.2;
contribution *= 0.6;
phaseAttenuation *= 0.5;
}
return luminance;
}`);c.code.add(b.glsl`float lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
float beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`);c.code.add(b.glsl`float mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return 0.0;
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
float shading = 0.0;
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
float luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
shading += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return shading;
}`);c.main.add(b.glsl`if (coverage ==  0.0) {
fragColor = vec4(0.0, 1.0, 0.0, 1.0);
return;
}
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
bool hitsPlanet = rayDir.z < 0.0;
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(dot(rayDir, vec3(0, 0, 1))));
float totalTransmittance = 1.0;
float shading = 0.0;
if (hitsPlanet) {
shading = clamp(1.0 - cloudVariables.y, 0.6, 1.0) * (1.0 - hazeFactor);
totalTransmittance = hazeFactor;
fragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);
return;
}
float cloudDistance = cloudRadius + cloudStart;
float rayStartDistance = dot(viewPos, viewPos) - (cloudDistance * cloudDistance);
vec2 rayStartIntersect = sphereIntersect(viewPos, rayDir, rayStartDistance);
float rayEndDistance = dot(viewPos, viewPos) - ((cloudDistance + cloudHeight) * (cloudDistance + cloudHeight));
vec2 rayEndIntersect = sphereIntersect(viewPos, rayDir, rayEndDistance);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
vec3 sunDirection = normalize(vec3(0, 0, 1));
shading = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance);
shading = mix(clamp(1.0 - cloudVariables.y, 0.6, 1.0), shading, hazeFactor);
totalTransmittance = mix(0.0, totalTransmittance, hazeFactor);
fragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);`);return k}class q extends b.NoParameters{constructor(){super(...arguments);this.coverage=this.cloudHeight=this.smoothness=this.density=this.absorption=this.detailSize=this.cloudSize=this.cloudRadius=0;this.viewMatrix=r.create()}}const l=h("esri-mobile")?1024:2048,B=u.create();h=Object.freeze(Object.defineProperty({__proto__:null,CloudsPassParameters:q,build:n,cubeMapSize:l},Symbol.toStringTag,{value:"Module"}));g.Clouds=
h;g.CloudsPassParameters=q;g.build=n;g.cubeMapSize=l});