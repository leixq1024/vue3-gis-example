// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../core/shaderTechnique/ReloadableShaderModule ../../core/shaderTechnique/ShaderTechnique ../../../../../chunks/OITBlend.glsl ../../../../webgl/renderState".split(" "),function(c,b,d,e,f,a){class g extends e.ShaderTechnique{constructor(h,k,l){super(h,k,new d.ReloadableShaderModule(f.OITBlend,()=>new Promise((m,n)=>c(["./OITBlend.glsl"],m,n))),l)}initializePipeline(){return a.makePipelineState({blending:a.premultipliedAlphaToPremultipliedAlpha,colorWrite:a.defaultColorWrite})}}
b.OITBlendTechnique=g;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});