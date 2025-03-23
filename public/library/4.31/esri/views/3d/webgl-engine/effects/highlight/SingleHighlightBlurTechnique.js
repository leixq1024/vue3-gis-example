// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../core/shaderTechnique/ReloadableShaderModule ../../core/shaderTechnique/ShaderTechnique ../../../../../chunks/SingleHighlightBlur.glsl ../../../../webgl/renderState".split(" "),function(c,a,d,e,f,b){class g extends e.ShaderTechnique{constructor(h,k,l){super(h,k,new d.ReloadableShaderModule(f.SingleHighlightBlur,()=>new Promise((m,n)=>c(["../../shaders/SingleHighlightBlur.glsl"],m,n))),l)}initializePipeline(){return b.makePipelineState({colorWrite:b.defaultColorWrite})}}
a.SingleHighlightBlurTechnique=g;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});