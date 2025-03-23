// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){class b{constructor(c,d){this._module=c;this._load=d}get(){return this._module}async reload(){return this._module=await this._load()}}a.ReloadableShaderModule=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});