// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../shaderGraph/techniques/blend/BlendTechnique"],function(a,c){class d{constructor(){this._blendTechnique=new c.BlendTechnique}dispose(b){this._blendTechnique?.shutdown()}draw(b,e,f,g,h){this._blendTechnique.render(b,{colorTexture:e,config:{opacity:h,samplingMode:f},blendMode:g})}}a.BlendEffect=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});