// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./atmosphereUtils","./ChapmanApproximation.glsl","../webgl-engine/core/shaderModules/Float3PassUniform","../webgl-engine/core/shaderModules/interfaces"],function(e,d,f,g,a){e.ChapmanRaymarching=function(b,c){b.include(f.ChapmanApproximation);b.uniforms.add(new g.Float3PassUniform("cameraPosition",(k,h)=>h.camera.eye));b.constants.add("betaRayleigh","vec3",d.betaRayleigh);b.constants.add("betaCombined","vec3",d.betaCombined);b.constants.add("betaMie","float",d.betaMie);b.code.add(a.glsl`
    vec3 raymarchAtmosphere(vec3 cameraPos, vec3 rayDir, vec3 lightDir, float terrainDepth) {
      vec4 ray = planetIntersect(cameraPos, rayDir);
      if(ray.x == 1.0) {
        return vec3(0);
      }
      ${a.If(c,"if (terrainDepth !\x3d -1.0) { ray.w \x3d terrainDepth; }")}

      vec3 samplePoint = cameraPos + rayDir * ray.w;
      float multiplier = ray.y == 1.0 ? -1.0 : 1.0;

      vec3 scattering = vec3(0);
      float scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
      float lastOpticalDepth = getOpticalDepth(samplePoint, rayDir, scaleFract);
      float stepSize = (ray.w - ray.z) / ${a.glsl.float(6)};

      for (int i = 0; i < ${a.glsl.int(6)}; i++) {
        samplePoint -= stepSize * rayDir;
        scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
        float opticalDepth = multiplier * getOpticalDepth(samplePoint, rayDir * multiplier, scaleFract);

        if (i > 0) {
          scattering *= exp(-(mix(betaCombined, betaRayleigh, 0.5) + betaMie) * max(0.0, (opticalDepth - lastOpticalDepth)));
          ${a.If(!c,"scattering *\x3d mix(2.5, 1.0, clamp((length(cameraPos) - radii[0]) / 50e3, 0.0, 1.0))")};
        }

        if (dot(normalize(samplePoint), lightDir) > -0.3) {
          float scale = exp(-scaleFract);
          float lightDepth = getOpticalDepth(samplePoint, lightDir, scaleFract);
          scattering += scale * exp(-(betaCombined + betaMie) * lightDepth);
          ${a.If(!c,"scattering +\x3d scale * exp(-(0.25 * betaCombined ) * lightDepth);")}
        }
        lastOpticalDepth = opticalDepth;
      }

      float mu = dot(rayDir, lightDir);
      float mumu = 1.0 + mu * mu;

      float phaseRayleigh = 0.0596831 * mumu;
      ${c?"return 3.0 * scattering * stepSize * phaseRayleigh * betaRayleigh;":a.glsl`const float g = 0.8;
             const float gg = g * g;
             float phaseMie = 0.1193662 * ((1.0 - gg) * mumu) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg));
             phaseMie = clamp(phaseMie, 0.0, 128.0);
             return 3.0 * scattering * stepSize * (phaseRayleigh * betaRayleigh + 0.025 * phaseMie * betaMie);`}
    }`)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});