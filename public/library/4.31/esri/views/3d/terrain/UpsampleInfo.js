// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/libs/gl-matrix-2/factories/vec2f64"],function(a,b){class c{constructor(){this._offset=b.create();this.scale=0}get offset(){return this._offset}init(d,e,f,g){this.tile=d;this._offset[0]=e;this._offset[1]=f;this.scale=g}dispose(){this.tile=null;this._offset[0]=0;this.scale=this._offset[1]=0}}a.UpsampleInfo=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});