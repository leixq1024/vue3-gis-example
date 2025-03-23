// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../../../../chunks/LineCallout.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(f,e,g,h,k,a,b){class l extends h.ShaderTechnique{constructor(c,d,m){super(c,d,new g.ReloadableShaderModule(k.LineCallout,()=>new Promise((n,p)=>f(["./LineCallout.glsl"],n,p))),m)}initializePipeline(c){const d={func:c.terrainDepthTest?a.CompareFunction.ALWAYS:a.CompareFunction.LESS};return b.makePipelineState(c.hudDepth?
{depthTest:d,depthWrite:b.defaultDepthWrite}:{blending:b.separateBlendingParams(a.BlendFactor.ONE,a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:d,colorWrite:b.defaultColorWrite})}}e.LineCalloutTechnique=l;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});