// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../../../../chunks/Viewshed.glsl ../../../webgl/renderState".split(" "),function(c,b,d,e,f,a){class g extends e.ShaderTechnique{constructor(h,k,l){super(h,k,new d.ReloadableShaderModule(f.Viewshed,()=>new Promise((m,n)=>c(["./Viewshed.glsl"],m,n))),l)}initializePipeline(){return a.makePipelineState({colorWrite:a.defaultColorWrite,blending:a.premultipliedAlphaToPremultipliedAlpha})}}b.ViewshedTechnique=
g;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});