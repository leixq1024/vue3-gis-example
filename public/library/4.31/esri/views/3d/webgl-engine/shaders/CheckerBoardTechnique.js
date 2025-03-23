// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/OITPass ../lib/OrderIndependentTransparency ../../../../chunks/CheckerBoard.glsl ../../../webgl/renderState".split(" "),function(l,g,m,n,h,b,p,k){class q extends n.ShaderTechnique{constructor(c,a,d){super(c,a,new m.ReloadableShaderModule(p.CheckerBoard,()=>new Promise((e,f)=>l(["./CheckerBoard.glsl"],e,f))),d)}initializePipeline(c){const {oitPass:a,transparent:d,polygonOffset:e,output:f}=
c,r=a===h.OITPass.NONE,t=a===h.OITPass.FrontFace;return k.makePipelineState({blending:d?b.blending(a):null,depthTest:{func:b.oitDepthTest(a)},depthWrite:b.depthWrite(c),drawBuffers:b.getDrawBuffers(a,f),colorWrite:k.defaultColorWrite,polygonOffset:r||t?e?u:null:{factor:-1,units:-25}})}}const u={factor:0,units:-25};g.CheckerBoardTechnique=q;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});