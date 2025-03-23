// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(){this._inputs=new Map}set(a,d){this._inputs.set(a,d)}get(a){return this._inputs.get(a)}has(a){return this._inputs.has(a)}release(a){this._inputs.get(a)?.release()&&this._inputs.delete(a)}}b.RenderPluginInput=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});