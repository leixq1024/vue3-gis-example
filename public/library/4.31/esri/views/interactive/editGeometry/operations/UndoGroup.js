// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){const c=Symbol();class e{constructor(a){this._operations=[];this._closed=!1;this[f]=!0;a&&(this._operations=a,this._closed=!0)}close(){this._closed=!0}apply(){for(const a of this._operations)a.apply()}undo(){for(let a=this._operations.length-1;0<=a;a--)this._operations[a].undo()}accumulate(a){if(this._closed)return!1;const d=this._operations.length?this._operations[this._operations.length-1]:null;d&&d.accumulate(a)||(this._operations.push(a),a.apply());return!0}}var f=
c;b.UndoGroup=e;b.isUndoGroup=function(a){return c in a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});