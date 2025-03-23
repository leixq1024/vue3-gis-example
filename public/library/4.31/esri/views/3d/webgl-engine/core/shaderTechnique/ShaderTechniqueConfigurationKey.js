// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/arrayUtils"],function(b,c){class d{constructor(a){this._bits=[...a]}equals(a){return c.equals(this._bits,a.bits)}get code(){this._code??(this._code=String.fromCharCode(...this._bits));return this._code}get bits(){return this._bits}}b.ShaderTechniqueConfigurationKey=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});