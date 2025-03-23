// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ./ShadowCastAccumulate.glsl ../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration".split(" "),
function(g,h,r,t,u,d,e,v,w,x,k){function l(b){const f=new v.ShaderBuilder,c=f.fragment;f.include(t.CameraSpace);f.include(r.ScreenSpacePass);const {visualization:m,bandsEnabled:n}=b;c.constants.add("inverseSampleValue","float",x.ShadowCastMaxSamples);c.uniforms.add(new w.Texture2DPassUniform("shadowCastMap",a=>a.shadowCastMap),new d.FloatPassUniform("sampleScale",a=>a.sampleScale),new d.FloatPassUniform("opacityFromElevation",a=>a.opacityFromElevation),new u.Float4PassUniform("uColor",a=>a.color));
b=m===k.ShadowCastVisualization.Gradient;const p=m===k.ShadowCastVisualization.Threshold;b&&n?c.uniforms.add(new d.FloatPassUniform("bandSize",a=>a.bandSize)):p&&c.uniforms.add(new d.FloatPassUniform("threshold",a=>a.threshold));c.main.add(e.glsl`
    float record = texture(shadowCastMap, uv).r;
    float pixelSamples = record * inverseSampleValue;

    fragColor = vec4(0.0);
    if (pixelSamples < 1.0) {
      return;
    }

    float strength = pixelSamples * sampleScale;
    ${p?e.glsl`if (strength <= threshold) return;`:""}
    ${b&&n?e.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}
    fragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${b?"* strength":""});
  `);return f}class q extends e.NoParameters{constructor(b){super();this._data=b;this.sampleScale=0;this.opacityFromElevation=1;this.color=h.clone(y);this.bandSize=.1;this.threshold=.5}get shadowCastMap(){return this._data.shadowCastTexture}}const y=h.fromValues(.01,0,.25,1),z=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:q,build:l},Symbol.toStringTag,{value:"Module"}));g.ShadowCastVisualize=z;g.ShadowCastVisualizePassParameters=q;g.build=l});