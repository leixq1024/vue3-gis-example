// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){class f{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(a,b){return this._outer.get(a)?.get(b)}getInner(a){return this._outer.get(a)}set(a,b,c){const e=this._outer.get(a);e?e.set(b,c):this._outer.set(a,new Map([[b,c]]))}delete(a,b){const c=this._outer.get(a);c&&(c.delete(b),0===c.size&&this._outer.delete(a))}forEach(a){this._outer.forEach((b,c)=>a(b,c))}forAll(a){for(const b of this._outer.values())for(const c of b.values())a(c)}}
d.NestedMap=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});