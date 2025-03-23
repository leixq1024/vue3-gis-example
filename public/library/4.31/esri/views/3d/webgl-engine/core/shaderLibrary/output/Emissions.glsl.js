// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../ShaderOutput ../attributes/VertexTextureCoordinates.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/GLTextureMaterial".split(" "),function(b,l,m,n,p,f,q,r,g,t){b.EmissionSource=void 0;(function(a){a[a.None=0]="None";a[a.Value=1]="Value";a[a.Texture=2]="Texture";a[a.COUNT=3]="COUNT"})(b.EmissionSource||
(b.EmissionSource={}));class u extends t.GLEmissiveTexturePassParameters{}b.Emissions=function(a,d){if(l.isColorOrColorEmission(d.output)){var {emissionSource:h,hasEmissiveTextureTransform:v,bindType:k}=d,e=h===b.EmissionSource.Texture;e&&(a.include(m.VertexTextureCoordinates,d),a.fragment.uniforms.add(k===g.BindType.Pass?new r.Texture2DPassUniform("texEmission",c=>c.textureEmissive):new q.Texture2DDrawUniform("texEmission",c=>c.textureEmissive)));(d=h===b.EmissionSource.Value||e)&&a.fragment.uniforms.add(k===
g.BindType.Pass?new p.Float3PassUniform("emissionFactor",c=>c.emissiveFactor):new n.Float3DrawUniform("emissionFactor",c=>c.emissiveFactor));a.fragment.code.add(f.glsl`
    vec4 getEmissions() {
      vec4 emissions = ${d?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${f.If(e,`emissions *= textureLookup(texEmission, ${v?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}};b.EmissionsParameters=u;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});