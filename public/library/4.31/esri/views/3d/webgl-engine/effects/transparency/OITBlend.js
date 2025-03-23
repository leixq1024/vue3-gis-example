// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/OITBlend.glsl","./OITBlendTechnique","../../../../webgl/enums"],function(c,e,d,f){class g{constructor(a){this._techniques=a;this._parameters=new e.OITBlendPassParameters;a.precompile(d.OITBlendTechnique)}blend(a,b,h,k){this._parameters.colorTexture=b.getTexture();this._parameters.alphaTexture=b.getTexture(f.ColorAttachment.COLOR_ATTACHMENT1);this._parameters.frontFaceTexture=h.getTexture();b=this._techniques.acquire(d.OITBlendTechnique);a.bindTechnique(b,k,
this._parameters);a.screen.draw();b.release()}}c.OITBlend=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});