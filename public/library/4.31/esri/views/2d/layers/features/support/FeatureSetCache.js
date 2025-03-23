// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./StaticBitSet"],function(b,c){class d{constructor(a){this._valid=c.StaticBitSet.create(a);this._data=Array(a)}has(a){return this._valid.has(a)}set(a,e){this._valid.set(a);this._data[a]=e}get(a){return this._data[a]}}b.FeatureSetCache=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});