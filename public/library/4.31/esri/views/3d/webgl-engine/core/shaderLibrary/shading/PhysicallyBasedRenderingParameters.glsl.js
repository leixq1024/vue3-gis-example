// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../attributes/VertexTextureCoordinates.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/GLTextureMaterial ../../../materials/pbrUtils".split(" "),function(b,q,r,t,d,n,p,k,u,v){b.PBRMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Normal=1]="Normal";a[a.Schematic=2]="Schematic";a[a.Water=3]=
"Water";a[a.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh";a[a.Simplified=5]="Simplified";a[a.TerrainWithWater=6]="TerrainWithWater";a[a.COUNT=7]="COUNT"})(b.PBRMode||(b.PBRMode={}));class w extends u.GLTextureMaterialBindParameters{constructor(){super(...arguments);this.mrrFactors=v.schematicMRRFactors}}b.PBRRenderingParameters=w;b.PhysicallyBasedRenderingParameters=function(a,l){const f=l.pbrMode,e=a.fragment;if(f!==b.PBRMode.Schematic&&f!==b.PBRMode.Disabled&&f!==b.PBRMode.Normal)e.code.add(d.glsl`void applyPBRFactors() {}`);
else if(f===b.PBRMode.Disabled)e.code.add(d.glsl`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);else if(f===b.PBRMode.Schematic)e.code.add(d.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);else{var {hasMetallicRoughnessTexture:h,hasMetallicRoughnessTextureTransform:x,hasOcclusionTexture:g,hasOcclusionTextureTransform:y,bindType:m}=l;(h||g)&&a.include(q.VertexTextureCoordinates,l);e.code.add(d.glsl`vec3 mrr;
float occlusion;`);h&&e.uniforms.add(m===k.BindType.Pass?new p.Texture2DPassUniform("texMetallicRoughness",c=>c.textureMetallicRoughness):new n.Texture2DDrawUniform("texMetallicRoughness",c=>c.textureMetallicRoughness));g&&e.uniforms.add(m===k.BindType.Pass?new p.Texture2DPassUniform("texOcclusion",c=>c.textureOcclusion):new n.Texture2DDrawUniform("texOcclusion",c=>c.textureOcclusion));e.uniforms.add(m===k.BindType.Pass?new t.Float3PassUniform("mrrFactors",c=>c.mrrFactors):new r.Float3DrawUniform("mrrFactors",
c=>c.mrrFactors));e.code.add(d.glsl`
    ${d.If(h,d.glsl`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${d.If(g,"void applyOcclusion(vec2 uv) { occlusion *\x3d textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${g?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${d.If(h,`applyMetallicRoughness(${x?"metallicRoughnessUV":"vuv0"});`)}
      ${d.If(g,`applyOcclusion(${y?"occlusionUV":"vuv0"});`)}
    }
  `)}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});