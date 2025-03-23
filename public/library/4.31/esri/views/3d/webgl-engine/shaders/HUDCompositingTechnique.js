// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../../../../chunks/HUDCompositing.glsl ../../../webgl/renderState".split(" "),function(b,a,c,d,e,f){class g extends d.ShaderTechnique{constructor(h,k,l){super(h,k,new c.ReloadableShaderModule(e.HUDCompositing,()=>new Promise((m,n)=>b(["./HUDCompositing.glsl"],m,n))),l)}initializePipeline(){return f.makePipelineState({colorWrite:{r:!1,g:!0,b:!1,a:!1}})}}a.HUDCompositingTechnique=g;Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"})});